"use client";

import { useState } from "react";

interface AboutVisionProps {
  onOpenAssistantWithQuery?: (query?: string) => void;
  onOpenResume?: () => void;
}

export default function AboutVision({
  onOpenAssistantWithQuery,
  onOpenResume,
}: AboutVisionProps) {
  const [messages, setMessages] = useState<
    { sender: "ai" | "user"; text: string; time: string }[]
  >([
    {
      sender: "ai",
      text: "Greetings. I am Sevak AI, the cognitive digital extension of Gursevak Singh Aulakh's research archive and AI engineering lab. How can I assist your inquiry today?",
      time: "Just Now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const newMessages = [
      ...messages,
      { sender: "user" as const, text: query, time: "Just Now" },
    ];
    setMessages(newMessages);
    if (!textToSend) setInputVal("");

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();
      if (lower.includes("eva")) {
        reply =
          "EVA is Gursevak's 9-step cyber-physical institutional assistant. It features dual SSD1306 OLED eyes, INMP441/MAX98357A I2S audio loops, ESP32-S3 microcontroller, and an Android cellular telephony relay for automated parent contact.";
      } else if (lower.includes("patent") || lower.includes("kumbh")) {
        reply =
          "Gursevak is co-inventor of Published Indian Patent Application No. 202621047713 A. It powers Kumbh Bandhu—a privacy-preserving multimodal reunification system fusing 512-dim ArcFace TFLite facial embeddings with RFID sensor telemetry.";
      } else if (lower.includes("stack") || lower.includes("tech")) {
        reply =
          "Gursevak's core tech stack spans Python (FastAPI, PyTorch, OpenCV, Tesseract), C++ (ESP32-S3), TensorFlow Lite, Kotlin (Android WebSocket Services), React, Next.js, TypeScript, Flutter, and Supabase PostgreSQL.";
      } else {
        reply =
          `Searching Gursevak's knowledge base for: "${query}". Gursevak specializes in Edge AI, Multimodal Biometrics (Patent App 202621047713 A), Cyber-Physical Robotics (EVA), and Academic Mentorship at GGSP Nashik.`;
      }

      setMessages((prev) => [
        ...prev,
        { sender: "ai" as const, text: reply, time: "Just Now" },
      ]);
    }, 600);
  };

  const samplePrompts = [
    "What is EVA Robot?",
    "Explain Patent 202621047713 A",
    "Tell me about Kumbh Bandhu",
    "Current tech stack?",
  ];

  return (
    <div id="about" className="w-full bg-[#f9f9f9]">
      
      {/* Ask My AI Assistant Section (Neural Query Interface) */}
      <section className="w-full bg-[#f3f3f3] border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs text-[#0051d5] uppercase tracking-[0.2em] font-bold">
                Neural Query Interface
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
                Ask My AI Assistant
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                Get immediate insights into Gursevak's research, published Indian patent (202621047713 A), EVA desk robot 9-step workflow, or technical stack.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {samplePrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="bg-white border border-slate-300 px-3.5 py-1.5 text-xs font-mono uppercase font-semibold text-slate-700 hover:border-[#0051d5] hover:text-[#0051d5] transition-all rounded-full cursor-pointer shadow-sm"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[460px]">
                <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0051d5] animate-pulse" />
                    <span className="font-mono text-xs font-bold text-slate-800 uppercase">
                      AULAKH_OS V1.4.2 — SEVAK AI ENGINE
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-sm">
                    terminal
                  </span>
                </div>

                <div className="flex-grow p-6 overflow-y-auto space-y-4 font-sans text-sm">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`p-3.5 rounded-xl max-w-[85%] leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-[#0051d5] text-white rounded-tr-none font-medium"
                            : "bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200 font-normal"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase font-semibold">
                        {msg.sender === "user" ? "You" : "Sevak AI"} • {msg.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="relative"
                  >
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Type your query... e.g. What is EVA?"
                      className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-4 pr-12 text-sm text-slate-800 focus:ring-2 focus:ring-[#0051d5] focus:outline-none font-sans"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0051d5] hover:scale-110 transition-transform cursor-pointer"
                    >
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
