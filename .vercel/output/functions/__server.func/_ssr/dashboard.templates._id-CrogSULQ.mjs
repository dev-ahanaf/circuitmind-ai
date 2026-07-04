import { o as __toESM } from "../_runtime.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as exportMarkdownToPDF } from "./utils-Ycb7J1zW.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { F as Info, K as Download, M as LoaderCircle, p as Sparkles, st as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as generateCircuit, t as Markdown } from "./markdown-ZiCGHc6P.mjs";
import { a as TabsTrigger, i as TabsList, n as Tabs, o as parseMarkdownSections, r as TabsContent, t as CircuitRenderer } from "./tabs-zu2cGQSX.mjs";
import { t as Route } from "./dashboard.templates._id-BZwkGzGw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.templates._id-CrogSULQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TemplateDetail() {
	const t = Route.useLoaderData();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [content, setContent] = (0, import_react.useState)("");
	async function build() {
		setLoading(true);
		try {
			const { content } = await generateCircuit({ data: { description: `${t.title}: ${t.description}. Use these components: ${t.components.join(", ")}.` } });
			setContent(content);
		} catch (err) {
			setContent("⚠️ Failed to generate: " + err.message);
		} finally {
			setLoading(false);
		}
	}
	const sections = parseMarkdownSections(content);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl p-6 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/templates",
				className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), " Back to templates"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs uppercase tracking-widest text-brand",
						children: [
							t.category,
							" · ",
							t.difficulty
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-3xl font-semibold tracking-tight",
						children: t.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted-foreground",
						children: t.description
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: build,
					disabled: loading,
					className: "inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-medium text-white glow-brand disabled:opacity-70",
					children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Build with AI"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Estimated cost"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-xl font-semibold",
							children: ["$", t.cost]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Difficulty"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xl font-semibold",
							children: t.difficulty
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xl font-semibold",
							children: t.category
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 glass rounded-2xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 text-sm font-semibold",
					children: "Suggested components"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: t.components.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs",
						children: c
					}, c))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 glass min-h-[200px] rounded-2xl p-5",
				children: [
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Building your project…"]
					}),
					!loading && !content && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center text-sm text-muted-foreground",
						children: [
							"Click ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Build with AI" }),
							" to generate a complete guide with wiring, code and BOM."
						]
					}),
					content && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between border-b border-border/40 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-foreground",
							children: "Generated Output"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => exportMarkdownToPDF(t.title, content),
							className: "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), " Export PDF"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						defaultValue: "overview",
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								className: "flex flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-4 rounded-lg",
								children: [
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
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "diagram",
										className: "bg-gradient-brand/5 hover:bg-gradient-brand/10 data-[state=active]:bg-gradient-brand data-[state=active]:text-white",
										children: "AI Circuit Diagram"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "overview",
								className: "mt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "prose max-w-none dark:prose-invert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: sections.overview || "_No overview generated._" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "components",
								className: "mt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "prose max-w-none dark:prose-invert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: sections.components || "_No component list generated._" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "wiring",
								className: "mt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "prose max-w-none dark:prose-invert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: sections.wiring || "_No wiring connections generated._" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "code",
								className: "mt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "prose max-w-none dark:prose-invert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: sections.code || "_No code generated._" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "explanation",
								className: "mt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "prose max-w-none dark:prose-invert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: sections.explanation || "_No explanation generated._" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "troubleshooting",
								className: "mt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "prose max-w-none dark:prose-invert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: sections.troubleshooting || "_No troubleshooting steps generated._" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "diagram",
								className: "mt-0",
								children: sections.circuitJson ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitRenderer, { data: sections.circuitJson }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground bg-secondary/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mx-auto mb-2 size-6 text-muted-foreground/60" }), "No schematic diagram JSON could be parsed. Make sure the description defines a microcontroller circuit."]
								})
							})
						]
					})] })
				]
			})
		]
	});
}
//#endregion
export { TemplateDetail as component };
