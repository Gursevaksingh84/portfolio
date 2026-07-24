"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_BIO } from "@/lib/data/portfolio-data";

export default function ContactPortal() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Launch mailto client with pre-filled subject & body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hello Gursevak,\n\n${formData.message}\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}`);
    
    window.location.href = `mailto:${PERSONAL_BIO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 6000);
  };

  return (
    <section id="contact" className="w-full bg-[#f9f9f9] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        
        {/* High-Impact CTA Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0051d5] text-white p-10 sm:p-16 flex flex-col items-center text-center relative overflow-hidden rounded-xl shadow-2xl shadow-blue-600/20 mb-16"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 L100 0" fill="none" stroke="white" strokeWidth="0.1" />
              <path d="M0 90 L90 0" fill="none" stroke="white" strokeWidth="0.1" />
              <path d="M0 80 L80 0" fill="none" stroke="white" strokeWidth="0.1" />
              <path d="M10 100 L100 10" fill="none" stroke="white" strokeWidth="0.1" />
            </svg>
          </div>

          <span className="font-mono text-xs uppercase tracking-[0.3em] mb-4 opacity-90 font-bold">
            COLLABORATION & INQUIRIES
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 max-w-2xl">
            Let's Build Practical AI Systems Together
          </h2>

          <p className="text-sm sm:text-base text-blue-100 max-w-xl mb-8 leading-relaxed font-sans">
            Open for Edge AI implementations, multimodal biometric deployments, robotics prototyping, academic workshops, and technical consulting.
          </p>

          <a
            href={`mailto:${PERSONAL_BIO.email}`}
            className="inline-flex items-center gap-3 bg-white text-[#0051d5] px-10 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg rounded-sm cursor-pointer"
          >
            <span>Initialize Contact</span>
            <span className="material-symbols-outlined text-base">send</span>
          </a>
        </motion.div>

        {/* Detailed Form & Direct Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-950">
              Direct Contact Channels
            </h3>

            <div className="space-y-4 font-sans text-sm">
              <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 text-[#0051d5] rounded flex items-center justify-center font-mono">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-slate-400 font-bold block">Direct Email</span>
                  <a href={`mailto:${PERSONAL_BIO.email}`} className="font-bold text-slate-900 hover:text-[#0051d5] transition-colors">
                    {PERSONAL_BIO.email}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 text-[#0051d5] rounded flex items-center justify-center font-mono">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-slate-400 font-bold block">Location</span>
                  <span className="font-bold text-slate-900">{PERSONAL_BIO.location}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={PERSONAL_BIO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white border border-slate-200 hover:border-[#0051d5] text-slate-800 text-xs font-mono font-bold uppercase rounded shadow-sm transition-all cursor-pointer"
              >
                GitHub Profile ↗
              </a>
              <a
                href={PERSONAL_BIO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white border border-slate-200 hover:border-[#0051d5] text-slate-800 text-xs font-mono font-bold uppercase rounded shadow-sm transition-all cursor-pointer"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-slate-950 mb-6">Send an Inquiry</h3>

              {submitted ? (
                <div className="p-5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                  <span>Thank you! Your email app has been opened with your pre-formatted message to Gursevak Singh Aulakh.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="font-mono text-[10px] text-slate-500 uppercase font-bold block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Alex Morgan"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0051d5]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-slate-500 uppercase font-bold block mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@institution.edu"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0051d5]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-slate-500 uppercase font-bold block mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your research inquiry, hardware project, or workshop request..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0051d5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0051d5] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#003ea8] transition-all rounded shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Dispatch Inquiry via Email</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
