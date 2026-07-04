import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { P as Layers, Y as Cloud, Z as CircuitBoard, _ as Search, f as Sprout, o as Wifi, ot as ArrowRight, p as Sparkles, q as Cpu, r as Zap, rt as BatteryCharging, tt as Bot, v as Save, w as Plane, x as Radio } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-CEdspemH.js
var import_jsx_runtime = require_jsx_runtime();
var QUICK = [
	{
		title: "Line Follower",
		icon: CircuitBoard,
		id: "line-follower"
	},
	{
		title: "Obstacle Robot",
		icon: Radio,
		id: "obstacle-bot"
	},
	{
		title: "Bluetooth Car",
		icon: Zap,
		id: "bt-car"
	},
	{
		title: "ESP32 Home",
		icon: Wifi,
		id: "esp32-home"
	},
	{
		title: "Smart Irrigation",
		icon: Sprout,
		id: "irrigation"
	},
	{
		title: "Drone",
		icon: Plane,
		id: "drone"
	},
	{
		title: "Power Supply",
		icon: BatteryCharging,
		id: "power-supply"
	},
	{
		title: "IoT Weather",
		icon: Cloud,
		id: "weather"
	}
];
var STATS = [
	{
		label: "Projects created",
		value: "12",
		icon: Save
	},
	{
		label: "Components used",
		value: "38",
		icon: Layers
	},
	{
		label: "AI requests",
		value: "127",
		icon: Bot
	},
	{
		label: "Saved circuits",
		value: "7",
		icon: Sparkles
	}
];
function DashboardHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl p-6 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-4 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-brand",
					children: "Dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-3xl font-semibold tracking-tight md:text-4xl",
					children: "Welcome back — what are we building today?"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard/chat",
					className: "inline-flex items-center gap-2 self-start rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-medium text-white glow-brand hover:brightness-110 transition md:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " New AI project"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass flex items-center gap-3 rounded-2xl p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-2 size-4 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground",
							placeholder: "Search projects, components, templates…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground md:block",
							children: "⌘ K"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-4",
				children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: i * .05 },
					className: "glass rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4" }), s.label]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-2xl font-semibold",
						children: s.value
					})]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "Quick start"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard/templates",
						className: "text-sm text-muted-foreground hover:text-foreground",
						children: ["All templates ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "inline size-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
					children: QUICK.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard/templates/$id",
						params: { id: q.id },
						className: "glass group rounded-2xl p-4 hover:border-brand/50 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-brand text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: q.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Open template"
							})
						]
					}, q.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass flex flex-col items-start justify-between gap-4 rounded-2xl p-6 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-12 place-items-center rounded-xl bg-gradient-brand text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: "Try the Optimizer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: "Paste your BOM — CircuitMind finds cheaper, cooler, simpler parts."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard/optimizer",
						className: "inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white",
						children: ["Optimize a circuit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})
			})
		]
	});
}
//#endregion
export { DashboardHome as component };
