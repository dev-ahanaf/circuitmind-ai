import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { BrandMark } from "../components/brand-mark";


export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    supabase.auth.getSession().then((res: any) => {
      const data = res?.data;
      if (data?.session) navigate({ to: "/dashboard" });
    });
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { display_name: name },
          },
        });
        if (error) throw error;
        toast.success("Welcome to CircuitMind AI!");
        navigate({ to: "/dashboard" });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Signed in");
        navigate({ to: "/dashboard" });
      }
    } catch (err: any) {
      const msg = err.message || "";
      if (msg.toLowerCase().includes("rate limit")) {
        toast.error("Supabase security rate limit active. Please wait a few minutes, toggle a VPN, or use the 'Developer Bypass Login' button to test the dashboard instantly!", { duration: 8000 });
      } else {
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  }



  async function signInWithGoogle() {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.22_285/0.25),transparent)]" />
      </div>
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2">
        <div className="hidden md:block">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 font-semibold">
            <BrandMark size={32} />
            CircuitMind AI
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight">
            Design smarter <span className="text-gradient-brand">circuits</span> with AI.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Join thousands of EEE, robotics, and IoT students building faster with
            AI-generated schematics, code, and BOMs.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>✓ Free 10 AI generations / month</li>
            <li>✓ 20+ ready templates for Arduino, ESP32, STM32</li>
            <li>✓ Export professional PDF reports</li>
          </ul>
        </div>
        <div className="glass mx-auto w-full max-w-md rounded-2xl p-8">
          <div className="mb-6 flex md:hidden">
            <Link to="/" className="inline-flex items-center gap-2 font-semibold">
              <BrandMark size={32} />
              CircuitMind AI
            </Link>
          </div>
          <h2 className="text-2xl font-semibold">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "signin" ? "Sign in to continue building" : "Start designing in seconds"}
          </p>
 
          <form onSubmit={submit} className="mt-6 space-y-3">
            {mode === "signup" && (
              <Field label="Name">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  placeholder="Ada Lovelace"
                  required
                />
              </Field>
            )}
            <Field label="Email">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="you@school.edu"
                required
              />
            </Field>
            <Field label="Password">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                minLength={6}
                placeholder="••••••••"
                required
              />
            </Field>
            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 font-medium text-white glow-brand hover:brightness-110 disabled:opacity-70 transition"
            >
              {loading && <Loader2 className="size-4 animate-spin" />}
              {mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase">
              <span className="bg-[#0f071a]/95 px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={signInWithGoogle}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-card/50 hover:bg-accent px-4 py-2.5 text-sm font-semibold text-foreground hover:border-brand/40 transition"
          >
            <svg className="size-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Google
          </button>
 
          <button
            onClick={() => navigate({ to: "/dashboard" })}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-brand/40 bg-brand/5 px-4 py-2.5 text-sm font-medium text-brand hover:bg-brand/10 transition"
          >
            🛠️ Developer Bypass Login
          </button>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "signin" ? (
              <>
                No account?{" "}
                <button className="text-foreground underline" onClick={() => setMode("signup")}>
                  Sign up
                </button>
              </>
            ) : (
              <>
                Have an account?{" "}
                <button className="text-foreground underline" onClick={() => setMode("signin")}>
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
