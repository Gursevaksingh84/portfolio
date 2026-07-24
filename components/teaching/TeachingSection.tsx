"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WORK_TIMELINE } from "@/lib/data/portfolio-data";

export default function TeachingSection() {
  const [activeItem, setActiveItem] = useState<number>(0);

  const stats = [
    { value: "01", label: "Published Patent", detail: "App 202621047713 A" },
    { value: "Top 33", label: "Synergy 2026", detail: "National Finalist / 135+" },
    { value: "94.7%", label: "Biometric Accuracy", detail: "Multimodal Fusion" },
    { value: "10+", label: "Systems Engineered", detail: "Silicon to Full-Stack" },
  ];

  return (
    <section id="experience" className="w-full bg-[#f9f9f9] py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <span className="font-mono text-xs text-[#0051d5] uppercase tracking-[0.2em] font-bold block mb-2">
              CAREER LINEAGE & ACADEMIC MENTORSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Professional Timeline & Mentorship
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#0051d5]" />
            <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">
              Current Focus: Autonomous Edge AI & Robotics
            </span>
          </div>
        </div>

        {/* Key Achievements Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white border border-slate-200 rounded-xl shadow-lg mb-16">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="border-l-2 border-[#0051d5]/40 pl-5"
            >
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0051d5] block">
                {st.value}
              </span>
              <span className="font-mono text-xs text-slate-900 font-bold uppercase block mt-1">
                {st.label}
              </span>
              <span className="font-mono text-[11px] text-slate-400 block mt-0.5">
                {st.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Vertical Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <h3 className="text-2xl font-bold text-slate-950 mb-3">
              Engineering Evolution
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed font-sans">
              A chronological evolution from microcontrollers, I2S firmware loops, and biometrics research to full-stack web architecture and academic mentorship. Click a milestone to expand details.
            </p>
            <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-200">
              <span className="font-mono text-xs text-[#0051d5] uppercase font-bold block mb-2">
                Technical Focus
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Specialized in reducing on-device inference latency for edge microcontrollers while maintaining 94.7%+ accuracy in multimodal biometric and autonomous assistant stacks.
              </p>
            </div>
          </div>

          {/* Right Vertical Timeline Items */}
          <div className="lg:col-span-8 relative">
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-[2px] bg-[#0051d5]/20" />

            <div className="space-y-10">
              {WORK_TIMELINE.map((item, idx) => {
                const isActive = activeItem === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    onClick={() => setActiveItem(isActive ? -1 : idx)}
                    className="timeline-item relative pl-12 lg:pl-20 group cursor-pointer"
                  >
                    <div
                      className={`absolute left-[12px] lg:left-[28px] top-2 w-4 h-4 rounded-full ring-4 ring-white z-10 transition-all ${
                        isActive
                          ? "bg-[#0051d5] scale-125 shadow-md shadow-blue-600/30"
                          : "bg-slate-300 group-hover:bg-[#0051d5]"
                      }`}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-slate-950 group-hover:text-[#0051d5] transition-colors">
                          {item.title}
                        </h4>
                        <span className={`material-symbols-outlined text-[#0051d5] text-lg transition-transform ${isActive ? "rotate-180" : ""}`}>
                          expand_more
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">
                        {item.year}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-slate-500 uppercase font-semibold block mb-3">
                      {item.role}
                    </span>

                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {isActive && (
                      <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200 shadow-md font-sans text-xs text-slate-700 space-y-2 animate-[fade-in-up_0.2s_ease-out]">
                        <span className="font-mono text-[10px] text-[#0051d5] uppercase font-bold block">
                          Key Impact
                        </span>
                        <p className="text-slate-800 font-medium">{item.description}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
