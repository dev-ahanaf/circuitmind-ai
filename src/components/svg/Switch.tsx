import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// SPST Switch: Two terminals with an angled switch lever
export const SwitchPins = {
  "pin1": { x: 10, y: 20, direction: "left" },
  "pin2": { x: 60, y: 20, direction: "right" },
} as const;

export const Switch: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="65" height="35" rx="4" className="fill-transparent stroke-none" />
      
      {/* Terminals */}
      <line x1="10" y1="20" x2="24" y2="20" className="stroke-muted-foreground stroke-2" />
      <line x1="46" y1="20" x2="60" y2="20" className="stroke-muted-foreground stroke-2" />
      
      {/* Terminal circles */}
      <circle cx="24" cy="20" r="2.5" className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <circle cx="46" cy="20" r="2.5" className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />

      {/* Lever (diagonal) */}
      <line
        x1="24"
        y1="19"
        x2="45"
        y2="7"
        className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />

      {/* Pins */}
      <circle cx="10" cy="20" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="60" cy="20" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="6" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="35" y="38" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || "Switch"}</text>
    </g>
  );
};

// Push Button: Tactical momentary switch
export const PushButtonPins = {
  "pin1": { x: 10, y: 30, direction: "left" },
  "pin2": { x: 50, y: 30, direction: "right" },
} as const;

export const PushButton: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="55" height="45" rx="4" className="fill-transparent stroke-none" />
      
      {/* Terminal Leads */}
      <line x1="10" y1="30" x2="20" y2="30" className="stroke-muted-foreground stroke-2" />
      <line x1="40" y1="30" x2="50" y2="30" className="stroke-muted-foreground stroke-2" />
      
      {/* Terminal contact points */}
      <circle cx="20" cy="30" r="2" className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <circle cx="40" cy="30" r="2" className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />

      {/* Plunger / Button bar above contacts */}
      <line
        x1="16"
        y1="23"
        x2="44"
        y2="23"
        className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      {/* Push rod / shaft */}
      <line
        x1="30"
        y1="23"
        x2="30"
        y2="13"
        className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      {/* Cap */}
      <rect
        x="24"
        y="10"
        width="12"
        height="3"
        className={`fill-card stroke-1 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />

      {/* Connection dots */}
      <circle cx="10" cy="30" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="30" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="30" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="30" y="44" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || "Btn"}</text>
    </g>
  );
};
