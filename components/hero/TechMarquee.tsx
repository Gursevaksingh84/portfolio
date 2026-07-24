"use client";

import { motion } from "framer-motion";

export default function TechMarquee() {
  const techStack = [
    { name: "ESP32-S3", category: "Microcontroller" },
    { name: "FastAPI", category: "Python Backend" },
    { name: "React 19", category: "Frontend" },
    { name: "Next.js 16", category: "Full-Stack" },
    { name: "Flutter", category: "Mobile" },
    { name: "Kotlin", category: "Android Daemon" },
    { name: "Gemini AI API", category: "LLM Orchestration" },
    { name: "ArcFace 512-dim", category: "Biometrics" },
    { name: "TensorFlow Lite", category: "Edge AI" },
    { name: "Supabase", category: "PostgreSQL DB" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "Tailwind CSS", category: "Styling" },
  ];

  const duplicatedTech = [...techStack, ...techStack];

  return (
    <div className="w-full py-5 bg-slate-900 border-y border-slate-800 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        <div className="flex items-center gap-8 px-4">
          {duplicatedTech.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-bold text-white tracking-tight">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
