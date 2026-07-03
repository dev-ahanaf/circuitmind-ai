import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// ESP32 pin offsets (DIP-38 or DIP-30 model)
export const ESP32Pins = {
  // Left side pins (top to bottom)
  "3V3": { x: 15, y: 30, direction: "left" },
  "EN": { x: 15, y: 45, direction: "left" },
  "VP": { x: 15, y: 60, direction: "left" },
  "VN": { x: 15, y: 75, direction: "left" },
  "D34": { x: 15, y: 90, direction: "left" },
  "D35": { x: 15, y: 105, direction: "left" },
  "D32": { x: 15, y: 120, direction: "left" },
  "D33": { x: 15, y: 135, direction: "left" },
  "D25": { x: 15, y: 150, direction: "left" },
  "D26": { x: 15, y: 165, direction: "left" },
  "D27": { x: 15, y: 180, direction: "left" },
  "D14": { x: 15, y: 195, direction: "left" },
  "D12": { x: 15, y: 210, direction: "left" },
  "D13": { x: 15, y: 225, direction: "left" },
  "GND1": { x: 15, y: 240, direction: "left" },

  // Right side pins (top to bottom)
  "GND": { x: 135, y: 30, direction: "right" },
  "TX": { x: 135, y: 45, direction: "right" },
  "RX": { x: 135, y: 60, direction: "right" },
  "D22": { x: 135, y: 75, direction: "right" },
  "D21": { x: 135, y: 90, direction: "right" },
  "D19": { x: 135, y: 105, direction: "right" },
  "D18": { x: 135, y: 120, direction: "right" },
  "D5": { x: 135, y: 135, direction: "right" },
  "D17": { x: 135, y: 150, direction: "right" },
  "D16": { x: 135, y: 165, direction: "right" },
  "D4": { x: 135, y: 180, direction: "right" },
  "D2": { x: 135, y: 195, direction: "right" },
  "D15": { x: 135, y: 210, direction: "right" },
  "GND2": { x: 135, y: 225, direction: "right" },
  "5V": { x: 135, y: 240, direction: "right" },
} as const;

export const ESP32: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="15" y="15" width="120" height="250" rx="6" className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`} />
      <rect x="23" y="23" width="104" height="234" rx="3" className="fill-secondary/10 stroke-none" />
      <text x="75" y="125" textAnchor="middle" className="font-sans text-xs font-bold fill-foreground">ESP32</text>
      <text x="75" y="145" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-brand/80">{id}</text>
      {label && <text x="75" y="160" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{label}</text>}
      
      {/* Pins Render */}
      {Object.entries(ESP32Pins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x + (pin.direction === "left" ? 10 : -10)} y2={pin.y} className="stroke-muted-foreground stroke-[1.5]" />
          <circle cx={pin.x} cx={pin.x} cy={pin.y} r="3" className="fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition" />
          <text x={pin.x + (pin.direction === "left" ? 15 : -15)} y={pin.y + 3} textAnchor={pin.direction === "left" ? "start" : "end"} className="font-mono text-[7px] font-semibold fill-muted-foreground">{name.replace(/\d+$/, "")}</text>
        </g>
      ))}
    </g>
  );
};

// Arduino Nano pin offsets
export const ArduinoNanoPins = {
  "D13": { x: 15, y: 30, direction: "left" },
  "3V3": { x: 15, y: 45, direction: "left" },
  "REF": { x: 15, y: 60, direction: "left" },
  "A0": { x: 15, y: 75, direction: "left" },
  "A1": { x: 15, y: 90, direction: "left" },
  "A2": { x: 15, y: 105, direction: "left" },
  "A3": { x: 15, y: 120, direction: "left" },
  "A4": { x: 15, y: 135, direction: "left" },
  "A5": { x: 15, y: 150, direction: "left" },
  "A6": { x: 15, y: 165, direction: "left" },
  "A7": { x: 15, y: 180, direction: "left" },
  "5V": { x: 15, y: 195, direction: "left" },
  "RST1": { x: 15, y: 210, direction: "left" },
  "GND1": { x: 15, y: 225, direction: "left" },
  "VIN": { x: 15, y: 240, direction: "left" },

  "TX": { x: 115, y: 30, direction: "right" },
  "RX": { x: 115, y: 45, direction: "right" },
  "RST2": { x: 115, y: 60, direction: "right" },
  "GND2": { x: 115, y: 75, direction: "right" },
  "D2": { x: 115, y: 90, direction: "right" },
  "D3": { x: 115, y: 105, direction: "right" },
  "D4": { x: 115, y: 120, direction: "right" },
  "D5": { x: 115, y: 135, direction: "right" },
  "D6": { x: 115, y: 150, direction: "right" },
  "D7": { x: 115, y: 165, direction: "right" },
  "D8": { x: 115, y: 180, direction: "right" },
  "D9": { x: 115, y: 195, direction: "right" },
  "D10": { x: 115, y: 210, direction: "right" },
  "D11": { x: 115, y: 225, direction: "right" },
  "D12": { x: 115, y: 240, direction: "right" },
} as const;

export const ArduinoNano: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="15" y="15" width="100" height="250" rx="6" className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`} />
      <rect x="23" y="23" width="84" height="234" rx="3" className="fill-secondary/10 stroke-none" />
      <text x="65" y="125" textAnchor="middle" className="font-sans text-[10px] font-bold fill-foreground">NANO</text>
      <text x="65" y="145" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      
      {Object.entries(ArduinoNanoPins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x + (pin.direction === "left" ? 10 : -10)} y2={pin.y} className="stroke-muted-foreground stroke-[1.5]" />
          <circle cx={pin.x} cy={pin.y} r="3" className="fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition" />
          <text x={pin.x + (pin.direction === "left" ? 15 : -15)} y={pin.y + 3} textAnchor={pin.direction === "left" ? "start" : "end"} className="font-mono text-[7px] font-semibold fill-muted-foreground">{name.replace(/\d+$/, "")}</text>
        </g>
      ))}
    </g>
  );
};

