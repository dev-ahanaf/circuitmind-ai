import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Settings, Save } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [provider, setProvider] = useState<"gemini" | "openai">("gemini");
  const [dark, setDark] = useState(true);
  const [emails, setEmails] = useState(true);
  return (
    <div className="mx-auto max-w-3xl p-6 md:p-10">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-white"><Settings className="size-5" /></div>
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">Settings</div>
          <h1 className="text-2xl font-semibold tracking-tight">Preferences</h1>
        </div>
      </div>
      <div className="glass mt-6 space-y-6 rounded-2xl p-6">
        <Row title="AI provider" desc="Switch between the underlying models CircuitMind uses.">
          <div className="flex gap-2">{(["gemini", "openai"] as const).map((p) => (<button key={p} onClick={() => setProvider(p)} className={`rounded-md border px-3 py-1.5 text-xs capitalize ${provider === p ? "border-brand bg-gradient-brand/15" : "border-border text-muted-foreground"}`}>{p}</button>))}</div>
        </Row>
        <Row title="Dark mode" desc="CircuitMind looks best in dark."><Toggle on={dark} onChange={setDark} /></Row>
        <Row title="Email updates" desc="Occasional tips and new templates."><Toggle on={emails} onChange={setEmails} /></Row>
        <button onClick={() => toast.success("Preferences saved")} className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white"><Save className="size-4" /> Save changes</button>
      </div>
    </div>
  );
}

function Row({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      {children}
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!on)} className={`relative h-6 w-11 rounded-full border transition ${on ? "border-brand bg-gradient-brand" : "border-border bg-secondary"}`}>
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${on ? "left-5" : "left-0.5"}`} />
    </button>
  );
}