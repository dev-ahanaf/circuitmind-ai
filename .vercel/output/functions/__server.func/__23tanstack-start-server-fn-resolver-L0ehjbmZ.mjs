//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-L0ehjbmZ.js
var manifest = {
	"0244a6f65ad038764957de0b7e87d1e7beb0effd309eb10ec731a5acedd702ba": {
		functionName: "optimizeCircuit_createServerFn_handler",
		importer: () => import("./_ssr/ai.functions-CaJ-1WNY.mjs")
	},
	"08b923ccd2e1d7bb263c40841af06fe061b5f7ca95e4f4b07db599546490c4b8": {
		functionName: "chatCompletion_createServerFn_handler",
		importer: () => import("./_ssr/ai.functions-CaJ-1WNY.mjs")
	},
	"b676ab3ab16f4f7bebe0fa8a473a141e7beccc5689907d9f71b457d5e91c10ba": {
		functionName: "generateCircuit_createServerFn_handler",
		importer: () => import("./_ssr/ai.functions-CaJ-1WNY.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
