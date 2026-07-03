import React from "react";
import { useEditor } from "./EditorContext";
import { normalizeType, COMPONENT_DIMENSIONS, getPinConfig } from "@/components/CircuitRenderer/PinMap";
import { X, Search, Info, Link, HelpCircle } from "lucide-react";
import { routeWire } from "@/utils/wireRouting";

export const Sidebar: React.FC = () => {
  const {
    components,
    connections,
    selectedCompIds,
    setSelectedCompIds,
    selectedWireIndex,
    setSelectedWireIndex,
    rotateComponent,
  } = useEditor();

  const handleClose = () => {
    setSelectedCompIds(new Set());
    setSelectedWireIndex(null);
  };

  // 1. Resolve selected component details
  const getSingleSelectedComponent = () => {
    if (selectedCompIds.size !== 1) return null;
    const id = Array.from(selectedCompIds)[0];
    return components.find((c) => c.id === id) || null;
  };

  const selectedComp = getSingleSelectedComponent();

  // Find connected nodes
  const getConnectedNodes = (cId: string) => {
    const list: Array<{ pin: string; device: string; devicePin: string }> = [];
    connections.forEach((conn) => {
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

  const getComponentSpecs = (type: string) => {
    const norm = normalizeType(type).toLowerCase();
    
    if (norm.includes("arduino")) {
      return {
        desc: "Arduino microcontroller board based on ATmega328P. Runs firmware, handles ADC inputs and digital outputs.",
        pins: "14 Digital I/O, 6 Analog Input Pins",
        voltage: "5V Operating Voltage (USB / VIN)",
        current: "20mA max per I/O pin",
        datasheet: "https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf",
      };
    }
    if (norm.includes("esp32")) {
      return {
        desc: "ESP32 high-performance Wi-Fi + Bluetooth + BLE microcontroller module. Excellent for IoT applications.",
        pins: "36 GPIOs with multiple ADC, DAC, and PWM functions",
        voltage: "3.3V Operating Voltage",
        current: "Average 80mA (peaks up to 240mA during Wi-Fi transmission)",
        datasheet: "https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf",
      };
    }
    if (norm.includes("led")) {
      return {
        desc: "Semiconductor light source. Emits light when electric current flows through it in the forward direction.",
        pins: "Anode (+), Cathode (-)",
        voltage: "Forward voltage range: 1.8V - 3.2V depending on color",
        current: "Typical operating current: 20mA",
        datasheet: "https://en.wikipedia.org/wiki/Light-emitting_diode",
      };
    }
    if (norm.includes("resistor")) {
      return {
        desc: "Passive two-terminal electrical component that implements electrical resistance as a circuit element.",
        pins: "Left Terminal, Right Terminal",
        voltage: "Limits voltage based on Ohm's Law (V = I * R)",
        current: "Dissipates power as heat (Rating: 0.25W)",
        datasheet: "https://en.wikipedia.org/wiki/Resistor",
      };
    }
    if (norm.includes("capacitor")) {
      return {
        desc: "Passive component that stores electrical energy in an electric field. Blocks DC and filters AC signals.",
        pins: "Positive, Negative (if electrolytic)",
        voltage: "Filters ripple on power rails",
        current: "Transient current filtering",
        datasheet: "https://en.wikipedia.org/wiki/Capacitor",
      };
    }
    if (norm.includes("motor") || norm.includes("servo")) {
      return {
        desc: "Electromechanical actuator. Converts electrical energy into kinetic mechanical rotation.",
        pins: "VCC, GND, Signal/Control wire",
        voltage: "5V - 12V operating range",
        current: "Draws high peak currents (up to 500mA - 1A under load)",
        datasheet: "https://en.wikipedia.org/wiki/Electric_motor",
      };
    }

    return {
      desc: `Discrete engineering symbol (${type}) mapped to grid schematic trace connections.`,
      pins: "Multi-pin interface",
      voltage: "Low-voltage signal compatible",
      current: "Standard operational current",
      datasheet: `https://www.google.com/search?q=${type}+datasheet`,
    };
  };

  // 2. Resolve selected wire details
  const getSelectedWireDetails = () => {
    if (selectedWireIndex === null) return null;
    const conn = connections[selectedWireIndex];
    if (!conn) return null;

    const [fromId, fromPin] = conn.from.split(":");
    const [toId, toPin] = conn.to.split(":");

    // Find physical coordinates to compute Manhattan wire length
    const fromComp = components.find((c) => c.id === fromId);
    const toComp = components.find((c) => c.id === toId);

    let length = 0;
    if (fromComp && toComp) {
      // Trace the actual path to compute accurate segment lengths
      const fromPinCfg = getPinConfig(fromComp.type, fromPin);
      const toPinCfg = getPinConfig(toComp.type, toPin);

      // Rotate pin coordinates relative to component centers
      const rotatePoint = (pt: { x: number; y: number }, rotation: number, width: number, height: number) => {
        const rad = (rotation * Math.PI) / 180;
        const cx = width / 2;
        const cy = height / 2;
        const x = pt.x - cx;
        const y = pt.y - cy;
        return {
          x: Math.round(cx + x * Math.cos(rad) - y * Math.sin(rad)),
          y: Math.round(cy + x * Math.sin(rad) + y * Math.cos(rad)),
        };
      };

      const normFrom = normalizeType(fromComp.type);
      const dimsFrom = COMPONENT_DIMENSIONS[normFrom] || { width: 80, height: 50 };
      const absFromPin = rotatePoint(fromPinCfg, fromComp.rotation || 0, dimsFrom.width, dimsFrom.height);
      const startPt = { x: fromComp.x + absFromPin.x, y: fromComp.y + absFromPin.y };

      const normTo = normalizeType(toComp.type);
      const dimsTo = COMPONENT_DIMENSIONS[normTo] || { width: 80, height: 50 };
      const absToPin = rotatePoint(toPinCfg, toComp.rotation || 0, dimsTo.width, dimsTo.height);
      const endPt = { x: toComp.x + absToPin.x, y: toComp.y + absToPin.y };

      const path = routeWire(startPt.x, startPt.y, fromPinCfg.direction, endPt.x, endPt.y, toPinCfg.direction);
      for (let i = 0; i < path.length - 1; i++) {
        length += Math.abs(path[i + 1].x - path[i].x) + Math.abs(path[i + 1].y - path[i].y);
      }
    }

    // Determine wire coloring and voltage classification
    const pinLower = fromPin.toLowerCase();
    let wireColor = "#10b981"; // default green signal wire
    let voltageType = "GPIO / Signal";

    if (pinLower.includes("gnd") || pinLower.includes("ground")) {
      wireColor = "#64748b"; // slate ground
      voltageType = "Ground (0V Reference)";
    } else if (pinLower.includes("5v") || pinLower.includes("vcc")) {
      wireColor = "#ef4444"; // red power
      voltageType = "DC Power (5V Rail)";
    } else if (pinLower.includes("3v") || pinLower.includes("3.3v")) {
      wireColor = "#f59e0b"; // amber power
      voltageType = "DC Power (3.3V Rail)";
    } else if (pinLower.includes("analog") || pinLower.startsWith("a")) {
      voltageType = "Analog Input (ADC)";
    } else if (pinLower.includes("pwm")) {
      voltageType = "Pulse Width Modulation (PWM)";
    }

    return {
      signalName: `NET_${fromId}_${fromPin}_TO_${toId}_${toPin}`.toUpperCase(),
      source: conn.from,
      destination: conn.to,
      length: `${length}px`,
      color: wireColor,
      voltageType,
    };
  };

  const selectedWire = getSelectedWireDetails();

  return (
    <div className="w-80 border-l border-border/40 bg-background/55 backdrop-blur-md flex flex-col h-full overflow-hidden transition-all duration-300">
      <div className="flex items-center justify-between border-b border-border/40 p-4">
        <h3 className="font-semibold text-foreground flex items-center gap-1.5">
          <Info className="size-4 text-brand" /> Inspector Panel
        </h3>
        {(selectedComp || selectedWire) && (
          <button
            onClick={handleClose}
            className="rounded-md p-1 hover:bg-secondary/60 text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {selectedComp ? (
          // 1. Component Inspector Mode
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Device Reference</span>
              <h2 className="font-mono text-base font-bold text-foreground mt-0.5">{selectedComp.id}</h2>
              <span className="inline-block rounded bg-secondary/80 px-2 py-0.5 font-sans text-[10px] text-foreground font-semibold mt-1 capitalize">
                {selectedComp.type}
              </span>
            </div>

            <div>
              <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Specs & Properties</span>
              <table className="w-full mt-1 border-collapse text-[11px]">
                <tbody>
                  <tr className="border-b border-border/20 py-1">
                    <td className="py-1 text-muted-foreground">Voltage</td>
                    <td className="py-1 font-mono font-semibold text-foreground text-right">{getComponentSpecs(selectedComp.type).voltage}</td>
                  </tr>
                  <tr className="border-b border-border/20 py-1">
                    <td className="py-1 text-muted-foreground">Current</td>
                    <td className="py-1 font-mono font-semibold text-foreground text-right">{getComponentSpecs(selectedComp.type).current}</td>
                  </tr>
                  <tr className="border-b border-border/20 py-1">
                    <td className="py-1 text-muted-foreground">Interface</td>
                    <td className="py-1 font-mono font-semibold text-foreground text-right">{getComponentSpecs(selectedComp.type).pins}</td>
                  </tr>
                  {selectedComp.value && (
                    <tr className="border-b border-border/20 py-1">
                      <td className="py-1 text-muted-foreground">Value</td>
                      <td className="py-1 font-mono font-semibold text-brand text-right">{selectedComp.value}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider font-sans">Description</span>
              <p className="text-muted-foreground mt-1 leading-relaxed text-[11px]">{getComponentSpecs(selectedComp.type).desc}</p>
            </div>

            {/* Pins sub-list */}
            <div>
              <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Pin Mapping</span>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {Object.keys(getPinConfig(selectedComp.type, "") || {}).map((pinName) => {
                  const pin = getPinConfig(selectedComp.type, pinName);
                  return (
                    <span key={pinName} className="rounded bg-muted px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground">
                      {pinName} ({pin.direction})
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Net connection nodes list */}
            <div>
              <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider font-sans">Connected Nets</span>
              <div className="mt-1.5 space-y-1">
                {getConnectedNodes(selectedComp.id).length > 0 ? (
                  getConnectedNodes(selectedComp.id).map((conn, idx) => (
                    <div key={idx} className="flex justify-between rounded bg-muted/40 px-2 py-1 font-mono text-[9px] text-muted-foreground">
                      <span>Pin {conn.pin}</span>
                      <span>➜</span>
                      <span>{conn.device}:{conn.devicePin}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-[10px] text-muted-foreground/60 italic">No connections established.</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/40">
              <div>
                <span className="text-[10px] text-muted-foreground uppercase">Orientation</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="font-semibold text-foreground">{selectedComp.rotation || 0}°</span>
                  <button
                    onClick={() => rotateComponent(selectedComp.id)}
                    className="rounded border border-border px-1.5 py-0.5 text-[9px] hover:bg-accent text-brand font-medium active:scale-95 transition"
                  >
                    Rotate
                  </button>
                </div>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase">Coordinates</span>
                <p className="font-mono text-foreground mt-0.5">X: {selectedComp.x} Y: {selectedComp.y}</p>
              </div>
            </div>

            <a
              href={getComponentSpecs(selectedComp.type).datasheet}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border/80 bg-background py-2 hover:bg-accent font-medium text-foreground transition"
            >
              <Link className="size-3" /> External Datasheet
            </a>
          </div>
        ) : selectedWire ? (
          // 2. Wire Inspector Mode
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Signal Net ID</span>
              <h2 className="font-mono text-[11px] font-bold text-foreground mt-0.5 break-all leading-normal bg-muted/45 p-2 rounded-lg border border-border/30">
                {selectedWire.signalName}
              </h2>
            </div>

            <div>
              <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Properties</span>
              <table className="w-full mt-1.5 border-collapse text-[11px]">
                <tbody>
                  <tr className="border-b border-border/20 py-1">
                    <td className="py-1.5 text-muted-foreground">Source Node</td>
                    <td className="py-1.5 font-mono font-semibold text-foreground text-right">{selectedWire.source}</td>
                  </tr>
                  <tr className="border-b border-border/20 py-1">
                    <td className="py-1.5 text-muted-foreground">Dest Node</td>
                    <td className="py-1.5 font-mono font-semibold text-foreground text-right">{selectedWire.destination}</td>
                  </tr>
                  <tr className="border-b border-border/20 py-1">
                    <td className="py-1.5 text-muted-foreground">Manhattan Length</td>
                    <td className="py-1.5 font-mono font-semibold text-foreground text-right">{selectedWire.length}</td>
                  </tr>
                  <tr className="border-b border-border/20 py-1">
                    <td className="py-1.5 text-muted-foreground">Signal Color</td>
                    <td className="py-1.5 text-right flex items-center justify-end gap-1.5">
                      <span className="size-2.5 rounded-full inline-block" style={{ backgroundColor: selectedWire.color }} />
                      <span className="font-mono font-semibold text-foreground">{selectedWire.color}</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border/20 py-1">
                    <td className="py-1.5 text-muted-foreground">Voltage Type</td>
                    <td className="py-1.5 font-mono font-semibold text-brand text-right">{selectedWire.voltageType}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <span className="font-semibold text-muted-foreground block text-[10px] uppercase tracking-wider">Signal Details</span>
              <p className="text-muted-foreground mt-1.5 leading-relaxed">
                This net establishes a direct low-impedance electrical route snapped to the 20px Manhattan grid to connect pin {selectedWire.source.split(":")[1]} of {selectedWire.source.split(":")[0]} directly to pin {selectedWire.destination.split(":")[1]} of {selectedWire.destination.split(":")[0]}.
              </p>
            </div>
          </div>
        ) : (
          // 3. Empty State Mode
          <div className="h-full flex flex-col items-center justify-center text-center p-6 text-muted-foreground space-y-2 mt-12">
            <HelpCircle className="size-8 text-muted-foreground/40" />
            <p className="font-medium text-foreground">No Item Selected</p>
            <p className="text-[11px]">Click on any circuit component symbol or connection trace wire inside the workspace to inspect its electronic specs, connected nets, and datasheets.</p>
          </div>
        )}
      </div>
    </div>
  );
};
