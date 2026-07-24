"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, Bot, ScanText, Sparkles, CheckCircle2, RefreshCw, Volume2, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function AIPlayground() {
  const [activeTab, setActiveTab] = useState<"arcface" | "eva" | "ocr">("arcface");
  
  // ---------------------------------------------------------
  // SANDBOX 1: ArcFace Biometrics State
  // ---------------------------------------------------------
  const [selectedCandidate, setSelectedCandidate] = useState<"match" | "mismatch" | "partial">("match");
  const [isMatching, setIsMatching] = useState(false);
  const [vectorProgress, setVectorProgress] = useState(0);

  const candidates = {
    match: {
      id: "PILGRIM-8402",
      name: "Verified Pilgrim Identity #8402",
      similarity: 94.7,
      distance: 0.12,
      rfidSignal: "Zone C — Sensor Node 04",
      status: "REUNIFICATION MATCH VERIFIED",
      color: "emerald"
    },
    partial: {
      id: "PILGRIM-1092",
      name: "Candidate Identity #1092",
      similarity: 78.3,
      distance: 0.38,
      rfidSignal: "Zone A — Weak RFID Telemetry",
      status: "REQUIRES SECONDARY SENSOR CHECK",
      color: "amber"
    },
    mismatch: {
      id: "PILGRIM-0041",
      name: "Unregistered Subject #0041",
      similarity: 42.1,
      distance: 0.89,
      rfidSignal: "No Active RFID Tag",
      status: "NO MATCH DETECTED",
      color: "rose"
    }
  };

  const handleRunMatch = () => {
    setIsMatching(true);
    setVectorProgress(0);
    const interval = setInterval(() => {
      setVectorProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsMatching(false);
          return 100;
        }
        return prev + 20;
      });
    }, 100);
  };

  // ---------------------------------------------------------
  // SANDBOX 2: EVA Voice & OLED Robot Terminal State
  // ---------------------------------------------------------
  const [evaQueryIndex, setEvaQueryIndex] = useState(0);
  const [evaState, setEvaState] = useState<"idle" | "listening" | "gemini" | "speaking">("speaking");
  const [audioBars, setAudioBars] = useState<number[]>([40, 70, 30, 90, 50, 80, 60, 40]);

  const evaQueries = [
    {
      query: "Where is the Computer Engineering HOD Office?",
      intent: "get_faculty_location",
      answer: "HOD Computer Dept. is located on the 2nd Floor, Room C-204. Currently available for student queries.",
      oledMood: "speaking",
      telephony: "No Call Needed"
    },
    {
      query: "Show attendance defaulters list for 3rd Year Div A",
      intent: "query_defaulter_records",
      answer: "Found 4 students under 50% attendance limit. Dispatching automated WhatsApp warnings to parents via Android relay.",
      oledMood: "listening",
      telephony: "WebSocket Telephony Relay Active"
    },
    {
      query: "What is today's lecture schedule for Machine Learning?",
      intent: "get_lecture_timetable",
      answer: "ML Lecture is scheduled at 02:00 PM in Lab 03. Faculty: Prof. Aulakh.",
      oledMood: "speaking",
      telephony: "No Call Needed"
    }
  ];

  useEffect(() => {
    if (evaState === "speaking" || evaState === "listening") {
      const interval = setInterval(() => {
        setAudioBars([
          Math.floor(Math.random() * 80 + 20),
          Math.floor(Math.random() * 90 + 10),
          Math.floor(Math.random() * 70 + 30),
          Math.floor(Math.random() * 100 + 10),
          Math.floor(Math.random() * 85 + 15),
          Math.floor(Math.random() * 75 + 25),
          Math.floor(Math.random() * 95 + 10),
          Math.floor(Math.random() * 60 + 40),
        ]);
      }, 120);
      return () => clearInterval(interval);
    }
  }, [evaState]);

  const handleSimulateEva = (index: number) => {
    setEvaQueryIndex(index);
    setEvaState("listening");
    setTimeout(() => {
      setEvaState("gemini");
      setTimeout(() => {
        setEvaState("speaking");
      }, 900);
    }, 700);
  };

  // ---------------------------------------------------------
  // SANDBOX 3: BhashaScan OCR Preprocessing State
  // ---------------------------------------------------------
  const [ocrScript, setOcrScript] = useState<"gurmukhi" | "devanagari" | "bengali">("gurmukhi");
  const [isDenoised, setIsDenoised] = useState(true);

  const scriptSamples = {
    gurmukhi: {
      raw: "ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥ ਸ਼੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗ੍ਰੰਥ ॥",
      clean: "ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥ ਸ਼੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗ੍ਰੰਥ ॥",
      translation: "One Universal Creator • Sri Gur Pratap Suraj Granth Historical Digitization",
      rawAccuracy: "52.4%",
      cleanAccuracy: "96.8%"
    },
    devanagari: {
      raw: "महाराष्ट्र राज्य तंत्रशिक्षण मंडळ • संगणक अभियांत्रिकी",
      clean: "महाराष्ट्र राज्य तंत्रशिक्षण मंडळ • संगणक अभियांत्रिकी",
      translation: "Maharashtra State Board of Technical Education • Computer Engineering",
      rawAccuracy: "58.1%",
      cleanAccuracy: "95.4%"
    },
    bengali: {
      raw: "ভারতীয় ভাষা প্রক্রিয়া ও প্রাচীন নথি ডিজিটাল সংরক্ষণ",
      clean: "ভারতীয় ভাষা প্রক্রিয়া ও প্রাচীন নথি ডিজিটাল সংরক্ষণ",
      translation: "Indian Language Processing & Historical Document Digital Preservation",
      rawAccuracy: "49.7%",
      cleanAccuracy: "94.2%"
    }
  };

  const currentScript = scriptSamples[ocrScript];

  return (
    <section id="playground" className="w-full bg-[#f9f9f9] py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#0051d5]" />
              <span className="font-mono text-xs text-[#0051d5] uppercase tracking-[0.2em] font-bold">
                INTERACTIVE LAB SANDBOXES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight">
              Test Live Working <span className="text-[#0051d5]">AI Simulators</span>.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-sans leading-relaxed">
              Interact with real-time mathematical simulations of Gursevak's patented 512-dim ArcFace biometric vector engine, EVA speech robotics loops, and multi-script OCR preprocessing.
            </p>
          </div>

          {/* Tab Controls */}
          <div className="bg-slate-200/80 p-1.5 rounded-xl border border-slate-300 font-mono text-xs flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab("arcface")}
              className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "arcface"
                  ? "bg-[#0051d5] text-white shadow-md"
                  : "text-slate-700 hover:text-slate-950 font-semibold"
              }`}
            >
              <Fingerprint className="w-3.5 h-3.5" />
              <span>512-Dim ArcFace</span>
            </button>
            
            <button
              onClick={() => setActiveTab("eva")}
              className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "eva"
                  ? "bg-[#0051d5] text-white shadow-md"
                  : "text-slate-700 hover:text-slate-950 font-semibold"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>EVA Robot Loop</span>
            </button>
            
            <button
              onClick={() => setActiveTab("ocr")}
              className={`py-2 px-4 rounded-lg font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "ocr"
                  ? "bg-[#0051d5] text-white shadow-md"
                  : "text-slate-700 hover:text-slate-950 font-semibold"
              }`}
            >
              <ScanText className="w-3.5 h-3.5" />
              <span>BhashaScan OCR</span>
            </button>
          </div>
        </div>

        {/* Simulator Sandbox Display Surface */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* ========================================================= */}
          {/* SANDBOX 1: ArcFace 512-Dim Biometrics Simulator           */}
          {/* ========================================================= */}
          {activeTab === "arcface" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 font-sans"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-6 gap-4">
                <div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-mono text-[10px] uppercase font-bold mb-2 inline-block">
                    Indian Patent App No. 202621047713 A
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    On-Device ArcFace 512-Dim Vector Re-Identification Search
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-mono mt-1">
                    Select a pilgrim test candidate to run on-device 512-dimensional TFLite cosine vector distance calculation.
                  </p>
                </div>

                <button
                  onClick={handleRunMatch}
                  disabled={isMatching}
                  className="px-5 py-3 bg-[#0051d5] hover:bg-[#003ea8] text-white font-mono text-xs font-bold uppercase rounded-lg shadow-md flex items-center gap-2 transition-all cursor-pointer shrink-0"
                >
                  <RefreshCw className={`w-4 h-4 ${isMatching ? "animate-spin" : ""}`} />
                  <span>{isMatching ? "Computing Vector Distance..." : "Run Vector Similarity Search"}</span>
                </button>
              </div>

              {/* Candidate Selection Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <button
                  onClick={() => setSelectedCandidate("match")}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedCandidate === "match"
                      ? "bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">PILGRIM #8402</span>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase">Registered</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-sans">High-similarity face embedding match</p>
                </button>

                <button
                  onClick={() => setSelectedCandidate("partial")}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedCandidate === "partial"
                      ? "bg-amber-50 border-amber-500 shadow-md ring-2 ring-amber-500/20"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">CANDIDATE #1092</span>
                    <span className="text-[10px] font-bold text-amber-700 uppercase">Weak Telemetry</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-sans">Borderline 78.3% vector similarity</p>
                </button>

                <button
                  onClick={() => setSelectedCandidate("mismatch")}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedCandidate === "mismatch"
                      ? "bg-rose-50 border-rose-500 shadow-md ring-2 ring-rose-500/20"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">SUBJECT #0041</span>
                    <span className="text-[10px] font-bold text-rose-700 uppercase">Unregistered</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-sans">Distinct identity (42.1% similarity)</p>
                </button>
              </div>

              {/* Vector Processing Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Vector Grid Visualizer */}
                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-white font-mono text-xs space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="text-cyan-400 font-bold uppercase text-[11px] flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      512-Dim ArcFace Embedding Matrix
                    </span>
                    <span className="text-[10px] text-slate-400">TFLite L2 Vector</span>
                  </div>

                  <div className="grid grid-cols-8 gap-1.5 py-2">
                    {Array.from({ length: 32 }).map((_, i) => {
                      const candidateData = candidates[selectedCandidate];
                      const active = (i * 7 + candidateData.similarity) % 100 > 35;
                      return (
                        <motion.div
                          key={i}
                          animate={{ scale: isMatching ? [1, 1.2, 1] : 1 }}
                          transition={{ duration: 0.2, delay: i * 0.01 }}
                          className={`h-4 rounded transition-all duration-300 ${
                            active ? "bg-[#0051d5]" : "bg-slate-800"
                          }`}
                        />
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex justify-between">
                    <span>Cosine Distance: {candidates[selectedCandidate].distance}</span>
                    <span>RFID Node: {candidates[selectedCandidate].rfidSignal}</span>
                  </div>
                </div>

                {/* Match Result Display */}
                <div className="p-6 rounded-xl border flex flex-col justify-between bg-slate-50 border-slate-200">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs font-bold uppercase text-slate-500">
                        BIOMETRIC FUSION VERDICT
                      </span>
                      <span className="text-2xl font-extrabold font-mono text-[#0051d5]">
                        {candidates[selectedCandidate].similarity}% Match
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-950 mb-2">
                      {candidates[selectedCandidate].name}
                    </h4>

                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 font-mono space-y-1 mb-4">
                      <p className="font-bold text-slate-900">• Status: {candidates[selectedCandidate].status}</p>
                      <p className="text-slate-600">• Multimodal Score: ArcFace (512D) + RFID Signal Sensor</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 font-mono text-xs text-slate-500 flex items-center justify-between">
                    <span>On-Device Latency: 18ms</span>
                    <span className="font-bold text-[#0051d5]">Kumbh Bandhu Core</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* SANDBOX 2: EVA Physical Robot Voice & Speech Loop Simulator */}
          {/* ========================================================= */}
          {activeTab === "eva" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 font-sans"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    EVA Cyber-Physical Voice Speech Loop & Telephony Relay
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-mono mt-1">
                    Click a voice prompt to simulate the 9-step audio capture loop, Gemini reasoning, and Android WebSocket telephone dispatch.
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-slate-500 font-bold">OLED Mood:</span>
                  <span className="px-3 py-1 bg-blue-50 text-[#0051d5] border border-blue-200 rounded font-bold uppercase">
                    {evaState.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Sample Voice Queries */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-slate-700 block">Select Sample Student / Parent Voice Query:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  {evaQueries.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSimulateEva(idx)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        evaQueryIndex === idx
                          ? "bg-blue-50 border-[#0051d5] text-[#0051d5] font-bold shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <p className="font-sans text-xs text-slate-900 leading-snug">"{item.query}"</p>
                      <span className="text-[10px] uppercase text-[#0051d5] font-bold mt-2 block">
                        RUN 9-STEP PIPELINE →
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Robot Hardware Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* SSD1306 OLED Display Simulator */}
                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-white flex flex-col items-center justify-center space-y-4 text-center">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    SSD1306 OLED DUAL EYE DISPLAY (60 FPS)
                  </span>

                  <div className="w-52 h-24 bg-slate-900 border-2 border-blue-500/50 rounded-xl flex items-center justify-center gap-6 shadow-inner">
                    {evaState === "listening" && (
                      <div className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-cyan-400 animate-ping" />
                        <div className="w-6 h-6 rounded-full bg-cyan-400 animate-ping" />
                      </div>
                    )}
                    {evaState === "gemini" && (
                      <div className="text-2xl font-mono text-cyan-300 animate-spin">🌀</div>
                    )}
                    {evaState === "speaking" && (
                      <div className="flex gap-6 items-center">
                        <div className="w-7 h-7 rounded-full border-2 border-cyan-400 bg-blue-500/30 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                        </div>
                        <div className="w-7 h-7 rounded-full border-2 border-cyan-400 bg-blue-500/30 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>

                  <span className="font-mono text-xs text-cyan-400 font-bold">
                    State: {evaState.toUpperCase()} State Machine
                  </span>
                </div>

                {/* Response & Telephony Log */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 font-bold uppercase block mb-1">
                      SYNTHESIZED ROBOT VOICE RESPONSE (PIPER TTS)
                    </span>
                    <p className="text-sm font-bold text-slate-950 font-sans leading-relaxed">
                      "{evaQueries[evaQueryIndex].answer}"
                    </p>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs space-y-1">
                    <p className="text-slate-600 font-bold">• Function Call: {evaQueries[evaQueryIndex].intent}</p>
                    <p className="text-[#0051d5] font-bold">• Telephony Daemon: {evaQueries[evaQueryIndex].telephony}</p>
                  </div>

                  <div className="font-mono text-[11px] text-slate-500 flex justify-between border-t border-slate-200 pt-3">
                    <span>ESP32-S3 SoftAP: 192.168.4.1</span>
                    <span className="font-bold text-[#0051d5]">Sub-1.2s Latency</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* SANDBOX 3: BhashaScan Document OCR Preprocessing Lab      */}
          {/* ========================================================= */}
          {activeTab === "ocr" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 font-sans"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    BhashaScan Multi-Script Adaptive OpenCV Denoising Lab
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-mono mt-1">
                    Toggle adaptive preprocessing to see raw Tesseract recognition vs BhashaScan OpenCV local Otsu thresholding.
                  </p>
                </div>

                <button
                  onClick={() => setIsDenoised(!isDenoised)}
                  className={`px-4 py-2.5 rounded-lg font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                    isDenoised
                      ? "bg-[#0051d5] text-white shadow-md"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  <ScanText className="w-4 h-4" />
                  <span>{isDenoised ? "OpenCV Denoised (ON)" : "Raw Noisy Scan (OFF)"}</span>
                </button>
              </div>

              {/* Script Selector */}
              <div className="flex gap-3 font-mono text-xs">
                <button
                  onClick={() => setOcrScript("gurmukhi")}
                  className={`px-4 py-2 rounded-lg font-bold uppercase transition-all cursor-pointer ${
                    ocrScript === "gurmukhi" ? "bg-[#0051d5] text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  Gurmukhi (ਪੰਜਾਬੀ)
                </button>
                <button
                  onClick={() => setOcrScript("devanagari")}
                  className={`px-4 py-2 rounded-lg font-bold uppercase transition-all cursor-pointer ${
                    ocrScript === "devanagari" ? "bg-[#0051d5] text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  Devanagari (ਮਰਾਠੀ / ਹਿੰਦੀ)
                </button>
                <button
                  onClick={() => setOcrScript("bengali")}
                  className={`px-4 py-2 rounded-lg font-bold uppercase transition-all cursor-pointer ${
                    ocrScript === "bengali" ? "bg-[#0051d5] text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  Bengali (বাংলা)
                </button>
              </div>

              {/* Script Extraction Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                
                {/* Extracted Text Display */}
                <div className="p-6 bg-slate-950 text-white rounded-xl border border-slate-800 space-y-4">
                  <span className="text-cyan-400 font-bold uppercase text-[11px] block">
                    EXTRACTED TEXT OUTPUT ({isDenoised ? "BhashaScan Filtered" : "Raw Tesseract"})
                  </span>
                  
                  <p className="text-lg font-semibold tracking-wide text-white leading-relaxed">
                    {isDenoised ? currentScript.clean : currentScript.raw}
                  </p>

                  <p className="text-xs text-slate-400 font-sans border-t border-slate-800 pt-3">
                    Translation: {currentScript.translation}
                  </p>
                </div>

                {/* Accuracy Score */}
                <div className={`p-6 rounded-xl border flex flex-col justify-between ${
                  isDenoised
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-rose-50 border-rose-300 text-rose-950"
                }`}>
                  <div>
                    <span className="font-mono text-xs font-bold uppercase block mb-1">
                      RECOGNITION ACCURACY METRIC
                    </span>
                    <h4 className="text-3xl font-extrabold font-mono">
                      {isDenoised ? currentScript.cleanAccuracy : currentScript.rawAccuracy}
                    </h4>
                    <p className="text-xs mt-2 font-sans opacity-90 leading-relaxed">
                      {isDenoised
                        ? "OpenCV local Otsu binarization and deskewing eliminates background noise, yielding a ~40% accuracy gain on degraded archival scans."
                        : "Raw physical scans with uneven lighting produce character segmentation errors in standard OCR engines."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-current/20 font-mono text-xs font-bold flex justify-between">
                    <span>9 Indian Languages Supported</span>
                    <span>BhashaScan Engine</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
