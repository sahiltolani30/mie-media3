"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const checks = [
  "You offer a premium service but you hate how you show up online.",
  "You have tried paid ads, but the leads arrive cold and require too much convincing.",
  "You want to be seen as the authority in your space -- not just another option people compare.",
  "You know content works. You just do not have the time or the system to execute it consistently.",
  "Your best clients came from referrals. You want a system that replicates that at scale.",
  "You are tired of paying for attention. You are ready to earn it.",
];

export default function ICPV2C1CheckboxMirror() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 1: Checkbox Mirror Test
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-4 max-w-2xl">
          You are exactly who<br />we built this <span className="text-[#FF8500]">for.</span>
        </h2>
        <p className="text-white/30 text-base mb-16 max-w-lg">
          Read each of the following. If you recognise yourself, we should talk.
        </p>

        <div className="flex flex-col gap-6">
          {checks.map((check, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              viewport={{ once: true, margin: "-40px" }}
            >
              {/* Checkbox */}
              <motion.div
                className="flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center mt-1"
                initial={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "transparent" }}
                whileInView={{ borderColor: "#FF8500", backgroundColor: "rgba(255,133,0,0.1)" }}
                transition={{ delay: i * 0.12 + 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.svg
                  width="12" height="10" viewBox="0 0 12 10" fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: i * 0.12 + 0.5, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M1 5L4.5 8.5L11 1.5"
                    stroke="#FF8500"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>

              {/* Text */}
              <p className="text-xl md:text-2xl font-medium text-white/70 leading-snug group-hover:text-white transition-colors duration-300">
                {check}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA nudge */}
        <motion.div
          className="mt-16 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF8500]/60">If you nodded at 3 or more -- we should talk.</span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
