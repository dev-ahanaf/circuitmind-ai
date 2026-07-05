import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { toast } from "sonner";

/**
 * Downloads the full EngineeringProjectModel as a structured JSON file.
 */
export function exportJSON(model: EngineeringProjectModel) {
  try {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(model, null, 2));
    const trigger = document.createElement("a");
    trigger.href = dataStr;
    trigger.download = `${model.metadata.title.replace(/[^a-z0-9]/gi, "_")}_project_model.json`;
    trigger.click();
    toast.success("EngineeringProjectModel JSON exported successfully!");
  } catch (err: any) {
    toast.error("Failed to export JSON: " + err.message);
  }
}
