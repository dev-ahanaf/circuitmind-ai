import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const CHAT_MODEL = "google/gemini-3-flash-preview";

const SYSTEM_PROMPT = `You are CircuitMind AI, an expert electrical & electronic engineering mentor.
You help students design circuits for Arduino, ESP32, STM32, 8051, Raspberry Pi, robotics, IoT, power electronics, and embedded systems.

When a user describes a project, respond in this structure (use Markdown, headings, tables, and fenced code blocks):

## Project Overview
A concise paragraph.

**Difficulty:** Beginner / Intermediate / Advanced
**Estimated Cost:** in USD
**Time to build:** in hours

## Required Components
Markdown table: Component | Qty | Purpose | Approx. Price

## Wiring Connections
Markdown table: From (MCU pin) | To (Component pin) | Notes

## Circuit Explanation
Explain how the circuit works in plain language.

## Step-by-Step Assembly
Numbered list.

## Arduino / MCU Code
A working starter sketch inside a \`\`\`cpp code block with clear comments.

## Testing & Troubleshooting
Common mistakes and how to fix them.

## Optimization Suggestions
Cheaper alternatives, lower power, simpler wiring.

## Safety Tips
Voltage, current, heat, polarity warnings.

## Final Checklist
Short bullet list before powering on.

## Circuit JSON
A code block of structured JSON describing the circuit for visualization.
You MUST write EXACTLY a \`\`\`json block with this schema:
{
  "project": {
    "title": "Project Title",
    "description": "Short description"
  },
  "components": [
    { "id": "U1", "type": "Arduino Uno", "label": "Arduino Uno", "x": 150, "y": 200 },
    { "id": "R1", "type": "Resistor", "value": "220Ω", "x": 350, "y": 150 },
    { "id": "LED1", "type": "LED", "color": "Red", "x": 480, "y": 150 }
  ],
  "connections": [
    { "from": "U1:D13", "to": "R1:left" },
    { "from": "R1:right", "to": "LED1:anode" },
    { "from": "LED1:cathode", "to": "U1:GND" }
  ]
}

Available types are EXACTLY: "Arduino Uno", "Arduino Nano", "ESP32", "ESP8266", "LED", "RGB LED", "Resistor", "Capacitor", "Electrolytic Capacitor", "Battery", "9V Battery", "Power Supply", "Ground", "Switch", "Push Button", "Relay", "Buzzer", "Servo", "DC Motor", "Stepper Motor", "L298N", "Breadboard", "LCD 16x2", "OLED", "Bluetooth HC05", "WiFi ESP8266", "IR Sensor", "Ultrasonic Sensor", "Flame Sensor", "Gas Sensor", "LDR", "Potentiometer", "Transistor NPN", "Transistor PNP", "MOSFET", "Diode", "Zener Diode", "Bridge Rectifier", "Crystal Oscillator", "Voltage Regulator 7805", "LM317", "LM358", "AND Gate", "OR Gate", "NOT Gate", "NAND", "NOR", "XOR".

RULES:
- Never hallucinate dangerous voltage/current values — round conservatively and cite assumptions.
- Always list alternative components when relevant.
- Prefer beginner-friendly, breadboard-compatible parts by default.
- Keep responses focused; avoid unrelated commentary.`;

