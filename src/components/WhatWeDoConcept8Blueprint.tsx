"use client";

import { motion } from "framer-motion";

export default function WhatWeDoConcept8Blueprint() {
  return (
    <section className="relative w-full bg-[#020202] py-32 px-6 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 8: Schematic Blueprint
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mono tracking-tight text-white">
            ENGINE_ARCHITECTURE
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto h-[600px] flex flex-col justify-between">
          
          {/* Animated SVG Path connecting the nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
            <motion.path
              d="M 50 50 L 50 250 L 400 250 L 400 500"
              fill="transparent"
              stroke="#FF8500"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Glowing dot following path */}
            <motion.circle
              r="4"
              fill="#FF8500"
              initial={{ offsetDistance: "0%" }}
              whileInView={{ offsetDistance: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ offsetPath: 'path("M 50 50 L 50 250 L 400 250 L 400 500")' } as any}
            />
          </svg>

          {/* Node 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-80 bg-black border border-white/20 p-6 font-mono relative z-10 ml-0"
          >
            <div className="w-2 h-2 bg-white mb-4" />
            <h3 className="text-lg text-white mb-2">01 // VIDEO_PROD</h3>
            <p className="text-xs text-white/40 uppercase">Educational short-form content. Authority establishment module.</p>
          </motion.div>

          {/* Node 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="w-80 bg-black border border-white/20 p-6 font-mono relative z-10 ml-[350px] -mt-20"
          >
            <div className="w-2 h-2 bg-white mb-4" />
            <h3 className="text-lg text-white mb-2">02 // CONTENT_STRAT</h3>
            <p className="text-xs text-white/40 uppercase">Research-led scripting. Query targeting engine.</p>
          </motion.div>

          {/* Node 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="w-80 bg-black border border-[#FF8500]/50 p-6 font-mono relative z-10 ml-[350px]"
          >
            <div className="w-2 h-2 bg-[#FF8500] animate-pulse mb-4" />
            <h3 className="text-lg text-[#FF8500] mb-2">03 // META_ADS</h3>
            <p className="text-xs text-[#FF8500]/60 uppercase">Performance campaigns. Qualified lead generation output.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
