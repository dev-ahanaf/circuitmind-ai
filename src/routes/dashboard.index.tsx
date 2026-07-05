import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Bot,
  Save,
  Layers,
  Sparkles,
  ArrowRight,
  Cpu,
  Cable,
  Wrench,
  History,
  FileDown,
  Clock,
  TrendingUp,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

const STATS = [
  { label: "Projects created", value: "12", trend: "+3 this week", icon: Save, bgGrad: "from-blue-500/10 to-blue-600/10 text-blue-400 border-blue-500/20" },
  { label: "Components used", value: "38", trend: "+12 new component parts", icon: Layers, bgGrad: "from-purple-500/10 to-purple-600/10 text-purple-400 border-purple-500/20" },
  { label: "AI requests", value: "127", trend: "+24% queries this month", icon: Bot, bgGrad: "from-pink-500/10 to-pink-600/10 text-pink-400 border-pink-500/20" },
  { label: "Saved circuits", value: "7", trend: "Ready to export report", icon: Sparkles, bgGrad: "from-amber-500/10 to-amber-600/10 text-amber-400 border-amber-500/20" },
];

const ACTIONS = [
  { to: "/dashboard/generator", title: "Generate Circuit", desc: "Create complete schematics and code from description.", icon: Cable },
  { to: "/dashboard/chat", title: "Ask AI Assistant", desc: "Interact with our AI to troubleshoot or redesign circuits.", icon: Bot },
  { to: "/dashboard/optimizer", title: "Optimize BOM", desc: "Paste parts list to reduce cost and power footprint.", icon: Wrench },
  { to: "/dashboard/components", title: "Browse Components", desc: "Search and configure elements in our library.", icon: Layers },
  { to: "/dashboard/history", title: "View History", desc: "Access previously generated designs and source files.", icon: History },
  { to: "/dashboard/chat", title: "Export Reports", desc: "Export professional PDF reports with visual schematics.", icon: FileDown },
];

