import { supabase } from "@/integrations/supabase/client";

export interface HistoryItem {
  id: string;
  title: string;
  query: string;
  markdown: string;
  circuitJson?: any;
  when: string;
  tokens: number;
  type: string;
}

const DEFAULT_HISTORY: HistoryItem[] = [
  { id: "line-follower", title: "Line Following Robot", query: "Line follower robot using L298N", markdown: "", when: "2h ago", tokens: 1420, type: "Generator" },
  { id: "smart-door", title: "Arduino Smart Door Lock", query: "Arduino smart door lock with keypad and servo", markdown: "", when: "Yesterday", tokens: 2109, type: "Chat" },
  { id: "weather", title: "ESP32 IoT Weather Station", query: "ESP32 weather station with DHT22", markdown: "", when: "3d ago", tokens: 1740, type: "Generator" },
];

function formatTimeAgo(dateString: string): string {
  try {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  } catch (e) {
    return "Recently";
  }
}

export async function getHistory(): Promise<HistoryItem[]> {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData?.session?.user;

    if (user && user.email !== "developer@circuitmind.local") {
      // Fetch from Supabase Projects Table
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(20);

      if (error) throw error;

      if (data && data.length > 0) {
        return data.map((p: any) => {
          const content = typeof p.content === "string" ? JSON.parse(p.content) : p.content || {};
          return {
            id: p.id,
            title: p.title,
            query: p.description || "",
            markdown: content.markdown || "",
            circuitJson: content.circuitJson || null,
            when: formatTimeAgo(p.created_at),
            tokens: Math.round((content.markdown || "").length / 4.2),
            type: p.category || "Generator"
          };
        });
      }
    }
  } catch (e) {
    console.warn("Supabase history fetch failed, falling back to localStorage:", e);
  }

  // Fallback to localStorage
  if (typeof window === "undefined") return DEFAULT_HISTORY;
  try {
    const raw = localStorage.getItem("circuitmind_history");
    if (!raw) {
      localStorage.setItem("circuitmind_history", JSON.stringify(DEFAULT_HISTORY));
      return DEFAULT_HISTORY;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read localStorage history:", e);
    return DEFAULT_HISTORY;
  }
}

export async function addToHistory({
  title,
  query,
  markdown,
  circuitJson,
  type = "Generator"
}: {
  title: string;
  query: string;
  markdown: string;
  circuitJson?: any;
  type?: string;
}) {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData?.session?.user;

    if (user && user.email !== "developer@circuitmind.local") {
      // Save to Supabase Projects Table
      const { error } = await supabase.from("projects").insert({
        title,
        description: query,
        content: { markdown, circuitJson },
        category: type,
        user_id: user.id
      });

      if (!error) return; // Success!
      console.warn("Supabase project insert failed, writing local backup:", error.message);
    }
  } catch (e) {
    console.warn("Supabase history save failed, saving to localStorage:", e);
  }

  // LocalStorage Fallback
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem("circuitmind_history");
    const list: HistoryItem[] = raw ? JSON.parse(raw) : DEFAULT_HISTORY;
    
    const filtered = list.filter(item => item.query.toLowerCase() !== query.toLowerCase() && item.id !== query);
    const tokens = Math.round(markdown.length / 4.2) + (circuitJson ? 400 : 0);
    const newItem: HistoryItem = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      query,
      markdown,
      circuitJson,
      when: "Just now",
      tokens,
      type
    };

    filtered.unshift(newItem);
    localStorage.setItem("circuitmind_history", JSON.stringify(filtered.slice(0, 20)));
  } catch (e) {
    console.error("Failed to write to localStorage history:", e);
  }
}
