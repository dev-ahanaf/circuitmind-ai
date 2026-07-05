import { ComponentCategory, SignalType, PinCapability, BoardPlatform, DifficultyLevel } from "./types";

export interface ProjectMetadata {
  projectId: string;
  title: string;
  description: string;
  category: string;
  difficulty: DifficultyLevel;
  estimatedBuildTime: number;
  estimatedCostBDT: number;
  createdAt: string;
  updatedAt: string;
  version: string;
}

export interface ControllerPin {
  pinNumber: string;
  capabilities: PinCapability[];
  reserved: boolean;
  notes?: string;
}

export interface ControllerConfig {
  id: string;
  name: string;
  type: string;
  voltage: number;
  logicLevel: number;
  availablePins: ControllerPin[];
  reservedPins: string[];
  communicationSupport: string[];
  adcPins: string[];
  pwmPins: string[];
  i2cPins: string[];
  spiPins: string[];
  uartPins: string[];
  bootSensitivePins: string[];
}

export interface ComponentPin {
  pinId: string;
  name: string;
  function: string;
  voltage?: number;
}

export interface ProjectComponent {
  id: string;
  name: string;
  type: string;
  category: ComponentCategory;
  quantity: number;
  voltage: number;
  currentRequirement: number; // mA
  pins: ComponentPin[];
  purpose: string;
  datasheetUrl?: string;
  notes?: string;
  priceBDT: number;
}

export interface PowerRail {
  name: string;
  voltage: number;
  sourceComponentId: string;
  currentCapacity: number; // mA
}

export interface PowerSystem {
  inputSource: string;
  inputVoltage: number;
  regulators: string[];
  rails: PowerRail[];
  currentBudget: {
    totalRequired: number; // mA
    totalAvailable: number; // mA
  };
  commonGroundRequired: boolean;
  safetyNotes: string[];
}

export interface VoltageDomain {
  name: string;
  voltage: number;
  components: string[];
  notes?: string;
}

export interface BusesConfig {
  i2c: Array<{ id: string; sda: string; scl: string; speed?: number }>;
  spi: Array<{ id: string; mosi: string; miso: string; sck: string; cs: string }>;
  uart: Array<{ id: string; tx: string; rx: string; baud?: number }>;
  oneWire: Array<{ id: string; pin: string }>;
  analog: string[];
  digital: string[];
}

export interface GPIOAssignment {
  controllerPin: string;
  componentId: string;
  componentPin: string;
  function: string;
  signalType: SignalType;
  requiredCapability: PinCapability;
  notes?: string;
}

export interface ProjectConnection {
  id: string;
  fromComponent: string;
  fromPin: string;
  toComponent: string;
  toPin: string;
  signalName: string;
  signalType: SignalType;
  voltage: number;
  wireColor?: string;
  notes?: string;
}

export interface ComponentPosition {
  componentId: string;
  x: number;
  y: number;
  rotation?: number;
}

export interface WireRoute {
  connectionId: string;
  points: Array<{ x: number; y: number }>;
}

export interface DiagramConfig {
  canvasSize: { width: number; height: number };
  componentPositions: ComponentPosition[];
  wireRoutes: WireRoute[];
  layers: string[];
  exportSettings: Record<string, any>;
}

export interface FirmwareConfig {
  platform: BoardPlatform;
  board: string;
  language: string;
  libraries: string[];
  pinConstants: Record<string, string | number>;
  thresholds: Record<string, string | number>;
  setupLogic: string;
  loopLogic: string;
  helperFunctions: Array<{ name: string; signature: string; code: string }>;
  fullCode: string;
}

export interface BOMItem {
  componentName: string;
  quantity: number;
  specification: string;
  purpose: string;
  unitPriceBDT: number;
  totalPriceBDT: number;
  supplierNotes?: string;
}

export interface DocumentationConfig {
  assemblySteps: string[];
  testingSteps: string[];
  troubleshooting: string[];
  safetyNotes: string[];
  optimizationSuggestions: string[];
}

export interface ValidationSummary {
  errors: string[];
  warnings: string[];
  suggestions: string[];
  engineeringScore: number;
}

export interface EngineeringProjectModel {
  metadata: ProjectMetadata;
  controller: ControllerConfig;
  components: ProjectComponent[];
  powerSystem: PowerSystem;
  voltageDomains: VoltageDomain[];
  buses: BusesConfig;
  gpioAssignments: GPIOAssignment[];
  connections: ProjectConnection[];
  diagram: DiagramConfig;
  firmware: FirmwareConfig;
  bom: BOMItem[];
  documentation: DocumentationConfig;
  validation: ValidationSummary;
}
