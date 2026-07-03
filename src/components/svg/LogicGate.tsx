import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// Logic Gate Pins (General)
export const LogicGate2InputPins = {
  "IN1": { x: 10, y: 15, direction: "left" },
  "IN2": { x: 10, y: 35, direction: "left" },
  "OUT": { x: 60, y: 25, direction: "right" },
} as const;

export const LogicGate1InputPins = {
  "IN": { x: 10, y: 25, direction: "left" },
  "OUT": { x: 60, y: 25, direction: "right" },
} as const;

export const LogicGate: React.FC<SymbolProps & { type: "AND" | "OR" | "NOT" | "NAND" | "NOR" | "XOR" }> = ({
  id,
  label,
  type,
  selected,
  hovered,
  onSelect,
}) => {
  const isNegated = ["NAND", "NOR"].includes(type);
  const colorClass = selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground";

  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="60" height="40" rx="4" className="fill-transparent stroke-none" />
      
      {/* Input Leads */}
      {type === "NOT" ? (
        <line x1="10" y1="25" x2="20" y2="25" className="stroke-muted-foreground stroke-2" />
      ) : (
        <>
          <line x1="10" y1="15" x2="20" y2="15" className="stroke-muted-foreground stroke-2" />
          <line x1="10" y1="35" x2="20" y2="35" className="stroke-muted-foreground stroke-2" />
        </>
      )}

      {/* Output Lead */}
      <line x1="50" y1="25" x2="60" y2="25" className="stroke-muted-foreground stroke-2" />

      {/* Logic Shape */}
      {type === "AND" || type === "NAND" ? (
        <path d="M 20 10 L 35 10 A 15 15 0 0 1 35 40 L 20 40 Z" className={`fill-card stroke-2 ${colorClass}`} />
      ) : type === "OR" || type === "NOR" ? (
        <path d="M 20 10 Q 28 25 20 40 Q 32 40 42 28 Q 45 25 42 22 Q 32 10 20 10 Z" className={`fill-card stroke-2 ${colorClass}`} />
      ) : type === "XOR" ? (
        <>
          {/* Back curve offset */}
          <path d="M 16 10 Q 24 25 16 40" className={`fill-none stroke-2 ${colorClass}`} />
          <path d="M 20 10 Q 28 25 20 40 Q 32 40 42 28 Q 45 25 42 22 Q 32 10 20 10 Z" className={`fill-card stroke-2 ${colorClass}`} />
        </>
      ) : (
        // NOT Gate
        <polygon points="20,10 20,40 42,25" className={`fill-card stroke-2 ${colorClass}`} />
      )}

      {/* Negation Bubble (circle at output tip) */}
      {isNegated && (
        <circle cx="45" cy="25" r="3" className={`fill-card stroke-2 ${colorClass}`} />
      )}
      {type === "NOT" && (
        <circle cx="45" cy="25" r="3" className={`fill-card stroke-2 ${colorClass}`} />
      )}

      {/* Pin Connection Dots */}
      {type === "NOT" ? (
        <>
          <circle cx="10" cy="25" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
          <circle cx="60" cy="25" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
        </>
      ) : (
        <>
          <circle cx="10" cy="15" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
          <circle cx="10" cy="35" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
          <circle cx="60" cy="25" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
        </>
      )}

      <text x="32" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="32" y="47" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label || type}</text>
    </g>
  );
};
