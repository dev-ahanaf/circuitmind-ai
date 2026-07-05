import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { toast } from "sonner";

/**
 * Downloads the compiled firmware source code as an Arduino .ino sketch.
 */
export function exportCode(model: EngineeringProjectModel) {
  try {
    const code = model.firmware.fullCode;
    if (!code) {
      toast.error("No firmware code available to export.");
      return;
    }
    const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(code);
    const trigger = document.createElement("a");
    trigger.href = dataStr;
    trigger.download = `${model.metadata.title.replace(/[^a-z0-9]/gi, "_")}_code.ino`;
    trigger.click();
    toast.success("Firmware sketch (.ino) exported successfully!");
  } catch (err: any) {
    toast.error("Failed to export firmware: " + err.message);
  }
}
