"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    label: "Inconsistent Content",
    front: "Your content is all over the place.",
    revealed: "73% of buyers choose a competitor with more consistent content.",
    stat: "73%",
  },
  {
    id: 2,
    label: "Ad Budget Waste",
    front: "You're running ads. They just aren't working.",
    revealed: "2 in 3 small businesses waste over half their ad budget on poor creative.",
    stat: "67%",
  },
  {
    id: 3,
    label: "Referral Reliance",
    front: "Most of your clients came from 'someone knowing someone'.",
    revealed: "85% of service businesses have no active inbound lead channel.",
    stat: "85%",
  },
  {
    id: 4,
    label: "No Conversion System",
    front: "You get followers, likes, views -- but not booked calls.",
    revealed: "On average, a service business converts less than 0.3% of social reach into clients.",
    stat: "0.3%",
  },
];

export default function ProblemV2XRay() {
  const [scanning, setScanning] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [scanPos, setScanPos] = useState(-20);

  // Auto-start scan when section enters view
  useEffect(() => {
    const timeout = setTimeout(() => {
      runScan();
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const runScan = () => {
    if (scanning) return;
    setScanning(true);
    setRevealedCards([]);
    setScanPos(-20);

    let pos = -20;
    const interval = setInterval(() => {
      pos += 0.6;
      setScanPos(pos);

      // Reveal cards as scan line crosses them
      // Cards are at roughly 12.5%, 37.5%, 62.5%, 87.5% of width
      const thresholds = [12, 37, 62, 87];
      thresholds.forEach((threshold, i) => {
        if (pos >= threshold - 2 && pos <= threshold + 2) {
          setRevealedCards((prev) => prev.includes(i) ? prev : [...prev, i]);
        }
      });

      if (pos >= 110) {
        clearInterval(interval);
        setScanning(false);
      }
    }, 20);
  };

  return (
    <section className="relative w-full bg-[#030303] py-32 px-6 overflow-hidden">
      <div className="w-full py-3 bg-[#FF8500] text-black text-center font-bold text-sm uppercase tracking-widest absolute top-0 left-0 z-50">
        Problem Concept C: X-Ray Scanner
      </div>

      {/* Dark grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="mx-auto max-w-6xl pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-white/30 uppercase tracking-[0.25em] text-xs mb-4">Diagnostic Report</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            What&rsquo;s actually wrong<br />with your marketing
          </h2>
          <button
            onClick={runScan}
            disabled={scanning}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm hover:border-[#FF8500]/40 hover:text-[#FF8500] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF8500] inline-block" />
            {scanning ? "Scanning..." : "Run Diagnostic"}
          </button>
        </motion.div>

        {/* Cards Grid with scan line overlay */}
        <div className="relative">
          {/* The scan line */}
          <AnimatePresence>
            {scanning && (
              <motion.div
                className="absolute top-0 bottom-0 w-[3px] z-20 pointer-events-none"
                style={{ left: `${scanPos}%` }}
              >
                {/* Glow line */}
                <div className="absolute inset-0 bg-[#FF8500] shadow-[0_0_20px_6px_rgba(255,133,0,0.6)]" />
                {/* Top + bottom arrowhead */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FF8500] rotate-45" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FF8500] rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, i) => {
              const isRevealed = revealedCards.includes(i);
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl overflow-hidden border min-h-[280px] flex flex-col justify-between p-6 cursor-default"
                  style={{
                    borderColor: isRevealed ? "rgba(255,133,0,0.3)" : "rgba(255,255,255,0.06)",
                    background: isRevealed ? "rgba(255,133,0,0.04)" : "rgba(255,255,255,0.02)"
                  }}
                >
                  {/* Label */}
                  <p className="text-xs uppercase tracking-[0.2em] font-mono"
                     style={{ color: isRevealed ? "rgba(255,133,0,0.7)" : "rgba(255,255,255,0.3)" }}>
                    {card.label}
                  </p>

                  {/* Content flip */}
                  <div className="flex-1 flex flex-col justify-center mt-6">
                    <AnimatePresence mode="wait">
                      {!isRevealed ? (
                        <motion.p
                          key="front"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/40 text-base leading-relaxed"
                        >
                          {card.front}
                        </motion.p>
                      ) : (
                        <motion.div
                          key="revealed"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <div className="text-6xl font-black text-[#FF8500] mb-4 tabular-nums">{card.stat}</div>
                          <p className="text-white/70 text-sm leading-relaxed">{card.revealed}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom scan indicator */}
                  {isRevealed && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8500] origin-left"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
