import { createFileRoute, Outlet, Link, useNavigate, useLocation, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import {
  CircuitBoard,
  Home,
  Bot,
  Cable,
  Layers,
  Wrench,
  BookOpen,
  History,
  User as UserIcon,
  Settings,
  LogOut,
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  ArrowUp,
} from "lucide-react";
import { toast } from "sonner";
import { BrandMark } from "../components/brand-mark";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    // Authentication redirect is bypassed to allow developer login access
    return;
  },
  component: DashboardLayout,
});

const NAV: Array<{ to: string; label: string; icon: typeof Home; exact?: boolean }> = [
  { to: "/dashboard", label: "Home", icon: Home, exact: true },
  { to: "/dashboard/chat", label: "AI Assistant", icon: Bot },
  { to: "/dashboard/generator", label: "Circuit Generator", icon: Cable },
  { to: "/dashboard/components", label: "Component Library", icon: Layers },
  { to: "/dashboard/templates", label: "Templates", icon: BookOpen },
  { to: "/dashboard/optimizer", label: "Optimizer", icon: Wrench },
  { to: "/dashboard/history", label: "History", icon: History },
];

function DashboardLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(() => {
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

  useEffect(() => {
    supabase.auth.getUser().then((res: any) => {
      const data = res?.data;
      if (data?.user) {
        setUser(data.user);
      } else {
        // Mock developer session for bypass mode
        setUser({
          id: "developer-session",
          email: "developer@circuitmind.local",
          user_metadata: { display_name: "Developer" },
        } as any);
      }
    });
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  async function signOut() {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-brand-glow/20 blur-3xl" />
      </div>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/60 bg-background/70 px-4 py-3 backdrop-blur md:hidden">
        <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
          <BrandMark size={28} />
          CircuitMind
        </Link>
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="rounded-lg border border-border p-2">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`${open ? "block" : "hidden"} fixed inset-x-0 top-[57px] z-20 border-b border-border bg-background/95 backdrop-blur md:sticky md:top-0 md:z-auto md:flex md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r md:border-border/60 md:bg-transparent md:backdrop-blur-none`}
        >
          <div className="flex h-full w-full flex-col p-4">
            <Link to="/dashboard" className="mb-6 hidden items-center gap-2 px-2 font-semibold md:flex">
              <BrandMark size={32} />
              CircuitMind AI
            </Link>
            <nav className="space-y-0.5">
              {NAV.map((item) => {
                const active = item.exact
                  ? loc.pathname === item.to
                  : loc.pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition ${
                      active
                        ? "bg-gradient-brand/15 text-foreground border border-brand/30"
                        : "text-muted-foreground hover:bg-card hover:text-foreground"
                    }`}
                  >
                    <item.icon className={`size-4 ${active ? "text-brand" : ""}`} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 rounded-xl border border-border bg-card/60 p-3">
              <div className="flex items-center gap-2 text-xs font-medium">
                <Sparkles className="size-3.5 text-brand" /> Free plan
              </div>
              <div className="mt-2 text-xs text-muted-foreground">7 / 10 generations used this month</div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[70%] bg-gradient-brand" />
              </div>
              <button className="mt-3 w-full rounded-md bg-gradient-brand py-1.5 text-xs font-medium text-white hover:brightness-110">
                Upgrade to Pro
              </button>
            </div>

            <div className="mt-auto space-y-0.5 pt-4">
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground"
              >
                <UserIcon className="size-4" /> Profile
              </Link>
              <Link
                to="/dashboard/settings"
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground"
              >
                <Settings className="size-4" /> Settings
              </Link>
              <button
                onClick={toggleTheme}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground transition mb-1"
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                Theme: {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
              <button
                onClick={signOut}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground"
              >
                <LogOut className="size-4" /> Sign out
              </button>
              <div className="mt-3 flex items-center gap-2 rounded-lg px-2 py-2">
                <div className="grid size-8 place-items-center rounded-full bg-gradient-brand text-xs font-semibold text-white">
                  {(user?.email || "?").slice(0, 1).toUpperCase()}
                </div>
                <div className="min-w-0 text-xs">
                  <div className="truncate text-foreground">
                    {user?.user_metadata?.display_name || user?.email?.split("@")[0] || "User"}
                  </div>
                  <div className="truncate text-muted-foreground">{user?.email}</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 flex flex-col min-h-screen">
          <div className="flex-1">
            <Outlet />
          </div>
          <footer className="py-4 text-center text-xs text-muted-foreground border-t border-border/20 bg-background/50">
            © {new Date().getFullYear()} CircuitMind AI. Developed by <span className="font-medium text-foreground">Ahanaf</span>
          </footer>
        </main>
      </div>
    </div>
  );
}