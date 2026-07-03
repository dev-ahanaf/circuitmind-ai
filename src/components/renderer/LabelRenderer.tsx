import React from "react";
import { type CircuitComponent } from "@/types/Component";
import { COMPONENT_DIMENSIONS, normalizeType } from "./PinMap";

interface LabelRendererProps {
  components: CircuitComponent[];
}

export const LabelRenderer: React.FC<LabelRendererProps> = ({ components }) => {
  return (
    <g className="pointer-events-none select-none">
      {components.map((c) => {
        const norm = normalizeType(c.type);
        const dims = COMPONENT_DIMENSIONS[norm] || { width: 80, height: 50 };

        // Position label slightly above the component bounding box
        const lx = c.x + dims.width / 2;
        const ly = c.y - 12;

        return (
          <g key={`lbl-${c.id}`}>
            {/* Reference designator */}
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              className="font-mono text-[10px] font-bold fill-brand dark:fill-brand/90"
            >
              {c.id}
            </text>
            {/* Value (if Resistor/Cap etc.) */}
            {c.value && (
              <text
                x={lx}
                y={ly - 10}
                textAnchor="middle"
                className="font-sans text-[8px] fill-muted-foreground"
              >
                {c.value}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
};
