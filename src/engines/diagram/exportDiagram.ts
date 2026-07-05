import { exportPNG } from "../exports/exportPNG";
import { toast } from "sonner";

/**
 * Downloads the diagram element as a PNG image.
 */
export async function exportDiagramPNG(elementId = "circuit-diagram-export", filename = "circuit_diagram.png") {
  await exportPNG(elementId, filename);
}

/**
 * Downloads the diagram container SVG code as an SVG vector file.
 */
export function exportDiagramSVG(elementId = "circuit-diagram-export", filename = "circuit_diagram.svg") {
  try {
    const node = document.getElementById(elementId);
    if (!node) {
      toast.error(`Canvas element #${elementId} not found in DOM.`);
      return;
    }

    // Extract the SVG element inside the container
    const svgEl = node.querySelector("svg");
    if (!svgEl) {
      toast.error("No SVG element found inside the diagram capture container.");
      return;
    }

    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgEl);

    // Add namespaces
    if (!source.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)) {
      source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+xmlns:xlink="http:\/\/www\.w3\.org\/1999\/xlink"/)) {
      source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<?xml version="1.0" standalone="no"?>\r\n' + source);
    const trigger = document.createElement("a");
    trigger.href = url;
    trigger.download = filename;
    trigger.click();

    toast.success("Diagram exported as SVG successfully!");
  } catch (err: any) {
    console.error("SVG export failed:", err);
    toast.error("Failed to export SVG: " + (err.message || err));
  }
}
