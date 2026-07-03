import React from "react";
import { SymbolProps } from "./ArduinoTypes";
import { ArduinoUnoPins } from "./ArduinoPins";

export const ArduinoUno: React.FC<SymbolProps> = ({
  id,
  label,
  selected,
  hovered,
  onSelect,
}) => {
  return (
    <g
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.();
      }}
      className="cursor-pointer select-none"
    >
      {/* Outer Bounding Box (Glow on select/hover) */}
      <rect
        x="10"
        y="15"
        width="260"
        height="150"
        rx="8"
        className={`fill-card stroke-2 transition-all ${
          selected
            ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            : hovered
            ? "stroke-brand/60"
            : "stroke-border"
        }`}
      />

      {/* Internal Board Details / Label */}
      <rect x="18" y="23" width="244" height="134" rx="4" className="fill-secondary/20 stroke-none" />
      
      {/* Board Brand Header */}
      <text
        x="140"
        y="75"
        textAnchor="middle"
        className="font-sans text-sm font-bold fill-foreground"
      >
        ARDUINO UNO
      </text>

      {/* Component ID Label */}
      <text
        x="140"
        y="95"
        textAnchor="middle"
        className="font-mono text-xs font-semibold fill-brand/80"
      >
        {id} {label ? `(${label})` : ""}
      </text>

      {/* Top Pins (Digital) */}
      {Object.entries(ArduinoUnoPins)
        .filter(([_, p]) => p.direction === "top")
        .map(([name, pin]) => (
          <g key={name}>
            <line
              x1={pin.x}
              y1={pin.y}
              x2={pin.x}
              y2={pin.y + 10}
              className="stroke-muted-foreground stroke-[1.5]"
            />
            <circle
              cx={pin.x}
              cy={pin.y}
              r="3.5"
              className="fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition"
            />
            <text
              x={pin.x}
              y={pin.y + 22}
              textAnchor="middle"
              className="font-mono text-[8px] font-semibold fill-muted-foreground"
            >
              {name.replace(/\d+$/, "")}
            </text>
          </g>
        ))}

      {/* Bottom Pins (Power/Analog) */}
      {Object.entries(ArduinoUnoPins)
        .filter(([_, p]) => p.direction === "bottom")
        .map(([name, pin]) => (
          <g key={name}>
            <line
              x1={pin.x}
              y1={pin.y}
              x2={pin.x}
              y2={pin.y - 10}
              className="stroke-muted-foreground stroke-[1.5]"
            />
            <circle
              cx={pin.x}
              cy={pin.y}
              r="3.5"
              className="fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition"
            />
            <text
              x={pin.x}
              y={pin.y - 20}
              textAnchor="middle"
              className="font-mono text-[8px] font-semibold fill-muted-foreground"
            >
              {name.replace(/\d+$/, "")}
            </text>
          </g>
        ))}
    </g>
  );
};
