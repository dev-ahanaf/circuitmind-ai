import { N as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as COMPONENTS } from "./components-data-BBD0b4nE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.components._id-CwK1iY73.js
var $$splitComponentImporter = () => import("./dashboard.components._id-BcrcNHBm.mjs");
var Route = createFileRoute("/dashboard/components/$id")({
	loader: ({ params }) => {
		const c = COMPONENTS.find((x) => x.id === params.id);
		if (!c) throw notFound();
		return c;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
