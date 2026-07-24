"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenAssistantWithQuery: (query?: string) => void;
  onOpenResume: () => void;
  onSelectProduct: (productId: string) => void;
}

export default function HeroPlatform({
  onOpenAssistantWithQuery,
  onOpenResume,
  onSelectProduct,
}: HeroProps) {
  return (
    <div id="home" className="w-full pt-20 bg-[#f9f9f9] overflow-x-hidden">
      
      {/* Main Hero Section */}
      <section className="relative min-h-[640px] flex items-center px-5 lg:px-8 max-w-[1200px] mx-auto py-12 lg:py-16">
        
        {/* Subtle Grid Pattern Background */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-[0.04] pointer-events-none select-none overflow-hidden">
          <svg className="w-full h-full data-grid-animate" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <pattern id="hero-grid-dots" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid-dots)" />
          </svg>
        </div>

        <div className="grid grid-cols-12 w-full gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Headline, Bio & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-8 h-[2px] bg-[#0051d5]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0051d5] font-bold">
                AI SYSTEMS & EDGE ENGINEERING
              </span>
            </div>

            <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-[72px] leading-[0.93] text-slate-950 uppercase tracking-tighter mb-6">
              <span className="block">GURSEVAK</span>
              <span className="block lg:pl-12 text-slate-400 italic font-light hover:text-[#0051d5] transition-colors duration-700">
                SINGH AULAKH
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-snug mb-6 max-w-xl">
              AI Systems Engineer, Robotics Developer & Published Patent Co-Inventor specializing in{" "}
              <span className="text-[#0051d5] font-bold">on-device AI</span> & physical infrastructure.
            </p>

            <div className="mb-8 inline-flex items-center gap-2 px-3.5 py-2 rounded bg-blue-50 border border-blue-200/80 text-[#0051d5] font-mono text-xs font-bold w-fit shadow-sm">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Published Indian Patent Application No. 202621047713 A</span>
            </div>

            {/* Action Buttons & Status Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-[#0051d5] text-white px-7 py-3.5 rounded text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#003ea8] transition-all shadow-md shadow-blue-600/20"
              >
                <span>EXPLORE SELECTED WORKS</span>
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>

              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 bg-white border border-slate-300 px-6 py-3.5 rounded text-xs font-mono font-bold uppercase tracking-wider text-slate-800 hover:border-[#0051d5] hover:bg-slate-50 transition-all shadow-sm"
              >
                <span>DOWNLOAD CV / RESUME</span>
                <span className="material-symbols-outlined text-base text-[#0051d5] transition-transform group-hover:translate-y-0.5">
                  download
                </span>
              </button>
            </div>

            {/* Active Lab Node & Status */}
            <div className="flex items-center justify-between font-mono text-xs border-t border-slate-200 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-500 font-medium">SYSTEM STATUS:</span>
                <span className="font-bold text-slate-900">ONLINE & OPERATIONAL</span>
              </div>
              <span className="text-slate-400 font-mono font-medium">LATENCY: 24MS</span>
            </div>

          </motion.div>

          {/* Right Column: Portrait Photo Card directly in Hero! */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] group">
              <div className="absolute -inset-3 bg-[#0051d5]/5 rounded-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Photo Card */}
              <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl ring-1 ring-slate-200 bg-white relative">
                <img
                  src="/img-self.jpeg"
                  alt="Gursevak Singh Aulakh"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Bottom Label Bar */}
              <div className="mt-3 flex items-center justify-between px-2">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
                  AI SYSTEMS ENGINEER / 01
                </span>
                <div className="flex gap-1.5 items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0051d5] animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
