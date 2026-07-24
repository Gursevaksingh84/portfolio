"use client";

import { motion } from "framer-motion";
import { useMouseTilt } from "@/lib/hooks/useMouseTilt";

interface SolutionsProps {
  onSelectProductByName: (productName: string) => void;
}

/* ─── 3D Tilt Card for dark capability cards ─── */
function CapabilityTiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, tilt, handlers, style } = useMouseTilt({ maxTilt: 12 });
  return (
    <div ref={ref} {...handlers} style={style} className={`relative ${className}`}>
      {children}
      {/* Glossy shine overlay */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 z-20"
        style={{
          background: tilt.isHovered
            ? `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(0, 81, 213, 0.15) 0%, transparent 55%)`
            : "none",
          opacity: tilt.isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function SolutionsGrid({ onSelectProductByName }: SolutionsProps) {
  const capabilities = [
    {
      id: "ai-ml",
      icon: "psychology",
      title: "AI & Multimodal ML",
      tools: ["PyTorch", "TensorFlow Lite", "ArcFace 512-dim", "Gemini API"],
      details: [
        "On-device facial embedding vector similarity search",
        "Multimodal biometric signal fusion (Face + RFID + Gait)",
        "Tool-orchestrated LLM function calling pipelines",
      ],
      highlight: "Kumbh Bandhu (Patent App 202621047713 A)",
    },
    {
      id: "robotics",
      icon: "precision_manufacturing",
      title: "Cyber-Physical Robotics",
      tools: ["ESP32-S3", "C++ / Arduino", "I2S MEMS Audio", "OLED Eye Sync"],
      details: [
        "INMP441 & MAX98357A 16kHz hardware audio loops",
        "Dual SSD1306 OLED facial expression state machine",
        "Android WebSocket telephony relay daemon",
      ],
      highlight: "EVA Assistant Robot",
    },
    {
      id: "vision-ocr",
      icon: "document_scanner",
      title: "Vision & Script Processing",
      tools: ["OpenCV", "Tesseract OCR", "Python", "Streamlit"],
      details: [
        "Adaptive thresholding & optical noise filtering",
        "9 regional Indian language script recognition",
        "Multi-page PDF batch processing & text normalization",
      ],
      highlight: "BhashaScan Engine",
    },
    {
      id: "fullstack",
      icon: "dns",
      title: "Full-Stack Enterprise Systems",
      tools: ["Next.js", "React", "FastAPI", "Supabase", "Flutter"],
      details: [
        "Triple-column comparative reader with RLS security",
        "Cross-platform Flutter mobile & React web portals",
        "Asynchronous RESTful Python microservices",
      ],
      highlight: "Granthalaya & Rotary Roaster",
    },
  ];

  return (
    <section id="capabilities" className="w-full bg-[#050b1a] py-20 lg:py-28 text-white">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div className="max-w-xl">
            <span className="font-mono text-xs text-[#0051d5] uppercase tracking-[0.2em] font-bold block mb-2">
              Capabilities Matrix 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Smart Skills Explorer & Engineering Domains
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 font-sans leading-relaxed">
              Hover over a domain to inspect specialized tools, hardware micro-controller loops, and production implementations.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block font-bold">
              Gursevak Systems Lab
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              Silicon to Web Stack
            </span>
          </div>
        </motion.div>

        {/* 4 Matrix Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((cap) => (
            <motion.div key={cap.id} variants={cardVariants}>
              <CapabilityTiltCard className="h-full">
                <div className="skill-card relative bg-[#0a1229] p-7 border border-[#0051d5]/30 rounded-lg group hover:border-[#0051d5] hover:bg-[#0051d5]/10 transition-all duration-300 shadow-xl overflow-visible flex flex-col justify-between h-full glow-border-hover">
                  <div>
                    <div className="w-12 h-12 bg-[#0051d5]/20 rounded flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0051d5]/30 transition-all duration-300">
                      <span className="material-symbols-outlined text-[#0051d5] text-3xl">
                        {cap.icon}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {cap.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cap.tools.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-white/5 border border-white/10 font-mono text-[10px] uppercase rounded text-blue-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-400 uppercase">
                        Impl: {cap.highlight.split(" ")[0]}
                      </span>
                      <button
                        onClick={() => onSelectProductByName(cap.highlight)}
                        className="font-mono text-[10px] uppercase font-bold text-[#0051d5] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Inspect</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </button>
                    </div>

                    {/* Hover Tooltip Details Overlay */}
                    <div className="skill-details opacity-0 pointer-events-none absolute left-0 top-[102%] w-full bg-[#0a1229] border border-[#0051d5] p-5 rounded shadow-2xl z-30 transition-all duration-300 translate-y-2">
                      <span className="font-mono text-[10px] text-[#0051d5] uppercase font-bold block mb-2">
                        Key Features & Implementations
                      </span>
                      <ul className="space-y-2 text-xs text-slate-300 font-sans">
                        {cap.details.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-[#0051d5] font-mono text-[10px] mt-0.5">▶</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-2 border-t border-white/10 font-mono text-[10px] text-cyan-300">
                        Product: {cap.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </CapabilityTiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
