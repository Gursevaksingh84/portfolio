"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "capabilities", label: "Skills" },
    { id: "research", label: "Research" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);
      setShowButton(window.scrollY > 600);

      // Determine active section
      const scrollPos = window.scrollY + 300;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Vertical Progress Bar */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2">
        {sections.map((section, idx) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center"
            aria-label={section.label}
          >
            {/* Tooltip */}
            <span className="absolute right-6 px-2 py-1 rounded bg-slate-900 text-white text-[10px] font-mono font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
            {/* Dot */}
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeSection
                  ? "bg-[#0051d5] scale-150 shadow-md shadow-blue-500/50"
                  : "bg-slate-300 hover:bg-slate-500 scale-100"
              }`}
            />
          </a>
        ))}
        {/* Mini Progress Line */}
        <div className="w-[2px] h-8 bg-slate-200 rounded-full mt-1 overflow-hidden">
          <div
            className="w-full bg-[#0051d5] rounded-full transition-all duration-150"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-[#0051d5] text-slate-600 hover:text-[#0051d5] flex items-center justify-center transition-all cursor-pointer group"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-xl group-hover:-translate-y-0.5 transition-transform">
              keyboard_arrow_up
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
