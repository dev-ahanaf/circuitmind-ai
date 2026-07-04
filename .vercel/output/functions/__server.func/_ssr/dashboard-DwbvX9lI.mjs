import { o as __toESM } from "../_runtime.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-B4oW4G2w.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as BrandMark } from "./brand-mark-DxT1qhK6.mjs";
import { D as Moon, I as House, L as History, P as Layers, a as Wrench, d as Sun, et as Cable, h as Settings, i as X, j as LogOut, k as Menu, nt as BookOpen, p as Sparkles, s as User, tt as Bot } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DwbvX9lI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/dashboard",
		label: "Home",
		icon: House,
		exact: true
	},
	{
		to: "/dashboard/chat",
		label: "AI Assistant",
		icon: Bot
	},
	{
		to: "/dashboard/generator",
		label: "Circuit Generator",
		icon: Cable
	},
	{
		to: "/dashboard/components",
		label: "Component Library",
		icon: Layers
	},
	{
		to: "/dashboard/templates",
		label: "Templates",
		icon: BookOpen
	},
	{
		to: "/dashboard/optimizer",
		label: "Optimizer",
		icon: Wrench
	},
	{
		to: "/dashboard/history",
		label: "History",
		icon: History
	}
];
function DashboardLayout() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [theme, setTheme] = (0, import_react.useState)("dark");
	const navigate = useNavigate();
	const loc = useLocation();
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
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then((res) => {
			const data = res?.data;
			if (data?.user) setUser(data.user);
			else setUser({
				id: "developer-session",
				email: "developer@circuitmind.local",
				user_metadata: { display_name: "Developer" }
			});
		});
	}, []);
	(0, import_react.useEffect)(() => setOpen(false), [loc.pathname]);
	async function signOut() {
		await supabase.auth.signOut();
		toast.success("Signed out");
		navigate({ to: "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10 opacity-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 top-40 h-96 w-96 rounded-full bg-brand/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-brand-glow/20 blur-3xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 flex items-center justify-between border-b border-border/60 bg-background/70 px-4 py-3 backdrop-blur md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					className: "flex items-center gap-2 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { size: 28 }), "CircuitMind"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: toggleTheme,
						className: "rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground",
						title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(!open),
						className: "rounded-lg border border-border p-2",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: `${open ? "block" : "hidden"} fixed inset-x-0 top-[57px] z-20 border-b border-border bg-background/95 backdrop-blur md:sticky md:top-0 md:z-auto md:flex md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r md:border-border/60 md:bg-transparent md:backdrop-blur-none`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full w-full flex-col p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard",
								className: "mb-6 hidden items-center gap-2 px-2 font-semibold md:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { size: 32 }), "CircuitMind AI"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "space-y-0.5",
								children: NAV.map((item) => {
									const active = item.exact ? loc.pathname === item.to : loc.pathname.startsWith(item.to);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: item.to,
										className: `group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition ${active ? "bg-gradient-brand/15 text-foreground border border-brand/30" : "text-muted-foreground hover:bg-card hover:text-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: `size-4 ${active ? "text-brand" : ""}` }), item.label]
									}, item.to);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 rounded-xl border border-border bg-card/60 p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-brand" }), " Free plan"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-xs text-muted-foreground",
										children: "7 / 10 generations used this month"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-1.5 overflow-hidden rounded-full bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-[70%] bg-gradient-brand" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "mt-3 w-full rounded-md bg-gradient-brand py-1.5 text-xs font-medium text-white hover:brightness-110",
										children: "Upgrade to Pro"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto space-y-0.5 pt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/dashboard/profile",
										className: "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }), " Profile"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/dashboard/settings",
										className: "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), " Settings"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: toggleTheme,
										className: "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground transition mb-1",
										children: [
											theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }),
											"Theme: ",
											theme === "dark" ? "Light Mode" : "Dark Mode"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: signOut,
										className: "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), " Sign out"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center gap-2 rounded-lg px-2 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-8 place-items-center rounded-full bg-gradient-brand text-xs font-semibold text-white",
											children: (user?.email || "?").slice(0, 1).toUpperCase()
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-foreground",
												children: user?.user_metadata?.display_name || user?.email?.split("@")[0] || "User"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-muted-foreground",
												children: user?.email
											})]
										})]
									})
								]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 flex-1 flex flex-col min-h-screen",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "py-4 text-center text-xs text-muted-foreground border-t border-border/20 bg-background/50",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" CircuitMind AI. Developed by ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Ahanaf"
							})
						]
					})]
				})]
			})
		]
	});
}
//#endregion
export { DashboardLayout as component };
