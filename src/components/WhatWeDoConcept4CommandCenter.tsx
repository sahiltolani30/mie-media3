"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhatWeDoConcept4CommandCenter() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Video Production",
      desc: "Short-form video content designed to educate, establish authority, and convert viewers into prospects.",
      metrics: ["High Retention", "Brand Authority", "Scalable Creative"]
    },
    {
      title: "Content Strategy",
      desc: "Research-led content that targets the questions your ideal clients are already asking online.",
      metrics: ["SEO Optimised", "Audience Research", "Script Frameworks"]
    },
    {
      title: "Meta Ads",
      desc: "Performance campaigns built around proven creative and audience targeting -- optimised for lead quality.",
      metrics: ["Lead Generation", "ROAS Focused", "A/B Testing"]
    },
  ];

  return (
    <section className="relative w-full bg-[#050505] py-32 px-6 border-b border-white/5">
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 4: Command Center
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            System Control Panel
          </h2>
        </div>

        {/* Dashboard UI */}
        <div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl shadow-black">
          {/* Top Bar */}
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
            <div className="flex gap-2 mr-6">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="flex gap-2 w-full max-w-md mx-auto bg-black rounded-lg p-1 border border-white/5">
              {services.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors relative ${
                    activeTab === idx ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {activeTab === idx && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-8 md:p-12 min-h-[350px] relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="text-xs font-mono text-[#FF8500] mb-6 border border-[#FF8500]/20 bg-[#FF8500]/10 px-3 py-1 rounded-full w-fit">
                  STATUS: ACTIVE / OPTIMIZED
                </div>
                
                <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">
                  {services[activeTab].title}
                </h3>
                
                <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
                  {services[activeTab].desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
                  {services[activeTab].metrics.map((metric, i) => (
                    <div key={i} className="bg-black/50 border border-white/5 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF8500] animate-pulse" />
                      <span className="text-sm text-white/70">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
