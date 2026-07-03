import { CircuitComponent } from "./Component";
import { CircuitConnection } from "./Connection";

export interface Circuit {
  project?: {
    title?: string;
    description?: string;
  };
  components: CircuitComponent[];
  connections: CircuitConnection[];
}
