import { EngineeringProjectModelSchema } from "../schema/validators";
import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";

/**
 * Validates and parses the raw AI string into the strict EngineeringProjectModel.
 */
export function parsePlannerOutput(rawText: string): EngineeringProjectModel {
  try {
    const jsonMatch = rawText.match(/```json\s*([\s\S]*?)```/);
    const jsonText = jsonMatch ? jsonMatch[1] : rawText;

    const cleaned = jsonText
      .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // remove comments
      .replace(/,\s*([\]}])/g, "$1") // remove trailing commas
      .trim();

    const parsedObj = JSON.parse(cleaned);
    return EngineeringProjectModelSchema.parse(parsedObj) as EngineeringProjectModel;
  } catch (err: any) {
    console.error("AI Planner output failed Zod schema validation:", err);
    throw new Error("Invalid EngineeringProjectModel JSON: " + (err.message || err));
  }
}
