"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const results = [
  {
    category: "B2B SaaS",
    before: { label: "Cold ad traffic", cvr: "0.9% CVR", cpm: "$48 CPM" },
    after: { label: "Warm inbound leads", cvr: "9.3% CVR", cpm: "$24 CPM" },
    outcome: "4x pipeline growth in 90 days",
    delta: "+9x",
  },
  {
    category: "Consulting Firm",
    before: { label: "Referral-only pipeline", cvr: "Manual outreach", cpm: "No paid system" },
    after: { label: "Organic inbound daily", cvr: "8.1% lead-to-call", cpm: "$19 CPM on retargeting" },
    outcome: "Consistent 6 inbound demos per week",
    delta: "+340%",
  },
  {
    category: "Agency",
    before: { label: "LinkedIn cold DMs", cvr: "1.1% reply rate", cpm: "High churn" },
    after: { label: "Video authority + ads", cvr: "11.7% CVR", cpm: "$22 CPM" },
    outcome: "Fully booked 6 months out",
    delta: "10x",
  },
  {
    category: "Professional Services",
    before: { label: "Google Ads only", cvr: "2.3% CVR", cpm: "$61 CPM" },
    after: { label: "Content warm-up + retargeting", cvr: "12.4% CVR", cpm: "$27 CPM" },
    outcome: "$480K new ARR in first 6 months",
    delta: "-56% CPA",
  },
  {
    category: "Coaching / Education",
    before: { label: "Webinar cold traffic", cvr: "3.1% show rate", cpm: "$52 CPM" },
    after: { label: "Warm video audience + ads", cvr: "28% show rate", cpm: "$18 CPM" },
    outcome: "3x program revenue, same budget",
    delta: "+8.1x ROAS",
  },
];

export default function SuccessV2C2HorizontalScroll() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 overflow-hidden">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 2: Client Results Gallery
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-xl">
            Results across every<br /><span className="text-[#FF8500]">vertical we serve.</span>
          </h2>
          <p className="text-white/30 text-sm font-mono uppercase tracking-widest">Scroll to explore</p>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div ref={trackRef} className="overflow-x-auto scrollbar-hide pb-8 cursor-grab active:cursor-grabbing">
        <div className="flex gap-4 px-6 w-max">
          {results.map((r, i) => (
            <motion.div
              key={i}
              className="w-[380px] flex-shrink-0 border border-white/8 bg-white/[0.02] p-8 group hover:border-[#FF8500]/20 transition-all duration-500"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              viewport={{ once: true }}
            >
              {/* Category + delta */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/30">{r.category}</span>
                <span className="text-2xl font-black text-[#FF8500] tabular-nums">{r.delta}</span>
              </div>

              {/* Before */}
              <div className="mb-4 p-4 border border-white/5 bg-white/[0.01]">
                <p className="text-[10px] uppercase tracking-widest font-mono text-white/20 mb-2">Before</p>
                <p className="text-sm text-white/40">{r.before.label}</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-[11px] font-mono text-white/20">{r.before.cvr}</span>
                  <span className="text-[11px] font-mono text-white/20">{r.before.cpm}</span>
                </div>
              </div>

              {/* After */}
              <div className="mb-6 p-4 border border-[#FF8500]/15 bg-[#FF8500]/5">
                <p className="text-[10px] uppercase tracking-widest font-mono text-[#FF8500]/50 mb-2">After</p>
                <p className="text-sm text-white/80">{r.after.label}</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-[11px] font-mono text-[#FF8500]/60">{r.after.cvr}</span>
                  <span className="text-[11px] font-mono text-[#FF8500]/60">{r.after.cpm}</span>
                </div>
              </div>

              {/* Outcome */}
              <p className="text-base font-medium text-white leading-snug">{r.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
