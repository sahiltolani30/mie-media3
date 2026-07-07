"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhatWeDoConcept6StickyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    {
      title: "Video Production",
      desc: "Short-form video content designed to educate, establish authority, and convert viewers into prospects.",
      color: "bg-[#0a0a0a]",
      zIndex: 10,
    },
    {
      title: "Content Strategy",
      desc: "Research-led content that targets the questions your ideal clients are already asking online.",
      color: "bg-[#0f0f0f]",
      zIndex: 20,
    },
    {
      title: "Meta Ads",
      desc: "Performance campaigns built around proven creative and audience targeting -- optimised for lead quality.",
      color: "bg-[#141414]",
      zIndex: 30,
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] pb-32 pt-16 px-6 h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-16 flex flex-col items-center text-center z-50 w-full px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 6: Sticky Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Building the Pipeline
          </h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[60vh] mt-24">
          {services.map((service, i) => {
            // Card 1 starts at scale 1, scales down to 0.9.
            // Card 2 starts below, comes up.
            const targetScale = 1 - ((services.length - i) * 0.05);
            const range = [i * 0.33, (i + 1) * 0.33];
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, range, [1, targetScale]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, range, [i === 0 ? 0 : 800, i * 40]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [range[0] - 0.1, range[0]], [0, 1]);

            return (
              <motion.div
                key={i}
                style={{
                  scale,
                  y,
                  opacity: i === 0 ? 1 : opacity,
                  zIndex: service.zIndex,
                }}
                className={`absolute top-0 left-0 w-full h-[400px] ${service.color} border border-white/10 rounded-[2rem] p-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between origin-top`}
              >
                <div>
                  <span className="text-6xl font-light text-white/5 font-mono absolute top-8 right-8">
                    0{i + 1}
                  </span>
                  <h3 className="text-3xl font-medium text-white mb-4">{service.title}</h3>
                  <p className="text-xl text-white/40 max-w-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     className="h-full bg-[#FF8500]"
                     style={{
                        scaleX: useTransform(scrollYProgress, range, [0, 1]),
                        transformOrigin: "left"
                     }}
                   />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
