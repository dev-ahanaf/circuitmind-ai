import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";

/**
 * Builds the complete Wiring Connections table.
 */
function buildWiringTable(model: EngineeringProjectModel): string {
  const lines = [
    "| From component | Pin | To component | Pin | Signal | Voltage | Color |",
    "| --- | --- | --- | --- | --- | --- | --- |"
  ];
  model.connections.forEach((c) => {
    lines.push(`| ${c.fromComponent} | ${c.fromPin} | ${c.toComponent} | ${c.toPin} | ${c.signalName} | ${c.voltage}V | ${c.wireColor || "Gray"} |`);
  });
  return lines.join("\n");
}

/**
 * Builds the BOM table.
 */
function buildBOMTable(model: EngineeringProjectModel): string {
  const lines = [
    "| Component | Qty | Specification | Purpose | Unit Price (BDT) | Total Price (BDT) |",
    "| --- | --- | --- | --- | --- | --- |"
  ];
  model.bom.forEach((b) => {
    lines.push(`| ${b.componentName} | ${b.quantity} | ${b.specification} | ${b.purpose} | ৳${b.unitPriceBDT} | ৳${b.totalPriceBDT} |`);
  });
  return lines.join("\n");
}

/**
 * Formats the model into the markdown report structure expected by the frontend parser.
 */
export function generateMarkdownReport(model: EngineeringProjectModel): string {
  const lines: string[] = [];

  // Title
  lines.push(`# ${model.metadata.title}`);
  lines.push("");

  // DRC warnings at the top
  if (model.validation.errors.length > 0 || model.validation.warnings.length > 0) {
    lines.push("## Design Rule Check (DRC) Warnings");
    model.validation.errors.forEach((err) => {
      lines.push(`> [!ERROR]\n> ❌ **CRITICAL ERROR**: ${err}\n`);
    });
    model.validation.warnings.forEach((warn) => {
      lines.push(`> [!WARNING]\n> ⚠️ **WARNING**: ${warn}\n`);
    });
    lines.push("---");
  }

  // 1. Project Overview
  lines.push("## Project Overview");
  lines.push(model.documentation.safetyNotes.join("\n"));
  lines.push(model.metadata.description);
  lines.push("");
  lines.push(`**Difficulty:** ${model.metadata.difficulty}`);
  lines.push(`**Estimated Cost:** ৳${model.metadata.estimatedCostBDT} BDT`);
  lines.push(`**Time to build:** ${model.metadata.estimatedBuildTime} hours`);
  lines.push("");

  // 2. Required Components
  lines.push("## Required Components");
  lines.push(buildBOMTable(model));
  lines.push("");

  // 3. Wiring Connections
  lines.push("## Wiring Connections");
  lines.push(buildWiringTable(model));
  lines.push("");

  // 4. Circuit Explanation
  lines.push("## Circuit Explanation");
  lines.push(`This design utilizes the controller ${model.controller.name} (${model.controller.type}) to manage the components.`);
  lines.push(model.documentation.optimizationSuggestions.join(" "));
  lines.push("");

  // 5. Step-by-Step Assembly
  lines.push("## Step-by-Step Assembly");
  model.documentation.assemblySteps.forEach((step, idx) => {
    lines.push(`${idx + 1}. ${step}`);
  });
  lines.push("");

  // 6. Arduino / MCU Code
  lines.push("## Arduino / MCU Code");
  lines.push("```cpp");
  lines.push(model.firmware.fullCode);
  lines.push("```");
  lines.push("");

  // 7. Testing & Troubleshooting
  lines.push("## Testing & Troubleshooting");
  lines.push("### Testing Steps");
  model.documentation.testingSteps.forEach((step) => {
    lines.push(`- ${step}`);
  });
  lines.push("\n### Troubleshooting Guide");
  model.documentation.troubleshooting.forEach((trouble) => {
    lines.push(`- ${trouble}`);
  });
  lines.push("");

  // 8. Safety Tips
  lines.push("## Safety Tips");
  model.documentation.safetyNotes.forEach((note) => {
    lines.push(`- ⚠️ ${note}`);
  });
  lines.push("");

  // 9. Final Checklist
  lines.push("## Final Checklist");
  lines.push("- [ ] Common Ground references are tied together.");
  lines.push("- [ ] Adapter input is correctly regulated for low voltage rails.");
  lines.push("- [ ] Uploaded firmware matches the target controller pin assignments.");
  lines.push("");

  // 10. Circuit JSON block for visual SVG drawing
  lines.push("## Circuit JSON");
  lines.push("```json");

  // Map to the simple Circuit interface
  const canvasJson = {
    project: {
      title: model.metadata.title,
      description: model.metadata.description
    },
    components: model.components.map((c) => {
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
    }),
    connections: model.connections.map((conn) => ({
      from: `${conn.fromComponent}:${conn.fromPin}`,
      to: `${conn.toComponent}:${conn.toPin}`,
      color: conn.wireColor || ""
    }))
  };

  lines.push(JSON.stringify(canvasJson, null, 2));
  lines.push("```");

  return lines.join("\n");
}
