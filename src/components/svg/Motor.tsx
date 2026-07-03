import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// DC Motor: Circle with 'M' and 2 leads
export const DCMotorPins = {
  "pin1": { x: 10, y: 25, direction: "left" },
  "pin2": { x: 60, y: 25, direction: "right" },
} as const;

export const DCMotor: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
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
      <text x="35" y="29" textAnchor="middle" className="font-sans text-xs font-bold fill-foreground">M</text>

      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="60" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="35" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="35" y="47" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || "DC Motor"}</text>
    </g>
  );
};

// Stepper Motor: Circle with 'STEP' and 4 pins at the bottom
export const StepperMotorPins = {
  "A+": { x: 15, y: 55, direction: "bottom" },
  "A-": { x: 25, y: 55, direction: "bottom" },
  "B+": { x: 35, y: 55, direction: "bottom" },
  "B-": { x: 45, y: 55, direction: "bottom" },
} as const;

export const StepperMotor: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="50" height="55" rx="4" className="fill-transparent stroke-none" />
      
      {/* Stepper Body */}
      <circle
        cx="30"
        cy="25"
        r="18"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      <text x="30" y="29" textAnchor="middle" className="font-sans text-[8px] font-bold fill-foreground">STEP</text>

      {/* Leads */}
      <line x1="15" y1="43" x2="15" y2="55" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="25" y1="43" x2="25" y2="55" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="35" y1="43" x2="35" y2="55" className="stroke-muted-foreground stroke-[1.5]" />
      <line x1="45" y1="43" x2="45" y2="55" className="stroke-muted-foreground stroke-[1.5]" />

      <circle cx="15" cy="55" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="25" cy="55" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="35" cy="55" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="45" cy="55" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="30" y="5" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      {label && <text x="54" y="30" className="font-mono text-[7px] fill-muted-foreground">{label}</text>}
    </g>
  );
};

// Motor Driver (L298N / L293D): Dual H-Bridge module box
export const MotorDriverPins = {
  // Input logic
  "IN1": { x: 15, y: 30, direction: "left" },
  "IN2": { x: 15, y: 45, direction: "left" },
  "IN3": { x: 15, y: 60, direction: "left" },
  "IN4": { x: 15, y: 75, direction: "left" },
  "ENA": { x: 15, y: 95, direction: "left" },
  "ENB": { x: 15, y: 110, direction: "left" },

  // Outputs / Power
  "OUT1": { x: 105, y: 30, direction: "right" },
  "OUT2": { x: 105, y: 45, direction: "right" },
  "OUT3": { x: 105, y: 60, direction: "right" },
  "OUT4": { x: 105, y: 75, direction: "right" },
  "VCC": { x: 105, y: 95, direction: "right" },
  "GND": { x: 105, y: 110, direction: "right" },
} as const;

export const MotorDriver: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect
        x="15"
        y="15"
        width="90"
        height="110"
        rx="6"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      <rect x="23" y="23" width="74" height="94" rx="3" className="fill-secondary/15 stroke-none" />
      <text x="60" y="65" textAnchor="middle" className="font-sans text-[10px] font-bold fill-foreground">L298N / L293D</text>
      <text x="60" y="80" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      
      {Object.entries(MotorDriverPins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x + (pin.direction === "left" ? 10 : -10)} y2={pin.y} className="stroke-muted-foreground stroke-[1.5]" />
          <circle cx={pin.x} cy={pin.y} r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
          <text x={pin.x + (pin.direction === "left" ? 14 : -14)} y={pin.y + 3} textAnchor={pin.direction === "left" ? "start" : "end"} className="font-mono text-[7px] font-semibold fill-muted-foreground">{name}</text>
        </g>
      ))}
    </g>
  );
};
