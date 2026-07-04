import { o as __toESM } from "../_runtime.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-B4oW4G2w.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as BrandMark } from "./brand-mark-DxT1qhK6.mjs";
import { M as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-C0DbhX9l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then((res) => {
			if ((res?.data)?.session) navigate({ to: "/dashboard" });
		});
	}, [navigate]);
	async function submit(e) {
		e.preventDefault();
		setLoading(true);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: `${window.location.origin}/dashboard`,
						data: { display_name: name }
					}
				});
				if (error) throw error;
				toast.success("Welcome to CircuitMind AI!");
				navigate({ to: "/dashboard" });
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Signed in");
				navigate({ to: "/dashboard" });
			}
		} catch (err) {
			toast.error(err.message);
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.22_285/0.25),transparent)]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden md:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "mb-8 inline-flex items-center gap-2 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { size: 32 }), "CircuitMind AI"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl font-semibold tracking-tight",
						children: [
							"Design smarter ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "circuits"
							}),
							" with AI."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-muted-foreground",
						children: "Join thousands of EEE, robotics, and IoT students building faster with AI-generated schematics, code, and BOMs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Free 10 AI generations / month" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ 20+ ready templates for Arduino, ESP32, STM32" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Export professional PDF reports" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass mx-auto w-full max-w-md rounded-2xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 flex md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { size: 32 }), "CircuitMind AI"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: mode === "signin" ? "Welcome back" : "Create your account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: mode === "signin" ? "Sign in to continue building" : "Start designing in seconds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "mt-6 space-y-3",
						children: [
							mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: name,
									onChange: (e) => setName(e.target.value),
									className: "input",
									placeholder: "Ada Lovelace",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									className: "input",
									placeholder: "you@school.edu",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Password",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									className: "input",
									minLength: 6,
									placeholder: "••••••••",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 font-medium text-white glow-brand hover:brightness-110 disabled:opacity-70 transition",
								children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), mode === "signin" ? "Sign in" : "Create account"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigate({ to: "/dashboard" }),
						className: "mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-brand/40 bg-brand/5 px-4 py-2.5 text-sm font-medium text-brand hover:bg-brand/10 transition",
						children: "🛠️ Developer Bypass Login"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 text-center text-sm text-muted-foreground",
						children: mode === "signin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"No account?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-foreground underline",
								onClick: () => setMode("signup"),
								children: "Sign up"
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Have an account?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-foreground underline",
								onClick: () => setMode("signin"),
								children: "Sign in"
							})
						] })
					})
				]
			})]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium text-muted-foreground",
			children: label
		}), children]
	});
}
//#endregion
export { AuthPage as component };
