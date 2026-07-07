"use client";

import { motion } from "framer-motion";

const notFor = [
  "Businesses looking for quick wins with no commitment to strategy.",
  "Companies who need results before the first piece of content is live.",
  "Founders who are not willing to show up as the face of their brand.",
  "Agencies that want to hide behind vanity metrics and monthly reports.",
];

const forUs = [
  "Expertise-led businesses building a lasting market position.",
  "Founders who understand that trust is the highest-converting asset.",
  "Leaders willing to invest in content that keeps working for years.",
  "Service businesses ready to replace referral dependency with a scalable system.",
];

export default function ICPV2C3TwoColumn() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 3: Rejection / Acceptance
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-20 max-w-2xl">
          We do not work<br />with <span className="text-white/20">everyone.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
          {/* Not For */}
          <motion.div
            className="bg-[#050505] p-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-8">We are not for</p>
            <div className="flex flex-col gap-5">
              {notFor.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-px bg-white/15 flex-shrink-0 mt-3" />
                  <p className="text-lg text-white/25 leading-snug">{line}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* For Us */}
          <motion.div
            className="bg-[#050505] p-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF8500]/60 mb-8">We are for</p>
            <div className="flex flex-col gap-5">
              {forUs.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-px bg-[#FF8500]/40 flex-shrink-0 mt-3" />
                  <p className="text-lg text-white leading-snug">{line}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
