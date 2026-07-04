import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bot,
  Save,
  Layers,
  Sparkles,
  ArrowRight,
  Search,
  Cpu,
} from "lucide-react";


export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

const STATS = [
  { label: "Projects created", value: "12", icon: Save },
  { label: "Components used", value: "38", icon: Layers },
  { label: "AI requests", value: "127", icon: Bot },
  { label: "Saved circuits", value: "7", icon: Sparkles },
];

function DashboardHome() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">Dashboard</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
            Welcome back — what are we building today?
          </h1>
        </div>
        <Link
          to="/dashboard/chat"
          className="inline-flex items-center gap-2 self-start rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-medium text-white glow-brand hover:brightness-110 transition md:self-auto"
        >
          <Sparkles className="size-4" /> New AI project
        </Link>
      </div>

      <div className="mt-6">
        <div className="glass flex items-center gap-3 rounded-2xl p-3">
          <Search className="ml-2 size-4 text-muted-foreground" />
          <input
            className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
            placeholder="Search components…"
          />
          <span className="hidden rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground md:block">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <s.icon className="size-4" />
              {s.label}
            </div>
            <div className="mt-2 text-2xl font-semibold">{s.value}</div>
          </motion.div>
        ))}
      </div>





      <section className="mt-10">
        <div className="glass flex flex-col items-start justify-between gap-4 rounded-2xl p-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-white">
              <Cpu className="size-6" />
            </div>
            <div>
              <div className="font-semibold">Try the Optimizer</div>
              <div className="text-sm text-muted-foreground">
                Paste your BOM — CircuitMind finds cheaper, cooler, simpler parts.
              </div>
            </div>
          </div>
          <Link
            to="/dashboard/optimizer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white"
          >
            Optimize a circuit <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}