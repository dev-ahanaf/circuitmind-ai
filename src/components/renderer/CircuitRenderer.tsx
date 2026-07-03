import React, { useState, useRef, useEffect } from "react";
import { autoLayout, type ComponentJSON, type ConnectionJSON, type CircuitJSON } from "@/utils/layout";
import { normalizeType, COMPONENT_DIMENSIONS } from "./PinMap";
import { WireRenderer } from "./WireRenderer";
import { ZoomIn, ZoomOut, Maximize2, Download, Printer, FileCode, X, Search, Info } from "lucide-react";
import { ArduinoUno } from "../svg/ArduinoUno";
import { ESP32, ArduinoNano, ESP8266 } from "../svg/ESP32";
import { Resistor, Capacitor, Potentiometer } from "../svg/Resistor";
import { LED, RGBLED, Diode } from "../svg/LED";
import { Battery, Battery9V, PowerSupply, Ground } from "../svg/Battery";
import { Switch, PushButton } from "../svg/Switch";
import { Buzzer, Servo, Relay } from "../svg/Buzzer";
import { DCMotor, StepperMotor, MotorDriver } from "../svg/Motor";
import { LDR, IRSensor, UltrasonicSensor, GasSensor } from "../svg/Sensor";
import { Transistor, MOSFET } from "../svg/Transistor";
import { LCD16x2, OLED } from "../svg/LCD16x2";
import { VoltageRegulator, LM358 } from "../svg/VoltageRegulator";
import { LogicGate } from "../svg/LogicGate";
import { Breadboard, BluetoothHC05, WiFiESP8266, BridgeRectifier, CrystalOscillator } from "../svg/Breadboard";

interface CircuitRendererProps {
  data: CircuitJSON;
}

