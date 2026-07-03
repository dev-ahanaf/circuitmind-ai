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
  const powerGround: any[] = [];

  snappedComponents.forEach((c) => {
    const norm = normalizeType(c.type).toLowerCase();
    if (norm.includes("arduino") || norm.includes("esp32") || norm.includes("esp8266")) {
      controller = c;
    } else if (norm.includes("ground") || norm.includes("battery") || norm.includes("power supply")) {
      powerGround.push(c);
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

  // 1. Center the Controller
  const controllerX = 300;
  const controllerY = 200;
  if (controller) {
    controller.x = controllerX;
    controller.y = controllerY;
    layouted.push(controller);
  }

  // 2. Position Sensors / Inputs on the Left Column (snapped to 20px grid)
  const sensorX = 60;
  let sensorY = 80;
  sensorsInputs.forEach((s) => {
    s.x = sensorX;
    s.y = sensorY;
    s.rotation = 0;
    layouted.push(s);
    sensorY += 140;
  });

  // 3. Position Actuators / Outputs on the Right Column (snapped to 20px grid)
  const outputX = 660;
  let outputY = 80;
  actuatorsOutputs.forEach((a) => {
    a.x = outputX;
    a.y = outputY;
    a.rotation = 0;
    layouted.push(a);
    outputY += 160;
  });

  // 4. Position Passives in middle buffers
  const passiveX = 460;
  let passiveY = 380;
  passives.forEach((p, idx) => {
    p.x = passiveX + (idx % 2) * 120;
    p.y = passiveY + Math.floor(idx / 2) * 100;
    p.rotation = (idx % 2) * 90; // Alternate rotations (0, 90) for clean wiring!
    layouted.push(p);
  });

  // 5. Position Power & Grounds
  let pwrX = 260;
  const pwrY = 460;
  powerGround.forEach((pg) => {
    const norm = normalizeType(pg.type).toLowerCase();
    if (norm.includes("ground")) {
      pg.x = controllerX + 40;
      pg.y = 480;
    } else {
      pg.x = pwrX;
      pg.y = pwrY;
      pwrX += 120;
    }
    pg.rotation = 0;
    layouted.push(pg);
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
