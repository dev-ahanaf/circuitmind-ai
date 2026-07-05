import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { generateMarkdownReport } from "../documentation/generateMarkdownReport";
import { toast } from "sonner";

/**
 * Downloads the compiled markdown documentation report as a file.
 */
export function exportMarkdown(model: EngineeringProjectModel) {
  try {
    const md = generateMarkdownReport(model);
    const dataStr = "data:text/markdown;charset=utf-8," + encodeURIComponent(md);
    const trigger = document.createElement("a");
    trigger.href = dataStr;
    trigger.download = `${model.metadata.title.replace(/[^a-z0-9]/gi, "_")}_project_report.md`;
    trigger.click();
    toast.success("Markdown report exported successfully!");
  } catch (err: any) {
    toast.error("Failed to export Markdown: " + err.message);
  }
}
