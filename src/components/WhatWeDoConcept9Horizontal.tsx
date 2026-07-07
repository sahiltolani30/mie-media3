"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhatWeDoConcept9Horizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Translate 3 cards horizontally. 
  // 100vw * 2 = 200vw total movement required.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        <div className="absolute top-16 left-6 md:left-16 z-50">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-4 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 9: Horizontal Hijack
            </span>
          </div>
        </div>

        <motion.div style={{ x }} className="flex w-[300vw] h-[70vh] items-center">
          
          <div className="w-[100vw] h-full px-6 md:px-16 flex items-center justify-center">
            <div className="max-w-3xl w-full">
              <span className="text-8xl md:text-[12rem] font-bold text-white/5 absolute -top-10 -left-10 pointer-events-none">01</span>
              <h3 className="text-5xl md:text-7xl font-medium text-white mb-6">Video.</h3>
              <p className="text-xl md:text-2xl text-white/40 leading-relaxed max-w-xl">
                Short-form video content designed to educate, establish authority, and convert viewers into prospects.
              </p>
            </div>
          </div>

          <div className="w-[100vw] h-full px-6 md:px-16 flex items-center justify-center">
            <div className="max-w-3xl w-full relative">
              <span className="text-8xl md:text-[12rem] font-bold text-white/5 absolute -top-10 -left-10 pointer-events-none">02</span>
              <h3 className="text-5xl md:text-7xl font-medium text-white mb-6">Content.</h3>
              <p className="text-xl md:text-2xl text-white/40 leading-relaxed max-w-xl">
                Research-led content that targets the questions your ideal clients are already asking online.
              </p>
            </div>
          </div>

          <div className="w-[100vw] h-full px-6 md:px-16 flex items-center justify-center">
            <div className="max-w-3xl w-full relative">
              <span className="text-8xl md:text-[12rem] font-bold text-[#FF8500]/5 absolute -top-10 -left-10 pointer-events-none">03</span>
              <h3 className="text-5xl md:text-7xl font-medium text-white mb-6">Ads.</h3>
              <p className="text-xl md:text-2xl text-white/40 leading-relaxed max-w-xl">
                Performance campaigns built around proven creative and audience targeting -- optimised for lead quality.
              </p>
            </div>
          </div>

        </motion.div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-16 left-6 md:left-16 right-6 md:right-16 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#FF8500] origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

      </div>
    </section>
  );
}
