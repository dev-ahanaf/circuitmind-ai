import React from "react";
import { SymbolProps } from "../ArduinoUno/ArduinoTypes";
import { L298NPins } from "./L298NPins";

export const L298N: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
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
      
      {Object.entries(L298NPins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x + (pin.direction === "left" ? 10 : -10)} y2={pin.y} className="stroke-muted-foreground stroke-[1.5]" />
          <circle cx={pin.x} cy={pin.y} r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
          <text x={pin.x + (pin.direction === "left" ? 14 : -14)} y={pin.y + 3} textAnchor={pin.direction === "left" ? "start" : "end"} className="font-mono text-[7px] font-semibold fill-muted-foreground">{name}</text>
        </g>
      ))}
    </g>
  );
};
