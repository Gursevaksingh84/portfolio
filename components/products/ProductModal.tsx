"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Layers, Cpu, Server, Database, Volume2, Mic, Bot, Activity, Images, FileText, BookOpen, Music, ShieldCheck, Scan, Radio, Smartphone, Monitor, MessageSquare, Cloud, Search, Wifi } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SystemProduct } from "@/lib/data/portfolio-data";
import EvaAvatarCycling from "@/components/ui/EvaAvatarCycling";

interface ProductModalProps {
  product: SystemProduct | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "gallery" | "workflow" | "hardware" | "exegesis" | "kumbh-arch" | "kumbh-hardware">("overview");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Reset tab to overview when product changes
    setActiveTab("overview");
  }, [product]);

  if (!product) return null;

  const isEva = product.id === "eva-robot";
  const isGranthalaya = product.id === "granthalaya";
  const isKumbh = product.id === "kumbh-bandhu";

  const kumbhArchSteps = [
    { step: "1", title: "Mobile App", desc: "Android/Kotlin — Pilgrim registration, missing/found person reporting, FCM push alerts", icon: Smartphone },
    { step: "2", title: "Admin Dashboard", desc: "React + Vite + Firebase — Case management, live crowd heatmaps, volunteer tracking", icon: Monitor },
    { step: "3", title: "Alert Display", desc: "Hindi UI Board — Large-screen missing person alerts for help centers & checkpoints", icon: Monitor },
    { step: "4", title: "ESP32 + RFID", desc: "RC522 wristband scanning at zone entry/exit points, real-time Firebase sync", icon: Radio },
    { step: "5", title: "Firebase", desc: "Realtime Database & Storage — Unified missing-person registry with photo storage", icon: Database },
    { step: "6", title: "AI Backend", desc: "Flask + InsightFace Buffalo-L CNN — 512-dim face embedding extraction & cosine similarity", icon: Bot },
    { step: "7", title: "CCTV Analysis", desc: "Multi-face detection per frame, target matching across crowd images & video clips", icon: Scan },
    { step: "8", title: "WhatsApp Alerts", desc: "Twilio — Automated match alerts with photo, GPS location pin & contact details", icon: MessageSquare },
    { step: "9", title: "Cloud Run", desc: "Docker containerized production deployment on Google Cloud Platform", icon: Cloud },
  ];

  const workflowSteps = [
    { step: "1", title: "User Voice Input", desc: "Captures Voice Input", icon: Mic },
    { step: "2", title: "ESP32-S3", desc: "16kHz I2S MEMS Audio Capture", icon: Cpu },
    { step: "3", title: "Whisper STT", desc: "Speech → Text Transcription", icon: Volume2 },
    { step: "4", title: "Google Gemini", desc: "Reasoning & Intent Parsing", icon: Bot },
    { step: "5", title: "FastAPI", desc: "API Processing & Gateway Logic", icon: Server },
    { step: "6", title: "SQLite Database", desc: "Stores & Retrieves Data", icon: Database },
    { step: "7", title: "Piper TTS", desc: "Text → Speech MP3 Synthesis", icon: Volume2 },
    { step: "8", title: "ESP32 Output", desc: "Receives Audio Output Stream", icon: Cpu },
    { step: "9", title: "Robot Output", desc: "Robot Speaks + OLED Eyes Animate", icon: Bot },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-8 text-slate-900 max-h-[90vh] flex flex-col font-sans"
        >
          {/* Top Header Bar */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-[#f9f9f9]">
            <div className="flex items-center gap-4">
              {isEva && <EvaAvatarCycling className="w-10 h-10 shrink-0" />}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0051d5] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {product.category}
                  </span>
                  {product.patentNo && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      Patent: {product.patentNo}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                  {product.name} — {product.subtitle}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Premium Segmented Pill Navigation Bar */}
          <div className="bg-[#f3f3f3] px-6 py-3 border-b border-slate-200 font-mono text-xs">
            <div className="bg-slate-200/70 p-1 rounded-xl border border-slate-300/80 inline-flex flex-wrap gap-1 max-w-full">
              
              {/* Overview Tab */}
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Overview & Specs</span>
              </button>

              {/* Gallery Tab */}
              {product.galleryImages && product.galleryImages.length > 0 && (
                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === "gallery"
                      ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                  }`}
                >
                  <Images className="w-3.5 h-3.5" />
                  <span>Project Screenshots ({product.galleryImages.length})</span>
                </button>
              )}

              {/* Granthalaya Quad-Layer Exegesis Tab */}
              {isGranthalaya && (
                <button
                  onClick={() => setActiveTab("exegesis")}
                  className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === "exegesis"
                      ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Quad-Layer Exegesis & Audio Sync</span>
                </button>
              )}

              {/* EVA Specific Tabs */}
              {isEva && (
                <>
                  <button
                    onClick={() => setActiveTab("workflow")}
                    className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === "workflow"
                        ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>9-Step Workflow</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("hardware")}
                    className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === "hardware"
                        ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Hardware Specs</span>
                  </button>
                </>
              )}

              {/* Kumbh Bandhu Specific Tabs */}
              {isKumbh && (
                <>
                  <button
                    onClick={() => setActiveTab("kumbh-arch")}
                    className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === "kumbh-arch"
                        ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>9-Layer Architecture</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("kumbh-hardware")}
                    className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === "kumbh-hardware"
                        ? "bg-[#0051d5] text-white shadow-md shadow-blue-600/20"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 font-semibold"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Hardware & API</span>
                  </button>
                </>
              )}

            </div>
          </div>

          {/* Modal Body Scroll */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* Overview & Specs Tab */}
            {activeTab === "overview" && (
              <>
                {/* Tagline */}
                <p className="text-base text-slate-800 font-medium leading-relaxed">
                  {product.tagline}
                </p>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                      THE CHALLENGE
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {product.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                      THE ARCHITECTURAL SOLUTION
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {product.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#0051d5]/5 rounded-xl border border-[#0051d5]/20">
                  {product.metrics.map((m, idx) => (
                    <div key={idx}>
                      <p className="text-xl font-bold font-mono text-[#0051d5]">{m.value}</p>
                      <p className="text-[11px] text-slate-600 font-mono font-semibold">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Key Features List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#0051d5] uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>SYSTEM CAPABILITIES & INNOVATION HIGHLIGHTS</span>
                  </h4>

                  <div className="space-y-2">
                    {product.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-800">
                        <span className="w-5 h-5 rounded-full bg-[#0051d5] text-white font-mono font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    TECHNOLOGY & HARDWARE STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-700 uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Granthalaya Quad-Layer Exegesis Tab */}
            {activeTab === "exegesis" && isGranthalaya && (
              <div className="space-y-6 font-sans">
                <div>
                  <h4 className="text-lg font-bold text-slate-950">Granthalaya Quad-Layer Exegesis & Audio Sync</h4>
                  <p className="text-xs text-slate-600 font-mono">Four-tier manuscript breakdown and SoundCloud millisecond recitation auto-scrolling.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">1. Original Gurmukhi Text</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">Authentic Gurmukhi Unicode script preserves original manuscript typography and verse structure.</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">2. Padh Arth (ਪਦ ਅਰਥ)</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">Word-by-word morphological breakdown, etymological roots, and exact dictionary definition mapping.</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">3. Teeka (ਟੀਕਾ)</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">Concise line-by-line summary commentary from classical scholars (e.g. Faridkot Teeka, SGGS Darpan).</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">4. Steek (ਸਟੀਕ)</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">Extended academic analysis detailing historical context, literary meters (Chhand), and theological commentary.</p>
                  </div>
                </div>

                <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-[#0051d5]">
                    <Music className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold uppercase">SoundCloud Audio Recitation Sync</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    Integrated HTML5 / SoundCloud API SDK. Millisecond-level timestamping aligns audio recitations with live verse auto-scrolling and active verse highlighting.
                  </p>
                </div>
              </div>
            )}

            {/* Project Screenshots Gallery Tab */}
            {activeTab === "gallery" && product.galleryImages && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-950">{product.name} — Project Media & Screenshots</h4>
                  <p className="text-xs text-slate-600 font-mono">Click any screenshot to open high-resolution image preview.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(img.url)}
                      className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md group hover:border-[#0051d5] transition-all cursor-pointer"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-slate-950 relative">
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between font-mono text-xs">
                        <span className="font-bold text-slate-800">{img.caption}</span>
                        <span className="text-[10px] text-[#0051d5] uppercase font-bold">EXPAND ↗</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EVA 9-Step Workflow Tab */}
            {activeTab === "workflow" && isEva && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-950">EVA AI Workflow Diagram</h4>
                  <p className="text-xs text-slate-600 font-mono">End-to-end multi-modal pipeline spanning physical microcontrollers, cloud LLM engines, and telephony relays.</p>
                </div>

                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-white space-y-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                      <span className="font-mono text-sm font-bold text-blue-400">EVA AI WORKFLOW PIPELINE</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">SUB-1.2S LATENCY PIPELINE</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {workflowSteps.map((ws) => {
                      const IconComp = ws.icon;
                      return (
                        <div key={ws.step} className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-2 relative group hover:border-blue-500 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="w-6 h-6 bg-blue-600 text-white rounded font-mono text-xs font-bold flex items-center justify-center">
                              {ws.step}
                            </span>
                            <IconComp className="w-4 h-4 text-cyan-400" />
                          </div>
                          <h5 className="font-bold text-xs text-white pt-1">{ws.title}</h5>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{ws.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* EVA Hardware Tab */}
            {activeTab === "hardware" && isEva && (
              <div className="space-y-6 font-sans">
                <div>
                  <h4 className="text-lg font-bold text-slate-950">ESP32-S3 Hardware Core Specifications</h4>
                  <p className="text-xs text-slate-600 font-mono">Physical robotic companion hardware pinouts and audio loops.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">Processing Core</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">ESP32-S3 Tensilica LX7 Dual-Core 240MHz microcontroller with SoftAP captive portal setup (`AI_Desk_Robo_AP` at `192.168.4.1`).</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">I2S Audio Pipeline</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">INMP441 I2S MEMS microphone for 16kHz voice capture + MAX98357A 3W Class-D amplifier speaker output.</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">Visual HMI</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">SSD1306 0.96" 128x64 OLED display rendering dynamic eye state animations (blinking, listening waves, mouth scaling).</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">Telephony & WhatsApp Relay</span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">Background Android WebSocket daemon (`RoboConnectionService`) triggering automated cellular parent phone calls & WhatsApp warnings.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Kumbh Bandhu 9-Layer Architecture Tab */}
            {activeTab === "kumbh-arch" && isKumbh && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-950">Kumbh Bandhu — 9-Layer System Architecture</h4>
                  <p className="text-xs text-slate-600 font-mono">End-to-end detection pipeline spanning mobile clients, edge hardware, AI inference, and cloud deployment.</p>
                </div>

                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-white space-y-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse" />
                      <span className="font-mono text-sm font-bold text-cyan-400">KUMBH BANDHU SYSTEM PIPELINE</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">94.7% IDENTIFICATION ACCURACY</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {kumbhArchSteps.map((ws) => {
                      const IconComp = ws.icon;
                      return (
                        <div key={ws.step} className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-2 relative group hover:border-cyan-500 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="w-6 h-6 bg-cyan-600 text-white rounded font-mono text-xs font-bold flex items-center justify-center">
                              {ws.step}
                            </span>
                            <IconComp className="w-4 h-4 text-cyan-400" />
                          </div>
                          <h5 className="font-bold text-xs text-white pt-1">{ws.title}</h5>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{ws.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Data Flow Summary */}
                <div className="p-5 bg-cyan-50 border border-cyan-200 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-cyan-700">
                    <Search className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold uppercase">Face Matching Pipeline</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    Report filed → InsightFace Buffalo-L extracts 512-dim face embedding → Cosine similarity search across all registered users, missing persons, and found persons → High-confidence matches trigger instant WhatsApp alerts with photo, GPS pin & contact info → Case status moves to &quot;matches_found&quot; → Admin verifies and resolves.
                  </p>
                </div>
              </div>
            )}

            {/* Kumbh Bandhu Hardware & API Tab */}
            {activeTab === "kumbh-hardware" && isKumbh && (
              <div className="space-y-6 font-sans">
                <div>
                  <h4 className="text-lg font-bold text-slate-950">Hardware Integration & REST API Reference</h4>
                  <p className="text-xs text-slate-600 font-mono">ESP32 + RFID wristband system and Flask backend API endpoints.</p>
                </div>

                {/* Hardware Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#0051d5]" />
                      <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">ESP32 Microcontroller</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">ESP32 MCU with Wi-Fi connectivity, running custom Arduino C++ firmware for RFID wristband scanning at zone entry/exit checkpoints.</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-[#0051d5]" />
                      <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">RFID RC522 Reader</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">SPI-connected RFID reader scanning pilgrim wristband tags. SDA→SS(10), SCK→SCK(13), MOSI→MOSI(11), MISO→MISO(12).</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-[#0051d5]" />
                      <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">Real-Time Firebase Sync</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">Wristband scan data pushed to Firebase Realtime DB via Wi-Fi. Triggers instant alerts if a registered missing person&apos;s tag is scanned.</p>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#0051d5]" />
                      <span className="font-mono text-xs font-bold text-[#0051d5] uppercase">WhatsApp Notifications</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">Twilio WhatsApp Business API sends automated match alerts with photo, location pin, and contact details. Includes conversational bot for status queries.</p>
                  </div>
                </div>

                {/* API Reference Section */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#0051d5] uppercase tracking-wider flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    <span>Flask Backend REST API Endpoints</span>
                  </h4>

                  <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-xl">
                    <div className="p-4 border-b border-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="font-mono text-xs text-emerald-400 font-bold">PRODUCTION API — Google Cloud Run</span>
                    </div>
                    <div className="divide-y divide-slate-800">
                      {[
                        { method: "GET", path: "/health", desc: "Health check" },
                        { method: "POST", path: "/api/process-missing-person", desc: "Process missing person report + face match" },
                        { method: "POST", path: "/api/process-found-person", desc: "Process found person report + face match" },
                        { method: "POST", path: "/api/generate-user-embedding", desc: "Pre-compute face embedding for registered user" },
                        { method: "POST", path: "/api/search-face", desc: "Manual face search (admin only)" },
                        { method: "POST", path: "/api/process-cctv-image", desc: "Scan CCTV frame for missing person" },
                        { method: "POST", path: "/api/process-cctv-video", desc: "Process video clip frame-by-frame" },
                      ].map((api, idx) => (
                        <div key={idx} className="px-4 py-3 flex items-center gap-3 font-mono text-xs">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            api.method === "GET" 
                              ? "bg-emerald-900/50 text-emerald-400 border border-emerald-800" 
                              : "bg-blue-900/50 text-blue-400 border border-blue-800"
                          }`}>
                            {api.method}
                          </span>
                          <span className="text-slate-300 font-semibold">{api.path}</span>
                          <span className="text-slate-500 ml-auto hidden sm:block">{api.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Fullscreen Image Lightbox Modal */}
          {selectedImage && (
            <div
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
            >
              <div className="relative max-w-5xl max-h-[90vh]">
                <img src={selectedImage} alt="Expanded Screenshot" className="max-w-full max-h-[85vh] rounded-lg object-contain border border-slate-700 shadow-2xl" />
                <button className="absolute top-2 right-2 bg-slate-900 text-white p-2 rounded-full border border-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Footer Bar */}
          <div className="p-6 border-t border-slate-200 bg-[#f9f9f9] flex items-center justify-between gap-4 font-mono">
            <span className="text-xs text-slate-600 font-medium">
              Status: <span className="font-bold text-slate-900">{product.status}</span>
            </span>

            <div className="flex items-center gap-3">
              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded bg-[#0051d5] hover:bg-[#003ea8] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Launch System</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {product.githubUrl && (
                <a
                  href={product.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded bg-white hover:bg-slate-100 text-slate-900 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-slate-300 shadow-sm cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
