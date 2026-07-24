"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

interface SystemLoaderProps {
  onComplete: () => void;
}

export default function SystemLoader({ onComplete }: SystemLoaderProps) {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [labelVisible, setLabelVisible] = useState(false);
  const [statusText, setStatusText] = useState("Initializing Core Systems");
  const [accessGranted, setAccessGranted] = useState(false);
  const [progressFilled, setProgressFilled] = useState(false);

  const fullName = "GURSEVAK SINGH AULAKH";

  useEffect(() => {
    // Phase 1: Hide initial loader overlay after 500ms
    const loaderTimer = setTimeout(() => {
      setLoaderVisible(false);
    }, 500);

    // Phase 2: Fade in label prefix
    const labelTimer = setTimeout(() => {
      setLabelVisible(true);
    }, 700);

    // Phase 3: Smooth Typewriter effect for full name
    let typeIndex = 0;
    
    const startTyping = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (typeIndex <= fullName.length) {
          setTypedText(fullName.slice(0, typeIndex));
          typeIndex++;
        } else {
          clearInterval(typeInterval);
          // Typing complete -> Fill progress bar & update status
          setProgressFilled(true);
          setTimeout(() => {
            setStatusText("Access Granted");
            setAccessGranted(true);
            // Finish loader sequence and reveal site
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 600);
        }
      }, 55);
    }, 900);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(labelTimer);
      clearTimeout(startTyping);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] bg-[#f9f9f9] text-slate-900 font-sans flex flex-col justify-between overflow-hidden">
        
        {/* Initial Loader Bar Overlay */}
        {loaderVisible && (
          <div className="absolute inset-0 bg-[#f9f9f9] z-[10000] flex flex-col items-center justify-center transition-opacity duration-500">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-[2px] bg-slate-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0051d5] animate-[loading_1.5s_infinite_ease-in-out]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">
                Initializing Systems
              </span>
            </div>
          </div>
        )}

        {/* Ambient Decorative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
              <path
                d="M44.7,-76.4C58.1,-69.2,69.2,-56.1,76.5,-41.2C83.8,-26.3,87.4,-9.6,85.2,6.4C83,22.4,75.1,37.6,64.2,50.1C53.3,62.6,39.5,72.4,24.1,77.5C8.7,82.5,-8.3,82.8,-24.4,78.2C-40.5,73.5,-55.8,63.9,-67.4,50.8C-78.9,37.8,-86.7,21.3,-87.3,4.6C-88,-12.1,-81.4,-29,-71.1,-43.3C-60.8,-57.6,-46.8,-69.3,-32,-75.8C-17.1,-82.3,-1.4,-83.6,14.6,-80.7C30.6,-77.8,44.7,-76.4,44.7,-76.4Z"
                fill="#c4c7c7"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        {/* Main Center Branding Stage */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
          <div className="flex flex-col items-center text-center max-w-4xl">
            
            {/* Label Prefix */}
            <div className="overflow-hidden mb-4">
              <span
                className={`font-mono text-xs text-[#0051d5] uppercase tracking-[0.3em] font-bold block transition-all duration-700 ease-out ${
                  labelVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Architecting Intelligence
              </span>
            </div>

            {/* Clean Proper Typewriter Name Headline */}
            <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-[72px] leading-none tracking-tight text-slate-950 uppercase select-none min-h-[1.2em] font-sans">
              {typedText}
              <span className="inline-block w-1.5 h-[0.9em] bg-[#0051d5] ml-1 animate-pulse align-middle" />
            </h1>

            {/* Progress Bar & Status */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="w-32 h-[2px] bg-slate-200 relative overflow-hidden rounded-full">
                <div
                  className={`absolute inset-0 bg-[#0051d5] origin-left transition-transform duration-[1000ms] ease-in-out ${
                    progressFilled ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>

              <div className="overflow-hidden">
                <span
                  className={`font-mono text-xs uppercase tracking-widest block transition-all duration-500 ${
                    accessGranted
                      ? "text-[#0051d5] font-bold scale-105"
                      : "text-slate-500 font-semibold"
                  }`}
                >
                  {statusText}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Sidebar Metadata & Awaiting Command Bar */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 font-mono text-xs">
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">System Version</span>
            <span className="text-slate-900 font-bold">v4.0.2-Stable</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">Neural Engine</span>
            <span className="text-[#0051d5] font-bold">Enabled</span>
          </div>
        </div>

        <div className="p-8 flex items-center gap-3 font-mono text-xs relative z-10">
          <span className="w-2 h-2 bg-[#0051d5] rounded-full animate-pulse" />
          <span className="text-slate-600 uppercase tracking-widest font-bold">
            Aulakh Systems Lab Node
          </span>
        </div>

      </div>
    </AnimatePresence>
  );
}
