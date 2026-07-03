import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { chatCompletion } from "@/lib/ai.functions";
import { Markdown } from "@/components/markdown";
import { QUICK_PROMPTS } from "@/lib/components-data";
import { Bot, Loader2, Send, Sparkles, User as UserIcon, Plus, Download } from "lucide-react";
import { motion } from "framer-motion";
import { exportMarkdownToPDF } from "@/lib/utils";
import { CircuitRenderer } from "@/components/CircuitRenderer/CircuitRenderer";
import { parseMarkdownSections } from "@/utils/parser";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

function stripJsonBlock(markdown: string): string {
  if (!markdown) return "";
  let result = markdown.replace(/```json[\s\S]*?```/g, "");
  result = result.replace(/^(?:##?|###?)\s+(?:Circuit|Schematic)\s+JSON\s*$/gim, "");
  return result.trim();
}

export const Route = createFileRoute("/dashboard/chat")({
  component: ChatPage,
});

type Msg = { role: "user" | "assistant"; content: string };

function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const { content } = await chatCompletion({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content }]);
    } catch (err) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "⚠️ I couldn't reach the AI service. Please make sure your API key (GEMINI_API_KEY or OPENAI_API_KEY) is correctly configured in your .env file.\n\n_Error: " +
            (err as Error).message +
            "_",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function exportChat() {
    const md = messages
      .map((m) => `# ${m.role === "user" ? "User Query" : "CircuitMind AI"}\n\n${m.content}`)
      .join("\n\n---\n\n");
    exportMarkdownToPDF("CircuitMind AI Chat Session", md);
  }

  const empty = messages.length === 0;

  return (
    <div className="flex h-[calc(100vh-0px)] flex-col">
      <header className="flex items-center justify-between border-b border-border/60 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-lg bg-gradient-brand text-white">
            <Bot className="size-4" />
          </div>
          <div>
            <div className="text-sm font-semibold">CircuitMind Assistant</div>
            <div className="text-xs text-muted-foreground">Ask anything about circuits, code, or components</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMessages([])}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent"
          >
            <Plus className="size-3.5" /> New chat
          </button>
          <button
            onClick={exportChat}
            disabled={empty}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs hover:bg-accent disabled:opacity-40"
          >
            <Download className="size-3.5" /> Export PDF
          </button>
        </div>
      </header>

      <div ref={scrollerRef} className="flex-1 overflow-y-auto">
        {empty ? (
          <div className="mx-auto max-w-3xl px-6 py-16">
            <div className="text-center">
              <div className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-gradient-brand text-white glow-brand">
                <Sparkles className="size-6" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                What are we building today?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Describe your project and CircuitMind will design the circuit, wiring, code, and BOM.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2">
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="glass rounded-xl px-4 py-3 text-left text-sm hover:border-brand/50 transition"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl lg:max-w-5xl space-y-6 px-6 py-8 w-full">
            {messages.map((m, i) => {
              const parsed = m.role === "assistant" ? parseMarkdownSections(m.content) : null;
              const hasJson = !!(parsed && parsed.circuitJson);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 w-full ${hasJson ? "" : "max-w-3xl mx-auto"}`}
                >
                <div
                  className={`mt-1 grid size-8 shrink-0 place-items-center rounded-lg ${
                    m.role === "user" ? "bg-secondary" : "bg-gradient-brand text-white"
                  }`}
                >
                  {m.role === "user" ? <UserIcon className="size-4" /> : <Bot className="size-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-xs text-muted-foreground">
                    {m.role === "user" ? "You" : "CircuitMind AI"}
                  </div>
                  {m.role === "user" ? (
                    <div className="rounded-xl bg-secondary/50 px-4 py-3 text-sm">{m.content}</div>
                  ) : (
                    (() => {
                      if (parsed && parsed.circuitJson) {
                        return (
                          <div className="glass rounded-xl p-5 w-full space-y-4 overflow-hidden">
                            <Tabs defaultValue="diagram" className="w-full">
                              <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-4 rounded-lg">
                                <TabsTrigger value="diagram" className="bg-gradient-brand/5 hover:bg-gradient-brand/10 data-[state=active]:bg-gradient-brand data-[state=active]:text-white">
                                  Interactive Circuit Diagram
                                </TabsTrigger>
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="components">Components</TabsTrigger>
                                <TabsTrigger value="wiring">Wiring</TabsTrigger>
                                <TabsTrigger value="code">Arduino Code</TabsTrigger>
                                <TabsTrigger value="explanation">Explanation</TabsTrigger>
                                <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
                              </TabsList>

                              <TabsContent value="diagram" className="mt-0">
                                <CircuitRenderer data={parsed.circuitJson} />
                              </TabsContent>
                              <TabsContent value="overview" className="mt-0">
                                <div className="prose max-w-none dark:prose-invert">
                                  <Markdown content={stripJsonBlock(parsed.overview) || "_No overview generated._"} />
                                </div>
                              </TabsContent>
                              <TabsContent value="components" className="mt-0">
                                <div className="prose max-w-none dark:prose-invert">
                                  <Markdown content={stripJsonBlock(parsed.components) || "_No component list generated._"} />
                                </div>
                              </TabsContent>
                              <TabsContent value="wiring" className="mt-0">
                                <div className="prose max-w-none dark:prose-invert">
                                  <Markdown content={stripJsonBlock(parsed.wiring) || "_No wiring connections generated._"} />
                                </div>
                              </TabsContent>
                              <TabsContent value="code" className="mt-0">
                                <div className="prose max-w-none dark:prose-invert">
                                  <Markdown content={stripJsonBlock(parsed.code) || "_No code generated._"} />
                                </div>
                              </TabsContent>
                              <TabsContent value="explanation" className="mt-0">
                                <div className="prose max-w-none dark:prose-invert">
                                  <Markdown content={stripJsonBlock(parsed.explanation) || "_No explanation generated._"} />
                                </div>
                              </TabsContent>
                              <TabsContent value="troubleshooting" className="mt-0">
                                <div className="prose max-w-none dark:prose-invert">
                                  <Markdown content={stripJsonBlock(parsed.troubleshooting) || "_No troubleshooting steps generated._"} />
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        );
                      }

                      return (
                        <div className="glass rounded-xl px-4 py-3">
                          <Markdown content={m.content} />
                        </div>
                      );
                    })()
                  )}
                </div>
              </motion.div>
            )})}
            {loading && (
              <div className="flex gap-3 max-w-3xl mx-auto w-full">
                <div className="mt-1 grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-brand text-white">
                  <Bot className="size-4" />
                </div>
                <div className="glass rounded-xl px-4 py-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" /> Designing your circuit…
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-border/60 bg-background/60 p-4 backdrop-blur">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="mx-auto flex max-w-3xl items-end gap-2"
        >
          <div className="glass flex flex-1 items-end gap-2 rounded-2xl p-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Describe your project… e.g. Build a Line Following Robot"
              rows={1}
              className="max-h-40 flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-3 py-2 text-sm font-medium text-white disabled:opacity-40"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
            </button>
          </div>
        </form>
        <div className="mx-auto mt-2 max-w-3xl text-center text-[10px] text-muted-foreground">
          CircuitMind may occasionally be inaccurate. Always double-check voltages and datasheets.
        </div>
      </div>
    </div>
  );
}