const RECENT_PROJECTS = [
  { id: "smart-door", title: "Arduino Smart Door Lock", type: "Home Automation", components: 5, time: "2 hours ago", status: "Completed", statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" },
  { id: "line-follower", title: "Line Follower Robot", type: "Robotics", components: 8, time: "Yesterday", status: "In Progress", statusColor: "text-amber-400 border-amber-500/20 bg-amber-500/5" },
  { id: "iot-weather", title: "ESP32 Weather Station", type: "IoT / Wireless", components: 6, time: "3 days ago", status: "Completed", statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" },
];

const TIPS = [
  { title: "How to export schematic diagram", desc: "Open any template, click Build, and select the PDF, JSON, or Code export buttons in the generated output header." },
  { title: "Selecting the right voltage level", desc: "Always check sensor operating voltages (e.g. 3.3V vs 5V) in your BOM to prevent pin damage." },
  { title: "Understanding microcontroller pinouts", desc: "Hover over microcontroller pins in the visual canvas to see their multiplexed functions." },
];

function DashboardHome() {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    window.location.href = "/dashboard/generator?desc=" + encodeURIComponent(prompt);
  };

  const handleChat = () => {
    if (!prompt.trim()) return;
    window.location.href = "/dashboard/chat?msg=" + encodeURIComponent(prompt);
  };

  const fillPrompt = (text: string) => {
    setPrompt(text);
  };

  return (
    <div className="dashboard-grid-bg min-h-screen px-6 py-8 md:px-10">
      
      {/* 1. Welcome Header */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">Dashboard</div>
            <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Welcome back — what are we building today?
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Generate circuits, optimize BOMs, and export production-ready reports.
            </p>
          </div>
          <Link
            to="/dashboard/chat"
            className="button-glow-effect inline-flex items-center gap-2 self-start rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-white md:self-auto"
          >
            <Sparkles className="size-4" /> New AI project
          </Link>
        </div>

        {/* 2. Premium AI Command Panel */}
        <div className="mt-8 glass rounded-2xl p-6 border border-border/60">
          <div className="relative">
            <textarea
              className="w-full min-h-[90px] rounded-xl border border-border bg-card/45 p-4 pr-12 text-sm text-foreground outline-none placeholder:text-muted-foreground/75 focus:border-brand/45 focus:ring-1 focus:ring-brand/35 transition"
              placeholder="Describe your circuit idea... e.g. Arduino Smart Door Lock with keypad and servo"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="absolute right-4 bottom-4 flex gap-2">
              <button
                onClick={handleChat}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition"
              >
                Open AI Assistant
              </button>
              <button
                onClick={handleGenerate}
                className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-semibold text-white hover:brightness-110 transition"
              >
                Generate New Circuit
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground">Quick ideas:</span>
            <button
              onClick={() => fillPrompt("Arduino Smart Door Lock with keypad and servo")}
              className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground hover:border-brand/30 hover:text-foreground transition"
            >
              Smart door lock
            </button>
            <button
              onClick={() => fillPrompt("Line follower robot using L298N motor driver")}
              className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground hover:border-brand/30 hover:text-foreground transition"
            >
              Line follower robot
            </button>
            <button
              onClick={() => fillPrompt("ESP32 IoT weather station with DHT22 sensor")}
              className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground hover:border-brand/30 hover:text-foreground transition"
            >
              ESP32 IoT monitor
            </button>
            <button
              onClick={() => fillPrompt("Temperature alert buzzer system")}
              className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground hover:border-brand/30 hover:text-foreground transition"
            >
              Temperature alert system
            </button>
          </div>
        </div>

        {/* 3. Stats Row */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card-hover-effect glass rounded-2xl border border-border/40 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
                <div className={`grid size-8 place-items-center rounded-lg bg-gradient-to-br border ${s.bgGrad}`}>
                  <s.icon className="size-4" />
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">{s.value}</span>
              </div>
              <div className="mt-1 text-[10px] text-brand">{s.trend}</div>
            </motion.div>
          ))}
        </div>

        {/* 4. Main content grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* Left Column (2/3 width on large screens) */}
          <div className="space-y-6 lg:col-span-2">
            
            {/* Recent Projects */}
            <div className="glass rounded-2xl p-5 border border-border/40">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Clock className="size-4 text-brand" /> Recent Active Projects
                </h3>
                <Link to="/dashboard/history" className="text-xs text-brand hover:underline flex items-center gap-0.5">
                  View all history <ArrowRight className="size-3" />
                </Link>
              </div>
              <div className="mt-4 divide-y divide-border/20">
                {RECENT_PROJECTS.map((proj) => (
                  <div key={proj.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <div>
                      <div className="font-semibold text-sm text-foreground">{proj.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{proj.type}</span>
                        <span className="text-[10px] text-muted-foreground/60">•</span>
                        <span className="text-xs text-muted-foreground">{proj.components} components</span>
                        <span className="text-[10px] text-muted-foreground/60">•</span>
                        <span className="text-xs text-muted-foreground/60">{proj.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${proj.statusColor}`}>
                        {proj.status}
                      </span>
                      <Link
                        to={`/dashboard/templates/${proj.id}`}
                        className="rounded-lg border border-border bg-card/45 px-2.5 py-1 text-xs hover:bg-accent text-foreground transition"
                      >
                        Open
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-2xl p-5 border border-border/40">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 border-b border-border/40 pb-3">
                <Layers className="size-4 text-brand" /> Quick Actions
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {ACTIONS.map((a) => (
                  <Link
                    key={a.title}
                    to={a.to}
                    className="card-hover-effect flex items-start gap-3 rounded-xl border border-border/30 bg-card/25 p-3.5"
                  >
                    <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-brand/10 text-brand border border-brand/20">
                      <a.icon className="size-4.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground flex items-center gap-1">
                        {a.title} <ArrowUpRight className="size-3 text-muted-foreground" />
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{a.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (1/3 width on large screens) */}
          <div className="space-y-6">
            
            {/* Usage Progress Tracker */}
            <div className="glass rounded-2xl p-5 border border-border/40">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="size-4 text-brand" /> Usage Breakdown
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>AI Circuit Generations</span>
                    <span>7 / 10 used</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-brand animate-pulse-brand" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>PDF Report Exports</span>
                    <span>3 / 5 used</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-gradient-to-r from-blue-500 to-indigo-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Component Library Queries</span>
                    <span>Unlimited</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                  </div>
                </div>
              </div>
              <button
                onClick={() => toast.info("CircuitMind Pro plans are coming soon! You currently have full developer trial access. For larger team limits, contact Fayek Ahanaf at ahanaffayek@gmail.com.", { duration: 6000 })}
                className="button-glow-effect mt-5 w-full rounded-xl bg-gradient-brand py-2.5 text-xs font-semibold text-white hover:brightness-110 transition"
              >
                Upgrade to Pro
              </button>
            </div>

            {/* Optimizer Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand/20 via-brand-glow/10 to-transparent border border-brand/35 p-5">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10">
                <Cpu className="size-36 text-white" />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
                <Cpu className="size-4" /> BOM Optimizer
              </div>
              <h4 className="mt-2 text-base font-bold text-foreground">Save up to 45% on Component Cost</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Paste your Bill of Materials and CircuitMind will suggest cheaper, cooler, and simpler parts.
              </p>
              <Link
                to="/dashboard/optimizer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-3.5 py-1.5 text-xs font-semibold text-white hover:brightness-110 transition"
              >
                Optimize a circuit <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Tips / Getting Started Card */}
            <div className="glass rounded-2xl p-5 border border-border/40">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 border-b border-border/40 pb-3">
                <BookOpen className="size-4 text-brand" /> AI Engineering Tips
              </h3>
              <div className="mt-3 space-y-4">
                {TIPS.map((tip) => (
                  <div key={tip.title}>
                    <div className="text-xs font-semibold text-foreground">{tip.title}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{tip.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}