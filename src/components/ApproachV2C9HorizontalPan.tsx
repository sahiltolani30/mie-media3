"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    label: "01 / Problem",
    headline: "Cold traffic is a dead end.",
    body: "Agencies run ads to audiences with no prior context. The result: high CPMs, low trust, even lower conversion. The model is fundamentally broken.",
    bg: "#050505",
    color: "white",
  },
  {
    label: "02 / Content Layer",
    headline: "We warm your audience before we spend.",
    body: "Video and organic content create a self-selecting audience of people already predisposed to buy from you. This is the unfair advantage most agencies do not offer.",
    bg: "#080604",
    color: "#FF8500",
  },
  {
    label: "03 / Trust Layer",
    headline: "Trust is the highest-converting asset.",
    body: "When warm audiences see your ads, the persuasion work is already done. They are not skeptical strangers. They are believers who just need a reason to act.",
    bg: "#060608",
    color: "white",
  },
  {
    label: "04 / Scale",
    headline: "Paid ads amplify what is already working.",
    body: "We layer precision-targeted paid campaigns onto your warm audience infrastructure. The result is a self-compounding revenue engine that outperforms any standalone ad strategy.",
    bg: "#050505",
    color: "#FF8500",
  },
];

export default function ApproachV2C9HorizontalPan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(chapters.length - 1) * 100}%`]);

  return (
    <section ref={containerRef} className="relative w-full border-b border-white/5" style={{ height: `${chapters.length * 100}vh` }}>
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 9: Horizontal Chapter Pan
          </span>
        </div>
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full"
          transition={{ type: "tween", ease: "linear" }}
        >
          {chapters.map((ch, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-screen h-screen flex items-center justify-center px-16"
              style={{ background: ch.bg }}
            >
              {/* Chapter label */}
              <div className="absolute top-20 left-16">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/20">{ch.label}</span>
              </div>

              {/* Giant faint number */}
              <span
                className="absolute right-16 bottom-16 text-[250px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.025)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="max-w-2xl relative z-10">
                <h2
                  className="text-5xl md:text-7xl font-medium tracking-tight leading-tight mb-8"
                  style={{ color: ch.color }}
                >
                  {ch.headline}
                </h2>
                <p className="text-xl text-white/50 leading-relaxed">{ch.body}</p>
              </div>

              {/* Progress dots */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {chapters.map((_, j) => (
                  <div
                    key={j}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{ background: j === i ? "#FF8500" : "rgba(255,255,255,0.1)" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
