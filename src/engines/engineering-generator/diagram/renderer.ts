import { type EngineeringProjectModel } from "../../schema/project-model";
import { type Circuit } from "@/types/Circuit";

/**
 * Deterministically maps model components and connections to the Canvas visualization structure.
 * Applies coordinates and defaults if missing.
 */
export function generateCircuitDiagram(model: EngineeringProjectModel): Circuit {
  const components = model.components.map((c) => ({
    id: c.id,
    type: c.type,
    label: c.label,
    value: c.specification || "",
    x: c.x || 100,
    y: c.y || 100,
    rotation: c.rotation || 0,
  }));

  const connections = model.connections.map((conn) => ({
    from: conn.from,
    to: conn.to,
    color: conn.color || getDefaultWireColor(conn.from, conn.to),
  }));

  return {
    project: {
      title: model.metadata.title,
      description: model.metadata.description,
    },
    components,
    connections,
  };
}

/**
 * Returns helper wire colors based on pin connection types
 */
function getDefaultWireColor(from: string, to: string): string {
  const f = from.toUpperCase();
  const t = to.toUpperCase();

  if (f.includes("VCC") || f.includes("5V") || f.includes("3.3V") || t.includes("VCC") || t.includes("5V") || t.includes("3.3V")) {
    return "red";
  }
  if (f.includes("GND") || t.includes("GND")) {
    return "blue";
  }
  return ""; // default signal wire color
}
