"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 700);
    const timer2 = setTimeout(() => {
      setStage(2);
      setTimeout(onComplete, 400);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-slate-950 text-white flex flex-col items-center justify-center p-6 select-none"
        >
          <div className="max-w-2xl text-center space-y-4">
            
            {/* Name Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans uppercase"
            >
              GURSEVAK SINGH AULAKH
            </motion.h1>

            {/* Title Reveal */}
            {stage >= 1 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xs sm:text-sm font-mono text-blue-400 tracking-[0.25em] uppercase font-bold"
              >
                AI SYSTEMS ENGINEER & RESEARCHER
              </motion.p>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
