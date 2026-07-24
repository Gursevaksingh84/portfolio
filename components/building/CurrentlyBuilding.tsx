"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Activity, Radio, ChevronRight, Layers } from "lucide-react";

export default function CurrentlyBuilding() {
  const activeExperiments = [
    {
      title: "Multi-Agent ROS2 Swarm Control",
      category: "Robotics & Swarms",
      status: "Active R&D",
      description: "Decentralized task distribution and obstacle avoidance protocols for edge-controlled mobile rovers operating without central server connection.",
      tech: ["ROS2", "Python", "ESP32-S3", "Micro-XRCE-DDS"],
      indicatorColor: "bg-emerald-500"
    },
    {
      title: "ESP32-S3 Offline Speech Audio Pipeline",
      category: "Embedded Firmware",
      status: "Hardware Prototyping",
      description: "Low-latency I2S microphone sampling and hardware speech synthesis running on dual-core microcontrollers for real-time robotic interaction.",
      tech: ["C++", "ESP-IDF", "I2S Audio", "DSP Filters"],
      indicatorColor: "bg-blue-500"
    },
    {
      title: "Quantized ArcFace Vector Engine",
      category: "Edge AI Biometrics",
      status: "Optimization Phase",
      description: "8-bit int quantization for 512-dimensional facial embedding vectors, enabling sub-20ms candidate matching on low-memory microcontrollers.",
      tech: ["TensorFlow Lite", "ArcFace", "C++", "Vector Math"],
      indicatorColor: "bg-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold border border-blue-500/30 mb-3">
              <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>ACTIVE LAB EXPERIMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Currently Building in the Lab
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Ongoing technical research and hardware-software prototypes actively being built by Gursevak.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeExperiments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                    <span className={`w-2 h-2 rounded-full ${item.indicatorColor} animate-pulse`} />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/70 flex flex-wrap gap-1.5">
                {item.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
