"use client";

import { motion } from "framer-motion";

const chaosItems = [
  { text: "Post on Tuesday... skip Wednesday...", rot: -3, top: "12%", left: "5%" },
  { text: "Boost the post? Maybe?", rot: 2, top: "28%", left: "15%" },
  { text: "Got a referral. Great!", rot: -1, top: "44%", left: "3%" },
  { text: "Run ad. No leads. Stop ad.", rot: 3, top: "58%", left: "18%" },
  { text: "Post again. 12 likes.", rot: -4, top: "72%", left: "8%" },
];

const systemItems = [
  { text: "3x weekly content", icon: "01" },
  { text: "Paid ads with proven creative", icon: "02" },
  { text: "Automated lead nurture", icon: "03" },
  { text: "Consistent inbound pipeline", icon: "04" },
];

export default function ProblemV2SideBySide() {
  return (
    <section className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden">
      <div className="w-full py-3 bg-[#FF8500] text-black text-center font-bold text-sm uppercase tracking-widest absolute top-0 left-0 z-50">
        Problem Concept B: The Split
      </div>

      <div className="mx-auto max-w-7xl pt-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.25em] text-xs mb-4">The Reality</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            What your marketing looks like<br />
            <span className="text-[#FF8500]">right now.</span>
          </h2>
        </motion.div>

        {/* Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[560px]">

          {/* LEFT: Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden border border-red-500/10 bg-[#0d0404] p-10 min-h-[400px]"
          >
            {/* Red ambient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <p className="text-red-400/70 text-sm font-mono uppercase tracking-widest">Without a system</p>
            </div>

            {/* Chaotic floating text notes */}
            <div className="relative h-72">
              {chaosItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="absolute px-3 py-2 bg-red-950/50 border border-red-500/20 text-red-200/60 text-xs font-mono rounded-lg backdrop-blur-sm"
                  style={{
                    top: item.top,
                    left: item.left,
                    rotate: `${item.rot}deg`,
                    maxWidth: "60%"
                  }}
                >
                  {item.text}
                </motion.div>
              ))}
              {/* Messy red X marks */}
              {[20, 45, 68].map((top, i) => (
                <div key={i} className="absolute right-4 text-red-500/30 text-4xl font-black" style={{ top: `${top}%` }}>x</div>
              ))}
            </div>

            <div className="mt-4 pt-6 border-t border-red-500/10">
              <p className="text-red-300/40 text-sm">Result: Sporadic, exhausting, 0 consistent leads.</p>
            </div>
          </motion.div>

          {/* RIGHT: Miu Media System */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-[#FF8500]/15 bg-[#080604] p-10 min-h-[400px]"
          >
            {/* Orange ambient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8500]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-1/3 -right-1/4 w-[400px] h-[400px] bg-[#FF8500]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF8500] shadow-[0_0_8px_#FF8500]" />
              <p className="text-[#FF8500]/70 text-sm font-mono uppercase tracking-widest">With Miu Media</p>
            </div>

            <div className="flex flex-col gap-5">
              {systemItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-[#FF8500]/20 hover:bg-[#FF8500]/3 transition-colors duration-300"
                >
                  <span className="text-[#FF8500]/40 font-mono text-sm shrink-0">{item.icon}</span>
                  <span className="text-white/80 text-base font-medium">{item.text}</span>
                  <svg className="ml-auto w-4 h-4 text-[#FF8500]/30 group-hover:text-[#FF8500] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#FF8500]/10">
              <p className="text-[#FF8500]/50 text-sm">Result: Predictable, inbound lead flow every month.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
