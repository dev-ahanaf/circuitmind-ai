import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { type CircuitComponent } from "@/types/Component";
import { type CircuitConnection as Connection } from "@/types/Connection";
import { type Circuit } from "@/types/Circuit";
import { type ToolMode, type Point, type ViewportState, type HistoryItem } from "./types";
import { snapToGrid } from "@/utils/grid";
import { normalizeType, COMPONENT_DIMENSIONS } from "@/components/renderer/PinMap";

interface EditorContextProps {
  // Data State
  components: CircuitComponent[];
  connections: Connection[];
  setComponents: React.Dispatch<React.SetStateAction<CircuitComponent[]>>;
  setConnections: React.Dispatch<React.SetStateAction<Connection[]>>;
  
  // Viewport State
  pan: Point;
  setPan: React.Dispatch<React.SetStateAction<Point>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  toolMode: ToolMode;
  setToolMode: (mode: ToolMode) => void;
  
  // Selection State
  selectedCompIds: Set<string>;
  setSelectedCompIds: (ids: Set<string>) => void;
  selectedWireIndex: number | null;
  setSelectedWireIndex: (idx: number | null) => void;
  
  // Toggle Options
  showGrid: boolean;
  setShowGrid: (show: boolean) => void;
  showLabels: boolean;
  setShowLabels: (show: boolean) => void;
  
  // Search State
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Hover State
  hoveredCompId: string | null;
  setHoveredCompId: (id: string | null) => void;
  hoveredWireIndex: number | null;
  setHoveredWireIndex: (idx: number | null) => void;
  hoveredPin: { componentId: string; pinName: string } | null;
  setHoveredPin: (pin: { componentId: string; pinName: string } | null) => void;

  // History (Undo/Redo)
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  saveHistoryState: () => void;
  
  // Clipboard
  copySelected: () => void;
  pasteCopied: () => void;
  deleteSelected: () => void;
  selectAll: () => void;
  
