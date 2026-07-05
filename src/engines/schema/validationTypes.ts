export interface ValidationMessage {
  type: "error" | "warning" | "info";
  message: string;
  code?: string;
  componentId?: string;
  pinNumber?: string;
}

export interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
  engineeringScore: number;
}
