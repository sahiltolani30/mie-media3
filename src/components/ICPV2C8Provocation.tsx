"use client";

import { motion } from "framer-motion";

const industries = [
  "Consulting Firms",
  "Marketing Agencies",
  "Architects & Studios",
  "Coaches & Educators",
  "Professional Services",
  "Interior Designers",
  "Premium Local Businesses",
  "Home Improvement Companies",
];

export default function ICPV2C8Provocation() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6 overflow-hidden">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 8: Provocation Statement
          </span>
        </div>
      </div>

      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#FF8500]/[0.025] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl mt-12 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-20">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
        </div>

        {/* The provocation */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl font-medium text-white/20 tracking-wide mb-8">
            We do not work with everyone.
          </p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight max-w-3xl">
            We work with expertise-led businesses that have earned their reputation and are ready to make it visible.
          </h2>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-white/20">Specifically</span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>

        {/* Staggered industry list */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="border border-white/8 px-5 py-3 text-white/60 text-sm font-medium hover:border-[#FF8500]/30 hover:text-white transition-all duration-300 cursor-default"
            >
              {ind}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
