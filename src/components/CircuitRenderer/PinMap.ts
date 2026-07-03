// Inline pins for components moved to folders
export const ArduinoUnoPins = {
  "5v": { x: 80, y: 180, direction: "bottom" },
  "3.3v": { x: 70, y: 180, direction: "bottom" },
  "gnd": { x: 90, y: 180, direction: "bottom" },
  "gnd2": { x: 100, y: 180, direction: "bottom" },
  "vin": { x: 110, y: 180, direction: "bottom" },
  "a0": { x: 140, y: 180, direction: "bottom" },
  "a1": { x: 150, y: 180, direction: "bottom" },
  "a2": { x: 160, y: 180, direction: "bottom" },
  "a3": { x: 170, y: 180, direction: "bottom" },
  "a4": { x: 180, y: 180, direction: "bottom" },
  "a5": { x: 190, y: 180, direction: "bottom" },
  "d0": { x: 260, y: 0, direction: "top" },
  "d1": { x: 250, y: 0, direction: "top" },
  "d2": { x: 240, y: 0, direction: "top" },
  "d3": { x: 230, y: 0, direction: "top" },
  "d4": { x: 220, y: 0, direction: "top" },
  "d5": { x: 210, y: 0, direction: "top" },
  "d6": { x: 200, y: 0, direction: "top" },
  "d7": { x: 190, y: 0, direction: "top" },
  "d8": { x: 170, y: 0, direction: "top" },
  "d9": { x: 160, y: 0, direction: "top" },
  "d10": { x: 150, y: 0, direction: "top" },
  "d11": { x: 140, y: 0, direction: "top" },
  "d12": { x: 130, y: 0, direction: "top" },
  "d13": { x: 120, y: 0, direction: "top" },
  "gnd3": { x: 110, y: 0, direction: "top" },
  "aref": { x: 100, y: 0, direction: "top" },
  "sda": { x: 90, y: 0, direction: "top" },
  "scl": { x: 80, y: 0, direction: "top" }
} as const;

export const ResistorPins = { "left": { x: 10, y: 25, direction: "left" }, "right": { x: 90, y: 25, direction: "right" } } as const;
export const CapacitorPins = { "positive": { x: 10, y: 25, direction: "left" }, "negative": { x: 70, y: 25, direction: "right" } } as const;
export const PotentiometerPins = { "vcc": { x: 10, y: 40, direction: "left" }, "out": { x: 50, y: 10, direction: "top" }, "gnd": { x: 90, y: 40, direction: "right" } } as const;
export const LEDPins = { "anode": { x: 10, y: 25, direction: "left" }, "cathode": { x: 70, y: 25, direction: "right" } } as const;
export const RGBLEDPins = { "r": { x: 15, y: 60, direction: "bottom" }, "g": { x: 25, y: 60, direction: "bottom" }, "b": { x: 35, y: 60, direction: "bottom" }, "gnd": { x: 45, y: 60, direction: "bottom" } } as const;
export const DiodePins = { "anode": { x: 10, y: 25, direction: "left" }, "cathode": { x: 70, y: 25, direction: "right" } } as const;
export const BatteryPins = { "positive": { x: 10, y: 25, direction: "left" }, "negative": { x: 70, y: 25, direction: "right" } } as const;
export const Battery9VPins = { "positive": { x: 25, y: 15, direction: "top" }, "negative": { x: 50, y: 15, direction: "top" } } as const;
export const PowerSupplyPins = { "positive": { x: 10, y: 25, direction: "left" }, "negative": { x: 70, y: 25, direction: "right" } } as const;
export const GroundPins = { "gnd": { x: 20, y: 10, direction: "top" } } as const;
export const DCMotorPins = { "positive": { x: 10, y: 25, direction: "left" }, "negative": { x: 70, y: 25, direction: "right" } } as const;
export const StepperMotorPins = { "in1": { x: 15, y: 60, direction: "bottom" }, "in2": { x: 25, y: 60, direction: "bottom" }, "in3": { x: 35, y: 60, direction: "bottom" }, "in4": { x: 45, y: 60, direction: "bottom" } } as const;
export const MotorDriverPins = {
  "ena": { x: 10, y: 120, direction: "bottom" }, "in1": { x: 30, y: 120, direction: "bottom" }, "in2": { x: 50, y: 120, direction: "bottom" },
  "in3": { x: 70, y: 120, direction: "bottom" }, "in4": { x: 90, y: 120, direction: "bottom" }, "enb": { x: 110, y: 120, direction: "bottom" },
  "out1": { x: 10, y: 20, direction: "left" }, "out2": { x: 10, y: 110, direction: "left" }, "out3": { x: 110, y: 20, direction: "right" }, "out4": { x: 110, y: 110, direction: "right" },
  "vcc": { x: 30, y: 10, direction: "top" }, "gnd": { x: 60, y: 10, direction: "top" }, "5v": { x: 90, y: 10, direction: "top" }
} as const;

