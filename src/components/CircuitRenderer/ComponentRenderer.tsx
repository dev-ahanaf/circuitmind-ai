import React from "react";
import { type CircuitComponent } from "@/types/Component";
import { normalizeType, COMPONENT_DIMENSIONS } from "./PinMap";
import { ArduinoUno } from "../svg/ArduinoUno/ArduinoUno";
import { ESP32, ArduinoNano, ESP8266 } from "../svg/ESP32";
import { L298N } from "../svg/L298N/L298N";
import { Battery, Battery9V, PowerSupply } from "../svg/Battery/Battery";
import { LED, RGBLED, Diode } from "../svg/LEDS/LED";
import { Servo } from "../svg/Servo/Servo";
import { Resistor, Capacitor, Potentiometer } from "../svg/Resistor/Resistor";
import { DCMotor, StepperMotor } from "../svg/Motor/DCMotor";
import { Ground } from "../svg/Ground/Ground";

import { Switch, PushButton } from "../svg/Switch";
import { Buzzer, Relay } from "../svg/Buzzer";
import { LDR, IRSensor, UltrasonicSensor, GasSensor } from "../svg/Sensor";
import { Transistor, MOSFET } from "../svg/Transistor";
import { LCD16x2, OLED } from "../svg/LCD16x2";
import { VoltageRegulator, LM358 } from "../svg/VoltageRegulator";
import { LogicGate } from "../svg/LogicGate";
import { Breadboard, BluetoothHC05, WiFiESP8266, BridgeRectifier, CrystalOscillator } from "../svg/Breadboard";

interface ComponentRendererProps {
  component: CircuitComponent;
  selected?: boolean;
  hovered?: boolean;
  highlighted?: boolean;
  onSelect?: () => void;
  onHover?: (hovered: boolean) => void;
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = React.memo(({
  component,
  selected,
  hovered,
  highlighted,
  onSelect,
  onHover,
}) => {
  const normType = normalizeType(component.type);

  // Group events
  const gProps = {
    onMouseEnter: () => onHover?.(true),
    onMouseLeave: () => onHover?.(false),
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      onSelect?.();
    },
    className: "group transition-all select-none cursor-grab active:cursor-grabbing",
  };

  const symProps = {
    id: component.id,
    label: component.label,
    value: component.value,
    selected,
    hovered,
  };

  // Switch to correct symbol
  const getSymbol = () => {
    switch (normType) {
      case "Arduino Uno": return <ArduinoUno {...symProps} />;
      case "Arduino Nano": return <ArduinoNano {...symProps} />;
      case "ESP32": return <ESP32 {...symProps} />;
      case "ESP8266": return <ESP8266 {...symProps} />;
      case "L298N":
      case "L293D":
      case "IC Socket":
        return <L298N {...symProps} />;
      case "Battery": return <Battery {...symProps} />;
      case "9V Battery": return <Battery9V {...symProps} />;
      case "Power Supply": return <PowerSupply {...symProps} />;
      case "Ground": return <Ground {...symProps} />;
      case "LED": return <LED {...symProps} />;
      case "RGB LED": return <RGBLED {...symProps} />;
      case "Servo": return <Servo {...symProps} />;
      case "Resistor": return <Resistor {...symProps} />;
      case "Capacitor":
      case "Ceramic Capacitor":
        return <Capacitor {...symProps} />;
      case "Electrolytic Capacitor":
        return <Capacitor {...symProps} electrolytic />;
      case "DC Motor": return <DCMotor {...symProps} />;
      case "Stepper Motor": return <StepperMotor {...symProps} />;
      case "Switch": return <Switch {...symProps} />;
      case "Push Button": return <PushButton {...symProps} />;
      case "Buzzer": return <Buzzer {...symProps} />;
      case "Relay": return <Relay {...symProps} />;
      case "Breadboard": return <Breadboard {...symProps} />;
      case "LCD 16x2": return <LCD16x2 {...symProps} />;
      case "OLED":
      case "I2C Module":
        return <OLED {...symProps} />;
      case "Bluetooth HC05": return <BluetoothHC05 {...symProps} />;
      case "WiFi ESP8266": return <WiFiESP8266 {...symProps} />;
      case "IR Sensor": return <IRSensor {...symProps} />;
      case "Ultrasonic Sensor": return <UltrasonicSensor {...symProps} />;
      case "Flame Sensor":
      case "Gas Sensor":
        return <GasSensor {...symProps} />;
      case "LDR": return <LDR {...symProps} />;
      case "Potentiometer": return <Potentiometer {...symProps} />;
      case "Transistor NPN": return <Transistor {...symProps} />;
      case "Transistor PNP": return <Transistor {...symProps} pnp />;
      case "MOSFET": return <MOSFET {...symProps} />;
      case "Diode": return <Diode {...symProps} />;
      case "Zener Diode": return <Diode {...symProps} zener />;
      case "Bridge Rectifier": return <BridgeRectifier {...symProps} />;
      case "Crystal Oscillator": return <CrystalOscillator {...symProps} />;
      case "Voltage Regulator 7805":
      case "LM317":
        return <VoltageRegulator {...symProps} />;
      case "LM358": return <LM358 {...symProps} />;
      case "AND Gate":
      case "OR Gate":
      case "NOT Gate":
      case "NAND":
      case "NOR":
      case "XOR":
        return <LogicGate {...symProps} type={normType.split(" ")[0] as any} />;
      default:
        // Generic fallback symbol
        return (
          <g>
            <rect x="0" y="0" width="80" height="50" rx="3" className={`fill-card stroke-2 ${selected ? "stroke-brand" : "stroke-border"}`} />
            <text x="40" y="24" textAnchor="middle" className="font-mono text-[9px] fill-foreground font-bold">{component.id}</text>
            <text x="40" y="38" textAnchor="middle" className="font-mono text-[7px] fill-muted-foreground">{component.type}</text>
          </g>
        );
    }
  };

  const rotation = component.rotation || 0;
  const transform = `translate(${component.x}, ${component.y}) rotate(${rotation}, ${
    COMPONENT_DIMENSIONS[normType]?.width / 2 || 40
  }, ${COMPONENT_DIMENSIONS[normType]?.height / 2 || 25})`;

  const w = COMPONENT_DIMENSIONS[normType]?.width || 80;
  const h = COMPONENT_DIMENSIONS[normType]?.height || 50;

  return (
    <g transform={transform} {...gProps}>
      {getSymbol()}
      {highlighted && (
        <rect
          x="-4"
          y="-4"
          width={w + 8}
          height={h + 8}
          rx="6"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2.5"
          strokeDasharray="4,4"
          className="animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.95)]"
        />
      )}
    </g>
  );
});

ComponentRenderer.displayName = "ComponentRenderer";
