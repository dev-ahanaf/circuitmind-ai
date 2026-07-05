import { ProjectComponent, ProjectConnection, DiagramConfig } from "../schema/EngineeringProjectModel";
import { layoutComponents } from "./layoutEngine";
import { routeWires } from "./wireRouter";

/**
 * Compiles positioning layouts and orthogonal routes into DiagramConfig metadata.
 */
export function generateDiagramData(components: ProjectComponent[], connections: ProjectConnection[]): DiagramConfig {
  const componentPositions = layoutComponents(components);
  const wireRoutes = routeWires(connections, componentPositions);

  return {
    canvasSize: { width: 1000, height: 700 },
    componentPositions,
    wireRoutes,
    layers: ["background", "grid", "power", "ground", "signal", "components", "pins", "labels"],
    exportSettings: {},
  };
}
