import { COMPONENT_DIMENSIONS, normalizeType } from "@/components/renderer/PinMap";

export interface ComponentJSON {
  id: string;
  type: string;
  label?: string;
  value?: string;
  x?: number;
  y?: number;
}

export interface ConnectionJSON {
  from: string;
  to: string;
}

export interface CircuitJSON {
  project?: { title?: string; description?: string };
  components: ComponentJSON[];
  connections: ConnectionJSON[];
}

/**
 * Ensures all components have valid x/y coordinates and arranges them if coordinates are missing or overlapping.
 */
export function autoLayout(components: ComponentJSON[]): ComponentJSON[] {
  if (!components || components.length === 0) return [];

  // Check if we need to auto-layout (if coordinates are missing, zero, or highly clustered)
  const needsLayout = components.some(
    (c) => c.x === undefined || c.y === undefined || (c.x === 0 && c.y === 0)
  );

  if (!needsLayout) {
    // Check for complete overlap (e.g. multiple components at the exact same coordinate)
    const coords = new Set<string>();
    let overlap = false;
    for (const c of components) {
      const key = `${c.x},${c.y}`;
      if (coords.has(key)) {
        overlap = true;
        break;
      }
      coords.add(key);
    }
    if (!overlap) {
      return components; // Return as-is
    }
  }

  // Position logic
  let controller: ComponentJSON | null = null;
  const passives: ComponentJSON[] = [];
  const sensorsInputs: ComponentJSON[] = [];
  const actuatorsOutputs: ComponentJSON[] = [];
  const powerGround: ComponentJSON[] = [];

  components.forEach((c) => {
    const norm = normalizeType(c.type).toLowerCase();
    if (norm.includes("arduino") || norm.includes("esp32") || norm.includes("esp8266")) {
      controller = c;
    } else if (norm.includes("ground") || norm.includes("battery") || norm.includes("power supply")) {
      powerGround.push(c);
    } else if (norm.includes("sensor") || norm.includes("ldr") || norm.includes("button") || norm.includes("switch") || norm.includes("potentiometer")) {
      sensorsInputs.push(c);
    } else if (norm.includes("led") || norm.includes("motor") || norm.includes("buzzer") || norm.includes("lcd") || norm.includes("oled") || norm.includes("servo") || norm.includes("relay")) {
      actuatorsOutputs.push(c);
    } else {
      passives.push(c);
    }
  });

  const layouted: ComponentJSON[] = [];

  // 1. Center the Controller
  let controllerX = 300;
  let controllerY = 200;
  if (controller) {
    (controller as ComponentJSON).x = controllerX;
    (controller as ComponentJSON).y = controllerY;
    layouted.push(controller);
  }

  // 2. Position Sensors / Inputs on the Left Column
  let sensorX = 50;
  let sensorY = 80;
  sensorsInputs.forEach((s) => {
    s.x = sensorX;
    s.y = sensorY;
    layouted.push(s);
    sensorY += 140; // Spacing down
  });

  // 3. Position Actuators / Outputs on the Right Column
  let outputX = 650;
  let outputY = 80;
  actuatorsOutputs.forEach((a) => {
    a.x = outputX;
    a.y = outputY;
    layouted.push(a);
    outputY += 160;
  });

  // 4. Position Passives (resistors, caps) in the middle buffer columns
  let passiveX = 450;
  let passiveY = 380;
  passives.forEach((p, idx) => {
    p.x = passiveX + (idx % 2) * 120;
    p.y = passiveY + Math.floor(idx / 2) * 100;
    layouted.push(p);
  });

  // 5. Position Power & Grounds at the bottom center or top
  let pwrX = 250;
  let pwrY = 460;
  powerGround.forEach((pg) => {
    const norm = normalizeType(pg.type).toLowerCase();
    if (norm.includes("ground")) {
      pg.x = controllerX + 50;
      pg.y = 480;
    } else {
      pg.x = pwrX;
      pg.y = pwrY;
      pwrX += 130;
    }
    layouted.push(pg);
  });

  // Fallback for any left-out components
  components.forEach((c) => {
    if (!layouted.some((l) => l.id === c.id)) {
      c.x = 200;
      c.y = 100;
      layouted.push(c);
    }
  });

  return layouted;
}
