export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("Error boundary caught error:", error, context);
}
