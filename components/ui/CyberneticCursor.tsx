"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CyberneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let count = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add trail dot
      count++;
      if (count % 3 === 0) {
        setTrail((prev) => [
          ...prev.slice(-12),
          { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() },
        ]);
      }

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none hidden md:block">
      {/* Trailing Particle Dots */}
      {trail.map((point, idx) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.5 }}
          style={{ left: point.x - 4, top: point.y - 4 }}
          className="fixed w-2 h-2 rounded-full bg-blue-500/60 pointer-events-none blur-[0.5px]"
        />
      ))}

      {/* Main Cursor Ring */}
      <motion.div
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 12),
          y: mousePosition.y - (isHovered ? 24 : 12),
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "#38bdf8" : "#2563eb",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
        className="fixed w-6 h-6 rounded-full border-2 border-blue-600 pointer-events-none z-[9999] bg-blue-500/10 backdrop-blur-[1px]"
      />

      {/* Center Precision Dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        className="fixed w-1.5 h-1.5 rounded-full bg-blue-600 pointer-events-none z-[10000]"
      />
    </div>
  );
}
