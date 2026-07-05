import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";

export function validateFirmware(model: EngineeringProjectModel) {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  const fw = model.firmware;

  // 1. Library check based on component list
  const componentTypes = model.components.map((c) => c.type);
  if (componentTypes.includes("DHT22") && !fw.libraries.includes("DHT.h")) {
    warnings.push("Firmware Library Warning: DHT22 sensor is present, but 'DHT.h' library is not included in firmware libraries.");
    suggestions.push("Add 'DHT.h' (Adafruit DHT Sensor Library) to the libraries list.");
  }
  if (
    (componentTypes.includes("LCD 16x2") || componentTypes.includes("OLED")) &&
    !fw.libraries.some((l) => l.includes("LiquidCrystal") || l.includes("Wire") || l.includes("Adafruit"))
  ) {
    warnings.push("Firmware Library Warning: I2C Display is present, but LiquidCrystal_I2C / Wire / SSD1306 headers are missing.");
    suggestions.push("Add '<Wire.h>' and '<LiquidCrystal_I2C.h>' to firmware libraries.");
  }

  // 2. Constants alignment check
  model.gpioAssignments.forEach((assign) => {
    const matchingConstant = Object.entries(fw.pinConstants).some(
      ([key, val]) => String(val) === String(assign.controllerPin)
    );
    if (!matchingConstant) {
      warnings.push(`Firmware Configuration Alert: Pin ${assign.controllerPin} assigned to component ${assign.componentId} is not defined in firmware pinConstants.`);
      suggestions.push(`Define a constant for ${assign.componentId}_PIN with value ${assign.controllerPin} in pinConstants.`);
    }
  });

  return { errors, warnings, suggestions };
}
