import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { generateMarkdownReport } from "./generateMarkdownReport";
import { exportProjectPDF } from "../documentation-engine/pdf/exporter";

/**
 * Derives report markdown and triggers the high-res PNG canvas capture
 * and jsPDF compiler to produce a print-ready project report.
 */
export async function generatePDFReport(model: EngineeringProjectModel, elementId = "circuit-diagram-export") {
  const markdown = generateMarkdownReport(model);
  
  const components = model.components.map((c) => {
    const pos = model.diagram.componentPositions.find((p) => p.componentId === c.id);
    return {
      id: c.id,
      type: c.type,
      label: c.name,
      value: c.notes || "",
      x: pos ? pos.x : 150,
      y: pos ? pos.y : 200,
      rotation: pos ? pos.rotation : 0
    };
  });

  const connections = model.connections.map((conn) => ({
    from: `${conn.fromComponent}:${conn.fromPin}`,
    to: `${conn.toComponent}:${conn.toPin}`,
    color: conn.wireColor || ""
  }));

  const circuitJson = {
    project: {
      title: model.metadata.title,
      description: model.metadata.description
    },
    components,
    connections
  };

  await exportProjectPDF({
    title: model.metadata.title,
    query: model.metadata.description,
    markdown,
    circuitJson,
    elementId
  });
}
