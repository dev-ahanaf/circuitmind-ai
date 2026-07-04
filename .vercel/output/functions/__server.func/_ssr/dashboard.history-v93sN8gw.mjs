import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { L as History } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.history-v93sN8gw.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		title: "Line Following Robot",
		when: "2h ago",
		tokens: 1420
	},
	{
		title: "ESP32 Home Automation",
		when: "Yesterday",
		tokens: 2109
	},
	{
		title: "555 Timer Blinker",
		when: "2d ago",
		tokens: 812
	},
	{
		title: "Smart Irrigation",
		when: "5d ago",
		tokens: 1740
	},
	{
		title: "Bluetooth Car",
		when: "1w ago",
		tokens: 998
	}
];
function HistoryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl p-6 md:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-10 place-items-center rounded-xl bg-gradient-brand text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-widest text-brand",
				children: "Activity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Recent AI history"
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass mt-6 divide-y divide-border rounded-2xl",
			children: ITEMS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 py-3.5 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: i.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: [
						i.when,
						" · ",
						i.tokens,
						" tokens"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-md border border-border px-2 py-1 text-xs hover:bg-accent",
					children: "Open"
				})]
			}, i.title))
		})]
	});
}
//#endregion
export { HistoryPage as component };
