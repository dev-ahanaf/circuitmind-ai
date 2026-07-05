import { type EngineeringProjectModel } from "../../schema/project-model";

/**
 * Generates the Bill of Materials Markdown Table from component specifications.
 */
export function generateBOMTable(model: EngineeringProjectModel): string {
  const lines: string[] = [
    "| Component | Qty | Specification | Purpose | Approx. Price (BDT) |",
    "| --- | --- | --- | --- | --- |"
  ];

  let total = 0;
  model.components.forEach((c) => {
    const priceText = c.priceBDT > 0 ? `৳${c.priceBDT}` : "Free";
    lines.push(`| ${c.label} | ${c.qty} | ${c.specification || "N/A"} | ${c.purpose} | ${priceText} |`);
    total += c.priceBDT * c.qty;
  });

  return lines.join("\n");
}

/**
 * Calculates the total cost of all BOM items
 */
export function calculateTotalCost(model: EngineeringProjectModel): number {
  return model.components.reduce((sum, c) => sum + (c.priceBDT * c.qty), 0);
}
