"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SYSTEM_PRODUCTS, SystemProduct } from "@/lib/data/portfolio-data";
import { useMouseTilt } from "@/lib/hooks/useMouseTilt";

interface ProductsShowcaseProps {
  onSelectProduct: (product: SystemProduct) => void;
}

/* ─── Reusable 3D Tilt Card wrapper ─── */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, tilt, handlers, style } = useMouseTilt({ maxTilt: 8 });
  return (
    <div ref={ref} {...handlers} style={style} className={`relative ${className}`}>
      {children}
      {/* Glossy shine overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-20"
        style={{
          background: tilt.isHovered
            ? `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
            : "none",
          opacity: tilt.isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}

export default function ProductsShowcase({ onSelectProduct }: ProductsShowcaseProps) {
  const [openAccordions, setOpenAccordions] = useState<Record<string, string | null>>({
    "eva-robot": null,
    "kumbh-bandhu": null,
    "granthalaya": null,
    "bhashascan": null,
  });

  const toggleAccordion = (projectId: string, tab: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [projectId]: prev[projectId] === tab ? null : tab,
    }));
  };

  const eva = SYSTEM_PRODUCTS.find((p) => p.id === "eva-robot") || SYSTEM_PRODUCTS[0];
  const kumbh = SYSTEM_PRODUCTS.find((p) => p.id === "kumbh-bandhu") || SYSTEM_PRODUCTS[1];
  const granthalaya = SYSTEM_PRODUCTS.find((p) => p.id === "granthalaya") || SYSTEM_PRODUCTS[2];
  const bhashascan = SYSTEM_PRODUCTS.find((p) => p.id === "bhashascan") || SYSTEM_PRODUCTS[3];

  return (
    <section id="projects" className="w-full bg-[#f9f9f9] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        
        {/* Intro Tag Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-baseline gap-4 mb-8"
        >
          <span className="font-mono text-xs text-[#0051d5] uppercase tracking-[0.2em] font-bold">
            SELECTED WORKS
          </span>
          <div className="h-px flex-grow bg-slate-200 hidden md:block" />
          <span className="font-mono text-xs text-slate-400 uppercase font-semibold">
            2025 — 2026
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold text-slate-950 max-w-4xl mb-16 tracking-tight"
        >
          Engineering practical systems that <span className="text-[#0051d5]">bridge</span> raw data and human intelligence.
        </motion.h2>

        {/* Project 01: EVA (Text Left, Hero Image Right) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#f9f9f9] py-12 mb-16 border-b border-slate-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#0051d5] text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-sm">
                  PROJECT 01
                </span>
                <span className="font-mono text-xs text-[#0051d5] font-bold uppercase tracking-wider">
                  ENTERPRISE AI & ROBOTICS
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                EVA — AI Department Assistant
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                A specialized large language model framework designed to decentralize administrative intelligence.
              </p>

              {/* Accordion Controls */}
              <div className="space-y-4 border-t border-slate-200 pt-6">
                
                {/* ARCHITECTURE Accordion */}
                <div className="border-b border-slate-200/80 pb-4">
                  <button
                    onClick={() => toggleAccordion(eva.id, "arch")}
                    className="w-full flex items-center justify-between font-mono text-xs font-bold text-[#0051d5] uppercase tracking-widest py-1 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span>ARCHITECTURE</span>
                    <span className={`material-symbols-outlined text-[#0051d5] transition-transform duration-300 ${openAccordions[eva.id] === "arch" ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordions[eva.id] === "arch" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 p-4 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2 font-sans shadow-sm"
                    >
                      <p className="font-medium text-slate-900">Distributed micro-services handling RAG retrieval, prompt sanitization, and hallucination checks in parallel for sub-second latency.</p>
                      <ul className="space-y-1 text-slate-600 font-mono text-[11px] pt-1">
                        {eva.architectureNodes.map((n, idx) => (
                          <li key={idx}>— {n}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>

                {/* PIPELINE Accordion */}
                <div className="border-b border-slate-200/80 pb-4">
                  <button
                    onClick={() => toggleAccordion(eva.id, "pipeline")}
                    className="w-full flex items-center justify-between font-mono text-xs font-bold text-[#0051d5] uppercase tracking-widest py-1 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span>PIPELINE</span>
                    <span className={`material-symbols-outlined text-[#0051d5] transition-transform duration-300 ${openAccordions[eva.id] === "pipeline" ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordions[eva.id] === "pipeline" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 p-4 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 font-sans shadow-sm"
                    >
                      <p>Automated daily scraping of academic policy updates, converted to vector embeddings via text-embedding-3-small and stored with metadata.</p>
                    </motion.div>
                  )}
                </div>

                {/* STACK Accordion */}
                <div className="border-b border-slate-200/80 pb-4">
                  <button
                    onClick={() => toggleAccordion(eva.id, "stack")}
                    className="w-full flex items-center justify-between font-mono text-xs font-bold text-[#0051d5] uppercase tracking-widest py-1 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span>STACK</span>
                    <span className={`material-symbols-outlined text-[#0051d5] transition-transform duration-300 ${openAccordions[eva.id] === "stack" ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordions[eva.id] === "stack" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 flex flex-wrap gap-2 font-mono text-[11px]"
                    >
                      {eva.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700 font-semibold uppercase">
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </div>

              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectProduct(eva)}
                  className="px-6 py-3 bg-[#0051d5] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#003ea8] transition-all shadow-md cursor-pointer rounded-sm hover:shadow-lg"
                >
                  DEEP DIVE ARCHITECTURE & GALLERY
                </button>
              </div>
            </div>

            {/* Right Column: 3D Tilt Hero Image for EVA */}
            <div className="lg:col-span-7">
              <TiltCard>
                <div
                  onClick={() => onSelectProduct(eva)}
                  className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/90 p-2 group hover:shadow-blue-600/10 transition-all cursor-pointer"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 relative">
                    <img
                      src={eva.heroImage}
                      alt="EVA AI Assistant Hero Banner"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-lg shadow-xl border border-slate-200 flex items-center justify-between font-mono text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0051d5] animate-pulse" />
                        <span className="font-bold text-slate-900">EVA AI Assistant System</span>
                      </div>
                      <span className="text-[10px] text-[#0051d5] font-bold uppercase">VIEW 11 PROJECT IMAGES →</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </motion.div>

        {/* Project 02: Kumbh Bandhu (Hero Image Left, Text Right) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#f9f9f9] py-12 mb-16 border-b border-slate-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 3D Tilt Hero Image for Kumbh Bandhu */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <TiltCard>
                <div
                  onClick={() => onSelectProduct(kumbh)}
                  className="relative w-full aspect-[16/10] bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 p-2 group cursor-pointer"
                >
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img
                      src={kumbh.heroImage}
                      alt="Kumbh Bandhu Multimodal Telemetry"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />

                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-md font-mono text-[10px] font-bold text-[#0051d5] uppercase shadow-md">
                      VIEW 6 PROJECT IMAGES →
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#0051d5] text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-sm">
                  PROJECT 02
                </span>
                <span className="font-mono text-xs text-[#0051d5] font-bold uppercase tracking-wider">
                  EDGE AI & BIOMETRICS
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Kumbh Bandhu
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                Full-stack AI platform using face recognition, CCTV scanning, RFID wristbands & WhatsApp alerts to reunite families at Kumbh Mela.
              </p>

              {/* Accordion Controls */}
              <div className="space-y-4 border-t border-slate-200 pt-6">
                
                {/* ARCHITECTURE Accordion */}
                <div className="border-b border-slate-200/80 pb-4">
                  <button
                    onClick={() => toggleAccordion(kumbh.id, "arch")}
                    className="w-full flex items-center justify-between font-mono text-xs font-bold text-[#0051d5] uppercase tracking-widest py-1 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span>ARCHITECTURE</span>
                    <span className={`material-symbols-outlined text-[#0051d5] transition-transform duration-300 ${openAccordions[kumbh.id] === "arch" ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordions[kumbh.id] === "arch" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 p-4 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2 font-sans shadow-sm"
                    >
                      <p className="font-medium text-slate-900">9-layer system: Android App → Admin Dashboard → Hindi Alert Display → ESP32+RFID Hardware → Firebase → Flask AI Backend (InsightFace Buffalo-L 512-dim embeddings) → CCTV Analysis → Twilio WhatsApp → Google Cloud Run.</p>
                      <p className="font-mono text-[11px] text-[#0051d5] font-bold">Published Indian Patent Application No. 202621047713 A</p>
                    </motion.div>
                  )}
                </div>

                {/* PIPELINE Accordion */}
                <div className="border-b border-slate-200/80 pb-4">
                  <button
                    onClick={() => toggleAccordion(kumbh.id, "pipeline")}
                    className="w-full flex items-center justify-between font-mono text-xs font-bold text-[#0051d5] uppercase tracking-widest py-1 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span>PIPELINE</span>
                    <span className={`material-symbols-outlined text-[#0051d5] transition-transform duration-300 ${openAccordions[kumbh.id] === "pipeline" ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordions[kumbh.id] === "pipeline" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 p-4 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 font-sans shadow-sm"
                    >
                      <p>InsightFace Buffalo-L CNN extracts 512-dim face embeddings, cosine similarity matches across registered/missing/found person databases, and CCTV crowd scanning detects all faces per frame — reducing verification effort by ~73%.</p>
                    </motion.div>
                  )}
                </div>

                {/* STACK Accordion */}
                <div className="border-b border-slate-200/80 pb-4">
                  <button
                    onClick={() => toggleAccordion(kumbh.id, "stack")}
                    className="w-full flex items-center justify-between font-mono text-xs font-bold text-[#0051d5] uppercase tracking-widest py-1 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span>STACK</span>
                    <span className={`material-symbols-outlined text-[#0051d5] transition-transform duration-300 ${openAccordions[kumbh.id] === "stack" ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openAccordions[kumbh.id] === "stack" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 flex flex-wrap gap-2 font-mono text-[11px]"
                    >
                      {kumbh.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700 font-semibold uppercase">
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </div>

              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectProduct(kumbh)}
                  className="px-6 py-3 bg-[#0051d5] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#003ea8] transition-all shadow-md cursor-pointer rounded-sm hover:shadow-lg"
                >
                  PATENT CLAIM DETAILS & GALLERY
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Additional Projects: Granthalaya & BhashaScan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          
          {/* Granthalaya */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.1 }}
          >
            <TiltCard className="h-full">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xl flex flex-col justify-between hover:border-[#0051d5]/50 transition-all group h-full">
                <div>
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-5 border border-slate-200 relative bg-slate-950">
                    <img
                      src={granthalaya.heroImage}
                      alt="Granthalaya Hero"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-[#0051d5] text-white font-mono text-[10px] uppercase font-bold rounded-sm">
                      PROJECT 03
                    </span>
                    <span className="font-mono text-xs text-[#0051d5] font-bold uppercase">
                      {granthalaya.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-2">{granthalaya.name}</h3>
                  <p className="text-xs text-slate-500 font-mono mb-3">{granthalaya.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">{granthalaya.tagline}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProduct(granthalaya)}
                    className="px-4 py-2 bg-[#0051d5] text-white text-xs font-mono font-bold uppercase rounded-sm cursor-pointer hover:bg-[#003ea8]"
                  >
                    Inspect Gallery ({granthalaya.galleryImages.length})
                  </button>
                  {granthalaya.liveUrl && (
                    <a
                      href={granthalaya.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-[#0051d5] hover:underline flex items-center gap-1 uppercase"
                    >
                      <span>Launch Live</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* BhashaScan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.2 }}
          >
            <TiltCard className="h-full">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xl flex flex-col justify-between hover:border-[#0051d5]/50 transition-all group h-full">
                <div>
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-5 border border-slate-200 relative bg-slate-950">
                    <img
                      src={bhashascan.heroImage}
                      alt="BhashaScan Hero"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-[#0051d5] text-white font-mono text-[10px] uppercase font-bold rounded-sm">
                      PROJECT 04
                    </span>
                    <span className="font-mono text-xs text-[#0051d5] font-bold uppercase">
                      {bhashascan.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-2">{bhashascan.name}</h3>
                  <p className="text-xs text-slate-500 font-mono mb-3">{bhashascan.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">{bhashascan.tagline}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProduct(bhashascan)}
                    className="px-4 py-2 bg-[#0051d5] text-white text-xs font-mono font-bold uppercase rounded-sm cursor-pointer hover:bg-[#003ea8]"
                  >
                    Inspect Specs
                  </button>
                  {bhashascan.liveUrl && (
                    <a
                      href={bhashascan.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-[#0051d5] hover:underline flex items-center gap-1 uppercase"
                    >
                      <span>Launch Streamlit</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
