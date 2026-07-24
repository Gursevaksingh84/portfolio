"use client";

import { useEffect, useState } from "react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAssistant: (query?: string) => void;
  onOpenResume: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenAssistant,
  onOpenResume,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or custom event
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    {
      id: "projects",
      icon: "terminal",
      label: "Show AI Projects & Products (EVA, Kumbh Bandhu, Granthalaya)",
      action: () => {
        onClose();
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "assistant",
      icon: "psychology",
      label: "Ask My AI Assistant",
      action: () => {
        onClose();
        onOpenAssistant();
      },
    },
    {
      id: "patent",
      icon: "verified",
      label: "View Published Patent (App No. 202621047713 A)",
      action: () => {
        onClose();
        document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "resume",
      icon: "download",
      label: "Download Resume / CV",
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: "contact",
      icon: "alternate_email",
      label: "Contact & Enterprise Inquiries",
      action: () => {
        onClose();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden z-10 animate-[fade-in-up_0.2s_ease-out]">
        <div className="flex items-center px-5 py-4 border-b border-slate-100">
          <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-base text-slate-800 placeholder-slate-400 font-sans"
          />
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded border border-slate-200 ml-2 text-[11px] font-mono text-slate-500 hover:text-slate-800"
          >
            ESC
          </button>
        </div>

        <div className="p-2 max-h-[350px] overflow-y-auto">
          <div className="px-3 py-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Navigation Commands
            </span>
          </div>

          <div className="flex flex-col gap-1">
            {filtered.length === 0 ? (
              <div className="px-4 py-6 text-center text-slate-400 text-sm">
                No matching commands found.
              </div>
            ) : (
              filtered.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-lg group transition-all text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="material-symbols-outlined text-[#0051d5] group-hover:scale-110 transition-transform">
                      {cmd.icon}
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      {cmd.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-600">
                    Jump ↵
                  </span>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="bg-slate-50 px-5 py-3 flex items-center justify-between border-t border-slate-100 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">keyboard_arrow_up</span>
              <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
              <span>Navigate</span>
            </span>
          </div>
          <span>AULAKH SYSTEMS STU1.0</span>
        </div>
      </div>
    </div>
  );
}
