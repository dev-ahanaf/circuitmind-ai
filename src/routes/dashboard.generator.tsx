import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from "react";
import { generateCircuit } from "@/lib/ai.functions";
import { Markdown } from "@/components/markdown";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { parseMarkdownSections } from "@/utils/parser";
import { CircuitRenderer } from "@/components/CircuitRenderer/CircuitRenderer";
import { Cable, Loader2, Sparkles, Download, Info } from "lucide-react";
import { exportProjectPDF, exportProjectJSON, exportProjectCode } from "@/utils/pdfExport";

export const Route = createFileRoute("/dashboard/generator")({
  component: GeneratorPage,
});

function GeneratorPage() {
  const [form, setForm] = useState({ description: "", voltage: "", microcontroller: "", preferred: "", budget: "" });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const desc = params.get("desc");
    if (desc) {
      setForm((prev) => ({ ...prev, description: desc }));
    }
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const { content } = await generateCircuit({ data: form });
      setResult(content);
    } catch (err) {
      setResult("⚠️ Failed to generate: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const sections = parseMarkdownSections(result);

  async function handleExportPDF() {
    setExporting(true);
    await exportProjectPDF({
      title: form.description ? `Circuit Design: ${form.description.slice(0, 40)}...` : "Circuit Design",
      query: form.description,
      markdown: result,
      circuitJson: sections.circuitJson,
      elementId: "circuit-diagram-export"
    });
    setExporting(false);
  }

  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-white">
          <Cable className="size-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">Circuit Generator</div>
          <h1 className="text-2xl font-semibold tracking-tight">Generate a circuit from a description</h1>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <form onSubmit={submit} className="glass col-span-1 space-y-3 rounded-2xl p-5 lg:col-span-2">
          <Field label="Project description">
            <textarea required rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="e.g. Line following robot with Arduino Uno and 2 IR sensors." className="input" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Voltage"><input className="input" value={form.voltage} onChange={(e) => setForm({ ...form, voltage: e.target.value })} placeholder="5V" /></Field>
            <Field label="Microcontroller"><input className="input" value={form.microcontroller} onChange={(e) => setForm({ ...form, microcontroller: e.target.value })} placeholder="Arduino Uno" /></Field>
          </div>
          <Field label="Preferred components"><input className="input" value={form.preferred} onChange={(e) => setForm({ ...form, preferred: e.target.value })} placeholder="L298N, N20 motors" /></Field>
          <Field label="Budget (BDT)"><input className="input" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder="৳3000" /></Field>
          <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-2.5 font-medium text-white glow-brand disabled:opacity-70">
            {loading ? <Loader2 className="size-4 animate-spin" /> : <Sparkles className="size-4" />}
            Generate circuit
          </button>
        </form>

        <div className="col-span-1 lg:col-span-3">
          <div className="glass min-h-[400px] rounded-2xl p-5">
            {loading && (<div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" /> Designing circuit…</div>)}
            {!loading && !result && (
              <div className="grid h-full place-items-center p-10 text-center text-sm text-muted-foreground">
                <div><Sparkles className="mx-auto mb-2 size-6 text-brand" />Fill the form to generate a complete circuit design with wiring, code, and BOM.</div>
              </div>
            )}
            {result && (
              <>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-2">
                  <div className="text-sm font-semibold text-foreground">Generated Output</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleExportPDF}
                      disabled={exporting}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent disabled:opacity-50"
                    >
                      {exporting ? <Loader2 className="size-3.5 animate-spin" /> : <Download className="size-3.5" />}
                      {exporting ? "Generating PDF..." : "Export PDF"}
                    </button>
                    {sections.circuitJson && (
                      <button
                        onClick={() => exportProjectJSON(form.description ? `Circuit Design: ${form.description.slice(0, 40)}` : "Circuit Design", sections.circuitJson)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent"
                      >
                        <Download className="size-3.5" /> Export JSON
                      </button>
                    )}
                    {sections.code && (
                      <button
                        onClick={() => exportProjectCode(form.description ? `Circuit Design: ${form.description.slice(0, 40)}` : "Circuit Design", sections.code)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent"
                      >
                        <Download className="size-3.5" /> Export Code
                      </button>
                    )}
                  </div>
                </div>

                {/* Hidden container for diagram image capture during PDF generation */}
                {sections.circuitJson && (
                  <div className="absolute -left-[9999px] top-0 pointer-events-none" style={{ width: "1000px", height: "600px", zIndex: -1000 }}>
                    <div id="circuit-diagram-export" className="bg-white p-6 rounded-xl" style={{ width: "1000px", height: "600px", background: "#ffffff" }}>
                      <CircuitRenderer data={sections.circuitJson} />
                    </div>
                  </div>
                )}
                
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
                        No schematic diagram JSON could be parsed. Make sure your description defines a microcontroller circuit.
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
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