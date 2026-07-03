export interface Pin {
  name: string;
  x: number;
  y: number;
  direction: "left" | "right" | "top" | "bottom";
}

export interface CircuitComponent {
  id: string;
  type: string;
  label?: string;
  value?: string;
  x: number;
  y: number;
  rotation?: number; // 0, 90, 180, 270
  selected?: boolean;
  highlighted?: boolean;
  color?: string; // Optional indicator color
}
