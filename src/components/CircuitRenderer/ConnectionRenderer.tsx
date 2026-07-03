import React, { useMemo } from "react";
import { type CircuitComponent } from "@/types/Component";
import { type CircuitConnection } from "@/types/Connection";
import { getRotatedPinConfig } from "@/utils/pinResolver";
import { routeWire, findJunctionPoints, type Point } from "@/utils/wireRouting";

interface ConnectionRendererProps {
  connections: CircuitConnection[];
  components: CircuitComponent[];
}

export const ConnectionRenderer: React.FC<ConnectionRendererProps> = ({
  connections,
  components,
}) => {
  const junctions = useMemo(() => {
    if (!connections || !components) return [];

    const allPaths: Point[][] = [];

    connections.forEach((conn) => {
      const [fromId, fromPin] = conn.from.split(":");
      const [toId, toPin] = conn.to.split(":");

      const compFrom = components.find((c) => c.id === fromId);
      const compTo = components.find((c) => c.id === toId);

      if (compFrom && compTo) {
        const pinFrom = getRotatedPinConfig(compFrom, fromPin);
        const pinTo = getRotatedPinConfig(compTo, toPin);

        const pathPoints = routeWire(
          pinFrom.x,
          pinFrom.y,
          pinFrom.direction,
          pinTo.x,
          pinTo.y,
          pinTo.direction
        );
        allPaths.push(pathPoints);
      }
    });

    return findJunctionPoints(allPaths);
  }, [connections, components]);

  return (
    <g className="pointer-events-none select-none">
      {junctions.map((j, idx) => (
        <circle
          key={`junc-${j.x}-${j.y}-${idx}`}
          cx={j.x}
          cy={j.y}
          r="4"
          className="fill-foreground stroke-background stroke-1 shadow-md"
        />
      ))}
    </g>
  );
};
