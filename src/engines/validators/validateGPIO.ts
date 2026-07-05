import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";

export function validateGPIO(model: EngineeringProjectModel) {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  const pinUsage = new Map<string, string>(); // pinNumber -> componentId
  const ctrl = model.controller;
  const isESP32 = ctrl.type.toUpperCase().includes("ESP32");
  const isUno = ctrl.type.toUpperCase().includes("UNO");

  model.gpioAssignments.forEach((assign) => {
    const pin = assign.controllerPin;
    const compId = assign.componentId;

    // 1. Check duplicate GPIO usage
    if (pinUsage.has(pin) && pinUsage.get(pin) !== compId) {
      errors.push(`GPIO Pin Conflict: Pin ${pin} is assigned to multiple components (${pinUsage.get(pin)} and ${compId}).`);
    } else {
      pinUsage.set(pin, compId);
    }

    // 2. Validate capability
    const pinConfig = ctrl.availablePins.find((p) => p.pinNumber === pin);
    if (!pinConfig) {
      errors.push(`GPIO Pin Configuration Error: Pin ${pin} assigned to component ${compId} is not a valid pin on controller ${ctrl.name}.`);
      return;
    }

    if (assign.requiredCapability === "ADC" || assign.signalType === "Analog") {
      const isAnalog = ctrl.adcPins.includes(pin) || pinConfig.capabilities.includes("ADC");
      if (!isAnalog) {
        errors.push(`GPIO Pin Error: Pin ${pin} is used as Analog input for ${compId}, but does not support ADC capabilities.`);
      }
    }

    if (assign.requiredCapability === "PWM" || assign.signalType === "PWM") {
      const isPWM = ctrl.pwmPins.includes(pin) || pinConfig.capabilities.includes("PWM");
      if (!isPWM) {
        errors.push(`GPIO Pin Error: Pin ${pin} is used as PWM for ${compId}, but does not support hardware PWM capability.`);
      }
    }

    // 3. Boot sensitive pin check for ESP32
    if (isESP32 && ctrl.bootSensitivePins.includes(pin)) {
      warnings.push(`GPIO Pin Warning: Pin ${pin} on ESP32 is boot-sensitive. Using it for ${compId} could prevent the controller from booting if pulled to incorrect state at startup.`);
      suggestions.push(`Reallocate boot-sensitive pin ${pin} to a safe general-purpose GPIO pin.`);
    }
  });

  return { errors, warnings, suggestions };
}
