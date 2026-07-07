"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const industries = [
  {
    name: "Consulting Firms",
    pain: "Most consultants rely on referrals they cannot predict or control.",
    solution: "We build the content infrastructure that makes referrals unnecessary.",
    stat: "9.4% avg conversion rate on warm inbound",
  },
  {
    name: "Marketing Agencies",
    pain: "Most agencies market everyone else. Their own acquisition is broken.",
    solution: "We become the growth engine your clients already trust you to be.",
    stat: "8.1% lead-to-call rate within 90 days",
  },
  {
    name: "Architects & Studios",
    pain: "World-class portfolios are invisible without a distribution strategy.",
    solution: "We make your body of work the most compelling thing in any room.",
    stat: "-43% cost per acquisition vs cold ads",
  },
  {
    name: "Coaches & Educators",
    pain: "Expertise without a content system means chasing clients forever.",
    solution: "We turn your knowledge into a systematic inbound machine.",
    stat: "3x program revenue, same ad budget",
  },
  {
    name: "Professional Services",
    pain: "Referrals are gold. But you cannot scale what you cannot control.",
    solution: "We replicate the trust of referrals at systematic, digital scale.",
    stat: "$480K new ARR attributed in 6 months",
  },
  {
    name: "Interior Designers",
    pain: "Premium work deserves premium clients. Cold leads undervalue both.",
    solution: "Authority content that attracts the right clients before the inquiry lands.",
    stat: "11.2% avg conversion rate on warm inbound",
  },
];

export default function ICPV2C7Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 7: Expandable Industry Accordion
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-16 max-w-xl">
          High-ticket service<br /><span className="text-[#FF8500]">businesses.</span>
        </h2>

        <div className="flex flex-col divide-y divide-white/5">
          {industries.map((ind, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[11px] font-mono text-white/20 w-6"
                      style={{ color: isOpen ? "#FF8500" : undefined }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-xl md:text-2xl font-medium transition-colors duration-300"
                      style={{ color: isOpen ? "white" : "rgba(255,255,255,0.5)" }}
                    >
                      {ind.name}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2v12M2 8h12" stroke={isOpen ? "#FF8500" : "rgba(255,255,255,0.2)"} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-2">The problem</p>
                          <p className="text-base text-white/40 leading-relaxed">{ind.pain}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[#FF8500]/50 mb-2">What we do</p>
                          <p className="text-base text-white/70 leading-relaxed">{ind.solution}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-2">The result</p>
                          <p className="text-base font-medium text-[#FF8500]">{ind.stat}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
