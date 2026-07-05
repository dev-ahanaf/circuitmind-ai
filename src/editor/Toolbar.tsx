import React from "react";
import { useEditor } from "./EditorContext";
import {
  MousePointer,
  Hand,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RefreshCw,
  Download,
  Printer,
  Undo2,
  Redo2,
  Grid,
  Search,
  Eye,
  EyeOff,
  Copy,
  Clipboard,
  Trash2,
  FileCode,
} from "lucide-react";

export const Toolbar: React.FC = () => {
  const {
    zoom,
    setZoom,
    setPan,
    toolMode,
    setToolMode,
    showGrid,
    setShowGrid,
    showLabels,
    setShowLabels,
    searchQuery,
    setSearchQuery,
    undo,
    redo,
    canUndo,
    canRedo,
    copySelected,
    pasteCopied,
    deleteSelected,
    resetView,
    centerDiagram,
    components,
    connections,
    selectedCompIds,
  } = useEditor();

  const handleZoomIn = () => setZoom((z) => Math.min(4, z * 1.15));
  const handleZoomOut = () => setZoom((z) => Math.max(0.2, z / 1.15));

  // Helper to extract CSS rules and embed them inside the SVG clone
  const getStyledSVGSource = (svgElem: HTMLElement): string => {
    const svgClone = svgElem.cloneNode(true) as SVGSVGElement;

    if (!svgClone.getAttribute("width")) svgClone.setAttribute("width", "100%");
    if (!svgClone.getAttribute("height")) svgClone.setAttribute("height", "100%");

    let styles = "";
    try {
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          for (const rule of Array.from(sheet.cssRules)) {
            styles += rule.cssText + "\n";
          }
        } catch (e) {
          // Ignore cross-origin stylesheet errors
        }
      }
    } catch (e) {
      // Ignore styles extraction errors
    }

    const styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
    styleElem.textContent = styles;
    svgClone.insertBefore(styleElem, svgClone.firstChild);

    const serializer = new XMLSerializer();
    return serializer.serializeToString(svgClone);
  };

  // Exporters
  const exportSVG = () => {
    const svgElem = document.getElementById("schematic-svg");
    if (!svgElem) return;
    let source = getStyledSVGSource(svgElem);
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    const trigger = document.createElement("a");
    trigger.href = url;
    trigger.download = "circuit_schematic.svg";
    trigger.click();
  };

  const exportPNG = () => {
    const svgElem = document.getElementById("schematic-svg");
    if (!svgElem) return;
    const source = getStyledSVGSource(svgElem);
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#0f172a"; // CAD dark background
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const url = canvas.toDataURL("image/png");
        const trigger = document.createElement("a");
        trigger.href = url;
        trigger.download = "circuit_schematic.png";
        trigger.click();
      }
    };
  };

  const handlePrint = () => {
    const svgElem = document.getElementById("schematic-svg");
    const printWindow = window.open("", "_blank");
    if (!printWindow || !svgElem) return;
    const source = getStyledSVGSource(svgElem);
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
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ components, connections }, null, 2));
    const trigger = document.createElement("a");
    trigger.href = dataStr;
    trigger.download = "circuit_design.json";
    trigger.click();
  };

  return (
    <div className="flex flex-wrap items-center justify-between border-b border-border/40 bg-background/50 px-4 py-2.5 gap-2 text-xs backdrop-blur-md">
      
      {/* Tool Selection (Select vs Pan) */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => setToolMode("select")}
          className={`rounded-md p-1.5 transition ${
            toolMode === "select" ? "bg-brand text-white" : "hover:bg-secondary/60 text-muted-foreground hover:text-foreground"
          }`}
          title="Select Tool (V)"
        >
          <MousePointer className="size-4" />
        </button>
        <button
          onClick={() => setToolMode("pan")}
          className={`rounded-md p-1.5 transition ${
            toolMode === "pan" ? "bg-brand text-white" : "hover:bg-secondary/60 text-muted-foreground hover:text-foreground"
          }`}
          title="Pan Tool (H or Space)"
        >
          <Hand className="size-4" />
        </button>
        
        <div className="h-4 w-[1px] bg-border/60 mx-1.5" />
        
        {/* Undo / Redo */}
        <button
          onClick={undo}
          disabled={!canUndo}
          className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground disabled:opacity-40"
          title="Undo (Ctrl+Z)"
        >
          <Undo2 className="size-3.5" />
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground disabled:opacity-40"
          title="Redo (Ctrl+Y)"
        >
          <Redo2 className="size-3.5" />
        </button>
      </div>

      {/* Workspace actions */}
      <div className="flex items-center gap-1.5">
        {/* Selection clipboard */}
        <button
          onClick={copySelected}
          disabled={selectedCompIds.size === 0}
          className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground disabled:opacity-40"
          title="Copy Selection (Ctrl+C)"
        >
          <Copy className="size-3.5" />
        </button>
        <button
          onClick={pasteCopied}
          className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground"
          title="Paste Clipboard (Ctrl+V)"
        >
          <Clipboard className="size-3.5" />
        </button>
        <button
          onClick={deleteSelected}
          disabled={selectedCompIds.size === 0}
          className="rounded-md p-1.5 hover:bg-secondary/60 text-destructive hover:bg-destructive/10 disabled:opacity-40"
          title="Delete Selected (Del)"
        >
          <Trash2 className="size-3.5" />
        </button>

        <div className="h-4 w-[1px] bg-border/60 mx-1.5" />

        {/* Viewport operations */}
        <button onClick={handleZoomOut} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Zoom Out"><ZoomOut className="size-4" /></button>
        <span className="min-w-[40px] text-center font-mono font-semibold text-muted-foreground">{Math.round(zoom * 100)}%</span>
        <button onClick={handleZoomIn} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Zoom In"><ZoomIn className="size-4" /></button>
        <button onClick={centerDiagram} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Fit to Screen"><Maximize2 className="size-3.5" /></button>
        <button onClick={resetView} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Reset View"><RefreshCw className="size-3.5" /></button>

        <div className="h-4 w-[1px] bg-border/60 mx-1.5" />

        {/* Grid and labels visibility filters */}
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={`rounded-md p-1.5 transition ${showGrid ? "text-brand bg-brand/5" : "text-muted-foreground hover:text-foreground"}`}
          title="Toggle Grid"
        >
          <Grid className="size-3.5" />
        </button>
        <button
          onClick={() => setShowLabels(!showLabels)}
          className={`rounded-md p-1.5 transition ${showLabels ? "text-brand bg-brand/5" : "text-muted-foreground hover:text-foreground"}`}
          title="Toggle Component Labels"
        >
          {showLabels ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
        </button>
      </div>

      {/* Search and Exporters */}
      <div className="flex items-center gap-2">
        {/* Real-time search bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-2.5 size-3.5 text-muted-foreground/60" />
          <input
            type="text"
            placeholder="Search parts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-32 rounded-lg border border-border bg-background py-1 pl-8 pr-2.5 text-xs outline-none focus:border-brand focus:ring-1 focus:ring-brand/40 transition"
          />
        </div>

        <div className="h-4 w-[1px] bg-border/60 mx-1.5" />

        {/* CAD Exporters */}
        <button onClick={exportSVG} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1.5 hover:bg-accent font-medium"><Download className="size-3" /> SVG</button>
        <button onClick={exportPNG} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1.5 hover:bg-accent font-medium"><Download className="size-3" /> PNG</button>
        <button onClick={exportJSON} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1.5 hover:bg-accent font-medium" title="Export Circuit JSON"><FileCode className="size-3" /> JSON</button>
        <button onClick={handlePrint} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1.5 hover:bg-accent font-medium"><Printer className="size-3" /> Print</button>
      </div>
    </div>
  );
};
