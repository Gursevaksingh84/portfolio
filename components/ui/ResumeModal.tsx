"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, FileText, Download, Mail, Award, CheckCircle2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { PERSONAL_BIO, SYSTEM_PRODUCTS, WORK_TIMELINE } from "@/lib/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"viewer" | "details">("viewer");

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const pdfUrl = "/assets/resume.pdf";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-8 text-slate-900 max-h-[90vh] flex flex-col font-sans"
        >
          {/* Header Bar */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-[#f9f9f9]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0051d5] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  Gursevak Singh Aulakh — Resume / CV
                </h3>
                <p className="text-[11px] font-mono text-slate-500">
                  AI Systems Engineer • Published Patent Inventor • Academic Mentor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                download="Gursevak_Singh_Aulakh_Resume.pdf"
                className="px-4 py-2.5 rounded bg-[#0051d5] hover:bg-[#003ea8] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-900 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub Navigation Bar */}
          <div className="bg-[#f3f3f3] px-6 py-3 border-b border-slate-200 font-mono text-xs">
            <div className="bg-slate-200/70 p-1 rounded-xl border border-slate-300/80 inline-flex flex-wrap gap-1 max-w-full">
              <button
                onClick={() => setActiveTab("viewer")}
                className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "viewer"
                    ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Document Viewer</span>
              </button>

              <button
                onClick={() => setActiveTab("details")}
                className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "details"
                    ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Executive Summary</span>
              </button>
            </div>
          </div>

          {/* Modal Body Scroll */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === "viewer" ? (
              <div className="w-full h-full min-h-[640px] bg-slate-100 p-2 sm:p-4 flex flex-col items-center justify-center">
                <iframe
                  src={pdfUrl}
                  title="Gursevak Singh Aulakh Resume PDF"
                  className="w-full h-full min-h-[600px] rounded-xl border border-slate-300 shadow-lg bg-white"
                />
              </div>
            ) : (
              <div className="p-8 sm:p-12 space-y-8 bg-white text-slate-800 font-sans">
                {/* Header Profile Identity */}
                <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <img
                      src="/img-self.jpeg"
                      alt="Gursevak Singh Aulakh"
                      className="w-20 h-20 rounded-xl object-cover border border-slate-300 shadow-md"
                    />
                    <div>
                      <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                        {PERSONAL_BIO.name}
                      </h1>
                      <p className="text-sm font-mono text-[#0051d5] font-bold mt-1">
                        {PERSONAL_BIO.title}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        {PERSONAL_BIO.location} • {PERSONAL_BIO.email}
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right text-xs font-mono text-slate-600 space-y-1">
                    <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                      <GithubIcon className="w-3.5 h-3.5 text-[#0051d5]" />
                      <span>github.com/Gursevaksingh84</span>
                    </p>
                    <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                      <ExternalLink className="w-3.5 h-3.5 text-[#0051d5]" />
                      <span>linkedin.com/in/gursevak-singh-aulakh</span>
                    </p>
                  </div>
                </div>

                {/* Patent Highlight Box */}
                <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-[#0051d5] uppercase">
                      PUBLISHED INDIAN PATENT
                    </span>
                    <span className="px-2 py-0.5 bg-[#0051d5] text-white font-mono text-[10px] font-bold rounded uppercase">
                      App No. 202621047713 A
                    </span>
                  </div>
                  <p className="font-bold text-slate-950 text-sm pt-1">
                    AI-Powered Missing Person Detection & Multimodal Family Reunification System
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Co-Inventor on privacy-preserving edge biometric fusion combining 512-dim ArcFace facial vector search, RFID telemetry signals, gait analysis, and behavioral indicators. Achieved 94.7% identification accuracy and ~73% search effort reduction at mass religious gatherings.
                  </p>
                </div>

                {/* Flagship Systems */}
                <div className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-[#0051d5] uppercase tracking-wider border-b border-slate-200 pb-1 flex items-center justify-between">
                    <span>FLAGSHIP AI & CYBER-PHYSICAL SYSTEMS</span>
                    <span className="text-slate-400 font-semibold">2025 — 2026</span>
                  </h2>

                  <div className="space-y-5">
                    {SYSTEM_PRODUCTS.map((p) => (
                      <div key={p.id} className="space-y-1">
                        <div className="flex items-baseline justify-between">
                          <h3 className="text-sm font-bold text-slate-950">{p.name} — <span className="text-xs text-slate-600 font-normal">{p.subtitle}</span></h3>
                          <span className="text-[10px] font-mono text-[#0051d5] font-bold uppercase">{p.category}</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-sans">{p.tagline}</p>
                        <p className="text-[11px] font-mono text-slate-500">Tech Stack: {p.techStack.join(" • ")}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic & Professional History */}
                <div className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-[#0051d5] uppercase tracking-wider border-b border-slate-200 pb-1">
                    PROFESSIONAL HISTORY & ACADEMIC MENTORSHIP
                  </h2>

                  <div className="space-y-4">
                    {WORK_TIMELINE.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-slate-950">{item.title}</h3>
                          <span className="font-mono text-xs font-bold text-[#0051d5]">{item.year}</span>
                        </div>
                        <p className="text-xs font-mono text-slate-500">{item.role}</p>
                        <p className="text-xs text-slate-700 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-6 border-t border-slate-200 bg-[#f9f9f9] flex items-center justify-between font-mono text-xs">
            <span className="text-slate-600 font-medium">
              Gursevak Singh Aulakh • Official Resume PDF Embedded
            </span>
            <a
              href={pdfUrl}
              download="Gursevak_Singh_Aulakh_Resume.pdf"
              className="px-4 py-2 bg-[#0051d5] text-white font-bold uppercase rounded hover:bg-[#003ea8] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
