import { SignalType, PinCapability } from "./types";

export interface SignalMapping {
  type: SignalType;
  requiredCapability: PinCapability;
  defaultWireColor: string;
}

export const SIGNAL_MAPPINGS: Record<SignalType, SignalMapping> = {
  "Power": { type: "Power", requiredCapability: "POWER", defaultWireColor: "red" },
  "Ground": { type: "Ground", requiredCapability: "GND", defaultWireColor: "blue" },
  "Digital": { type: "Digital", requiredCapability: "GPIO", defaultWireColor: "gray" },
  "Analog": { type: "Analog", requiredCapability: "ADC", defaultWireColor: "yellow" },
  "PWM": { type: "PWM", requiredCapability: "PWM", defaultWireColor: "orange" },
  "I2C": { type: "I2C", requiredCapability: "GPIO", defaultWireColor: "purple" },
  "SPI": { type: "SPI", requiredCapability: "GPIO", defaultWireColor: "green" },
  "UART": { type: "UART", requiredCapability: "GPIO", defaultWireColor: "brown" },
  "OneWire": { type: "OneWire", requiredCapability: "GPIO", defaultWireColor: "pink" },
};
