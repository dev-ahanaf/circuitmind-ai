import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// Buzzer: cylindrical body with sound waves
export const BuzzerPins = {
  "positive": { x: 10, y: 25, direction: "left" },
  "negative": { x: 60, y: 25, direction: "right" },
} as const;

export const Buzzer: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="65" height="40" rx="4" className="fill-transparent stroke-none" />
      
      {/* Leads */}
      <line x1="10" y1="25" x2="20" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="50" y1="25" x2="60" y2="25" className="stroke-muted-foreground stroke-2" />
      
      {/* Body Cylinder */}
      <rect
        x="20"
        y="12"
        width="30"
        height="26"
        rx="2"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      {/* sound slots */}
      <line x1="28" y1="18" x2="28" y2="32" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="35" y1="18" x2="35" y2="32" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="42" y1="18" x2="42" y2="32" className="stroke-muted-foreground stroke-[1.5]" />

      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="60" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="35" y="47" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || "Buzzer"}</text>
    </g>
  );
};

// Servo: Micro servo motor box with horn and 3 bottom pins
export const ServoPins = {
  "signal": { x: 20, y: 70, direction: "bottom" },
  "vcc": { x: 35, y: 70, direction: "bottom" },
  "gnd": { x: 50, y: 70, direction: "bottom" },
} as const;

export const Servo: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="60" height="75" rx="4" className="fill-transparent stroke-none" />
      
      {/* Motor Body */}
      <rect
        x="10"
        y="25"
        width="50"
        height="35"
        rx="2"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      
      {/* Shaft circle */}
      <circle cx="25" cy="42" r="8" className="fill-secondary/20 stroke-muted-foreground stroke-1" />
      <circle cx="25" cy="42" r="3" className="fill-muted-foreground stroke-none" />
      
      {/* Horn attachment */}
      <rect x="23" y="14" width="4" height="20" rx="1" className="fill-muted-foreground/30 stroke-muted-foreground stroke-[1.5]" />
      <circle cx="25" cy="14" r="2.5" className="fill-muted-foreground stroke-none" />
      <circle cx="25" cy="30" r="2.5" className="fill-muted-foreground stroke-none" />

      {/* Leads */}
      <line x1="20" y1="60" x2="20" y2="70" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="35" y1="60" x2="35" y2="70" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="50" y1="60" x2="50" y2="70" className="stroke-muted-foreground stroke-[1.5]" />

      <circle cx="20" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="35" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="10" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="54" y="55" className="font-mono text-[7px] fill-muted-foreground">{label || "Servo"}</text>
    </g>
  );
};

// Relay: Coil inductor with SPDT Switch
export const RelayPins = {
  "coil1": { x: 15, y: 20, direction: "left" },
  "coil2": { x: 15, y: 70, direction: "left" },
  "COM": { x: 85, y: 45, direction: "right" },
  "NO": { x: 85, y: 20, direction: "right" },
  "NC": { x: 85, y: 70, direction: "right" },
} as const;

export const Relay: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      {/* Box Border */}
      <rect
        x="15"
        y="10"
        width="70"
        height="70"
        rx="4"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />

      {/* Coil representation (Inductor loops or box) */}
      <rect x="25" y="25" width="12" height="40" rx="1" className="fill-none stroke-muted-foreground stroke-[1.5]" strokeDasharray="3,1" />
      <line x1="15" y1="20" x2="31" y2="20" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="15" y1="70" x2="31" y2="70" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="31" y1="20" x2="31" y2="25" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="31" y1="70" x2="31" y2="65" className="stroke-muted-foreground stroke-[1.5]" />

      {/* Switch Contacts */}
      <line x1="85" y1="45" x2="68" y2="45" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="85" y1="20" x2="68" y2="20" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="85" y1="70" x2="68" y2="70" className="stroke-muted-foreground stroke-[1.5]" />

      {/* Switch Arm */}
      <line x1="68" y1="45" x2="52" y2="28" className="stroke-foreground stroke-2" />

      {/* Pins */}
      <circle cx="15" cy="20" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="15" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="85" cy="45" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="85" cy="20" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="85" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="50" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="50" y="76" textAnchor="middle" className="font-mono text-[7px] fill-muted-foreground">{label || "Relay"}</text>
    </g>
  );
};
