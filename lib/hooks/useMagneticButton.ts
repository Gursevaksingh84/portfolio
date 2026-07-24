"use client";

import { useRef, useState, useCallback } from "react";

interface MagneticValues {
  x: number;
  y: number;
}

export function useMagneticButton(strength: number = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<MagneticValues>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      setOffset({ x: deltaX, y: deltaY });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    style: {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
      transition: offset.x === 0 ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.15s ease-out",
    },
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
