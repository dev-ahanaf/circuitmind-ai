import { toPng } from "html-to-image";
import { toast } from "sonner";

/**
 * Captures the HTML/SVG diagram canvas element and downloads it as a PNG image file.
 */
export async function exportPNG(elementId = "circuit-diagram-export", filename = "circuit_diagram.png") {
  const toastId = toast.loading("Capturing diagram to PNG...");
  try {
    const node = document.getElementById(elementId);
    if (!node) {
      toast.error(`Canvas element #${elementId} not found in DOM.`, { id: toastId });
      return;
    }

    // Wait slightly to ensure rendering frames finish layouts
    await new Promise((resolve) => setTimeout(resolve, 300));

    const dataUrl = await toPng(node, {
      cacheBust: true,
      pixelRatio: 3, // High resolution scale
      backgroundColor: "#ffffff",
    });

    const trigger = document.createElement("a");
    trigger.href = dataUrl;
    trigger.download = filename;
    trigger.click();

    toast.success("Diagram exported as PNG successfully!", { id: toastId });
  } catch (err: any) {
    console.error("PNG export capture failed:", err);
    toast.error("Failed to capture PNG: " + (err.message || err), { id: toastId });
  }
}
