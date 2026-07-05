import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";

export function validateConnections(model: EngineeringProjectModel) {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  // 1. Common Ground Check
  if (model.powerSystem.commonGroundRequired) {
    const hasGroundNet = model.connections.some(
      (conn) => conn.signalName.toUpperCase().includes("GND") || conn.signalName.toUpperCase().includes("GROUND")
    );
    if (!hasGroundNet && model.components.length > 2) {
      errors.push("Connectivity Error: Missing common ground connection net. Ensure all component GND pins are tied together.");
      suggestions.push("Create common Ground (GND) nodes connecting controller GND, sensor GNDs, and power converter output GNDs.");
    }
  }

  // 2. DHT22 Pull-up Resistor Check
  const hasDHT22 = model.components.some((c) => c.type === "DHT22");
  if (hasDHT22) {
    const hasPullup = model.components.some(
      (c) => c.type === "Resistor" && c.purpose.toLowerCase().includes("dht")
    );
    if (!hasPullup) {
      warnings.push("DHT22 Alert: DHT22 data lines require a 10kΩ pull-up resistor to VCC for stable bus communication.");
      suggestions.push("Add a 10kΩ current pull-up resistor between the DHT22 data pin and the VCC rail.");
    }
  }

  // 3. Flyback diode check for inductive components
  const hasDCLoads = model.components.some((c) => ["DC Motor", "Relay"].includes(c.type));
  if (hasDCLoads) {
    const hasDiode = model.components.some((c) => c.type === "Diode" || c.type.includes("Flyback"));
    if (!hasDiode) {
      warnings.push("Inductive EMF Alert: Motor/relay coil terminals require a flyback diode (e.g. 1N4007) connected in parallel to prevent high-voltage EMF kickback spikes.");
      suggestions.push("Connect a 1N4007 diode in parallel (reverse-biased) across the DC motor / relay coil terminals.");
    }
  }

  return { errors, warnings, suggestions };
}
