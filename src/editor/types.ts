import { type CircuitComponent } from "@/types/Component";
import { type CircuitConnection as Connection } from "@/types/Connection";

export type ToolMode = "select" | "pan";

export interface Point {
  x: number;
  y: number;
}

export interface ViewportState {
  pan: Point;
  zoom: number;
}

export interface SelectionState {
  componentIds: Set<string>;
  wireIndex: number | null; // Selected wire index (or null if none)
}

export interface HistoryItem {
  components: CircuitComponent[];
  connections: Connection[];
}

export interface DragSelectionBox {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
}
