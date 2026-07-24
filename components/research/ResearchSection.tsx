"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RESEARCH_PATENTS } from "@/lib/data/portfolio-data";

export default function ResearchSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCitation = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="research" className="w-full bg-[#f9f9f9] py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-[#0051d5] uppercase tracking-[0.2em] font-bold block mb-2">
              INTELLECTUAL PROPERTY & PUBLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Selected Research & Published Patent
            </h2>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-slate-500 uppercase font-semibold">
            Indian Patent Office (App 202621047713 A)
          </span>
        </div>

        {/* Papers / Patent List */}
        <div className="space-y-6">
          {RESEARCH_PATENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white hover:bg-blue-50/40 p-6 sm:p-8 rounded-xl transition-all border border-slate-200 shadow-md flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="font-mono text-2xl text-slate-400 font-bold group-hover:text-[#0051d5] transition-colors shrink-0">
                0{idx + 1}
              </div>

              <div className="flex-grow space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-blue-50 text-[#0051d5] border border-blue-200 font-mono text-[10px] uppercase font-bold rounded">
                    {item.statusTag}
                  </span>
                  {item.referenceNo && (
                    <span className="font-mono text-xs text-[#0051d5] font-bold">
                      {item.referenceNo}
                    </span>
                  )}
                  <span className="font-mono text-xs text-slate-400 font-medium">
                    • {item.dates}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 group-hover:text-[#0051d5] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-slate-500">
                  {item.authors}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-sans">
                  {item.abstract}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono font-bold text-emerald-600">
                    Impact: {item.impact}
                  </span>
                </div>
              </div>

              <div className="flex md:flex-col gap-2 shrink-0">
                <button
                  onClick={() =>
                    handleCopyCitation(
                      `${item.title}. ${item.referenceNo || ""}. ${item.authors}.`,
                      item.id
                    )
                  }
                  className="px-4 py-2.5 rounded border border-slate-200 bg-slate-50 hover:bg-[#0051d5] hover:text-white hover:border-[#0051d5] transition-all font-mono text-xs uppercase font-bold flex items-center gap-1.5 cursor-pointer text-slate-700 shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copiedId === item.id ? "check" : "content_copy"}
                  </span>
                  <span>{copiedId === item.id ? "Copied" : "Cite"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
