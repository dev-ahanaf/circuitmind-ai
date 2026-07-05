import { ComponentCategory } from "./types";

export interface ComponentDefinition {
  type: string;
  category: ComponentCategory;
  defaultPriceBDT: number;
  pins: Array<{ pinId: string; name: string; function: string }>;
}

export const COMPONENT_DEFINITIONS: Record<string, ComponentDefinition> = {
  "ESP32": {
    type: "ESP32",
    category: "MCU",
    defaultPriceBDT: 500,
    pins: [
      { pinId: "gnd", name: "GND", function: "Ground reference" },
      { pinId: "3v3", name: "3.3V", function: "3.3V power output" },
      { pinId: "5v", name: "VIN/5V", function: "5V power input" },
      { pinId: "21", name: "GPIO21", function: "SDA" },
      { pinId: "22", name: "GPIO22", function: "SCL" },
    ]
  },
  "Arduino Uno": {
    type: "Arduino Uno",
    category: "MCU",
    defaultPriceBDT: 850,
    pins: [
      { pinId: "gnd", name: "GND", function: "Ground reference" },
      { pinId: "5v", name: "5V", function: "5V power rail output" },
      { pinId: "3v3", name: "3.3V", function: "3.3V power rail output" },
      { pinId: "a0", name: "A0", function: "Analog Input 0" },
    ]
  },
  "DHT22": {
    type: "DHT22",
    category: "Sensor",
    defaultPriceBDT: 250,
    pins: [
      { pinId: "vcc", name: "VCC", function: "Power Input" },
      { pinId: "data", name: "DATA", function: "Signal Out" },
      { pinId: "gnd", name: "GND", function: "Ground" },
    ]
  }
};
