import React, { useRef, useState, useEffect } from "react";
import { useEditor } from "./EditorContext";
import { ComponentRenderer } from "@/components/renderer/ComponentRenderer";
import { WireRenderer } from "@/components/renderer/WireRenderer";
import { ConnectionRenderer } from "@/components/renderer/ConnectionRenderer";
import { LabelRenderer } from "@/components/renderer/LabelRenderer";
import { snapToGrid } from "@/utils/grid";
import { normalizeType, COMPONENT_DIMENSIONS } from "@/components/renderer/PinMap";
import { useKeyboardShortcuts } from "./hooks";
import { Minimap } from "./Minimap";
import { type DragSelectionBox, type Point } from "./types";

export const Canvas: React.FC = () => {
  useKeyboardShortcuts();

  const {
    components,
    connections,
    pan,
    setPan,
    zoom,
    setZoom,
    toolMode,
    setToolMode,
    selectedCompIds,
    setSelectedCompIds,
    selectedWireIndex,
    setSelectedWireIndex,
    showGrid,
    showLabels,
    searchQuery,
    hoveredCompId,
    setHoveredCompId,
    hoveredWireIndex,
    setHoveredWireIndex,
    updateComponentPosition,
    saveHistoryState,
  } = useEditor();

  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const dragStart = useRef<Point>({ x: 0, y: 0 });
  const panStart = useRef<Point>({ x: 0, y: 0 });
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const dragComponentStart = useRef<Point>({ x: 0, y: 0 });
  
  // Selection box state
  const [selectionBox, setSelectionBox] = useState<DragSelectionBox | null>(null);

  // Monitor Spacebar key down/up for fast panning
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " && document.activeElement?.tagName.toLowerCase() !== "input") {
        e.preventDefault();
        setIsSpacePressed(true);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === " ") {
        setIsSpacePressed(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Screen-to-SVG coordinates resolver
  const getCoordinatesFromEvent = (clientX: number, clientY: number) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const rect = svgRef.current.getBoundingClientRect();
    return {
      x: (clientX - rect.left - pan.x) / zoom,
      y: (clientY - rect.top - pan.y) / zoom,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    
    // Middle Mouse Click (e.button === 1) or Spacebar + Left Click
    const forcePan = e.button === 1 || isSpacePressed || toolMode === "pan";
    
    if (forcePan) {
      setIsPanning(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      panStart.current = { ...pan };
      e.preventDefault();
      return;
    }

    if (e.button === 0) {
      const clickCoords = getCoordinatesFromEvent(e.clientX, e.clientY);
      
      // Check if clicking on empty space to start selection box
      const target = e.target as SVGElement;
      const isCanvasBackground = target.tagName === "svg" || target.id === "grid-rect";
      
      if (isCanvasBackground) {
        // Clear selections unless shift is pressed
        if (!e.shiftKey) {
          setSelectedCompIds(new Set());
          setSelectedWireIndex(null);
        }
        
        setSelectionBox({
          startX: clickCoords.x,
          startY: clickCoords.y,
          currentX: clickCoords.x,
          currentY: clickCoords.y,
        });
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (isPanning) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPan({
        x: panStart.current.x + dx,
        y: panStart.current.y + dy,
      });
      return;
    }

    const currentCoords = getCoordinatesFromEvent(e.clientX, e.clientY);

    // Handle drag component movement
    if (activeDragId) {
      const dx = currentCoords.x - dragComponentStart.current.x;
      const dy = currentCoords.y - dragComponentStart.current.y;
      
      // Lock to 20px grid snaps
      const targetX = snapToGrid(dragComponentStart.current.x + dx, 20);
      const targetY = snapToGrid(dragComponentStart.current.y + dy, 20);
      
      updateComponentPosition(activeDragId, targetX, targetY);
      return;
    }

    // Handle selection box resizing
    if (selectionBox) {
      setSelectionBox((prev) =>
        prev
          ? {
              ...prev,
              currentX: currentCoords.x,
              currentY: currentCoords.y,
            }
          : null
      );
    }
  };

  const handleMouseUp = (e: React.MouseEvent<SVGSVGElement>) => {
    setIsPanning(false);
    setActiveDragId(null);

    // Resolve selection box components
    if (selectionBox) {
      const x1 = Math.min(selectionBox.startX, selectionBox.currentX);
      const x2 = Math.max(selectionBox.startX, selectionBox.currentX);
      const y1 = Math.min(selectionBox.startY, selectionBox.currentY);
      const y2 = Math.max(selectionBox.startY, selectionBox.currentY);

      // Find components inside selection rectangle
      const newlySelected = new Set<string>(e.shiftKey ? [...selectedCompIds] : []);
      
      components.forEach((c) => {
        const norm = normalizeType(c.type);
        const dims = COMPONENT_DIMENSIONS[norm] || { width: 80, height: 50 };
        const cx1 = c.x;
        const cx2 = c.x + dims.width;
        const cy1 = c.y;
        const cy2 = c.y + dims.height;

        // Bounding box overlaps with selection box
        const overlaps = cx1 < x2 && cx2 > x1 && cy1 < y2 && cy2 > y1;
        if (overlaps) {
          if (e.shiftKey && selectedCompIds.has(c.id)) {
            newlySelected.delete(c.id);
          } else {
            newlySelected.add(c.id);
          }
        }
      });

      setSelectedCompIds(newlySelected);
      setSelectionBox(null);
    }
  };

  const handleComponentMouseDown = (e: React.MouseEvent, cId: string, cx: number, cy: number) => {
    e.stopPropagation();
    if (isSpacePressed || toolMode === "pan") return;

    saveHistoryState();
    setActiveDragId(cId);
    const clickCoords = getCoordinatesFromEvent(e.clientX, e.clientY);
    dragComponentStart.current = { x: cx, y: cy };
    
    // Select component
    if (e.shiftKey) {
      const copy = new Set(selectedCompIds);
      if (copy.has(cId)) {
        copy.delete(cId);
      } else {
        copy.add(cId);
      }
      setSelectedCompIds(copy);
    } else {
      setSelectedCompIds(new Set([cId]));
    }
    setSelectedWireIndex(null);
  };

  const handleWireClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    if (isSpacePressed || toolMode === "pan") return;
    setSelectedWireIndex(idx);
    setSelectedCompIds(new Set());
  };

  // Zooming centered on mouse scroll
  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const zoomFactor = 1.1;
    const nextZoom = e.deltaY < 0 ? zoom * zoomFactor : zoom / zoomFactor;
    
    // Limit zoom levels
    const boundedZoom = Math.max(0.2, Math.min(4, nextZoom));
    
    // Recalculate panning to zoom on mouse cursor
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const svgX = (mouseX - pan.x) / zoom;
      const svgY = (mouseY - pan.y) / zoom;

      setPan({
        x: mouseX - svgX * boundedZoom,
        y: mouseY - svgY * boundedZoom,
      });
      setZoom(boundedZoom);
    }
  };

  const isSearchMatching = (c: any) => {
    if (!searchQuery) return false;
    const query = searchQuery.toLowerCase();
    return c.id.toLowerCase().includes(query) || c.type.toLowerCase().includes(query);
  };

  return (
    <div className={`relative flex-1 bg-slate-900/5 dark:bg-slate-950/15 overflow-hidden ${
      isSpacePressed || toolMode === "pan" ? "cursor-grab active:cursor-grabbing" : "cursor-default"
    }`}>
      
      <svg
        ref={svgRef}
        id="schematic-svg"
        className="w-full h-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      >
        <defs>
          {showGrid && (
            <pattern id="canvas-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-muted-foreground/5 dark:stroke-muted-foreground/[0.04]" strokeWidth="1" />
            </pattern>
          )}
          <style>
            {`
              @keyframes electricity-flow {
                to {
                  stroke-dashoffset: -20;
                }
              }
            `}
          </style>
        </defs>

        {/* 1. Backdrop Grid */}
        {showGrid && <rect id="grid-rect" width="100%" height="100%" fill="url(#canvas-grid)" className="pointer-events-all" />}

        {/* 2. Scaled Workspace */}
        <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
          
          {/* Wires */}
          {connections.map((conn, idx) => (
            <g key={`wire-${conn.from}-${conn.to}-${idx}`} onClick={(e) => handleWireClick(e, idx)}>
              <WireRenderer
                connection={conn}
                components={components}
                hovered={hoveredWireIndex === idx}
                selected={selectedWireIndex === idx}
                onHover={(h) => setHoveredWireIndex(h ? idx : null)}
              />
            </g>
          ))}

          {/* Connection Solder Dots */}
          <ConnectionRenderer connections={connections} components={components} />

          {/* Component Symbols */}
          {components.map((c) => (
            <g
              key={c.id}
              onMouseDown={(e) => handleComponentMouseDown(e, c.id, c.x, c.y)}
              className="cursor-move"
            >
              <ComponentRenderer
                component={c}
                selected={selectedCompIds.has(c.id)}
                hovered={hoveredCompId === c.id}
                highlighted={isSearchMatching(c)} // Highlighting search result match
                onSelect={() => {}} // Controlled via mousedown to support dragging
                onHover={(h) => setHoveredCompId(h ? c.id : null)}
              />
            </g>
          ))}

          {/* Labels */}
          {showLabels && <LabelRenderer components={components} />}

          {/* Drag Selection Box Rect */}
          {selectionBox && (
            <rect
              x={Math.min(selectionBox.startX, selectionBox.currentX)}
              y={Math.min(selectionBox.startY, selectionBox.currentY)}
              width={Math.abs(selectionBox.currentX - selectionBox.startX)}
              height={Math.abs(selectionBox.currentY - selectionBox.startY)}
              fill="rgba(147, 51, 234, 0.08)"
              className="stroke-brand stroke-1 stroke-dash"
              strokeDasharray="4,4"
            />
          )}
        </g>
      </svg>

      {/* Minimap overlay box */}
      <Minimap />
    </div>
  );
};
