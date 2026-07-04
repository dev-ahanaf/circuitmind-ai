import { N as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as TEMPLATES } from "./components-data-BBD0b4nE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.templates._id-BZwkGzGw.js
var $$splitComponentImporter = () => import("./dashboard.templates._id-CrogSULQ.mjs");
var Route = createFileRoute("/dashboard/templates/$id")({
	loader: ({ params }) => {
		const t = TEMPLATES.find((x) => x.id === params.id);
		if (!t) throw notFound();
		return t;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
