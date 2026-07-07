"use client";

import { motion } from "framer-motion";

const verticals = [
  { name: "Consulting Firms", stat: "9.4%", statLabel: "avg CVR", desc: "Premium positioning for practices that earn on expertise.", size: "lg" },
  { name: "Marketing Agencies", stat: "8.1%", statLabel: "avg CVR", desc: "Client acquisition for agencies tired of being the cobbler's child.", size: "sm" },
  { name: "Architects & Studios", stat: "-43%", statLabel: "CPA", desc: "Authority content for world-class work with an invisible brand.", size: "sm" },
  { name: "Coaches & Educators", stat: "28%", statLabel: "show rate", desc: "Positioning content that turns expertise into a magnet.", size: "md" },
  { name: "Professional Services", stat: "$480K", statLabel: "new ARR", desc: "Systematic inbound that replicates referral trust at scale.", size: "md" },
  { name: "Interior Designers", stat: "11.2%", statLabel: "avg CVR", desc: "Visual authority content for studios with premium portfolios.", size: "sm" },
  { name: "Home Improvement", stat: "6.7x", statLabel: "ROAS", desc: "Local authority content that converts before the estimate.", size: "sm" },
  { name: "Premium Local", stat: "3x", statLabel: "inbound", desc: "Brand visibility that makes you the obvious local choice.", size: "sm" },
];

export default function ICPV2C4AsymmetricGrid() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 4: Asymmetric Vertical Grid
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-xl">
              Built for expertise-led<br /><span className="text-[#FF8500]">service businesses.</span>
            </h2>
          </div>
          <p className="text-white/30 text-base leading-relaxed max-w-xs">
            We specialise in industries where trust, credibility, and visual authority directly determine client acquisition.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {/* Large featured card */}
          <motion.div
            className="col-span-2 row-span-2 bg-[#050505] p-10 flex flex-col justify-between group hover:bg-white/[0.02] transition-all duration-500 cursor-default min-h-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-4">{verticals[0].name}</p>
              <h3 className="text-3xl font-medium text-white leading-snug mb-3 max-w-xs">{verticals[0].desc}</h3>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black text-[#FF8500] font-mono">{verticals[0].stat}</span>
              <span className="text-sm text-white/30 mb-1">{verticals[0].statLabel}</span>
            </div>
          </motion.div>

          {/* Remaining cards */}
          {verticals.slice(1).map((v, i) => (
            <motion.div
              key={i}
              className="bg-[#050505] p-8 flex flex-col justify-between group hover:bg-white/[0.02] transition-all duration-500 cursor-default min-h-[140px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i + 1) * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-2">{v.name}</p>
              <div>
                <p className="text-xs text-white/30 mb-3 leading-relaxed">{v.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#FF8500]/80 font-mono">{v.stat}</span>
                  <span className="text-[11px] text-white/20">{v.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
