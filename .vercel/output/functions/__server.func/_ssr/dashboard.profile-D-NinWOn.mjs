import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-B4oW4G2w.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { $ as Check, M as LoaderCircle, P as Layers, T as Pen, i as X, it as Award, p as Sparkles, tt as Bot, v as Save } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.profile-D-NinWOn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [displayName, setDisplayName] = (0, import_react.useState)("");
	const [fieldOfStudy, setFieldOfStudy] = (0, import_react.useState)("Electrical & Electronic Engineering");
	const [bio, setBio] = (0, import_react.useState)("Building circuits and coding MCUs.");
	const [favoriteMcu, setFavoriteMcu] = (0, import_react.useState)("Arduino Uno");
	const [stats] = (0, import_react.useState)({
		projects: "12",
		components: "38",
		aiRequests: "127",
		streak: "6d"
	});
	(0, import_react.useEffect)(() => {
		async function loadProfile() {
			const { data } = await supabase.auth.getUser();
			setUser(data.user);
			if (data.user) {
				const meta = data.user.user_metadata || {};
				const localDataStr = localStorage.getItem(`profile_${data.user.id}`);
				if (localDataStr) try {
					const localData = JSON.parse(localDataStr);
					setDisplayName(localData.displayName || meta.display_name || data.user.email?.split("@")[0] || "Student");
					setFieldOfStudy(localData.fieldOfStudy || meta.field_of_study || "Electrical & Electronic Engineering");
					setBio(localData.bio || meta.bio || "Building circuits and coding MCUs.");
					setFavoriteMcu(localData.favoriteMcu || meta.favorite_mcu || "Arduino Uno");
					return;
				} catch (e) {}
				setDisplayName(meta.display_name || data.user.email?.split("@")[0] || "Student");
				setFieldOfStudy(meta.field_of_study || "Electrical & Electronic Engineering");
				setBio(meta.bio || "Building circuits and coding MCUs.");
				setFavoriteMcu(meta.favorite_mcu || "Arduino Uno");
			} else {
				const localDataStr = localStorage.getItem("profile_dev");
				if (localDataStr) try {
					const localData = JSON.parse(localDataStr);
					setDisplayName(localData.displayName || "Developer");
					setFieldOfStudy(localData.fieldOfStudy || "Electrical & Electronic Engineering");
					setBio(localData.bio || "Building circuits and coding MCUs.");
					setFavoriteMcu(localData.favoriteMcu || "Arduino Uno");
					return;
				} catch (e) {}
				setDisplayName("Developer");
				setFieldOfStudy("Electrical & Electronic Engineering");
				setBio("Building circuits and coding MCUs.");
				setFavoriteMcu("Arduino Uno");
			}
		}
		loadProfile();
	}, []);
	async function handleSave() {
		setLoading(true);
		try {
			if (user) {
				const localData = {
					displayName,
					fieldOfStudy,
					bio,
					favoriteMcu
				};
				localStorage.setItem(`profile_${user.id || "dev"}`, JSON.stringify(localData));
				if (user.email === "developer@circuitmind.local") toast.success("Profile saved locally!");
				else {
					const { error } = await supabase.auth.updateUser({ data: {
						display_name: displayName,
						field_of_study: fieldOfStudy,
						bio,
						favorite_mcu: favoriteMcu
					} });
					if (error) throw error;
					toast.success("Profile updated successfully!");
				}
			}
			setIsEditing(false);
		} catch (err) {
			toast.error("Failed to update profile: " + err.message);
		} finally {
			setLoading(false);
		}
	}
	const name = displayName || user?.email?.split("@")[0] || "Student";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl p-6 md:p-10 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start gap-4 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-20 place-items-center rounded-2xl bg-gradient-brand text-3xl font-bold text-white shadow-lg shadow-brand/20",
							children: name.slice(0, 1).toUpperCase()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-2xl font-bold tracking-tight",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-brand/15 px-2.5 py-0.5 text-[10px] font-semibold text-brand border border-brand/25",
									children: [favoriteMcu, " Enthusiast"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: user?.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-brand font-medium mt-1",
								children: fieldOfStudy
							})
						] })]
					}),
					!isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setIsEditing(true),
						className: "inline-flex items-center gap-2 rounded-xl bg-secondary hover:bg-secondary/80 px-4 py-2.5 text-sm font-medium text-foreground transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "size-4" }), " Edit profile"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIsEditing(false),
							className: "inline-flex items-center gap-2 rounded-xl bg-card border border-border hover:bg-accent px-4 py-2.5 text-sm font-medium text-foreground transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), " Cancel"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleSave,
							disabled: loading,
							className: "inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-medium text-white glow-brand transition disabled:opacity-75",
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Save"]
						})]
					})
				]
			}),
			isEditing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6 md:p-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold border-b border-border/50 pb-2",
					children: "Edit Profile Settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
								children: "Display Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: displayName,
								onChange: (e) => setDisplayName(e.target.value),
								className: "input w-full bg-background/50 border-border/60 hover:border-brand/40 focus:border-brand",
								placeholder: "Full Name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
								children: "Field of Study"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: fieldOfStudy,
								onChange: (e) => setFieldOfStudy(e.target.value),
								className: "input w-full bg-background/50 border-border/60 hover:border-brand/40 focus:border-brand select",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Electrical & Electronic Engineering",
										children: "Electrical & Electronic Engineering"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Computer Science & Engineering",
										children: "Computer Science & Engineering"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Robotics & Automation",
										children: "Robotics & Automation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Mechanical Engineering",
										children: "Mechanical Engineering"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "IoT & Embedded Systems",
										children: "IoT & Embedded Systems"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Other Technology Field",
										children: "Other Field"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
								children: "Favorite Microcontroller"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: favoriteMcu,
								onChange: (e) => setFavoriteMcu(e.target.value),
								className: "input w-full bg-background/50 border-border/60 hover:border-brand/40 focus:border-brand select",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Arduino Uno",
										children: "Arduino Uno R3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "ESP32",
										children: "ESP32 DevKit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "ESP8266",
										children: "ESP8266 NodeMCU"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Raspberry Pi Pico",
										children: "Raspberry Pi Pico"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "STM32 Blue Pill",
										children: "STM32 Blue Pill"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
								children: "Bio / Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: bio,
								onChange: (e) => setBio(e.target.value),
								rows: 3,
								className: "input w-full bg-background/50 border-border/60 hover:border-brand/40 focus:border-brand py-2 resize-none",
								placeholder: "Write a brief description of yourself..."
							})]
						})
					]
				})]
			}),
			!isEditing && bio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2",
					children: "About Me"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-foreground/80 leading-relaxed italic",
					children: [
						"\"",
						bio,
						"\""
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Save,
						label: "Projects",
						value: stats.projects
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Layers,
						label: "Components",
						value: stats.components
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Bot,
						label: "AI requests",
						value: stats.aiRequests
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Sparkles,
						label: "Streak",
						value: stats.streak
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 h-full w-1.5 bg-gradient-brand" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold tracking-tight",
							children: "Achievements & Milestones"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2.5",
						children: [
							{
								name: "First Circuit",
								desc: "Designed your first schematic"
							},
							{
								name: "10 Projects Completed",
								desc: "Built 10 circuit designs"
							},
							{
								name: "IoT Builder",
								desc: "Used ESP32 or ESP8266 boards"
							},
							{
								name: "Robotics Rookie",
								desc: "Programmed motor drivers"
							},
							{
								name: "Optimizer Pro",
								desc: "Successfully optimized a BOM table"
							}
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col rounded-2xl border border-border/60 bg-card/40 px-4 py-3 hover:border-brand/35 transition cursor-default",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-xs text-foreground",
								children: a.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground mt-0.5",
								children: a.desc
							})]
						}, a.name))
					})
				]
			})
		]
	});
}
function Stat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-xs text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }),
				" ",
				label
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-2xl font-semibold",
			children: value
		})]
	});
}
//#endregion
export { Profile as component };
