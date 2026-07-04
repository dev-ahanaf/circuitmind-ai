import { o as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { $ as Check, J as Copy } from "../_libs/lucide-react.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-L0ehjbmZ.mjs";
import { t as Markdown$1 } from "../_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "../_libs/remark-gfm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/markdown-ZiCGHc6P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var chatCompletion = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	messages: arrayType(objectType({
		role: enumType([
			"user",
			"assistant",
			"system"
		]),
		content: stringType().min(1).max(2e4)
	})).min(1).max(50),
	systemPromptOverride: stringType().max(4e3).optional()
}).parse(input)).handler(createSsrRpc("08b923ccd2e1d7bb263c40841af06fe061b5f7ca95e4f4b07db599546490c4b8"));
var generateCircuit = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	description: stringType().min(4).max(2e3),
	voltage: stringType().max(50).optional(),
	microcontroller: stringType().max(100).optional(),
	preferred: stringType().max(500).optional(),
	budget: stringType().max(50).optional()
}).parse(input)).handler(createSsrRpc("b676ab3ab16f4f7bebe0fa8a473a141e7beccc5689907d9f71b457d5e91c10ba"));
var optimizeCircuit = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	componentList: stringType().min(4).max(4e3),
	goal: stringType().max(500).optional()
}).parse(input)).handler(createSsrRpc("0244a6f65ad038764957de0b7e87d1e7beb0effd309eb10ec731a5acedd702ba"));
function CodeBlock({ children, className }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const text = String(children ?? "").replace(/\n$/, "");
	const lang = /language-(\w+)/.exec(className || "")?.[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative my-4 overflow-hidden rounded-xl border border-border bg-[oklch(0.13_0.03_265)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-2 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono uppercase tracking-wide",
				children: lang || "code"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					navigator.clipboard.writeText(text);
					setCopied(true);
					setTimeout(() => setCopied(false), 1500);
				},
				className: "flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground transition-colors",
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied ? "Copied" : "Copy"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto p-4 text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className,
				children: text
			})
		})]
	});
}
function Markdown({ content }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "cm-md text-[0.95rem] leading-relaxed",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown$1, {
			remarkPlugins: [remarkGfm],
			components: {
				pre: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children }),
				code: ({ className, children, ...props }) => {
					if (/language-/.test(className || "")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						className,
						children
					});
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className,
						...props,
						children
					});
				},
				table: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-4 overflow-x-auto rounded-lg border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "w-full text-sm",
						children
					})
				}),
				th: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "border-b border-border bg-secondary/50 px-3 py-2 text-left font-semibold",
					children
				}),
				td: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "border-b border-border/50 px-3 py-2 align-top",
					children
				})
			},
			children: content
		})
	});
}
//#endregion
export { optimizeCircuit as i, chatCompletion as n, generateCircuit as r, Markdown as t };
