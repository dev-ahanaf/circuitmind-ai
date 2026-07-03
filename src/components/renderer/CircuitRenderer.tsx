import React, { useRef } from "react";
import { type Circuit } from "@/types/Circuit";
import { useZoom } from "../hooks/useZoom";
import { usePan } from "../hooks/usePan";
import { useCircuit } from "../hooks/useCircuit";
import { ComponentRenderer } from "./ComponentRenderer";
import { WireRenderer } from "./WireRenderer";
import { LabelRenderer } from "./LabelRenderer";
import { ConnectionRenderer } from "./ConnectionRenderer";
import { snapToGrid } from "@/utils/grid";
import { normalizeType, COMPONENT_DIMENSIONS, getPinConfig } from "./PinMap";
import { ZoomIn, ZoomOut, Maximize2, Download, Printer, FileCode, X, Search, Info, RefreshCw, Layers, Crosshair } from "lucide-react";

interface CircuitRendererProps {
  data: Circuit;
}

export const CircuitRenderer: React.FC<CircuitRendererProps> = ({ data }) => {
  const {
    zoom,
    setZoom,
    zoomIn,
    zoomOut,
    resetZoom,
    handleWheelZoom,
  } = useZoom(0.8);

  const {
    pan,
    setPan,
    isPanning,
    startPan,
    updatePan,
    endPan,
    resetPan,
  } = usePan({ x: 80, y: 50 });

  const {
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
  } = useCircuit(data.components);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const [activeDragId, setActiveDragId] = React.useState<string | null>(null);

  // Dragging event handlers snapped to 20px grid
  const handleSvgMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.button === 0 && !activeDragId) {
      startPan(e.clientX, e.clientY);
    }
  };

  const handleSvgMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (isPanning) {
      updatePan(e.clientX, e.clientY);
    } else if (activeDragId && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const rawX = (e.clientX - rect.left - pan.x) / zoom - dragStartOffset.current.x;
      const rawY = (e.clientY - rect.top - pan.y) / zoom - dragStartOffset.current.y;

      // Lock snap to 20px grid
      const snappedX = snapToGrid(rawX, 20);
      const snappedY = snapToGrid(rawY, 20);

      updateComponentPosition(activeDragId, snappedX, snappedY);
    }
  };

  const handleSvgMouseUp = () => {
    endPan();
    setActiveDragId(null);
  };

  const handleCompDragStart = (e: React.MouseEvent, cId: string, cx: number, cy: number) => {
    e.stopPropagation();
    if (svgRef.current) {
      setActiveDragId(cId);
      const rect = svgRef.current.getBoundingClientRect();
      const clickX = (e.clientX - rect.left - pan.x) / zoom;
      const clickY = (e.clientY - rect.top - pan.y) / zoom;
      dragStartOffset.current = {
        x: clickX - cx,
        y: clickY - cy,
      };
    }
  };

  const handleResetView = () => {
    resetZoom();
    resetPan();
  };

  const handleCenterDiagram = () => {
    if (components.length === 0) return;
    // Calculate bounding box of components
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

    if (svgRef.current) {
      const w = svgRef.current.clientWidth || 800;
      const h = svgRef.current.clientHeight || 500;
      setPan({
        x: w / 2 - midX * zoom,
        y: h / 2 - midY * zoom,
      });
    }
  };

  const handleToggleFullscreen = () => {
    const container = svgRef.current?.parentElement;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Exporters
  const exportSVG = () => {
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgRef.current);
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    const trigger = document.createElement("a");
    trigger.href = url;
    trigger.download = `${data.project?.title || "schematic"}_design.svg`;
    trigger.click();
  };

  const exportPNG = () => {
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgRef.current);
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#0f172a"; // dark background for schematic exports
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const url = canvas.toDataURL("image/png");
        const trigger = document.createElement("a");
        trigger.href = url;
        trigger.download = `${data.project?.title || "schematic"}_design.png`;
        trigger.click();
      }
    };
  };

  const printSchematic = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow || !svgRef.current) return;
    const source = new XMLSerializer().serializeToString(svgRef.current);
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Schematic - CircuitMind AI</title>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #fff; }
            svg { width: 95%; height: auto; }
          </style>
        </head>
        <body>
          ${source}
          <script>window.onload = function() { window.print(); setTimeout(window.close, 1000); }</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const exportJSON = () => {
    const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const trigger = document.createElement("a");
    trigger.href = jsonString;
    trigger.download = `${data.project?.title || "schematic"}_design.json`;
    trigger.click();
  };

  const handleCopyDiagram = async () => {
    if (!svgRef.current) return;
    try {
      const serializer = new XMLSerializer();
      const source = serializer.serializeToString(svgRef.current);
      await navigator.clipboard.writeText(source);
      alert("SVG markup copied to clipboard!");
    } catch (err) {
      console.error(err);
    }
  };

  const selectedComp = components.find((c) => c.id === selectedCompId) || null;

  // Scan connections for inspector panel
  const getConnectedDevices = (cId: string) => {
    const list: Array<{ pin: string; device: string; devicePin: string }> = [];
    if (!data.connections) return list;

    data.connections.forEach((conn) => {
      const [fromId, fromPin] = conn.from.split(":");
      const [toId, toPin] = conn.to.split(":");

      if (fromId === cId) {
        list.push({ pin: fromPin, device: toId, devicePin: toPin });
      } else if (toId === cId) {
        list.push({ pin: toPin, device: fromId, devicePin: fromPin });
      }
    });

    return list;
  };

  const getComponentSpecs = (c: any) => {
    const norm = normalizeType(c.type).toLowerCase();
    if (norm.includes("arduino") || norm.includes("esp32")) {
      return {
        desc: "Main microcontroller development board. Coordinates pin inputs, runs firmware cycles, and controls peripherals.",
        datasheet: "https://www.arduino.cc/en/hardware",
      };
    }
    if (norm.includes("resistor")) {
      return {
        desc: "Limits current in the circuit. Tolerance: 5%, Power Rating: 0.25W.",
        datasheet: "https://en.wikipedia.org/wiki/Resistor",
      };
    }
    if (norm.includes("led")) {
      return {
        desc: "Light Emitting Diode. Emits light when forward biased. Forward voltage: ~2.0V.",
        datasheet: "https://en.wikipedia.org/wiki/Light-emitting_diode",
      };
    }
    return {
      desc: `Discrete EEE component (${c.type}) configured as part of the schematic design.`,
      datasheet: `https://www.google.com/search?q=${c.type}+datasheet`,
    };
  };

  return (
    <div className="relative flex h-[580px] w-full flex-col overflow-hidden rounded-xl border border-border bg-slate-950/20 dark:bg-slate-900/30">
      
      {/* 1. Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border/40 bg-background/50 px-4 py-2 gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <button onClick={zoomOut} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Zoom Out"><ZoomOut className="size-4" /></button>
          <span className="min-w-[40px] text-center font-mono font-semibold text-muted-foreground">{Math.round(zoom * 100)}%</span>
          <button onClick={zoomIn} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Zoom In"><ZoomIn className="size-4" /></button>
          <div className="h-4 w-[1px] bg-border/60 mx-1" />
          <button onClick={handleResetView} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Reset View"><RefreshCw className="size-3.5" /></button>
          <button onClick={handleCenterDiagram} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Center Diagram / Fit Screen"><Crosshair className="size-3.5" /></button>
          <button onClick={handleToggleFullscreen} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Toggle Fullscreen"><Maximize2 className="size-3.5" /></button>
        </div>
        
        <div className="flex items-center gap-1.5">
          <button onClick={exportSVG} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent"><Download className="size-3.5" /> SVG</button>
          <button onClick={exportPNG} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent"><Download className="size-3.5" /> PNG</button>
          <button onClick={printSchematic} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent"><Printer className="size-3.5" /> Print</button>
          <button onClick={handleCopyDiagram} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent" title="Copy SVG Markup"><Layers className="size-3.5" /></button>
          <button onClick={exportJSON} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent" title="Download Source JSON"><FileCode className="size-3.5" /></button>
        </div>
      </div>

      {/* 2. Interactive SVG Canvas */}
      <div className="relative flex-1 cursor-grab active:cursor-grabbing overflow-hidden">
        <svg
          ref={svgRef}
          id="schematic-svg"
          width="100%"
          height="100%"
          className="bg-slate-900/5 dark:bg-slate-950/10"
          onMouseDown={handleSvgMouseDown}
          onMouseMove={handleSvgMouseMove}
          onMouseUp={handleSvgMouseUp}
          onMouseLeave={handleSvgMouseUp}
          onWheel={(e) => { e.preventDefault(); handleWheelZoom(e.deltaY); }}
        >
          {/* Engineering CAD Grid pattern */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-muted-foreground/5 dark:stroke-muted-foreground/[0.03]" strokeWidth="1" />
            </pattern>
            <style>
              {`
                @keyframes current-flow {
                  to {
                    stroke-dashoffset: -20;
                  }
                }
              `}
            </style>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Group wrapper supporting zoom and pan */}
          <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
            
            {/* 1. Connection lines (Wires) */}
            {data.connections &&
              data.connections.map((conn, idx) => (
                <WireRenderer
                  key={`wire-${conn.from}-${conn.to}-${idx}`}
                  connection={conn}
                  components={components}
                  hovered={hoveredWireIdx === idx}
                  selected={
                    selectedCompId === conn.from.split(":")[0] ||
                    selectedCompId === conn.to.split(":")[0]
                  }
                  onHover={(h) => setHoveredWireIdx(h ? idx : null)}
                />
              ))}

            {/* 2. Solder Junction connection dots */}
            <ConnectionRenderer connections={data.connections} components={components} />

            {/* 3. Component Symbols */}
            {components.map((c) => (
              <g
                key={c.id}
                onMouseDown={(e) => handleCompDragStart(e, c.id, c.x, c.y)}
              >
                <ComponentRenderer
                  component={c}
                  selected={selectedCompId === c.id}
                  hovered={hoveredCompId === c.id}
                  onSelect={() => setSelectedCompId(c.id)}
                  onHover={(h) => setHoveredCompId(h ? c.id : null)}
                />
              </g>
            ))}

            {/* 4. Text labels (Ref designators, value specifiers) */}
            <LabelRenderer components={components} />
          </g>
        </svg>

        {/* 3. Inspector Side Drawer Panel */}
        {selectedComp && (
          <div className="absolute right-4 top-4 w-72 max-w-xs rounded-xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md transition-all duration-300">
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <div className="rounded-md bg-gradient-brand/10 p-1 text-brand">
                  <Info className="size-4" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-foreground">{selectedComp.id}</h3>
                  <p className="text-[10px] text-muted-foreground capitalize">{selectedComp.type}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCompId(null)}
                className="rounded-md p-1 hover:bg-secondary/60 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
            
            <div className="space-y-3 text-xs overflow-y-auto max-h-[360px] pr-1">
              <div>
                <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Description</span>
                <p className="text-muted-foreground mt-0.5 leading-relaxed">{getComponentSpecs(selectedComp).desc}</p>
              </div>
              
              {selectedComp.value && (
                <div>
                  <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Value / Spec</span>
                  <span className="inline-block mt-0.5 rounded bg-secondary/80 px-2 py-0.5 font-mono text-[10px] text-foreground font-semibold">{selectedComp.value}</span>
                </div>
              )}

              {/* Pin out mapping sub-list */}
              <div>
                <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Pins & Directions</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {Object.keys(getPinConfig(selectedComp.type, "") || {}).map((pinName) => {
                    const pin = getPinConfig(selectedComp.type, pinName);
                    return (
                      <span key={pinName} className="rounded bg-muted px-1.5 py-0.5 text-[8px] font-mono text-muted-foreground">
                        {pinName} ({pin.direction})
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Connected devices sub-list */}
              <div>
                <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Connections</span>
                <div className="mt-1 space-y-1">
                  {getConnectedDevices(selectedComp.id).length > 0 ? (
                    getConnectedDevices(selectedComp.id).map((conn, idx) => (
                      <div key={idx} className="flex justify-between rounded bg-muted/30 px-2 py-1 font-mono text-[9px] text-muted-foreground">
                        <span>Pin {conn.pin}</span>
                        <span>➜</span>
                        <span>{conn.device}:{conn.devicePin}</span>
                      </div>
                    ))
                  ) : (
                    <span className="text-[10px] text-muted-foreground/60 italic">No active wiring.</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-border/40">
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase">Rotation</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="font-semibold text-foreground">{selectedComp.rotation || 0}°</span>
                    <button
                      onClick={() => rotateComponent(selectedComp.id)}
                      className="rounded border border-border px-1 py-0.5 text-[8px] hover:bg-accent text-brand font-medium active:scale-95 transition"
                    >
                      Rotate
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase">Grid Coord</span>
                  <p className="font-mono text-foreground mt-0.5">X:{selectedComp.x} Y:{selectedComp.y}</p>
                </div>
              </div>

              <a
                href={getComponentSpecs(selectedComp).datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border/80 bg-background py-2 hover:bg-accent font-medium text-foreground transition"
              >
                <Search className="size-3.5" /> Search Datasheet
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
