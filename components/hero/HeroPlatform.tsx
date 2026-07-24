"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import NeuralNetworkCanvas from "@/components/hero/NeuralNetworkCanvas";
import { useMouseTilt } from "@/lib/hooks/useMouseTilt";

interface HeroProps {
  onOpenAssistantWithQuery: (query?: string) => void;
  onOpenResume: () => void;
  onSelectProduct: (productId: string) => void;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function HeroPlatform({
  onOpenAssistantWithQuery,
  onOpenResume,
  onSelectProduct,
}: HeroProps) {
  const photoTilt = useMouseTilt({ maxTilt: 12 });

  // Magnetic button offsets
  const [btn1Offset, setBtn1Offset] = useState({ x: 0, y: 0 });
  const [btn2Offset, setBtn2Offset] = useState({ x: 0, y: 0 });

  const handleMagnetic = useCallback(
    (
      e: React.MouseEvent,
      setter: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
    ) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setter({
        x: (e.clientX - cx) * 0.25,
        y: (e.clientY - cy) * 0.25,
      });
    },
    []
  );

  const resetMagnetic = useCallback(
    (
      setter: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
    ) => {
      setter({ x: 0, y: 0 });
    },
    []
  );

  return (
    <div id="home" className="w-full pt-20 bg-[#f9f9f9] overflow-x-hidden">
      
      {/* Main Hero Section */}
      <section className="relative min-h-[640px] flex items-center px-5 lg:px-8 max-w-[1200px] mx-auto py-12 lg:py-16">
        
        {/* Neural Network Canvas Background */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30 overflow-hidden rounded-3xl">
          <NeuralNetworkCanvas />
        </div>

        {/* Subtle Grid Pattern Background */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-[0.04] pointer-events-none select-none overflow-hidden">
          <svg className="w-full h-full data-grid-animate" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <pattern id="hero-grid-dots" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid-dots)" />
          </svg>
        </div>

        <div className="grid grid-cols-12 w-full gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Headline, Bio & Actions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div variants={staggerItem} className="flex items-center gap-3.5 mb-5">
              <span className="w-8 h-[2px] bg-[#0051d5]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0051d5] font-bold">
                AI SYSTEMS & EDGE ENGINEERING
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-extrabold text-5xl sm:text-6xl lg:text-[72px] leading-[0.93] text-slate-950 uppercase tracking-tighter mb-6"
            >
              <span className="block hero-shimmer-text">GURSEVAK</span>
              <span className="block lg:pl-12 text-slate-400 italic font-light hover:text-[#0051d5] transition-colors duration-700">
                SINGH AULAKH
              </span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl font-medium text-slate-800 leading-snug mb-6 max-w-xl"
            >
              AI Systems Engineer, Robotics Developer & Published Patent Co-Inventor specializing in{" "}
              <span className="text-[#0051d5] font-bold">on-device AI</span> & physical infrastructure.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mb-8 inline-flex items-center gap-2 px-3.5 py-2 rounded bg-blue-50 border border-blue-200/80 text-[#0051d5] font-mono text-xs font-bold w-fit shadow-sm"
            >
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Published Indian Patent Application No. 202621047713 A</span>
            </motion.div>

            {/* Action Buttons with Magnetic Effect */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4 mb-8">
              <div
                onMouseMove={(e) => handleMagnetic(e, setBtn1Offset)}
                onMouseLeave={() => resetMagnetic(setBtn1Offset)}
                style={{
                  transform: `translate(${btn1Offset.x}px, ${btn1Offset.y}px)`,
                  transition: btn1Offset.x === 0 ? "transform 0.5s cubic-bezier(0.23,1,0.32,1)" : "transform 0.12s ease-out",
                }}
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 bg-[#0051d5] text-white px-7 py-3.5 rounded text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#003ea8] transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  <span>EXPLORE SELECTED WORKS</span>
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>

              <div
                onMouseMove={(e) => handleMagnetic(e, setBtn2Offset)}
                onMouseLeave={() => resetMagnetic(setBtn2Offset)}
                style={{
                  transform: `translate(${btn2Offset.x}px, ${btn2Offset.y}px)`,
                  transition: btn2Offset.x === 0 ? "transform 0.5s cubic-bezier(0.23,1,0.32,1)" : "transform 0.12s ease-out",
                }}
              >
                <button
                  onClick={onOpenResume}
                  className="group inline-flex items-center gap-2 bg-white border border-slate-300 px-6 py-3.5 rounded text-xs font-mono font-bold uppercase tracking-wider text-slate-800 hover:border-[#0051d5] hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                >
                  <span>DOWNLOAD CV / RESUME</span>
                  <span className="material-symbols-outlined text-base text-[#0051d5] transition-transform group-hover:translate-y-0.5">
                    download
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Active Lab Node & Status */}
            <motion.div
              variants={staggerItem}
              className="flex items-center justify-between font-mono text-xs border-t border-slate-200 pt-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-500 font-medium">SYSTEM STATUS:</span>
                <span className="font-bold text-slate-900">ONLINE & OPERATIONAL</span>
              </div>
              <span className="text-slate-400 font-mono font-medium">LATENCY: 24MS</span>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Tilt Portrait Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              ref={photoTilt.ref}
              {...photoTilt.handlers}
              style={photoTilt.style}
              className="relative w-full max-w-[380px] group tilt-card-wrapper"
            >
              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0051d5]/10 via-transparent to-cyan-400/10 rounded-2xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              
              {/* Layered depth shadow wrapper */}
              <div
                className="aspect-[4/5] overflow-hidden rounded-xl bg-white relative"
                style={{
                  boxShadow: photoTilt.tilt.isHovered
                    ? "0 20px 60px -15px rgba(0, 81, 213, 0.25), 0 8px 25px -10px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.08)"
                    : "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 15px -5px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.4s ease",
                }}
              >
                <img
                  src="/img-self.jpeg"
                  alt="Gursevak Singh Aulakh"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-in-out"
                />

                {/* Glossy shine overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 rounded-xl"
                  style={{
                    background: photoTilt.tilt.isHovered
                      ? `radial-gradient(circle at ${photoTilt.tilt.shineX}% ${photoTilt.tilt.shineY}%, rgba(255,255,255,0.2) 0%, transparent 55%)`
                      : "none",
                    opacity: photoTilt.tilt.isHovered ? 1 : 0,
                  }}
                />

                {/* Ring border */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-slate-200 group-hover:ring-[#0051d5]/40 transition-all pointer-events-none" />
              </div>

              {/* Bottom Label Bar */}
              <div className="mt-3 flex items-center justify-between px-2">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
                  AI SYSTEMS ENGINEER / 01
                </span>
                <div className="flex gap-1.5 items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0051d5] animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