  // Helpers
  updateComponentPosition: (id: string, x: number, y: number) => void;
  rotateComponent: (id: string) => void;
  resetView: () => void;
  centerDiagram: () => void;
}

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorProvider: React.FC<{ initialData: Circuit; children: React.ReactNode }> = ({ initialData, children }) => {
  const [components, setComponents] = useState<CircuitComponent[]>(initialData.components || []);
  const [connections, setConnections] = useState<Connection[]>(initialData.connections || []);
  
  // Viewport state
  const [pan, setPan] = useState<Point>({ x: 80, y: 50 });
  const [zoom, setZoom] = useState<number>(0.85);
  const [toolMode, setToolModeState] = useState<ToolMode>("select");

  // Selection state
  const [selectedCompIds, setSelectedCompIdsState] = useState<Set<string>>(new Set());
  const [selectedWireIndex, setSelectedWireIndex] = useState<number | null>(null);

  // Settings
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Hover states for interactions
  const [hoveredCompId, setHoveredCompId] = useState<string | null>(null);
  const [hoveredWireIndex, setHoveredWireIndex] = useState<number | null>(null);
  const [hoveredPin, setHoveredPin] = useState<{ componentId: string; pinName: string } | null>(null);

  // History stacks
  const pastStack = useRef<HistoryItem[]>([]);
  const futureStack = useRef<HistoryItem[]>([]);
  
  // Clipboard buffers
  const clipboard = useRef<{ components: CircuitComponent[]; connections: Connection[] } | null>(null);

  // Keep tracking of current data for history snapshots
  const currentDataRef = useRef<HistoryItem>({ components, connections });
  useEffect(() => {
    currentDataRef.current = { components, connections };
  }, [components, connections]);

  const saveHistoryState = useCallback(() => {
    pastStack.current.push({
      components: JSON.parse(JSON.stringify(currentDataRef.current.components)),
      connections: JSON.parse(JSON.stringify(currentDataRef.current.connections)),
    });
    // Cap history stack at 50
    if (pastStack.current.length > 50) {
      pastStack.current.shift();
    }
    futureStack.current = []; // Clear redo stack on new action
  }, []);

  const undo = useCallback(() => {
    if (pastStack.current.length === 0) return;
    
    const previous = pastStack.current.pop()!;
    futureStack.current.push({
      components: JSON.parse(JSON.stringify(currentDataRef.current.components)),
      connections: JSON.parse(JSON.stringify(currentDataRef.current.connections)),
    });

    setComponents(previous.components);
    setConnections(previous.connections);
    setSelectedCompIdsState(new Set());
    setSelectedWireIndex(null);
  }, []);

  const redo = useCallback(() => {
    if (futureStack.current.length === 0) return;

    const next = futureStack.current.pop()!;
    pastStack.current.push({
      components: JSON.parse(JSON.stringify(currentDataRef.current.components)),
      connections: JSON.parse(JSON.stringify(currentDataRef.current.connections)),
    });

    setComponents(next.components);
    setConnections(next.connections);
    setSelectedCompIdsState(new Set());
    setSelectedWireIndex(null);
  }, []);

  const setSelectedCompIds = useCallback((ids: Set<string>) => {
    setSelectedCompIdsState(ids);
    if (ids.size > 0) {
      setSelectedWireIndex(null); // Clear wire selection if component is selected
    }
  }, []);

  const setToolMode = useCallback((mode: ToolMode) => {
    setToolModeState(mode);
  }, []);

  // Update component coordinates (realtime drag)
  const updateComponentPosition = useCallback((id: string, x: number, y: number) => {
    setComponents((prev) =>
      prev.map((c) => (c.id === id ? { ...c, x: snapToGrid(x, 20), y: snapToGrid(y, 20) } : c))
    );
  }, []);

  // Rotate component in 90-degree steps
  const rotateComponent = useCallback((id: string) => {
    saveHistoryState();
    setComponents((prev) =>
      prev.map((c) => (c.id === id ? { ...c, rotation: ((c.rotation || 0) + 90) % 360 } : c))
    );
  }, [saveHistoryState]);

  // Copy selected components & their internal connection wires
  const copySelected = useCallback(() => {
    if (selectedCompIds.size === 0) return;
    const selectedList = components.filter((c) => selectedCompIds.has(c.id));
    
    // Find connections completely inside the selection
    const internalConnections = connections.filter((conn) => {
      const fromId = conn.from.split(":")[0];
      const toId = conn.to.split(":")[0];
      return selectedCompIds.has(fromId) && selectedCompIds.has(toId);
    });

    clipboard.current = {
      components: JSON.parse(JSON.stringify(selectedList)),
      connections: JSON.parse(JSON.stringify(internalConnections)),
    };
  }, [components, connections, selectedCompIds]);

  // Paste clipboard items with coordinate offset
  const pasteCopied = useCallback(() => {
    if (!clipboard.current) return;
    saveHistoryState();

    const idMap: Record<string, string> = {};
    const newComponents = clipboard.current.components.map((c) => {
      // Generate clean copied designator
      const match = c.id.match(/^([a-zA-Z]+)(\d+)$/);
      let newId = `${c.id}_copy`;
      if (match) {
        const prefix = match[1];
        let idx = parseInt(match[2]) + 1;
        while (components.some((comp) => comp.id === `${prefix}${idx}`)) {
          idx++;
        }
        newId = `${prefix}${idx}`;
      }
      idMap[c.id] = newId;

      return {
        ...c,
        id: newId,
        label: c.label ? `${c.label} (Copy)` : undefined,
        x: snapToGrid(c.x + 40, 20), // Offset pasted components on the grid
        y: snapToGrid(c.y + 40, 20),
      };
    });

    const newConnections = clipboard.current.connections.map((conn) => {
      const [fromId, fromPin] = conn.from.split(":");
      const [toId, toPin] = conn.to.split(":");
      return {
        from: `${idMap[fromId] || fromId}:${fromPin}`,
        to: `${idMap[toId] || toId}:${toPin}`,
      };
    });

    setComponents((prev) => [...prev, ...newComponents]);
    setConnections((prev) => [...prev, ...newConnections]);

    // Select pasted components
    const pastedIds = new Set(newComponents.map((c) => c.id));
    setSelectedCompIdsState(pastedIds);
  }, [components, saveHistoryState]);

  // Delete selected components & wires
  const deleteSelected = useCallback(() => {
    if (selectedCompIds.size === 0 && selectedWireIndex === null) return;
    saveHistoryState();

    if (selectedCompIds.size > 0) {
      setComponents((prev) => prev.filter((c) => !selectedCompIds.has(c.id)));
      setConnections((prev) =>
        prev.filter((conn) => {
          const fromId = conn.from.split(":")[0];
          const toId = conn.to.split(":")[0];
          return !selectedCompIds.has(fromId) && !selectedCompIds.has(toId);
        })
      );
      setSelectedCompIdsState(new Set());
    }

    if (selectedWireIndex !== null) {
      setConnections((prev) => prev.filter((_, idx) => idx !== selectedWireIndex));
      setSelectedWireIndex(null);
    }
  }, [selectedCompIds, selectedWireIndex, saveHistoryState]);

  // Select all components on canvas
  const selectAll = useCallback(() => {
    const allIds = new Set(components.map((c) => c.id));
    setSelectedCompIdsState(allIds);
    setSelectedWireIndex(null);
  }, [components]);

  // Reset view to default pan & zoom
  const resetView = useCallback(() => {
    setZoom(0.85);
    setPan({ x: 80, y: 50 });
  }, []);

  // Autofit / Center the schematic viewport
  const centerDiagram = useCallback(() => {
    if (components.length === 0) return;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    components.forEach((c) => {
      const norm = normalizeType(c.type);
      const dims = COMPONENT_DIMENSIONS[norm] || { width: 80, height: 50 };
      minX = Math.min(minX, c.x);
      minY = Math.min(minY, c.y);
      maxX = Math.max(maxX, c.x + dims.width);
      maxY = Math.max(maxY, c.y + dims.height);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const svgElem = document.getElementById("schematic-svg");
    
    if (svgElem) {
      const w = svgElem.clientWidth || 800;
      const h = svgElem.clientHeight || 500;
      setPan({
        x: w / 2 - midX * zoom,
        y: h / 2 - midY * zoom,
      });
    }
  }, [components, zoom]);

  return (
    <EditorContext.Provider
      value={{
        components,
        connections,
        setComponents,
        setConnections,
        pan,
        setPan,
        zoom,
        setZoom,
        toolMode,
        setToolMode,
        selectedCompIds,
        setSelectedCompIds,
        selectedWireIndex,
        setSelectedWireIndex,
        showGrid,
        setShowGrid,
        showLabels,
        setShowLabels,
        searchQuery,
        setSearchQuery,
        hoveredCompId,
        setHoveredCompId,
        hoveredWireIndex,
        setHoveredWireIndex,
        hoveredPin,
        setHoveredPin,
        undo,
        redo,
        canUndo: pastStack.current.length > 0,
        canRedo: futureStack.current.length > 0,
        saveHistoryState,
        copySelected,
        pasteCopied,
        deleteSelected,
        selectAll,
        updateComponentPosition,
        rotateComponent,
        resetView,
        centerDiagram,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
};
