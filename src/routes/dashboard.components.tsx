import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { COMPONENTS } from "@/lib/components-data";
import { Layers, Search } from "lucide-react";

export const Route = createFileRoute("/dashboard/components")({
  component: ComponentsPage,
});

function ComponentsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(COMPONENTS.map((c) => c.category)))];
  const filtered = useMemo(() => COMPONENTS.filter((c) => (cat === "All" || c.category === cat) && (q === "" || c.name.toLowerCase().includes(q.toLowerCase()) || c.description.toLowerCase().includes(q.toLowerCase()))), [q, cat]);

  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-white"><Layers className="size-5" /></div>
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">Component Library</div>
          <h1 className="text-2xl font-semibold tracking-tight">Explore {COMPONENTS.length} components</h1>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <div className="glass flex flex-1 items-center gap-2 rounded-xl p-2">
          <Search className="ml-1 size-4 text-muted-foreground" />
          <input className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground" placeholder="Search components…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-md border px-2.5 py-1 text-xs transition ${cat === c ? "border-brand bg-gradient-brand/15 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <Link key={c.id} to="/dashboard/components/$id" params={{ id: c.id }} className="glass rounded-2xl p-4 hover:border-brand/50 transition">
            <div className="flex items-center justify-between text-xs"><span className="rounded-full bg-secondary/50 px-2 py-0.5">{c.category}</span><span className="text-muted-foreground">৳{c.price.toFixed(0)}</span></div>
            <div className="mt-3 font-semibold">{c.name}</div>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
            <div className="mt-3 flex gap-3 text-xs text-muted-foreground"><span>⚡ {c.voltage}</span><span>🔌 {c.current}</span></div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (<div className="mt-10 text-center text-sm text-muted-foreground">No components match your search.</div>)}
    </div>
  );
}