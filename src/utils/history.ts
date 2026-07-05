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
  { id: "iot-weather", title: "ESP32 IoT Weather Station", query: "ESP32 weather station with DHT22", markdown: "", when: "3d ago", tokens: 1740, type: "Generator" },
];

export function getHistory(): HistoryItem[] {
  if (typeof window === "undefined") return DEFAULT_HISTORY;
  try {
    const raw = localStorage.getItem("circuitmind_history");
    if (!raw) {
      // Seed default history on first access
      localStorage.setItem("circuitmind_history", JSON.stringify(DEFAULT_HISTORY));
      return DEFAULT_HISTORY;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read history:", e);
    return DEFAULT_HISTORY;
  }
}

export function addToHistory({
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
  if (typeof window === "undefined") return;
  try {
    const list = getHistory();
    
    // Remove if query already exists to prevent duplication
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
    console.error("Failed to add to history:", e);
  }
}
