import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";

/**
 * Compiles model assembly lists into detailed guide steps.
 */
export function generateAssemblyGuide(model: EngineeringProjectModel): string {
  const steps = model.documentation.assemblySteps;
  if (!steps || steps.length === 0) {
    return "No assembly instructions compiled in this project model.";
  }

  const lines = [
    `# Assembly Guide for ${model.metadata.title}`,
    "",
    "Follow these step-by-step instructions to wire and set up your system safely.",
    "Ensure the power source is disconnected throughout assembly.",
    ""
  ];

  steps.forEach((step, index) => {
    lines.push(`### Step ${index + 1}: Assembly Procedure`);
    lines.push(step);
    lines.push("");
  });

  lines.push("### Final Connection Checklist");
  lines.push("- Double-check positive voltage rails and GND networks.");
  lines.push("- Ensure pull-up resistors are secured on signal buses.");
  lines.push("- Connect adapter only after complete wire check.");

  return lines.join("\n");
}
