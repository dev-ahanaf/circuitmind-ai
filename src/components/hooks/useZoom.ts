import { useState } from "react";

export function useZoom(initialZoom = 0.85, minZoom = 0.3, maxZoom = 2.5) {
  const [zoom, setZoom] = useState(initialZoom);

  const zoomIn = () => setZoom((z) => Math.min(maxZoom, z + 0.1));
  const zoomOut = () => setZoom((z) => Math.max(minZoom, z - 0.1));
  const resetZoom = () => setZoom(initialZoom);

  const handleWheelZoom = (deltaY: number) => {
    const scale = deltaY < 0 ? 1.05 : 0.95;
    setZoom((z) => Math.min(maxZoom, Math.max(minZoom, z * scale)));
  };

  return {
    zoom,
    setZoom,
    zoomIn,
    zoomOut,
    resetZoom,
    handleWheelZoom,
  };
}
