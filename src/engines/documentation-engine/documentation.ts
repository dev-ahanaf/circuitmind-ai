import { type EngineeringProjectModel } from "../schema/project-model";
import { generateBOMTable, calculateTotalCost } from "../engineering-generator/bom/compiler";
import { generateFirmware } from "../engineering-generator/firmware/builder";
import { runDRCChecks } from "../engineering-generator/validators/drc";
import { generateCircuitDiagram } from "../engineering-generator/diagram/renderer";

/**
 * Builds the complete wiring table in Markdown format.
 */
export function generateWiringTable(model: EngineeringProjectModel): string {
  const lines: string[] = [
    "| From (MCU/Driver Pin) | To (Component Pin) | Net Name | Notes |",
    "| --- | --- | --- | --- |"
  ];

  model.connections.forEach((c) => {
    lines.push(`| ${c.from} | ${c.to} | ${c.netName || "SIGNAL"} | Wired using ${c.color || "standard"} connections |`);
  });

  return lines.join("\n");
}

/**
 * Compiles the entire EngineeringProjectModel into a single structured Markdown report.
 * This report retains the exact sections expected by the original UI parser.
 */
export function compileProjectReport(model: EngineeringProjectModel): string {
  const lines: string[] = [];

  // Run DRC rules and prepend warnings/info alerts
  const drc = runDRCChecks(model);
  if (drc.messages.length > 0) {
    lines.push("## Design Rule Check (DRC) Warnings");
    drc.messages.forEach((msg) => {
      const prefix = msg.type === "error" ? "❌ **ERROR**:" : msg.type === "warning" ? "⚠️ **WARNING**:" : "ℹ️ **INFO**:";
      lines.push(`> [!${msg.type.toUpperCase()}]\n> ${prefix} ${msg.message}\n`);
    });
    lines.push("---");
  }

  // 1. Project Overview & Metadata
  lines.push("## Project Overview");
  lines.push(model.documentation.overview);
  lines.push("");
  lines.push(`**Difficulty:** ${model.metadata.difficulty}`);
  lines.push(`**Estimated Cost:** ৳${calculateTotalCost(model)} BDT`);
  lines.push(`**Time to build:** ${model.metadata.timeToBuildHours} hours`);
  lines.push("");

  // 2. Required Components
  lines.push("## Required Components");
  lines.push(generateBOMTable(model));
  lines.push("");

  // 3. Wiring Connections
  lines.push("## Wiring Connections");
  lines.push(generateWiringTable(model));
  lines.push("");

  // 4. Circuit Explanation
  lines.push("## Circuit Explanation");
  lines.push(model.documentation.explanation);
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
  lines.push(generateFirmware(model));
  lines.push("```");
  lines.push("");

  // 7. Testing & Troubleshooting
  lines.push("## Testing & Troubleshooting");
  model.documentation.testingProcedures.forEach((test) => {
    lines.push(`- **Test Procedure:** ${test}`);
  });
  model.documentation.troubleshootingSteps.forEach((trouble) => {
    lines.push(`- **Troubleshoot:** ${trouble}`);
  });
  lines.push("");

  // 8. Safety Tips
  lines.push("## Safety Tips");
  model.documentation.safetyWarnings.forEach((warn) => {
    lines.push(`- ⚠️ ${warn}`);
  });
  lines.push("");

  // 9. Final Checklist
  lines.push("## Final Checklist");
  lines.push("- [ ] All GND rails are tied together.");
  lines.push("- [ ] Component voltage supply levels match power domains.");
  lines.push("- [ ] Connections correspond to pin assignment definitions.");
  lines.push("");

  // 10. Circuit JSON
  lines.push("## Circuit JSON");
  lines.push("```json");
  const circuitJson = generateCircuitDiagram(model);
  lines.push(JSON.stringify(circuitJson, null, 2));
  lines.push("```");

  return lines.join("\n");
}
