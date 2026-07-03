import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from "react";
import { BrandMark } from "../components/brand-mark";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Sparkles,
  Cable,
  Bot,
  CircuitBoard,
  FileText,
  Github,
  Twitter,
  ArrowRight,
  Check,
  MessageSquareCode,
  Wrench,
  Search,
  ShieldCheck,
  Layers,
  Sun,
  Moon,
  ArrowUp,
} from "lucide-react";
import heroImg from "@/assets/hero-circuit.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
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
    <div className="min-h-screen">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <LogosStrip />
      <Features />
      <HowItWorks />
      <ShowcaseChat />
      <Templates />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

function Nav({ theme, toggleTheme }: { theme: "dark" | "light"; toggleTheme: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 backdrop-blur-xl bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <BrandMark />
          <span>CircuitMind AI</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-border/60 p-2 text-muted-foreground hover:text-foreground hover:border-brand/40 bg-card/40 transition-colors"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link to="/auth" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
            Sign in
          </Link>
          <Link
            to="/auth"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-[0_6px_20px_-6px_oklch(0.6_0.22_285/0.7)] hover:brightness-110 transition"
          >
            Start free <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}



function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.22_285/0.35),transparent)]" />
        <FloatingCircuit />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-24 pt-20 lg:grid-cols-2 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-brand" />
            AI-powered circuit design for EEE students
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Design smarter{" "}
            <span className="text-gradient-brand">circuits</span> with AI.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Describe your idea — get a complete component list, wiring diagram, breadboard
            layout, Arduino code, cost estimate, and project documentation in seconds.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 font-medium text-white glow-brand hover:brightness-110 transition"
            >
              Start building free <ArrowRight className="size-4" />
            </Link>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 font-medium hover:bg-card transition"
            >
              Watch demo
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Check className="size-4 text-brand" /> No credit card</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-brand" /> Arduino & ESP32</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-brand" /> BOM export</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-2 shadow-[0_30px_80px_-30px_oklch(0.05_0_0/0.9)]">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src={heroImg}
                alt="Neon circuit board with holographic component overlays"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {["Arduino Uno", "ESP32", "L298N", "HC-SR04", "TB6612FNG"].map((c) => (
                  <span key={c} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs backdrop-blur">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-brand-glow/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCircuit() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg" x1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.7 0.2 275)" />
          <stop offset="1" stopColor="oklch(0.72 0.22 310)" />
        </linearGradient>
      </defs>
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1={80 * i}
          y1={0}
          x2={80 * i + 200}
          y2={600}
          stroke="url(#cg)"
          strokeWidth="1"
          strokeDasharray="6 12"
          className="animate-dash"
        />
      ))}
    </svg>
  );
}

function LogosStrip() {
  const items = ["Arduino", "ESP32", "STM32", "Raspberry Pi", "8051", "PIC", "Teensy"];
  return (
    <div className="border-y border-border/50 bg-card/30 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-sm text-muted-foreground">
        <span className="uppercase tracking-widest text-xs">Supports</span>
        {items.map((i) => (
          <span key={i} className="font-medium text-foreground/70">{i}</span>
        ))}
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: Bot, title: "AI Circuit Generator", desc: "Describe your project — get a full circuit design with wiring, code, and BOM." },
  { icon: Cable, title: "Wiring & Breadboard", desc: "Clean pin-by-pin connection tables and conceptual breadboard layouts." },
  { icon: MessageSquareCode, title: "Arduino Code Included", desc: "Ready-to-flash starter sketches with comments for every generated project." },
  { icon: Layers, title: "Component Library", desc: "Curated database of sensors, ICs, modules, and MCUs with datasheets & alternatives." },
  { icon: Wrench, title: "Circuit Optimizer", desc: "Paste your BOM, get cheaper alternatives, lower-power parts, and simpler wiring." },
  { icon: FileText, title: "PDF Reports", desc: "Export a professional project report — perfect for lab submissions and showcases." },
  { icon: Search, title: "Templates for Robotics & IoT", desc: "Line follower, obstacle avoider, ESP32 home automation, smart irrigation, and more." },
  { icon: ShieldCheck, title: "Safety-Aware Answers", desc: "Voltage, current, and heat warnings so students don't fry their boards." },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="Features" title="Everything a student needs to build real circuits" />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="glass group rounded-2xl p-5 hover:-translate-y-1 hover:border-brand/50 transition"
          >
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <f.icon className="size-5" />
            </div>
            <div className="font-semibold">{f.title}</div>
            <div className="mt-1.5 text-sm text-muted-foreground">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Describe your idea", desc: "Tell CircuitMind what you want to build — from line followers to ESP32 home automation." },
    { n: "02", title: "AI designs the circuit", desc: "Get components, wiring, breadboard layout, Arduino code, and cost — all in one place." },
    { n: "03", title: "Build & export", desc: "Save, iterate, or export a polished PDF report ready for your instructor." },
  ];
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="How it works" title="From idea to working circuit in 3 steps" />
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="glass rounded-2xl p-6">
            <div className="text-gradient-brand text-3xl font-semibold">{s.n}</div>
            <div className="mt-2 text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShowcaseChat() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="Product" title="One AI, tuned for electronics" />
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="glass rounded-2xl p-6 lg:col-span-3">
          <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Assistant</div>
          <div className="space-y-3 text-sm">
            <div className="rounded-xl bg-gradient-brand/10 px-4 py-3">
              <div className="text-xs text-muted-foreground">You</div>
              <div>Build me a Line Following Robot with Arduino Uno</div>
            </div>
            <div className="rounded-xl border border-border bg-card/50 px-4 py-3">
              <div className="text-xs text-muted-foreground">CircuitMind AI</div>
              <div className="mt-1 space-y-2">
                <div className="font-semibold">Line Following Robot — Beginner · ~ $28</div>
                <div className="text-muted-foreground">Uses 2× IR sensors, L298N motor driver, 2× DC gear motors, and an Arduino Uno. Wire IR outputs to D2/D3, motor driver IN1–IN4 to D5–D8...</div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Arduino Uno", "L298N", "IR ×2", "N20 motors", "Li-ion 2S"].map((c) => (
                    <span key={c} className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-xs">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <StatCard icon={Zap} label="Faster than YouTube tutorials" value="~15×" />
          <StatCard icon={Cpu} label="Supported MCUs" value="8+" />
          <StatCard icon={CircuitBoard} label="Ready templates" value="20+" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: typeof Zap; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-lg bg-gradient-brand text-white">
          <Icon className="size-5" />
        </div>
        <div>
          <div className="text-2xl font-semibold">{value}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
}