function simulateMockResponse(messages: Array<{ role: string; content: string }>) {
  const lastUserMessage = messages.filter(m => m.role === "user").pop()?.content || "";
  
  if (lastUserMessage.toLowerCase().includes("optimize") || lastUserMessage.toLowerCase().includes("bom")) {
    return `# BOM Optimization Analysis (Simulated)

## Analysis
Your Bill of Materials has been reviewed. Here are some optimized recommendations.

## Cheaper Alternatives
| Component | Original Price | Recommended Alternative | Alternative Price | Saving |
| --- | --- | --- | --- | --- |
| Arduino Uno | $23.00 | ESP32 NodeMCU | $6.00 | $17.00 |
| DHT22 Sensor | $9.00 | DHT11 Sensor | $3.00 | $6.00 |

## Lower Power
- Replace Arduino Uno with ESP32 and use Deep Sleep mode to reduce standby current from 50mA to 15µA.

## Better Wiring
- Use I2C protocol instead of parallel pins for LCD displays to reduce wire count from 12 to 4.

## Summary
By switching to ESP32 and I2C LCD, you save $23.00 and reduce wiring complexity significantly.`;
  }

  if (lastUserMessage.toLowerCase().includes("circuit") || lastUserMessage.toLowerCase().includes("design") || lastUserMessage.toLowerCase().includes("wiring") || lastUserMessage.length > 50) {
    return `## Project Overview
This is a simulated circuit design for your project: **${lastUserMessage.slice(0, 100)}${lastUserMessage.length > 100 ? "..." : ""}**.

**Difficulty:** Intermediate
**Estimated Cost:** $15.00
**Time to build:** 3 hours

## Required Components
| Component | Qty | Purpose | Approx. Price |
| --- | --- | --- | --- |
| Microcontroller (e.g. ESP32 / Arduino) | 1 | Processing | $6.00 |
| Breadboard & Jumper wires | 1 | Prototyping | $4.00 |
| 10k Ohm Potentiometer | 1 | Input Control | $1.50 |
| Resistors (220 Ohm, 10k Ohm) | 5 | Safety / Pull-up | $1.00 |
| Servo Motor / LED / Buzzer | 1 | Actuator/Indicator | $2.50 |

## Wiring Connections
| From (MCU pin) | To (Component pin) | Notes |
| --- | --- | --- |
| 3.3V | VCC / Red wire | Main Power rail |
| GND | GND / Black wire | Common ground |
| Pin A0 (ADC) | Potentiometer Signal | Analog input |
| Pin D5 (PWM) | Servo Signal | Control output |

## Circuit Explanation
This design reads analog signals from a sensor or potentiometer and maps the input value to control an output device like a servo motor or LED. 

## Step-by-Step Assembly
1. Connect power (3.3V) and ground (GND) to the breadboard side rails.
2. Insert the potentiometer and connect its side legs to VCC and GND.
3. Connect the middle leg of the potentiometer to Analog Pin A0.
4. Connect your output device (e.g. servo signal pin) to Digital Pin D5.

## Arduino / MCU Code
\`\`\`cpp
// Simulated project starter code
const int inputPin = A0;
const int outputPin = 5;

void setup() {
  Serial.begin(115200);
  pinMode(outputPin, OUTPUT);
}

void loop() {
  int value = analogRead(inputPin);
  Serial.print("Sensor Value: ");
  Serial.println(value);
  
  // Map value (0-1023) to PWM (0-255)
  int outputVal = map(value, 0, 1023, 0, 255);
  analogWrite(outputPin, outputVal);
  delay(100);
}
\`\`\`

## Testing & Troubleshooting
- Use Serial Monitor to observe incoming sensor readings.
- Check connections if the output device does not respond.

## Optimization Suggestions
- Use an ESP32 to send telemetry data via WiFi.

## Safety Tips
- Do not exceed 5V on analog input pins.

## Final Checklist
- Double-check VCC and GND connections to prevent shorts.
- Upload sketch and check Serial Monitor.

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "Analog Sensor Controller",
    "description": "Reads a potentiometer value and maps it to control a servo motor output."
  },
  "components": [
    { "id": "U1", "type": "Arduino Uno", "label": "Arduino Uno", "x": 150, "y": 200 },
    { "id": "R1", "type": "Potentiometer", "label": "10k Pot", "x": 50, "y": 80 },
    { "id": "M1", "type": "Servo", "label": "Micro Servo", "x": 650, "y": 80 },
    { "id": "GND1", "type": "Ground", "label": "GND", "x": 350, "y": 480 }
  ],
  "connections": [
    { "from": "U1:A0", "to": "R1:wiper" },
    { "from": "U1:D5", "to": "M1:signal" },
    { "from": "R1:left", "to": "U1:5V" },
    { "from": "R1:right", "to": "GND1:gnd" },
    { "from": "M1:vcc", "to": "U1:5V" },
    { "from": "M1:gnd", "to": "GND1:gnd" }
  ]
}
\`\`\``;
  }

  return `### CircuitMind AI (Simulated Local Mode)

I am running in **Local Mock Mode** because no API Key was detected in your environment. 

To use the live Gemini AI or OpenAI models:
1. Create a free key at [Google AI Studio](https://aistudio.google.com/).
2. Open your \`.env\` file in this project workspace:
   \`file:///Users/fayekahanaf/Desktop/My%20Computer/EEE%20Day%20NSTU/p2/.env\`
3. Add your key at the bottom:
   \`\`\`env
   GEMINI_API_KEY="your_api_key_here"
   \`\`\`
4. Save the file and refresh this page.

Here is a mock response to your message: *"I received your message: '${lastUserMessage}'. How can I help you design, simulate, or optimize your circuits today?"*`;
}

