import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// Battery: Multicell parallel plates
export const BatteryPins = {
  "positive": { x: 10, y: 25, direction: "left" },
  "negative": { x: 60, y: 25, direction: "right" },
} as const;

export const Battery: React.FC<SymbolProps> = ({ id, label, value, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="65" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="10" y1="25" x2="25" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="45" y1="25" x2="60" y2="25" className="stroke-muted-foreground stroke-2" />

      {/* Plates */}
      <line x1="25" y1="12" x2="25" y2="38" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <line x1="31" y1="18" x2="31" y2="32" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <line x1="38" y1="12" x2="38" y2="38" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <line x1="45" y1="18" x2="45" y2="32" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />

      {/* Signs */}
      <text x="18" y="16" className="font-sans text-[8px] font-bold fill-brand">+</text>
      <text x="50" y="16" className="font-sans text-[8px] font-bold fill-muted-foreground">-</text>

      {/* Pins */}
      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="60" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="35" y="47" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{value || label || "Battery"}</text>
    </g>
  );
};

// 9V Battery: Rectangular block with snap terminals
export const Battery9VPins = {
  "positive": { x: 25, y: 15, direction: "top" },
  "negative": { x: 50, y: 15, direction: "top" },
} as const;

export const Battery9V: React.FC<SymbolProps> = ({ id, label, value, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect
        x="15"
        y="25"
        width="45"
        height="70"
        rx="4"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      {/* Snap terminals */}
      <circle cx="25" cy="21" r="4" className="fill-none stroke-muted-foreground stroke-2" />
      <rect x="46" y="17" width="8" height="8" rx="1.5" className="fill-none stroke-muted-foreground stroke-2" />
      
      <line x1="25" y1="15" x2="25" y2="21" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="50" y1="15" x2="50" y2="21" className="stroke-muted-foreground stroke-[1.5]" />

      <circle cx="25" cy="15" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="15" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      {/* Internal detail */}
      <rect x="20" y="35" width="35" height="50" rx="2" className="fill-secondary/15 stroke-none" />
      <text x="37" y="62" textAnchor="middle" className="font-sans text-[10px] font-bold fill-foreground">9V</text>

      <text x="37" y="10" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      {label && <text x="37" y="104" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label}</text>}
    </g>
  );
};

// Power Supply: Circle with VCC / label
export const PowerSupplyPins = {
  "positive": { x: 10, y: 25, direction: "left" },
  "negative": { x: 60, y: 25, direction: "right" },
} as const;

export const PowerSupply: React.FC<SymbolProps> = ({ id, label, value, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="65" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="10" y1="25" x2="20" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="50" y1="25" x2="60" y2="25" className="stroke-muted-foreground stroke-2" />

      <circle
        cx="35"
        cy="25"
        r="15"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      <text x="35" y="29" textAnchor="middle" className="font-sans text-[11px] font-bold fill-foreground">V</text>

      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="60" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="35" y="48" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{value || label || "DC Source"}</text>
    </g>
  );
};

// Ground: Standard 3-line schematic ground symbol
export const GroundPins = {
  "gnd": { x: 20, y: 10, direction: "top" },
} as const;

export const Ground: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="30" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="20" y1="10" x2="20" y2="22" className="stroke-muted-foreground stroke-2" />
      
      {/* Ground lines */}
      <line x1="5" y1="22" x2="35" y2="22" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <line x1="10" y1="27" x2="30" y2="27" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <line x1="15" y1="32" x2="25" y2="32" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />

      {/* Terminal Pin */}
      <circle cx="20" cy="10" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="20" y="8" textAnchor="middle" className="font-mono text-[8px] fill-brand/80">{id}</text>
      <text x="20" y="41" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || "GND"}</text>
    </g>
  );
};
