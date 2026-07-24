"use client";

import { Sparkles, MessageSquare } from "lucide-react";

interface FloatingChatWidgetProps {
  onOpenAssistant: () => void;
}

export default function FloatingChatWidget({ onOpenAssistant }: FloatingChatWidgetProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Badge */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-lg border border-slate-800 animate-bounce">
        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        <span>Ask Gursevak AI</span>
      </div>

      {/* Floating Button Trigger */}
      <button
        onClick={onOpenAssistant}
        className="relative group w-14 h-14 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-xl transition-all transform hover:scale-105"
        aria-label="Ask Gursevak AI"
      >
        <span className="absolute inset-0 rounded-2xl bg-blue-500 opacity-30 animate-ping pointer-events-none group-hover:hidden" />
        <MessageSquare className="w-6 h-6 relative z-10 text-blue-400" />
      </button>
    </div>
  );
}
