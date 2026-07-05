import { z } from "zod";

export const ProjectMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  estimatedCostBDT: z.number(),
  timeToBuildHours: z.number(),
  version: z.string(),
});

export type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;

export const ProjectComponentSchema = z.object({
  id: z.string(),
  type: z.string(),
  label: z.string(),
  specification: z.string().optional(),
  qty: z.number(),
  purpose: z.string(),
  priceBDT: z.number(),
  x: z.number(),
  y: z.number(),
  rotation: z.number().optional(),
});

export type ProjectComponent = z.infer<typeof ProjectComponentSchema>;

export const ProjectConnectionSchema = z.object({
  from: z.string(),
  to: z.string(),
  netName: z.string().optional(),
  color: z.string().optional(),
});

export type ProjectConnection = z.infer<typeof ProjectConnectionSchema>;

export const GPIOAllocationSchema = z.object({
  pin: z.string(),
  purpose: z.string(),
  type: z.enum(["Digital", "Analog", "PWM", "I2C", "SPI", "UART"]),
});

export type GPIOAllocation = z.infer<typeof GPIOAllocationSchema>;

export const ControllerConfigSchema = z.object({
  id: z.string(),
  type: z.string(),
  gpioAllocation: z.record(z.string(), GPIOAllocationSchema),
  buses: z.array(
    z.object({
      type: z.enum(["I2C", "SPI", "UART"]),
      sdaPin: z.string().optional(),
      sclPin: z.string().optional(),
      mosiPin: z.string().optional(),
      misoPin: z.string().optional(),
      sckPin: z.string().optional(),
      csPin: z.string().optional(),
      rxPin: z.string().optional(),
      txPin: z.string().optional(),
    })
  ),
});

export type ControllerConfig = z.infer<typeof ControllerConfigSchema>;

export const PowerConfigSchema = z.object({
  voltageDomains: z.array(z.number()),
  powerRails: z.array(
    z.object({
      name: z.string(),
      voltage: z.number(),
      sourceComponentId: z.string(),
    })
  ),
  commonGround: z.boolean(),
  decouplingCapacitors: z.array(
    z.object({
      size: z.string(),
      componentId: z.string(),
      pinId: z.string(),
    })
  ),
});

export type PowerConfig = z.infer<typeof PowerConfigSchema>;

export const FirmwareConfigSchema = z.object({
  platform: z.enum(["arduino", "esp-idf", "stm32cube", "platformio"]),
  libraries: z.array(z.string()),
  constants: z.record(z.string(), z.union([z.string(), z.number()])),
  pinDefinitions: z.record(z.string(), z.union([z.string(), z.number()])),
  setupCode: z.string(),
  loopCode: z.string(),
  customFunctions: z.array(
    z.object({
      name: z.string(),
      signature: z.string(),
      code: z.string(),
    })
  ),
  safetyChecks: z.array(z.string()),
});

export type FirmwareConfig = z.infer<typeof FirmwareConfigSchema>;

export const DocumentationConfigSchema = z.object({
  overview: z.string(),
  explanation: z.string(),
  assemblySteps: z.array(z.string()),
  testingProcedures: z.array(z.string()),
  troubleshootingSteps: z.array(z.string()),
  safetyWarnings: z.array(z.string()),
});

export type DocumentationConfig = z.infer<typeof DocumentationConfigSchema>;

export const EngineeringProjectModelSchema = z.object({
  id: z.string(),
  metadata: ProjectMetadataSchema,
  components: z.array(ProjectComponentSchema),
  connections: z.array(ProjectConnectionSchema),
  controllers: z.array(ControllerConfigSchema),
  power: PowerConfigSchema,
  firmware: FirmwareConfigSchema,
  documentation: DocumentationConfigSchema,
});

export type EngineeringProjectModel = z.infer<typeof EngineeringProjectModelSchema>;
