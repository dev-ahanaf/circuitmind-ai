import { FirmwareConfig, GPIOAssignment } from "../schema/EngineeringProjectModel";

/**
 * Generates compilation-ready C++ firmware code matching GPIO pin constants.
 */
export function generateFirmware(fw: FirmwareConfig, gpio: GPIOAssignment[]): string {
  const lines: string[] = [];

  lines.push("// ========================================================");
  lines.push("// Firmware generated from EngineeringProjectModel");
  lines.push(`// Platform: ${fw.platform} | Target Board: ${fw.board}`);
  lines.push("// Designed & Developed by Fayek Ahanaf");
  lines.push("// ========================================================");
  lines.push("");

  // Library includes
  if (fw.libraries && fw.libraries.length > 0) {
    fw.libraries.forEach((lib) => {
      if (lib.startsWith("<") || lib.startsWith('"')) {
        lines.push(`#include ${lib}`);
      } else {
        lines.push(`#include <${lib}>`);
      }
    });
    lines.push("");
  }

  // Pin Allocations Comments
  lines.push("// Pin Configuration Mappings:");
  gpio.forEach((as) => {
    lines.push(`// Pin ${as.controllerPin} ➜ ${as.componentId} (${as.function} | ${as.signalType})`);
  });
  lines.push("");

  // Constants / Pin macros
  if (fw.pinConstants && Object.keys(fw.pinConstants).length > 0) {
    lines.push("// Hardware pin constants");
    Object.entries(fw.pinConstants).forEach(([k, v]) => {
      lines.push(`#define ${k} ${v}`);
    });
    lines.push("");
  }

  // Operational thresholds
  if (fw.thresholds && Object.keys(fw.thresholds).length > 0) {
    lines.push("// Operational configuration constants");
    Object.entries(fw.thresholds).forEach(([k, v]) => {
      lines.push(`const float ${k} = ${v};`);
    });
    lines.push("");
  }

  // Setup Function
  lines.push("void setup() {");
  lines.push("  Serial.begin(115200);");
  if (fw.setupLogic) {
    const indented = fw.setupLogic.split("\n").map(l => "  " + l).join("\n");
    lines.push(indented);
  }
  lines.push("}");
  lines.push("");

  // Loop Function
  lines.push("void loop() {");
  if (fw.loopLogic) {
    const indented = fw.loopLogic.split("\n").map(l => "  " + l).join("\n");
    lines.push(indented);
  }
  lines.push("}");
  lines.push("");

  // Custom helper functions
  if (fw.helperFunctions && fw.helperFunctions.length > 0) {
    fw.helperFunctions.forEach((fn) => {
      lines.push(`${fn.signature} {`);
      lines.push(fn.code.split("\n").map(l => "  " + l).join("\n"));
      lines.push("}");
      lines.push("");
    });
  }

  return lines.join("\n");
}
