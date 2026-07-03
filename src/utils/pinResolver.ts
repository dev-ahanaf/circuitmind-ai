import { getPinConfig, COMPONENT_DIMENSIONS, normalizeType } from "@/components/CircuitRenderer/PinMap";
import { rotatePoint, rotateDirection } from "./geometry";
import { type CircuitComponent } from "@/types/Component";

export interface ResolvedPin {
  x: number;
  y: number;
  direction: "left" | "right" | "top" | "bottom";
}

/**
 * Computes absolute canvas coordinates for a given pin, accounting for component rotation.
 */
export function getRotatedPinConfig(
  comp: CircuitComponent,
  pinName: string
): ResolvedPin {
  const normType = normalizeType(comp.type);
  const dims = COMPONENT_DIMENSIONS[normType] || { width: 80, height: 50 };
  const pin = getPinConfig(comp.type, pinName);

  const rotation = comp.rotation || 0;
  if (rotation === 0) {
    return {
      x: comp.x + pin.x,
      y: comp.y + pin.y,
      direction: pin.direction,
    };
  }

  // Calculate local center of bounding box
  const cx = dims.width / 2;
  const cy = dims.height / 2;

  // Rotate local pin coordinates around local center
  const rotatedLocal = rotatePoint(pin.x, pin.y, cx, cy, rotation);
  const rotatedDir = rotateDirection(pin.direction, rotation);

  return {
    x: comp.x + rotatedLocal.x,
    y: comp.y + rotatedLocal.y,
    direction: rotatedDir,
  };
}
