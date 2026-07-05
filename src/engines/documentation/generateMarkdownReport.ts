import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { generateProjectReport } from "./generateProjectReport";

/**
 * Compiles the model into a unified Markdown report using the central generateProjectReport orchestrator.
 */
export function generateMarkdownReport(model: EngineeringProjectModel, diagramPng?: string): string {
  const report = generateProjectReport(model, { diagramPng });
  const lines: string[] = [];

  lines.push(`# ${report.title}`);
  lines.push(`_${report.subtitle}_`);
  lines.push("");

  report.sections.forEach((sec) => {
    lines.push(`## ${sec.title}`);
    if (sec.type === "code") {
      lines.push("```cpp");
      lines.push(sec.content);
      lines.push("```");
    } else if (sec.type === "image") {
      if (sec.content) {
        lines.push(`![Visual Circuit Diagram](${sec.content})`);
      } else {
        lines.push("_Diagram preview is rendered visually on the web canvas page._");
      }
    } else {
      lines.push(sec.content);
    }
    lines.push("");
  });

  return lines.join("\n");
}
