import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";

export function validateVoltage(model: EngineeringProjectModel) {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  const mcu = model.controller;
  const is33VLogic = mcu.logicLevel === 3.3;

  model.connections.forEach((conn) => {
    // Find destination component
    const fromComp = model.components.find((c) => c.id === conn.fromComponent);
    const toComp = model.components.find((c) => c.id === conn.toComponent);

    if (is33VLogic) {
      // 5V component driving 3.3V MCU directly
      if (
        fromComp &&
        fromComp.voltage === 5.0 &&
        conn.toComponent === mcu.id &&
        !conn.toPin.toUpperCase().includes("GND") &&
        !conn.toPin.toUpperCase().includes("VIN") &&
        !conn.toPin.toUpperCase().includes("5V")
      ) {
        warnings.push(`Logic Level Warning: 5V logic signal from component ${fromComp.id} (${fromComp.name}) is connected directly to 3.3V controller ${mcu.name} pin ${conn.toPin}.`);
        suggestions.push(`Add a logic level shifter or resistor voltage divider (e.g. 10k + 20k) on pin ${conn.toPin}.`);
      }
    }
  });

  return { errors, warnings, suggestions };
}
