import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// LED: Diode triangle with cathode bar and outward light arrows
export const LEDPins = {
  "anode": { x: 10, y: 25, direction: "left" },
  "cathode": { x: 70, y: 25, direction: "right" },
} as const;

export const LED: React.FC<SymbolProps & { color?: string }> = ({ id, label, value, color, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="70" height="40" rx="4" className="fill-transparent stroke-none" />
      
      {/* Leads */}
      <line x1="10" y1="25" x2="28" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="48" y1="25" x2="70" y2="25" className="stroke-muted-foreground stroke-2" />

      {/* Diode Triangle */}
      <polygon
        points="28,15 28,35 48,25"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      {/* Cathode Line */}
      <line
        x1="48"
        y1="15"
        x2="48"
        y2="35"
        className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />

      {/* Outward light arrows */}
      <path d="M 33 13 L 26 6 M 29 8 L 26 6 L 28 10" className="fill-none stroke-brand/80 stroke-1" />
      <path d="M 43 13 L 36 6 M 39 8 L 36 6 L 38 10" className="fill-none stroke-brand/80 stroke-1" />

      {/* Pins */}
      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="70" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="38" y="10" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="38" y="47" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{value || color || label || "LED"}</text>
    </g>
  );
};

// RGB LED: Multi-terminal LED with R, G, B pins and Common Cathode
export const RGBLEDPins = {
  "red": { x: 15, y: 55, direction: "bottom" },
  "green": { x: 30, y: 55, direction: "bottom" },
  "blue": { x: 45, y: 55, direction: "bottom" },
  "cathode": { x: 30, y: 10, direction: "top" },
} as const;

export const RGBLED: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="50" height="55" rx="4" className="fill-transparent stroke-none" />
      
      {/* Inner LED representation */}
      <circle
        cx="30"
        cy="30"
        r="16"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      
      {/* Color Indicators inside circle */}
      <circle cx="23" cy="30" r="3" className="fill-red-500 stroke-none" />
      <circle cx="30" cy="30" r="3" className="fill-green-500 stroke-none" />
      <circle cx="37" cy="30" r="3" className="fill-blue-500 stroke-none" />

      {/* Wire Leads */}
      <line x1="30" y1="10" x2="30" y2="14" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="15" y1="46" x2="15" y2="55" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="30" y1="46" x2="30" y2="55" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="45" y1="46" x2="45" y2="55" className="stroke-muted-foreground stroke-[1.5]" />

      {/* Connection dots */}
      <circle cx="30" cy="10" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="15" cy="55" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="30" cy="55" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="45" cy="55" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="30" y="8" textAnchor="middle" className="font-mono text-[7px] fill-muted-foreground">COM</text>
      <text x="52" y="24" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="52" y="36" className="font-mono text-[7px] fill-muted-foreground">{label || "RGB"}</text>
    </g>
  );
};

// Diode / Zener Diode
export const DiodePins = {
  "anode": { x: 10, y: 25, direction: "left" },
  "cathode": { x: 70, y: 25, direction: "right" },
} as const;

export const Diode: React.FC<SymbolProps & { zener?: boolean }> = ({ id, label, zener, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="70" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="10" y1="25" x2="28" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="48" y1="25" x2="70" y2="25" className="stroke-muted-foreground stroke-2" />

      <polygon
        points="28,15 28,35 48,25"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      
      {zener ? (
        // Zener cathode bar
        <path
          d="M 45 15 L 48 15 L 48 35 L 51 35"
          className={`fill-none stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
        />
      ) : (
        // Standard cathode bar
        <line
          x1="48"
          y1="15"
          x2="48"
          y2="35"
          className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
        />
      )}

      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="70" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="38" y="10" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="38" y="47" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || (zener ? "Zener" : "Diode")}</text>
    </g>
  );
};
