"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, Bot, RefreshCw } from "lucide-react";
import { PERSONAL_BIO, SYSTEM_PRODUCTS, RESEARCH_PATENTS } from "@/lib/data/portfolio-data";

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function AIAssistantModal({ isOpen, onClose, initialQuery }: AssistantModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Gursevak Singh Aulakh's digital twin assistant. Ask me anything about my published Indian patent (App 202621047713 A), Kumbh Bandhu biometric system, EVA desk robot, computer engineering teaching, or technical architecture.",
      timestamp: "Just now"
    }
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (initialQuery && isOpen) {
      handleSend(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const promptChips = [
    "Tell me about EVA robot",
    "Explain Kumbh Bandhu patent",
    "Why should I collaborate with you?",
    "Show your research journey"
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = generateRAGResponse(query);
      const botMsg: Message = {
        sender: "bot",
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const generateRAGResponse = (q: string): string => {
    const lower = q.toLowerCase();

    if (lower.includes("patent") || lower.includes("kumbh") || lower.includes("reunification")) {
      return `I am a Published Indian Patent Co-Inventor (App No. 202621047713 A, Published June 2026). My patent details a privacy-preserving multimodal biometric reunification engine fusing ArcFace 512-dim face embeddings, RFID sensor telemetry, and gait analysis. This core technology powers Kumbh Bandhu, achieving 94.7% identification accuracy and reducing manual search time by ~73%.`;
    }

    if (lower.includes("eva") || lower.includes("robot") || lower.includes("desk")) {
      return `EVA is an AI Institutional Desk Robot designed and built by me. It features physical dual-OLED eye animations, a custom I2S audio hardware pipeline, ESP32-S3 firmware, and tool-orchestrated Gemini AI function calling connected to live department timetables and attendance databases.`;
    }

    if (lower.includes("skill") || lower.includes("work") || lower.includes("tech")) {
      return `I operate from silicon to interface: 
- Languages: Python, Kotlin, C++, TypeScript, React, Dart, Java
- Edge AI & Biometrics: ArcFace 512-dim embeddings, TensorFlow Lite, OpenCV
- Firmware & IoT: ESP32-S3, I2S audio streaming, RFID readers, WebSockets
- Cloud & Web: Next.js 15, FastAPI, Supabase, PostgreSQL, Firebase`;
    }

    if (lower.includes("teaching") || lower.includes("ggsp") || lower.includes("workshop")) {
      return `I work as a Computer Engineering Lecturer & Workshop Facilitator at GGSP Nashik. In June 2026, I facilitated an intensive 'AI Tools for Engineers' workshop training 350+ students. I also mentored student teams winning 2nd Prize at National Level Techno Fest 2026 and Top 33 at Synergy 2026.`;
    }

    if (lower.includes("collaborate") || lower.includes("hire") || lower.includes("why")) {
      return `Why collaborate with Gursevak Singh Aulakh?
1. Published Patent Holder: Co-inventor on published Indian Patent App 202621047713 A.
2. Full Spectrum Systems Execution: Builds on-device C++ micro-controller firmware, edge neural networks, and modern Next.js web products.
3. Proven Track Record: National Techno Fest 2nd Prize winner, Synergy 2026 finalist.
4. Educator & Research Leader: Mentored 350+ engineering students on real-world AI software.`;
    }

    return `I am Gursevak Singh Aulakh, an AI Systems Engineer, Published Patent Co-Inventor (App No. 202621047713 A), and Lecturer. My flagship systems include Kumbh Bandhu (biometric reunification), EVA (physical assistant robot), Granthalaya (scripture library), and BhashaScan (9-language OCR). Direct Email: singhgursevak872@gmail.com.`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="w-full max-w-lg h-[90vh] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs font-mono font-bold text-xs">
                GS
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Ask Gursevak AI
                </h3>
                <p className="text-[11px] font-mono text-slate-500">
                  Digital Twin • Trained on Patent 202621047713 A
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-3 bg-slate-100/60 border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {promptChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 text-blue-700 text-xs font-medium border border-slate-200 hover:border-blue-200 whitespace-nowrap transition-colors shadow-2xs"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 mt-1 font-mono text-[10px] font-bold">
                    GS
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-xs"
                      : "bg-slate-100 text-slate-800 rounded-bl-xs border border-slate-200/80"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className="text-[10px] font-mono text-slate-400 block mt-1 text-right">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                  GS
                </div>
                <div className="p-3 bg-slate-100 rounded-2xl text-xs text-slate-500 font-mono flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" />
                  <span>Gursevak AI is searching knowledge base...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask Gursevak AI about patent, EVA robot, projects..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 border border-slate-200"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim()}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
