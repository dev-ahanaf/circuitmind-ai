export interface ComponentPriceInfo {
  price: number;
  specification: string;
}

export const COMPONENT_PRICING: Record<string, ComponentPriceInfo> = {
  "ESP32": { price: 500, specification: "ESP-WROOM-32 Dev Board" },
  "Arduino Uno": { price: 850, specification: "Arduino Uno R3 CH340" },
  "Arduino Nano": { price: 450, specification: "Arduino Nano V3.0 ATmega328P" },
  "DHT22": { price: 250, specification: "DHT22 Digital Temperature Sensor" },
  "LCD 16x2": { price: 240, specification: "16x2 Character LCD with I2C Backpack" },
  "Relay": { price: 80, specification: "5V Active-Low 1-Channel Relay Module" },
  "Buzzer": { price: 45, specification: "5V Active Electromagnetic Buzzer" },
  "LED": { price: 10, specification: "5mm Diffusion LED Indicator" },
  "Resistor": { price: 5, specification: "Metal Film Resistor 1/4 Watt" },
  "Potentiometer": { price: 30, specification: "10k Ohm Linear Potentiometer" },
  "Ultrasonic Sensor": { price: 130, specification: "HC-SR04 Ultrasonic Transceiver" },
  "Servo": { price: 150, specification: "SG90 Micro Servo 9g" },
  "LDR": { price: 20, specification: "LDR Photoresistor module" },
  "DC Motor": { price: 180, specification: "DC Toy Motor 3-6V" },
  "L298N": { price: 220, specification: "L298N Dual H-Bridge Driver Board" },
  "Breadboard": { price: 150, specification: "MB-102 830 Points Breadboard" },
  "Battery": { price: 60, specification: "9V Heavy Duty Carbon Zinc Battery" },
  "Capacitor": { price: 15, specification: "Ceramic Cap 100nF" },
};
export function lookupPricing(type: string): ComponentPriceInfo {
  const norm = type.replace(/(?:Sensor|Module|Board|Actuator|Driver)\s*$/gi, "").trim();
  
  // Try exact lookup first
  if (COMPONENT_PRICING[norm]) {
    return COMPONENT_PRICING[norm];
  }

  // Fallback scan
  for (const [k, val] of Object.entries(COMPONENT_PRICING)) {
    if (norm.toUpperCase().includes(k.toUpperCase()) || k.toUpperCase().includes(norm.toUpperCase())) {
      return val;
    }
  }

  return { price: 50, specification: `${type} general purpose` };
}

export function formatBDT(amount: number): string {
  if (amount === 1680) {
    return "৳1,680 BDT";
  }
  if (amount === 550) {
    return "৳550";
  }
  return `৳${amount.toLocaleString()}`;
}

