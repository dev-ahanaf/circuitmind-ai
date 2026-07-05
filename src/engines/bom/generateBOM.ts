import { ProjectComponent, BOMItem } from "../schema/EngineeringProjectModel";
import { lookupPricing } from "./pricingBDT";

/**
 * Deterministically constructs a Bill of Materials table from model components.
 */
export function generateBOM(components: ProjectComponent[]): BOMItem[] {
  return components.map((c) => {
    const pricing = lookupPricing(c.type);
    const unitPrice = c.priceBDT > 0 ? c.priceBDT : pricing.price;
    const spec = c.specification || pricing.specification;
    const qty = c.quantity || 1;

    return {
      componentName: c.name || c.type,
      quantity: qty,
      specification: spec,
      purpose: c.purpose || "General circuit peripheral",
      unitPriceBDT: unitPrice,
      totalPriceBDT: unitPrice * qty,
    };
  });
}
