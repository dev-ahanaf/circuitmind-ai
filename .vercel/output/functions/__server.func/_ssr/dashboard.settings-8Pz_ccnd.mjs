import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Settings, v as Save } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.settings-8Pz_ccnd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	const [provider, setProvider] = (0, import_react.useState)("gemini");
	const [dark, setDark] = (0, import_react.useState)(true);
	const [emails, setEmails] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl p-6 md:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-10 place-items-center rounded-xl bg-gradient-brand text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-widest text-brand",
				children: "Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Preferences"
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass mt-6 space-y-6 rounded-2xl p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					title: "AI provider",
					desc: "Switch between the underlying models CircuitMind uses.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: ["gemini", "openai"].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setProvider(p),
							className: `rounded-md border px-3 py-1.5 text-xs capitalize ${provider === p ? "border-brand bg-gradient-brand/15" : "border-border text-muted-foreground"}`,
							children: p
						}, p))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					title: "Dark mode",
					desc: "CircuitMind looks best in dark.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: dark,
						onChange: setDark
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					title: "Email updates",
					desc: "Occasional tips and new templates.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: emails,
						onChange: setEmails
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => toast.success("Preferences saved"),
					className: "inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), " Save changes"]
				})
			]
		})]
	});
}
function Row({ title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col justify-between gap-3 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: desc
		})] }), children]
	});
}
function Toggle({ on, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => onChange(!on),
		className: `relative h-6 w-11 rounded-full border transition ${on ? "border-brand bg-gradient-brand" : "border-border bg-secondary"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${on ? "left-5" : "left-0.5"}` })
	});
}
//#endregion
export { SettingsPage as component };
