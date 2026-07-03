import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { COMPONENTS, type ComponentItem } from "@/lib/components-data";
import { ArrowLeft, ExternalLink, Check, X } from "lucide-react";

export const Route = createFileRoute("/dashboard/components/$id")({
  loader: ({ params }) => {
    const c = COMPONENTS.find((x) => x.id === params.id);
    if (!c) throw notFound();
    return c;
  },
  component: ComponentDetail,
});

function ComponentDetail() {
  const c = Route.useLoaderData() as ComponentItem;
  return (
    <div className="mx-auto max-w-5xl p-6 md:p-10">
      <Link to="/dashboard/components" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3.5" /> Back to library</Link>
      <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">{c.category}</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{c.name}</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">{c.description}</p>
        </div>
        <div className="text-right"><div className="text-3xl font-semibold text-gradient-brand">${c.price.toFixed(2)}</div><div className="text-xs text-muted-foreground">approx. street price</div></div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Voltage">{c.voltage}</Card>
        <Card title="Current">{c.current}</Card>
        <Card title="Datasheet"><a href={c.datasheet} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand hover:underline">View <ExternalLink className="size-3" /></a></Card>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-5"><div className="mb-3 text-sm font-semibold">Pros</div><ul className="space-y-2 text-sm">{c.pros.map((p) => (<li key={p} className="flex items-start gap-2"><Check className="mt-0.5 size-4 text-brand" /> {p}</li>))}</ul></div>
        <div className="glass rounded-2xl p-5"><div className="mb-3 text-sm font-semibold">Cons</div><ul className="space-y-2 text-sm">{c.cons.map((p) => (<li key={p} className="flex items-start gap-2"><X className="mt-0.5 size-4 text-destructive" /> {p}</li>))}</ul></div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-5"><div className="mb-3 text-sm font-semibold">Applications</div><div className="flex flex-wrap gap-1.5">{c.applications.map((a) => (<span key={a} className="rounded-full border border-border px-2 py-0.5 text-xs">{a}</span>))}</div></div>
        <div className="glass rounded-2xl p-5"><div className="mb-3 text-sm font-semibold">Alternatives</div><div className="flex flex-wrap gap-1.5">{c.alternatives.map((a) => (<span key={a} className="rounded-full bg-gradient-brand/10 border border-brand/30 px-2 py-0.5 text-xs">{a}</span>))}</div></div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (<div className="glass rounded-xl p-4"><div className="text-xs text-muted-foreground">{title}</div><div className="mt-1 font-semibold">{children}</div></div>);
}