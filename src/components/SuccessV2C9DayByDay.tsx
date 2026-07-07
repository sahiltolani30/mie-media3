"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const days = [
  { day: "Day 1", event: "Strategy session. Positioning defined. ICP locked." },
  { day: "Day 7", event: "First content scripts written and approved." },
  { day: "Day 14", event: "First video published. Distribution begins." },
  { day: "Day 21", event: "Organic reach has started. Social proof forming." },
  { day: "Day 30", event: "Second content batch live. Audience growing." },
  { day: "Day 45", event: "First organic inbound inquiry arrives." },
  { day: "Day 60", event: "Paid ad foundation built on top of warm audience." },
  { day: "Day 75", event: "CPM is dropping. Conversion rates are climbing." },
  { day: "Day 90", event: "System is live and compounding. ROI is measurable." },
  { day: "Day 180", event: "Pipeline is predictable. You are the authority." },
];

export default function SuccessV2C9DayByDay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveDay(Math.min(days.length - 1, Math.floor(v * days.length)));
  });

  const progressH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 9: Day-by-Day Reveal
          </span>
        </div>
      </div>

      <div ref={containerRef} style={{ height: `${days.length * 80}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Anchor */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
                Here is what happens<br />after you sign.
              </h2>
              <p className="text-white/40 text-base leading-relaxed max-w-sm">
                Scroll to move through the journey. No vague promises. Just the specific sequence of events that leads to a compounding growth engine.
              </p>

              {/* Progress bar */}
              <div className="mt-12 flex items-center gap-3">
                <div className="relative w-px h-24 bg-white/5">
                  <motion.div className="absolute top-0 left-0 w-full bg-[#FF8500] rounded-full" style={{ height: progressH }} />
                </div>
                <span className="text-[11px] font-mono text-white/20 uppercase tracking-widest">
                  {days[activeDay]?.day}
                </span>
              </div>
            </div>

            {/* Right: Day events */}
            <div className="relative min-h-[300px] flex items-center">
              {days.map((d, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: i === activeDay ? 1 : 0,
                    y: i === activeDay ? 0 : i < activeDay ? -20 : 20,
                    pointerEvents: i === activeDay ? "auto" : "none",
                  }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#FF8500]/60 mb-3">{d.day}</p>
                  <p className="text-3xl md:text-4xl font-medium text-white leading-snug max-w-lg">
                    {d.event}
                  </p>
                  {/* Progress dots */}
                  <div className="flex gap-1.5 mt-8">
                    {days.map((_, j) => (
                      <div
                        key={j}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: j === i ? "20px" : "6px",
                          height: "6px",
                          background: j <= i ? "#FF8500" : "rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
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
