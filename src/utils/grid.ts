/**
 * Snaps a single value to the closest grid node (default 20px)
 */
export function snapToGrid(value: number, gridSize = 20): number {
  return Math.round(value / gridSize) * gridSize;
}

/**
 * Snaps a 2D coordinate point to the grid (default 20px)
 */
export function alignToGrid(point: { x: number; y: number }, gridSize = 20): { x: number; y: number } {
  return {
    x: snapToGrid(point.x, gridSize),
    y: snapToGrid(point.y, gridSize),
  };
}
