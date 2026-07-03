export const L298NPins = {
  // Input logic
  "IN1": { x: 15, y: 30, direction: "left" },
  "IN2": { x: 15, y: 45, direction: "left" },
  "IN3": { x: 15, y: 60, direction: "left" },
  "IN4": { x: 15, y: 75, direction: "left" },
  "ENA": { x: 15, y: 95, direction: "left" },
  "ENB": { x: 15, y: 110, direction: "left" },

  // Outputs / Power
  "OUT1": { x: 105, y: 30, direction: "right" },
  "OUT2": { x: 105, y: 45, direction: "right" },
  "OUT3": { x: 105, y: 60, direction: "right" },
  "OUT4": { x: 105, y: 75, direction: "right" },
  "VCC": { x: 105, y: 95, direction: "right" },
  "GND": { x: 105, y: 110, direction: "right" },
} as const;
