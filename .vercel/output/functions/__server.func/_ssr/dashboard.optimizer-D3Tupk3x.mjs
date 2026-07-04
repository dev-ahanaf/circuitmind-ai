import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { M as LoaderCircle, a as Wrench, p as Sparkles } from "../_libs/lucide-react.mjs";
import { i as optimizeCircuit, t as Markdown } from "./markdown-ZiCGHc6P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.optimizer-D3Tupk3x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OptimizerPage() {
	const [bom, setBom] = (0, import_react.useState)("");
	const [goal, setGoal] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)("");
	async function submit(e) {
		e.preventDefault();
		setLoading(true);
		setResult("");
		try {
			const { content } = await optimizeCircuit({ data: {
				componentList: bom,
				goal
			} });
			setResult(content);
		} catch (err) {
			setResult("⚠️ Failed: " + err.message);
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl p-6 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-10 place-items-center rounded-xl bg-gradient-brand text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-brand",
					children: "Optimizer"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Optimize your BOM"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "glass mt-6 space-y-3 rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs font-medium text-muted-foreground",
							children: "Current component list"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 7,
							className: "input font-mono",
							value: bom,
							onChange: (e) => setBom(e.target.value),
							placeholder: "Arduino Uno x1\nL298N Motor Driver x1\nHC-SR04 x1\nSG90 Servo x1"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs font-medium text-muted-foreground",
							children: "Optimization goal (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "input",
							value: goal,
							onChange: (e) => setGoal(e.target.value),
							placeholder: "lowest cost, lowest power, simpler wiring…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: loading,
						className: "inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white glow-brand disabled:opacity-70",
						children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " Optimize"]
					})
				]
			}),
			(loading || result) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass mt-6 rounded-2xl p-5",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Analyzing BOM…"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: result })
			})
		]
	});
}
//#endregion
export { OptimizerPage as component };
