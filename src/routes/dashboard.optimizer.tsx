import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { optimizeCircuit } from "@/lib/ai.functions";
import { Markdown } from "@/components/markdown";
import { Wrench, Loader2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard/optimizer")({
  component: OptimizerPage,
});

function OptimizerPage() {
  const [bom, setBom] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const { content } = await optimizeCircuit({ data: { componentList: bom, goal } });
      setResult(content);
    } catch (err) {
      setResult("⚠️ Failed: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl p-6 md:p-10">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-white"><Wrench className="size-5" /></div>
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">Optimizer</div>
          <h1 className="text-2xl font-semibold tracking-tight">Optimize your BOM</h1>
        </div>
      </div>
      <form onSubmit={submit} className="glass mt-6 space-y-3 rounded-2xl p-5">
        <label className="block"><span className="mb-1.5 block text-xs font-medium text-muted-foreground">Current component list</span><textarea required rows={7} className="input font-mono" value={bom} onChange={(e) => setBom(e.target.value)} placeholder={"Arduino Uno x1\nL298N Motor Driver x1\nHC-SR04 x1\nSG90 Servo x1"} /></label>
        <label className="block"><span className="mb-1.5 block text-xs font-medium text-muted-foreground">Optimization goal (optional)</span><input className="input" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="lowest cost, lowest power, simpler wiring…" /></label>
        <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white glow-brand disabled:opacity-70">{loading ? <Loader2 className="size-4 animate-spin" /> : <Sparkles className="size-4" />} Optimize</button>
      </form>
      {(loading || result) && (
        <div className="glass mt-6 rounded-2xl p-5">
          {loading ? (<div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" /> Analyzing BOM…</div>) : (<Markdown content={result} />)}
        </div>
      )}
    </div>
  );
}