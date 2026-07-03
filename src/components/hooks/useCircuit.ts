import { useState, useEffect } from "react";
import { type CircuitComponent } from "@/types/Component";
import { autoLayout } from "@/utils/layout";

export function useCircuit(initialComponents: any[]) {
  const [components, setComponents] = useState<CircuitComponent[]>([]);
  const [selectedCompId, setSelectedCompId] = useState<string | null>(null);
  const [hoveredCompId, setHoveredCompId] = useState<string | null>(null);
  const [hoveredWireIdx, setHoveredWireIdx] = useState<number | null>(null);

  useEffect(() => {
    if (initialComponents) {
      setComponents(autoLayout(JSON.parse(JSON.stringify(initialComponents))));
    }
  }, [initialComponents]);

  const updateComponentPosition = (id: string, x: number, y: number) => {
    setComponents((prev) =>
      prev.map((c) => (c.id === id ? { ...c, x, y } : c))
    );
  };

  const rotateComponent = (id: string) => {
    setComponents((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const rot = ((c.rotation || 0) + 90) % 360;
          return { ...c, rotation: rot };
        }
        return c;
      })
    );
  };

  return {
    components,
    setComponents,
    selectedCompId,
    setSelectedCompId,
    hoveredCompId,
    setHoveredCompId,
    hoveredWireIdx,
    setHoveredWireIdx,
    updateComponentPosition,
    rotateComponent,
  };
}
