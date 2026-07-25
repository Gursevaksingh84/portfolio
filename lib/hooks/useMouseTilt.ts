"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface TiltValues {
  rotateX: number;
  rotateY: number;
  /** Shine position as percentage from left (0-100) */
  shineX: number;
  /** Shine position as percentage from top (0-100) */
  shineY: number;
  isHovered: boolean;
}

interface UseMouseTiltOptions {
  /** Maximum tilt angle in degrees (default: 10) */
  maxTilt?: number;
  /** Scale factor on hover (default: 1.02) */
  scale?: number;
  /** Whether to reverse tilt direction (default: false) */
  reverse?: boolean;
}

export function useMouseTilt(options: UseMouseTiltOptions = {}) {
  const { maxTilt = 10, reverse = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasGyro, setHasGyro] = useState(false);
  const [tilt, setTilt] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    shineX: 50,
    shineY: 50,
    isHovered: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsTouchDevice(isCoarse);

      if (isCoarse && "DeviceOrientationEvent" in window) {
        const handleOrientation = (e: DeviceOrientationEvent) => {
          if (e.gamma === null || e.beta === null) return;
          setHasGyro(true);
          const gamma = Math.max(-45, Math.min(45, e.gamma)); // Left/right tilt
          const beta = Math.max(0, Math.min(90, e.beta));     // Front/back tilt
          
          const rotY = (gamma / 45) * 6;
          const rotX = -((beta - 45) / 45) * 6;

          setTilt({
            rotateX: rotX,
            rotateY: rotY,
            shineX: 50 + (gamma / 45) * 30,
            shineY: 50 + ((beta - 45) / 45) * 30,
            isHovered: true,
          });
        };

        window.addEventListener("deviceorientation", handleOrientation);
        return () => window.removeEventListener("deviceorientation", handleOrientation);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouchDevice || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;
      const direction = reverse ? -1 : 1;

      setTilt({
        rotateX: -percentY * maxTilt * direction,
        rotateY: percentX * maxTilt * direction,
        shineX: (x / rect.width) * 100,
        shineY: (y / rect.height) * 100,
        isHovered: true,
      });
    },
    [maxTilt, reverse, isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      shineX: 50,
      shineY: 50,
      isHovered: false,
    });
  }, []);

  return {
    ref,
    tilt,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    style: {
      transform: (isTouchDevice && !hasGyro)
        ? "none"
        : `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      transition: tilt.isHovered
        ? "transform 0.15s ease-out"
        : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    },
  };
}