import { ESP32Pins, ArduinoNanoPins, ESP8266Pins } from "../svg/ESP32";
import { SwitchPins, PushButtonPins } from "../svg/Switch";
import { BuzzerPins, ServoPins, RelayPins } from "../svg/Buzzer";
import { LDRPins, IRSensorPins, UltrasonicSensorPins, GasSensorPins } from "../svg/Sensor";
import { TransistorPins, MOSFETPins } from "../svg/Transistor";
import { LCD16x2Pins, OLEDPins } from "../svg/LCD16x2";
import { VoltageRegulatorPins, LM358Pins } from "../svg/VoltageRegulator";
import { LogicGate2InputPins, LogicGate1InputPins } from "../svg/LogicGate";
import { BreadboardPins, BluetoothHC05Pins, WiFiESP8266Pins, BridgeRectifierPins, CrystalOscillatorPins } from "../svg/Breadboard";

export interface PinConfig {
  x: number;
  y: number;
  direction: "left" | "right" | "top" | "bottom";
}

export interface ComponentDimension {
  width: number;
  height: number;
}

// Global dimensions map
export const COMPONENT_DIMENSIONS: Record<string, ComponentDimension> = {
  "Arduino Uno": { width: 280, height: 180 },
  "Arduino Nano": { width: 130, height: 280 },
  "ESP32": { width: 150, height: 280 },
  "ESP8266": { width: 140, height: 280 },
  "Resistor": { width: 100, height: 50 },
  "Capacitor": { width: 80, height: 50 },
  "Ceramic Capacitor": { width: 80, height: 50 },
  "Electrolytic Capacitor": { width: 80, height: 50 },
  "LED": { width: 80, height: 50 },
  "RGB LED": { width: 60, height: 70 },
  "Battery": { width: 80, height: 50 },
  "9V Battery": { width: 80, height: 110 },
  "Power Supply": { width: 80, height: 50 },
  "Ground": { width: 40, height: 50 },
  "Switch": { width: 80, height: 50 },
  "Push Button": { width: 70, height: 55 },
  "Buzzer": { width: 80, height: 50 },
  "Servo": { width: 70, height: 85 },
  "Relay": { width: 100, height: 90 },
  "DC Motor": { width: 80, height: 50 },
  "Stepper Motor": { width: 60, height: 70 },
  "L293D": { width: 120, height: 130 },
  "L298N": { width: 120, height: 130 },
  "Breadboard": { width: 150, height: 70 },
  "LCD 16x2": { width: 190, height: 120 },
  "OLED": { width: 85, height: 95 },
  "I2C Module": { width: 85, height: 95 },
  "Bluetooth HC05": { width: 90, height: 110 },
  "WiFi ESP8266": { width: 80, height: 90 },
  "IR Sensor": { width: 70, height: 85 },
  "Ultrasonic Sensor": { width: 90, height: 85 },
  "Flame Sensor": { width: 90, height: 90 },
  "Gas Sensor": { width: 90, height: 90 },
  "LDR": { width: 80, height: 50 },
  "Potentiometer": { width: 100, height: 80 },
  "Transistor NPN": { width: 70, height: 60 },
  "Transistor PNP": { width: 70, height: 60 },
  "MOSFET": { width: 70, height: 60 },
  "Diode": { width: 80, height: 50 },
  "Zener Diode": { width: 80, height: 50 },
  "Bridge Rectifier": { width: 90, height: 70 },
  "Crystal Oscillator": { width: 70, height: 60 },
  "IC Socket": { width: 120, height: 130 },
  "Voltage Regulator 7805": { width: 90, height: 80 },
  "LM317": { width: 90, height: 80 },
  "LM358": { width: 80, height: 60 },
  "AND Gate": { width: 80, height: 60 },
  "OR Gate": { width: 80, height: 60 },
  "NOT Gate": { width: 80, height: 60 },
  "NAND": { width: 80, height: 60 },
  "NOR": { width: 80, height: 60 },
  "XOR": { width: 80, height: 60 },
};

