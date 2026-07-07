"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const panels = [
  {
    label: "The Consultant",
    pain: "Great expertise. Zero visibility.",
    promise: "We make your thinking the most visible thing in your market.",
    stat: "9.4%",
    statLabel: "warm CVR",
    bg: "from-[#0d0800] to-[#050505]",
  },
  {
    label: "The Agency",
    pain: "You market everyone else. Nobody markets you.",
    promise: "We build the acquisition engine you have always been too busy to build.",
    stat: "8.1%",
    statLabel: "lead-to-call",
    bg: "from-[#080d08] to-[#050505]",
  },
  {
    label: "The Architect",
    pain: "World-class work. Invisible brand.",
    promise: "We distribute your portfolio to the clients worthy of your studio.",
    stat: "-43%",
    statLabel: "cost per acq.",
    bg: "from-[#08080d] to-[#050505]",
  },
  {
    label: "The Coach",
    pain: "You are the product. Your online presence is not.",
    promise: "We build the content system that converts while you do the work you love.",
    stat: "3x",
    statLabel: "program revenue",
    bg: "from-[#0d0808] to-[#050505]",
  },
  {
    label: "The Professional",
    pain: "Referrals are unpredictable. You cannot scale on luck.",
    promise: "We systematise the trust that made your referrals so effective.",
    stat: "$480K",
    statLabel: "new ARR",
    bg: "from-[#0a0a0a] to-[#050505]",
  },
];

export default function ICPV2C10HorizontalPan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActivePanel(Math.min(panels.length - 1, Math.floor(v * panels.length)));
  });

  // x offset: each panel is 100vw wide
  const xOffset = -activePanel * 100;

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 10: Horizontal Persona Pan
          </span>
        </div>
      </div>

      <div ref={containerRef} style={{ height: `${panels.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Progress dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {panels.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === activePanel ? "24px" : "6px",
                  height: "6px",
                  background: i === activePanel ? "#FF8500" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>

          {/* ICP badge */}
          <div className="absolute top-20 left-8 z-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
            </div>
          </div>

          {/* Panel track */}
          <motion.div
            className="flex h-full"
            animate={{ x: `${xOffset}vw` }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            style={{ width: `${panels.length * 100}vw` }}
          >
            {panels.map((panel, i) => (
              <div
                key={i}
                className={`w-screen h-full bg-gradient-to-br ${panel.bg} flex items-center px-12 md:px-24 flex-shrink-0`}
              >
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Left */}
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF8500]/60 mb-6">
                      {String(i + 1).padStart(2, "0")} / {String(panels.length).padStart(2, "0")}
                    </p>
                    <h2 className="text-7xl md:text-[100px] font-black tracking-tight text-white leading-none mb-8">
                      {panel.label}
                    </h2>
                    <p className="text-2xl text-white/40 italic leading-snug">{panel.pain}</p>
                  </div>

                  {/* Right */}
                  <div className="lg:pl-12 lg:border-l border-white/5">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-0.5 h-16 bg-[#FF8500]/40" />
                      <p className="text-xl font-medium text-white/80 leading-snug">{panel.promise}</p>
                    </div>
                    <div>
                      <span className="text-6xl font-black text-[#FF8500] font-mono">{panel.stat}</span>
                      <p className="text-sm text-white/30 mt-2 font-mono uppercase tracking-widest">{panel.statLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
