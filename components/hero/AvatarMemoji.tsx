"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Award } from "lucide-react";

interface AvatarProps {
  onOpenAssistant: () => void;
}

export default function AvatarMemoji({ onOpenAssistant }: AvatarProps) {
  return (
    <div className="relative inline-flex items-center justify-center mb-6 select-none">
      
      {/* Outer Pulse Glow Ring */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-600/20 blur-lg animate-pulse" />

      {/* Avatar Container Card */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenAssistant}
        className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-slate-900 to-slate-800 p-1 border-2 border-blue-500/80 shadow-2xl cursor-pointer group flex items-center justify-center"
      >
        {/* Animated Avatar Graphic Representation */}
        <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-slate-700/80">
          
          {/* Subtle Background Circuit Mesh */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:8px_8px]" />

          {/* Core Avatar Symbol */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-400/40 text-blue-400 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
              <Bot className="w-7 h-7 text-blue-400" />
            </div>
            <span className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">
              SEVAK AI
            </span>
          </div>

          {/* Interactive Click Ripple Indicator */}
          <span className="absolute bottom-2 px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-300 text-[9px] font-mono font-bold border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to Chat
          </span>

        </div>

        {/* Status Badge */}
        <div className="absolute bottom-0 right-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-mono font-bold border border-emerald-500/80 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>ONLINE</span>
        </div>

      </motion.div>
    </div>
  );
}
