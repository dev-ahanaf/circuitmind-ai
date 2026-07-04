import { o as __toESM } from "../_runtime.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-B4oW4G2w.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { at as ArrowUp } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$14 } from "./dashboard.components._id-CwK1iY73.mjs";
import { t as Route$15 } from "./dashboard.templates._id-BZwkGzGw.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DSeo2ZkC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-SQISIh79.css";
function reportError(error, context = {}) {
	console.error("Error boundary caught error:", error, context);
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CircuitMind AI — Design smarter circuits with AI" },
			{
				name: "description",
				content: "Generate wiring, schematics, component recommendations, Arduino code, and BOMs for your electronics projects in seconds."
			},
			{
				name: "author",
				content: "CircuitMind AI"
			},
			{
				property: "og:title",
				content: "CircuitMind AI"
			},
			{
				property: "og:description",
				content: "AI-powered circuit designer for EEE, Arduino, ESP32, robotics, and IoT students."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.png",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
            try {
              const theme = localStorage.getItem('theme') || 'dark';
              if (theme === 'light') {
                document.documentElement.classList.add('light');
              } else {
                document.documentElement.classList.remove('light');
              }
            } catch (_) {}
          ` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function ScrollToTopButton() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 300);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-white shadow-[0_6px_20px_-6px_oklch(0.6_0.22_285/0.7)] hover:scale-110 transition cursor-pointer",
		"aria-label": "Back to top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => sub.subscription.unsubscribe();
	}, [queryClient, router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-right",
				richColors: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTopButton, {})
		]
	});
}
var $$splitComponentImporter$12 = () => import("./dashboard-DwbvX9lI.mjs");
var Route$12 = createFileRoute("/dashboard")({
	beforeLoad: async () => {},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./auth-C0DbhX9l.mjs");
var Route$11 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./routes-f-bObYxp.mjs");
var Route$10 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./dashboard.index-CEdspemH.mjs");
var Route$9 = createFileRoute("/dashboard/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./dashboard.templates-D3vYcBZU.mjs");
var Route$8 = createFileRoute("/dashboard/templates")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./dashboard.settings-8Pz_ccnd.mjs");
var Route$7 = createFileRoute("/dashboard/settings")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./dashboard.projects-DEY7H1p3.mjs");
var Route$6 = createFileRoute("/dashboard/projects")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dashboard.profile-D-NinWOn.mjs");
var Route$5 = createFileRoute("/dashboard/profile")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./dashboard.optimizer-D3Tupk3x.mjs");
var Route$4 = createFileRoute("/dashboard/optimizer")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./dashboard.history-v93sN8gw.mjs");
var Route$3 = createFileRoute("/dashboard/history")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./dashboard.generator-D8kAW8N-.mjs");
var Route$2 = createFileRoute("/dashboard/generator")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./dashboard.components-BVMGJpZ1.mjs");
var Route$1 = createFileRoute("/dashboard/components")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./dashboard.chat-BSogS1ce.mjs");
var Route = createFileRoute("/dashboard/chat")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var DashboardRoute = Route$12.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$13
});
var AuthRoute = Route$11.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var DashboardIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => DashboardRoute
});
var DashboardTemplatesRoute = Route$8.update({
	id: "/templates",
	path: "/templates",
	getParentRoute: () => DashboardRoute
});
var DashboardSettingsRoute = Route$7.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => DashboardRoute
});
var DashboardProjectsRoute = Route$6.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => DashboardRoute
});
var DashboardProfileRoute = Route$5.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => DashboardRoute
});
var DashboardOptimizerRoute = Route$4.update({
	id: "/optimizer",
	path: "/optimizer",
	getParentRoute: () => DashboardRoute
});
var DashboardHistoryRoute = Route$3.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => DashboardRoute
});
var DashboardGeneratorRoute = Route$2.update({
	id: "/generator",
	path: "/generator",
	getParentRoute: () => DashboardRoute
});
var DashboardComponentsRoute = Route$1.update({
	id: "/components",
	path: "/components",
	getParentRoute: () => DashboardRoute
});
var DashboardChatRoute = Route.update({
	id: "/chat",
	path: "/chat",
	getParentRoute: () => DashboardRoute
});
var DashboardTemplatesIdRoute = Route$15.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => DashboardTemplatesRoute
});
var DashboardComponentsRouteChildren = { DashboardComponentsIdRoute: Route$14.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => DashboardComponentsRoute
}) };
var DashboardComponentsRouteWithChildren = DashboardComponentsRoute._addFileChildren(DashboardComponentsRouteChildren);
var DashboardTemplatesRouteChildren = { DashboardTemplatesIdRoute };
var DashboardRouteChildren = {
	DashboardChatRoute,
	DashboardComponentsRoute: DashboardComponentsRouteWithChildren,
	DashboardGeneratorRoute,
	DashboardHistoryRoute,
	DashboardOptimizerRoute,
	DashboardProfileRoute,
	DashboardProjectsRoute,
	DashboardSettingsRoute,
	DashboardTemplatesRoute: DashboardTemplatesRoute._addFileChildren(DashboardTemplatesRouteChildren),
	DashboardIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthRoute,
	DashboardRoute: DashboardRoute._addFileChildren(DashboardRouteChildren)
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
