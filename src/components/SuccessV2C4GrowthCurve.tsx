"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SuccessV2C4GrowthCurve() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });

  // Two SVG paths drawn on scroll
  const coldPathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const warmPathLength = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
  const labelOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // Viewbox: 0 0 800 300
  // Cold line: flatline at y=250 from x=0 to x=800
  const coldPath = "M 0 250 C 100 248, 300 245, 500 242 S 700 240, 800 238";
  // Warm line: exponential curve from bottom-left to top-right
  const warmPath = "M 0 250 C 80 245, 160 230, 260 200 S 400 150, 500 100 S 650 40, 800 20";

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 4: Growth Curve
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-xl">
              The shape of the<br /><span className="text-[#FF8500]">advantage.</span>
            </h2>
          </div>
          <p className="text-white/30 text-base leading-relaxed max-w-xs">
            The gap between cold-only traffic and content-first acquisition widens every single month.
          </p>
        </div>

        {/* SVG Chart */}
        <div className="relative w-full">
          <svg
            viewBox="0 0 800 300"
            className="w-full"
            style={{ height: "320px" }}
          >
            {/* Grid lines */}
            {[0, 75, 150, 225, 300].map((y) => (
              <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            ))}

            {/* Cold ads line */}
            <motion.path
              d={coldPath}
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: coldPathLength }}
            />

            {/* Warm content line */}
            <motion.path
              d={warmPath}
              fill="none"
              stroke="#FF8500"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: warmPathLength }}
            />

            {/* Fill area under warm line */}
            <motion.path
              d={`${warmPath} L 800 300 L 0 300 Z`}
              fill="url(#warmGradient)"
              style={{ opacity: useTransform(scrollYProgress, [0.5, 1], [0, 0.08]) }}
            />

            <defs>
              <linearGradient id="warmGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF8500" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Endpoint dots */}
            <motion.circle cx="800" cy="238" r="5" fill="rgba(255,255,255,0.3)"
              style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]) }} />
            <motion.circle cx="800" cy="20" r="7" fill="#FF8500"
              style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }} />
          </svg>

          {/* Labels */}
          <motion.div style={{ opacity: labelOpacity }} className="flex items-center justify-end gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-white/15" />
              <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">Cold ads only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[3px] rounded-full bg-[#FF8500]" />
              <span className="text-[11px] font-mono text-[#FF8500]/60 uppercase tracking-widest">Content + paid system</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
