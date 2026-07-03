import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

export const ArduinoUnoPins = {
  // Top Headers
  "D13": { x: 30, y: 15, direction: "top" },
  "D12": { x: 45, y: 15, direction: "top" },
  "D11": { x: 60, y: 15, direction: "top" },
  "D10": { x: 75, y: 15, direction: "top" },
  "D9": { x: 90, y: 15, direction: "top" },
  "D8": { x: 105, y: 15, direction: "top" },
  "D7": { x: 120, y: 15, direction: "top" },
  "D6": { x: 135, y: 15, direction: "top" },
  "D5": { x: 150, y: 15, direction: "top" },
  "D4": { x: 165, y: 15, direction: "top" },
  "D3": { x: 180, y: 15, direction: "top" },
  "D2": { x: 195, y: 15, direction: "top" },
  "GND1": { x: 210, y: 15, direction: "top" },
  "AREF": { x: 225, y: 15, direction: "top" },
  "SDA": { x: 240, y: 15, direction: "top" },
  "SCL": { x: 255, y: 15, direction: "top" },

  // Bottom Headers
  "Reset": { x: 30, y: 165, direction: "bottom" },
  "3.3V": { x: 45, y: 165, direction: "bottom" },
  "5V": { x: 60, y: 165, direction: "bottom" },
  "GND": { x: 75, y: 165, direction: "bottom" },
  "GND2": { x: 90, y: 165, direction: "bottom" },
  "VIN": { x: 105, y: 165, direction: "bottom" },
  "A0": { x: 135, y: 165, direction: "bottom" },
  "A1": { x: 150, y: 165, direction: "bottom" },
  "A2": { x: 165, y: 165, direction: "bottom" },
  "A3": { x: 180, y: 165, direction: "bottom" },
  "A4": { x: 195, y: 165, direction: "bottom" },
  "A5": { x: 210, y: 165, direction: "bottom" },
} as const;

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
