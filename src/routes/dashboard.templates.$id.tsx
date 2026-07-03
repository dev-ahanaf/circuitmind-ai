import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { TEMPLATES, type TemplateItem } from "@/lib/components-data";
import { generateCircuit } from "@/lib/ai.functions";
import { Markdown } from "@/components/markdown";
import { ArrowLeft, Sparkles, Loader2, Download, Info } from "lucide-react";
import { exportMarkdownToPDF } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { parseMarkdownSections } from "@/utils/parser";
import { CircuitRenderer } from "@/components/CircuitRenderer/CircuitRenderer";

export const Route = createFileRoute("/dashboard/templates/$id")({
  loader: ({ params }) => {
    const t = TEMPLATES.find((x) => x.id === params.id);
    if (!t) throw notFound();
    return t;
  },
  component: TemplateDetail,
});

function TemplateDetail() {
  const t = Route.useLoaderData() as TemplateItem;
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  async function build() {
    setLoading(true);
    try {
      const { content } = await generateCircuit({ data: { description: `${t.title}: ${t.description}. Use these components: ${t.components.join(", ")}.` } });
      setContent(content);
    } catch (err) {
      setContent("⚠️ Failed to generate: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const sections = parseMarkdownSections(content);

  return (
    <div className="mx-auto max-w-5xl p-6 md:p-10">
      <Link to="/dashboard/templates" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3.5" /> Back to templates</Link>
      <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">{t.category} · {t.difficulty}</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{t.title}</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">{t.description}</p>
        </div>
        <button onClick={build} disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-medium text-white glow-brand disabled:opacity-70">
          {loading ? <Loader2 className="size-4 animate-spin" /> : <Sparkles className="size-4" />}Build with AI
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="glass rounded-xl p-4"><div className="text-xs text-muted-foreground">Estimated cost</div><div className="mt-1 text-xl font-semibold">${t.cost}</div></div>
        <div className="glass rounded-xl p-4"><div className="text-xs text-muted-foreground">Difficulty</div><div className="mt-1 text-xl font-semibold">{t.difficulty}</div></div>
        <div className="glass rounded-xl p-4"><div className="text-xs text-muted-foreground">Category</div><div className="mt-1 text-xl font-semibold">{t.category}</div></div>
      </div>
      <div className="mt-6 glass rounded-2xl p-5">
        <div className="mb-2 text-sm font-semibold">Suggested components</div>
        <div className="flex flex-wrap gap-1.5">{t.components.map((c) => (<span key={c} className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs">{c}</span>))}</div>
      </div>
      <div className="mt-6 glass min-h-[200px] rounded-2xl p-5">
        {loading && (<div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" /> Building your project…</div>)}
        {!loading && !content && (<div className="text-center text-sm text-muted-foreground">Click <b>Build with AI</b> to generate a complete guide with wiring, code and BOM.</div>)}
        {content && (
          <>
            <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-2">
              <div className="text-sm font-semibold text-foreground">Generated Output</div>
              <button onClick={() => exportMarkdownToPDF(t.title, content)} className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent"><Download className="size-3.5" /> Export PDF</button>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-4 rounded-lg">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="wiring">Wiring</TabsTrigger>
                <TabsTrigger value="code">Arduino Code</TabsTrigger>
                <TabsTrigger value="explanation">Explanation</TabsTrigger>
                <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
                <TabsTrigger value="diagram" className="bg-gradient-brand/5 hover:bg-gradient-brand/10 data-[state=active]:bg-gradient-brand data-[state=active]:text-white">AI Circuit Diagram</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div className="prose max-w-none dark:prose-invert"><Markdown content={sections.overview || "_No overview generated._"} /></div>
              </TabsContent>
              <TabsContent value="components" className="mt-0">
                <div className="prose max-w-none dark:prose-invert"><Markdown content={sections.components || "_No component list generated._"} /></div>
              </TabsContent>
              <TabsContent value="wiring" className="mt-0">
                <div className="prose max-w-none dark:prose-invert"><Markdown content={sections.wiring || "_No wiring connections generated._"} /></div>
              </TabsContent>
              <TabsContent value="code" className="mt-0">
                <div className="prose max-w-none dark:prose-invert"><Markdown content={sections.code || "_No code generated._"} /></div>
              </TabsContent>
              <TabsContent value="explanation" className="mt-0">
                <div className="prose max-w-none dark:prose-invert"><Markdown content={sections.explanation || "_No explanation generated._"} /></div>
              </TabsContent>
              <TabsContent value="troubleshooting" className="mt-0">
                <div className="prose max-w-none dark:prose-invert"><Markdown content={sections.troubleshooting || "_No troubleshooting steps generated._"} /></div>
              </TabsContent>
              <TabsContent value="diagram" className="mt-0">
                {sections.circuitJson ? (
                  <CircuitRenderer data={sections.circuitJson} />
                ) : (
                  <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground bg-secondary/5">
                    <Info className="mx-auto mb-2 size-6 text-muted-foreground/60" />
                    No schematic diagram JSON could be parsed. Make sure the description defines a microcontroller circuit.
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
}