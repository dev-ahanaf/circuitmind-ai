import React from "react";

interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}

// Breadboard schematic outline
export const BreadboardPins = {
  "vcc1": { x: 10, y: 15, direction: "left" },
  "gnd1": { x: 10, y: 30, direction: "left" },
  "vcc2": { x: 140, y: 15, direction: "right" },
  "gnd2": { x: 140, y: 30, direction: "right" },
} as const;

export const Breadboard: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect
        x="10"
        y="10"
        width="130"
        height="50"
        rx="4"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      <line x1="20" y1="20" x2="130" y2="20" className="stroke-red-500 stroke-[1.5] stroke-dasharray" strokeDasharray="3,2" />
      <line x1="20" y1="50" x2="130" y2="50" className="stroke-blue-500 stroke-[1.5] stroke-dasharray" strokeDasharray="3,2" />
      
      {/* Grid representation */}
      <circle cx="35" cy="35" r="1.5" className="fill-muted-foreground/40 stroke-none" />
      <circle cx="50" cy="35" r="1.5" className="fill-muted-foreground/40 stroke-none" />
      <circle cx="65" cy="35" r="1.5" className="fill-muted-foreground/40 stroke-none" />
      <circle cx="80" cy="35" r="1.5" className="fill-muted-foreground/40 stroke-none" />
      <circle cx="95" cy="35" r="1.5" className="fill-muted-foreground/40 stroke-none" />
      <circle cx="110" cy="35" r="1.5" className="fill-muted-foreground/40 stroke-none" />

      <circle cx="10" cy="15" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="10" cy="30" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="140" cy="15" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="140" cy="30" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="75" y="45" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="75" y="58" textAnchor="middle" className="font-sans text-[7px] fill-muted-foreground">{label || "Breadboard"}</text>
    </g>
  );
};

// Bluetooth HC-05 Module
export const BluetoothHC05Pins = {
  "STATE": { x: 15, y: 25, direction: "left" },
  "RXD": { x: 15, y: 38, direction: "left" },
  "TXD": { x: 15, y: 51, direction: "left" },
  "GND": { x: 15, y: 64, direction: "left" },
  "VCC": { x: 15, y: 77, direction: "left" },
  "EN": { x: 15, y: 90, direction: "left" },
} as const;

export const BluetoothHC05: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect
        x="15"
        y="15"
        width="60"
        height="85"
        rx="4"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      {/* Antennas details on top */}
      <path d="M 20 19 L 20 23 L 25 23 L 25 19 L 30 19 L 30 23 L 35 23 L 35 19" className="fill-none stroke-muted-foreground stroke-1" />
      <text x="45" y="60" textAnchor="middle" className="font-sans text-[8px] font-bold fill-foreground">HC-05</text>

      {Object.entries(BluetoothHC05Pins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x + 10} y2={pin.y} className="stroke-muted-foreground stroke-[1.5]" />
          <circle cx={pin.x} cy={pin.y} r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
          <text x={pin.x + 14} y={pin.y + 2.5} className="font-mono text-[6px] fill-muted-foreground">{name}</text>
        </g>
      ))}

      <text x="45" y="80" textAnchor="middle" className="font-mono text-[8px] font-semibold fill-brand/80">{id}</text>
    </g>
  );
};

// WiFi ESP8266 (ESP-01 model)
export const WiFiESP8266Pins = {
  "TX": { x: 15, y: 25, direction: "left" },
  "GND": { x: 15, y: 38, direction: "left" },
  "CH_PD": { x: 15, y: 51, direction: "left" },
  "GPIO2": { x: 15, y: 64, direction: "left" },
  "RST": { x: 65, y: 25, direction: "right" },
  "GPIO0": { x: 65, y: 38, direction: "right" },
  "VCC": { x: 65, y: 51, direction: "right" },
  "RX": { x: 65, y: 64, direction: "right" },
} as const;

