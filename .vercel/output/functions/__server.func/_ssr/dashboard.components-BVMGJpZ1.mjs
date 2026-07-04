import { o as __toESM } from "../_runtime.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { P as Layers, _ as Search } from "../_libs/lucide-react.mjs";
import { t as COMPONENTS } from "./components-data-BBD0b4nE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.components-BVMGJpZ1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ComponentsPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const cats = ["All", ...Array.from(new Set(COMPONENTS.map((c) => c.category)))];
	const filtered = (0, import_react.useMemo)(() => COMPONENTS.filter((c) => (cat === "All" || c.category === cat) && (q === "" || c.name.toLowerCase().includes(q.toLowerCase()) || c.description.toLowerCase().includes(q.toLowerCase()))), [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl p-6 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-10 place-items-center rounded-xl bg-gradient-brand text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-brand",
					children: "Component Library"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: [
						"Explore ",
						COMPONENTS.length,
						" components"
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass flex flex-1 items-center gap-2 rounded-xl p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-1 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground",
						placeholder: "Search components…",
						value: q,
						onChange: (e) => setQ(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: `rounded-md border px-2.5 py-1 text-xs transition ${cat === c ? "border-brand bg-gradient-brand/15 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`,
						children: c
					}, c))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard/components/$id",
					params: { id: c.id },
					className: "glass rounded-2xl p-4 hover:border-brand/50 transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary/50 px-2 py-0.5",
								children: c.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: ["$", c.price.toFixed(2)]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-semibold",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["⚡ ", c.voltage] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["🔌 ", c.current] })]
						})
					]
				}, c.id))
			}),
			filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center text-sm text-muted-foreground",
				children: "No components match your search."
			})
		]
	});
}
//#endregion
export { ComponentsPage as component };
