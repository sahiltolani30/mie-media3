"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "01 Position: Clarify your message",
      desc: "We identify your ideal client profile, define your positioning, and develop content angles that speak directly to high-value prospects.",
    },
    {
      title: "02 Produce: Create content that builds authority",
      desc: "We produce videos, write scripts, and develop ad creative assets designed to capture attention and establish expertise in your market.",
    },
    {
      title: "03 Scale: Deploy and optimise Meta ad campaigns",
      desc: "We launch performance-focused Meta campaigns and optimise continuously based on lead quality and cost-per-acquisition — not surface metrics.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-[#050505] py-32 px-6">
      <div className="mx-auto max-w-4xl" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mb-24 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Our 3-step growth framework for service businesses
          </h2>
        </motion.div>

        <div className="relative">
          {/* Background Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          {/* Animated Glowing Progress Line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#FF8500] to-[#FE7D13] md:-translate-x-1/2 origin-top drop-shadow-[0_0_10px_rgba(255,133,0,0.8)]"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="flex flex-col gap-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between w-full">
                  
                  {/* Left Side (Empty on mobile, content on desktop if even) */}
                  <div className={`hidden md:block w-[45%] ${!isEven ? 'text-right pr-12' : 'opacity-0'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <h3 className="text-2xl font-medium text-white mb-3">{step.title}</h3>
                        <p className="text-white/50 leading-relaxed">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-6 md:static md:w-[10%] flex justify-center -translate-x-1/2 md:translate-x-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                      className="w-4 h-4 rounded-full bg-[#050505] border-2 border-[#FF8500] shadow-[0_0_15px_rgba(255,133,0,0.5)] z-20"
                    />
                  </div>

                  {/* Right Side (Content on mobile, content on desktop if odd) */}
                  <div className={`w-full pl-16 md:pl-0 md:w-[45%] ${isEven ? 'md:text-left md:pl-12' : 'md:opacity-0 hidden md:block'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <h3 className="text-2xl font-medium text-white mb-3">{step.title}</h3>
                        <p className="text-white/50 leading-relaxed">{step.desc}</p>
                      </motion.div>
                    )}
                    
                    {/* Mobile Only Content (Overrides the hidden alternating logic on small screens) */}
                    <div className="block md:hidden">
                       <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                      </motion.div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
