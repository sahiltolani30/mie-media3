"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote: "I need more clients, but I refuse to chase people online.",
    vertical: "Consultants & Advisors",
    desc: "Authority-first acquisition for expertise-led practices.",
  },
  {
    quote: "I know my work is great. Why do not more people know about it?",
    vertical: "Architects & Designers",
    desc: "Content systems that make premium work visible to premium clients.",
  },
  {
    quote: "We tried ads. They worked for a week. Then everything went quiet.",
    vertical: "Agencies & Studios",
    desc: "Organic trust infrastructure that makes paid campaigns actually convert.",
  },
  {
    quote: "I am the expert in my field. My online presence does not reflect that.",
    vertical: "Coaches & Educators",
    desc: "Positioning content that turns expertise into a client magnet.",
  },
  {
    quote: "Our referral pipeline is strong, but I cannot scale what I cannot predict.",
    vertical: "Professional Services",
    desc: "Systematic inbound that replicates the trust of referrals at scale.",
  },
];

export default function ICPV2C2InternalMonologue() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 2: Internal Monologue Quotes
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-20 max-w-2xl">
          We built this for the<br />person who has <span className="text-[#FF8500]">thought this.</span>
        </h2>

        <div className="flex flex-col divide-y divide-white/5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Quote */}
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#FF8500]/20 font-black leading-none flex-shrink-0 -mt-2">"</span>
                <p className="text-2xl md:text-3xl font-medium text-white/70 leading-snug italic group-hover:text-white transition-colors duration-500">
                  {q.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="flex flex-col justify-center lg:pl-8 lg:border-l border-white/5">
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#FF8500]/60 mb-2">{q.vertical}</p>
                <p className="text-base text-white/40 leading-relaxed">{q.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
