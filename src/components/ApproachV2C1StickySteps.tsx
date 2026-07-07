"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const phases = [
  {
    number: "01",
    label: "The Problem",
    headline: "Cold traffic is expensive and forgettable.",
    body: "Most agencies run paid ads to strangers. Without established trust, even perfectly targeted campaigns attract cold, skeptical leads who do not convert.",
  },
  {
    number: "02",
    label: "The Content Layer",
    headline: "We build your audience before we spend your budget.",
    body: "Video and organic content warm up your market. We create content that positions you as the authority in your space -- so your audience already knows you.",
  },
  {
    number: "03",
    label: "The Trust Layer",
    headline: "Trust converts. Authority scales.",
    body: "When prospects have watched your videos, read your content, and felt your expertise -- they arrive at your ads already sold. The work of persuasion is done.",
  },
  {
    number: "04",
    label: "The Paid Accelerant",
    headline: "Now the ads work the way they were always supposed to.",
    body: "We amplify your warm audience with precision paid campaigns. The result is a compounding engine: organic trust feeds paid performance feeds organic reach.",
  },
];

export default function ApproachV2C1StickySteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Drive phase index from a single scrollYProgress
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(phases.length - 1, Math.floor(v * phases.length));
    setActivePhase(idx);
  });

  const progressBarH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5">
      {/* Label */}
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 1: Full-Screen Sticky Steps
          </span>
        </div>
      </div>

      {/* Scroll container: 4 panels tall */}
      <div ref={containerRef} style={{ height: `${phases.length * 100}vh` }}>
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Left: vertical scroll progress bar */}
          <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-3 h-40">
            <div className="relative w-px h-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full rounded-full"
                style={{ height: progressBarH, background: "#FF8500" }}
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {phases.map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                  style={{ background: i === activePhase ? "#FF8500" : "rgba(255,255,255,0.1)" }}
                />
              ))}
            </div>
          </div>

          {/* Phase content — all rendered, only active one visible */}
          <div className="max-w-4xl mx-auto px-8 w-full relative">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: i === activePhase ? 1 : 0,
                  y: i === activePhase ? 0 : i < activePhase ? -30 : 30,
                  pointerEvents: i === activePhase ? "auto" : "none",
                }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-x-0 px-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-white/30">
                    {phase.label}
                  </span>
                  <div className="flex-1 h-px bg-white/5" />
                  <span className="text-[11px] font-mono text-white/20">
                    {i + 1} / {phases.length}
                  </span>
                </div>

                <div className="relative mb-8">
                  <span
                    className="absolute -top-16 -left-4 text-[180px] font-black leading-none select-none pointer-events-none"
                    style={{ color: "rgba(255,133,0,0.04)" }}
                  >
                    {phase.number}
                  </span>
                  <h2 className="relative text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-2xl">
                    {phase.headline}
                  </h2>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-0.5 min-h-[60px] rounded-full flex-shrink-0 bg-[#FF8500]" />
                  <p className="text-xl text-white/50 leading-relaxed max-w-xl">{phase.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
