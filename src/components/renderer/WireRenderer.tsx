import React from "react";
import { getPinConfig, type PinConfig } from "./PinMap";
import { type ComponentJSON } from "@/utils/layout";

interface WireProps {
  from: string; // "U1:D13"
  to: string; // "R1:left"
  components: ComponentJSON[];
  hovered?: boolean;
  selected?: boolean;
  onHover?: (hovered: boolean) => void;
}

/**
 * Computes Manhattan path segments from start to end based on pin directions
 */
export function getOrthogonalPath(
  x1: number,
  y1: number,
  dir1: string,
  x2: number,
  y2: number,
  dir2: string
): string {
  const exitOffset = 15;
  
  // 1. Calculate exit points
  let ex1 = x1;
  let ey1 = y1;
  if (dir1 === "left") ex1 -= exitOffset;
  else if (dir1 === "right") ex1 += exitOffset;
  else if (dir1 === "top") ey1 -= exitOffset;
  else if (dir1 === "bottom") ey1 += exitOffset;

  let ex2 = x2;
  let ey2 = y2;
  if (dir2 === "left") ex2 -= exitOffset;
  else if (dir2 === "right") ex2 += exitOffset;
  else if (dir2 === "top") ey2 -= exitOffset;
  else if (dir2 === "bottom") ey2 += exitOffset;

  // 2. Compute intermediate bend points
  const points: Array<{ x: number; y: number }> = [{ x: x1, y: y1 }, { x: ex1, y: ey1 }];

  const isHoriz1 = dir1 === "left" || dir1 === "right";
  const isHoriz2 = dir2 === "left" || dir2 === "right";

  if (isHoriz1 && isHoriz2) {
    // Both horizontal exit: route with a vertical middle segment
    const midX = (ex1 + ex2) / 2;
    points.push({ x: midX, y: ey1 });
    points.push({ x: midX, y: ey2 });
  } else if (!isHoriz1 && !isHoriz2) {
    // Both vertical exit: route with a horizontal middle segment
    const midY = (ey1 + ey2) / 2;
    points.push({ x: ex1, y: midY });
    points.push({ x: ex2, y: midY });
  } else {
    // One horizontal, one vertical exit: route with a single right-angle corner
    if (isHoriz1) {
      points.push({ x: ex2, y: ey1 });
    } else {
      points.push({ x: ex1, y: ey2 });
    }
  }

  points.push({ x: ex2, y: ey2 });
  points.push({ x: x2, y: y2 });

  // 3. Compile SVG Path String
  return points.map((p, idx) => `${idx === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
}

export const WireRenderer: React.FC<WireProps> = ({
  from,
  to,
  components,
  hovered,
  selected,
  onHover,
}) => {
  // Parse from and to (format componentId:pinName)
  const [fromId, fromPin] = from.split(":");
  const [toId, toPin] = to.split(":");

  const compFrom = components.find((c) => c.id === fromId);
  const compTo = components.find((c) => c.id === toId);

  if (!compFrom || !compTo) return null;

  // Get relative pin positions
  const pinFrom = getPinConfig(compFrom.type, fromPin);
  const pinTo = getPinConfig(compTo.type, toPin);

  // Compute absolute board coordinates
  const x1 = (compFrom.x || 0) + pinFrom.x;
  const y1 = (compFrom.y || 0) + pinFrom.y;
  const x2 = (compTo.x || 0) + pinTo.x;
  const y2 = (compTo.y || 0) + pinTo.y;

  const path = getOrthogonalPath(x1, y1, pinFrom.direction, x2, y2, pinTo.direction);

  const colorClass = selected
    ? "stroke-brand"
    : hovered
    ? "stroke-brand/70"
    : "stroke-muted-foreground/60 dark:stroke-muted-foreground/45";

  return (
    <g
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      className="group transition-all"
    >
      {/* Thick invisible interaction path for easier hovering */}
      <path
        d={path}
        className="fill-none stroke-transparent stroke-[12] cursor-pointer"
      />

      {/* Main wire path (underlying glow on hover/select) */}
      <path
        d={path}
        className={`fill-none stroke-[4] opacity-0 transition-opacity duration-200 group-hover:opacity-40 ${
          selected ? "opacity-60 stroke-brand" : "stroke-brand/60"
        }`}
      />

      {/* Actual drawn wire wire */}
      <path
        d={path}
        className={`fill-none stroke-2 transition-colors duration-200 ${colorClass}`}
      />

      {/* Terminal connection dots */}
      <circle
        cx={x1}
        cy={y1}
        r="3"
        className={`transition-colors ${
          selected || hovered ? "fill-brand" : "fill-card stroke-muted-foreground stroke-1"
        }`}
      />
      <circle
        cx={x2}
        cy={y2}
        r="3"
        className={`transition-colors ${
          selected || hovered ? "fill-brand" : "fill-card stroke-muted-foreground stroke-1"
        }`}
      />
    </g>
  );
};
