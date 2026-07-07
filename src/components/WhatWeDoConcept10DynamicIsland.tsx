"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhatWeDoConcept10DynamicIsland() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#050505] py-32 px-6 min-h-[800px] flex items-center justify-center border-b border-white/5">
      
      <div className="absolute top-16 left-0 w-full text-center pointer-events-none">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-4">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
            Concept 10: Dynamic Morphing Island
          </span>
        </div>
      </div>

      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            layoutId="dynamic-island-container"
            onClick={() => setIsOpen(true)}
            className="bg-black border border-white/10 rounded-full px-8 py-4 cursor-pointer flex items-center gap-4 hover:border-white/20 transition-colors shadow-[0_0_30px_rgba(255,133,0,0.15)] group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div layoutId="island-icon" className="w-2 h-2 rounded-full bg-[#FF8500] animate-pulse" />
            <motion.span layoutId="island-text" className="text-white font-medium">Explore Our System</motion.span>
            <motion.div layoutId="island-arrow" className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-white/50">→</motion.div>
          </motion.div>
        ) : (
          <motion.div
            layoutId="dynamic-island-container"
            className="w-full max-w-6xl bg-black border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <motion.button 
              layoutId="island-arrow"
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors"
            >
              ✕
            </motion.button>
            
            <div className="flex items-center gap-3 mb-12">
              <motion.div layoutId="island-icon" className="w-3 h-3 rounded-full bg-[#FF8500]" />
              <motion.span layoutId="island-text" className="text-2xl font-medium text-white">The System Pipeline</motion.span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8"
              >
                <div className="text-4xl font-light text-white/10 mb-4">01</div>
                <h3 className="text-xl font-medium text-white mb-3">Video Production</h3>
                <p className="text-white/50 text-sm leading-relaxed">Short-form video content designed to educate, establish authority, and convert viewers into prospects.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8"
              >
                <div className="text-4xl font-light text-white/10 mb-4">02</div>
                <h3 className="text-xl font-medium text-white mb-3">Content Strategy</h3>
                <p className="text-white/50 text-sm leading-relaxed">Research-led content that targets the questions your ideal clients are already asking online.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8"
              >
                <div className="text-4xl font-light text-[#FF8500]/20 mb-4">03</div>
                <h3 className="text-xl font-medium text-white mb-3">Meta Ads</h3>
                <p className="text-white/50 text-sm leading-relaxed">Performance campaigns built around proven creative and audience targeting -- optimised for lead quality.</p>
              </motion.div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
