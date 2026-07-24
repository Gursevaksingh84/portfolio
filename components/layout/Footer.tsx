"use client";

import { PERSONAL_BIO } from "@/lib/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f3f3f3] border-t border-slate-200 py-16 text-slate-800">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-slate-950 mb-3">
              Engineering the <span className="text-[#0051d5] italic">Next</span> Intelligence.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Specializing in Edge AI, Multimodal Biometrics (Published Patent App No. 202621047713 A), Cyber-Physical Robotics (EVA), and Academic Mentorship at GGSP Nashik.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:text-right font-mono text-xs uppercase font-semibold">
            <a
              href={PERSONAL_BIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-[#0051d5] transition-colors"
            >
              LinkedIn Profile
            </a>
            <a
              href={PERSONAL_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-[#0051d5] transition-colors"
            >
              GitHub Codebases
            </a>
            <a
              href={`mailto:${PERSONAL_BIO.email}`}
              className="text-slate-800 hover:text-[#0051d5] transition-colors"
            >
              Direct Email
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <span className="text-slate-500 uppercase tracking-wider text-[11px]">
            © 2026 Gursevak Singh Aulakh • All Rights Reserved
          </span>
          <span className="text-[#0051d5] uppercase font-bold text-[11px] tracking-wider">
            System Status: Online & Operational
          </span>
        </div>

      </div>
    </footer>
  );
}
