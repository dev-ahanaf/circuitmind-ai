import { type EngineeringProjectModel } from "../../schema/project-model";

export interface ValidationMessage {
  type: "warning" | "error" | "info";
  message: string;
  componentId?: string;
  pinId?: string;
}

export interface DRCResult {
  passed: boolean;
  messages: ValidationMessage[];
}

export function runDRCChecks(model: EngineeringProjectModel): DRCResult {
  const messages: ValidationMessage[] = [];

  // Helper arrays
  const controllerMap = new Map(model.controllers.map(c => [c.id, c]));
  const componentMap = new Map(model.components.map(c => [c.id, c]));

  // 1. Check for GPIO Pin Conflicts
  // Track allocations: componentId -> pin -> connection details
  const pinUsage = new Map<string, string>();
  model.connections.forEach((conn) => {
    const [fromComp, fromPin] = conn.from.split(":");
    const [toComp, toPin] = conn.to.split(":");

    // Track usage for source
    const sourceKey = `${fromComp}:${fromPin}`;
    if (pinUsage.has(sourceKey)) {
      messages.push({
        type: "warning",
        message: `Multiple connections detected on pin ${fromPin} of component ${fromComp}. Verify this is a shared bus line.`,
        componentId: fromComp,
        pinId: fromPin
      });
    } else {
      pinUsage.set(sourceKey, conn.to);
    }

    // Track usage for target
    const targetKey = `${toComp}:${toPin}`;
    if (pinUsage.has(targetKey)) {
      messages.push({
        type: "warning",
        message: `Multiple connections detected on pin ${toPin} of component ${toComp}. Verify this is a shared bus line.`,
        componentId: toComp,
        pinId: toPin
      });
    } else {
      pinUsage.set(targetKey, conn.from);
    }
  });

  // 2. Validate Microcontroller Constraints (ADC / PWM / Bus allocations)
  model.controllers.forEach((ctrl) => {
    const isESP32 = ctrl.type.toUpperCase().includes("ESP32");
    
    Object.entries(ctrl.gpioAllocation).forEach(([pinKey, allocation]) => {
      // Check ADC pins
      if (allocation.type === "Analog") {
        const isAnalogPin = pinKey.startsWith("A") || (isESP32 && ["32", "33", "34", "35", "36", "39"].includes(pinKey));
        if (!isAnalogPin) {
          messages.push({
            type: "error",
            message: `Pin ${pinKey} on controller ${ctrl.id} is allocated for Analog input, but it is not an ADC pin!`,
            componentId: ctrl.id,
            pinId: pinKey
          });
        }
      }

      // Check PWM pins
      if (allocation.type === "PWM") {
        const unoPwmPins = ["3", "5", "6", "9", "10", "11"];
        const isUno = ctrl.type.toUpperCase().includes("UNO");
        if (isUno && !unoPwmPins.includes(pinKey.replace("D", ""))) {
          messages.push({
            type: "error",
            message: `Pin ${pinKey} on Arduino Uno is allocated for PWM control, but it does not support PWM (only pins 3, 5, 6, 9, 10, 11 support hardware PWM).`,
            componentId: ctrl.id,
            pinId: pinKey
          });
        }
      }
    });
  });

  // 3. Voltage Domain Mismatch checks (e.g., 5V logic connected directly to 3.3V logic)
  const controllers = model.components.filter(c => c.type === "Arduino Uno" || c.type === "Arduino Nano" || c.type === "ESP32" || c.type === "ESP8266");
  const esp32Node = controllers.find(c => c.type === "ESP32" || c.type === "ESP8266");
  
  if (esp32Node) {
    // Check if any 5V sensor outputs connect to ESP32 inputs
    model.connections.forEach((conn) => {
      const [fromComp, fromPin] = conn.from.split(":");
      const [toComp, toPin] = conn.to.split(":");

      const sourceComp = componentMap.get(fromComp);
      const destComp = componentMap.get(toComp);

      if (sourceComp && destComp) {
        const isSource5V = sourceComp.specification?.includes("5V") || sourceComp.type.includes("5V") || sourceComp.type.includes("L298N");
        const isDestESP32 = destComp.id === esp32Node.id;
        
        if (isSource5V && isDestESP32 && !fromPin.toUpperCase().includes("GND") && !toPin.toUpperCase().includes("GND")) {
          messages.push({
            type: "warning",
            message: `Voltage domain warning: 5V signals from ${sourceComp.label} (${fromPin}) are connected directly to 3.3V ESP32 (${toPin}). A level shifter or voltage divider is recommended.`,
            componentId: destComp.id,
            pinId: toPin
          });
        }
      }
    });
  }

  // 4. Power Load Current Checks (Microcontrollers powering heavy loads directly)
  model.connections.forEach((conn) => {
    const [fromComp, fromPin] = conn.from.split(":");
    const [toComp, toPin] = conn.to.split(":");

    const sourceComp = componentMap.get(fromComp);
    const destComp = componentMap.get(toComp);

    if (sourceComp && destComp) {
      const isControllerSource = sourceComp.type.includes("Arduino") || sourceComp.type.includes("ESP32");
      const isHeavyLoad = destComp.type === "DC Motor" || destComp.type === "Servo" || destComp.type === "Relay" || destComp.type === "Stepper Motor";
      const isPowerLine = fromPin.includes("5V") || fromPin.includes("3.3V") || fromPin.includes("VCC");

      if (isControllerSource && isHeavyLoad && isPowerLine && toPin.toLowerCase().includes("vcc")) {
        messages.push({
          type: "warning",
          message: `Current limit warning: Heavy inductive load ${destComp.label} is powered directly from the microcontroller pin ${fromPin}. Consider using an external power source or battery pack to prevent voltage brownouts.`,
          componentId: destComp.id
        });
      }
    }
  });

  // 5. Common Ground check
  if (model.power.commonGround === false) {
    messages.push({
      type: "warning",
      message: "Safety notice: Common ground is disabled. Verify that reference voltages are connected, or check for missing GND lines."
    });
  }

  // Verify that all ground connections are tied together
  const hasGndConnections = model.connections.some(c => c.from.toUpperCase().includes("GND") || c.to.toUpperCase().includes("GND"));
  if (!hasGndConnections && model.components.length > 2) {
    messages.push({
      type: "error",
      message: "Design check failure: No ground (GND) connection nets found in connection logs. Make sure to wire all negative rails together."
    });
  }

  // 6. Inductive Load Flyback Protection (Relays / Motors)
  const inductiveComponents = model.components.filter(c => c.type === "Relay" || c.type === "DC Motor");
  inductiveComponents.forEach((ind) => {
    // Check if there is a protection diode connected in parallel
    const hasDiode = model.components.some(c => c.type.includes("Diode") && c.purpose.toLowerCase().includes(ind.id.toLowerCase()));
    if (!hasDiode) {
      messages.push({
        type: "info",
        message: `Recommendation: Inductive load ${ind.label} (${ind.id}) should have a flyback diode (e.g. 1N4007) connected across its coil/terminals to prevent EMF voltage spikes.`,
        componentId: ind.id
      });
    }
  });

  // 7. Decoupling capacitor recommendations
  const noiseSensitive = model.components.some(c => c.type.includes("OLED") || c.type.includes("Sensor"));
  const hasDCMotors = model.components.some(c => c.type.includes("Motor") || c.type.includes("Driver"));
  if (noiseSensitive && hasDCMotors && model.power.decouplingCapacitors.length === 0) {
    messages.push({
      type: "info",
      message: "Recommendation: Consider adding a 100nF decoupling capacitor close to microcontroller supply pins and a 10uF cap near motor driver supply lines to filter out switching noise."
    });
  }

  // Determine passed/failed state
  const hasErrors = messages.some(m => m.type === "error");

  return {
    passed: !hasErrors,
    messages
  };
}