// ESP8266 (NodeMCU) pin offsets
export const ESP8266Pins = {
  "A0": { x: 15, y: 30, direction: "left" },
  "RSV1": { x: 15, y: 45, direction: "left" },
  "RSV2": { x: 15, y: 60, direction: "left" },
  "SD3": { x: 15, y: 75, direction: "left" },
  "SD2": { x: 15, y: 90, direction: "left" },
  "SD1": { x: 15, y: 105, direction: "left" },
  "CMD": { x: 15, y: 120, direction: "left" },
  "SD0": { x: 15, y: 135, direction: "left" },
  "CLK": { x: 15, y: 150, direction: "left" },
  "GND1": { x: 15, y: 165, direction: "left" },
  "3V3": { x: 15, y: 180, direction: "left" },
  "EN": { x: 15, y: 195, direction: "left" },
  "RST": { x: 15, y: 210, direction: "left" },
  "GND2": { x: 15, y: 225, direction: "left" },
  "VIN": { x: 15, y: 240, direction: "left" },

  "D0": { x: 125, y: 30, direction: "right" },
  "D1": { x: 125, y: 45, direction: "right" },
  "D2": { x: 125, y: 60, direction: "right" },
  "D3": { x: 125, y: 75, direction: "right" },
  "D4": { x: 125, y: 90, direction: "right" },
  "3V3_1": { x: 125, y: 105, direction: "right" },
  "GND3": { x: 125, y: 120, direction: "right" },
  "D5": { x: 125, y: 135, direction: "right" },
  "D6": { x: 125, y: 150, direction: "right" },
  "D7": { x: 125, y: 165, direction: "right" },
  "D8": { x: 125, y: 180, direction: "right" },
  "RX": { x: 125, y: 195, direction: "right" },
  "TX": { x: 125, y: 210, direction: "right" },
  "GND4": { x: 125, y: 225, direction: "right" },
  "3V3_2": { x: 125, y: 240, direction: "right" },
} as const;

export const ESP8266: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="15" y="15" width="110" height="250" rx="6" className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`} />
      <rect x="23" y="23" width="94" height="234" rx="3" className="fill-secondary/10 stroke-none" />
      <text x="70" y="125" textAnchor="middle" className="font-sans text-[10px] font-bold fill-foreground">NodeMCU</text>
      <text x="70" y="145" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      
      {Object.entries(ESP8266Pins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x + (pin.direction === "left" ? 10 : -10)} y2={pin.y} className="stroke-muted-foreground stroke-[1.5]" />
          <circle cx={pin.x} cy={pin.y} r="3" className="fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition" />
          <text x={pin.x + (pin.direction === "left" ? 15 : -15)} y={pin.y + 3} textAnchor={pin.direction === "left" ? "start" : "end"} className="font-mono text-[7px] font-semibold fill-muted-foreground">{name.replace(/\d+$/, "")}</text>
        </g>
      ))}
    </g>
  );
};