async function callGateway(messages: Array<{ role: string; content: string }>) {
  const geminiKey = process.env.GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;
  const lovableKey = process.env.LOVABLE_API_KEY;

  if (geminiKey) {
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";
    const systemInstruction = messages.find(m => m.role === "system")?.content || SYSTEM_PROMPT;
    const contents = messages
      .filter(m => m.role !== "system")
      .map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": geminiKey,
        },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{ text: systemInstruction }],
          },
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Gemini API failed (${res.status}): ${text.slice(0, 200)}`);
      }

      const data = (await res.json()) as {
        candidates?: Array<{
          content?: {
            parts?: Array<{ text?: string }>;
          };
        }>;
      };

      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (reply) return reply;
      throw new Error("No text response returned from Gemini API");
    } catch (e) {
      console.error("Gemini API call failed, falling back to mock:", e);
      const isDev = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test" || !process.env.NODE_ENV;
      if (isDev) {
        return simulateMockResponse(messages);
      }
      throw e;
    }
  }

  // Fallback to OpenAI or Lovable API Gateway
  let url = "";
  let key = "";
  let model = "";

  if (openaiKey) {
    url = "https://api.openai.com/v1/chat/completions";
    key = openaiKey;
    model = "gpt-4o-mini";
  } else if (lovableKey) {
    url = "https://ai.gateway.lovable.dev/v1/chat/completions";
    key = lovableKey;
    model = CHAT_MODEL;
  }

  if (!key) {
    const isDev = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test" || !process.env.NODE_ENV;
    if (isDev) {
      return simulateMockResponse(messages);
    }
    throw new Error(
      "Missing AI API Key. Please set GEMINI_API_KEY, OPENAI_API_KEY, or LOVABLE_API_KEY in your environment."
    );
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model,
      messages,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    if (res.status === 429) throw new Error("Rate limited. Please wait a moment and try again.");
    if (res.status === 402) throw new Error("AI credits exhausted. Please check your API key account balance.");
    throw new Error(`AI request failed (${res.status}): ${text.slice(0, 200)}`);
  }
  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  return data.choices?.[0]?.message?.content ?? "";
}

export const chatCompletion = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        messages: z
          .array(
            z.object({
              role: z.enum(["user", "assistant", "system"]),
              content: z.string().min(1).max(20000),
            }),
          )
          .min(1)
          .max(50),
        systemPromptOverride: z.string().max(4000).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const system = data.systemPromptOverride ?? SYSTEM_PROMPT;
    const content = await callGateway([
      { role: "system", content: system },
      ...data.messages,
    ]);
    return { content };
  });

export const generateCircuit = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        description: z.string().min(4).max(2000),
        voltage: z.string().max(50).optional(),
        microcontroller: z.string().max(100).optional(),
        preferred: z.string().max(500).optional(),
        budget: z.string().max(50).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const prompt = `Design a full circuit for the following project.

Project: ${data.description}
Voltage: ${data.voltage || "auto-select"}
Microcontroller: ${data.microcontroller || "auto-select"}
Preferred components: ${data.preferred || "any"}
Budget: ${data.budget || "flexible"}`;
    const content = await callGateway([
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ]);
    return { content };
  });

export const optimizeCircuit = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        componentList: z.string().min(4).max(4000),
        goal: z.string().max(500).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const system = `You are CircuitMind Optimizer. Given a Bill of Materials, suggest cheaper alternatives, lower-power equivalents, higher-efficiency parts, and simpler wiring. Respond in Markdown with sections: Analysis, Cheaper Alternatives (table), Lower Power (table), Better Wiring, Summary.`;
    const content = await callGateway([
      { role: "system", content: system },
      {
        role: "user",
        content: `Optimization goal: ${data.goal || "cost & simplicity"}\n\nCurrent BOM:\n${data.componentList}`,
      },
    ]);
    return { content };
  });