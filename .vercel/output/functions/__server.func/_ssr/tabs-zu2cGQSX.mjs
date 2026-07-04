import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Ycb7J1zW.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as Maximize2, E as MousePointer, F as Info, H as FileCode, J as Copy, K as Download, N as Link, Q as CircleQuestionMark, R as Hand, S as Printer, U as Eye, W as EyeOff, X as Clipboard, _ as Search, b as Redo2, c as Undo2, i as X, n as ZoomIn, t as ZoomOut, u as Trash2, y as RefreshCw, z as Grid3x3 } from "../_libs/lucide-react.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tabs-zu2cGQSX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Snaps a single value to the closest grid node (default 20px)
*/
function snapToGrid(value, gridSize = 20) {
	return Math.round(value / gridSize) * gridSize;
}
var ESP32Pins = {
	"3V3": {
		x: 15,
		y: 30,
		direction: "left"
	},
	"EN": {
		x: 15,
		y: 45,
		direction: "left"
	},
	"VP": {
		x: 15,
		y: 60,
		direction: "left"
	},
	"VN": {
		x: 15,
		y: 75,
		direction: "left"
	},
	"D34": {
		x: 15,
		y: 90,
		direction: "left"
	},
	"D35": {
		x: 15,
		y: 105,
		direction: "left"
	},
	"D32": {
		x: 15,
		y: 120,
		direction: "left"
	},
	"D33": {
		x: 15,
		y: 135,
		direction: "left"
	},
	"D25": {
		x: 15,
		y: 150,
		direction: "left"
	},
	"D26": {
		x: 15,
		y: 165,
		direction: "left"
	},
	"D27": {
		x: 15,
		y: 180,
		direction: "left"
	},
	"D14": {
		x: 15,
		y: 195,
		direction: "left"
	},
	"D12": {
		x: 15,
		y: 210,
		direction: "left"
	},
	"D13": {
		x: 15,
		y: 225,
		direction: "left"
	},
	"GND1": {
		x: 15,
		y: 240,
		direction: "left"
	},
	"GND": {
		x: 135,
		y: 30,
		direction: "right"
	},
	"TX": {
		x: 135,
		y: 45,
		direction: "right"
	},
	"RX": {
		x: 135,
		y: 60,
		direction: "right"
	},
	"D22": {
		x: 135,
		y: 75,
		direction: "right"
	},
	"D21": {
		x: 135,
		y: 90,
		direction: "right"
	},
	"D19": {
		x: 135,
		y: 105,
		direction: "right"
	},
	"D18": {
		x: 135,
		y: 120,
		direction: "right"
	},
	"D5": {
		x: 135,
		y: 135,
		direction: "right"
	},
	"D17": {
		x: 135,
		y: 150,
		direction: "right"
	},
	"D16": {
		x: 135,
		y: 165,
		direction: "right"
	},
	"D4": {
		x: 135,
		y: 180,
		direction: "right"
	},
	"D2": {
		x: 135,
		y: 195,
		direction: "right"
	},
	"D15": {
		x: 135,
		y: 210,
		direction: "right"
	},
	"GND2": {
		x: 135,
		y: 225,
		direction: "right"
	},
	"5V": {
		x: 135,
		y: 240,
		direction: "right"
	}
};
var ESP32 = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "15",
				width: "120",
				height: "250",
				rx: "6",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "23",
				y: "23",
				width: "104",
				height: "234",
				rx: "3",
				className: "fill-secondary/10 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "75",
				y: "125",
				textAnchor: "middle",
				className: "font-sans text-xs font-bold fill-foreground",
				children: "ESP32"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "75",
				y: "145",
				textAnchor: "middle",
				className: "font-mono text-[10px] font-semibold fill-brand/80",
				children: id
			}),
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "75",
				y: "160",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label
			}),
			Object.entries(ESP32Pins).map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x + (pin.direction === "left" ? 10 : -10),
					y2: pin.y,
					className: "stroke-muted-foreground stroke-[1.5]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "3",
					className: "fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x + (pin.direction === "left" ? 15 : -15),
					y: pin.y + 3,
					textAnchor: pin.direction === "left" ? "start" : "end",
					className: "font-mono text-[7px] font-semibold fill-muted-foreground",
					children: name.replace(/\d+$/, "")
				})
			] }, name))
		]
	});
};
var ArduinoNanoPins = {
	"D13": {
		x: 15,
		y: 30,
		direction: "left"
	},
	"3V3": {
		x: 15,
		y: 45,
		direction: "left"
	},
	"REF": {
		x: 15,
		y: 60,
		direction: "left"
	},
	"A0": {
		x: 15,
		y: 75,
		direction: "left"
	},
	"A1": {
		x: 15,
		y: 90,
		direction: "left"
	},
	"A2": {
		x: 15,
		y: 105,
		direction: "left"
	},
	"A3": {
		x: 15,
		y: 120,
		direction: "left"
	},
	"A4": {
		x: 15,
		y: 135,
		direction: "left"
	},
	"A5": {
		x: 15,
		y: 150,
		direction: "left"
	},
	"A6": {
		x: 15,
		y: 165,
		direction: "left"
	},
	"A7": {
		x: 15,
		y: 180,
		direction: "left"
	},
	"5V": {
		x: 15,
		y: 195,
		direction: "left"
	},
	"RST1": {
		x: 15,
		y: 210,
		direction: "left"
	},
	"GND1": {
		x: 15,
		y: 225,
		direction: "left"
	},
	"VIN": {
		x: 15,
		y: 240,
		direction: "left"
	},
	"TX": {
		x: 115,
		y: 30,
		direction: "right"
	},
	"RX": {
		x: 115,
		y: 45,
		direction: "right"
	},
	"RST2": {
		x: 115,
		y: 60,
		direction: "right"
	},
	"GND2": {
		x: 115,
		y: 75,
		direction: "right"
	},
	"D2": {
		x: 115,
		y: 90,
		direction: "right"
	},
	"D3": {
		x: 115,
		y: 105,
		direction: "right"
	},
	"D4": {
		x: 115,
		y: 120,
		direction: "right"
	},
	"D5": {
		x: 115,
		y: 135,
		direction: "right"
	},
	"D6": {
		x: 115,
		y: 150,
		direction: "right"
	},
	"D7": {
		x: 115,
		y: 165,
		direction: "right"
	},
	"D8": {
		x: 115,
		y: 180,
		direction: "right"
	},
	"D9": {
		x: 115,
		y: 195,
		direction: "right"
	},
	"D10": {
		x: 115,
		y: 210,
		direction: "right"
	},
	"D11": {
		x: 115,
		y: 225,
		direction: "right"
	},
	"D12": {
		x: 115,
		y: 240,
		direction: "right"
	}
};
var ArduinoNano = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "15",
				width: "100",
				height: "250",
				rx: "6",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "23",
				y: "23",
				width: "84",
				height: "234",
				rx: "3",
				className: "fill-secondary/10 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "65",
				y: "125",
				textAnchor: "middle",
				className: "font-sans text-[10px] font-bold fill-foreground",
				children: "NANO"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "65",
				y: "145",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			Object.entries(ArduinoNanoPins).map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x + (pin.direction === "left" ? 10 : -10),
					y2: pin.y,
					className: "stroke-muted-foreground stroke-[1.5]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "3",
					className: "fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x + (pin.direction === "left" ? 15 : -15),
					y: pin.y + 3,
					textAnchor: pin.direction === "left" ? "start" : "end",
					className: "font-mono text-[7px] font-semibold fill-muted-foreground",
					children: name.replace(/\d+$/, "")
				})
			] }, name))
		]
	});
};
var ESP8266Pins = {
	"A0": {
		x: 15,
		y: 30,
		direction: "left"
	},
	"RSV1": {
		x: 15,
		y: 45,
		direction: "left"
	},
	"RSV2": {
		x: 15,
		y: 60,
		direction: "left"
	},
	"SD3": {
		x: 15,
		y: 75,
		direction: "left"
	},
	"SD2": {
		x: 15,
		y: 90,
		direction: "left"
	},
	"SD1": {
		x: 15,
		y: 105,
		direction: "left"
	},
	"CMD": {
		x: 15,
		y: 120,
		direction: "left"
	},
	"SD0": {
		x: 15,
		y: 135,
		direction: "left"
	},
	"CLK": {
		x: 15,
		y: 150,
		direction: "left"
	},
	"GND1": {
		x: 15,
		y: 165,
		direction: "left"
	},
	"3V3": {
		x: 15,
		y: 180,
		direction: "left"
	},
	"EN": {
		x: 15,
		y: 195,
		direction: "left"
	},
	"RST": {
		x: 15,
		y: 210,
		direction: "left"
	},
	"GND2": {
		x: 15,
		y: 225,
		direction: "left"
	},
	"VIN": {
		x: 15,
		y: 240,
		direction: "left"
	},
	"D0": {
		x: 125,
		y: 30,
		direction: "right"
	},
	"D1": {
		x: 125,
		y: 45,
		direction: "right"
	},
	"D2": {
		x: 125,
		y: 60,
		direction: "right"
	},
	"D3": {
		x: 125,
		y: 75,
		direction: "right"
	},
	"D4": {
		x: 125,
		y: 90,
		direction: "right"
	},
	"3V3_1": {
		x: 125,
		y: 105,
		direction: "right"
	},
	"GND3": {
		x: 125,
		y: 120,
		direction: "right"
	},
	"D5": {
		x: 125,
		y: 135,
		direction: "right"
	},
	"D6": {
		x: 125,
		y: 150,
		direction: "right"
	},
	"D7": {
		x: 125,
		y: 165,
		direction: "right"
	},
	"D8": {
		x: 125,
		y: 180,
		direction: "right"
	},
	"RX": {
		x: 125,
		y: 195,
		direction: "right"
	},
	"TX": {
		x: 125,
		y: 210,
		direction: "right"
	},
	"GND4": {
		x: 125,
		y: 225,
		direction: "right"
	},
	"3V3_2": {
		x: 125,
		y: 240,
		direction: "right"
	}
};
var ESP8266 = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "15",
				width: "110",
				height: "250",
				rx: "6",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "23",
				y: "23",
				width: "94",
				height: "234",
				rx: "3",
				className: "fill-secondary/10 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "70",
				y: "125",
				textAnchor: "middle",
				className: "font-sans text-[10px] font-bold fill-foreground",
				children: "NodeMCU"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "70",
				y: "145",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			Object.entries(ESP8266Pins).map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x + (pin.direction === "left" ? 10 : -10),
					y2: pin.y,
					className: "stroke-muted-foreground stroke-[1.5]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "3",
					className: "fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x + (pin.direction === "left" ? 15 : -15),
					y: pin.y + 3,
					textAnchor: pin.direction === "left" ? "start" : "end",
					className: "font-mono text-[7px] font-semibold fill-muted-foreground",
					children: name.replace(/\d+$/, "")
				})
			] }, name))
		]
	});
};
var SwitchPins = {
	"pin1": {
		x: 10,
		y: 20,
		direction: "left"
	},
	"pin2": {
		x: 60,
		y: 20,
		direction: "right"
	}
};
var Switch = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "65",
				height: "35",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "20",
				x2: "24",
				y2: "20",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "46",
				y1: "20",
				x2: "60",
				y2: "20",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "20",
				r: "2.5",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "46",
				cy: "20",
				r: "2.5",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "24",
				y1: "19",
				x2: "45",
				y2: "7",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "20",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "20",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "6",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "38",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label || "Switch"
			})
		]
	});
};
var PushButtonPins = {
	"pin1": {
		x: 10,
		y: 30,
		direction: "left"
	},
	"pin2": {
		x: 50,
		y: 30,
		direction: "right"
	}
};
var PushButton = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "55",
				height: "45",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "30",
				x2: "20",
				y2: "30",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "30",
				x2: "50",
				y2: "30",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "20",
				cy: "30",
				r: "2",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "30",
				r: "2",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "16",
				y1: "23",
				x2: "44",
				y2: "23",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "30",
				y1: "23",
				x2: "30",
				y2: "13",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "10",
				width: "12",
				height: "3",
				className: `fill-card stroke-1 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "30",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "30",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "44",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label || "Btn"
			})
		]
	});
};
var BuzzerPins = {
	"positive": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"negative": {
		x: 60,
		y: 25,
		direction: "right"
	}
};
var Buzzer = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "65",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "20",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "25",
				x2: "60",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20",
				y: "12",
				width: "30",
				height: "26",
				rx: "2",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "18",
				x2: "28",
				y2: "32",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "35",
				y1: "18",
				x2: "35",
				y2: "32",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "42",
				y1: "18",
				x2: "42",
				y2: "32",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "47",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label || "Buzzer"
			})
		]
	});
};
var ServoPins = {
	"signal": {
		x: 20,
		y: 70,
		direction: "bottom"
	},
	"vcc": {
		x: 35,
		y: 70,
		direction: "bottom"
	},
	"gnd": {
		x: 50,
		y: 70,
		direction: "bottom"
	}
};
var RelayPins = {
	"coil1": {
		x: 15,
		y: 20,
		direction: "left"
	},
	"coil2": {
		x: 15,
		y: 70,
		direction: "left"
	},
	"COM": {
		x: 85,
		y: 45,
		direction: "right"
	},
	"NO": {
		x: 85,
		y: 20,
		direction: "right"
	},
	"NC": {
		x: 85,
		y: 70,
		direction: "right"
	}
};
var Relay = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "10",
				width: "70",
				height: "70",
				rx: "4",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25",
				y: "25",
				width: "12",
				height: "40",
				rx: "1",
				className: "fill-none stroke-muted-foreground stroke-[1.5]",
				strokeDasharray: "3,1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "15",
				y1: "20",
				x2: "31",
				y2: "20",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "15",
				y1: "70",
				x2: "31",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "31",
				y1: "20",
				x2: "31",
				y2: "25",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "31",
				y1: "70",
				x2: "31",
				y2: "65",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "85",
				y1: "45",
				x2: "68",
				y2: "45",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "85",
				y1: "20",
				x2: "68",
				y2: "20",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "85",
				y1: "70",
				x2: "68",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "68",
				y1: "45",
				x2: "52",
				y2: "28",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "20",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "85",
				cy: "45",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "85",
				cy: "20",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "85",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "76",
				textAnchor: "middle",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: label || "Relay"
			})
		]
	});
};
var LDRPins = {
	"pin1": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"pin2": {
		x: 70,
		y: 25,
		direction: "right"
	}
};
var LDR = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "70",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "25",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "55",
				y1: "25",
				x2: "70",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "25",
				r: "16",
				className: "fill-card stroke-muted-foreground/30 stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25",
				y: "18",
				width: "30",
				height: "14",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 23 8 L 30 14 M 27 8 L 30 14 L 26 12",
				className: "fill-none stroke-brand/80 stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 33 5 L 40 11 M 37 5 L 40 11 L 36 9",
				className: "fill-none stroke-brand/80 stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "47",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label || "LDR"
			})
		]
	});
};
var IRSensorPins = {
	"VCC": {
		x: 15,
		y: 65,
		direction: "bottom"
	},
	"GND": {
		x: 30,
		y: 65,
		direction: "bottom"
	},
	"OUT": {
		x: 45,
		y: 65,
		direction: "bottom"
	}
};
var IRSensor = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "50",
				height: "70",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: "20",
				width: "40",
				height: "45",
				rx: "3",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16",
				y: "10",
				width: "8",
				height: "10",
				rx: "1.5",
				className: "fill-blue-500/20 stroke-blue-500 stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "36",
				y: "10",
				width: "8",
				height: "10",
				rx: "1.5",
				className: "fill-neutral-900 stroke-neutral-700 stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "15",
				y1: "58",
				x2: "15",
				y2: "65",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "30",
				y1: "58",
				x2: "30",
				y2: "65",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "45",
				y1: "58",
				x2: "45",
				y2: "65",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "65",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "65",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "65",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "45",
				textAnchor: "middle",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: label || "IR Sensor"
			})
		]
	});
};
var UltrasonicSensorPins = {
	"VCC": {
		x: 15,
		y: 65,
		direction: "bottom"
	},
	"Trig": {
		x: 30,
		y: 65,
		direction: "bottom"
	},
	"Echo": {
		x: 45,
		y: 65,
		direction: "bottom"
	},
	"GND": {
		x: 60,
		y: 65,
		direction: "bottom"
	}
};
var UltrasonicSensor = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "70",
				height: "70",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: "15",
				width: "60",
				height: "50",
				rx: "4",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "23",
				cy: "35",
				r: "11",
				className: "fill-none stroke-muted-foreground stroke-1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "23",
				y: "38",
				textAnchor: "middle",
				className: "font-sans text-[8px] fill-muted-foreground",
				children: "T"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "57",
				cy: "35",
				r: "11",
				className: "fill-none stroke-muted-foreground stroke-1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "57",
				y: "38",
				textAnchor: "middle",
				className: "font-sans text-[8px] fill-muted-foreground",
				children: "R"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "15",
				y1: "58",
				x2: "15",
				y2: "65",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "30",
				y1: "58",
				x2: "30",
				y2: "65",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "45",
				y1: "58",
				x2: "45",
				y2: "65",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "60",
				y1: "58",
				x2: "60",
				y2: "65",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "65",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "65",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "65",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "65",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "60",
				textAnchor: "middle",
				className: "font-mono text-[6px] fill-muted-foreground",
				children: label || "HC-SR04"
			})
		]
	});
};
var GasSensorPins = {
	"VCC": {
		x: 15,
		y: 70,
		direction: "bottom"
	},
	"GND": {
		x: 30,
		y: 70,
		direction: "bottom"
	},
	"DO": {
		x: 45,
		y: 70,
		direction: "bottom"
	},
	"AO": {
		x: 60,
		y: 70,
		direction: "bottom"
	}
};
var GasSensor = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "70",
				height: "75",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: "15",
				width: "60",
				height: "55",
				rx: "4",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "38",
				r: "13",
				className: "fill-secondary/20 stroke-muted-foreground stroke-1",
				strokeDasharray: "2,2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "38",
				r: "6",
				className: "fill-muted-foreground/30 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "15",
				y1: "62",
				x2: "15",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "30",
				y1: "62",
				x2: "30",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "45",
				y1: "62",
				x2: "45",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "60",
				y1: "62",
				x2: "60",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "55",
				textAnchor: "middle",
				className: "font-mono text-[6px] fill-muted-foreground",
				children: label || "MQ Gas/Flame"
			})
		]
	});
};
var TransistorPins = {
	"base": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"collector": {
		x: 50,
		y: 10,
		direction: "top"
	},
	"emitter": {
		x: 50,
		y: 40,
		direction: "bottom"
	}
};
var Transistor = ({ id, label, value, pnp, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "55",
				height: "45",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "25",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "10",
				x2: "50",
				y2: "18",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "40",
				x2: "50",
				y2: "32",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "25",
				y1: "15",
				x2: "25",
				y2: "35",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "25",
				y1: "20",
				x2: "40",
				y2: "15",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "15",
				x2: "50",
				y2: "18",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "25",
				y1: "30",
				x2: "40",
				y2: "35",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "35",
				x2: "50",
				y2: "32",
				className: "stroke-foreground stroke-2"
			}),
			pnp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 33 32 L 27 31 M 30 28 L 27 31 L 33 32",
				className: "fill-none stroke-foreground stroke-2"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 38 34 L 44 37 M 42 32 L 44 37 L 38 34",
				className: "fill-none stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "10",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "40",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "54",
				y: "28",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: value || label || (pnp ? "PNP" : "NPN")
			})
		]
	});
};
var MOSFETPins = {
	"gate": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"drain": {
		x: 50,
		y: 10,
		direction: "top"
	},
	"source": {
		x: 50,
		y: 40,
		direction: "bottom"
	}
};
var MOSFET = ({ id, label, value, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "55",
				height: "45",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "23",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "23",
				y1: "15",
				x2: "23",
				y2: "35",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "15",
				x2: "28",
				y2: "21",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "22",
				x2: "28",
				y2: "28",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "29",
				x2: "28",
				y2: "35",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "10",
				x2: "50",
				y2: "18",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "40",
				x2: "50",
				y2: "32",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "18",
				x2: "50",
				y2: "18",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "32",
				x2: "50",
				y2: "32",
				className: "stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "25",
				x2: "42",
				y2: "25",
				className: "stroke-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "42",
				y1: "25",
				x2: "42",
				y2: "32",
				className: "stroke-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 28 25 L 34 22 M 28 25 L 34 28",
				className: "fill-none stroke-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "10",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "40",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "54",
				y: "28",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: value || label || "MOSFET"
			})
		]
	});
};
var LCD16x2Pins = {
	"VSS": {
		x: 20,
		y: 15,
		direction: "top"
	},
	"VDD": {
		x: 30,
		y: 15,
		direction: "top"
	},
	"VO": {
		x: 40,
		y: 15,
		direction: "top"
	},
	"RS": {
		x: 50,
		y: 15,
		direction: "top"
	},
	"RW": {
		x: 60,
		y: 15,
		direction: "top"
	},
	"E": {
		x: 70,
		y: 15,
		direction: "top"
	},
	"D0": {
		x: 80,
		y: 15,
		direction: "top"
	},
	"D1": {
		x: 90,
		y: 15,
		direction: "top"
	},
	"D2": {
		x: 100,
		y: 15,
		direction: "top"
	},
	"D3": {
		x: 110,
		y: 15,
		direction: "top"
	},
	"D4": {
		x: 120,
		y: 15,
		direction: "top"
	},
	"D5": {
		x: 130,
		y: 15,
		direction: "top"
	},
	"D6": {
		x: 140,
		y: 15,
		direction: "top"
	},
	"D7": {
		x: 150,
		y: 15,
		direction: "top"
	},
	"A": {
		x: 160,
		y: 15,
		direction: "top"
	},
	"K": {
		x: 170,
		y: 15,
		direction: "top"
	}
};
var LCD16x2 = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "15",
				width: "160",
				height: "95",
				rx: "6",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25",
				y: "38",
				width: "140",
				height: "60",
				rx: "3",
				className: "fill-secondary/10 stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "32",
				y: "58",
				className: "font-mono text-[9px] fill-muted-foreground font-semibold",
				children: "Row 1: Hello World!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "32",
				y: "78",
				className: "font-mono text-[9px] fill-muted-foreground font-semibold",
				children: "Row 2: EEE Project"
			}),
			Object.entries(LCD16x2Pins).map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x,
					y2: pin.y + 10,
					className: "stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "2.5",
					className: "fill-card stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x,
					y: pin.y + 20,
					textAnchor: "middle",
					className: "font-mono text-[6px] fill-muted-foreground",
					children: name
				})
			] }, name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "95",
				y: "105",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			})
		]
	});
};
var OLEDPins = {
	"GND": {
		x: 20,
		y: 15,
		direction: "top"
	},
	"VCC": {
		x: 35,
		y: 15,
		direction: "top"
	},
	"SCL": {
		x: 50,
		y: 15,
		direction: "top"
	},
	"SDA": {
		x: 65,
		y: 15,
		direction: "top"
	}
};
var OLED = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "15",
				width: "55",
				height: "65",
				rx: "6",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20",
				y: "38",
				width: "45",
				height: "35",
				rx: "2",
				className: "fill-secondary/15 stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "42",
				y: "60",
				textAnchor: "middle",
				className: "font-sans text-[7px] fill-muted-foreground font-semibold",
				children: "OLED I2C"
			}),
			Object.entries(OLEDPins).map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x,
					y2: pin.y + 10,
					className: "stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "2.5",
					className: "fill-card stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x,
					y: pin.y + 20,
					textAnchor: "middle",
					className: "font-mono text-[6px] fill-muted-foreground",
					children: name
				})
			] }, name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "42",
				y: "75",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			})
		]
	});
};
var VoltageRegulatorPins = {
	"IN": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"OUT": {
		x: 70,
		y: 25,
		direction: "right"
	},
	"GND": {
		x: 40,
		y: 55,
		direction: "bottom"
	}
};
var VoltageRegulator = ({ id, label, value, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "70",
				height: "55",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "20",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "60",
				y1: "25",
				x2: "70",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "40",
				x2: "40",
				y2: "55",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20",
				y: "10",
				width: "40",
				height: "30",
				rx: "2",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "28",
				textAnchor: "middle",
				className: "font-sans text-[8px] font-bold fill-foreground",
				children: value || label || "7805"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "55",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "7",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			})
		]
	});
};
var LM358Pins = {
	"IN+": {
		x: 10,
		y: 15,
		direction: "left"
	},
	"IN-": {
		x: 10,
		y: 35,
		direction: "left"
	},
	"VCC": {
		x: 35,
		y: 10,
		direction: "top"
	},
	"GND": {
		x: 35,
		y: 40,
		direction: "bottom"
	},
	"OUT": {
		x: 60,
		y: 25,
		direction: "right"
	}
};
var LM358 = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "60",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "15",
				x2: "20",
				y2: "15",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "35",
				x2: "20",
				y2: "35",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "25",
				x2: "60",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "35",
				y1: "10",
				x2: "35",
				y2: "17",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "35",
				y1: "40",
				x2: "35",
				y2: "33",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "20,10 20,40 50,25",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "23",
				y: "18",
				className: "font-sans text-[8px] font-bold fill-muted-foreground",
				children: "+"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "23",
				y: "36",
				className: "font-sans text-[8px] font-bold fill-muted-foreground",
				children: "-"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "15",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "35",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "10",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "40",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "25",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "6",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "54",
				y: "34",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: label || "LM358"
			})
		]
	});
};
var LogicGate2InputPins = {
	"IN1": {
		x: 10,
		y: 15,
		direction: "left"
	},
	"IN2": {
		x: 10,
		y: 35,
		direction: "left"
	},
	"OUT": {
		x: 60,
		y: 25,
		direction: "right"
	}
};
var LogicGate1InputPins = {
	"IN": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"OUT": {
		x: 60,
		y: 25,
		direction: "right"
	}
};
var LogicGate = ({ id, label, type, selected, hovered, onSelect }) => {
	const isNegated = ["NAND", "NOR"].includes(type);
	const colorClass = selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "60",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			type === "NOT" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "20",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "15",
				x2: "20",
				y2: "15",
				className: "stroke-muted-foreground stroke-2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "35",
				x2: "20",
				y2: "35",
				className: "stroke-muted-foreground stroke-2"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "25",
				x2: "60",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			type === "AND" || type === "NAND" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 20 10 L 35 10 A 15 15 0 0 1 35 40 L 20 40 Z",
				className: `fill-card stroke-2 ${colorClass}`
			}) : type === "OR" || type === "NOR" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 20 10 Q 28 25 20 40 Q 32 40 42 28 Q 45 25 42 22 Q 32 10 20 10 Z",
				className: `fill-card stroke-2 ${colorClass}`
			}) : type === "XOR" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 16 10 Q 24 25 16 40",
				className: `fill-none stroke-2 ${colorClass}`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 20 10 Q 28 25 20 40 Q 32 40 42 28 Q 45 25 42 22 Q 32 10 20 10 Z",
				className: `fill-card stroke-2 ${colorClass}`
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "20,10 20,40 42,25",
				className: `fill-card stroke-2 ${colorClass}`
			}),
			isNegated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "25",
				r: "3",
				className: `fill-card stroke-2 ${colorClass}`
			}),
			type === "NOT" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "25",
				r: "3",
				className: `fill-card stroke-2 ${colorClass}`
			}),
			type === "NOT" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "25",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "10",
					cy: "15",
					r: "2.5",
					className: "fill-card stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "10",
					cy: "35",
					r: "2.5",
					className: "fill-card stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "25",
					r: "2.5",
					className: "fill-card stroke-muted-foreground stroke-1"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "32",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "32",
				y: "47",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label || type
			})
		]
	});
};
var BreadboardPins = {
	"vcc1": {
		x: 10,
		y: 15,
		direction: "left"
	},
	"gnd1": {
		x: 10,
		y: 30,
		direction: "left"
	},
	"vcc2": {
		x: 140,
		y: 15,
		direction: "right"
	},
	"gnd2": {
		x: 140,
		y: 30,
		direction: "right"
	}
};
var Breadboard = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: "10",
				width: "130",
				height: "50",
				rx: "4",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "20",
				y1: "20",
				x2: "130",
				y2: "20",
				className: "stroke-red-500 stroke-[1.5] stroke-dasharray",
				strokeDasharray: "3,2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "20",
				y1: "50",
				x2: "130",
				y2: "50",
				className: "stroke-blue-500 stroke-[1.5] stroke-dasharray",
				strokeDasharray: "3,2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "35",
				r: "1.5",
				className: "fill-muted-foreground/40 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "35",
				r: "1.5",
				className: "fill-muted-foreground/40 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "65",
				cy: "35",
				r: "1.5",
				className: "fill-muted-foreground/40 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "35",
				r: "1.5",
				className: "fill-muted-foreground/40 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "95",
				cy: "35",
				r: "1.5",
				className: "fill-muted-foreground/40 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "35",
				r: "1.5",
				className: "fill-muted-foreground/40 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "15",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "30",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "140",
				cy: "15",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "140",
				cy: "30",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "75",
				y: "45",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "75",
				y: "58",
				textAnchor: "middle",
				className: "font-sans text-[7px] fill-muted-foreground",
				children: label || "Breadboard"
			})
		]
	});
};
var BluetoothHC05Pins = {
	"STATE": {
		x: 15,
		y: 25,
		direction: "left"
	},
	"RXD": {
		x: 15,
		y: 38,
		direction: "left"
	},
	"TXD": {
		x: 15,
		y: 51,
		direction: "left"
	},
	"GND": {
		x: 15,
		y: 64,
		direction: "left"
	},
	"VCC": {
		x: 15,
		y: 77,
		direction: "left"
	},
	"EN": {
		x: 15,
		y: 90,
		direction: "left"
	}
};
var BluetoothHC05 = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "15",
				width: "60",
				height: "85",
				rx: "4",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 20 19 L 20 23 L 25 23 L 25 19 L 30 19 L 30 23 L 35 23 L 35 19",
				className: "fill-none stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "45",
				y: "60",
				textAnchor: "middle",
				className: "font-sans text-[8px] font-bold fill-foreground",
				children: "HC-05"
			}),
			Object.entries(BluetoothHC05Pins).map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x + 10,
					y2: pin.y,
					className: "stroke-muted-foreground stroke-[1.5]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "2.5",
					className: "fill-card stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x + 14,
					y: pin.y + 2.5,
					className: "font-mono text-[6px] fill-muted-foreground",
					children: name
				})
			] }, name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "45",
				y: "80",
				textAnchor: "middle",
				className: "font-mono text-[8px] font-semibold fill-brand/80",
				children: id
			})
		]
	});
};
var WiFiESP8266Pins = {
	"TX": {
		x: 15,
		y: 25,
		direction: "left"
	},
	"GND": {
		x: 15,
		y: 38,
		direction: "left"
	},
	"CH_PD": {
		x: 15,
		y: 51,
		direction: "left"
	},
	"GPIO2": {
		x: 15,
		y: 64,
		direction: "left"
	},
	"RST": {
		x: 65,
		y: 25,
		direction: "right"
	},
	"GPIO0": {
		x: 65,
		y: 38,
		direction: "right"
	},
	"VCC": {
		x: 65,
		y: 51,
		direction: "right"
	},
	"RX": {
		x: 65,
		y: 64,
		direction: "right"
	}
};
var WiFiESP8266 = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "15",
				width: "50",
				height: "60",
				rx: "4",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "48",
				textAnchor: "middle",
				className: "font-sans text-[7px] font-bold fill-foreground",
				children: "ESP-01"
			}),
			Object.entries(WiFiESP8266Pins).map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x + (pin.direction === "left" ? 8 : -8),
					y2: pin.y,
					className: "stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "2",
					className: "fill-card stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x + (pin.direction === "left" ? 11 : -11),
					y: pin.y + 2,
					textAnchor: pin.direction === "left" ? "start" : "end",
					className: "font-mono text-[5px] fill-muted-foreground",
					children: name
				})
			] }, name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "68",
				textAnchor: "middle",
				className: "font-mono text-[7px] font-semibold fill-brand/80",
				children: id
			})
		]
	});
};
var BridgeRectifierPins = {
	"AC1": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"AC2": {
		x: 40,
		y: 55,
		direction: "bottom"
	},
	"positive": {
		x: 70,
		y: 25,
		direction: "right"
	},
	"negative": {
		x: 40,
		y: -5,
		direction: "top"
	}
};
var BridgeRectifier = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "-5",
				width: "70",
				height: "65",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "40,5 65,25 40,45 15,25",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "26",
				y: "27",
				className: "font-sans text-[7px] fill-muted-foreground",
				children: "~"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "54",
				y: "27",
				className: "font-sans text-[7px] fill-muted-foreground",
				children: "~"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "15",
				textAnchor: "middle",
				className: "font-sans text-[8px] fill-brand font-bold",
				children: "-"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "40",
				y: "41",
				textAnchor: "middle",
				className: "font-sans text-[7px] fill-brand font-bold",
				children: "+"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "15",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "65",
				y1: "25",
				x2: "70",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "45",
				x2: "40",
				y2: "55",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "5",
				x2: "40",
				y2: "-5",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "25",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "55",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "-5",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "24",
				y: "-1",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			})
		]
	});
};
var CrystalOscillatorPins = {
	"pin1": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"pin2": {
		x: 50,
		y: 25,
		direction: "right"
	}
};
var CrystalOscillator = ({ id, label, value, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "55",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "20",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "25",
				x2: "50",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "20",
				y1: "12",
				x2: "20",
				y2: "38",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "12",
				x2: "40",
				y2: "38",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "15",
				width: "12",
				height: "20",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "25",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "47",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: value || label || "XTAL"
			})
		]
	});
};
var ArduinoUnoPins$1 = {
	"5v": {
		x: 80,
		y: 180,
		direction: "bottom"
	},
	"3.3v": {
		x: 70,
		y: 180,
		direction: "bottom"
	},
	"gnd": {
		x: 90,
		y: 180,
		direction: "bottom"
	},
	"gnd2": {
		x: 100,
		y: 180,
		direction: "bottom"
	},
	"vin": {
		x: 110,
		y: 180,
		direction: "bottom"
	},
	"a0": {
		x: 140,
		y: 180,
		direction: "bottom"
	},
	"a1": {
		x: 150,
		y: 180,
		direction: "bottom"
	},
	"a2": {
		x: 160,
		y: 180,
		direction: "bottom"
	},
	"a3": {
		x: 170,
		y: 180,
		direction: "bottom"
	},
	"a4": {
		x: 180,
		y: 180,
		direction: "bottom"
	},
	"a5": {
		x: 190,
		y: 180,
		direction: "bottom"
	},
	"d0": {
		x: 260,
		y: 0,
		direction: "top"
	},
	"d1": {
		x: 250,
		y: 0,
		direction: "top"
	},
	"d2": {
		x: 240,
		y: 0,
		direction: "top"
	},
	"d3": {
		x: 230,
		y: 0,
		direction: "top"
	},
	"d4": {
		x: 220,
		y: 0,
		direction: "top"
	},
	"d5": {
		x: 210,
		y: 0,
		direction: "top"
	},
	"d6": {
		x: 200,
		y: 0,
		direction: "top"
	},
	"d7": {
		x: 190,
		y: 0,
		direction: "top"
	},
	"d8": {
		x: 170,
		y: 0,
		direction: "top"
	},
	"d9": {
		x: 160,
		y: 0,
		direction: "top"
	},
	"d10": {
		x: 150,
		y: 0,
		direction: "top"
	},
	"d11": {
		x: 140,
		y: 0,
		direction: "top"
	},
	"d12": {
		x: 130,
		y: 0,
		direction: "top"
	},
	"d13": {
		x: 120,
		y: 0,
		direction: "top"
	},
	"gnd3": {
		x: 110,
		y: 0,
		direction: "top"
	},
	"aref": {
		x: 100,
		y: 0,
		direction: "top"
	},
	"sda": {
		x: 90,
		y: 0,
		direction: "top"
	},
	"scl": {
		x: 80,
		y: 0,
		direction: "top"
	}
};
var ResistorPins = {
	"left": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"right": {
		x: 90,
		y: 25,
		direction: "right"
	}
};
var CapacitorPins = {
	"positive": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"negative": {
		x: 70,
		y: 25,
		direction: "right"
	}
};
var PotentiometerPins = {
	"vcc": {
		x: 10,
		y: 40,
		direction: "left"
	},
	"out": {
		x: 50,
		y: 10,
		direction: "top"
	},
	"gnd": {
		x: 90,
		y: 40,
		direction: "right"
	}
};
var LEDPins = {
	"anode": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"cathode": {
		x: 70,
		y: 25,
		direction: "right"
	}
};
var RGBLEDPins = {
	"r": {
		x: 15,
		y: 60,
		direction: "bottom"
	},
	"g": {
		x: 25,
		y: 60,
		direction: "bottom"
	},
	"b": {
		x: 35,
		y: 60,
		direction: "bottom"
	},
	"gnd": {
		x: 45,
		y: 60,
		direction: "bottom"
	}
};
var DiodePins = {
	"anode": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"cathode": {
		x: 70,
		y: 25,
		direction: "right"
	}
};
var BatteryPins = {
	"positive": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"negative": {
		x: 70,
		y: 25,
		direction: "right"
	}
};
var Battery9VPins = {
	"positive": {
		x: 25,
		y: 15,
		direction: "top"
	},
	"negative": {
		x: 50,
		y: 15,
		direction: "top"
	}
};
var PowerSupplyPins = {
	"positive": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"negative": {
		x: 70,
		y: 25,
		direction: "right"
	}
};
var GroundPins = { "gnd": {
	x: 20,
	y: 10,
	direction: "top"
} };
var DCMotorPins = {
	"positive": {
		x: 10,
		y: 25,
		direction: "left"
	},
	"negative": {
		x: 70,
		y: 25,
		direction: "right"
	}
};
var StepperMotorPins = {
	"in1": {
		x: 15,
		y: 60,
		direction: "bottom"
	},
	"in2": {
		x: 25,
		y: 60,
		direction: "bottom"
	},
	"in3": {
		x: 35,
		y: 60,
		direction: "bottom"
	},
	"in4": {
		x: 45,
		y: 60,
		direction: "bottom"
	}
};
var MotorDriverPins = {
	"ena": {
		x: 10,
		y: 120,
		direction: "bottom"
	},
	"in1": {
		x: 30,
		y: 120,
		direction: "bottom"
	},
	"in2": {
		x: 50,
		y: 120,
		direction: "bottom"
	},
	"in3": {
		x: 70,
		y: 120,
		direction: "bottom"
	},
	"in4": {
		x: 90,
		y: 120,
		direction: "bottom"
	},
	"enb": {
		x: 110,
		y: 120,
		direction: "bottom"
	},
	"out1": {
		x: 10,
		y: 20,
		direction: "left"
	},
	"out2": {
		x: 10,
		y: 110,
		direction: "left"
	},
	"out3": {
		x: 110,
		y: 20,
		direction: "right"
	},
	"out4": {
		x: 110,
		y: 110,
		direction: "right"
	},
	"vcc": {
		x: 30,
		y: 10,
		direction: "top"
	},
	"gnd": {
		x: 60,
		y: 10,
		direction: "top"
	},
	"5v": {
		x: 90,
		y: 10,
		direction: "top"
	}
};
var COMPONENT_DIMENSIONS = {
	"Arduino Uno": {
		width: 280,
		height: 180
	},
	"Arduino Nano": {
		width: 130,
		height: 280
	},
	"ESP32": {
		width: 150,
		height: 280
	},
	"ESP8266": {
		width: 140,
		height: 280
	},
	"Resistor": {
		width: 100,
		height: 50
	},
	"Capacitor": {
		width: 80,
		height: 50
	},
	"Ceramic Capacitor": {
		width: 80,
		height: 50
	},
	"Electrolytic Capacitor": {
		width: 80,
		height: 50
	},
	"LED": {
		width: 80,
		height: 50
	},
	"RGB LED": {
		width: 60,
		height: 70
	},
	"Battery": {
		width: 80,
		height: 50
	},
	"9V Battery": {
		width: 80,
		height: 110
	},
	"Power Supply": {
		width: 80,
		height: 50
	},
	"Ground": {
		width: 40,
		height: 50
	},
	"Switch": {
		width: 80,
		height: 50
	},
	"Push Button": {
		width: 70,
		height: 55
	},
	"Buzzer": {
		width: 80,
		height: 50
	},
	"Servo": {
		width: 70,
		height: 85
	},
	"Relay": {
		width: 100,
		height: 90
	},
	"DC Motor": {
		width: 80,
		height: 50
	},
	"Stepper Motor": {
		width: 60,
		height: 70
	},
	"L293D": {
		width: 120,
		height: 130
	},
	"L298N": {
		width: 120,
		height: 130
	},
	"Breadboard": {
		width: 150,
		height: 70
	},
	"LCD 16x2": {
		width: 190,
		height: 120
	},
	"OLED": {
		width: 85,
		height: 95
	},
	"I2C Module": {
		width: 85,
		height: 95
	},
	"Bluetooth HC05": {
		width: 90,
		height: 110
	},
	"WiFi ESP8266": {
		width: 80,
		height: 90
	},
	"IR Sensor": {
		width: 70,
		height: 85
	},
	"Ultrasonic Sensor": {
		width: 90,
		height: 85
	},
	"Flame Sensor": {
		width: 90,
		height: 90
	},
	"Gas Sensor": {
		width: 90,
		height: 90
	},
	"LDR": {
		width: 80,
		height: 50
	},
	"Potentiometer": {
		width: 100,
		height: 80
	},
	"Transistor NPN": {
		width: 70,
		height: 60
	},
	"Transistor PNP": {
		width: 70,
		height: 60
	},
	"MOSFET": {
		width: 70,
		height: 60
	},
	"Diode": {
		width: 80,
		height: 50
	},
	"Zener Diode": {
		width: 80,
		height: 50
	},
	"Bridge Rectifier": {
		width: 90,
		height: 70
	},
	"Crystal Oscillator": {
		width: 70,
		height: 60
	},
	"IC Socket": {
		width: 120,
		height: 130
	},
	"Voltage Regulator 7805": {
		width: 90,
		height: 80
	},
	"LM317": {
		width: 90,
		height: 80
	},
	"LM358": {
		width: 80,
		height: 60
	},
	"AND Gate": {
		width: 80,
		height: 60
	},
	"OR Gate": {
		width: 80,
		height: 60
	},
	"NOT Gate": {
		width: 80,
		height: 60
	},
	"NAND": {
		width: 80,
		height: 60
	},
	"NOR": {
		width: 80,
		height: 60
	},
	"XOR": {
		width: 80,
		height: 60
	}
};
var PIN_LIBRARY = {
	"Arduino Uno": ArduinoUnoPins$1,
	"Arduino Nano": ArduinoNanoPins,
	"ESP32": ESP32Pins,
	"ESP8266": ESP8266Pins,
	"Resistor": ResistorPins,
	"Capacitor": CapacitorPins,
	"Ceramic Capacitor": CapacitorPins,
	"Electrolytic Capacitor": CapacitorPins,
	"LED": LEDPins,
	"RGB LED": RGBLEDPins,
	"Battery": BatteryPins,
	"9V Battery": Battery9VPins,
	"Power Supply": PowerSupplyPins,
	"Ground": GroundPins,
	"Switch": SwitchPins,
	"Push Button": PushButtonPins,
	"Buzzer": BuzzerPins,
	"Servo": ServoPins,
	"Relay": RelayPins,
	"DC Motor": DCMotorPins,
	"Stepper Motor": StepperMotorPins,
	"L293D": MotorDriverPins,
	"L298N": MotorDriverPins,
	"Breadboard": BreadboardPins,
	"LCD 16x2": LCD16x2Pins,
	"OLED": OLEDPins,
	"I2C Module": OLEDPins,
	"Bluetooth HC05": BluetoothHC05Pins,
	"WiFi ESP8266": WiFiESP8266Pins,
	"IR Sensor": IRSensorPins,
	"Ultrasonic Sensor": UltrasonicSensorPins,
	"Flame Sensor": GasSensorPins,
	"Gas Sensor": GasSensorPins,
	"LDR": LDRPins,
	"Potentiometer": PotentiometerPins,
	"Transistor NPN": TransistorPins,
	"Transistor PNP": TransistorPins,
	"MOSFET": MOSFETPins,
	"Diode": DiodePins,
	"Zener Diode": DiodePins,
	"Bridge Rectifier": BridgeRectifierPins,
	"Crystal Oscillator": CrystalOscillatorPins,
	"IC Socket": MotorDriverPins,
	"Voltage Regulator 7805": VoltageRegulatorPins,
	"LM317": VoltageRegulatorPins,
	"LM358": LM358Pins,
	"AND Gate": LogicGate2InputPins,
	"OR Gate": LogicGate2InputPins,
	"NOT Gate": LogicGate1InputPins,
	"NAND": LogicGate2InputPins,
	"NOR": LogicGate2InputPins,
	"XOR": LogicGate2InputPins
};
/**
* Returns relative x,y coordinates and line exit direction for a given component and pin
*/
function getPinConfig(componentType, pinName) {
	const compPins = PIN_LIBRARY[componentType] || PIN_LIBRARY[normalizeType(componentType)];
	if (!compPins) return {
		x: 0,
		y: 0,
		direction: "left"
	};
	let pin = compPins[pinName];
	if (!pin) {
		const key = Object.keys(compPins).find((k) => k.toLowerCase() === pinName.toLowerCase() || pinName.toLowerCase().startsWith(k.toLowerCase()));
		if (key) pin = compPins[key];
	}
	return pin || {
		x: 0,
		y: 0,
		direction: "left"
	};
}
/**
* Normalizes types like 'Transistor (NPN)' to 'Transistor NPN'
*/
function normalizeType(type) {
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
var EditorContext = (0, import_react.createContext)(void 0);
var EditorProvider = ({ initialData, children }) => {
	const [components, setComponents] = (0, import_react.useState)(initialData.components || []);
	const [connections, setConnections] = (0, import_react.useState)(initialData.connections || []);
	const [pan, setPan] = (0, import_react.useState)({
		x: 80,
		y: 50
	});
	const [zoom, setZoom] = (0, import_react.useState)(.85);
	const [toolMode, setToolModeState] = (0, import_react.useState)("select");
	const [selectedCompIds, setSelectedCompIdsState] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [selectedWireIndex, setSelectedWireIndex] = (0, import_react.useState)(null);
	const [showGrid, setShowGrid] = (0, import_react.useState)(true);
	const [showLabels, setShowLabels] = (0, import_react.useState)(true);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [hoveredCompId, setHoveredCompId] = (0, import_react.useState)(null);
	const [hoveredWireIndex, setHoveredWireIndex] = (0, import_react.useState)(null);
	const [hoveredPin, setHoveredPin] = (0, import_react.useState)(null);
	const pastStack = (0, import_react.useRef)([]);
	const futureStack = (0, import_react.useRef)([]);
	const clipboard = (0, import_react.useRef)(null);
	const currentDataRef = (0, import_react.useRef)({
		components,
		connections
	});
	(0, import_react.useEffect)(() => {
		currentDataRef.current = {
			components,
			connections
		};
	}, [components, connections]);
	const saveHistoryState = (0, import_react.useCallback)(() => {
		pastStack.current.push({
			components: JSON.parse(JSON.stringify(currentDataRef.current.components)),
			connections: JSON.parse(JSON.stringify(currentDataRef.current.connections))
		});
		if (pastStack.current.length > 50) pastStack.current.shift();
		futureStack.current = [];
	}, []);
	const undo = (0, import_react.useCallback)(() => {
		if (pastStack.current.length === 0) return;
		const previous = pastStack.current.pop();
		futureStack.current.push({
			components: JSON.parse(JSON.stringify(currentDataRef.current.components)),
			connections: JSON.parse(JSON.stringify(currentDataRef.current.connections))
		});
		setComponents(previous.components);
		setConnections(previous.connections);
		setSelectedCompIdsState(/* @__PURE__ */ new Set());
		setSelectedWireIndex(null);
	}, []);
	const redo = (0, import_react.useCallback)(() => {
		if (futureStack.current.length === 0) return;
		const next = futureStack.current.pop();
		pastStack.current.push({
			components: JSON.parse(JSON.stringify(currentDataRef.current.components)),
			connections: JSON.parse(JSON.stringify(currentDataRef.current.connections))
		});
		setComponents(next.components);
		setConnections(next.connections);
		setSelectedCompIdsState(/* @__PURE__ */ new Set());
		setSelectedWireIndex(null);
	}, []);
	const setSelectedCompIds = (0, import_react.useCallback)((ids) => {
		setSelectedCompIdsState(ids);
		if (ids.size > 0) setSelectedWireIndex(null);
	}, []);
	const setToolMode = (0, import_react.useCallback)((mode) => {
		setToolModeState(mode);
	}, []);
	const updateComponentPosition = (0, import_react.useCallback)((id, x, y) => {
		setComponents((prev) => prev.map((c) => c.id === id ? {
			...c,
			x: snapToGrid(x, 20),
			y: snapToGrid(y, 20)
		} : c));
	}, []);
	const rotateComponent = (0, import_react.useCallback)((id) => {
		saveHistoryState();
		setComponents((prev) => prev.map((c) => c.id === id ? {
			...c,
			rotation: ((c.rotation || 0) + 90) % 360
		} : c));
	}, [saveHistoryState]);
	const copySelected = (0, import_react.useCallback)(() => {
		if (selectedCompIds.size === 0) return;
		const selectedList = components.filter((c) => selectedCompIds.has(c.id));
		const internalConnections = connections.filter((conn) => {
			const fromId = conn.from.split(":")[0];
			const toId = conn.to.split(":")[0];
			return selectedCompIds.has(fromId) && selectedCompIds.has(toId);
		});
		clipboard.current = {
			components: JSON.parse(JSON.stringify(selectedList)),
			connections: JSON.parse(JSON.stringify(internalConnections))
		};
	}, [
		components,
		connections,
		selectedCompIds
	]);
	const pasteCopied = (0, import_react.useCallback)(() => {
		if (!clipboard.current) return;
		saveHistoryState();
		const idMap = {};
		const newComponents = clipboard.current.components.map((c) => {
			const match = c.id.match(/^([a-zA-Z]+)(\d+)$/);
			let newId = `${c.id}_copy`;
			if (match) {
				const prefix = match[1];
				let idx = parseInt(match[2]) + 1;
				while (components.some((comp) => comp.id === `${prefix}${idx}`)) idx++;
				newId = `${prefix}${idx}`;
			}
			idMap[c.id] = newId;
			return {
				...c,
				id: newId,
				label: c.label ? `${c.label} (Copy)` : void 0,
				x: snapToGrid(c.x + 40, 20),
				y: snapToGrid(c.y + 40, 20)
			};
		});
		const newConnections = clipboard.current.connections.map((conn) => {
			const [fromId, fromPin] = conn.from.split(":");
			const [toId, toPin] = conn.to.split(":");
			return {
				from: `${idMap[fromId] || fromId}:${fromPin}`,
				to: `${idMap[toId] || toId}:${toPin}`
			};
		});
		setComponents((prev) => [...prev, ...newComponents]);
		setConnections((prev) => [...prev, ...newConnections]);
		const pastedIds = new Set(newComponents.map((c) => c.id));
		setSelectedCompIdsState(pastedIds);
	}, [components, saveHistoryState]);
	const deleteSelected = (0, import_react.useCallback)(() => {
		if (selectedCompIds.size === 0 && selectedWireIndex === null) return;
		saveHistoryState();
		if (selectedCompIds.size > 0) {
			setComponents((prev) => prev.filter((c) => !selectedCompIds.has(c.id)));
			setConnections((prev) => prev.filter((conn) => {
				const fromId = conn.from.split(":")[0];
				const toId = conn.to.split(":")[0];
				return !selectedCompIds.has(fromId) && !selectedCompIds.has(toId);
			}));
			setSelectedCompIdsState(/* @__PURE__ */ new Set());
		}
		if (selectedWireIndex !== null) {
			setConnections((prev) => prev.filter((_, idx) => idx !== selectedWireIndex));
			setSelectedWireIndex(null);
		}
	}, [
		selectedCompIds,
		selectedWireIndex,
		saveHistoryState
	]);
	const selectAll = (0, import_react.useCallback)(() => {
		const allIds = new Set(components.map((c) => c.id));
		setSelectedCompIdsState(allIds);
		setSelectedWireIndex(null);
	}, [components]);
	const resetView = (0, import_react.useCallback)(() => {
		setZoom(.85);
		setPan({
			x: 80,
			y: 50
		});
	}, []);
	const centerDiagram = (0, import_react.useCallback)(() => {
		if (components.length === 0) return;
		let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
		components.forEach((c) => {
			const dims = COMPONENT_DIMENSIONS[normalizeType(c.type)] || {
				width: 80,
				height: 50
			};
			minX = Math.min(minX, c.x);
			minY = Math.min(minY, c.y);
			maxX = Math.max(maxX, c.x + dims.width);
			maxY = Math.max(maxY, c.y + dims.height);
		});
		const midX = (minX + maxX) / 2;
		const midY = (minY + maxY) / 2;
		const svgElem = document.getElementById("schematic-svg");
		if (svgElem) {
			const w = svgElem.clientWidth || 800;
			const h = svgElem.clientHeight || 500;
			setPan({
				x: w / 2 - midX * zoom,
				y: h / 2 - midY * zoom
			});
		}
	}, [components, zoom]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorContext.Provider, {
		value: {
			components,
			connections,
			setComponents,
			setConnections,
			pan,
			setPan,
			zoom,
			setZoom,
			toolMode,
			setToolMode,
			selectedCompIds,
			setSelectedCompIds,
			selectedWireIndex,
			setSelectedWireIndex,
			showGrid,
			setShowGrid,
			showLabels,
			setShowLabels,
			searchQuery,
			setSearchQuery,
			hoveredCompId,
			setHoveredCompId,
			hoveredWireIndex,
			setHoveredWireIndex,
			hoveredPin,
			setHoveredPin,
			undo,
			redo,
			canUndo: pastStack.current.length > 0,
			canRedo: futureStack.current.length > 0,
			saveHistoryState,
			copySelected,
			pasteCopied,
			deleteSelected,
			selectAll,
			updateComponentPosition,
			rotateComponent,
			resetView,
			centerDiagram
		},
		children
	});
};
var useEditor = () => {
	const context = (0, import_react.useContext)(EditorContext);
	if (!context) throw new Error("useEditor must be used within an EditorProvider");
	return context;
};
var Toolbar = () => {
	const { zoom, setZoom, setPan, toolMode, setToolMode, showGrid, setShowGrid, showLabels, setShowLabels, searchQuery, setSearchQuery, undo, redo, canUndo, canRedo, copySelected, pasteCopied, deleteSelected, resetView, centerDiagram, components, connections, selectedCompIds } = useEditor();
	const handleZoomIn = () => setZoom((z) => Math.min(4, z * 1.15));
	const handleZoomOut = () => setZoom((z) => Math.max(.2, z / 1.15));
	const exportSVG = () => {
		const svgElem = document.getElementById("schematic-svg");
		if (!svgElem) return;
		let source = new XMLSerializer().serializeToString(svgElem);
		source = "<?xml version=\"1.0\" standalone=\"no\"?>\r\n" + source;
		const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
		const trigger = document.createElement("a");
		trigger.href = url;
		trigger.download = "circuit_schematic.svg";
		trigger.click();
	};
	const exportPNG = () => {
		const svgElem = document.getElementById("schematic-svg");
		if (!svgElem) return;
		const source = new XMLSerializer().serializeToString(svgElem);
		const img = new Image();
		img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = 1200;
			canvas.height = 800;
			const ctx = canvas.getContext("2d");
			if (ctx) {
				ctx.fillStyle = "#0f172a";
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				const url = canvas.toDataURL("image/png");
				const trigger = document.createElement("a");
				trigger.href = url;
				trigger.download = "circuit_schematic.png";
				trigger.click();
			}
		};
	};
	const handlePrint = () => {
		const svgElem = document.getElementById("schematic-svg");
		const printWindow = window.open("", "_blank");
		if (!printWindow || !svgElem) return;
		const source = new XMLSerializer().serializeToString(svgElem);
		printWindow.document.write(`
      <html>
        <head>
          <title>Print Schematic - CircuitMind AI</title>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #fff; }
            svg { width: 95%; height: auto; }
          </style>
        </head>
        <body>
          ${source}
          <script>window.onload = function() { window.print(); setTimeout(window.close, 1000); }<\/script>
        </body>
      </html>
    `);
		printWindow.document.close();
	};
	const exportJSON = () => {
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
			components,
			connections
		}, null, 2));
		const trigger = document.createElement("a");
		trigger.href = dataStr;
		trigger.download = "circuit_design.json";
		trigger.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center justify-between border-b border-border/40 bg-background/50 px-4 py-2.5 gap-2 text-xs backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setToolMode("select"),
						className: `rounded-md p-1.5 transition ${toolMode === "select" ? "bg-brand text-white" : "hover:bg-secondary/60 text-muted-foreground hover:text-foreground"}`,
						title: "Select Tool (V)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MousePointer, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setToolMode("pan"),
						className: `rounded-md p-1.5 transition ${toolMode === "pan" ? "bg-brand text-white" : "hover:bg-secondary/60 text-muted-foreground hover:text-foreground"}`,
						title: "Pan Tool (H or Space)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hand, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-[1px] bg-border/60 mx-1.5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: undo,
						disabled: !canUndo,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground disabled:opacity-40",
						title: "Undo (Ctrl+Z)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: redo,
						disabled: !canRedo,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground disabled:opacity-40",
						title: "Redo (Ctrl+Y)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo2, { className: "size-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: copySelected,
						disabled: selectedCompIds.size === 0,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground disabled:opacity-40",
						title: "Copy Selection (Ctrl+C)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: pasteCopied,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground",
						title: "Paste Clipboard (Ctrl+V)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: deleteSelected,
						disabled: selectedCompIds.size === 0,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-destructive hover:bg-destructive/10 disabled:opacity-40",
						title: "Delete Selected (Del)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-[1px] bg-border/60 mx-1.5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleZoomOut,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground",
						title: "Zoom Out",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-[40px] text-center font-mono font-semibold text-muted-foreground",
						children: [Math.round(zoom * 100), "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleZoomIn,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground",
						title: "Zoom In",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: centerDiagram,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground",
						title: "Fit to Screen",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: resetView,
						className: "rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground",
						title: "Reset View",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-[1px] bg-border/60 mx-1.5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowGrid(!showGrid),
						className: `rounded-md p-1.5 transition ${showGrid ? "text-brand bg-brand/5" : "text-muted-foreground hover:text-foreground"}`,
						title: "Toggle Grid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowLabels(!showLabels),
						className: `rounded-md p-1.5 transition ${showLabels ? "text-brand bg-brand/5" : "text-muted-foreground hover:text-foreground"}`,
						title: "Toggle Component Labels",
						children: showLabels ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 size-3.5 text-muted-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search parts...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-32 rounded-lg border border-border bg-background py-1 pl-8 pr-2.5 text-xs outline-none focus:border-brand focus:ring-1 focus:ring-brand/40 transition"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-[1px] bg-border/60 mx-1.5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: exportSVG,
						className: "inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1.5 hover:bg-accent font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3" }), " SVG"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: exportPNG,
						className: "inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1.5 hover:bg-accent font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3" }), " PNG"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: exportJSON,
						className: "inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1.5 hover:bg-accent font-medium",
						title: "Export Circuit JSON",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { className: "size-3" }), " JSON"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handlePrint,
						className: "inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1.5 hover:bg-accent font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3" }), " Print"]
					})
				]
			})
		]
	});
};
var ArduinoUnoPins = {
	"D13": {
		x: 30,
		y: 15,
		direction: "top"
	},
	"D12": {
		x: 45,
		y: 15,
		direction: "top"
	},
	"D11": {
		x: 60,
		y: 15,
		direction: "top"
	},
	"D10": {
		x: 75,
		y: 15,
		direction: "top"
	},
	"D9": {
		x: 90,
		y: 15,
		direction: "top"
	},
	"D8": {
		x: 105,
		y: 15,
		direction: "top"
	},
	"D7": {
		x: 120,
		y: 15,
		direction: "top"
	},
	"D6": {
		x: 135,
		y: 15,
		direction: "top"
	},
	"D5": {
		x: 150,
		y: 15,
		direction: "top"
	},
	"D4": {
		x: 165,
		y: 15,
		direction: "top"
	},
	"D3": {
		x: 180,
		y: 15,
		direction: "top"
	},
	"D2": {
		x: 195,
		y: 15,
		direction: "top"
	},
	"GND1": {
		x: 210,
		y: 15,
		direction: "top"
	},
	"AREF": {
		x: 225,
		y: 15,
		direction: "top"
	},
	"SDA": {
		x: 240,
		y: 15,
		direction: "top"
	},
	"SCL": {
		x: 255,
		y: 15,
		direction: "top"
	},
	"Reset": {
		x: 30,
		y: 165,
		direction: "bottom"
	},
	"3.3V": {
		x: 45,
		y: 165,
		direction: "bottom"
	},
	"5V": {
		x: 60,
		y: 165,
		direction: "bottom"
	},
	"GND": {
		x: 75,
		y: 165,
		direction: "bottom"
	},
	"GND2": {
		x: 90,
		y: 165,
		direction: "bottom"
	},
	"VIN": {
		x: 105,
		y: 165,
		direction: "bottom"
	},
	"A0": {
		x: 135,
		y: 165,
		direction: "bottom"
	},
	"A1": {
		x: 150,
		y: 165,
		direction: "bottom"
	},
	"A2": {
		x: 165,
		y: 165,
		direction: "bottom"
	},
	"A3": {
		x: 180,
		y: 165,
		direction: "bottom"
	},
	"A4": {
		x: 195,
		y: 165,
		direction: "bottom"
	},
	"A5": {
		x: 210,
		y: 165,
		direction: "bottom"
	}
};
var ArduinoUno = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: "15",
				width: "260",
				height: "150",
				rx: "8",
				className: `fill-card stroke-2 transition-all ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "23",
				width: "244",
				height: "134",
				rx: "4",
				className: "fill-secondary/20 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "140",
				y: "75",
				textAnchor: "middle",
				className: "font-sans text-sm font-bold fill-foreground",
				children: "ARDUINO UNO"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
				x: "140",
				y: "95",
				textAnchor: "middle",
				className: "font-mono text-xs font-semibold fill-brand/80",
				children: [
					id,
					" ",
					label ? `(${label})` : ""
				]
			}),
			Object.entries(ArduinoUnoPins).filter(([_, p]) => p.direction === "top").map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x,
					y2: pin.y + 10,
					className: "stroke-muted-foreground stroke-[1.5]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "3.5",
					className: "fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x,
					y: pin.y + 22,
					textAnchor: "middle",
					className: "font-mono text-[8px] font-semibold fill-muted-foreground",
					children: name.replace(/\d+$/, "")
				})
			] }, name)),
			Object.entries(ArduinoUnoPins).filter(([_, p]) => p.direction === "bottom").map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x,
					y2: pin.y - 10,
					className: "stroke-muted-foreground stroke-[1.5]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "3.5",
					className: "fill-card stroke-muted-foreground stroke-1 hover:fill-brand hover:stroke-brand transition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x,
					y: pin.y - 20,
					textAnchor: "middle",
					className: "font-mono text-[8px] font-semibold fill-muted-foreground",
					children: name.replace(/\d+$/, "")
				})
			] }, name))
		]
	});
};
var L298NPins = {
	"IN1": {
		x: 15,
		y: 30,
		direction: "left"
	},
	"IN2": {
		x: 15,
		y: 45,
		direction: "left"
	},
	"IN3": {
		x: 15,
		y: 60,
		direction: "left"
	},
	"IN4": {
		x: 15,
		y: 75,
		direction: "left"
	},
	"ENA": {
		x: 15,
		y: 95,
		direction: "left"
	},
	"ENB": {
		x: 15,
		y: 110,
		direction: "left"
	},
	"OUT1": {
		x: 105,
		y: 30,
		direction: "right"
	},
	"OUT2": {
		x: 105,
		y: 45,
		direction: "right"
	},
	"OUT3": {
		x: 105,
		y: 60,
		direction: "right"
	},
	"OUT4": {
		x: 105,
		y: 75,
		direction: "right"
	},
	"VCC": {
		x: 105,
		y: 95,
		direction: "right"
	},
	"GND": {
		x: 105,
		y: 110,
		direction: "right"
	}
};
var L298N = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "15",
				width: "90",
				height: "110",
				rx: "6",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "23",
				y: "23",
				width: "74",
				height: "94",
				rx: "3",
				className: "fill-secondary/15 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "60",
				y: "65",
				textAnchor: "middle",
				className: "font-sans text-[10px] font-bold fill-foreground",
				children: "L298N / L293D"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "60",
				y: "80",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			Object.entries(L298NPins).map(([name, pin]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: pin.x,
					y1: pin.y,
					x2: pin.x + (pin.direction === "left" ? 10 : -10),
					y2: pin.y,
					className: "stroke-muted-foreground stroke-[1.5]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: pin.x,
					cy: pin.y,
					r: "2.5",
					className: "fill-card stroke-muted-foreground stroke-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pin.x + (pin.direction === "left" ? 14 : -14),
					y: pin.y + 3,
					textAnchor: pin.direction === "left" ? "start" : "end",
					className: "font-mono text-[7px] font-semibold fill-muted-foreground",
					children: name
				})
			] }, name))
		]
	});
};
var Battery = ({ id, label, value, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "65",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "25",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "45",
				y1: "25",
				x2: "60",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "25",
				y1: "12",
				x2: "25",
				y2: "38",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "31",
				y1: "18",
				x2: "31",
				y2: "32",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "38",
				y1: "12",
				x2: "38",
				y2: "38",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "45",
				y1: "18",
				x2: "45",
				y2: "32",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "18",
				y: "16",
				className: "font-sans text-[8px] font-bold fill-brand",
				children: "+"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "16",
				className: "font-sans text-[8px] font-bold fill-muted-foreground",
				children: "-"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "47",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: value || label || "Battery"
			})
		]
	});
};
var Battery9V = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "25",
				width: "45",
				height: "70",
				rx: "4",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "21",
				r: "4",
				className: "fill-none stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "46",
				y: "17",
				width: "8",
				height: "8",
				rx: "1.5",
				className: "fill-none stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "25",
				y1: "15",
				x2: "25",
				y2: "21",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "15",
				x2: "50",
				y2: "21",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "15",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "15",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20",
				y: "35",
				width: "35",
				height: "50",
				rx: "2",
				className: "fill-secondary/15 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "37",
				y: "62",
				textAnchor: "middle",
				className: "font-sans text-[10px] font-bold fill-foreground",
				children: "9V"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "37",
				y: "10",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "37",
				y: "104",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label
			})
		]
	});
};
var PowerSupply = ({ id, label, value, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "65",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "20",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "25",
				x2: "60",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "25",
				r: "15",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "29",
				textAnchor: "middle",
				className: "font-sans text-[11px] font-bold fill-foreground",
				children: "V"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "48",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: value || label || "DC Source"
			})
		]
	});
};
var LED = ({ id, label, value, color, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "70",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "28",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "25",
				x2: "70",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "28,15 28,35 48,25",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "15",
				x2: "48",
				y2: "35",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 33 13 L 26 6 M 29 8 L 26 6 L 28 10",
				className: "fill-none stroke-brand/80 stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 43 13 L 36 6 M 39 8 L 36 6 L 38 10",
				className: "fill-none stroke-brand/80 stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "38",
				y: "10",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "38",
				y: "47",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: value || color || label || "LED"
			})
		]
	});
};
var RGBLED = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "50",
				height: "55",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "30",
				r: "16",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "23",
				cy: "30",
				r: "3",
				className: "fill-red-500 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "30",
				r: "3",
				className: "fill-green-500 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "37",
				cy: "30",
				r: "3",
				className: "fill-blue-500 stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "30",
				y1: "10",
				x2: "30",
				y2: "14",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "15",
				y1: "46",
				x2: "15",
				y2: "55",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "30",
				y1: "46",
				x2: "30",
				y2: "55",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "45",
				y1: "46",
				x2: "45",
				y2: "55",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "10",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "55",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "55",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "55",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: "COM"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "52",
				y: "24",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "52",
				y: "36",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: label || "RGB"
			})
		]
	});
};
var Diode = ({ id, label, zener, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "70",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "28",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "25",
				x2: "70",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "28,15 28,35 48,25",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			zener ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 45 15 L 48 15 L 48 35 L 51 35",
				className: `fill-none stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "15",
				x2: "48",
				y2: "35",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "38",
				y: "10",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "38",
				y: "47",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label || (zener ? "Zener" : "Diode")
			})
		]
	});
};
var Servo = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "60",
				height: "75",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: "25",
				width: "50",
				height: "35",
				rx: "2",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "42",
				r: "8",
				className: "fill-secondary/20 stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "42",
				r: "3",
				className: "fill-muted-foreground stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "23",
				y: "14",
				width: "4",
				height: "20",
				rx: "1",
				className: "fill-muted-foreground/30 stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "14",
				r: "2.5",
				className: "fill-muted-foreground stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "30",
				r: "2.5",
				className: "fill-muted-foreground stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "20",
				y1: "60",
				x2: "20",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "35",
				y1: "60",
				x2: "35",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "60",
				x2: "50",
				y2: "70",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "20",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "70",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "10",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "54",
				y: "55",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: label || "Servo"
			})
		]
	});
};
var Resistor = ({ id, label, value, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "90",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "30",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "25",
				x2: "90",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "30",
				y: "15",
				width: "40",
				height: "20",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 30 25 L 35 18 L 41 32 L 47 18 L 53 32 L 59 18 L 65 32 L 70 25",
				className: "fill-none stroke-muted-foreground/30 stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "90",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "10",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "46",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: value || label || "Resistor"
			})
		]
	});
};
var Capacitor = ({ id, label, value, electrolytic, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "70",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "32",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "25",
				x2: "70",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			electrolytic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "32",
					y1: "10",
					x2: "32",
					y2: "40",
					className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 48 10 Q 42 25 48 40",
					className: `fill-none stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "25",
					y: "14",
					className: "font-sans text-[8px] font-bold fill-brand",
					children: "+"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "32",
				y1: "10",
				x2: "32",
				y2: "40",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: "10",
				x2: "40",
				y2: "40",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "36",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "36",
				y: "48",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: value || label || (electrolytic ? "Cap (Elec)" : "Capacitor")
			})
		]
	});
};
var Potentiometer = ({ id, label, value, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "90",
				height: "70",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "20",
				x2: "30",
				y2: "20",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "20",
				x2: "90",
				y2: "20",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "40",
				x2: "50",
				y2: "65",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "30",
				y: "10",
				width: "40",
				height: "20",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 50 38 L 47 32 M 50 38 L 53 32",
				className: "fill-none stroke-brand stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "20",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "90",
				cy: "20",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "65",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "55",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: value || label || "Pot"
			})
		]
	});
};
var DCMotor = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "65",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "25",
				x2: "20",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "50",
				y1: "25",
				x2: "60",
				y2: "25",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "25",
				r: "15",
				className: `fill-card stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "29",
				textAnchor: "middle",
				className: "font-sans text-xs font-bold fill-foreground",
				children: "M"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "25",
				r: "3",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "35",
				y: "47",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label || "DC Motor"
			})
		]
	});
};
var StepperMotor = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "50",
				height: "55",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "25",
				r: "18",
				className: `fill-card stroke-2 ${selected ? "stroke-brand drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : hovered ? "stroke-brand/60" : "stroke-border"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "29",
				textAnchor: "middle",
				className: "font-sans text-[8px] font-bold fill-foreground",
				children: "STEP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "15",
				y1: "43",
				x2: "15",
				y2: "55",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "25",
				y1: "43",
				x2: "25",
				y2: "55",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "35",
				y1: "43",
				x2: "35",
				y2: "55",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "45",
				y1: "43",
				x2: "45",
				y2: "55",
				className: "stroke-muted-foreground stroke-[1.5]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "55",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "55",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "55",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "55",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "5",
				textAnchor: "middle",
				className: "font-mono text-[9px] font-semibold fill-brand/80",
				children: id
			}),
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "54",
				y: "30",
				className: "font-mono text-[7px] fill-muted-foreground",
				children: label
			})
		]
	});
};
var Ground = ({ id, label, selected, hovered, onSelect }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "cursor-pointer select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "5",
				width: "30",
				height: "40",
				rx: "4",
				className: "fill-transparent stroke-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "20",
				y1: "10",
				x2: "20",
				y2: "22",
				className: "stroke-muted-foreground stroke-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "5",
				y1: "22",
				x2: "35",
				y2: "22",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "10",
				y1: "27",
				x2: "30",
				y2: "27",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "15",
				y1: "32",
				x2: "25",
				y2: "32",
				className: `stroke-2 ${selected ? "stroke-brand" : hovered ? "stroke-brand/60" : "stroke-foreground"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "20",
				cy: "10",
				r: "2.5",
				className: "fill-card stroke-muted-foreground stroke-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "20",
				y: "8",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-brand/80",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "20",
				y: "41",
				textAnchor: "middle",
				className: "font-mono text-[8px] fill-muted-foreground",
				children: label || "GND"
			})
		]
	});
};
var ComponentRenderer = import_react.memo(({ component, selected, hovered, highlighted, onSelect, onHover }) => {
	const normType = normalizeType(component.type);
	const gProps = {
		onMouseEnter: () => onHover?.(true),
		onMouseLeave: () => onHover?.(false),
		onClick: (e) => {
			e.stopPropagation();
			onSelect?.();
		},
		className: "group transition-all select-none cursor-grab active:cursor-grabbing"
	};
	const symProps = {
		id: component.id,
		label: component.label,
		value: component.value,
		selected,
		hovered
	};
	const getSymbol = () => {
		switch (normType) {
			case "Arduino Uno": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArduinoUno, { ...symProps });
			case "Arduino Nano": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArduinoNano, { ...symProps });
			case "ESP32": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ESP32, { ...symProps });
			case "ESP8266": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ESP8266, { ...symProps });
			case "L298N":
			case "L293D":
			case "IC Socket": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L298N, { ...symProps });
			case "Battery": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Battery, { ...symProps });
			case "9V Battery": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Battery9V, { ...symProps });
			case "Power Supply": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerSupply, { ...symProps });
			case "Ground": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, { ...symProps });
			case "LED": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LED, { ...symProps });
			case "RGB LED": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RGBLED, { ...symProps });
			case "Servo": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Servo, { ...symProps });
			case "Resistor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resistor, { ...symProps });
			case "Capacitor":
			case "Ceramic Capacitor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capacitor, { ...symProps });
			case "Electrolytic Capacitor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capacitor, {
				...symProps,
				electrolytic: true
			});
			case "DC Motor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DCMotor, { ...symProps });
			case "Stepper Motor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepperMotor, { ...symProps });
			case "Switch": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { ...symProps });
			case "Push Button": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PushButton, { ...symProps });
			case "Buzzer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Buzzer, { ...symProps });
			case "Relay": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Relay, { ...symProps });
			case "Breadboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadboard, { ...symProps });
			case "LCD 16x2": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LCD16x2, { ...symProps });
			case "OLED":
			case "I2C Module": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OLED, { ...symProps });
			case "Bluetooth HC05": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BluetoothHC05, { ...symProps });
			case "WiFi ESP8266": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WiFiESP8266, { ...symProps });
			case "IR Sensor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IRSensor, { ...symProps });
			case "Ultrasonic Sensor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UltrasonicSensor, { ...symProps });
			case "Flame Sensor":
			case "Gas Sensor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GasSensor, { ...symProps });
			case "LDR": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LDR, { ...symProps });
			case "Potentiometer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Potentiometer, { ...symProps });
			case "Transistor NPN": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transistor, { ...symProps });
			case "Transistor PNP": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transistor, {
				...symProps,
				pnp: true
			});
			case "MOSFET": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MOSFET, { ...symProps });
			case "Diode": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diode, { ...symProps });
			case "Zener Diode": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diode, {
				...symProps,
				zener: true
			});
			case "Bridge Rectifier": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BridgeRectifier, { ...symProps });
			case "Crystal Oscillator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrystalOscillator, { ...symProps });
			case "Voltage Regulator 7805":
			case "LM317": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoltageRegulator, { ...symProps });
			case "LM358": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LM358, { ...symProps });
			case "AND Gate":
			case "OR Gate":
			case "NOT Gate":
			case "NAND":
			case "NOR":
			case "XOR": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogicGate, {
				...symProps,
				type: normType.split(" ")[0]
			});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "0",
					width: "80",
					height: "50",
					rx: "3",
					className: `fill-card stroke-2 ${selected ? "stroke-brand" : "stroke-border"}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "40",
					y: "24",
					textAnchor: "middle",
					className: "font-mono text-[9px] fill-foreground font-bold",
					children: component.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "40",
					y: "38",
					textAnchor: "middle",
					className: "font-mono text-[7px] fill-muted-foreground",
					children: component.type
				})
			] });
		}
	};
	const rotation = component.rotation || 0;
	const transform = `translate(${component.x}, ${component.y}) rotate(${rotation}, ${COMPONENT_DIMENSIONS[normType]?.width / 2 || 40}, ${COMPONENT_DIMENSIONS[normType]?.height / 2 || 25})`;
	const w = COMPONENT_DIMENSIONS[normType]?.width || 80;
	const h = COMPONENT_DIMENSIONS[normType]?.height || 50;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform,
		...gProps,
		children: [getSymbol(), highlighted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "-4",
			y: "-4",
			width: w + 8,
			height: h + 8,
			rx: "6",
			fill: "none",
			stroke: "#a855f7",
			strokeWidth: "2.5",
			strokeDasharray: "4,4",
			className: "animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.95)]"
		})]
	});
});
ComponentRenderer.displayName = "ComponentRenderer";
/**
* Rotates a 2D coordinate around a specified center point by an angle in degrees.
*/
function rotatePoint(x, y, cx, cy, angle) {
	const radians = angle * Math.PI / 180;
	const cos = Math.cos(radians);
	const sin = Math.sin(radians);
	const dx = x - cx;
	const dy = y - cy;
	const rx = dx * cos - dy * sin;
	const ry = dx * sin + dy * cos;
	return {
		x: Math.round(rx + cx),
		y: Math.round(ry + cy)
	};
}
/**
* Returns rotated exit direction for pin mapping
*/
function rotateDirection(direction, angle) {
	const directions = [
		"top",
		"right",
		"bottom",
		"left"
	];
	const idx = directions.indexOf(direction);
	if (idx === -1) return direction;
	const newIdx = (idx + Math.round(angle / 90)) % 4;
	return directions[newIdx >= 0 ? newIdx : newIdx + 4];
}
/**
* Computes absolute canvas coordinates for a given pin, accounting for component rotation.
*/
function getRotatedPinConfig(comp, pinName) {
	const dims = COMPONENT_DIMENSIONS[normalizeType(comp.type)] || {
		width: 80,
		height: 50
	};
	const pin = getPinConfig(comp.type, pinName);
	const rotation = comp.rotation || 0;
	if (rotation === 0) return {
		x: comp.x + pin.x,
		y: comp.y + pin.y,
		direction: pin.direction
	};
	const cx = dims.width / 2;
	const cy = dims.height / 2;
	const rotatedLocal = rotatePoint(pin.x, pin.y, cx, cy, rotation);
	const rotatedDir = rotateDirection(pin.direction, rotation);
	return {
		x: comp.x + rotatedLocal.x,
		y: comp.y + rotatedLocal.y,
		direction: rotatedDir
	};
}
/**
* Computes an orthogonal Manhattan path from (x1, y1) to (x2, y2) snapping all bends to a 20px grid.
*/
function routeWire(x1, y1, dir1, x2, y2, dir2, gridSize = 20) {
	const exitOffset = gridSize;
	const sx = snapToGrid(x1, gridSize);
	const sy = snapToGrid(y1, gridSize);
	const ex = snapToGrid(x2, gridSize);
	const ey = snapToGrid(y2, gridSize);
	let exx1 = sx;
	let eyy1 = sy;
	if (dir1 === "left") exx1 -= exitOffset;
	else if (dir1 === "right") exx1 += exitOffset;
	else if (dir1 === "top") eyy1 -= exitOffset;
	else if (dir1 === "bottom") eyy1 += exitOffset;
	let exx2 = ex;
	let eyy2 = ey;
	if (dir2 === "left") exx2 -= exitOffset;
	else if (dir2 === "right") exx2 += exitOffset;
	else if (dir2 === "top") eyy2 -= exitOffset;
	else if (dir2 === "bottom") eyy2 += exitOffset;
	exx1 = snapToGrid(exx1, gridSize);
	eyy1 = snapToGrid(eyy1, gridSize);
	exx2 = snapToGrid(exx2, gridSize);
	eyy2 = snapToGrid(eyy2, gridSize);
	const points = [{
		x: sx,
		y: sy
	}, {
		x: exx1,
		y: eyy1
	}];
	const isHoriz1 = dir1 === "left" || dir1 === "right";
	const isHoriz2 = dir2 === "left" || dir2 === "right";
	if (isHoriz1 && isHoriz2) {
		const midX = snapToGrid((exx1 + exx2) / 2, gridSize);
		points.push({
			x: midX,
			y: eyy1
		});
		points.push({
			x: midX,
			y: eyy2
		});
	} else if (!isHoriz1 && !isHoriz2) {
		const midY = snapToGrid((eyy1 + eyy2) / 2, gridSize);
		points.push({
			x: exx1,
			y: midY
		});
		points.push({
			x: exx2,
			y: midY
		});
	} else if (isHoriz1) points.push({
		x: exx2,
		y: eyy1
	});
	else points.push({
		x: exx1,
		y: eyy2
	});
	points.push({
		x: exx2,
		y: eyy2
	});
	points.push({
		x: ex,
		y: ey
	});
	const optimized = [points[0]];
	for (let i = 1; i < points.length - 1; i++) {
		const prev = optimized[optimized.length - 1];
		const curr = points[i];
		const next = points[i + 1];
		const isCollinearX = prev.x === curr.x && curr.x === next.x;
		const isCollinearY = prev.y === curr.y && curr.y === next.y;
		if (!isCollinearX && !isCollinearY) optimized.push(curr);
	}
	optimized.push(points[points.length - 1]);
	return optimized;
}
/**
* Serializes a set of routed points into an SVG path string
*/
function serializePath(points) {
	return points.map((p, idx) => `${idx === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
}
/**
* Calculates junction points where 3 or more wires meet
*/
function findJunctionPoints(allPaths) {
	const coordCounts = {};
	allPaths.forEach((path) => {
		path.forEach((p) => {
			const key = `${p.x},${p.y}`;
			if (!coordCounts[key]) coordCounts[key] = {
				count: 0,
				x: p.x,
				y: p.y
			};
			coordCounts[key].count++;
		});
	});
	return Object.values(coordCounts).filter((entry) => entry.count >= 3).map((entry) => ({
		x: entry.x,
		y: entry.y
	}));
}
var WireRenderer = import_react.memo(({ connection, components, hovered, selected, onHover, animate = true }) => {
	const [fromId, fromPin] = connection.from.split(":");
	const [toId, toPin] = connection.to.split(":");
	const compFrom = components.find((c) => c.id === fromId);
	const compTo = components.find((c) => c.id === toId);
	if (!compFrom || !compTo) return null;
	const pinFrom = getRotatedPinConfig(compFrom, fromPin);
	const pinTo = getRotatedPinConfig(compTo, toPin);
	const pathStr = serializePath(routeWire(pinFrom.x, pinFrom.y, pinFrom.direction, pinTo.x, pinTo.y, pinTo.direction));
	const isVcc = fromPin.toUpperCase().includes("VCC") || fromPin.includes("5V") || fromPin.includes("3.3V") || toPin.toUpperCase().includes("VCC") || toPin.includes("5V") || toPin.includes("3.3V");
	const isGnd = fromPin.toUpperCase().includes("GND") || toPin.toUpperCase().includes("GND");
	let wireColor = "stroke-muted-foreground/60 dark:stroke-muted-foreground/45";
	if (isVcc) wireColor = "stroke-red-500/80 dark:stroke-red-500/60";
	else if (isGnd) wireColor = "stroke-blue-500/80 dark:stroke-blue-500/60";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		onMouseEnter: () => onHover?.(true),
		onMouseLeave: () => onHover?.(false),
		className: "group transition-all",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: pathStr,
				className: "fill-none stroke-transparent stroke-[12] cursor-pointer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: pathStr,
				className: `fill-none stroke-[5] opacity-0 transition-opacity duration-200 group-hover:opacity-40 ${selected ? "opacity-60 stroke-brand" : "stroke-brand/60"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: pathStr,
				className: `fill-none stroke-[2] transition-colors duration-150 ${selected ? "stroke-brand" : hovered ? "stroke-brand/70" : wireColor}`
			}),
			animate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: pathStr,
				className: `fill-none stroke-[1.5] stroke-dasharray stroke-white/50 opacity-0 group-hover:opacity-100 ${selected ? "opacity-100" : ""}`,
				strokeDasharray: "6,12",
				style: { animation: "current-flow 1.5s linear infinite" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: pinFrom.x,
				cy: pinFrom.y,
				r: "3",
				className: `transition-colors duration-150 ${selected || hovered ? "fill-brand" : "fill-card stroke-muted-foreground stroke-1"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: pinTo.x,
				cy: pinTo.y,
				r: "3",
				className: `transition-colors duration-150 ${selected || hovered ? "fill-brand" : "fill-card stroke-muted-foreground stroke-1"}`
			})
		]
	});
});
WireRenderer.displayName = "WireRenderer";
var ConnectionRenderer = ({ connections, components }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		className: "pointer-events-none select-none",
		children: (0, import_react.useMemo)(() => {
			if (!connections || !components) return [];
			const allPaths = [];
			connections.forEach((conn) => {
				const [fromId, fromPin] = conn.from.split(":");
				const [toId, toPin] = conn.to.split(":");
				const compFrom = components.find((c) => c.id === fromId);
				const compTo = components.find((c) => c.id === toId);
				if (compFrom && compTo) {
					const pinFrom = getRotatedPinConfig(compFrom, fromPin);
					const pinTo = getRotatedPinConfig(compTo, toPin);
					const pathPoints = routeWire(pinFrom.x, pinFrom.y, pinFrom.direction, pinTo.x, pinTo.y, pinTo.direction);
					allPaths.push(pathPoints);
				}
			});
			return findJunctionPoints(allPaths);
		}, [connections, components]).map((j, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: j.x,
			cy: j.y,
			r: "4",
			className: "fill-foreground stroke-background stroke-1 shadow-md"
		}, `junc-${j.x}-${j.y}-${idx}`))
	});
};
var LabelRenderer = ({ components }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		className: "pointer-events-none select-none",
		children: components.map((c) => {
			const dims = COMPONENT_DIMENSIONS[normalizeType(c.type)] || {
				width: 80,
				height: 50
			};
			const lx = c.x + dims.width / 2;
			const ly = c.y - 12;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: lx,
				y: ly,
				textAnchor: "middle",
				className: "font-mono text-[10px] font-bold fill-brand dark:fill-brand/90",
				children: c.id
			}), c.value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: lx,
				y: ly - 10,
				textAnchor: "middle",
				className: "font-sans text-[8px] fill-muted-foreground",
				children: c.value
			})] }, `lbl-${c.id}`);
		})
	});
};
function useKeyboardShortcuts() {
	const { undo, redo, copySelected, pasteCopied, deleteSelected, selectAll } = useEditor();
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			const activeTag = document.activeElement?.tagName.toLowerCase();
			if (activeTag === "input" || activeTag === "textarea") return;
			const cmdOrCtrl = navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? e.metaKey : e.ctrlKey;
			if (cmdOrCtrl && e.key.toLowerCase() === "z") {
				e.preventDefault();
				if (e.shiftKey) redo();
				else undo();
			} else if (cmdOrCtrl && e.key.toLowerCase() === "y") {
				e.preventDefault();
				redo();
			} else if (cmdOrCtrl && e.key.toLowerCase() === "c") {
				e.preventDefault();
				copySelected();
			} else if (cmdOrCtrl && e.key.toLowerCase() === "v") {
				e.preventDefault();
				pasteCopied();
			} else if (cmdOrCtrl && e.key.toLowerCase() === "a") {
				e.preventDefault();
				selectAll();
			} else if (e.key === "Delete" || e.key === "Backspace") {
				e.preventDefault();
				deleteSelected();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		undo,
		redo,
		copySelected,
		pasteCopied,
		deleteSelected,
		selectAll
	]);
}
var Minimap = () => {
	const { components, pan, setPan, zoom } = useEditor();
	const containerRef = (0, import_react.useRef)(null);
	const mapWidth = 140;
	const mapHeight = 90;
	const virtualWidth = 1e3;
	const virtualHeight = 700;
	const scaleX = mapWidth / virtualWidth;
	const scaleY = mapHeight / virtualHeight;
	const [svgSize, setSvgSize] = (0, import_react.useState)({
		w: 800,
		h: 500
	});
	(0, import_react.useEffect)(() => {
		const updateSize = () => {
			const svg = document.getElementById("schematic-svg");
			if (svg) setSvgSize({
				w: svg.clientWidth || 800,
				h: svg.clientHeight || 500
			});
		};
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	const viewportX = -pan.x / zoom;
	const viewportY = -pan.y / zoom;
	const viewportW = svgSize.w / zoom;
	const viewportH = svgSize.h / zoom;
	const handleMapClick = (e) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const clickY = e.clientY - rect.top;
		const targetVirtualX = clickX / scaleX;
		const targetVirtualY = clickY / scaleY;
		setPan({
			x: svgSize.w / 2 - targetVirtualX * zoom,
			y: svgSize.h / 2 - targetVirtualY * zoom
		});
	};
	const handleDrag = (e) => {
		if (e.buttons !== 1) return;
		handleMapClick(e);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		onMouseDown: handleMapClick,
		onMouseMove: handleDrag,
		className: "absolute bottom-4 right-4 z-10 w-[140px] h-[90px] rounded-lg border border-border/80 bg-background/95 shadow-lg select-none cursor-crosshair overflow-hidden backdrop-blur-md transition-opacity hover:opacity-100 opacity-90",
		title: "Click or drag to navigate workspace",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: mapWidth,
			height: mapHeight,
			className: "bg-muted/10",
			children: [components.map((c) => {
				const dims = COMPONENT_DIMENSIONS[normalizeType(c.type)] || {
					width: 80,
					height: 50
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: c.x * scaleX,
					y: c.y * scaleY,
					width: dims.width * scaleX,
					height: dims.height * scaleY,
					className: "fill-muted-foreground/30 stroke-none",
					rx: "1.5"
				}, `mini-${c.id}`);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: Math.max(0, viewportX * scaleX),
				y: Math.max(0, viewportY * scaleY),
				width: Math.min(mapWidth, viewportW * scaleX),
				height: Math.min(mapHeight, viewportH * scaleY),
				fill: "none",
				className: "stroke-brand/70 stroke-[1.5]",
				rx: "1"
			})]
		})
	});
};
var Canvas = () => {
	useKeyboardShortcuts();
	const { components, connections, pan, setPan, zoom, setZoom, toolMode, setToolMode, selectedCompIds, setSelectedCompIds, selectedWireIndex, setSelectedWireIndex, showGrid, showLabels, searchQuery, hoveredCompId, setHoveredCompId, hoveredWireIndex, setHoveredWireIndex, updateComponentPosition, saveHistoryState } = useEditor();
	const svgRef = (0, import_react.useRef)(null);
	const [isPanning, setIsPanning] = (0, import_react.useState)(false);
	const [isSpacePressed, setIsSpacePressed] = (0, import_react.useState)(false);
	const dragStart = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const panStart = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const [activeDragId, setActiveDragId] = (0, import_react.useState)(null);
	const dragComponentStart = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const [selectionBox, setSelectionBox] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === " " && document.activeElement?.tagName.toLowerCase() !== "input") {
				e.preventDefault();
				setIsSpacePressed(true);
			}
		};
		const handleKeyUp = (e) => {
			if (e.key === " ") setIsSpacePressed(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	const getCoordinatesFromEvent = (clientX, clientY) => {
		if (!svgRef.current) return {
			x: 0,
			y: 0
		};
		const rect = svgRef.current.getBoundingClientRect();
		return {
			x: (clientX - rect.left - pan.x) / zoom,
			y: (clientY - rect.top - pan.y) / zoom
		};
	};
	const handleMouseDown = (e) => {
		if (!svgRef.current) return;
		if (e.button === 1 || isSpacePressed || toolMode === "pan") {
			setIsPanning(true);
			dragStart.current = {
				x: e.clientX,
				y: e.clientY
			};
			panStart.current = { ...pan };
			e.preventDefault();
			return;
		}
		if (e.button === 0) {
			const clickCoords = getCoordinatesFromEvent(e.clientX, e.clientY);
			const target = e.target;
			if (target.tagName === "svg" || target.id === "grid-rect") {
				if (!e.shiftKey) {
					setSelectedCompIds(/* @__PURE__ */ new Set());
					setSelectedWireIndex(null);
				}
				setSelectionBox({
					startX: clickCoords.x,
					startY: clickCoords.y,
					currentX: clickCoords.x,
					currentY: clickCoords.y
				});
			}
		}
	};
	const handleMouseMove = (e) => {
		if (isPanning) {
			const dx = e.clientX - dragStart.current.x;
			const dy = e.clientY - dragStart.current.y;
			setPan({
				x: panStart.current.x + dx,
				y: panStart.current.y + dy
			});
			return;
		}
		const currentCoords = getCoordinatesFromEvent(e.clientX, e.clientY);
		if (activeDragId) {
			const dx = currentCoords.x - dragComponentStart.current.x;
			const dy = currentCoords.y - dragComponentStart.current.y;
			const targetX = snapToGrid(dragComponentStart.current.x + dx, 20);
			const targetY = snapToGrid(dragComponentStart.current.y + dy, 20);
			updateComponentPosition(activeDragId, targetX, targetY);
			return;
		}
		if (selectionBox) setSelectionBox((prev) => prev ? {
			...prev,
			currentX: currentCoords.x,
			currentY: currentCoords.y
		} : null);
	};
	const handleMouseUp = (e) => {
		setIsPanning(false);
		setActiveDragId(null);
		if (selectionBox) {
			const x1 = Math.min(selectionBox.startX, selectionBox.currentX);
			const x2 = Math.max(selectionBox.startX, selectionBox.currentX);
			const y1 = Math.min(selectionBox.startY, selectionBox.currentY);
			const y2 = Math.max(selectionBox.startY, selectionBox.currentY);
			const newlySelected = new Set(e.shiftKey ? [...selectedCompIds] : []);
			components.forEach((c) => {
				const dims = COMPONENT_DIMENSIONS[normalizeType(c.type)] || {
					width: 80,
					height: 50
				};
				const cx1 = c.x;
				const cx2 = c.x + dims.width;
				const cy1 = c.y;
				const cy2 = c.y + dims.height;
				if (cx1 < x2 && cx2 > x1 && cy1 < y2 && cy2 > y1) if (e.shiftKey && selectedCompIds.has(c.id)) newlySelected.delete(c.id);
				else newlySelected.add(c.id);
			});
			setSelectedCompIds(newlySelected);
			setSelectionBox(null);
		}
	};
	const handleComponentMouseDown = (e, cId, cx, cy) => {
		e.stopPropagation();
		if (isSpacePressed || toolMode === "pan") return;
		saveHistoryState();
		setActiveDragId(cId);
		getCoordinatesFromEvent(e.clientX, e.clientY);
		dragComponentStart.current = {
			x: cx,
			y: cy
		};
		if (e.shiftKey) {
			const copy = new Set(selectedCompIds);
			if (copy.has(cId)) copy.delete(cId);
			else copy.add(cId);
			setSelectedCompIds(copy);
		} else setSelectedCompIds(/* @__PURE__ */ new Set([cId]));
		setSelectedWireIndex(null);
	};
	const handleWireClick = (e, idx) => {
		e.stopPropagation();
		if (isSpacePressed || toolMode === "pan") return;
		setSelectedWireIndex(idx);
		setSelectedCompIds(/* @__PURE__ */ new Set());
	};
	const handleWheel = (e) => {
		e.preventDefault();
		const zoomFactor = 1.1;
		const nextZoom = e.deltaY < 0 ? zoom * zoomFactor : zoom / zoomFactor;
		const boundedZoom = Math.max(.2, Math.min(4, nextZoom));
		if (svgRef.current) {
			const rect = svgRef.current.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;
			const svgX = (mouseX - pan.x) / zoom;
			const svgY = (mouseY - pan.y) / zoom;
			setPan({
				x: mouseX - svgX * boundedZoom,
				y: mouseY - svgY * boundedZoom
			});
			setZoom(boundedZoom);
		}
	};
	const isSearchMatching = (c) => {
		if (!searchQuery) return false;
		const query = searchQuery.toLowerCase();
		return c.id.toLowerCase().includes(query) || c.type.toLowerCase().includes(query);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex-1 bg-slate-900/5 dark:bg-slate-950/15 overflow-hidden ${isSpacePressed || toolMode === "pan" ? "cursor-grab active:cursor-grabbing" : "cursor-default"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			ref: svgRef,
			id: "schematic-svg",
			className: "w-full h-full",
			onMouseDown: handleMouseDown,
			onMouseMove: handleMouseMove,
			onMouseUp: handleMouseUp,
			onWheel: handleWheel,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [showGrid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
					id: "canvas-grid",
					width: "20",
					height: "20",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 20 0 L 0 0 0 20",
						fill: "none",
						className: "stroke-muted-foreground/5 dark:stroke-muted-foreground/[0.04]",
						strokeWidth: "1"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
              @keyframes electricity-flow {
                to {
                  stroke-dashoffset: -20;
                }
              }
            ` })] }),
				showGrid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					id: "grid-rect",
					width: "100%",
					height: "100%",
					fill: "url(#canvas-grid)",
					className: "pointer-events-all"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: `translate(${pan.x}, ${pan.y}) scale(${zoom})`,
					children: [
						connections.map((conn, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
							onClick: (e) => handleWireClick(e, idx),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireRenderer, {
								connection: conn,
								components,
								hovered: hoveredWireIndex === idx,
								selected: selectedWireIndex === idx,
								onHover: (h) => setHoveredWireIndex(h ? idx : null)
							})
						}, `wire-${conn.from}-${conn.to}-${idx}`)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectionRenderer, {
							connections,
							components
						}),
						components.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
							onMouseDown: (e) => handleComponentMouseDown(e, c.id, c.x, c.y),
							className: "cursor-move",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentRenderer, {
								component: c,
								selected: selectedCompIds.has(c.id),
								hovered: hoveredCompId === c.id,
								highlighted: isSearchMatching(c),
								onSelect: () => {},
								onHover: (h) => setHoveredCompId(h ? c.id : null)
							})
						}, c.id)),
						showLabels && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelRenderer, { components }),
						selectionBox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: Math.min(selectionBox.startX, selectionBox.currentX),
							y: Math.min(selectionBox.startY, selectionBox.currentY),
							width: Math.abs(selectionBox.currentX - selectionBox.startX),
							height: Math.abs(selectionBox.currentY - selectionBox.startY),
							fill: "rgba(147, 51, 234, 0.08)",
							className: "stroke-brand stroke-1 stroke-dash",
							strokeDasharray: "4,4"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimap, {})]
	});
};
var Sidebar = () => {
	const { components, connections, selectedCompIds, setSelectedCompIds, selectedWireIndex, setSelectedWireIndex, rotateComponent } = useEditor();
	const handleClose = () => {
		setSelectedCompIds(/* @__PURE__ */ new Set());
		setSelectedWireIndex(null);
	};
	const getSingleSelectedComponent = () => {
		if (selectedCompIds.size !== 1) return null;
		const id = Array.from(selectedCompIds)[0];
		return components.find((c) => c.id === id) || null;
	};
	const selectedComp = getSingleSelectedComponent();
	const getConnectedNodes = (cId) => {
		const list = [];
		connections.forEach((conn) => {
			const [fromId, fromPin] = conn.from.split(":");
			const [toId, toPin] = conn.to.split(":");
			if (fromId === cId) list.push({
				pin: fromPin,
				device: toId,
				devicePin: toPin
			});
			else if (toId === cId) list.push({
				pin: toPin,
				device: fromId,
				devicePin: fromPin
			});
		});
		return list;
	};
	const getComponentSpecs = (type) => {
		const norm = normalizeType(type).toLowerCase();
		if (norm.includes("arduino")) return {
			desc: "Arduino microcontroller board based on ATmega328P. Runs firmware, handles ADC inputs and digital outputs.",
			pins: "14 Digital I/O, 6 Analog Input Pins",
			voltage: "5V Operating Voltage (USB / VIN)",
			current: "20mA max per I/O pin",
			datasheet: "https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf"
		};
		if (norm.includes("esp32")) return {
			desc: "ESP32 high-performance Wi-Fi + Bluetooth + BLE microcontroller module. Excellent for IoT applications.",
			pins: "36 GPIOs with multiple ADC, DAC, and PWM functions",
			voltage: "3.3V Operating Voltage",
			current: "Average 80mA (peaks up to 240mA during Wi-Fi transmission)",
			datasheet: "https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf"
		};
		if (norm.includes("led")) return {
			desc: "Semiconductor light source. Emits light when electric current flows through it in the forward direction.",
			pins: "Anode (+), Cathode (-)",
			voltage: "Forward voltage range: 1.8V - 3.2V depending on color",
			current: "Typical operating current: 20mA",
			datasheet: "https://en.wikipedia.org/wiki/Light-emitting_diode"
		};
		if (norm.includes("resistor")) return {
			desc: "Passive two-terminal electrical component that implements electrical resistance as a circuit element.",
			pins: "Left Terminal, Right Terminal",
			voltage: "Limits voltage based on Ohm's Law (V = I * R)",
			current: "Dissipates power as heat (Rating: 0.25W)",
			datasheet: "https://en.wikipedia.org/wiki/Resistor"
		};
		if (norm.includes("capacitor")) return {
			desc: "Passive component that stores electrical energy in an electric field. Blocks DC and filters AC signals.",
			pins: "Positive, Negative (if electrolytic)",
			voltage: "Filters ripple on power rails",
			current: "Transient current filtering",
			datasheet: "https://en.wikipedia.org/wiki/Capacitor"
		};
		if (norm.includes("motor") || norm.includes("servo")) return {
			desc: "Electromechanical actuator. Converts electrical energy into kinetic mechanical rotation.",
			pins: "VCC, GND, Signal/Control wire",
			voltage: "5V - 12V operating range",
			current: "Draws high peak currents (up to 500mA - 1A under load)",
			datasheet: "https://en.wikipedia.org/wiki/Electric_motor"
		};
		return {
			desc: `Discrete engineering symbol (${type}) mapped to grid schematic trace connections.`,
			pins: "Multi-pin interface",
			voltage: "Low-voltage signal compatible",
			current: "Standard operational current",
			datasheet: `https://www.google.com/search?q=${type}+datasheet`
		};
	};
	const getSelectedWireDetails = () => {
		if (selectedWireIndex === null) return null;
		const conn = connections[selectedWireIndex];
		if (!conn) return null;
		const [fromId, fromPin] = conn.from.split(":");
		const [toId, toPin] = conn.to.split(":");
		const fromComp = components.find((c) => c.id === fromId);
		const toComp = components.find((c) => c.id === toId);
		let length = 0;
		if (fromComp && toComp) {
			const fromPinCfg = getPinConfig(fromComp.type, fromPin);
			const toPinCfg = getPinConfig(toComp.type, toPin);
			const rotatePoint = (pt, rotation, width, height) => {
				const rad = rotation * Math.PI / 180;
				const cx = width / 2;
				const cy = height / 2;
				const x = pt.x - cx;
				const y = pt.y - cy;
				return {
					x: Math.round(cx + x * Math.cos(rad) - y * Math.sin(rad)),
					y: Math.round(cy + x * Math.sin(rad) + y * Math.cos(rad))
				};
			};
			const dimsFrom = COMPONENT_DIMENSIONS[normalizeType(fromComp.type)] || {
				width: 80,
				height: 50
			};
			const absFromPin = rotatePoint(fromPinCfg, fromComp.rotation || 0, dimsFrom.width, dimsFrom.height);
			const startPt = {
				x: fromComp.x + absFromPin.x,
				y: fromComp.y + absFromPin.y
			};
			const dimsTo = COMPONENT_DIMENSIONS[normalizeType(toComp.type)] || {
				width: 80,
				height: 50
			};
			const absToPin = rotatePoint(toPinCfg, toComp.rotation || 0, dimsTo.width, dimsTo.height);
			const endPt = {
				x: toComp.x + absToPin.x,
				y: toComp.y + absToPin.y
			};
			const path = routeWire(startPt.x, startPt.y, fromPinCfg.direction, endPt.x, endPt.y, toPinCfg.direction);
			for (let i = 0; i < path.length - 1; i++) length += Math.abs(path[i + 1].x - path[i].x) + Math.abs(path[i + 1].y - path[i].y);
		}
		const pinLower = fromPin.toLowerCase();
		let wireColor = "#10b981";
		let voltageType = "GPIO / Signal";
		if (pinLower.includes("gnd") || pinLower.includes("ground")) {
			wireColor = "#64748b";
			voltageType = "Ground (0V Reference)";
		} else if (pinLower.includes("5v") || pinLower.includes("vcc")) {
			wireColor = "#ef4444";
			voltageType = "DC Power (5V Rail)";
		} else if (pinLower.includes("3v") || pinLower.includes("3.3v")) {
			wireColor = "#f59e0b";
			voltageType = "DC Power (3.3V Rail)";
		} else if (pinLower.includes("analog") || pinLower.startsWith("a")) voltageType = "Analog Input (ADC)";
		else if (pinLower.includes("pwm")) voltageType = "Pulse Width Modulation (PWM)";
		return {
			signalName: `NET_${fromId}_${fromPin}_TO_${toId}_${toPin}`.toUpperCase(),
			source: conn.from,
			destination: conn.to,
			length: `${length}px`,
			color: wireColor,
			voltageType
		};
	};
	const selectedWire = getSelectedWireDetails();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-80 border-l border-border/40 bg-background/55 backdrop-blur-md flex flex-col h-full overflow-hidden transition-all duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border/40 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-semibold text-foreground flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-brand" }), " Inspector Panel"]
			}), (selectedComp || selectedWire) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleClose,
				className: "rounded-md p-1 hover:bg-secondary/60 text-muted-foreground hover:text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs",
			children: selectedComp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider",
							children: "Device Reference"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-base font-bold text-foreground mt-0.5",
							children: selectedComp.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded bg-secondary/80 px-2 py-0.5 font-sans text-[10px] text-foreground font-semibold mt-1 capitalize",
							children: selectedComp.type
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider",
						children: "Specs & Properties"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "w-full mt-1 border-collapse text-[11px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1 text-muted-foreground",
									children: "Voltage"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1 font-mono font-semibold text-foreground text-right",
									children: getComponentSpecs(selectedComp.type).voltage
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1 text-muted-foreground",
									children: "Current"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1 font-mono font-semibold text-foreground text-right",
									children: getComponentSpecs(selectedComp.type).current
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1 text-muted-foreground",
									children: "Interface"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1 font-mono font-semibold text-foreground text-right",
									children: getComponentSpecs(selectedComp.type).pins
								})]
							}),
							selectedComp.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1 text-muted-foreground",
									children: "Value"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1 font-mono font-semibold text-brand text-right",
									children: selectedComp.value
								})]
							})
						] })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider font-sans",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1 leading-relaxed text-[11px]",
						children: getComponentSpecs(selectedComp.type).desc
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider",
						children: "Pin Mapping"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 flex flex-wrap gap-1",
						children: Object.keys(getPinConfig(selectedComp.type, "") || {}).map((pinName) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded bg-muted px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground",
								children: [
									pinName,
									" (",
									getPinConfig(selectedComp.type, pinName).direction,
									")"
								]
							}, pinName);
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider font-sans",
						children: "Connected Nets"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 space-y-1",
						children: getConnectedNodes(selectedComp.id).length > 0 ? getConnectedNodes(selectedComp.id).map((conn, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between rounded bg-muted/40 px-2 py-1 font-mono text-[9px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Pin ", conn.pin] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "➜" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									conn.device,
									":",
									conn.devicePin
								] })
							]
						}, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground/60 italic",
							children: "No connections established."
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 pt-2 border-t border-border/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground uppercase",
							children: "Orientation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 mt-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-foreground",
								children: [selectedComp.rotation || 0, "°"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => rotateComponent(selectedComp.id),
								className: "rounded border border-border px-1.5 py-0.5 text-[9px] hover:bg-accent text-brand font-medium active:scale-95 transition",
								children: "Rotate"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground uppercase",
							children: "Coordinates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-foreground mt-0.5",
							children: [
								"X: ",
								selectedComp.x,
								" Y: ",
								selectedComp.y
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: getComponentSpecs(selectedComp.type).datasheet,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border/80 bg-background py-2 hover:bg-accent font-medium text-foreground transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { className: "size-3" }), " External Datasheet"]
					})
				]
			}) : selectedWire ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider",
						children: "Signal Net ID"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[11px] font-bold text-foreground mt-0.5 break-all leading-normal bg-muted/45 p-2 rounded-lg border border-border/30",
						children: selectedWire.signalName
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider",
						children: "Properties"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "w-full mt-1.5 border-collapse text-[11px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 text-muted-foreground",
									children: "Source Node"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 font-mono font-semibold text-foreground text-right",
									children: selectedWire.source
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 text-muted-foreground",
									children: "Dest Node"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 font-mono font-semibold text-foreground text-right",
									children: selectedWire.destination
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 text-muted-foreground",
									children: "Manhattan Length"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 font-mono font-semibold text-foreground text-right",
									children: selectedWire.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 text-muted-foreground",
									children: "Signal Color"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "py-1.5 text-right flex items-center justify-end gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2.5 rounded-full inline-block",
										style: { backgroundColor: selectedWire.color }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-semibold text-foreground",
										children: selectedWire.color
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/20 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 text-muted-foreground",
									children: "Voltage Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5 font-mono font-semibold text-brand text-right",
									children: selectedWire.voltageType
								})]
							})
						] })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider",
						children: "Signal Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-1.5 leading-relaxed",
						children: [
							"This net establishes a direct low-impedance electrical route snapped to the 20px Manhattan grid to connect pin ",
							selectedWire.source.split(":")[1],
							" of ",
							selectedWire.source.split(":")[0],
							" directly to pin ",
							selectedWire.destination.split(":")[1],
							" of ",
							selectedWire.destination.split(":")[0],
							"."
						]
					})] })
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-full flex flex-col items-center justify-center text-center p-6 text-muted-foreground space-y-2 mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-8 text-muted-foreground/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: "No Item Selected"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px]",
						children: "Click on any circuit component symbol or connection trace wire inside the workspace to inspect its electronic specs, connected nets, and datasheets."
					})
				]
			})
		})]
	});
};
var CircuitRenderer = ({ data }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorProvider, {
		initialData: data,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-[620px] w-full flex-col overflow-hidden rounded-xl border border-border bg-slate-950/20 dark:bg-slate-900/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 overflow-hidden h-[calc(100%-45px)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {})]
			})]
		})
	});
};
/**
* Normalizes and cleans AI JSON before parsing (strips comments and trailing commas)
*/
function cleanJsonString(str) {
	return str.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "").replace(/,\s*([\]}])/g, "$1").trim();
}
/**
* Extracts sections based on markdown headers
*/
function parseMarkdownSections(markdown) {
	const sections = {
		overview: "",
		components: "",
		wiring: "",
		code: "",
		explanation: "",
		troubleshooting: "",
		circuitJson: null
	};
	if (!markdown) return sections;
	const headingRegex = /^(?:##?|###?)\s+(.+)$/gm;
	const parts = [];
	let match;
	while ((match = headingRegex.exec(markdown)) !== null) {
		const title = match[1].toLowerCase().trim();
		const startIndex = match.index + match[0].length;
		parts.push({
			title,
			startIndex,
			endIndex: -1
		});
	}
	for (let i = 0; i < parts.length; i++) parts[i].endIndex = i < parts.length - 1 ? parts[i + 1].startIndex - (markdown.substring(parts[i + 1].startIndex - 10, parts[i + 1].startIndex).match(/^(?:##?|###?)\s+/gm) ? 12 : 5) : markdown.length;
	parts.forEach((p) => {
		const rawContent = markdown.substring(p.startIndex, p.endIndex).trim();
		if (p.title.includes("overview") || p.title.includes("introduction")) sections.overview += rawContent + "\n\n";
		else if (p.title.includes("component") || p.title.includes("parts")) sections.components += rawContent + "\n\n";
		else if (p.title.includes("wiring") || p.title.includes("connection")) sections.wiring += rawContent + "\n\n";
		else if (p.title.includes("code") || p.title.includes("program") || p.title.includes("sketch") || p.title.includes("arduino")) sections.code += rawContent + "\n\n";
		else if (p.title.includes("explanation") || p.title.includes("how it works")) sections.explanation += rawContent + "\n\n";
		else if (p.title.includes("troubleshoot") || p.title.includes("testing") || p.title.includes("debug")) sections.troubleshooting += rawContent + "\n\n";
		else if (p.title.includes("json") || p.title.includes("schematic data")) try {
			const jsonMatch = rawContent.match(/```json\s*([\s\S]*?)```/);
			const cleaned = cleanJsonString(jsonMatch ? jsonMatch[1] : rawContent);
			sections.circuitJson = JSON.parse(cleaned);
		} catch (err) {
			console.error("Failed to parse circuitJson section:", err);
		}
	});
	if (!sections.circuitJson) try {
		const globalJsonMatch = markdown.match(/```json\s*([\s\S]*?)```/);
		if (globalJsonMatch) {
			const cleaned = cleanJsonString(globalJsonMatch[1]);
			const parsed = JSON.parse(cleaned);
			if (parsed && Array.isArray(parsed.components)) sections.circuitJson = parsed;
		}
	} catch (err) {
		console.warn("Global markdown JSON search failed to parse:", err);
	}
	sections.overview = sections.overview.trim();
	sections.components = sections.components.trim();
	sections.wiring = sections.wiring.trim();
	sections.code = sections.code.trim();
	sections.explanation = sections.explanation.trim();
	sections.troubleshooting = sections.troubleshooting.trim();
	if (!sections.overview && !sections.components && !sections.wiring) sections.overview = markdown;
	return sections;
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
//#endregion
export { TabsTrigger as a, TabsList as i, Tabs as n, parseMarkdownSections as o, TabsContent as r, CircuitRenderer as t };
