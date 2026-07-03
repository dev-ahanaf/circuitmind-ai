import { normalizeType } from "@/components/renderer/PinMap";
import { type CircuitComponent } from "@/types/Component";
import { snapToGrid } from "./grid";

/**
 * Automates 20px grid-snapped coordinate placements for schematic components.
 */
export function autoLayout(components: any[]): CircuitComponent[] {
  if (!components || components.length === 0) return [];

  // Check if we need to auto-layout (if coordinates are missing, zero, or highly clustered)
  const needsLayout = components.some(
    (c) => c.x === undefined || c.y === undefined || (c.x === 0 && c.y === 0)
  );

  const snappedComponents = components.map((c) => ({
    ...c,
    x: snapToGrid(c.x || 0, 20),
    y: snapToGrid(c.y || 0, 20),
    rotation: c.rotation || 0,
  }));

  if (!needsLayout) {
    // Check for overlap
    const coords = new Set<string>();
    let overlap = false;
    for (const c of snappedComponents) {
      const key = `${c.x},${c.y}`;
      if (coords.has(key)) {
        overlap = true;
        break;
      }
      coords.add(key);
    }
    if (!overlap) {
      return snappedComponents;
    }
  }

  // Positioning categorizations
  let controller: any = null;
  const passives: any[] = [];
  const sensorsInputs: any[] = [];
  const actuatorsOutputs: any[] = [];
  const powerSupply: any[] = [];
  const grounds: any[] = [];

  snappedComponents.forEach((c) => {
    const norm = normalizeType(c.type).toLowerCase();
    if (norm.includes("arduino") || norm.includes("esp32") || norm.includes("esp8266")) {
      controller = c;
    } else if (norm.includes("ground")) {
      grounds.push(c);
    } else if (norm.includes("battery") || norm.includes("power supply")) {
      powerSupply.push(c);
    } else if (
      norm.includes("sensor") ||
      norm.includes("ldr") ||
      norm.includes("button") ||
      norm.includes("switch") ||
      norm.includes("potentiometer")
    ) {
      sensorsInputs.push(c);
    } else if (
      norm.includes("led") ||
      norm.includes("motor") ||
      norm.includes("buzzer") ||
      norm.includes("lcd") ||
      norm.includes("oled") ||
      norm.includes("servo") ||
      norm.includes("relay")
    ) {
      actuatorsOutputs.push(c);
    } else {
      passives.push(c);
    }
  });

  const layouted: CircuitComponent[] = [];

  // 1. Position Controller in the center
  const controllerX = 320;
  const controllerY = 180;
  if (controller) {
    controller.x = controllerX;
    controller.y = controllerY;
    layouted.push(controller);
  }

  // 2. Position Power Supply / Batteries on the Left Column
  const powerX = 80;
  let powerY = 180;
  powerSupply.forEach((p) => {
    p.x = powerX;
    p.y = powerY;
    p.rotation = 0;
    layouted.push(p);
    powerY += 120;
  });

  // 3. Position Sensors / Inputs along the Top Row (distributed horizontally)
  let sensorX = 200;
  const sensorY = 40;
  sensorsInputs.forEach((s) => {
    s.x = sensorX;
    s.y = sensorY;
    s.rotation = 0;
    layouted.push(s);
    sensorX += 160;
  });

  // 4. Position Actuators / Outputs on the Right Column (distributed vertically)
  const outputX = 680;
  let outputY = 80;
  actuatorsOutputs.forEach((a) => {
    a.x = outputX;
    a.y = outputY;
    a.rotation = 0;
    layouted.push(a);
    outputY += 140;
  });

  // 5. Position Grounds at the Bottom
  let gndX = controllerX + 40;
  const gndY = 440;
  grounds.forEach((g) => {
    g.x = gndX;
    g.y = gndY;
    g.rotation = 0;
    layouted.push(g);
    gndX += 100;
  });

  // 6. Position Passives (resistors, capacitors) in the intermediate channel
  const passiveX = 520;
  let passiveY = 120;
  passives.forEach((p, idx) => {
    p.x = passiveX + (idx % 2) * 60;
    p.y = passiveY;
    p.rotation = 90; // Default vertical for schematic lines
    layouted.push(p);
    passiveY += 100;
  });

  // Fallback
  snappedComponents.forEach((c) => {
    if (!layouted.some((l) => l.id === c.id)) {
      c.x = 200;
      c.y = 100;
      c.rotation = 0;
      layouted.push(c);
    }
  });

  return layouted;
}
