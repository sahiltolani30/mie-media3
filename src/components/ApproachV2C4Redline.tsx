"use client";

import { motion } from "framer-motion";

const oldWay = [
  "Run ads to cold strangers.",
  "Hope the targeting is right.",
  "Pay premium CPMs for skeptical clicks.",
];

const newWay = [
  { text: "Build an audience that already trusts you.", accent: true },
  { text: "Run ads only to warm, qualified prospects.", accent: false },
  { text: "Let organic authority compress your cost per lead.", accent: false },
];

export default function ApproachV2C4Redline() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 4: Redline Strikethrough Manifesto
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl mt-12">

        {/* Section badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Our Approach</span>
        </div>

        {/* Old model */}
        <div className="mb-20">
          <motion.p
            className="text-[11px] uppercase tracking-[0.3em] font-mono text-white/20 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The model everyone uses
          </motion.p>

          <div className="flex flex-col gap-6">
            {oldWay.map((line, i) => (
              <div key={i} className="relative overflow-hidden">
                <motion.p
                  className="text-3xl md:text-4xl font-medium text-white/30 leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {line}
                </motion.p>

                {/* Strike line */}
                <motion.div
                  className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 rounded-full w-full"
                  style={{ background: "linear-gradient(90deg, #FF8500, rgba(255,133,0,0.3))", transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: i * 0.15 + 0.4, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  viewport={{ once: true }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[11px] font-mono text-[#FF8500]/60 uppercase tracking-widest">Replaced by</span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>

        {/* New model */}
        <div>
          <motion.p
            className="text-[11px] uppercase tracking-[0.3em] font-mono text-[#FF8500]/60 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            The MiuMedia model
          </motion.p>

          <div className="flex flex-col gap-6">
            {newWay.map((line, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                viewport={{ once: true }}
              >
                <div className="w-1.5 h-1.5 rounded-full mt-4 flex-shrink-0" style={{ background: "#FF8500" }} />
                <p className="text-3xl md:text-4xl font-medium leading-tight" style={{ color: line.accent ? "#FF8500" : "rgba(255,255,255,0.85)" }}>
                  {line.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
