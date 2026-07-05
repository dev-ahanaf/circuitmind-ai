import { type EngineeringProjectModel, EngineeringProjectModelSchema } from "../schema/project-model";

export const PLANNER_SYSTEM_PROMPT = `You are the core AI Planner engine of CircuitMind AI, designed and developed by Fayek Ahanaf.
Your purpose is to analyze a user's natural language project description and output ONLY a single code block containing the structured EngineeringProjectModel JSON. Do not output any other text, markdown explanations, or introductory/concluding remarks outside of the JSON code block.

Identity & Branding Rules:
1. When asked who made you, created you, designed you, built this app, or who is the founder/developer, you MUST state that CircuitMind AI was designed and developed by Fayek Ahanaf, a Computing and Information System student of Daffodil International University. It was created to help students, makers, and engineers turn natural language electronics ideas into circuit diagrams, firmware code, BOM reports, and professional project documentation.
2. Do not state you were developed by Google, OpenAI, Gemini, or ChatGPT when referring to the CircuitMind AI platform.

Output JSON Format:
Your output MUST be a single code block matching the following schema structure exactly:

\`\`\`json
{
  "id": "unique-project-id",
  "metadata": {
    "title": "Project Title",
    "description": "Functional description of the project.",
    "difficulty": "Beginner" | "Intermediate" | "Advanced",
    "estimatedCostBDT": 1500, // Total estimated cost in BDT
    "timeToBuildHours": 4, // Build time in hours
    "version": "1.0.0"
  },
  "components": [
    {
      "id": "U1", // Unique ID prefix (U = MCU/IC, R = Resistor, C = Cap, LED = LED, M = Motor, etc.)
      "type": "Arduino Uno" | "ESP32" | "LED" | "Resistor" | "Capacitor" | "Push Button" | "Relay" | "Servo" | "Ultrasonic Sensor" | "OLED" | "Potentiometer" | etc.,
      "label": "Arduino Uno",
      "specification": "Optional specs (e.g. 10kΩ, 220Ω, 5V)",
      "qty": 1,
      "purpose": "Main microcontroller board",
      "priceBDT": 850,
      "x": 300, // X position for visual rendering (use standard grid coordinates)
      "y": 250, // Y position for visual rendering (use standard grid coordinates)
      "rotation": 0
    }
  ],
  "connections": [
    { "from": "U1:D9", "to": "M1:signal", "netName": "SERVO_PWM", "color": "purple" }
  ],
  "controllers": [
    {
      "id": "U1",
      "type": "Arduino Uno",
      "gpioAllocation": {
        "D9": { "pin": "9", "purpose": "Servo control signal", "type": "PWM" }
      },
      "buses": []
    }
  ],
  "power": {
    "voltageDomains": [5, 9],
    "powerRails": [
      { "name": "VCC_5V", "voltage": 5.0, "sourceComponentId": "U1" }
    ],
    "commonGround": true,
    "decouplingCapacitors": []
  },
  "firmware": {
    "platform": "arduino" | "esp-idf" | "stm32cube" | "platformio",
    "libraries": ["Servo.h"],
    "constants": { "SERVO_PIN": 9 },
    "pinDefinitions": { "servoPin": 9 },
    "setupCode": "myservo.attach(servoPin);",
    "loopCode": "myservo.write(90);\\ndelay(1000);",
    "customFunctions": [],
    "safetyChecks": ["Check wire polarity before powering."]
  },
  "documentation": {
    "overview": "Overview of the project functionality.",
    "explanation": "How the controller modulates signals to drive the actuators.",
    "assemblySteps": ["Step 1: ...", "Step 2: ..."],
    "testingProcedures": ["Upload sketch and monitor output."],
    "troubleshootingSteps": ["If servo jitters, add decoupling cap."],
    "safetyWarnings": ["Avoid shorting 5V and GND rails."]
  }
}
\`\`\`

Available Component Types to use: "Arduino Uno", "Arduino Nano", "ESP32", "ESP8266", "LED", "RGB LED", "Resistor", "Capacitor", "Electrolytic Capacitor", "Battery", "9V Battery", "Power Supply", "Ground", "Switch", "Push Button", "Relay", "Buzzer", "Servo", "DC Motor", "Stepper Motor", "L298N", "Breadboard", "LCD 16x2", "OLED", "Bluetooth HC05", "WiFi ESP8266", "IR Sensor", "Ultrasonic Sensor", "Flame Sensor", "Gas Sensor", "LDR", "Potentiometer", "Transistor NPN", "Transistor PNP", "MOSFET", "Diode", "Zener Diode", "Bridge Rectifier", "Crystal Oscillator", "Voltage Regulator 7805", "LM317", "LM358", "AND Gate", "OR Gate", "NOT Gate", "NAND", "NOR", "XOR".`;

