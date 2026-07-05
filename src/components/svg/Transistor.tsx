import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// BJT Transistor (NPN / PNP)
export const TransistorPins = {
  "base": { x: 10, y: 25, direction: "left" },
  "collector": { x: 50, y: 10, direction: "top" },
  "emitter": { x: 50, y: 40, direction: "bottom" },
} as const;

export const Transistor: React.FC<SymbolProps & { pnp?: boolean }> = ({ id, label, value, pnp, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="55" height="45" rx="4" className="fill-transparent stroke-none" />
      
      {/* Pins leads */}
      <line x1="10" y1="25" x2="25" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="50" y1="10" x2="50" y2="18" className="stroke-muted-foreground stroke-2" />
      <line x1="50" y1="40" x2="50" y2="32" className="stroke-muted-foreground stroke-2" />

      {/* Base plate */}
      <line x1="25" y1="15" x2="25" y2="35" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      
      {/* Collector/Emitter diagonal plates */}
      <line x1="25" y1="20" x2="40" y2="15" className="stroke-foreground stroke-2" />
      <line x1="40" y1="15" x2="50" y2="18" className="stroke-foreground stroke-2" />

      <line x1="25" y1="30" x2="40" y2="35" className="stroke-foreground stroke-2" />
      <line x1="40" y1="35" x2="50" y2="32" className="stroke-foreground stroke-2" />

      {/* Arrow emitter marker */}
      {pnp ? (
        // PNP: Arrow pointing inward toward base (from Emitter to Base)
        <path d="M 33 32 L 27 31 M 30 28 L 27 31 L 33 32" fill="none" className="fill-none stroke-foreground stroke-2" />
      ) : (
        // NPN: Arrow pointing outward away from base
        <path d="M 38 34 L 44 37 M 42 32 L 44 37 L 38 34" fill="none" className="fill-none stroke-foreground stroke-2" />
      )}

      {/* Connection dots */}
      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="10" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="40" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="54" y="28" className="font-mono text-[7px] fill-muted-foreground">{value || label || (pnp ? "PNP" : "NPN")}</text>
    </g>
  );
};

// MOSFET: Gate, Drain, Source
export const MOSFETPins = {
  "gate": { x: 10, y: 25, direction: "left" },
  "drain": { x: 50, y: 10, direction: "top" },
  "source": { x: 50, y: 40, direction: "bottom" },
} as const;

export const MOSFET: React.FC<SymbolProps> = ({ id, label, value, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="55" height="45" rx="4" className="fill-transparent stroke-none" />
      
      {/* Gate lead */}
      <line x1="10" y1="25" x2="23" y2="25" className="stroke-muted-foreground stroke-2" />
      {/* Gate plate */}
      <line x1="23" y1="15" x2="23" y2="35" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />

      {/* Channel plates (3 dashes) */}
      <line x1="28" y1="15" x2="28" y2="21" className="stroke-foreground stroke-2" />
      <line x1="28" y1="22" x2="28" y2="28" className="stroke-foreground stroke-2" />
      <line x1="28" y1="29" x2="28" y2="35" className="stroke-foreground stroke-2" />

      {/* Drain/Source leads */}
      <line x1="50" y1="10" x2="50" y2="18" className="stroke-muted-foreground stroke-2" />
      <line x1="50" y1="40" x2="50" y2="32" className="stroke-muted-foreground stroke-2" />

      <line x1="28" y1="18" x2="50" y2="18" className="stroke-foreground stroke-2" />
      <line x1="28" y1="32" x2="50" y2="32" className="stroke-foreground stroke-2" />

      {/* Internal bulk connections with arrow */}
      <line x1="28" y1="25" x2="42" y2="25" className="stroke-foreground stroke-[1.5]" />
      <line x1="42" y1="25" x2="42" y2="32" className="stroke-foreground stroke-[1.5]" />
      {/* Arrow pointing in (N-channel) */}
      <path d="M 28 25 L 34 22 M 28 25 L 34 28" fill="none" className="fill-none stroke-foreground stroke-2" />

      {/* Connection dots */}
      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="10" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="40" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="54" y="28" className="font-mono text-[7px] fill-muted-foreground">{value || label || "MOSFET"}</text>
    </g>
  );
};
