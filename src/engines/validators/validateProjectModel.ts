import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { validateGPIO } from "./validateGPIO";
import { validatePower } from "./validatePower";
import { validateVoltage } from "./validateVoltage";
import { validateConnections } from "./validateConnections";
import { validateFirmware } from "./validateFirmware";

export interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
  engineeringScore: number;
}

/**
 * Runs all validation rules over the project model and outputs a structured scorecard.
 */
export function validateProjectModel(model: EngineeringProjectModel): ValidationReport {
  const gpioRes = validateGPIO(model);
  const powerRes = validatePower(model);
  const voltageRes = validateVoltage(model);
  const connRes = validateConnections(model);
  const fwRes = validateFirmware(model);

  const errors = [
    ...gpioRes.errors,
    ...powerRes.errors,
    ...voltageRes.errors,
    ...connRes.errors,
    ...fwRes.errors,
  ];

  const warnings = [
    ...gpioRes.warnings,
    ...powerRes.warnings,
    ...voltageRes.warnings,
    ...connRes.warnings,
    ...fwRes.warnings,
  ];

  const suggestions = [
    ...gpioRes.suggestions,
    ...powerRes.suggestions,
    ...voltageRes.suggestions,
    ...connRes.suggestions,
    ...fwRes.suggestions,
  ];

  // Calculate engineering score
  // Start at 100, subtract 15 per error, 5 per warning. Capped between 0 and 100.
  let score = 100 - errors.length * 15 - warnings.length * 5;
  if (score < 0) score = 0;

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions,
    engineeringScore: score,
  };
}
