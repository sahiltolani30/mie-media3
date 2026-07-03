"use client";

import { motion } from "framer-motion";

const stages = [
  { label: "Social Media Reach", value: 100, desc: "Potential audience sees your content", isTop: true, leak: false },
  { label: "No Content Strategy", value: 60, desc: "40% lost — no hooks, no consistency", isTop: false, leak: true, leakAmt: 40 },
  { label: "Weak Call-to-Action", value: 30, desc: "30% lost — no clear next step for viewers", isTop: false, leak: true, leakAmt: 30 },
  { label: "No Follow-up System", value: 12, desc: "18% lost — enquiries fall through the cracks", isTop: false, leak: true, leakAmt: 18 },
  { label: "Booked Clients", value: 12, desc: "Only 12% of potential actually converts", isTop: false, leak: false },
];

export default function ProblemV2BrokenFunnel() {
  return (
    <section className="relative w-full bg-[#030303] py-32 px-6 overflow-hidden">
      <div className="w-full py-3 bg-[#FF8500] text-black text-center font-bold text-sm uppercase tracking-widest absolute top-0 left-0 z-50">
        Problem Concept D: The Broken Funnel
      </div>

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.25em] text-xs mb-4">Revenue Audit</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Here&rsquo;s where your leads<br />
            <span className="text-red-400">are leaking.</span>
          </h2>
        </motion.div>

        {/* Funnel Visualization */}
        <div className="flex flex-col items-center gap-0">
          {stages.map((stage, i) => {
            const widthPct = 30 + (stage.value / 100) * 70;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0.4 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col items-center"
              >
                {/* Funnel segment */}
                <div
                  className="relative flex items-center justify-center py-5 transition-all duration-700 rounded-sm"
                  style={{
                    width: `${widthPct}%`,
                    background: i === stages.length - 1
                      ? "linear-gradient(135deg, rgba(255,133,0,0.15), rgba(255,133,0,0.05))"
                      : stage.leak
                      ? "linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.03))"
                      : "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    borderTop: i === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    borderLeft: `1px solid ${stage.leak ? "rgba(239,68,68,0.2)" : i === stages.length - 1 ? "rgba(255,133,0,0.3)" : "rgba(255,255,255,0.08)"}`,
                    borderRight: `1px solid ${stage.leak ? "rgba(239,68,68,0.2)" : i === stages.length - 1 ? "rgba(255,133,0,0.3)" : "rgba(255,255,255,0.08)"}`,
                    borderBottom: "none",
                  }}
                >
                  <div className="text-center px-4">
                    <p className={`font-semibold text-sm md:text-base ${stage.leak ? "text-red-300/80" : i === stages.length - 1 ? "text-[#FF8500]" : "text-white/70"}`}>
                      {stage.label}
                    </p>
                  </div>

                  {/* Drip leak indicators */}
                  {stage.leak && (
                    <>
                      <LeakDrip side="left" amount={stage.leakAmt ?? 0} delay={i * 0.15 + 0.5} />
                      <LeakDrip side="right" amount={stage.leakAmt ?? 0} delay={i * 0.15 + 0.7} />
                    </>
                  )}
                </div>

                {/* Description row (between stages) */}
                {stage.leak && (
                  <div className="flex items-center justify-center gap-3 py-2 w-full">
                    <div className="h-px flex-1 bg-red-500/10" />
                    <p className="text-red-400/40 text-xs font-mono shrink-0">{stage.desc}</p>
                    <div className="h-px flex-1 bg-red-500/10" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-white/30 text-base max-w-lg mx-auto leading-relaxed">
            Most service businesses convert{" "}
            <span className="text-[#FF8500] font-semibold">less than 12%</span>{" "}
            of their potential audience into booked clients. The other 88% is pure leak.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function LeakDrip({ side, amount, delay }: { side: "left" | "right"; amount: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute top-0 flex flex-col items-center gap-1 ${side === "left" ? "-left-16" : "-right-16"}`}
    >
      <span className="text-red-400/60 text-xs font-mono font-bold">-{amount}%</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: delay * 0.5 }}
        className="w-1 h-6 rounded-full"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(239,68,68,0.6))" }}
      />
    </motion.div>
  );
}
