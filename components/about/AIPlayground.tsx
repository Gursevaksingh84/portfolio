"use client";

import { useState } from "react";

export default function AIPlayground() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const modules = [
    {
      id: "biometrics",
      icon: "fingerprint",
      title: "Multimodal ArcFace Biometrics",
      tag: "PATENTED EDGE AI",
      description: "Real-time 512-dimensional facial embedding vector similarity search powered by TensorFlow Lite and RFID signal fusion.",
      detail: "Runs on low-power edge microcontrollers with sub-second candidate ranking and 94.7% accuracy during mass crowd gatherings.",
      metrics: "512-dim Vectors • TFLite Offline",
    },
    {
      id: "ocr",
      icon: "document_scanner",
      title: "BhashaScan Script OCR",
      tag: "COMPUTER VISION",
      description: "Adaptive OpenCV preprocessing pipeline correcting noise and deskewing documents across 9 regional Indian languages.",
      detail: "Increases Tesseract recognition accuracy by ~40% on degraded physical forms and historical archives.",
      metrics: "9 Indian Languages • Sub-second Skew Fix",
    },
    {
      id: "eva-firmware",
      icon: "precision_manufacturing",
      title: "EVA Cyber-Physical Audio Loop",
      tag: "HARDWARE & ROBOTICS",
      description: "Dual SSD1306 OLED eye state machine synced with INMP441 I2S MEMS audio capture and MAX98357A 3W amplification.",
      detail: "Dual-core ESP32-S3 Tensilica LX7 running captive SoftAP with automated Android cellular phone call relay.",
      metrics: "16kHz I2S Audio • 60 FPS OLED Eye Sync",
    },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-[#0051d5] uppercase tracking-[0.2em] font-semibold">
              Live Sandboxes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-3">
              AI Playground & Module Demos
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-sans">
              Interactive modules showcasing core research concepts in edge vision, script OCR, and cyber-physical robotics.
            </p>
          </div>
          <a
            href="https://github.com/Gursevaksingh84"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#0051d5] uppercase font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            <span>Explore Github Repositories</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        {/* Playground Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod) => {
            const isSelected = activeModule === mod.id;
            return (
              <div
                key={mod.id}
                className={`group bg-white border p-8 rounded-xl transition-all duration-500 hover:-translate-y-1 ${
                  isSelected
                    ? "border-[#0051d5] shadow-xl shadow-blue-500/10 ring-2 ring-[#0051d5]/20"
                    : "border-slate-200/80 shadow-md hover:border-[#0051d5]"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-50 text-[#0051d5] rounded-lg flex items-center justify-center group-hover:bg-[#0051d5] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{mod.icon}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#0051d5] bg-blue-50 px-2.5 py-1 rounded">
                    {mod.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 mb-3">
                  {mod.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {mod.description}
                </p>

                {isSelected && (
                  <div className="mb-6 p-4 bg-slate-50 rounded border border-blue-100 text-xs text-slate-700 space-y-2 animate-[fade-in-up_0.3s_ease-out]">
                    <p className="font-sans font-medium text-slate-900">{mod.detail}</p>
                    <p className="font-mono text-[11px] text-[#0051d5] font-bold">{mod.metrics}</p>
                  </div>
                )}

                <button
                  onClick={() => setActiveModule(isSelected ? null : mod.id)}
                  className={`w-full py-3 border font-mono text-xs uppercase font-bold tracking-wider transition-all ${
                    isSelected
                      ? "bg-[#0051d5] text-white border-[#0051d5]"
                      : "border-[#0051d5] text-[#0051d5] hover:bg-[#0051d5] hover:text-white"
                  }`}
                >
                  {isSelected ? "Hide Architecture Specs" : "Inspect Module Specs"}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
