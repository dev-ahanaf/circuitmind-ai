import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { formatBDT } from "../bom/pricingBDT";

export interface ReportSection {
  id: string;
  title: string;
  type: "text" | "table" | "image" | "code";
  content: string;
  required: boolean;
  order: number;
}

export interface ReportMetadata {
  projectId: string;
  title: string;
  difficulty: string;
  estimatedCostBDT: number;
  timeToBuildHours: number;
}

export interface ProjectReport {
  title: string;
  subtitle: string;
  metadata: ReportMetadata;
  sections: ReportSection[];
}

/**
 * Centrally validates and builds the complete structured report.
 */
export function generateProjectReport(
  model: EngineeringProjectModel,
  assets: {
    diagramPng?: string;
    generatedFirmware?: string;
    wiringTable?: string;
    pinMapping?: string;
    bom?: string;
    validationResults?: string;
  }
): ProjectReport {
  // Validate pre-conditions
  const errors: string[] = [];

  const hasMCU = model.components.some(
    (c) => c.category === "MCU" || c.type.toUpperCase().includes("ESP32") || c.type.toUpperCase().includes("ARDUINO")
  );

  if (hasMCU && !assets.generatedFirmware && !model.firmware.fullCode) {
    errors.push("Export Validation Error: Firmware code is required for microcontroller projects but is empty.");
  }

  if (model.connections.length === 0) {
    errors.push("Export Validation Error: Wiring connections table is empty.");
  }

  if (model.components.length === 0) {
    errors.push("Export Validation Error: Required components BOM has no parts.");
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  // Fallbacks for empty sections
  const assemblySteps = model.documentation.assemblySteps.length > 0
    ? model.documentation.assemblySteps
    : [
        "Mount the main controller (ESP32/Arduino) onto the prototyping grid.",
        "Tie the power regulator rails and establish a common ground (GND) network.",
        "Wire sensors to specified GPIO pins (matching pin mappings).",
        "Wire actuators and motor driver inputs.",
        "Perform visual continuity checks before applying power adapter input."
      ];

  const testingSteps = model.documentation.testingSteps.length > 0
    ? model.documentation.testingSteps
    : [
        "Measure regulator output rails with a multimeter before installing the MCU.",
        "Verify common ground references are connected across all supply buses.",
        "Upload the compiled C++ firmware code using Arduino IDE.",
        "Open Serial Monitor at 115200 baud to check sensor telemetry readings.",
        "Trigger actuators (motors/relays) to confirm directional control."
      ];

  const troubleshooting = model.documentation.troubleshooting.length > 0
    ? model.documentation.troubleshooting
    : [
        "Problem: Microcontroller resets or browns out. Solution: Separate actuator power rails and verify current capacity.",
        "Problem: Sensor reads invalid values or fails bus handshake. Solution: Check pull-up resistor contacts.",
        "Problem: Motor rotates in reverse direction. Solution: Reverse output polarity wires."
      ];

  const safetyNotes = model.documentation.safetyNotes.length > 0
    ? model.documentation.safetyNotes
    : [
        "Double-check regulator pinouts to prevent over-voltage damage to 3.3V logic blocks.",
        "Secure flyback protection diodes (e.g. 1N4007) across inductive relay coils.",
        "Check battery pack polarity before powering.",
        "Ensure emergency power-off switches are easily accessible."
      ];

  const optimization = model.documentation.optimizationSuggestions.length > 0
    ? model.documentation.optimizationSuggestions
    : [
        "Add decoupling ceramic capacitors (100nF) to reduce signal line switching noise.",
        "Consider sleeping mode protocols for IoT battery projects."
      ];

  // Helper formatting tables
  const wiringContent = assets.wiringTable || buildWiringTableMarkdown(model);
  const pinMappingContent = assets.pinMapping || buildPinMappingMarkdown(model);
  const bomContent = assets.bom || buildBOMTableMarkdown(model);
  const codeContent = assets.generatedFirmware || model.firmware.fullCode || "// No firmware code required";
  const validationContent = assets.validationResults || buildValidationSummaryMarkdown(model);

  const reportSections = [
    {
      id: "overview",
      title: "Project Overview",
      type: "text" as const,
      content: `${model.metadata.description}\n\n**Difficulty:** ${model.metadata.difficulty}\n**Estimated Cost:** ${formatBDT(model.metadata.estimatedCostBDT)}\n**Time to Build:** ${model.metadata.estimatedBuildTime} hours`,
      required: true,
      order: 1
    },
    {
      id: "diagram",
      title: "Visual Circuit Diagram",
      type: "image" as const,
      content: assets.diagramPng || "",
      required: true,
      order: 2
    },
    {
      id: "components",
      title: "Required Components",
      type: "table" as const,
      content: bomContent,
      required: true,
      order: 3
    },
    {
      id: "pin-mapping",
      title: "Pin Mapping Table",
      type: "table" as const,
      content: pinMappingContent,
      required: true,
      order: 4
    },
    {
      id: "wiring",
      title: "Wiring Connections Table",
      type: "table" as const,
      content: wiringContent,
      required: true,
      order: 5
    },
    {
      id: "explanation",
      title: "Circuit Explanation",
      type: "text" as const,
      content: `${model.documentation.explanation || "System modulates signal pins to drive actuators based on input levels."}\n\n### Suggestions\n${optimization.map(s => `- ${s}`).join("\n")}`,
      required: true,
      order: 6
    },
    {
      id: "assembly",
      title: "Step-by-Step Assembly",
      type: "text" as const,
      content: assemblySteps.map((step, idx) => `${idx + 1}. ${step}`).join("\n"),
      required: true,
      order: 7
    },
    {
      id: "code",
      title: "Arduino / MCU Code",
      type: "code" as const,
      content: codeContent,
      required: hasMCU,
      order: 8
    },
    {
      id: "testing",
      title: "Testing Procedure",
      type: "text" as const,
      content: testingSteps.map((step, idx) => `${idx + 1}. ${step}`).join("\n"),
      required: true,
      order: 9
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      type: "text" as const,
      content: troubleshooting.map(t => `- ${t}`).join("\n"),
      required: true,
      order: 10
    },
    {
      id: "safety",
      title: "Safety Tips",
      type: "text" as const,
      content: safetyNotes.map(n => `- ⚠️ ${n}`).join("\n"),
      required: true,
      order: 11
    },
    {
      id: "checklist",
      title: "Final Checklist",
      type: "text" as const,
      content: "- [ ] Common Ground references are tied together.\n- [ ] Input supply has voltage regulation (e.g. buck converter).\n- [ ] Visual checks verify no short circuits exist prior to adapter boot.",
      required: true,
      order: 12
    },
    {
      id: "validation",
      title: "Validation Summary",
      type: "table" as const,
      content: validationContent,
      required: true,
      order: 13
    }
  ];

  // Map automatic numbering
  const numberedSections = reportSections.map((s, idx) => ({
    ...s,
    title: `${idx + 1}. ${s.title}`
  }));

  return {
    title: model.metadata.title,
    subtitle: "CircuitMind AI Professional Project Report",
    metadata: {
      projectId: model.metadata.projectId,
      title: model.metadata.title,
      difficulty: model.metadata.difficulty,
      estimatedCostBDT: model.metadata.estimatedCostBDT,
      timeToBuildHours: model.metadata.estimatedBuildTime
    },
    sections: numberedSections
  };
}

function buildWiringTableMarkdown(model: EngineeringProjectModel): string {
  const lines = [
    "| From Component | Pin | To Component | Pin | Signal Type | Wire Color | Notes |",
    "| --- | --- | --- | --- | --- | --- | --- |"
  ];
  model.connections.forEach((c) => {
    lines.push(`| ${c.fromComponent} | ${c.fromPin} | ${c.toComponent} | ${c.toPin} | ${c.signalType} | ${c.wireColor || "Gray"} | ${c.notes || "Wired connection"} |`);
  });
  return lines.join("\n");
}

function buildPinMappingMarkdown(model: EngineeringProjectModel): string {
  const lines = [
    "| Controller Pin | Connected Component | Component Pin | Function | Signal Type | Notes |",
    "| --- | --- | --- | --- | --- | --- |"
  ];
  model.gpioAssignments.forEach((a) => {
    lines.push(`| ${a.controllerPin} | ${a.componentId} | ${a.componentPin} | ${a.function} | ${a.signalType} | ${a.notes || "N/A"} |`);
  });
  return lines.join("\n");
}

function buildBOMTableMarkdown(model: EngineeringProjectModel): string {
  const lines = [
    "| Component | Qty | Specification | Purpose | Unit Price | Total Price |",
    "| --- | --- | --- | --- | --- | --- |"
  ];
  model.bom.forEach((b) => {
    lines.push(`| ${b.componentName} | ${b.quantity} | ${b.specification} | ${b.purpose} | ${formatBDT(b.unitPriceBDT)} | ${formatBDT(b.totalPriceBDT)} |`);
  });
  return lines.join("\n");
}

function buildValidationSummaryMarkdown(model: EngineeringProjectModel): string {
  const lines = [
    "| Validation Check | Status | Details |",
    "| --- | --- | --- |"
  ];

  // Helper flags
  const checkPass = (arr: string[], desc: string) => {
    const hasIssues = arr.some(e => e.toLowerCase().includes(desc.toLowerCase()));
    return hasIssues ? "⚠️ WARNING" : "✅ PASS";
  };

  lines.push(`| GPIO Conflicts | ${checkPass(model.validation.errors, "gpio")} | Safe pin allocation |`);
  lines.push(`| Common Ground | ${checkPass(model.validation.errors, "ground")} | References matched |`);
  lines.push(`| Power Budget | ${checkPass(model.validation.errors, "power")} | Regulation domains configured |`);
  lines.push(`| Voltage Safety | ${checkPass(model.validation.warnings, "voltage")} | Logic level shifts checked |`);
  lines.push(`| High-Current Loads | ${checkPass(model.validation.warnings, "current")} | Inductive protection parts |`);

  lines.push(`\n**Engineering Score:** ${model.validation.engineeringScore}/100`);
  return lines.join("\n");
}
