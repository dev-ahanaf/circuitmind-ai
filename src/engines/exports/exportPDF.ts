import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { generatePDFReport } from "../documentation/generatePDFReport";

/**
 * Triggers document generation and downloads the project report PDF.
 */
export async function exportPDF(model: EngineeringProjectModel, elementId = "circuit-diagram-export") {
  await generatePDFReport(model, elementId);
}
