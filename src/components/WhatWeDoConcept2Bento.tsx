"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhatWeDoConcept2Bento() {
  const [text, setText] = useState("");
  const fullText = "const script = generateHighConvertingScript();";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i = (i + 1) % (fullText.length + 10); // +10 for pause at the end
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#050505] py-32 px-6 border-b border-white/5">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 2: Bento 2.0 Motion
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 max-w-2xl">
            A complete digital marketing system under one roof.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
          {/* Video Card */}
          <motion.div 
            className="md:col-span-7 bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-white mb-2">Video production</h3>
              <p className="text-white/50">Short-form video content designed to educate and convert.</p>
            </div>
            
            {/* Perpetual Marquee Animation */}
            <div className="relative z-10 w-full h-24 overflow-hidden rounded-xl border border-white/5 mt-auto flex items-center bg-black/50">
               <motion.div 
                 className="flex gap-4 px-4"
                 animate={{ x: ["0%", "-50%"] }}
                 transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
               >
                 {[...Array(6)].map((_, i) => (
                   <div key={i} className="w-32 h-16 bg-white/5 rounded-lg flex-shrink-0 flex items-center justify-center border border-white/10">
                     <span className="text-white/20 text-xs">Frame {i+1}</span>
                   </div>
                 ))}
               </motion.div>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div 
            className="md:col-span-5 bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-white mb-2">Content strategy</h3>
              <p className="text-white/50">Research-led content targeting ideal clients.</p>
            </div>
            
            {/* Typewriter Animation */}
            <div className="relative z-10 mt-auto bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-sm text-[#FF8500] h-24 flex items-center">
              <span>{text}<span className="animate-pulse">_</span></span>
            </div>
          </motion.div>

          {/* Ads Card */}
          <motion.div 
            className="md:col-span-12 bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#FF8500]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h3 className="text-2xl font-medium text-white mb-2">Meta ads management</h3>
              <p className="text-white/50">Performance campaigns built around proven creative and audience targeting -- optimised for lead quality.</p>
            </div>

            {/* Pulsing Graph Animation */}
            <div className="relative z-10 md:w-1/2 h-full min-h-[120px] flex items-end justify-center gap-2">
               {[40, 60, 30, 80, 50, 100, 70].map((height, i) => (
                 <motion.div
                   key={i}
                   className="w-8 bg-gradient-to-t from-[#FF8500]/20 to-[#FF8500] rounded-t-sm"
                   initial={{ height: "10%" }}
                   animate={{ height: [`10%`, `${height}%`, "10%"] }}
                   transition={{ 
                     repeat: Infinity, 
                     duration: 3, 
                     delay: i * 0.2,
                     ease: "easeInOut"
                   }}
                 />
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
