import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { BrandMark } from "../components/brand-mark";
import {
  GraduationCap,
  BookOpen,
  Code2,
  Heart,
  Github,
  Mail,
  ArrowLeft,
  Sun,
  Moon,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

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

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.22_285/0.15),transparent)]" />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-brand-glow/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 backdrop-blur-xl bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <BrandMark />
            <span>CircuitMind AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-xl border border-border/60 p-2 text-muted-foreground hover:text-foreground hover:border-brand/40 bg-card/40 transition-colors"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/40 px-4 py-2 text-sm font-medium text-foreground hover:border-brand/40 transition"
            >
              <ArrowLeft className="size-3.5" /> Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Intro Section */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">About Us</div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The Story Behind <span className="text-gradient-brand">CircuitMind AI</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CircuitMind AI is built with the mission to democratize hardware development. 
            By leveraging advanced AI models, we convert natural language prompts into working, 
            interactive circuit designs, starter code, and optimized parts lists.
          </p>
        </div>

        {/* Developer Bio Card */}
        <div className="glass mt-16 rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand/5 blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="size-32 rounded-2xl overflow-hidden border border-border shadow-lg bg-secondary/30">
                <img
                  src="/developer-photo.jpg"
                  alt="Fayek Ahanaf"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-background border border-border p-1.5 rounded-lg shadow-sm">
                <Code2 className="size-5 text-brand" />
              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Fayek Ahanaf (Ahanaf)</h2>
              <p className="text-sm font-medium text-brand mt-1">Project Head & Lead Developer</p>
              
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <GraduationCap className="size-4 text-brand" />
                  <span>Daffodil International University (DIU)</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <BookOpen className="size-4 text-brand" />
                  <span>Computing and Information System — 6th Semester Student</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border/60 pt-8">
            <h3 className="font-semibold text-lg mb-3">Vision & Development</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              As a Computing and Information System student, Ahanaf conceptualized CircuitMind AI to bridge the engineering gap between 
              writing software code and assembling electrical components. The application simplifies the 
              prototyping phase for student projects, hackathon prototypes, and rapid IoT trials. By compiling 
              datasheets, pin configurations, and firmware scaffolds into a visual interface, CircuitMind AI 
              drastically reduces the standard development loop.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/dev-ahanaf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2 text-xs font-medium hover:border-brand/40 transition"
              >
                <Github className="size-3.5" /> GitHub Profile
              </a>
              <a
                href="mailto:ahanaffayek@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2 text-xs font-medium hover:border-brand/40 transition"
              >
                <Mail className="size-3.5" /> Contact Developer
              </a>
            </div>
          </div>
        </div>

        {/* Technical Highlights / Why We Built It */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold flex items-center gap-2 text-base mb-2">
              <Heart className="size-4 text-brand" /> Student Focused
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tailored specifically to EEE, Robotics, and IoT engineering students to help them build projects without wire hookup confusion or missing setup templates.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold flex items-center gap-2 text-base mb-2">
              <Code2 className="size-4 text-brand" /> Smart Dual-AI Gateway
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Powered by advanced Google Gemini models with automatic, seamless failover logic to Groq Llama 3.3 to guarantee 100% platform uptime.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
