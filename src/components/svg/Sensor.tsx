import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// LDR: Resistor block with inward-pointing light arrows
export const LDRPins = {
  "pin1": { x: 10, y: 25, direction: "left" },
  "pin2": { x: 70, y: 25, direction: "right" },
} as const;

export const LDR: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="70" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="10" y1="25" x2="25" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="55" y1="25" x2="70" y2="25" className="stroke-muted-foreground stroke-2" />

      {/* Circle housing */}
      <circle cx="40" cy="25" r="16" className="fill-card stroke-muted-foreground/30 stroke-1" />
      {/* Resistor Block */}
      <rect
        x="25"
        y="18"
        width="30"
        height="14"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      
      {/* Inward light arrows */}
      <path d="M 23 8 L 30 14 M 27 8 L 30 14 L 26 12" className="fill-none stroke-brand/80 stroke-1" />
      <path d="M 33 5 L 40 11 M 37 5 L 40 11 L 36 9" className="fill-none stroke-brand/80 stroke-1" />

      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="70" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="40" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="40" y="47" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || "LDR"}</text>
    </g>
  );
};

// IR Sensor Module: transmitter + receiver LED and 3 pins
export const IRSensorPins = {
  "VCC": { x: 15, y: 65, direction: "bottom" },
  "GND": { x: 30, y: 65, direction: "bottom" },
  "OUT": { x: 45, y: 65, direction: "bottom" },
} as const;

export const IRSensor: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="50" height="70" rx="4" className="fill-transparent stroke-none" />
      
      {/* Sensor board */}
      <rect
        x="10"
        y="20"
        width="40"
        height="45"
        rx="3"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      {/* IR Emitter / Receiver Diodes on top */}
      <rect x="16" y="10" width="8" height="10" rx="1.5" className="fill-blue-500/20 stroke-blue-500 stroke-1" />
      <rect x="36" y="10" width="8" height="10" rx="1.5" className="fill-neutral-900 stroke-neutral-700 stroke-1" />

      {/* Leads */}
      <line x1="15" y1="58" x2="15" y2="65" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="30" y1="58" x2="30" y2="65" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="45" y1="58" x2="45" y2="65" className="stroke-muted-foreground stroke-[1.5]" />

      <circle cx="15" cy="65" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="30" cy="65" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="45" cy="65" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="30" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="30" y="45" textAnchor="middle" className="font-mono text-[7px] fill-muted-foreground">{label || "IR Sensor"}</text>
    </g>
  );
};

// Ultrasonic Sensor (HC-SR04): Emitter & Receiver + 4 pins
export const UltrasonicSensorPins = {
  "VCC": { x: 15, y: 65, direction: "bottom" },
  "Trig": { x: 30, y: 65, direction: "bottom" },
  "Echo": { x: 45, y: 65, direction: "bottom" },
  "GND": { x: 60, y: 65, direction: "bottom" },
} as const;

export const UltrasonicSensor: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="70" height="70" rx="4" className="fill-transparent stroke-none" />
      
      {/* Board */}
      <rect
        x="10"
        y="15"
        width="60"
        height="50"
        rx="4"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />

      {/* Two sonar transducers */}
      <circle cx="23" cy="35" r="11" className="fill-none stroke-muted-foreground stroke-1.5" />
      <text x="23" y="38" textAnchor="middle" className="font-sans text-[8px] fill-muted-foreground">T</text>

      <circle cx="57" cy="35" r="11" className="fill-none stroke-muted-foreground stroke-1.5" />
      <text x="57" y="38" textAnchor="middle" className="font-sans text-[8px] fill-muted-foreground">R</text>

      {/* Leads */}
      <line x1="15" y1="58" x2="15" y2="65" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="30" y1="58" x2="30" y2="65" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="45" y1="58" x2="45" y2="65" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="60" y1="58" x2="60" y2="65" className="stroke-muted-foreground stroke-[1.5]" />

      <circle cx="15" cy="65" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="30" cy="65" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="45" cy="65" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="60" cy="65" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="40" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="40" y="60" textAnchor="middle" className="font-mono text-[6px] fill-muted-foreground">{label || "HC-SR04"}</text>
    </g>
  );
};

// Flame / Gas Sensor (MQ-2 / MQ-5 etc.)
export const GasSensorPins = {
  "VCC": { x: 15, y: 70, direction: "bottom" },
  "GND": { x: 30, y: 70, direction: "bottom" },
  "DO": { x: 45, y: 70, direction: "bottom" },
  "AO": { x: 60, y: 70, direction: "bottom" },
} as const;

export const GasSensor: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="70" height="75" rx="4" className="fill-transparent stroke-none" />
      
      {/* Board */}
      <rect
        x="10"
        y="15"
        width="60"
        height="55"
        rx="4"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />

      {/* Sensor mesh circle */}
      <circle cx="40" cy="38" r="13" className="fill-secondary/20 stroke-muted-foreground stroke-1" strokeDasharray="2,2" />
      <circle cx="40" cy="38" r="6" className="fill-muted-foreground/30 stroke-none" />

      {/* Leads */}
      <line x1="15" y1="62" x2="15" y2="70" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="30" y1="62" x2="30" y2="70" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="45" y1="62" x2="45" y2="70" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="60" y1="62" x2="60" y2="70" className="stroke-muted-foreground stroke-[1.5]" />

      <circle cx="15" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="30" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="45" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="60" cy="70" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="40" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="40" y="55" textAnchor="middle" className="font-mono text-[6px] fill-muted-foreground">{label || "MQ Gas/Flame"}</text>
    </g>
  );
};
