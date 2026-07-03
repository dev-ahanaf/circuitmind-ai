import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// 7805 / LM317 Voltage Regulator
export const VoltageRegulatorPins = {
  "IN": { x: 10, y: 25, direction: "left" },
  "OUT": { x: 70, y: 25, direction: "right" },
  "GND": { x: 40, y: 55, direction: "bottom" },
} as const;

export const VoltageRegulator: React.FC<SymbolProps> = ({ id, label, value, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="70" height="55" rx="4" className="fill-transparent stroke-none" />
      
      {/* Leads */}
      <line x1="10" y1="25" x2="20" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="60" y1="25" x2="70" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="40" y1="40" x2="40" y2="55" className="stroke-muted-foreground stroke-2" />

      {/* Regulator body */}
      <rect
        x="20"
        y="10"
        width="40"
        height="30"
        rx="2"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      <text x="40" y="28" textAnchor="middle" className="font-sans text-[8px] font-bold fill-foreground">{value || label || "7805"}</text>

      {/* Pins */}
      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="70" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="40" cy="55" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="40" y="7" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
    </g>
  );
};

// LM358 Op-Amp symbol (standard triangle amplifier symbol)
export const LM358Pins = {
  "IN+": { x: 10, y: 15, direction: "left" },
  "IN-": { x: 10, y: 35, direction: "left" },
  "VCC": { x: 35, y: 10, direction: "top" },
  "GND": { x: 35, y: 40, direction: "bottom" },
  "OUT": { x: 60, y: 25, direction: "right" },
} as const;

export const LM358: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="60" height="40" rx="4" className="fill-transparent stroke-none" />
      
      {/* Leads */}
      <line x1="10" y1="15" x2="20" y2="15" className="stroke-muted-foreground stroke-2" />
      <line x1="10" y1="35" x2="20" y2="35" className="stroke-muted-foreground stroke-2" />
      <line x1="50" y1="25" x2="60" y2="25" className="stroke-muted-foreground stroke-2" />
      
      <line x1="35" y1="10" x2="35" y2="17" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="35" y1="40" x2="35" y2="33" className="stroke-muted-foreground stroke-[1.5]" />

      {/* Amplifier Triangle */}
      <polygon
        points="20,10 20,40 50,25"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      
      {/* Signs inside triangle */}
      <text x="23" y="18" className="font-sans text-[8px] font-bold fill-muted-foreground">+</text>
      <text x="23" y="36" className="font-sans text-[8px] font-bold fill-muted-foreground">-</text>

      {/* Pins */}
      <circle cx="10" cy="15" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="10" cy="35" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="35" cy="10" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="35" cy="40" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="60" cy="25" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="6" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="54" y="34" className="font-mono text-[7px] fill-muted-foreground">{label || "LM358"}</text>
    </g>
  );
};
