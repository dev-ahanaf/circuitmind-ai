export interface CircuitConnection {
  from: string; // "U1:D13"
  to: string; // "R1:left"
  color?: string; // custom wire color (e.g. red for VCC, black for GND)
  highlighted?: boolean;
  selected?: boolean;
}
