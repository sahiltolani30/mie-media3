"use client";

import { motion } from "framer-motion";

const stages = [
  { id: "content", label: "Organic Content", desc: "Video, articles, social proof" },
  { id: "audience", label: "Warm Audience", desc: "People who know and trust you" },
  { id: "ads", label: "Paid Ads", desc: "Amplify to warm, qualified leads" },
  { id: "scale", label: "Compounding Scale", desc: "Revenue that grows itself" },
];

const arrowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function ApproachV2C3Pipeline() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6 overflow-hidden">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 3: Pipeline Flow Architecture
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Our Approach</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
            We run a <span className="text-[#FF8500]">system.</span><br/>Not a campaign.
          </h2>
        </div>

        {/* Pipeline Diagram */}
        <div className="relative">
          {/* Connection line background */}
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-white/5 -translate-y-1/2 hidden lg:block"
            style={{ width: "100%" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true }}
          />

          {/* Animated signal dots — use left-based animation so % is relative to parent */}
          <div className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 hidden lg:block overflow-hidden pointer-events-none">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-[0_0_8px_#FF8500] bg-[#FF8500]"
                style={{ left: 0 }}
                animate={{ left: ["0%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1,
                }}
              />
            ))}
          </div>

          {/* Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 relative">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white/[0.02] border border-white/8 hover:border-[#FF8500]/30 transition-all duration-500 p-8 mx-0.5">
                  {/* Node indicator */}
                  <div className="w-3 h-3 rounded-full border-2 border-[#FF8500]/50 bg-[#050505] mb-8 group-hover:border-[#FF8500] group-hover:shadow-[0_0_12px_rgba(255,133,0,0.4)] transition-all duration-500" />

                  {/* Step number */}
                  <div className="text-[11px] font-mono text-white/20 mb-3 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-medium text-white mb-3 leading-tight">{stage.label}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{stage.desc}</p>

                  {/* Arrow connector (hidden on mobile) */}
                  {i < stages.length - 1 && (
                    <motion.div
                      variants={arrowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-[#FF8500]/40 text-lg font-mono"
                    >
                      --
                    </motion.div>
                  )}

                  {/* Hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#FF8500]/5 via-transparent to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Baseline connector label */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-white/20">Content-first acquisition pipeline</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
