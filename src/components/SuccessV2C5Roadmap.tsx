"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    range: "Days 1-14",
    label: "Foundation",
    items: ["Strategy session & positioning", "Content calendar built", "First scripts written & approved"],
    color: "#FF8500",
  },
  {
    range: "Days 15-45",
    label: "Production",
    items: ["Video shoots scheduled & complete", "4-8 pieces published", "Organic distribution live"],
    color: "#FF8500",
  },
  {
    range: "Days 46-90",
    label: "Momentum",
    items: ["Organic audience forming", "First inbound inquiries arriving", "Paid ad foundation built"],
    color: "#FF8500",
  },
  {
    range: "Day 90+",
    label: "Compounding",
    items: ["Paid campaigns amplifying warm audience", "CPM dropping month-over-month", "Predictable revenue pipeline"],
    color: "#FF8500",
  },
];

export default function SuccessV2C5Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 40%"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 5: 90-Day Roadmap
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-2xl">
            Exactly what happens<br /><span className="text-[#FF8500]">after you sign.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-4 left-0 w-full h-px bg-white/5">
            <motion.div
              className="h-full rounded-full bg-[#FF8500]"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Node dot */}
                <motion.div
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-8 transition-all duration-500 group-hover:border-[#FF8500] group-hover:shadow-[0_0_16px_rgba(255,133,0,0.3)]"
                  style={{ borderColor: "rgba(255,133,0,0.3)", background: "#050505" }}
                  whileInView={{ borderColor: "#FF8500" }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF8500]" />
                </motion.div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-white/20 block mb-2">{phase.range}</span>
                <h3 className="text-2xl font-medium text-white mb-4">{phase.label}</h3>

                <ul className="flex flex-col gap-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#FF8500]/40 flex-shrink-0 mt-2" />
                      <span className="text-[13px] text-white/40 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
