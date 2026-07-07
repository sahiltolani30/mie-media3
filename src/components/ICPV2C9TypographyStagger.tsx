"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "CONSULTING FIRMS.", sub: "Premium positioning for practices that earn on expertise." },
  { name: "MARKETING AGENCIES.", sub: "Client acquisition for agencies tired of being the cobbler's child." },
  { name: "ARCHITECTS & STUDIOS.", sub: "Authority content for world-class work with an invisible brand." },
  { name: "COACHES & EDUCATORS.", sub: "Positioning content that turns expertise into a client magnet." },
  { name: "PROFESSIONAL SERVICES.", sub: "Systematic inbound that replicates the trust of referrals at scale." },
  { name: "INTERIOR DESIGNERS.", sub: "Visual authority content for studios with premium portfolios." },
  { name: "PREMIUM LOCAL BUSINESSES.", sub: "Brand visibility that makes you the obvious choice in your market." },
];

export default function ICPV2C9TypographyStagger() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 9: Typography Stagger Manifesto
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-20">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
        </div>

        <motion.div
          className="flex flex-col gap-0 divide-y divide-white/[0.04]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } },
              }}
              className="py-8 group cursor-default"
            >
              <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-none mb-3 group-hover:text-[#FF8500] transition-colors duration-500">
                {ind.name}
              </h3>
              <p className="text-base text-white/25 pl-0 md:pl-2 leading-relaxed group-hover:text-white/50 transition-colors duration-500">
                {ind.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
