import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";

export const Route = createFileRoute("/dashboard/history")({
  component: HistoryPage,
});

const ITEMS = [
  { title: "Line Following Robot", when: "2h ago", tokens: 1420 },
  { title: "ESP32 Home Automation", when: "Yesterday", tokens: 2109 },
  { title: "555 Timer Blinker", when: "2d ago", tokens: 812 },
  { title: "Smart Irrigation", when: "5d ago", tokens: 1740 },
  { title: "Bluetooth Car", when: "1w ago", tokens: 998 },
];

function HistoryPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-10">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-white"><History className="size-5" /></div>
        <div>
          <div className="text-xs uppercase tracking-widest text-brand">Activity</div>
          <h1 className="text-2xl font-semibold tracking-tight">Recent AI history</h1>
        </div>
      </div>
      <div className="glass mt-6 divide-y divide-border rounded-2xl">
        {ITEMS.map((i) => (
          <div key={i.title} className="flex items-center justify-between px-5 py-3.5 text-sm">
            <div>
              <div className="font-medium">{i.title}</div>
              <div className="text-xs text-muted-foreground">{i.when} · {i.tokens} tokens</div>
            </div>
            <button className="rounded-md border border-border px-2 py-1 text-xs hover:bg-accent">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
}