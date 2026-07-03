import React from "react";
import { SymbolProps } from "../ArduinoUno/ArduinoTypes";

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

export const StepperMotor: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="50" height="55" rx="4" className="fill-transparent stroke-none" />
      
      <circle
        cx="30"
        cy="25"
        r="18"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      <text x="30" y="29" textAnchor="middle" className="font-sans text-[8px] font-bold fill-foreground">STEP</text>

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
