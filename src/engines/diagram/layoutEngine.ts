import { ProjectComponent, ComponentPosition } from "../schema/EngineeringProjectModel";

/**
 * Computes deterministic X/Y grid positions for components based on their type, category, and purpose.
 */
export function layoutComponents(components: ProjectComponent[]): ComponentPosition[] {
  const positions: ComponentPosition[] = [];

  let sensorCount = 0;
  let passiveCount = 0;
  let actuatorCount = 0;

  components.forEach((c) => {
    let x = 500;
    let y = 350;
    let rotation = 0;

    const typeUpper = c.type.toUpperCase();

    // 1. Power supplies & converters: Top-Left
    if (c.category === "Power" || typeUpper.includes("BATTERY") || typeUpper.includes("POWER SUPPLY") || typeUpper.includes("REGULATOR")) {
      x = 120;
      y = 120 + passiveCount * 120;
      passiveCount++;
    }
    // 2. Microcontroller: Center
    else if (c.category === "MCU" || typeUpper.includes("ESP32") || typeUpper.includes("ARDUINO")) {
      x = 450;
      y = 300;
    }
    // 3. Displays & Comms: Top-Right / Upper-Right
    else if (c.category === "Display" || typeUpper.includes("LCD") || typeUpper.includes("OLED")) {
      x = 800;
      y = 120;
    } else if (c.category === "Communication" || typeUpper.includes("BLUETOOTH") || typeUpper.includes("WIFI")) {
      x = 800;
      y = 280;
    }
    // 4. Sensors: Left side, stacked vertically
    else if (c.category === "Sensor" || typeUpper.includes("DHT") || typeUpper.includes("MOISTURE") || typeUpper.includes("LDR") || typeUpper.includes("SENSOR")) {
      x = 150;
      y = 280 + sensorCount * 140;
      sensorCount++;
    }
    // 5. Relays/Drivers: Right side
    else if (typeUpper.includes("RELAY") || typeUpper.includes("L298") || typeUpper.includes("DRIVER")) {
      x = 750;
      y = 440 + actuatorCount * 120;
      actuatorCount++;
    }
    // 6. Actuators/Motors/Indicators: Far-Right / Bottom-Right
    else if (c.category === "Actuator" || typeUpper.includes("MOTOR") || typeUpper.includes("PUMP") || typeUpper.includes("BUZZER") || typeUpper.includes("SERVO")) {
      x = 920;
      y = 440 + actuatorCount * 120;
      actuatorCount++;
    } else if (typeUpper.includes("LED")) {
      x = 800;
      y = 580;
    }
    // 7. Ground / Reference nodes: Bottom
    else if (typeUpper.includes("GROUND") || typeUpper.includes("GND")) {
      x = 450;
      y = 600;
    }
    // Default passives
    else {
      x = 300;
      y = 120 + passiveCount * 80;
      passiveCount++;
    }

    positions.push({
      componentId: c.id,
      x,
      y,
      rotation,
    });
  });

  return positions;
}
