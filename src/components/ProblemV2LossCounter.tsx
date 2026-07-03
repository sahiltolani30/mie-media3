"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DAILY_LOSS = 847;

const problems = [
  { label: "Inconsistent Content", severity: 92, desc: "No strategy or conversion goal behind posts" },
  { label: "Burning Ad Budget", severity: 78, desc: "Strong creative is missing from every campaign" },
  { label: "Referral Reliance", severity: 85, desc: "Growth is held hostage to word-of-mouth" },
  { label: "No Conversion System", severity: 96, desc: "Social attention never becomes booked clients" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [active, target, duration]);
  return count;
}

export default function ProblemV2LossCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const elapsedRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    timerRef.current = setInterval(() => {
      elapsedRef.current += 1;
      setElapsed(elapsedRef.current);
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [inView]);

  const initialLoss = useCountUp(28400, 2000, inView);
  const liveTotal = inView ? initialLoss + elapsed * Math.floor(DAILY_LOSS / 86400) : 0;

  return (
    <section ref={sectionRef} className="relative w-full bg-[#030303] py-32 px-6 overflow-hidden">
      {/* Orange dev banner */}
      <div className="w-full py-3 bg-[#FF8500] text-black text-center font-bold text-sm uppercase tracking-widest absolute top-0 left-0 z-50">
        Problem Concept A: The Loss Counter
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Counter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-8">
                Estimated revenue lost this month
              </p>
              <div className="relative">
                <div className="text-[80px] md:text-[110px] font-black tabular-nums leading-none text-white tracking-tighter">
                  <span className="text-[#FF8500]">$</span>
                  {liveTotal.toLocaleString()}
                </div>
                {/* Pulsing red dot */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                  <p className="text-red-400 text-sm font-mono">LIVE &mdash; Counting since you opened this page</p>
                </div>
              </div>

              <p className="text-white/40 text-base mt-10 max-w-md leading-relaxed">
                Service businesses without a unified content system lose an average of{" "}
                <span className="text-white font-semibold">$28,000&ndash;$42,000</span> per month in potential revenue to competitors who show up consistently online.
              </p>
            </motion.div>
          </div>

          {/* Right: Severity Bars */}
          <div className="flex flex-col gap-6">
            {problems.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white font-medium text-base">{p.label}</span>
                  <span className="text-red-400 text-xs font-mono font-bold">{p.severity}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.severity}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #FF8500, #ef4444)" }}
                  />
                </div>
                <p className="text-white/35 text-sm mt-1.5">{p.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
