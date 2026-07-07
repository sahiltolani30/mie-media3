"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const chapters = [
  {
    month: "Month 1",
    headline: "Content infrastructure is live.",
    body: "Strategy defined. Brand positioning locked. First 4 pieces of content produced and published. Your audience has started forming.",
    stat: "4 assets live",
    statLabel: "by end of month one",
  },
  {
    month: "Month 2",
    headline: "Your organic audience is growing.",
    body: "Content is distributing. Organic reach is compounding. Social proof is building. You are becoming the recognizable authority in your niche.",
    stat: "3.2K",
    statLabel: "average new monthly reach",
  },
  {
    month: "Month 3",
    headline: "First warm inbound leads arrive.",
    body: "Prospects who have already watched your content are booking calls. They are warm, qualified, and require a fraction of the usual persuasion effort.",
    stat: "6 inbound demos",
    statLabel: "per week by week 10",
  },
  {
    month: "Month 6",
    headline: "Paid ads are amplifying a proven system.",
    body: "We layer precision-targeted paid campaigns onto your warm audience. CPM has dropped. Conversion rates have climbed. Revenue is compounding.",
    stat: "-47% CPM",
    statLabel: "vs cold traffic baseline",
  },
];

export default function SuccessV2C3StickyChapters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveChapter(Math.min(chapters.length - 1, Math.floor(v * chapters.length)));
  });

  const progressH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 3: Sticky Outcome Chapters
          </span>
        </div>
      </div>

      <div ref={containerRef} style={{ height: `${chapters.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: progress + chapter list */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-4 self-start">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
              </div>
              {chapters.map((ch, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-500"
                    style={{ background: i === activeChapter ? "#FF8500" : "rgba(255,255,255,0.1)" }}
                  />
                  <span
                    className="text-sm font-mono transition-colors duration-500"
                    style={{ color: i === activeChapter ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)" }}
                  >
                    {ch.month}
                  </span>
                </div>
              ))}

              {/* Vertical progress */}
              <div className="mt-4 relative w-px h-32 bg-white/5 ml-[2px]">
                <motion.div
                  className="absolute top-0 left-0 w-full rounded-full bg-[#FF8500]"
                  style={{ height: progressH }}
                />
              </div>
            </div>

            {/* Right: active chapter content */}
            <div className="lg:col-span-9 relative min-h-[320px] flex items-center">
              {chapters.map((ch, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: i === activeChapter ? 1 : 0,
                    y: i === activeChapter ? 0 : i < activeChapter ? -24 : 24,
                    pointerEvents: i === activeChapter ? "auto" : "none",
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#FF8500]/60 mb-4">{ch.month}</p>
                  <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-6 max-w-2xl">
                    {ch.headline}
                  </h2>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-0.5 min-h-[60px] bg-[#FF8500]/30 flex-shrink-0 mt-1" />
                    <p className="text-xl text-white/50 leading-relaxed max-w-xl">{ch.body}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-[#FF8500] tabular-nums font-mono">{ch.stat}</span>
                    <span className="text-sm text-white/30">{ch.statLabel}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
