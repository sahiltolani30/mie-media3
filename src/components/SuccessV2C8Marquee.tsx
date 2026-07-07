"use client";

import { motion } from "framer-motion";

const row1 = [
  '"First warm lead in week 3." — SaaS Founder',
  '"Our CPM dropped by half in 60 days." — Agency Owner',
  '"6 inbound demos per week by month 2." — Consulting Firm',
  '"Content we made in month 1 still converts." — B2B Coach',
  '"Went from referrals-only to a full pipeline." — Series B CFO',
];

const row2 = [
  '"The authority content built opened doors ads never could." — Growth Lead',
  '"From 0.9% CVR to 9.3% CVR in 90 days." — EdTech Founder',
  '"First time I felt like marketing was a system, not a gamble." — Agency Principal',
  '"$480K new ARR attributed to the content model." — Professional Services CEO',
  '"We are now the default choice in our category." — SaaS CRO',
];

export default function SuccessV2C8Marquee() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 overflow-hidden">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 8: Testimonial Marquee
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-2xl">
          Heard from the<br /><span className="text-[#FF8500]">people inside it.</span>
        </h2>
      </div>

      {/* Row 1: left scroll */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex gap-6 w-max">
          {[...row1, ...row1].map((q, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 border border-white/8 bg-white/[0.02] px-6 py-4 max-w-[420px]"
              animate={{ x: [0, -row1.length * 440] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <p className="text-sm text-white/50 leading-relaxed font-light italic">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2: right scroll */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 w-max">
          {[...row2, ...row2].map((q, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 border border-white/8 bg-white/[0.02] px-6 py-4 max-w-[460px]"
              animate={{ x: [-row2.length * 480, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              <p className="text-sm text-white/50 leading-relaxed font-light italic">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
