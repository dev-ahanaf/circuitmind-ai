/**
 * Rotates a 2D coordinate around a specified center point by an angle in degrees.
 */
export function rotatePoint(
  x: number,
  y: number,
  cx: number,
  cy: number,
  angle: number // 0, 90, 180, 270
): { x: number; y: number } {
  const radians = (angle * Math.PI) / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  // Translate to origin
  const dx = x - cx;
  const dy = y - cy;

  // Rotate
  const rx = dx * cos - dy * sin;
  const ry = dx * sin + dy * cos;

  // Translate back
  return {
    x: Math.round(rx + cx),
    y: Math.round(ry + cy),
  };
}

/**
 * Returns rotated exit direction for pin mapping
 */
export function rotateDirection(
  direction: "left" | "right" | "top" | "bottom",
  angle: number
): "left" | "right" | "top" | "bottom" {
  const directions: Array<"top" | "right" | "bottom" | "left"> = ["top", "right", "bottom", "left"];
  const idx = directions.indexOf(direction);
  if (idx === -1) return direction;

  const shift = Math.round(angle / 90);
  const newIdx = (idx + shift) % 4;
  return directions[newIdx >= 0 ? newIdx : newIdx + 4];
}

/**
 * Returns Euclidean distance between two points
 */
export function getDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