/**
 * Extracts and parses a JSON code block from the raw AI response text
 */
export function parsePlannerOutput(rawText: string): EngineeringProjectModel {
  try {
    const jsonMatch = rawText.match(/```json\s*([\s\S]*?)```/);
    const jsonText = jsonMatch ? jsonMatch[1] : rawText;
    
    // Clean string from comments and trailing commas
    const cleaned = jsonText
      .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // remove comments
      .replace(/,\s*([\]}])/g, "$1") // remove trailing commas
      .trim();

    const parsedObj = JSON.parse(cleaned);
    return EngineeringProjectModelSchema.parse(parsedObj);
  } catch (err) {
    console.error("AI Planner output failed Zod schema verification:", err);
    throw new Error("Invalid engineering project model received from AI planner.");
  }
}

/**
 * Mock Model Generator for Offline Local Mode
 */
export function generateMockProjectModel(prompt: string): EngineeringProjectModel {
  const query = prompt.toLowerCase();
  
  if (query.includes("line-follower") || query.includes("line following")) {
    return {
      id: "line-follower-mock",
      metadata: {
        title: "Line Following Robot",
        description: "An autonomous line following robot using two TCRT5000 IR tracking sensors and L298N H-bridge motor driver.",
        difficulty: "Beginner",
        estimatedCostBDT: 2400,
        timeToBuildHours: 4,
        version: "1.0.0"
      },
      components: [
        { id: "U1", type: "Arduino Uno", label: "Arduino Uno", qty: 1, purpose: "Main Controller", priceBDT: 850, x: 300, y: 250, rotation: 0 },
        { id: "M1", type: "L298N", label: "L298N Driver", qty: 1, purpose: "Dual DC Motor H-Bridge Driver", priceBDT: 200, x: 600, y: 250, rotation: 0 },
        { id: "IR1", type: "IR Sensor", label: "IR Left", qty: 1, purpose: "Left lane tracker", priceBDT: 80, x: 100, y: 100, rotation: 0 },
        { id: "IR2", type: "IR Sensor", label: "IR Right", qty: 1, purpose: "Right lane tracker", priceBDT: 80, x: 100, y: 400, rotation: 0 },
        { id: "MOT1", type: "DC Motor", label: "Left Motor", qty: 1, purpose: "Left wheel rotation", priceBDT: 350, x: 800, y: 150, rotation: 0 },
        { id: "MOT2", type: "DC Motor", label: "Right Motor", qty: 1, purpose: "Right wheel rotation", priceBDT: 350, x: 800, y: 350, rotation: 0 }
      ],
      connections: [
        { from: "U1:D5", to: "M1:IN1", netName: "IN1" },
        { from: "U1:D6", to: "M1:IN2", netName: "IN2" },
        { from: "U1:D9", to: "M1:IN3", netName: "IN3" },
        { from: "U1:D10", to: "M1:IN4", netName: "IN4" },
        { from: "U1:D2", to: "IR1:out", netName: "IR_LEFT" },
        { from: "U1:D3", to: "IR2:out", netName: "IR_RIGHT" },
        { from: "M1:OUT1", to: "MOT1:vcc", netName: "MOTOR1_POS" },
        { from: "M1:OUT2", to: "MOT1:gnd", netName: "MOTOR1_NEG" },
        { from: "M1:OUT3", to: "MOT2:vcc", netName: "MOTOR2_POS" },
        { from: "M1:OUT4", to: "MOT2:gnd", netName: "MOTOR2_NEG" }
      ],
      controllers: [
        {
          id: "U1",
          type: "Arduino Uno",
          gpioAllocation: {
            "D5": { pin: "5", purpose: "Left Motor Forward", type: "Digital" },
            "D6": { pin: "6", purpose: "Left Motor Backward", type: "Digital" },
            "D9": { pin: "9", purpose: "Right Motor Forward", type: "Digital" },
            "D10": { pin: "10", purpose: "Right Motor Backward", type: "Digital" },
            "D2": { pin: "2", purpose: "Left Tracking IR Input", type: "Digital" },
            "D3": { pin: "3", purpose: "Right Tracking IR Input", type: "Digital" }
          },
          buses: []
        }
      ],
      power: {
        voltageDomains: [5, 7.4],
        powerRails: [
          { name: "VCC_5V", voltage: 5, sourceComponentId: "U1" }
        ],
        commonGround: true,
        decouplingCapacitors: []
      },
      firmware: {
        platform: "arduino",
        libraries: [],
        constants: {
          "LEFT_IR_PIN": 2,
          "RIGHT_IR_PIN": 3,
          "IN1": 5,
          "IN2": 6,
          "IN3": 9,
          "IN4": 10
        },
        pinDefinitions: {
          "leftIR": 2,
          "rightIR": 3
        },
        setupCode: "pinMode(LEFT_IR_PIN, INPUT);\npinMode(RIGHT_IR_PIN, INPUT);\npinMode(IN1, OUTPUT);\npinMode(IN2, OUTPUT);\npinMode(IN3, OUTPUT);\npinMode(IN4, OUTPUT);",
        loopCode: "int left = digitalRead(LEFT_IR_PIN);\nint right = digitalRead(RIGHT_IR_PIN);\nif (left == LOW && right == LOW) {\n  // Drive forward\n  digitalWrite(IN1, HIGH);\n  digitalWrite(IN2, LOW);\n  digitalWrite(IN3, HIGH);\n  digitalWrite(IN4, LOW);\n}",
        customFunctions: [],
        safetyChecks: ["Ensure batteries are charged above 6V for proper driver switching."]
      },
      documentation: {
        overview: "An autonomous line-following vehicle that tracks black guides using reflected IR beams.",
        explanation: "The TCRT5000 sensors read light reflection differences, enabling the controller to toggle the corresponding motor H-bridges.",
        assemblySteps: ["Attach motors to chassis.", "Wire controller pins D2-D10.", "Connect common GND."],
        testingProcedures: ["Place robot on black line.", "Open Serial monitor.", "Verify motor rotations."],
        troubleshootingSteps: ["If motor spins in reverse, swap output wire polarities."],
        safetyWarnings: ["Check for short circuits between the motor VCC rail and logic lines."]
      }
    };
  }

  // Generic Mock Model fallback
  return {
    id: "generic-project-mock",
    metadata: {
      title: "Custom Sensor Controller",
      description: "A customized microcontroller project reading analog sensor values and triggering outputs.",
      difficulty: "Intermediate",
      estimatedCostBDT: 1500,
      timeToBuildHours: 4,
      version: "1.0.0"
    },
    components: [
      { id: "U1", type: "Arduino Uno", label: "Arduino Uno", qty: 1, purpose: "Main Controller", priceBDT: 850, x: 300, y: 250, rotation: 0 },
      { id: "R1", type: "Potentiometer", label: "10k Pot", specification: "10kΩ", qty: 1, purpose: "Analog input control", priceBDT: 120, x: 100, y: 100, rotation: 0 },
      { id: "M1", type: "Servo", label: "Micro Servo", qty: 1, purpose: "Position actuator output", priceBDT: 150, x: 600, y: 150, rotation: 0 }
    ],
    connections: [
      { from: "U1:A0", to: "R1:wiper", netName: "POT_WIPER" },
      { from: "U1:D9", to: "M1:signal", netName: "SERVO_PWM" },
      { from: "R1:left", to: "U1:5V", netName: "5V" },
      { from: "R1:right", to: "U1:GND", netName: "GND" },
      { from: "M1:vcc", to: "U1:5V", netName: "5V" },
      { from: "M1:gnd", to: "U1:GND", netName: "GND" }
    ],
    controllers: [
      {
        id: "U1",
        type: "Arduino Uno",
        gpioAllocation: {
          "A0": { pin: "A0", purpose: "Potentiometer Position Input", type: "Analog" },
          "D9": { pin: "9", purpose: "Servo Angle Output", type: "PWM" }
        },
        buses: []
      }
    ],
    power: {
      voltageDomains: [5],
      powerRails: [
        { name: "5V Rail", voltage: 5, sourceComponentId: "U1" }
      ],
      commonGround: true,
      decouplingCapacitors: []
    },
    firmware: {
      platform: "arduino",
      libraries: ["Servo.h"],
      constants: {
        "POT_PIN": "A0",
        "SERVO_PIN": 9
      },
      pinDefinitions: {
        "potPin": "A0",
        "servoPin": 9
      },
      setupCode: "myservo.attach(SERVO_PIN);\npinMode(POT_PIN, INPUT);",
      loopCode: "int sensorVal = analogRead(POT_PIN);\nint angle = map(sensorVal, 0, 1023, 0, 180);\nmyservo.write(angle);\ndelay(15);",
      customFunctions: [],
      safetyChecks: ["Ensure supply voltage does not spike above 5.5V."]
    },
    documentation: {
      overview: "Standard controller project reading a potentiometer input to set micro servo latch angle.",
      explanation: "Reads the analog input tap voltage and outputs matching pulse-width-modulated (PWM) duties.",
      assemblySteps: ["Insert potentiometer into breadboard.", "Wire servo control line to digital pin 9.", "Connect VCC and GND lines."],
      testingProcedures: ["Turn potentiometer dial.", "Observe corresponding servo arm angle adjustments."],
      troubleshootingSteps: ["If servo jitters, check connection contacts or add a 100uF decoupling capacitor across VCC/GND."],
      safetyWarnings: ["Do not apply external voltages to the potentiometer wiper terminal directly."]
    }
  };
}