function Templates() {
  const tpls = [
    "Line Follower Robot",
    "Obstacle Avoiding Robot",
    "Bluetooth Controlled Car",
    "ESP32 Home Automation",
    "Smart Irrigation System",
    "IoT Weather Station",
    "555 Timer Blinker",
    "Regulated Power Supply",
  ];
  return (
    <section id="templates" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="Templates" title="Start from 20+ project blueprints" />
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {tpls.map((t) => (
          <div key={t} className="glass rounded-xl p-4 hover:border-brand/50 transition">
            <div className="mb-2 inline-flex size-8 items-center justify-center rounded-md bg-gradient-brand text-white">
              <CircuitBoard className="size-4" />
            </div>
            <div className="text-sm font-medium">{t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const q = [
    { name: "Aisha K.", role: "EEE, 3rd year", text: "Built my first ESP32 IoT project in an afternoon. The BOM export saved me hours." },
    { name: "Marco P.", role: "Robotics club", text: "The wiring tables are gold. No more re-watching YouTube tutorials frame-by-frame." },
    { name: "Dr. Reyes", role: "Faculty mentor", text: "I recommend it to every first-year lab student. Safety warnings alone are worth it." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="Loved by students" title="Trusted by builders worldwide" />
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {q.map((t) => (
          <div key={t.name} className="glass rounded-2xl p-6">
            <p className="text-sm text-foreground/90">"{t.text}"</p>
            <div className="mt-4 text-sm">
              <div className="font-medium">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: "Free", price: "$0", desc: "Perfect for students getting started", features: ["10 AI generations / month", "Community templates", "Basic BOM export"], cta: "Start free" },
    { name: "Pro", price: "$9", desc: "For serious hobbyists & clubs", features: ["Unlimited AI generations", "PDF reports", "Circuit optimizer", "Priority models"], cta: "Get Pro", highlight: true },
    { name: "Team", price: "$29", desc: "For classrooms & labs", features: ["Everything in Pro", "Shared project library", "Admin dashboard", "Priority support"], cta: "Contact us" },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="Pricing" title="Simple pricing for every builder" />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`glass rounded-2xl p-6 ${t.highlight ? "border-brand/60 relative glow-brand" : ""}`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-6 rounded-full bg-gradient-brand px-3 py-1 text-xs text-white">Most popular</span>
            )}
            <div className="text-sm font-medium">{t.name}</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-semibold">{t.price}</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="size-4 text-brand" /> {f}</li>
              ))}
            </ul>
            <Link
              to="/auth"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${t.highlight ? "bg-gradient-brand text-white hover:brightness-110" : "border border-border hover:bg-card"}`}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faq = [
    { q: "Is CircuitMind AI free for students?", a: "Yes — the free tier gives you 10 AI generations per month, more than enough to build a full lab project." },
    { q: "Which microcontrollers are supported?", a: "Arduino (Uno/Nano/Mega), ESP32, ESP8266, STM32, Raspberry Pi Pico, 8051, and more." },
    { q: "Can it generate Arduino code?", a: "Every project includes a working starter sketch with comments explaining each block." },
    { q: "Can I export my project as PDF?", a: "Yes — one click gets you a printable report with BOM, wiring, and code." },
    { q: "Will it warn me about dangerous voltages?", a: "The AI is trained to flag risky voltage/current combinations and to prefer safer alternatives." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />
      <div className="mt-10 space-y-3">
        {faq.map((f) => (
          <details key={f.q} className="glass group rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium">
              {f.q}
              <span className="text-muted-foreground transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-semibold"><BrandMark /> CircuitMind AI</div>
            <p className="mt-3 text-sm text-muted-foreground">
              AI-powered circuit design for the next generation of EEE, robotics, and IoT builders.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
            <div>
              <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Product</div>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-foreground text-muted-foreground">Features</a></li>
                <li><a href="#templates" className="hover:text-foreground text-muted-foreground">Templates</a></li>
                <li><a href="#pricing" className="hover:text-foreground text-muted-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Company</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground text-muted-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground text-muted-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground text-muted-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Social</div>
              <ul className="space-y-2">
                <li><a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Twitter className="size-4" /> Twitter</a></li>
                <li><a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Github className="size-4" /> GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} CircuitMind AI. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span>Built for engineering students.</span>
            <span className="text-border">|</span>
            <span>Developed by <span className="font-semibold text-foreground hover:text-brand transition cursor-pointer">Ahanaf</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-brand">{eyebrow}</div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
    </div>
  );
}
