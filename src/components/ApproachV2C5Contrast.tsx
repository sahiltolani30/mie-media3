"use client";

import { motion } from "framer-motion";

const rows = [
  {
    problem: "Most agencies run ads to strangers with no prior relationship.",
    solution: "We build organic content that warms your audience before a single ad is shown.",
    problemLabel: "The Status Quo",
    solutionLabel: "Our Approach",
  },
  {
    problem: "Cold traffic is expensive. CPMs are rising. Skeptics scroll past.",
    solution: "Warm audiences convert at lower CPM because trust removes friction.",
    problemLabel: "The Cost",
    solutionLabel: "The Advantage",
  },
  {
    problem: "Campaigns stop the moment you stop paying. Zero compounding.",
    solution: "Content builds a permanent asset. It keeps paying dividends for years.",
    problemLabel: "The Trap",
    solutionLabel: "The Unlock",
  },
];

export default function ApproachV2C5Contrast() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 5: Alternating Contrast Rhythm
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Our Approach</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-lg">
              Two paths.<br/><span className="text-[#FF8500]">One clear winner.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-base leading-relaxed">
            The content-first model is not a theory. It is a systematic advantage built into every campaign we run.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-white/5">
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Problem side */}
              <motion.div
                className="py-8 lg:py-12 lg:pr-12 lg:border-r border-white/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/20 block mb-4">{row.problemLabel}</span>
                <p className="text-2xl md:text-3xl font-medium text-white/25 leading-snug">
                  {row.problem}
                </p>
              </motion.div>

              {/* Solution side */}
              <motion.div
                className="py-8 lg:py-12 lg:pl-12"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#FF8500]/50 block mb-4">{row.solutionLabel}</span>
                <p className="text-2xl md:text-3xl font-medium text-white leading-snug">
                  {row.solution}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
