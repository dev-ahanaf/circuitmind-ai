import React from "react";
import { SymbolProps } from "../ArduinoUno/ArduinoTypes";

export const Ground: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="30" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="20" y1="10" x2="20" y2="22" className="stroke-muted-foreground stroke-2" />
      
      {/* Ground lines */}
      <line x1="5" y1="22" x2="35" y2="22" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <line x1="10" y1="27" x2="30" y2="27" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <line x1="15" y1="32" x2="25" y2="32" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />

      {/* Terminal Pin */}
      <circle cx="20" cy="10" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="20" y="8" textAnchor="middle" className="font-mono text-[8px] fill-brand/80">{id}</text>
      <text x="20" y="41" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || "GND"}</text>
    </g>
  );
};
