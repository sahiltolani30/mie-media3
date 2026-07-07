"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhatWeDoConcept7TextMask() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 50]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] h-[200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        
        {/* Background Visual (would be a video in production) */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF8500]/20 via-black to-black opacity-50" />
        
        {/* Text Mask Layer */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative z-10 flex flex-col items-center justify-center text-center pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 7: Cinematic Text Mask
            </span>
          </div>
          <h2 
            className="text-[15vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
          >
            SYSTEM
          </h2>
        </motion.div>

        {/* Revealed Content */}
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
        >
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l border-white/10 hover:border-[#FF8500]/50 transition-colors">
              <h3 className="text-2xl font-medium text-white mb-4">Video Production</h3>
              <p className="text-white/50">Short-form video content designed to educate and convert viewers.</p>
            </div>
            <div className="p-8 border-l border-white/10 hover:border-[#FF8500]/50 transition-colors">
              <h3 className="text-2xl font-medium text-white mb-4">Content Strategy</h3>
              <p className="text-white/50">Research-led content that targets the questions your clients ask.</p>
            </div>
            <div className="p-8 border-l border-white/10 hover:border-[#FF8500]/50 transition-colors">
              <h3 className="text-2xl font-medium text-white mb-4">Meta Ads</h3>
              <p className="text-white/50">Performance campaigns optimised for lead quality and scale.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
