import React from "react";
import { type CircuitConnection } from "@/types/Connection";
import { type CircuitComponent } from "@/types/Component";
import { getRotatedPinConfig } from "@/utils/pinResolver";
import { routeWire, serializePath } from "@/utils/wireRouting";

interface WireRendererProps {
  connection: CircuitConnection;
  components: CircuitComponent[];
  hovered?: boolean;
  selected?: boolean;
  onHover?: (hovered: boolean) => void;
  animate?: boolean; // Enable current pulse flows!
}

export const WireRenderer: React.FC<WireRendererProps> = React.memo(({
  connection,
  components,
  hovered,
  selected,
  onHover,
  animate = true,
}) => {
  const [fromId, fromPin] = connection.from.split(":");
  const [toId, toPin] = connection.to.split(":");

  const compFrom = components.find((c) => c.id === fromId);
  const compTo = components.find((c) => c.id === toId);

  if (!compFrom || !compTo) return null;

  // Compute rotated coordinates
  const pinFrom = getRotatedPinConfig(compFrom, fromPin);
  const pinTo = getRotatedPinConfig(compTo, toPin);

  const points = routeWire(
    pinFrom.x,
    pinFrom.y,
    pinFrom.direction,
    pinTo.x,
    pinTo.y,
    pinTo.direction
  );

  const pathStr = serializePath(points);

  // Wire styling
  const isVcc = fromPin.toUpperCase().includes("VCC") || fromPin.includes("5V") || fromPin.includes("3.3V") || toPin.toUpperCase().includes("VCC") || toPin.includes("5V") || toPin.includes("3.3V");
  const isGnd = fromPin.toUpperCase().includes("GND") || toPin.toUpperCase().includes("GND");
  
  let wireColor = "stroke-muted-foreground/60 dark:stroke-muted-foreground/45";
  if (isVcc) wireColor = "stroke-red-500/80 dark:stroke-red-500/60";
  else if (isGnd) wireColor = "stroke-blue-500/80 dark:stroke-blue-500/60";

  const activeColor = selected
    ? "stroke-brand"
    : hovered
    ? "stroke-brand/70"
    : wireColor;

  return (
    <g
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      className="group transition-all"
    >
      {/* Thick interactive hitbox */}
      <path
        d={pathStr}
        fill="none"
        className="fill-none stroke-transparent stroke-[12] cursor-pointer"
      />

      {/* Glow path */}
      <path
        d={pathStr}
        fill="none"
        className={`fill-none stroke-[5] opacity-0 transition-opacity duration-200 group-hover:opacity-40 ${
          selected ? "opacity-60 stroke-brand" : "stroke-brand/60"
        }`}
      />

      {/* Main wire line */}
      <path
        d={pathStr}
        fill="none"
        className={`fill-none stroke-[2] transition-colors duration-150 ${activeColor}`}
      />

      {/* Current flow / pulse animation */}
      {animate && (
        <path
          d={pathStr}
          fill="none"
          className={`fill-none stroke-[1.5] stroke-dasharray stroke-white/50 opacity-0 group-hover:opacity-100 ${
            selected ? "opacity-100" : ""
          }`}
          strokeDasharray="6,12"
          style={{
            animation: "current-flow 1.5s linear infinite",
          }}
        />
      )}

      {/* Pin contact dots */}
      <circle
        cx={pinFrom.x}
        cy={pinFrom.y}
        r="3"
        className={`transition-colors duration-150 ${
          selected || hovered ? "fill-brand" : "fill-card stroke-muted-foreground stroke-1"
        }`}
      />
      <circle
        cx={pinTo.x}
        cy={pinTo.y}
        r="3"
        className={`transition-colors duration-150 ${
          selected || hovered ? "fill-brand" : "fill-card stroke-muted-foreground stroke-1"
        }`}
      />
    </g>
  );
});

WireRenderer.displayName = "WireRenderer";
