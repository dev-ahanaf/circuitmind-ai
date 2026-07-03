import React, { useRef, useEffect, useState } from "react";
import { useEditor } from "./EditorContext";
import { normalizeType, COMPONENT_DIMENSIONS } from "@/components/renderer/PinMap";
import { type Point } from "./types";

export const Minimap: React.FC = () => {
  const { components, pan, setPan, zoom } = useEditor();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Map settings
  const mapWidth = 140;
  const mapHeight = 90;
  const virtualWidth = 1000;
  const virtualHeight = 700;

  const scaleX = mapWidth / virtualWidth;
  const scaleY = mapHeight / virtualHeight;

  // Track parent SVG dimensions
  const [svgSize, setSvgSize] = useState({ w: 800, h: 500 });

  useEffect(() => {
    const updateSize = () => {
      const svg = document.getElementById("schematic-svg");
      if (svg) {
        setSvgSize({
          w: svg.clientWidth || 800,
          h: svg.clientHeight || 500,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Compute active viewport boundaries inside virtual space
  const viewportX = -pan.x / zoom;
  const viewportY = -pan.y / zoom;
  const viewportW = svgSize.w / zoom;
  const viewportH = svgSize.h / zoom;

  // Map mouse clicks inside the minimap to pan coordinates
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const targetVirtualX = clickX / scaleX;
    const targetVirtualY = clickY / scaleY;

    // Center viewport on click
    setPan({
      x: svgSize.w / 2 - targetVirtualX * zoom,
      y: svgSize.h / 2 - targetVirtualY * zoom,
    });
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return; // Only pan on active drag hold
    handleMapClick(e);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMapClick}
      onMouseMove={handleDrag}
      className="absolute bottom-4 right-4 z-10 w-[140px] h-[90px] rounded-lg border border-border/80 bg-background/95 shadow-lg select-none cursor-crosshair overflow-hidden backdrop-blur-md transition-opacity hover:opacity-100 opacity-90"
      title="Click or drag to navigate workspace"
    >
      <svg width={mapWidth} height={mapHeight} className="bg-muted/10">
        {/* Render simplified component representations */}
        {components.map((c) => {
          const norm = normalizeType(c.type);
          const dims = COMPONENT_DIMENSIONS[norm] || { width: 80, height: 50 };
          return (
            <rect
              key={`mini-${c.id}`}
              x={c.x * scaleX}
              y={c.y * scaleY}
              width={dims.width * scaleX}
              height={dims.height * scaleY}
              className="fill-muted-foreground/30 stroke-none"
              rx="1.5"
            />
          );
        })}

        {/* Viewport tracking frame */}
        <rect
          x={Math.max(0, viewportX * scaleX)}
          y={Math.max(0, viewportY * scaleY)}
          width={Math.min(mapWidth, viewportW * scaleX)}
          height={Math.min(mapHeight, viewportH * scaleY)}
          fill="none"
          className="stroke-brand/70 stroke-[1.5]"
          rx="1"
        />
      </svg>
    </div>
  );
};
