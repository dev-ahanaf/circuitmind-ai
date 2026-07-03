import { snapToGrid } from "./grid";

export interface Point {
  x: number;
  y: number;
}

/**
 * Computes an orthogonal Manhattan path from (x1, y1) to (x2, y2) snapping all bends to a 20px grid.
 */
export function routeWire(
  x1: number,
  y1: number,
  dir1: "left" | "right" | "top" | "bottom",
  x2: number,
  y2: number,
  dir2: "left" | "right" | "top" | "bottom",
  gridSize = 20
): Point[] {
  const exitOffset = gridSize; // 20px exit clearance

  // Snap start and end to grid
  const sx = snapToGrid(x1, gridSize);
  const sy = snapToGrid(y1, gridSize);
  const ex = snapToGrid(x2, gridSize);
  const ey = snapToGrid(y2, gridSize);

  // 1. Calculate exit clearance points
  let exx1 = sx;
  let eyy1 = sy;
  if (dir1 === "left") exx1 -= exitOffset;
  else if (dir1 === "right") exx1 += exitOffset;
  else if (dir1 === "top") eyy1 -= exitOffset;
  else if (dir1 === "bottom") eyy1 += exitOffset;

  let exx2 = ex;
  let eyy2 = ey;
  if (dir2 === "left") exx2 -= exitOffset;
  else if (dir2 === "right") exx2 += exitOffset;
  else if (dir2 === "top") eyy2 -= exitOffset;
  else if (dir2 === "bottom") eyy2 += exitOffset;

  exx1 = snapToGrid(exx1, gridSize);
  eyy1 = snapToGrid(eyy1, gridSize);
  exx2 = snapToGrid(exx2, gridSize);
  eyy2 = snapToGrid(eyy2, gridSize);

  const points: Point[] = [{ x: sx, y: sy }, { x: exx1, y: eyy1 }];

  const isHoriz1 = dir1 === "left" || dir1 === "right";
  const isHoriz2 = dir2 === "left" || dir2 === "right";

  if (isHoriz1 && isHoriz2) {
    // Both horizontal: exit horizontally, route with a vertical segment
    const midX = snapToGrid((exx1 + exx2) / 2, gridSize);
    points.push({ x: midX, y: eyy1 });
    points.push({ x: midX, y: eyy2 });
  } else if (!isHoriz1 && !isHoriz2) {
    // Both vertical: exit vertically, route with a horizontal segment
    const midY = snapToGrid((eyy1 + eyy2) / 2, gridSize);
    points.push({ x: exx1, y: midY });
    points.push({ x: exx2, y: midY });
  } else {
    // One horizontal, one vertical: route with a single corner bend
    if (isHoriz1) {
      points.push({ x: exx2, y: eyy1 });
    } else {
      points.push({ x: exx1, y: eyy2 });
    }
  }

  points.push({ x: exx2, y: eyy2 });
  points.push({ x: ex, y: ey });

  // Filter out redundant collinear points
  const optimized: Point[] = [points[0]];
  for (let i = 1; i < points.length - 1; i++) {
    const prev = optimized[optimized.length - 1];
    const curr = points[i];
    const next = points[i + 1];

    const isCollinearX = prev.x === curr.x && curr.x === next.x;
    const isCollinearY = prev.y === curr.y && curr.y === next.y;

    if (!isCollinearX && !isCollinearY) {
      optimized.push(curr);
    }
  }
  optimized.push(points[points.length - 1]);

  return optimized;
}

/**
 * Serializes a set of routed points into an SVG path string
 */
export function serializePath(points: Point[]): string {
  return points.map((p, idx) => `${idx === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
}

/**
 * Calculates junction points where 3 or more wires meet
 */
export function findJunctionPoints(allPaths: Point[][]): Point[] {
  const coordCounts: Record<string, { count: number; x: number; y: number }> = {};

  allPaths.forEach((path) => {
    path.forEach((p) => {
      const key = `${p.x},${p.y}`;
      if (!coordCounts[key]) {
        coordCounts[key] = { count: 0, x: p.x, y: p.y };
      }
      coordCounts[key].count++;
    });
  });

  return Object.values(coordCounts)
    .filter((entry) => entry.count >= 3)
    .map((entry) => ({ x: entry.x, y: entry.y }));
}
