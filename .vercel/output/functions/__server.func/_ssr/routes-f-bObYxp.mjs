import { o as __toESM } from "../_runtime.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as BrandMark } from "./brand-mark-DxT1qhK6.mjs";
import { $ as Check, B as Github, D as Moon, O as MessageSquareCode, P as Layers, V as FileText, Z as CircuitBoard, _ as Search, a as Wrench, d as Sun, et as Cable, l as Twitter, m as ShieldCheck, ot as ArrowRight, p as Sparkles, q as Cpu, r as Zap, tt as Bot } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-f-bObYxp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_circuit_default = "/assets/hero-circuit-CeOjgj2h.jpg";
function Landing() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const isLight = document.documentElement.classList.contains("light");
		setTheme(isLight ? "light" : "dark");
	}, []);
	const toggleTheme = () => {
		if (theme === "dark") {
			document.documentElement.classList.add("light");
			localStorage.setItem("theme", "light");
			setTheme("light");
		} else {
			document.documentElement.classList.remove("light");
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
				theme,
				toggleTheme
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogosStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowcaseChat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Templates, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav({ theme, toggleTheme }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/50 backdrop-blur-xl bg-background/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 font-semibold tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CircuitMind AI" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							className: "hover:text-foreground transition-colors",
							children: "Features"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "hover:text-foreground transition-colors",
							children: "How it works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#templates",
							className: "hover:text-foreground transition-colors",
							children: "Templates"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#pricing",
							className: "hover:text-foreground transition-colors",
							children: "Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							className: "hover:text-foreground transition-colors",
							children: "FAQ"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleTheme,
							className: "rounded-xl border border-border/60 p-2 text-muted-foreground hover:text-foreground hover:border-brand/40 bg-card/40 transition-colors",
							title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							className: "hidden text-sm text-muted-foreground hover:text-foreground md:inline",
							children: "Sign in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth",
							className: "inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-[0_6px_20px_-6px_oklch(0.6_0.22_285/0.7)] hover:brightness-110 transition",
							children: ["Start free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})
					]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.22_285/0.35),transparent)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCircuit, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-24 pt-20 lg:grid-cols-2 lg:pt-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-brand" }), "AI-powered circuit design for EEE students"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl",
						children: [
							"Design smarter",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "circuits"
							}),
							" with AI."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-muted-foreground",
						children: "Describe your idea — get a complete component list, wiring diagram, breadboard layout, Arduino code, cost estimate, and project documentation in seconds."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth",
							className: "inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 font-medium text-white glow-brand hover:brightness-110 transition",
							children: ["Start building free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 font-medium hover:bg-card transition",
							children: "Watch demo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand" }), " No credit card"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand" }), " Arduino & ESP32"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand" }), " BOM export"]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .96
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .7,
					delay: .1
				},
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-3xl p-2 shadow-[0_30px_80px_-30px_oklch(0.05_0_0/0.9)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-2xl border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_circuit_default,
								alt: "Neon circuit board with holographic component overlays",
								width: 1600,
								height: 1024,
								className: "h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 left-4 right-4 flex flex-wrap gap-2",
								children: [
									"Arduino Uno",
									"ESP32",
									"L298N",
									"HC-SR04",
									"TB6612FNG"
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs backdrop-blur",
									children: c
								}, c))
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-brand-glow/30 blur-3xl" })]
			})]
		})]
	});
}
function FloatingCircuit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "absolute inset-0 h-full w-full opacity-30",
		xmlns: "http://www.w3.org/2000/svg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
			id: "cg",
			x1: "0",
			x2: "1",
			y2: "1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "0",
				stopColor: "oklch(0.7 0.2 275)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "1",
				stopColor: "oklch(0.72 0.22 310)"
			})]
		}) }), Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 80 * i,
			y1: 0,
			x2: 80 * i + 200,
			y2: 600,
			stroke: "url(#cg)",
			strokeWidth: "1",
			strokeDasharray: "6 12",
			className: "animate-dash"
		}, i))]
	});
}
function LogosStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border/50 bg-card/30 py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "uppercase tracking-widest text-xs",
				children: "Supports"
			}), [
				"Arduino",
				"ESP32",
				"STM32",
				"Raspberry Pi",
				"8051",
				"PIC",
				"Teensy"
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-foreground/70",
				children: i
			}, i))]
		})
	});
}
var FEATURES = [
	{
		icon: Bot,
		title: "AI Circuit Generator",
		desc: "Describe your project — get a full circuit design with wiring, code, and BOM."
	},
	{
		icon: Cable,
		title: "Wiring & Breadboard",
		desc: "Clean pin-by-pin connection tables and conceptual breadboard layouts."
	},
	{
		icon: MessageSquareCode,
		title: "Arduino Code Included",
		desc: "Ready-to-flash starter sketches with comments for every generated project."
	},
	{
		icon: Layers,
		title: "Component Library",
		desc: "Curated database of sensors, ICs, modules, and MCUs with datasheets & alternatives."
	},
	{
		icon: Wrench,
		title: "Circuit Optimizer",
		desc: "Paste your BOM, get cheaper alternatives, lower-power parts, and simpler wiring."
	},
	{
		icon: FileText,
		title: "PDF Reports",
		desc: "Export a professional project report — perfect for lab submissions and showcases."
	},
	{
		icon: Search,
		title: "Templates for Robotics & IoT",
		desc: "Line follower, obstacle avoider, ESP32 home automation, smart irrigation, and more."
	},
	{
		icon: ShieldCheck,
		title: "Safety-Aware Answers",
		desc: "Voltage, current, and heat warnings so students don't fry their boards."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Features",
			title: "Everything a student needs to build real circuits"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .04 },
				className: "glass group rounded-2xl p-5 hover:-translate-y-1 hover:border-brand/50 transition",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-brand text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: f.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-sm text-muted-foreground",
						children: f.desc
					})
				]
			}, f.title))
		})]
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "how",
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "How it works",
			title: "From idea to working circuit in 3 steps"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3",
			children: [
				{
					n: "01",
					title: "Describe your idea",
					desc: "Tell CircuitMind what you want to build — from line followers to ESP32 home automation."
				},
				{
					n: "02",
					title: "AI designs the circuit",
					desc: "Get components, wiring, breadboard layout, Arduino code, and cost — all in one place."
				},
				{
					n: "03",
					title: "Build & export",
					desc: "Save, iterate, or export a polished PDF report ready for your instructor."
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-gradient-brand text-3xl font-semibold",
						children: s.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-lg font-semibold",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.desc
					})
				]
			}, s.n))
		})]
	});
}
function ShowcaseChat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Product",
			title: "One AI, tuned for electronics"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-6 lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground",
					children: "Assistant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-gradient-brand/10 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "You"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Build me a Line Following Robot with Arduino Uno" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card/50 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "CircuitMind AI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: "Line Following Robot — Beginner · ~ $28"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: "Uses 2× IR sensors, L298N motor driver, 2× DC gear motors, and an Arduino Uno. Wire IR outputs to D2/D3, motor driver IN1–IN4 to D5–D8..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5 pt-1",
									children: [
										"Arduino Uno",
										"L298N",
										"IR ×2",
										"N20 motors",
										"Li-ion 2S"
									].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-xs",
										children: c
									}, c))
								})
							]
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Zap,
						label: "Faster than YouTube tutorials",
						value: "~15×"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Cpu,
						label: "Supported MCUs",
						value: "8+"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: CircuitBoard,
						label: "Ready templates",
						value: "20+"
					})
				]
			})]
		})]
	});
}
function StatCard({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass rounded-2xl p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-10 place-items-center rounded-lg bg-gradient-brand text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-2xl font-semibold",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: label
			})] })]
		})
	});
}
function Templates() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "templates",
		className: "mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Templates",
			title: "Start from 20+ project blueprints"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid grid-cols-2 gap-3 md:grid-cols-4",
			children: [
				"Line Follower Robot",
				"Obstacle Avoiding Robot",
				"Bluetooth Controlled Car",
				"ESP32 Home Automation",
				"Smart Irrigation System",
				"IoT Weather Station",
				"555 Timer Blinker",
				"Regulated Power Supply"
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-xl p-4 hover:border-brand/50 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 inline-flex size-8 items-center justify-center rounded-md bg-gradient-brand text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBoard, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium",
					children: t
				})]
			}, t))
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Loved by students",
			title: "Trusted by builders worldwide"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid grid-cols-1 gap-4 md:grid-cols-3",
			children: [
				{
					name: "Aisha K.",
					role: "EEE, 3rd year",
					text: "Built my first ESP32 IoT project in an afternoon. The BOM export saved me hours."
				},
				{
					name: "Marco P.",
					role: "Robotics club",
					text: "The wiring tables are gold. No more re-watching YouTube tutorials frame-by-frame."
				},
				{
					name: "Dr. Reyes",
					role: "Faculty mentor",
					text: "I recommend it to every first-year lab student. Safety warnings alone are worth it."
				}
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-foreground/90",
					children: [
						"\"",
						t.text,
						"\""
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: t.role
					})]
				})]
			}, t.name))
		})]
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pricing",
		className: "mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Pricing",
			title: "Simple pricing for every builder"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-3",
			children: [
				{
					name: "Free",
					price: "$0",
					desc: "Perfect for students getting started",
					features: [
						"10 AI generations / month",
						"Community templates",
						"Basic BOM export"
					],
					cta: "Start free"
				},
				{
					name: "Pro",
					price: "$9",
					desc: "For serious hobbyists & clubs",
					features: [
						"Unlimited AI generations",
						"PDF reports",
						"Circuit optimizer",
						"Priority models"
					],
					cta: "Get Pro",
					highlight: true
				},
				{
					name: "Team",
					price: "$29",
					desc: "For classrooms & labs",
					features: [
						"Everything in Pro",
						"Shared project library",
						"Admin dashboard",
						"Priority support"
					],
					cta: "Contact us"
				}
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `glass rounded-2xl p-6 ${t.highlight ? "border-brand/60 relative glow-brand" : ""}`,
				children: [
					t.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-3 left-6 rounded-full bg-gradient-brand px-3 py-1 text-xs text-white",
						children: "Most popular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: t.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-baseline gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-4xl font-semibold",
							children: t.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "/mo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: t.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2 text-sm",
						children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand" }),
								" ",
								f
							]
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						className: `mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${t.highlight ? "bg-gradient-brand text-white hover:brightness-110" : "border border-border hover:bg-card"}`,
						children: t.cta
					})
				]
			}, t.name))
		})]
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "mx-auto max-w-4xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Questions, answered"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 space-y-3",
			children: [
				{
					q: "Is CircuitMind AI free for students?",
					a: "Yes — the free tier gives you 10 AI generations per month, more than enough to build a full lab project."
				},
				{
					q: "Which microcontrollers are supported?",
					a: "Arduino (Uno/Nano/Mega), ESP32, ESP8266, STM32, Raspberry Pi Pico, 8051, and more."
				},
				{
					q: "Can it generate Arduino code?",
					a: "Every project includes a working starter sketch with comments explaining each block."
				},
				{
					q: "Can I export my project as PDF?",
					a: "Yes — one click gets you a printable report with BOM, wiring, and code."
				},
				{
					q: "Will it warn me about dangerous voltages?",
					a: "The AI is trained to flag risky voltage/current combinations and to prefer safer alternatives."
				}
			].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "glass group rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "flex cursor-pointer items-center justify-between gap-4 text-sm font-medium",
					children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground transition group-open:rotate-45",
						children: "+"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: f.a
				})]
			}, f.q))
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-8 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), " CircuitMind AI"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "AI-powered circuit design for the next generation of EEE, robotics, and IoT builders."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-8 text-sm md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground",
							children: "Product"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "hover:text-foreground text-muted-foreground",
									children: "Features"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#templates",
									className: "hover:text-foreground text-muted-foreground",
									children: "Templates"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#pricing",
									className: "hover:text-foreground text-muted-foreground",
									children: "Pricing"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-foreground text-muted-foreground",
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-foreground text-muted-foreground",
									children: "Blog"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-foreground text-muted-foreground",
									children: "Contact"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground",
							children: "Social"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "flex items-center gap-2 text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "size-4" }), " Twitter"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "flex items-center gap-2 text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" }), " GitHub"]
							}) })]
						})] })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" CircuitMind AI. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built for engineering students." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-border",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Developed by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground hover:text-brand transition cursor-pointer",
							children: "Ahanaf"
						})] })
					]
				})]
			})]
		})
	});
}
function SectionHeading({ eyebrow, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 text-xs font-medium uppercase tracking-widest text-brand",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl",
			children: title
		})]
	});
}
//#endregion
export { Landing as component };
