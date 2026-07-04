import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { p as Sparkles, v as Save } from "../_libs/lucide-react.mjs";
import { r as TEMPLATES } from "./components-data-BBD0b4nE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.projects-DEY7H1p3.js
var import_jsx_runtime = require_jsx_runtime();
function SavedProjects() {
	const projects = TEMPLATES.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl p-6 md:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-10 place-items-center rounded-xl bg-gradient-brand text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-brand",
					children: "Saved Projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Your circuit designs"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/chat",
				className: "inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " New project"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3",
			children: projects.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/templates/$id",
				params: { id: t.id },
				className: "glass rounded-2xl p-5 hover:border-brand/50 transition",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							"Saved · ",
							i + 1,
							"d ago"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-semibold",
						children: t.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
						children: t.description
					})
				]
			}, t.id))
		})]
	});
}
//#endregion
export { SavedProjects as component };
