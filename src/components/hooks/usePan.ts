import { useState, useRef } from "react";

export function usePan(initialPan = { x: 80, y: 50 }) {
  const [pan, setPan] = useState(initialPan);
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });

  const startPan = (clientX: number, clientY: number) => {
    setIsPanning(true);
    panStart.current = { x: clientX - pan.x, y: clientY - pan.y };
  };

  const updatePan = (clientX: number, clientY: number) => {
    if (!isPanning) return;
    setPan({
      x: clientX - panStart.current.x,
      y: clientY - panStart.current.y,
    });
  };

  const endPan = () => {
    setIsPanning(false);
  };

  const resetPan = () => setPan(initialPan);

  return {
    pan,
    setPan,
    isPanning,
    startPan,
    updatePan,
    endPan,
    resetPan,
  };
}