export const WiFiESP8266: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect
        x="15"
        y="15"
        width="50"
        height="60"
        rx="4"
        className={`fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`}
      />
      <text x="40" y="48" textAnchor="middle" className="font-sans text-[7px] font-bold fill-foreground">ESP-01</text>

      {Object.entries(WiFiESP8266Pins).map(([name, pin]) => (
        <g key={name}>
          <line x1={pin.x} y1={pin.y} x2={pin.x + (pin.direction === "left" ? 8 : -8)} y2={pin.y} className="stroke-muted-foreground stroke-1" />
          <circle cx={pin.x} cy={pin.y} r="2" className="fill-card stroke-muted-foreground stroke-1" />
          <text x={pin.x + (pin.direction === "left" ? 11 : -11)} y={pin.y + 2} textAnchor={pin.direction === "left" ? "start" : "end"} className="font-mono text-[5px] fill-muted-foreground">{name}</text>
        </g>
      ))}

      <text x="40" y="68" textAnchor="middle" className="font-mono text-[7px] font-semibold fill-brand/80">{id}</text>
    </g>
  );
};

// Bridge Rectifier: Diode diamond configuration
export const BridgeRectifierPins = {
  "AC1": { x: 10, y: 25, direction: "left" },
  "AC2": { x: 40, y: 55, direction: "bottom" },
  "positive": { x: 70, y: 25, direction: "right" },
  "negative": { x: 40, y: -5, direction: "top" },
} as const;

export const BridgeRectifier: React.FC<SymbolProps> = ({ id, label, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="-5" width="70" height="65" rx="4" className="fill-transparent stroke-none" />
      
      {/* Diode Bridge Diamond */}
      <polygon
        points="40,5 65,25 40,45 15,25"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />
      
      {/* AC/DC labels */}
      <text x="26" y="27" className="font-sans text-[7px] fill-muted-foreground">~</text>
      <text x="54" y="27" className="font-sans text-[7px] fill-muted-foreground">~</text>
      <text x="40" y="15" textAnchor="middle" className="font-sans text-[8px] fill-brand font-bold">-</text>
      <text x="40" y="41" textAnchor="middle" className="font-sans text-[7px] fill-brand font-bold">+</text>

      {/* Terminal leads */}
      <line x1="10" y1="25" x2="15" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="65" y1="25" x2="70" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="40" y1="45" x2="40" y2="55" className="stroke-muted-foreground stroke-2" />
      <line x1="40" y1="5" x2="40" y2="-5" className="stroke-muted-foreground stroke-2" />

      {/* Pins */}
      <circle cx="10" cy="25" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="70" cy="25" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="40" cy="55" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="40" cy="-5" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="24" y="-1" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
    </g>
  );
};

// Crystal Oscillator & IC Socket general block
export const CrystalOscillatorPins = {
  "pin1": { x: 10, y: 25, direction: "left" },
  "pin2": { x: 50, y: 25, direction: "right" },
} as const;

export const CrystalOscillator: React.FC<SymbolProps> = ({ id, label, value, selected, hovered, onSelect }) => {
  return (
    <g onClick={(e) => { e.stopPropagation(); onSelect?.(); }} className="cursor-pointer select-none">
      <rect x="5" y="5" width="55" height="40" rx="4" className="fill-transparent stroke-none" />
      <line x1="10" y1="25" x2="20" y2="25" className="stroke-muted-foreground stroke-2" />
      <line x1="40" y1="25" x2="50" y2="25" className="stroke-muted-foreground stroke-2" />

      {/* Crystal plates */}
      <line x1="20" y1="12" x2="20" y2="38" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      <line x1="40" y1="12" x2="40" y2="38" className={`stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`} />
      
      {/* Central bar */}
      <rect
        x="24"
        y="15"
        width="12"
        height="20"
        className={`fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`}
      />

      <circle cx="10" cy="25" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />
      <circle cx="50" cy="25" r="2.5" className="fill-card stroke-muted-foreground stroke-1" />

      <text x="30" y="8" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-brand/80">{id}</text>
      <text x="30" y="47" textAnchor="middle" className="font-mono text-[8px] fill-muted-foreground">{value || label || "XTAL"}</text>
    </g>
  );
};
