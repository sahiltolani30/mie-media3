"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to, prefix = "", suffix = "", duration = 2 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = to / steps;
    const interval = (duration * 1000) / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setValue(to); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, interval);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  const display = to >= 1000 ? value.toLocaleString() : value;

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const metrics = [
  { value: 847, suffix: "", label: "Qualified inbound leads generated", sub: "Across active client accounts" },
  { value: 11, suffix: ".4%", label: "Average conversion rate", sub: "vs 1.2% industry cold average" },
  { value: 2400000, prefix: "$", suffix: "", label: "Combined pipeline created", sub: "Attributed to content-first model" },
  { value: 47, suffix: "%", label: "Average CPM reduction", sub: "When ads target warm audiences" },
  { value: 90, suffix: " days", label: "To first inbound inquiry", sub: "From engagement kickoff" },
  { value: 6, suffix: "x", label: "Average content ROI multiplier", sub: "Organic reach vs paid spend" },
];

export default function SuccessV2C1CountingMetrics() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 1: Live Counting Metrics
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-2xl">
            The numbers speak<br />for <span className="text-[#FF8500]">themselves.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="bg-[#050505] p-10 group hover:bg-white/[0.02] transition-colors duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-black tabular-nums text-white tracking-tight mb-3 font-mono">
                <Counter to={m.value} prefix={m.prefix} suffix={m.suffix} duration={2 + i * 0.2} />
              </div>
              <p className="text-base font-medium text-white mb-1">{m.label}</p>
              <p className="text-[13px] text-white/30">{m.sub}</p>
              <div className="mt-6 w-8 h-px bg-[#FF8500]/30 group-hover:w-16 group-hover:bg-[#FF8500]/70 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
