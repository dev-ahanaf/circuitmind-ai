import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";

export function validatePower(model: EngineeringProjectModel) {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  const power = model.powerSystem;

  // 1. Check input source and voltage
  if (power.inputVoltage <= 0) {
    errors.push("Power Budget Error: Power input voltage must be greater than 0V.");
  }

  // 2. Regulators check
  const needsRegulators = power.inputVoltage > 5.5 && model.components.some((c) => c.voltage <= 5.0);
  if (needsRegulators && power.regulators.length === 0) {
    errors.push(`Power regulation error: Input adapter voltage is ${power.inputVoltage}V but no voltage regulators are defined. ESP32/Arduino requires regulated 5V/3.3V supply.`);
    suggestions.push("Add a step-down buck converter (e.g., LM2596) or linear voltage regulators (e.g. 7805, AMS1117).");
  }

  // 3. Power rail capacity checks
  power.rails.forEach((rail) => {
    // Sum current requirements for components powered by this rail voltage domain
    const componentsOnRail = model.components.filter((c) => c.voltage === rail.voltage);
    const totalCurrentNeeded = componentsOnRail.reduce((sum, c) => sum + c.currentRequirement, 0);

    if (totalCurrentNeeded > rail.currentCapacity) {
      errors.push(`Power Rail Overload: Total current required on the ${rail.name} (${rail.voltage}V) rail is ${totalCurrentNeeded}mA, which exceeds its capacity of ${rail.currentCapacity}mA.`);
      suggestions.push(`Upgrade regulator ${rail.sourceComponentId} or select a higher current capacity regulator.`);
    }
  });

  // 4. Heavy inductive loads connected to MCU
  const heavyLoads = model.components.filter(
    (c) => c.category === "Actuator" && ["DC Motor", "Servo", "Relay", "Stepper Motor"].includes(c.type)
  );

  heavyLoads.forEach((act) => {
    const isPoweredByMCU = model.connections.some(
      (conn) =>
        (conn.fromComponent === model.controller.id && conn.toComponent === act.id && conn.fromPin === "5V") ||
        (conn.fromComponent === act.id && conn.toComponent === model.controller.id && conn.toPin === "5V")
    );

    if (isPoweredByMCU && act.currentRequirement > 150) {
      warnings.push(`Safety warning: High-current actuator ${act.name} (${act.currentRequirement}mA) is powered directly from the microcontroller 5V rail. This can cause voltage spikes or brownouts.`);
      suggestions.push(`Power actuator ${act.name} from an external regulator or battery supply using common ground connectivity.`);
    }
  });

  return { errors, warnings, suggestions };
}
