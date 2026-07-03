import React from "react";
import { SymbolProps } from "../ArduinoUno/ArduinoTypes";

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
