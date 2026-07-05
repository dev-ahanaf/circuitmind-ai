import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";
import { getHistory, type HistoryItem } from "@/utils/history";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard/history")({
  component: HistoryPage,
});

function HistoryPage() {
  const [items, setItems] = useState<HistoryItem[]>([]);

  useEffect(() => {
    setItems(getHistory());
  }, []);

  const handleOpen = (item: HistoryItem) => {
    if (!item.markdown) {
      window.location.href = `/dashboard/templates/${item.id}`;
    } else {
      window.location.href = `/dashboard/generator?historyId=${item.id}`;
    }
  };

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
        {items.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">No recent history records found.</div>
        ) : (
          items.map((i) => (
            <div key={i.id} className="flex items-center justify-between px-5 py-3.5 text-sm">
              <div>
                <div className="font-medium text-foreground">{i.title}</div>
                <div className="text-xs text-muted-foreground">{i.when} · {i.tokens} tokens · {i.type}</div>
              </div>
              <button 
                onClick={() => handleOpen(i)}
                className="rounded-md border border-border px-3 py-1 text-xs hover:bg-accent text-foreground transition"
              >
                Open
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}