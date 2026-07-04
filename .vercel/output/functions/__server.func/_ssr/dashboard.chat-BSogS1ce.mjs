import { o as __toESM } from "../_runtime.mjs";
import { n as exportMarkdownToPDF } from "./utils-Ycb7J1zW.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as Plus, K as Download, M as LoaderCircle, g as Send, p as Sparkles, s as User, tt as Bot } from "../_libs/lucide-react.mjs";
import { n as QUICK_PROMPTS } from "./components-data-BBD0b4nE.mjs";
import { n as chatCompletion, t as Markdown } from "./markdown-ZiCGHc6P.mjs";
import { a as TabsTrigger, i as TabsList, n as Tabs, o as parseMarkdownSections, r as TabsContent, t as CircuitRenderer } from "./tabs-zu2cGQSX.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.chat-BSogS1ce.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function stripJsonBlock(markdown) {
	if (!markdown) return "";
	let result = markdown.replace(/```json[\s\S]*?```/g, "");
	result = result.replace(/^(?:##?|###?)\s+(?:Circuit|Schematic)\s+JSON\s*$/gim, "");
	return result.trim();
}
function ChatPage() {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const scrollerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollerRef.current?.scrollTo({
			top: scrollerRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, loading]);
	async function send(text) {
		if (!text.trim() || loading) return;
		const next = [...messages, {
			role: "user",
			content: text
		}];
		setMessages(next);
		setInput("");
		setLoading(true);
		try {
			const { content } = await chatCompletion({ data: { messages: next } });
			setMessages([...next, {
				role: "assistant",
				content
			}]);
		} catch (err) {
			setMessages([...next, {
				role: "assistant",
				content: "⚠️ I couldn't reach the AI service. Please make sure your API key (GEMINI_API_KEY, OPENAI_API_KEY, or GROQ_API_KEY) is correctly configured in your .env file.\n\n_Error: " + err.message + "_"
			}]);
		} finally {
			setLoading(false);
		}
	}
	function exportChat() {
		exportMarkdownToPDF("CircuitMind AI Chat Session", messages.map((m) => `# ${m.role === "user" ? "User Query" : "CircuitMind AI"}\n\n${m.content}`).join("\n\n---\n\n"));
	}
	const empty = messages.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[calc(100vh-0px)] flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between border-b border-border/60 px-6 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-8 place-items-center rounded-lg bg-gradient-brand text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold",
						children: "CircuitMind Assistant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Ask anything about circuits, code, or components"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMessages([]),
						className: "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), " New chat"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: exportChat,
						disabled: empty,
						className: "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent disabled:opacity-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), " Export PDF"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollerRef,
				className: "flex-1 overflow-y-auto",
				children: empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-6 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-gradient-brand text-white glow-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold tracking-tight",
								children: "What are we building today?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Describe your project and CircuitMind will design the circuit, wiring, code, and BOM."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-1 gap-2 md:grid-cols-2",
						children: QUICK_PROMPTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => send(p),
							className: "glass rounded-xl px-4 py-3 text-left text-sm hover:border-brand/50 transition",
							children: p
						}, p))
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl lg:max-w-5xl space-y-6 px-6 py-8 w-full",
					children: [messages.map((m, i) => {
						const parsed = m.role === "assistant" ? parseMarkdownSections(m.content) : null;
						const hasJson = !!(parsed && parsed.circuitJson);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: `flex gap-3 w-full ${hasJson ? "" : "max-w-3xl mx-auto"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mt-1 grid size-8 shrink-0 place-items-center rounded-lg ${m.role === "user" ? "bg-secondary" : "bg-gradient-brand text-white"}`,
								children: m.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-1 text-xs text-muted-foreground",
									children: m.role === "user" ? "You" : "CircuitMind AI"
								}), m.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-xl bg-secondary/50 px-4 py-3 text-sm",
									children: m.content
								}) : (() => {
									if (parsed && parsed.circuitJson) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "glass rounded-xl p-5 w-full space-y-4 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
											defaultValue: "diagram",
											className: "w-full",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
													className: "flex flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-4 rounded-lg",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
															value: "diagram",
															className: "bg-gradient-brand/5 hover:bg-gradient-brand/10 data-[state=active]:bg-gradient-brand data-[state=active]:text-white",
															children: "Interactive Circuit Diagram"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
															value: "overview",
															children: "Overview"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
															value: "components",
															children: "Components"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
															value: "wiring",
															children: "Wiring"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
															value: "code",
															children: "Arduino Code"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
															value: "explanation",
															children: "Explanation"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
															value: "troubleshooting",
															children: "Troubleshooting"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
													value: "diagram",
													className: "mt-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitRenderer, { data: parsed.circuitJson })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
													value: "overview",
													className: "mt-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "prose max-w-none dark:prose-invert",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: stripJsonBlock(parsed.overview) || "_No overview generated._" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
													value: "components",
													className: "mt-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "prose max-w-none dark:prose-invert",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: stripJsonBlock(parsed.components) || "_No component list generated._" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
													value: "wiring",
													className: "mt-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "prose max-w-none dark:prose-invert",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: stripJsonBlock(parsed.wiring) || "_No wiring connections generated._" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
													value: "code",
													className: "mt-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "prose max-w-none dark:prose-invert",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: stripJsonBlock(parsed.code) || "_No code generated._" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
													value: "explanation",
													className: "mt-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "prose max-w-none dark:prose-invert",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: stripJsonBlock(parsed.explanation) || "_No explanation generated._" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
													value: "troubleshooting",
													className: "mt-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "prose max-w-none dark:prose-invert",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: stripJsonBlock(parsed.troubleshooting) || "_No troubleshooting steps generated._" })
													})
												})
											]
										})
									});
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "glass rounded-xl px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: m.content })
									});
								})()]
							})]
						}, i);
					}), loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 max-w-3xl mx-auto w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-brand text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass rounded-xl px-4 py-3 text-sm text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Designing your circuit…"]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 bg-background/60 p-4 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						send(input);
					},
					className: "mx-auto flex max-w-3xl items-end gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass flex flex-1 items-end gap-2 rounded-2xl p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: input,
							onChange: (e) => setInput(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									send(input);
								}
							},
							placeholder: "Describe your project… e.g. Build a Line Following Robot",
							rows: 1,
							className: "max-h-40 flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading || !input.trim(),
							className: "inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-3 py-2 text-sm font-medium text-white disabled:opacity-40",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-2 max-w-3xl text-center text-[10px] text-muted-foreground",
					children: "CircuitMind may occasionally be inaccurate. Always double-check voltages and datasheets."
				})]
			})
		]
	});
}
//#endregion
export { ChatPage as component };
