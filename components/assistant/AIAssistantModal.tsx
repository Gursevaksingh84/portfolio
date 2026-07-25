"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, RefreshCw, ShieldCheck, Zap } from "lucide-react";
import { PERSONAL_BIO } from "@/lib/data/portfolio-data";

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  engine?: string;
}

export default function AIAssistantModal({ isOpen, onClose, initialQuery }: AssistantModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Gursevak Singh Aulakh's AI Assistant. Ask me anything about my published Indian patent (App 202621047713 A), EVA institutional desk robot, Kumbh Bandhu biometric engine, Granthalaya scripture reader, or technical background.",
      timestamp: "Just now",
      engine: "Sevak Neural Engine"
    }
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [remainingQuota, setRemainingQuota] = useState<number | null>(5);

  useEffect(() => {
    if (initialQuery && isOpen) {
      handleSend(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const promptChips = [
    "Tell me about EVA robot hardware",
    "Explain Kumbh Bandhu patent",
    "Granthalaya scripture reader architecture",
    "Why collaborate with Gursevak?"
  ];

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim() || isTyping) return;

    const userMsg: Message = {
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query })
      });

      const data = await res.json();

      if (typeof data.remaining === "number") {
        setRemainingQuota(data.remaining);
      }

      const botMsg: Message = {
        sender: "bot",
        text: data.response || "Gursevak's AI assistant is currently updating. Please try another inquiry.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        engine: data.engine || "Sevak Neural Knowledge Base"
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I am Gursevak Singh Aulakh, an AI Systems Engineer & Published Patent Co-Inventor (App No. 202621047713 A). Feel free to reach out directly at singhgursevak872@gmail.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          engine: "Knowledge Engine Fallback"
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center sm:justify-end p-2 sm:p-6 bg-slate-900/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-full max-w-lg h-[95vh] sm:h-[90vh] bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden font-sans"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-200 bg-[#f9f9f9] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0051d5] text-white flex items-center justify-center shadow-xs font-mono font-bold text-xs">
                GS
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-sm">
                  Ask Gursevak AI Assistant
                </h3>
                <p className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <span>Patent App 202621047713 A</span>
                  {remainingQuota !== null && (
                    <span className="text-[10px] font-bold text-[#0051d5] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {remainingQuota}/5 per min quota
                    </span>
                  )}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-3 bg-slate-100/60 border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto no-scrollbar font-mono text-xs">
            {promptChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 text-[#0051d5] font-semibold border border-slate-200 hover:border-blue-200 whitespace-nowrap transition-colors shadow-xs cursor-pointer"
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
                  <div className="w-7 h-7 rounded-lg bg-[#0051d5] text-white flex items-center justify-center shrink-0 mt-1 font-mono text-[10px] font-bold">
                    GS
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#0051d5] text-white rounded-br-xs font-sans"
                      : "bg-slate-100 text-slate-900 rounded-bl-xs border border-slate-200/80 font-sans"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2 pt-1 border-t border-slate-200/40">
                    <span>{msg.engine || "Gursevak AI"}</span>
                    <span>{msg.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-lg bg-[#0051d5] text-white flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                  GS
                </div>
                <div className="p-3 bg-slate-100 rounded-2xl text-xs text-slate-600 font-mono flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0051d5]" />
                  <span>Parsing inquiry against neural knowledge base...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
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
                placeholder="Ask AI Assistant about patent, EVA robot, projects..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0051d5] border border-slate-200"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                className="p-2.5 rounded-xl bg-[#0051d5] hover:bg-[#003ea8] disabled:opacity-50 text-white transition-colors cursor-pointer"
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
