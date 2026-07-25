"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenAssistant: () => void;
  onOpenResume: () => void;
  onOpenPalette: () => void;
}

export default function Navbar({ onOpenAssistant, onOpenResume, onOpenPalette }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "projects", "research", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Research", href: "#research", id: "research" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
          : "bg-[#f9f9f9]/90 backdrop-blur-xl border-b border-slate-200/60"
      }`}
    >
      <div className="h-16 sm:h-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
          <span className="font-extrabold text-xs sm:text-base lg:text-lg tracking-tight text-slate-900 uppercase font-sans group-hover:text-[#0051d5] transition-colors line-clamp-1">
            GURSEVAK SINGH AULAKH
          </span>
          <span className="w-2 h-2 bg-[#0051d5] rounded-full shrink-0" />
          <span className="hidden sm:inline font-mono text-xs text-slate-500 uppercase tracking-widest font-medium shrink-0">
            AI Engineering
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs uppercase font-bold tracking-wider transition-colors relative py-1 ${
                  isActive
                    ? "text-[#0051d5] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#0051d5]"
                    : "text-slate-600 hover:text-[#0051d5]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Avatar */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenPalette}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#0051d5] transition-colors text-slate-700 group cursor-pointer"
            title="Search Commands (Cmd+K)"
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              search
            </span>
          </button>

          {/* Profile Picture */}
          <button
            onClick={onOpenResume}
            className="relative group transition-transform hover:scale-105 cursor-pointer"
            title="Gursevak Singh Aulakh CV"
          >
            <img
              src="/img-self.jpeg"
              alt="Gursevak Singh Aulakh"
              className="w-9 h-9 rounded-full object-cover grayscale hover:grayscale-0 transition-all border border-slate-300 shadow-sm"
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-slate-700 hover:text-[#0051d5]"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase font-mono font-bold text-slate-700 hover:text-[#0051d5] py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="w-full py-2.5 bg-[#0051d5] text-white text-xs font-mono font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">psychology</span>
              <span>Ask AI Assistant</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
