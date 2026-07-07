"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ApproachV2C8SplitDivergence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0.2, 0.8], [0, -30]);
  const rightX = useTransform(scrollYProgress, [0.2, 0.8], [0, 30]);
  const labelOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const mergeOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  const leftWastedBudget = useTransform(scrollYProgress, [0.2, 0.8], [0, 247000]);
  const rightLeads = useTransform(scrollYProgress, [0.2, 0.8], [0, 847]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] h-[250vh] border-b border-white/5">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 8: Split-Screen Divergence
          </span>
        </div>
      </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden flex">
        {/* Left: Without MiuMedia */}
        <motion.div
          style={{ x: leftX }}
          className="relative flex-1 border-r border-white/5 flex flex-col items-center justify-center text-center px-8 bg-[#070707]"
        >
          <motion.div style={{ opacity: labelOpacity }}>
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/20 mb-8">Without MiuMedia</p>
            <h3 className="text-3xl md:text-4xl font-medium text-white/30 leading-tight mb-12">
              Running ads to<br/>people who do not<br/>know you.
            </h3>
            <div className="space-y-4">
              <div>
                <motion.p
                  className="text-5xl font-black tabular-nums text-red-500/60"
                  style={{}}
                >
                  $247K+
                </motion.p>
                <p className="text-[11px] text-white/20 mt-1 font-mono">Wasted on cold traffic annually</p>
              </div>
              <div>
                <p className="text-5xl font-black tabular-nums text-white/20">1.2%</p>
                <p className="text-[11px] text-white/20 mt-1 font-mono">Average conversion rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: With MiuMedia */}
        <motion.div
          style={{ x: rightX }}
          className="relative flex-1 flex flex-col items-center justify-center text-center px-8 bg-[#060604]"
        >
          <motion.div style={{ opacity: labelOpacity }}>
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#FF8500]/40 mb-8">With MiuMedia</p>
            <h3 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-12">
              Running ads to<br/>people who already<br/>trust you.
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-5xl font-black tabular-nums text-[#FF8500]">847</p>
                <p className="text-[11px] text-white/40 mt-1 font-mono">Qualified inbound leads generated</p>
              </div>
              <div>
                <p className="text-5xl font-black tabular-nums text-white">11.4%</p>
                <p className="text-[11px] text-white/40 mt-1 font-mono">Avg. conversion rate (warm audiences)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Center merge flash */}
        <motion.div
          style={{ opacity: mergeOpacity }}
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
        >
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] font-mono text-[#FF8500]/60 mb-4">The difference</p>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">9.4x ROI</h2>
            <p className="text-white/40 mt-4">The compounding effect of trust-first acquisition.</p>
          </div>
        </motion.div>

        {/* Vertical divider */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/5 -translate-x-1/2 z-20" />
      </div>
    </section>
  );
}
