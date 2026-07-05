import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { validateProjectModel } from "../validators/validateProjectModel";
import { generateDiagramData } from "../diagram/generateDiagramData";
import { generateFirmware } from "../firmware/generateFirmware";
import { generateBOM } from "../bom/generateBOM";

/**
 * Orchestrates Engine 2, processing the planned EngineeringProjectModel
 * to compile and bind the routed diagram layout, BOM catalog, C++ firmware,
 * and DRC scorecard in a synchronized data structure.
 */
export function generateEngineeringOutputs(model: EngineeringProjectModel): EngineeringProjectModel {
  // 1. Calculate prices and build BOM spreadsheet
  model.bom = generateBOM(model.components);

  // 2. Compute component positions and orthogonal wire routes
  model.diagram = generateDiagramData(model.components, model.connections);

  // 3. Weave pin configs to compile firmware code
  model.firmware.fullCode = generateFirmware(model.firmware, model.gpioAssignments);

  // 4. Perform final Design Rule Check validations
  const report = validateProjectModel(model);
  model.validation = {
    errors: report.errors,
    warnings: report.warnings,
    suggestions: report.suggestions,
    engineeringScore: report.engineeringScore,
  };

  return model;
}
