"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const verticals = [
  { name: "CONSULTING FIRMS", desc: "Premium positioning for practices that earn on expertise.", stat: "9.4% avg CVR" },
  { name: "MARKETING AGENCIES", desc: "Client acquisition for agencies tired of being the cobbler's child.", stat: "8.1% avg CVR" },
  { name: "ARCHITECTS", desc: "Authority content for world-class studios with invisible brands.", stat: "-43% CPA" },
  { name: "COACHES & EDUCATORS", desc: "Positioning content that turns expertise into a client magnet.", stat: "28% show rate" },
  { name: "PROFESSIONAL SERVICES", desc: "Systematic inbound that replicates the trust of referrals at scale.", stat: "$480K new ARR" },
  { name: "INTERIOR DESIGNERS", desc: "Visual authority content that attracts premium residential clients.", stat: "11.2% avg CVR" },
];

export default function ICPV2C6Typewriter() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((p) => (p + 1) % verticals.length);
        setShow(true);
      }, 400);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const current = verticals[index];

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 6: Typewriter Industry Sequence
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-20">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
        </div>

        {/* Main typewriter display */}
        <div className="mb-16">
          <p className="text-2xl md:text-3xl text-white/30 font-medium mb-4">We work with</p>
          <div className="flex items-center gap-3 min-h-[120px] md:min-h-[140px]">
            <AnimatePresence mode="wait">
              {show && (
                <motion.h2
                  key={current.name}
                  className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                >
                  {current.name}
                </motion.h2>
              )}
            </AnimatePresence>
            {/* Blinking cursor */}
            <motion.span
              className="inline-block w-1 h-14 md:h-16 bg-[#FF8500] flex-shrink-0"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9 }}
            />
          </div>
        </div>

        {/* Detail card that transitions */}
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key={current.name + "-detail"}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-xl text-white/50 leading-relaxed">{current.desc}</p>
              <div className="flex items-center gap-3 md:justify-end">
                <span className="text-3xl font-black text-[#FF8500] font-mono">{current.stat}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dot navigation */}
        <div className="flex gap-2 mt-12">
          {verticals.map((_, i) => (
            <button
              key={i}
              onClick={() => { setShow(false); setTimeout(() => { setIndex(i); setShow(true); }, 200); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? "24px" : "6px",
                height: "6px",
                background: i === index ? "#FF8500" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
