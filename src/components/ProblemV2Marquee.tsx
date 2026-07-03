"use client";

import { motion } from "framer-motion";

const row1 = [
  "73% of buyers choose competitors with better content",
  "Less than 12% of service businesses run a consistent content calendar",
  "Avg. service business gets 1.2 inbound leads per month organically",
  "67% of ad spend is wasted without strong creative",
  "Referrals are unpredictable and impossible to scale",
  "Most service businesses have no active content strategy",
];

const row2 = [
  "85% of service businesses have no active inbound lead channel",
  "The top 1% of firms post 4-5x per week. Most post once",
  "A strong content system increases qualified leads by 3x on average",
  "Interior design firms that run ads without strategy see 0.4% conversion",
  "Word-of-mouth plateaus. Content compounds. You can only pick one.",
  "68% of architects say inconsistent leads is their #1 business problem",
];

const InfiniteRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        className="flex gap-6 w-max"
      >
        {doubled.map((text, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center gap-4 px-6 py-3.5 rounded-full border border-white/6 bg-white/[0.02] backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500]/60 shrink-0" />
            <span className="text-white/50 text-sm font-medium whitespace-nowrap">{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ProblemV2Marquee() {
  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden">
      <div className="w-full py-3 bg-[#FF8500] text-black text-center font-bold text-sm uppercase tracking-widest absolute top-0 left-0 z-50">
        Problem Concept E: The Evidence Feed
      </div>

      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #030303, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-40 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #030303, transparent)" }} />

      {/* Top ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-[#FF8500]/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="px-6 mb-16 pt-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/30 uppercase tracking-[0.25em] text-xs mb-4">The Numbers</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
              The data is clear.
              <br />
              <span className="text-[#FF8500]">Most service businesses are invisible online.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Marquee Rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4"
      >
        <InfiniteRow items={row1} />
        <InfiniteRow items={row2} reverse />
      </motion.div>

      {/* Bottom stats bar */}
      <div className="mx-auto max-w-5xl px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden"
        >
          {[
            { num: "88%", desc: "of online leads go to businesses with consistent content" },
            { num: "3x", desc: "more leads from businesses with a content + ads system" },
            { num: "67%", desc: "of ad budget wasted without proven creative strategy" },
            { num: "1.2", desc: "avg. inbound leads/month for service businesses without a system" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 flex flex-col gap-3">
              <div className="text-4xl font-black text-[#FF8500] tabular-nums">{stat.num}</div>
              <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
