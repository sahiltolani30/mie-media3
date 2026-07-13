"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Animated counter hook
function useCounter(to: number, active: boolean, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 60;
    const inc = to / steps;
    const iv = setInterval(() => {
      start += inc;
      if (start >= to) { setVal(to); clearInterval(iv); }
      else setVal(Math.floor(start));
    }, duration / steps);
    return () => clearInterval(iv);
  }, [to, active, duration]);
  return to >= 1000 ? val.toLocaleString() : val;
}

// Live list items rotating
const leadTypes = ["SaaS Founder", "Agency Owner", "Consultant", "Coach", "B2B Executive", "Series A CFO", "Growth Lead"];

function LiveLeadList() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % leadTypes.length), 1400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="overflow-hidden h-6">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-[13px] font-mono text-[#FF8500]/70"
      >
        {leadTypes[index]}
      </motion.div>
    </div>
  );
}

export default function SuccessV2C7BentoKPI() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const leads = useCounter(847, active);
  const cpm = useCounter(47, active, 1500);
  const roas = useCounter(8, active, 1200);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="mx-auto max-w-7xl mt-12">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-2xl">
            What clients achieve with a content-powered acquisition system
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-[160px]">

          {/* Wide: leads counter */}
          <motion.div
            className="md:col-span-5 md:row-span-2 border border-white/8 bg-white/[0.02] p-8 flex flex-col justify-between group hover:border-[#FF8500]/20 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }} viewport={{ once: true }}
          >
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-3">Inbound leads generated</p>
              <div className="text-8xl font-black tabular-nums text-white font-mono leading-none">{leads}</div>
            </div>
            <div>
              <LiveLeadList />
              <p className="text-[11px] text-white/20 mt-1">Arriving this month</p>
            </div>
          </motion.div>

          {/* CPM reduction */}
          <motion.div
            className="md:col-span-4 border border-white/8 bg-white/[0.02] p-8 flex flex-col justify-between hover:border-[#FF8500]/20 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }} viewport={{ once: true }}
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/20">Avg. CPM reduction</p>
            <div>
              <div className="text-5xl font-black text-[#FF8500] font-mono">-{cpm}%</div>
              <p className="text-[12px] text-white/30 mt-1">vs cold traffic baseline</p>
            </div>
          </motion.div>

          {/* System active */}
          <motion.div
            className="md:col-span-3 border border-white/8 bg-white/[0.02] p-8 flex flex-col justify-between hover:border-[#FF8500]/20 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }} viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-[#FF8500]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF8500]/60">System Active</span>
            </div>
            <div>
              <div className="text-4xl font-black text-white font-mono">{roas}x</div>
              <p className="text-[12px] text-white/30 mt-1">Avg content ROI multiplier</p>
            </div>
          </motion.div>

          {/* Progress bar: conversion rate */}
          <motion.div
            className="md:col-span-4 border border-white/8 bg-white/[0.02] p-8 flex flex-col justify-between hover:border-[#FF8500]/20 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/20">Avg conversion rate (warm)</p>
            <div>
              <div className="flex items-end justify-between mb-2">
                <span className="text-4xl font-black text-white font-mono">11.4%</span>
                <span className="text-[11px] text-white/20 font-mono">Industry: 1.2%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#FF8500]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "11.4%" }}
                  transition={{ delay: 0.5, duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>

          {/* Timeline note */}
          <motion.div
            className="md:col-span-3 border border-white/8 bg-white/[0.02] p-8 flex flex-col justify-center hover:border-[#FF8500]/20 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }} viewport={{ once: true }}
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-3">Time to first result</p>
            <p className="text-3xl font-black text-white font-mono">90</p>
            <p className="text-[13px] text-white/30">days to first inbound inquiry</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
