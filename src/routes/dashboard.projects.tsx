import { createFileRoute, Link } from "@tanstack/react-router";
import { Save, Sparkles } from "lucide-react";
import { TEMPLATES } from "@/lib/components-data";

export const Route = createFileRoute("/dashboard/projects")({
  component: SavedProjects,
});

function SavedProjects() {
  const projects = TEMPLATES.slice(0, 6);
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-white"><Save className="size-5" /></div>
          <div>
            <div className="text-xs uppercase tracking-widest text-brand">Saved Projects</div>
            <h1 className="text-2xl font-semibold tracking-tight">Your circuit designs</h1>
          </div>
        </div>
        <Link to="/dashboard/chat" className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white"><Sparkles className="size-4" /> New project</Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((t, i) => (
          <Link key={t.id} to="/dashboard/templates/$id" params={{ id: t.id }} className="glass rounded-2xl p-5 hover:border-brand/50 transition">
            <div className="text-xs text-muted-foreground">Saved · {i + 1}d ago</div>
            <div className="mt-2 font-semibold">{t.title}</div>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{t.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}