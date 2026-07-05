import React from "react";
import { SymbolProps } from "../ArduinoUno/ArduinoTypes";

export const Resistor: React.FC<SymbolProps> = ({ id, label, value, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="90" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="10" y1="25" x2="30" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="70" y1="25" x2="90" y2="25" className="stroke-muted-foreground stroke-2" />
      
      <rect
        x="30"
        y="15"
        width="40"
        height="20"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      <path d="M 30 25 L 35 18 L 41 32 L 47 18 L 53 32 L 59 18 L 65 32 L 70 25" fill="none" className="fill-none stroke-muted-foreground/30 stroke-1" />
      
      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="90" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="50" y="10" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="50" y="46" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{value || label || "Resistor"}</text>
    </g>
  );
};

export const Capacitor: React.FC<SymbolProps & { electrolytic?: boolean }> = ({ id, label, value, electrolytic, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="70" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="10" y1="25" x2="32" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="48" y1="25" x2="70" y2="25" className="stroke-muted-foreground stroke-2" />
      
      {electrolytic ? (
        <>
          <line x1="32" y1="10" x2="32" y2="40" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
          <path d="M 48 10 Q 42 25 48 40" fill="none" className={`fill-none stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
          <text x="25" y="14" className="font-sans text-[8px] font-bold fill-brand">+</text>
        </>
      ) : (
        <>
          <line x1="32" y1="10" x2="32" y2="40" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
          <line x1="40" y1="10" x2="40" y2="40" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
        </>
      )}

      <circle cx="10" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="70" cy="25" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="36" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="36" y="48" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{value || label || (electrolytic ? "Cap (Elec)" : "Capacitor")}</text>
    </g>
  );
};

export const Potentiometer: React.FC<SymbolProps> = ({ id, label, value, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="90" height="70" rx="4" className="fill-transparent stroke-none" />
      
      <line x1="10" y1="20" x2="30" y2="20" className="stroke-muted-foreground stroke-2" />
      <line x1="70" y1="20" x2="90" y2="20" className="stroke-muted-foreground stroke-2" />
      <line x1="50" y1="40" x2="50" y2="65" className="stroke-muted-foreground stroke-2" />
      
      <rect
        x="30"
        y="10"
        width="40"
        height="20"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      
      <path d="M 50 38 L 47 32 M 50 38 L 53 32" fill="none" className="fill-none stroke-brand stroke-2" />

      <circle cx="10" cy="20" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="90" cy="20" r="3" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="65" r="3" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="50" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="50" y="55" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{value || label || "Pot"}</text>
    </g>
  );
};
