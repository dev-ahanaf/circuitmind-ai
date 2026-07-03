import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Github } from "lucide-react";
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
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function google() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) {
      toast.error(error.message);
      return;
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

          <button
            onClick={google}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium hover:bg-accent transition"
          >
            <GoogleIcon /> Continue with Google
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={submit} className="space-y-3">
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

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.9 3.4 14.7 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z" />
    </svg>
  );
}