// Global pin library map
const PIN_LIBRARY: Record<string, Record<string, PinConfig>> = {
  "Arduino Uno": ArduinoUnoPins as any,
  "Arduino Nano": ArduinoNanoPins as any,
  "ESP32": ESP32Pins as any,
  "ESP8266": ESP8266Pins as any,
  "Resistor": ResistorPins as any,
  "Capacitor": CapacitorPins as any,
  "Ceramic Capacitor": CapacitorPins as any,
  "Electrolytic Capacitor": CapacitorPins as any,
  "LED": LEDPins as any,
  "RGB LED": RGBLEDPins as any,
  "Battery": BatteryPins as any,
  "9V Battery": Battery9VPins as any,
  "Power Supply": PowerSupplyPins as any,
  "Ground": GroundPins as any,
  "Switch": SwitchPins as any,
  "Push Button": PushButtonPins as any,
  "Buzzer": BuzzerPins as any,
  "Servo": ServoPins as any,
  "Relay": RelayPins as any,
  "DC Motor": DCMotorPins as any,
  "Stepper Motor": StepperMotorPins as any,
  "L293D": MotorDriverPins as any,
  "L298N": MotorDriverPins as any,
  "Breadboard": BreadboardPins as any,
  "LCD 16x2": LCD16x2Pins as any,
  "OLED": OLEDPins as any,
  "I2C Module": OLEDPins as any,
  "Bluetooth HC05": BluetoothHC05Pins as any,
  "WiFi ESP8266": WiFiESP8266Pins as any,
  "IR Sensor": IRSensorPins as any,
  "Ultrasonic Sensor": UltrasonicSensorPins as any,
  "Flame Sensor": GasSensorPins as any,
  "Gas Sensor": GasSensorPins as any,
  "LDR": LDRPins as any,
  "Potentiometer": PotentiometerPins as any,
  "Transistor NPN": TransistorPins as any,
  "Transistor PNP": TransistorPins as any,
  "MOSFET": MOSFETPins as any,
  "Diode": DiodePins as any,
  "Zener Diode": DiodePins as any,
  "Bridge Rectifier": BridgeRectifierPins as any,
  "Crystal Oscillator": CrystalOscillatorPins as any,
  "IC Socket": MotorDriverPins as any,
  "Voltage Regulator 7805": VoltageRegulatorPins as any,
  "LM317": VoltageRegulatorPins as any,
  "LM358": LM358Pins as any,
  "AND Gate": LogicGate2InputPins as any,
  "OR Gate": LogicGate2InputPins as any,
  "NOT Gate": LogicGate1InputPins as any,
  "NAND": LogicGate2InputPins as any,
  "NOR": LogicGate2InputPins as any,
  "XOR": LogicGate2InputPins as any,
};

/**
 * Returns relative x,y coordinates and line exit direction for a given component and pin
 */
export function getPinConfig(componentType: string, pinName: string): PinConfig {
  const compPins = PIN_LIBRARY[componentType] || PIN_LIBRARY[normalizeType(componentType)];
  if (!compPins) {
    return { x: 0, y: 0, direction: "left" };
  }

  // Exact match first
  let pin = compPins[pinName];
  
  // Case-insensitive or partial fallback
  if (!pin) {
    const key = Object.keys(compPins).find(
      (k) => k.toLowerCase() === pinName.toLowerCase() || pinName.toLowerCase().startsWith(k.toLowerCase())
    );
    if (key) pin = compPins[key];
  }

  return pin || { x: 0, y: 0, direction: "left" };
}

/**
 * Normalizes types like 'Transistor (NPN)' to 'Transistor NPN'
 */
export function normalizeType(type: string): string {
  if (!type) return "Resistor";
  let t = type.trim();
  if (t.includes("NPN")) return "Transistor NPN";
  if (t.includes("PNP")) return "Transistor PNP";
  if (t.toLowerCase().includes("arduino uno")) return "Arduino Uno";
  if (t.toLowerCase().includes("arduino nano")) return "Arduino Nano";
  if (t.toLowerCase().includes("esp32")) return "ESP32";
  if (t.toLowerCase().includes("esp8266")) return "ESP8266";
  if (t.toLowerCase().includes("potentiometer")) return "Potentiometer";
  if (t.toLowerCase().includes("ldr")) return "LDR";
  if (t.toLowerCase().includes("9v")) return "9V Battery";
  if (t.toLowerCase().includes("battery")) return "Battery";
  if (t.toLowerCase().includes("power supply")) return "Power Supply";
  if (t.toLowerCase().includes("gnd") || t.toLowerCase() === "ground") return "Ground";
  if (t.toLowerCase().includes("led") && t.toLowerCase().includes("rgb")) return "RGB LED";
  if (t.toLowerCase().includes("led")) return "LED";
  if (t.toLowerCase().includes("resistor")) return "Resistor";
  if (t.toLowerCase().includes("capacitor") && t.toLowerCase().includes("elec")) return "Electrolytic Capacitor";
  if (t.toLowerCase().includes("capacitor")) return "Capacitor";
  if (t.toLowerCase().includes("diode") && t.toLowerCase().includes("zener")) return "Zener Diode";
  if (t.toLowerCase().includes("diode")) return "Diode";
  if (t.toLowerCase().includes("motor") && t.toLowerCase().includes("step")) return "Stepper Motor";
  if (t.toLowerCase().includes("motor") && t.toLowerCase().includes("dc")) return "DC Motor";
  if (t.toLowerCase().includes("servo")) return "Servo";
  if (t.toLowerCase().includes("relay")) return "Relay";
  if (t.toLowerCase().includes("lcd")) return "LCD 16x2";
  if (t.toLowerCase().includes("oled")) return "OLED";
  if (t.toLowerCase().includes("bluetooth")) return "Bluetooth HC05";
  if (t.toLowerCase().includes("wifi")) return "WiFi ESP8266";
  if (t.toLowerCase().includes("ultrasonic")) return "Ultrasonic Sensor";
  if (t.toLowerCase().includes("ir")) return "IR Sensor";
  if (t.toLowerCase().includes("flame")) return "Flame Sensor";
  if (t.toLowerCase().includes("gas")) return "Gas Sensor";
  if (t.toLowerCase().includes("switch")) return "Switch";
  if (t.toLowerCase().includes("button")) return "Push Button";
  return t;
}
