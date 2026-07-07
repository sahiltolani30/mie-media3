"use client";

import { motion } from "framer-motion";

export default function SuccessV2C10PullQuote() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6 overflow-hidden">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 10: Pull Quote
          </span>
        </div>
      </div>

      {/* Background radial */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#FF8500]/[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl mt-12 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-20">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
        </div>

        {/* Opening quote mark */}
        <motion.div
          className="text-[120px] font-black text-[#FF8500]/10 leading-none mb-2 select-none"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          "
        </motion.div>

        {/* The quote */}
        <motion.h2
          className="text-3xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
        >
          We went from{" "}
          <span className="text-white/30">$12K/month on cold ads with 1.3% CVR</span>
          {" "}to{" "}
          <span className="text-[#FF8500]">$8K/month with 9.7% CVR</span>
          {" "}--- in 90 days.
        </motion.h2>

        {/* Attribution */}
        <motion.div
          className="flex items-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-px bg-[#FF8500]/30" />
          <div>
            <p className="text-base font-medium text-white">Head of Growth</p>
            <p className="text-[13px] text-white/30">Series B SaaS Company, 120 employees</p>
          </div>
        </motion.div>

        {/* Supporting data trio */}
        <motion.div
          className="grid grid-cols-3 gap-px bg-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { value: "-33%", label: "Budget reduction" },
            { value: "+7.4x", label: "Conversion rate lift" },
            { value: "90 days", label: "Time to result" },
          ].map((d, i) => (
            <div key={i} className="bg-[#050505] p-8 text-center">
              <p className="text-3xl font-black text-[#FF8500] tabular-nums font-mono mb-1">{d.value}</p>
              <p className="text-[11px] text-white/30 uppercase tracking-widest font-mono">{d.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
