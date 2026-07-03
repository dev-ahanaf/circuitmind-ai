import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// LCD 16x2 display module schematic symbol
export const LCD16x2Pins = {
  "VSS": { x: 20, y: 15, direction: "top" },
  "VDD": { x: 30, y: 15, direction: "top" },
  "VO": { x: 40, y: 15, direction: "top" },
  "RS": { x: 50, y: 15, direction: "top" },
  "RW": { x: 60, y: 15, direction: "top" },
  "E": { x: 70, y: 15, direction: "top" },
  "D0": { x: 80, y: 15, direction: "top" },
  "D1": { x: 90, y: 15, direction: "top" },
  "D2": { x: 100, y: 15, direction: "top" },
  "D3": { x: 110, y: 15, direction: "top" },
  "D4": { x: 120, y: 15, direction: "top" },
  "D5": { x: 130, y: 15, direction: "top" },
  "D6": { x: 140, y: 15, direction: "top" },
  "D7": { x: 150, y: 15, direction: "top" },
  "A": { x: 160, y: 15, direction: "top" },
  "K": { x: 170, y: 15, direction: "top" },
} as const;

export const LCD16x2: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect
        x="15"
        y="15"
        width="160"
        height="95"
        rx="6"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      {/* LCD Screen Display */}
      <rect x="25" y="38" width="140" height="60" rx="3" className="fill-secondary/10 stroke-muted-foreground stroke-[1.5]" />
      
      {/* Screen text simulation lines */}
      <text x="32" y="58" className="font-mono text-[9px] fill-muted-foreground font-semibold">Row 1: Hello World!</text>
      <text x="32" y="78" className="font-mono text-[9px] fill-muted-foreground font-semibold">Row 2: EEE Project</text>

      {/* Pins */}
      {Object.entries(LCD16x2Pins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x} y2={pin.y + 10} className="stroke-muted-foreground stroke-1" />
          <circle cx={pin.x} cy={pin.y} r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
          <text x={pin.x} y={pin.y + 20} textAnchor="middle" className="font-mono text-[6px] fill-muted-foreground">{name}</text>
        </g>
      ))}

      <text x="95" y="105" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
    </g>
  );
};

// OLED I2C Display module
export const OLEDPins = {
  "GND": { x: 20, y: 15, direction: "top" },
  "VCC": { x: 35, y: 15, direction: "top" },
  "SCL": { x: 50, y: 15, direction: "top" },
  "SDA": { x: 65, y: 15, direction: "top" },
} as const;

export const OLED: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect
        x="15"
        y="15"
        width="55"
        height="65"
        rx="6"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      {/* Screen */}
      <rect x="20" y="38" width="45" height="35" rx="2" className="fill-secondary/15 stroke-muted-foreground stroke-1" />
      <text x="42" y="60" textAnchor="middle" className="font-sans text-[7px] fill-muted-foreground font-semibold">OLED I2C</text>

      {/* Pins */}
      {Object.entries(OLEDPins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x} y2={pin.y + 10} className="stroke-muted-foreground stroke-1" />
          <circle cx={pin.x} cy={pin.y} r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
          <text x={pin.x} y={pin.y + 20} textAnchor="middle" className="font-mono text-[6px] fill-muted-foreground">{name}</text>
        </g>
      ))}

      <text x="42" y="75" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
    </g>
  );
};
