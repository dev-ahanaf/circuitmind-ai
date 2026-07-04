import { o as __toESM } from "../_runtime.mjs";
import { n as exportMarkdownToPDF } from "./utils-Ycb7J1zW.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { F as Info, K as Download, M as LoaderCircle, et as Cable, p as Sparkles } from "../_libs/lucide-react.mjs";
import { r as generateCircuit, t as Markdown } from "./markdown-ZiCGHc6P.mjs";
import { a as TabsTrigger, i as TabsList, n as Tabs, o as parseMarkdownSections, r as TabsContent, t as CircuitRenderer } from "./tabs-zu2cGQSX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.generator-D8kAW8N-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GeneratorPage() {
	const [form, setForm] = (0, import_react.useState)({
		description: "",
		voltage: "",
		microcontroller: "",
		preferred: "",
		budget: ""
	});
	const [result, setResult] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function submit(e) {
		e.preventDefault();
		setLoading(true);
		setResult("");
		try {
			const { content } = await generateCircuit({ data: form });
			setResult(content);
		} catch (err) {
			setResult("⚠️ Failed to generate: " + err.message);
		} finally {
			setLoading(false);
		}
	}
	function exportPDF() {
		exportMarkdownToPDF(form.description ? `Circuit Design: ${form.description.slice(0, 40)}` : "Circuit Design", result);
	}
	const sections = parseMarkdownSections(result);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl p-6 md:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-10 place-items-center rounded-xl bg-gradient-brand text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cable, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-widest text-brand",
				children: "Circuit Generator"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Generate a circuit from a description"
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "glass col-span-1 space-y-3 rounded-2xl p-5 lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Project description",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 4,
							value: form.description,
							onChange: (e) => setForm({
								...form,
								description: e.target.value
							}),
							placeholder: "e.g. Line following robot with Arduino Uno and 2 IR sensors.",
							className: "input"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Voltage",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "input",
								value: form.voltage,
								onChange: (e) => setForm({
									...form,
									voltage: e.target.value
								}),
								placeholder: "5V"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Microcontroller",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "input",
								value: form.microcontroller,
								onChange: (e) => setForm({
									...form,
									microcontroller: e.target.value
								}),
								placeholder: "Arduino Uno"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred components",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "input",
							value: form.preferred,
							onChange: (e) => setForm({
								...form,
								preferred: e.target.value
							}),
							placeholder: "L298N, N20 motors"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Budget (USD)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "input",
							value: form.budget,
							onChange: (e) => setForm({
								...form,
								budget: e.target.value
							}),
							placeholder: "$30"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: loading,
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-2.5 font-medium text-white glow-brand disabled:opacity-70",
						children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Generate circuit"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-1 lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass min-h-[400px] rounded-2xl p-5",
					children: [
						loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Designing circuit…"]
						}),
						!loading && !result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-full place-items-center p-10 text-center text-sm text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto mb-2 size-6 text-brand" }), "Fill the form to generate a complete circuit design with wiring, code, and BOM."] })
						}),
						result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between border-b border-border/40 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-foreground",
								children: "Generated Output"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: exportPDF,
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mx-auto mb-2 size-6 text-muted-foreground/60" }), "No schematic diagram JSON could be parsed. Make sure your description defines a microcontroller circuit."]
									})
								})
							]
						})] })
					]
				})
			})]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium text-muted-foreground",
			children: label
		}), children]
	});
}
//#endregion
export { GeneratorPage as component };
