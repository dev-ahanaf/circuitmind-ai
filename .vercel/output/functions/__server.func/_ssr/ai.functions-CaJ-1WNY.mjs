import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai.functions-CaJ-1WNY.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM_PROMPT = `You are CircuitMind AI, an expert electrical & electronic engineering mentor.
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
async function callGateway(messages) {
	const geminiKey = process.env.GEMINI_API_KEY;
	const openaiKey = process.env.OPENAI_API_KEY;
	const groqKey = process.env.GROQ_API_KEY;
	let lastError = null;
	if (geminiKey) {
		const models = [
			"gemini-2.5-flash",
			"gemini-2.0-flash",
			"gemini-1.5-flash",
			"gemini-flash-latest"
		];
		const systemInstruction = messages.find((m) => m.role === "system")?.content || SYSTEM_PROMPT;
		const contents = messages.filter((m) => m.role !== "system").map((m) => ({
			role: m.role === "assistant" ? "model" : "user",
			parts: [{ text: m.content }]
		}));
		for (const model of models) {
			const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
			try {
				console.log(`Attempting Gemini generation using model: ${model}...`);
				const res = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-goog-api-key": geminiKey
					},
					body: JSON.stringify({
						contents,
						systemInstruction: { parts: [{ text: systemInstruction }] }
					})
				});
				if (res.ok) {
					const reply = (await res.json()).candidates?.[0]?.content?.parts?.[0]?.text;
					if (reply) return reply;
				} else {
					const text = await res.text();
					console.warn(`Gemini model ${model} failed: ${text.slice(0, 200)}`);
					lastError = /* @__PURE__ */ new Error(`Gemini API failed (${res.status}): ${text.slice(0, 200)}`);
				}
			} catch (e) {
				console.warn(`Gemini API call failed for model ${model}:`, e.message || e);
				lastError = e;
			}
		}
	}
	if (openaiKey) try {
		console.log("Attempting OpenAI generation...");
		const res = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${openaiKey}`
			},
			body: JSON.stringify({
				model: "gpt-4o-mini",
				messages
			})
		});
		if (res.ok) {
			const reply = (await res.json()).choices?.[0]?.message?.content;
			if (reply) return reply;
		} else {
			const text = await res.text();
			console.warn(`OpenAI failed: ${text.slice(0, 200)}`);
			lastError = /* @__PURE__ */ new Error(`OpenAI API failed (${res.status}): ${text.slice(0, 200)}`);
		}
	} catch (e) {
		console.warn("OpenAI API call failed:", e.message || e);
		lastError = e;
	}
	if (groqKey) try {
		console.log("Attempting Groq generation...");
		const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${groqKey}`
			},
			body: JSON.stringify({
				model: "llama-3.3-70b-versatile",
				messages
			})
		});
		if (res.ok) {
			const reply = (await res.json()).choices?.[0]?.message?.content;
			if (reply) return reply;
		} else {
			const text = await res.text();
			console.warn(`Groq failed: ${text.slice(0, 200)}`);
			lastError = /* @__PURE__ */ new Error(`Groq API failed (${res.status}): ${text.slice(0, 200)}`);
		}
	} catch (e) {
		console.warn("Groq API call failed:", e.message || e);
		lastError = e;
	}
	throw lastError || /* @__PURE__ */ new Error("Missing AI API Key. Please set GEMINI_API_KEY, OPENAI_API_KEY, or GROQ_API_KEY in your environment.");
}
var chatCompletion_createServerFn_handler = createServerRpc({
	id: "08b923ccd2e1d7bb263c40841af06fe061b5f7ca95e4f4b07db599546490c4b8",
	name: "chatCompletion",
	filename: "src/lib/ai.functions.ts"
}, (opts) => chatCompletion.__executeServer(opts));
var chatCompletion = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	messages: arrayType(objectType({
		role: enumType([
			"user",
			"assistant",
			"system"
		]),
		content: stringType().min(1).max(2e4)
	})).min(1).max(50),
	systemPromptOverride: stringType().max(4e3).optional()
}).parse(input)).handler(chatCompletion_createServerFn_handler, async ({ data }) => {
	return { content: await callGateway([{
		role: "system",
		content: data.systemPromptOverride ?? SYSTEM_PROMPT
	}, ...data.messages]) };
});
var generateCircuit_createServerFn_handler = createServerRpc({
	id: "b676ab3ab16f4f7bebe0fa8a473a141e7beccc5689907d9f71b457d5e91c10ba",
	name: "generateCircuit",
	filename: "src/lib/ai.functions.ts"
}, (opts) => generateCircuit.__executeServer(opts));
var generateCircuit = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	description: stringType().min(4).max(2e3),
	voltage: stringType().max(50).optional(),
	microcontroller: stringType().max(100).optional(),
	preferred: stringType().max(500).optional(),
	budget: stringType().max(50).optional()
}).parse(input)).handler(generateCircuit_createServerFn_handler, async ({ data }) => {
	const prompt = `Design a full circuit for the following project.

Project: ${data.description}
Voltage: ${data.voltage || "auto-select"}
Microcontroller: ${data.microcontroller || "auto-select"}
Preferred components: ${data.preferred || "any"}
Budget: ${data.budget || "flexible"}`;
	return { content: await callGateway([{
		role: "system",
		content: SYSTEM_PROMPT
	}, {
		role: "user",
		content: prompt
	}]) };
});
var optimizeCircuit_createServerFn_handler = createServerRpc({
	id: "0244a6f65ad038764957de0b7e87d1e7beb0effd309eb10ec731a5acedd702ba",
	name: "optimizeCircuit",
	filename: "src/lib/ai.functions.ts"
}, (opts) => optimizeCircuit.__executeServer(opts));
var optimizeCircuit = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	componentList: stringType().min(4).max(4e3),
	goal: stringType().max(500).optional()
}).parse(input)).handler(optimizeCircuit_createServerFn_handler, async ({ data }) => {
	return { content: await callGateway([{
		role: "system",
		content: `You are CircuitMind Optimizer. Given a Bill of Materials, suggest cheaper alternatives, lower-power equivalents, higher-efficiency parts, and simpler wiring. Respond in Markdown with sections: Analysis, Cheaper Alternatives (table), Lower Power (table), Better Wiring, Summary.`
	}, {
		role: "user",
		content: `Optimization goal: ${data.goal || "cost & simplicity"}\n\nCurrent BOM:\n${data.componentList}`
	}]) };
});
//#endregion
export { chatCompletion_createServerFn_handler, generateCircuit_createServerFn_handler, optimizeCircuit_createServerFn_handler };