export const CircuitRenderer: React.FC<CircuitRendererProps> = ({ data }) => {
  // Initialize coordinates using auto-layout
  const [components, setComponents] = useState<ComponentJSON[]>([]);
  const [selectedComp, setSelectedComp] = useState<ComponentJSON | null>(null);
  const [hoveredWire, setHoveredWire] = useState<number | null>(null);

  // Zoom & Pan state
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 80, y: 50 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });

  // Drag component state
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  const svgRef = useRef<SVGSVGElement | null>(null);

  // Load components when data changes
  useEffect(() => {
    if (data && data.components) {
      setComponents(autoLayout(JSON.parse(JSON.stringify(data.components))));
    }
  }, [data]);

  // Handle canvas mouse down (Panning or dragging component)
  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.button === 0 && !draggingId) {
      // Left click on background: start panning
      setIsPanning(true);
      panStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (isPanning) {
      setPan({
        x: e.clientX - panStart.current.x,
        y: e.clientY - panStart.current.y,
      });
    } else if (draggingId && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      // Translate screen coordinates to zoom/pan adjusted SVG coordinates
      const currentX = (e.clientX - rect.left - pan.x) / zoom - dragOffset.current.x;
      const currentY = (e.clientY - rect.top - pan.y) / zoom - dragOffset.current.y;
      
      // Snap to 10px grid
      const snappedX = Math.round(currentX / 10) * 10;
      const snappedY = Math.round(currentY / 10) * 10;

      setComponents((prev) =>
        prev.map((c) => (c.id === draggingId ? { ...c, x: snappedX, y: snappedY } : c))
      );
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    setDraggingId(null);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const scale = e.deltaY < 0 ? 1.05 : 0.95;
    setZoom((z) => Math.min(Math.max(0.4, z * scale), 2.5));
  };

  // Component Drag Start
  const startDragComp = (e: React.MouseEvent, c: ComponentJSON) => {
    e.stopPropagation();
    if (svgRef.current) {
      setDraggingId(c.id);
      setSelectedComp(c);
      const rect = svgRef.current.getBoundingClientRect();
      const clickX = (e.clientX - rect.left - pan.x) / zoom;
      const clickY = (e.clientY - rect.top - pan.y) / zoom;
      dragOffset.current = {
        x: clickX - (c.x || 0),
        y: clickY - (c.y || 0),
      };
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
    trigger.download = `${data.project?.title || "circuit"}_schematic.svg`;
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
        ctx.fillStyle = "#1e1b4b"; // Dark background default
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const url = canvas.toDataURL("image/png");
        const trigger = document.createElement("a");
        trigger.href = url;
        trigger.download = `${data.project?.title || "circuit"}_schematic.png`;
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
            svg { width: 90%; height: auto; }
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
    const jsonStr = JSON.stringify({ ...data, components }, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const trigger = document.createElement("a");
    trigger.href = url;
    trigger.download = `${data.project?.title || "circuit"}_data.json`;
    trigger.click();
  };

  // Match and render corresponding symbol
  const renderSymbol = (c: ComponentJSON) => {
    const isSelected = selectedComp?.id === c.id;
    const props = {
      id: c.id,
      label: c.label,
      value: c.value,
      selected: isSelected,
      onSelect: () => setSelectedComp(c),
    };

    const type = normalizeType(c.type);

    switch (type) {
      case "Arduino Uno": return <ArduinoUno {...props} />;
      case "Arduino Nano": return <ArduinoNano {...props} />;
      case "ESP32": return <ESP32 {...props} />;
      case "ESP8266": return <ESP8266 {...props} />;
      case "Resistor": return <Resistor {...props} />;
      case "Capacitor":
      case "Ceramic Capacitor":
        return <Capacitor {...props} />;
      case "Electrolytic Capacitor":
        return <Capacitor {...props} electrolytic />;
      case "LED": return <LED {...props} />;
      case "RGB LED": return <RGBLED {...props} />;
      case "Battery": return <Battery {...props} />;
      case "9V Battery": return <Battery9V {...props} />;
      case "Power Supply": return <PowerSupply {...props} />;
      case "Ground": return <Ground {...props} />;
      case "Switch": return <Switch {...props} />;
      case "Push Button": return <PushButton {...props} />;
      case "Buzzer": return <Buzzer {...props} />;
      case "Servo": return <Servo {...props} />;
      case "Relay": return <Relay {...props} />;
      case "DC Motor": return <DCMotor {...props} />;
      case "Stepper Motor": return <StepperMotor {...props} />;
      case "L293D":
      case "L298N":
      case "IC Socket":
        return <MotorDriver {...props} />;
      case "Breadboard": return <Breadboard {...props} />;
      case "LCD 16x2": return <LCD16x2 {...props} />;
      case "OLED":
      case "I2C Module":
        return <OLED {...props} />;
      case "Bluetooth HC05": return <BluetoothHC05 {...props} />;
      case "WiFi ESP8266": return <WiFiESP8266 {...props} />;
      case "IR Sensor": return <IRSensor {...props} />;
      case "Ultrasonic Sensor": return <UltrasonicSensor {...props} />;
      case "Flame Sensor":
      case "Gas Sensor":
        return <GasSensor {...props} />;
      case "LDR": return <LDR {...props} />;
      case "Potentiometer": return <Potentiometer {...props} />;
      case "Transistor NPN": return <Transistor {...props} />;
      case "Transistor PNP": return <Transistor {...props} pnp />;
      case "MOSFET": return <MOSFET {...props} />;
      case "Diode": return <Diode {...props} />;
      case "Zener Diode": return <Diode {...props} zener />;
      case "Bridge Rectifier": return <BridgeRectifier {...props} />;
      case "Crystal Oscillator": return <CrystalOscillator {...props} />;
      case "Voltage Regulator 7805":
      case "LM317":
        return <VoltageRegulator {...props} />;
      case "LM358": return <LM358 {...props} />;
      case "AND Gate":
      case "OR Gate":
      case "NOT Gate":
      case "NAND":
      case "NOR":
      case "XOR":
        return <LogicGate {...props} type={type.split(" ")[0] as any} />;
      default:
        // Default rectangle fallback for unknown custom components
        return (
          <g onClick={() => setSelectedComp(c)}>
            <rect x="0" y="0" width="80" height="50" rx="3" className={`fill-card stroke-2 ${isSelected ? "stroke-brand" : "stroke-border"}`} />
            <text x="40" y="25" textAnchor="middle" className="font-mono text-[9px] fill-foreground font-bold">{c.id}</text>
            <text x="40" y="42" textAnchor="middle" className="font-mono text-[7px] fill-muted-foreground">{c.type}</text>
          </g>
        );
    }
  };

  // Fetch component dynamic descriptions
  const getComponentInfo = (c: ComponentJSON) => {
    const type = normalizeType(c.type).toLowerCase();
    if (type.includes("arduino") || type.includes("esp32")) {
      return {
        desc: "Main microcontroller development board. Coordinates pin inputs, runs firmware cycles, and controls peripherals.",
        pinCount: "14+ GPIO",
        datasheet: "https://www.arduino.cc/en/hardware",
      };
    }
    if (type.includes("resistor")) {
      return {
        desc: "Passive component that limits electric current flow, establishing voltage drops inside active circuits.",
        pinCount: "2 Pins",
        datasheet: "https://en.wikipedia.org/wiki/Resistor",
      };
    }
    if (type.includes("capacitor")) {
      return {
        desc: "Filters high-frequency noises, bypasses ripples, and stores electrical potential temporarily.",
        pinCount: "2 Pins",
        datasheet: "https://en.wikipedia.org/wiki/Capacitor",
      };
    }
    if (type.includes("led")) {
      return {
        desc: "Light Emitting Diode. Emits photons when forward biased. Requires current-limiting resistor to protect from burnout.",
        pinCount: "2 or 4 Pins",
        datasheet: "https://en.wikipedia.org/wiki/Light-emitting_diode",
      };
    }
    if (type.includes("sensor")) {
      return {
        desc: "Detects physical parameter variations (light, gas, distance) and outputs corresponding analog or digital signals.",
        pinCount: "3 or 4 Pins",
        datasheet: "https://components101.com/sensors",
      };
    }
    return {
      desc: `Discrete EEE component (${c.type}) configured as part of the ${data.project?.title || "schematic"} design.`,
      pinCount: "Standard leads",
      datasheet: `https://www.google.com/search?q=${c.type}+datasheet`,
    };
  };

  return (
    <div className="relative flex h-[580px] w-full flex-col overflow-hidden rounded-xl border border-border bg-slate-950/20 dark:bg-slate-900/30">
      
      {/* 1. Control Toolbar */}
      <div className="flex items-center justify-between border-b border-border/40 bg-background/50 px-4 py-2 text-xs">
        <div className="flex items-center gap-1">
          <button onClick={() => setZoom((z) => Math.max(0.4, z - 0.1))} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Zoom Out"><ZoomOut className="size-4" /></button>
          <span className="min-w-[40px] text-center font-mono font-semibold text-muted-foreground">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.min(2.5, z + 0.1))} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground" title="Zoom In"><ZoomIn className="size-4" /></button>
          <button onClick={() => { setZoom(0.85); setPan({ x: 80, y: 50 }); }} className="rounded-md p-1.5 hover:bg-secondary/60 text-muted-foreground hover:text-foreground ml-1" title="Reset View"><Maximize2 className="size-3.5" /></button>
          <span className="text-[10px] text-muted-foreground/60 hidden sm:inline ml-2">🖱️ Drag background to Pan · Drag parts to arrange</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button onClick={exportSVG} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent"><Download className="size-3.5" /> SVG</button>
          <button onClick={exportPNG} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent"><Download className="size-3.5" /> PNG</button>
          <button onClick={printSchematic} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent"><Printer className="size-3.5" /> Print</button>
          <button onClick={exportJSON} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2.5 py-1.5 hover:bg-accent" title="Download Source JSON"><FileCode className="size-3.5" /></button>
        </div>
      </div>

      {/* 2. Interactive SVG Canvas */}
      <div className="relative flex-1 cursor-grab active:cursor-grabbing select-none overflow-hidden">
        <svg
          ref={svgRef}
          id="schematic-svg"
          width="100%"
          height="100%"
          className="bg-slate-900/5 dark:bg-slate-950/10"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          {/* Schematic gridlines pattern */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-muted-foreground/5 dark:stroke-muted-foreground/[0.03]" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Zoom and Pan group wrapper */}
          <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
            
            {/* Draw Wiring Connections */}
            {data.connections &&
              data.connections.map((conn, idx) => (
                <WireRenderer
                  key={`${conn.from}-${conn.to}-${idx}`}
                  from={conn.from}
                  to={conn.to}
                  components={components}
                  hovered={hoveredWire === idx}
                  selected={
                    selectedComp?.id === conn.from.split(":")[0] ||
                    selectedComp?.id === conn.to.split(":")[0]
                  }
                  onHover={(h) => setHoveredWire(h ? idx : null)}
                />
              ))}

            {/* Draw Component Symbols */}
            {components.map((c) => (
              <g
                key={c.id}
                transform={`translate(${c.x || 0}, ${c.y || 0})`}
                onMouseDown={(e) => startDragComp(e, c)}
              >
                {renderSymbol(c)}
              </g>
            ))}
          </g>
        </svg>

        {/* 3. Component Details Side Panel */}
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
                onClick={() => setSelectedComp(null)}
                className="rounded-md p-1 hover:bg-secondary/60 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Description</span>
                <p className="text-muted-foreground mt-0.5 leading-relaxed">{getComponentInfo(selectedComp).desc}</p>
              </div>
              
              {selectedComp.value && (
                <div>
                  <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Value / Spec</span>
                  <span className="inline-block mt-0.5 rounded bg-secondary/80 px-2 py-0.5 font-mono text-[10px] text-foreground font-semibold">{selectedComp.value}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-border/40">
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase">Pins Exposing</span>
                  <p className="font-semibold text-foreground mt-0.5">{getComponentInfo(selectedComp).pinCount}</p>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase">Placement Snap</span>
                  <p className="font-mono text-foreground mt-0.5">X:{selectedComp.x} Y:{selectedComp.y}</p>
                </div>
              </div>

              <a
                href={getComponentInfo(selectedComp).datasheet}
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
