"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatWeDoConcept3Accordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const services = [
    {
      title: "Video production",
      desc: "Short-form video content designed to educate, establish authority, and convert viewers into prospects.",
      number: "01",
    },
    {
      title: "Content strategy",
      desc: "Research-led content that targets the questions your ideal clients are already asking online.",
      number: "02",
    },
    {
      title: "Meta ads management",
      desc: "Performance campaigns built around proven creative and audience targeting -- optimised for lead quality.",
      number: "03",
    },
  ];

  return (
    <section className="relative w-full bg-[#050505] py-32 px-6 border-b border-white/5">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 3: Accordion Pillar
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            The full pipeline.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row h-[600px] gap-4 w-full">
          {services.map((service, idx) => {
            const isHovered = hoveredIndex === idx;
            
            return (
              <motion.div
                key={idx}
                onHoverStart={() => setHoveredIndex(idx)}
                layout
                initial={false}
                animate={{
                  flex: isHovered ? 3 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="relative h-full bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden cursor-pointer group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                {/* Background Glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-[#FF8500]/10 to-transparent opacity-0"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top: Number */}
                  <div className="flex justify-between items-start">
                    <span className="text-4xl font-light text-white/20 font-mono">
                      {service.number}
                    </span>
                  </div>

                  {/* Bottom: Content */}
                  <div className="flex flex-col gap-4">
                    <motion.h3 
                      layout="position"
                      className="text-2xl font-medium text-white whitespace-nowrap"
                      animate={{ rotate: isHovered ? 0 : -90, y: isHovered ? 0 : -40, x: isHovered ? 0 : 20 }}
                      style={{ originX: 0, originY: 1 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? "auto" : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-white/50 leading-relaxed overflow-hidden"
                    >
                      {service.desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
