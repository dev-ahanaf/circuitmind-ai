import { z } from "zod";

const DifficultyLevelSchema = z.enum(["Beginner", "Intermediate", "Advanced"]);
const ComponentCategorySchema = z.enum([
  "MCU",
  "Sensor",
  "Actuator",
  "Display",
  "Communication",
  "Power",
  "Passive",
  "Discrete",
  "IC",
  "Interface",
  "Other"
]);
const SignalTypeSchema = z.enum([
  "Digital",
  "Analog",
  "PWM",
  "I2C",
  "SPI",
  "UART",
  "OneWire",
  "Power",
  "Ground"
]);
const PinCapabilitySchema = z.enum([
  "GPIO",
  "ADC",
  "DAC",
  "PWM",
  "I2C_SDA",
  "I2C_SCL",
  "SPI_MOSI",
  "SPI_MISO",
  "SPI_SCK",
  "SPI_CS",
  "UART_RX",
  "UART_TX",
  "POWER",
  "GND"
]);
const BoardPlatformSchema = z.enum(["arduino", "esp-idf", "stm32cube", "platformio"]);

export const ProjectMetadataSchema = z.object({
  projectId: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  difficulty: DifficultyLevelSchema,
  estimatedBuildTime: z.number(),
  estimatedCostBDT: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  version: z.string(),
});

export const ControllerPinSchema = z.object({
  pinNumber: z.string(),
  capabilities: z.array(PinCapabilitySchema),
  reserved: z.boolean(),
  notes: z.string().optional(),
});

export const ControllerConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  voltage: z.number(),
  logicLevel: z.number(),
  availablePins: z.array(ControllerPinSchema),
  reservedPins: z.array(z.string()),
  communicationSupport: z.array(z.string()),
  adcPins: z.array(z.string()),
  pwmPins: z.array(z.string()),
  i2cPins: z.array(z.string()),
  spiPins: z.array(z.string()),
  uartPins: z.array(z.string()),
  bootSensitivePins: z.array(z.string()),
});

export const ComponentPinSchema = z.object({
  pinId: z.string(),
  name: z.string(),
  function: z.string(),
  voltage: z.number().optional(),
});

export const ProjectComponentSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  category: ComponentCategorySchema,
  quantity: z.number(),
  voltage: z.number(),
  currentRequirement: z.number(),
  pins: z.array(ComponentPinSchema),
  purpose: z.string(),
  datasheetUrl: z.string().optional(),
  notes: z.string().optional(),
  priceBDT: z.number(),
});

export const PowerRailSchema = z.object({
  name: z.string(),
  voltage: z.number(),
  sourceComponentId: z.string(),
  currentCapacity: z.number(),
});

export const PowerSystemSchema = z.object({
  inputSource: z.string(),
  inputVoltage: z.number(),
  regulators: z.array(z.string()),
  rails: z.array(PowerRailSchema),
  currentBudget: z.object({
    totalRequired: z.number(),
    totalAvailable: z.number(),
  }),
  commonGroundRequired: z.boolean(),
  safetyNotes: z.array(z.string()),
});

export const VoltageDomainSchema = z.object({
  name: z.string(),
  voltage: z.number(),
  components: z.array(z.string()),
  notes: z.string().optional(),
});

export const BusesConfigSchema = z.object({
  i2c: z.array(
    z.object({
      id: z.string(),
      sda: z.string(),
      scl: z.string(),
      speed: z.number().optional(),
    })
  ),
  spi: z.array(
    z.object({
      id: z.string(),
      mosi: z.string(),
      miso: z.string(),
      sck: z.string(),
      cs: z.string(),
    })
  ),
  uart: z.array(
    z.object({
      id: z.string(),
      tx: z.string(),
      rx: z.string(),
      baud: z.number().optional(),
    })
  ),
  oneWire: z.array(
    z.object({
      id: z.string(),
      pin: z.string(),
    })
  ),
  analog: z.array(z.string()),
  digital: z.array(z.string()),
});

export const GPIOAssignmentSchema = z.object({
  controllerPin: z.string(),
  componentId: z.string(),
  componentPin: z.string(),
  function: z.string(),
  signalType: SignalTypeSchema,
  requiredCapability: PinCapabilitySchema,
  notes: z.string().optional(),
});

export const ProjectConnectionSchema = z.object({
  id: z.string(),
  fromComponent: z.string(),
  fromPin: z.string(),
  toComponent: z.string(),
  toPin: z.string(),
  signalName: z.string(),
  signalType: SignalTypeSchema,
  voltage: z.number(),
  wireColor: z.string().optional(),
  notes: z.string().optional(),
});

export const ComponentPositionSchema = z.object({
  componentId: z.string(),
  x: z.number(),
  y: z.number(),
  rotation: z.number().optional(),
});

export const WireRouteSchema = z.object({
  connectionId: z.string(),
  points: z.array(z.object({ x: z.number(), y: z.number() })),
});

export const DiagramConfigSchema = z.object({
  canvasSize: z.object({ width: z.number(), height: z.number() }),
  componentPositions: z.array(ComponentPositionSchema),
  wireRoutes: z.array(WireRouteSchema),
  layers: z.array(z.string()),
  exportSettings: z.record(z.any()),
});

export const FirmwareConfigSchema = z.object({
  platform: BoardPlatformSchema,
  board: z.string(),
  language: z.string(),
  libraries: z.array(z.string()),
  pinConstants: z.record(z.union([z.string(), z.number()])),
  thresholds: z.record(z.union([z.string(), z.number()])),
  setupLogic: z.string(),
  loopLogic: z.string(),
  helperFunctions: z.array(
    z.object({
      name: z.string(),
      signature: z.string(),
      code: z.string(),
    })
  ),
  fullCode: z.string(),
});

export const BOMItemSchema = z.object({
  componentName: z.string(),
  quantity: z.number(),
  specification: z.string(),
  purpose: z.string(),
  unitPriceBDT: z.number(),
  totalPriceBDT: z.number(),
  supplierNotes: z.string().optional(),
});

export const DocumentationConfigSchema = z.object({
  assemblySteps: z.array(z.string()),
  testingSteps: z.array(z.string()),
  troubleshooting: z.array(z.string()),
  safetyNotes: z.array(z.string()),
  optimizationSuggestions: z.array(z.string()),
});

export const ValidationSummarySchema = z.object({
  errors: z.array(z.string()),
  warnings: z.array(z.string()),
  suggestions: z.array(z.string()),
  engineeringScore: z.number(),
});

export const EngineeringProjectModelSchema = z.object({
  metadata: ProjectMetadataSchema,
  controller: ControllerConfigSchema,
  components: z.array(ProjectComponentSchema),
  powerSystem: PowerSystemSchema,
  voltageDomains: z.array(VoltageDomainSchema),
  buses: BusesConfigSchema,
  gpioAssignments: z.array(GPIOAssignmentSchema),
  connections: z.array(ProjectConnectionSchema),
  diagram: DiagramConfigSchema,
  firmware: FirmwareConfigSchema,
  bom: z.array(BOMItemSchema),
  documentation: DocumentationConfigSchema,
  validation: ValidationSummarySchema,
});
