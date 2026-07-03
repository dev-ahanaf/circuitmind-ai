import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { TEMPLATES } from "@/lib/components-data";
import { BookOpen, Search } from "lucide-react";

export const Route = createFileRoute("/dashboard/templates")({
  component: TemplatesPage,
});

function TemplatesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(TEMPLATES.map((t) => t.category)))];
  const filtered = useMemo(() => TEMPLATES.filter((t) => (cat === "All" || t.category === cat) && (q === "" || t.title.toLowerCase().includes(q.toLowerCase()) || t.description.toLowerCase().includes(q.toLowerCase()))), [q, cat]);
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-white"><BookOpen className="size-5" /></div>
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">Project Templates</div>
          <h1 className="text-2xl font-semibold tracking-tight">Start from a ready template</h1>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <div className="glass flex flex-1 items-center gap-2 rounded-xl p-2"><Search className="ml-1 size-4 text-muted-foreground" /><input className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none" placeholder="Search templates…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div className="flex flex-wrap gap-1.5">{cats.map((c) => (<button key={c} onClick={() => setCat(c)} className={`rounded-md border px-2.5 py-1 text-xs ${cat === c ? "border-brand bg-gradient-brand/15" : "border-border text-muted-foreground hover:text-foreground"}`}>{c}</button>))}</div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <Link key={t.id} to="/dashboard/templates/$id" params={{ id: t.id }} className="glass group rounded-2xl p-5 hover:border-brand/50 transition">
            <div className="flex items-center justify-between text-xs"><span className="rounded-full bg-secondary/50 px-2 py-0.5">{t.category}</span><span className="text-muted-foreground">${t.cost} · {t.difficulty}</span></div>
            <div className="mt-3 font-semibold">{t.title}</div>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{t.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">{t.components.slice(0, 4).map((c) => (<span key={c} className="rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">{c}</span>))}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}