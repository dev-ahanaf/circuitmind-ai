import { type Circuit } from "@/types/Circuit";

export interface MockCircuitItem {
  id: string;
  name: string;
  description: string;
  circuit: Circuit;
  markdown: string;
}

export const MOCK_CIRCUITS: MockCircuitItem[] = [
  {
    id: "led-blink",
    name: "LED Blink",
    description: "The classic hello-world circuit for microcontrollers. Blinks an onboard or external LED connected to D13.",
    circuit: {
      project: {
        title: "LED Blink Circuit",
        description: "Blinks an LED connected to digital pin 13 of an Arduino Uno using a current limiting resistor."
      },
      components: [
        { id: "U1", type: "Arduino Uno", label: "Arduino Uno", x: 260, y: 160, rotation: 0 },
        { id: "R1", type: "Resistor", label: "220Ω Resistor", value: "220Ω", x: 120, y: 80, rotation: 0 },
        { id: "LED1", type: "LED", label: "Red LED", value: "Red", x: 60, y: 220, rotation: 90 },
        { id: "GND1", type: "Ground", label: "GND", x: 200, y: 440, rotation: 0 }
      ],
      connections: [
        { from: "U1:D13", to: "R1:left" },
        { from: "R1:right", to: "LED1:anode" },
        { from: "LED1:cathode", to: "GND1:gnd" },
        { from: "GND1:gnd", to: "U1:GND" }
      ]
    },
    markdown: `## Project Overview
This project blinks a Red LED connected to Pin 13 of the Arduino Uno.

## Required Components
- Arduino Uno
- 220Ω Resistor
- Red LED
- Jumper wires

## Wiring Connections
- D13 ➜ Resistor left
- Resistor right ➜ LED anode
- LED cathode ➜ Ground (GND)
`
  },
  {
    id: "traffic-light",
    name: "Traffic Light Simulator",
    description: "Simulates a road intersection traffic light sequence (Red, Yellow, Green) using Arduino Uno.",
    circuit: {
      project: {
        title: "Traffic Light Simulator",
        description: "Controls Red, Yellow, and Green LEDs sequentially to simulate a road intersection traffic light."
      },
      components: [
        { id: "U1", type: "Arduino Uno", label: "Arduino Uno", x: 260, y: 160 },
        { id: "R1", type: "Resistor", label: "220Ω R1", value: "220Ω", x: 100, y: 60 },
        { id: "R2", type: "Resistor", label: "220Ω R2", value: "220Ω", x: 100, y: 120 },
        { id: "R3", type: "Resistor", label: "220Ω R3", value: "220Ω", x: 100, y: 180 },
        { id: "LED1", type: "LED", label: "Red LED", value: "Red", x: 40, y: 60, rotation: 90 },
        { id: "LED2", type: "LED", label: "Yellow LED", value: "Yellow", x: 40, y: 120, rotation: 90 },
        { id: "LED3", type: "LED", label: "Green LED", value: "Green", x: 40, y: 180, rotation: 90 },
        { id: "GND1", type: "Ground", label: "Common GND", x: 200, y: 460 }
      ],
      connections: [
        { from: "U1:D13", to: "R1:left" },
        { from: "U1:D12", to: "R2:left" },
        { from: "U1:D11", to: "R3:left" },
        { from: "R1:right", to: "LED1:anode" },
        { from: "R2:right", to: "LED2:anode" },
        { from: "R3:right", to: "LED3:anode" },
        { from: "LED1:cathode", to: "GND1:gnd" },
        { from: "LED2:cathode", to: "GND1:gnd" },
        { from: "LED3:cathode", to: "GND1:gnd" },
        { from: "GND1:gnd", to: "U1:GND" }
      ]
    },
    markdown: `## Project Overview
Traffic light simulation using three digital output pins.
`
  },
  {
    id: "smart-door-lock",
    name: "Smart Door Lock",
    description: "An electronic door latch system using a servo motor latch, triggered by a push button and buzzer confirmation.",
    circuit: {
      project: {
        title: "Smart Door Lock",
        description: "Unlocks a door latch using a servo motor when a button is pressed, sounding a buzzer tone."
      },
      components: [
        { id: "U1", type: "Arduino Uno", label: "Arduino", x: 280, y: 160 },
        { id: "M1", type: "Servo", label: "Door Lock Servo", x: 620, y: 60 },
        { id: "BZ1", type: "Buzzer", label: "Chime Buzzer", x: 620, y: 220 },
        { id: "SW1", type: "Push Button", label: "Unlock Switch", x: 100, y: 100 },
        { id: "BAT1", type: "9V Battery", label: "Battery Pack", x: 100, y: 320 },
        { id: "GND1", type: "Ground", label: "GND", x: 300, y: 480 }
      ],
      connections: [
        { from: "U1:D9", to: "M1:signal" },
        { from: "U1:D8", to: "BZ1:positive" },
        { from: "U1:D2", to: "SW1:pin1" },
        { from: "BAT1:positive", to: "U1:VIN" },
        { from: "BAT1:negative", to: "GND1:gnd" },
        { from: "M1:vcc", to: "U1:5V" },
        { from: "M1:gnd", to: "GND1:gnd" },
        { from: "BZ1:negative", to: "GND1:gnd" },
        { from: "SW1:pin2", to: "GND1:gnd" },
        { from: "GND1:gnd", to: "U1:GND" }
      ]
    },
    markdown: `## Project Overview
Pressing the button unlocks the latch by rotating the servo 90 degrees.
`
  },
  {
    id: "bluetooth-car",
    name: "Bluetooth RC Car",
    description: "A 2-wheel drive robot chassis driven by an L298N H-Bridge driver, controlled via Bluetooth.",
    circuit: {
      project: {
        title: "Bluetooth RC Car Chassis",
        description: "Controls two DC motors using an L298N driver based on commands received over HC-05 Bluetooth serial."
      },
      components: [
        { id: "U1", type: "Arduino Uno", label: "Arduino Uno", x: 260, y: 180 },
        { id: "L298", type: "L298N", label: "L298N Motor Driver", x: 440, y: 100 },
        { id: "M1", type: "DC Motor", label: "Left DC Motor", x: 620, y: 60 },
        { id: "M2", type: "DC Motor", label: "Right DC Motor", x: 620, y: 180 },
        { id: "BT1", type: "Bluetooth HC05", label: "HC-05 BT module", x: 80, y: 100 },
        { id: "BAT1", type: "9V Battery", label: "Motor Power (9V)", x: 80, y: 320 },
        { id: "GND1", type: "Ground", label: "Common GND", x: 300, y: 480 }
      ],
      connections: [
        { from: "U1:D5", to: "L298:IN1" },
        { from: "U1:D6", to: "L298:IN2" },
        { from: "U1:D9", to: "L298:IN3" },
        { from: "U1:D10", to: "L298:IN4" },
        { from: "BT1:TXD", to: "U1:RX" },
        { from: "BT1:RXD", to: "U1:TX" },
        { from: "L298:OUT1", to: "M1:pin1" },
        { from: "L298:OUT2", to: "M1:pin2" },
        { from: "L298:OUT3", to: "M2:pin1" },
        { from: "L298:OUT4", to: "M2:pin2" },
        { from: "BAT1:positive", to: "L298:VCC" },
        { from: "BAT1:negative", to: "GND1:gnd" },
        { from: "L298:GND", to: "GND1:gnd" },
        { from: "BT1:GND", to: "GND1:gnd" },
        { from: "BT1:VCC", to: "U1:5V" },
        { from: "GND1:gnd", to: "U1:GND" }
      ]
    },
    markdown: `## Project Overview
Bluetooth-controlled 2WD robot chassis.
`
  }
];
