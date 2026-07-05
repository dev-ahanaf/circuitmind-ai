import { ComponentPosition, ProjectConnection, WireRoute } from "../schema/EngineeringProjectModel";

/**
 * Computes orthogonal wire path nodes to prevent diagonal wire overlapping on the grid canvas.
 */
export function routeWires(connections: ProjectConnection[], positions: ComponentPosition[]): WireRoute[] {
  const routes: WireRoute[] = [];
  const posMap = new Map(positions.map((p) => [p.componentId, p]));

  connections.forEach((conn) => {
    const fromPos = posMap.get(conn.fromComponent);
    const toPos = posMap.get(conn.toComponent);

    if (fromPos && toPos) {
      const x1 = fromPos.x;
      const y1 = fromPos.y;
      const x2 = toPos.x;
      const y2 = toPos.y;

      // Draw standard double-bend orthogonal path:
      // Start (x1, y1) -> Mid (midX, y1) -> Corner (midX, y2) -> End (x2, y2)
      const midX = x1 + (x2 - x1) / 2;

      routes.push({
        connectionId: conn.id,
        points: [
          { x: x1, y: y1 },
          { x: midX, y: y1 },
          { x: midX, y: y2 },
          { x: x2, y: y2 },
        ],
      });
    }
  });

  return routes;
}
