"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const points = [
  {
    number: "01",
    headline: "Organic content is your unfair advantage.",
    body: "Long before competitors are running ads to your audience, your content has already built the trust that makes ads redundant at scale.",
  },
  {
    number: "02",
    headline: "The authority you build is permanent.",
    body: "Unlike ad campaigns that die the moment billing stops, a content-first brand compounds. Every piece of content is a permanent asset driving warm leads.",
  },
  {
    number: "03",
    headline: "Paid ads are the accelerant, not the engine.",
    body: "We use paid media to pour fuel on a fire you have already built. The result is dramatically lower CPM, dramatically higher intent, dramatically better ROI.",
  },
];

export default function ApproachV2C10Editorial() {
  // Attach to window scroll, not the section, so overflow-hidden does not clip it
  const { scrollYProgress } = useScroll();

  // Generous parallax range in pixels so the effect is actually visible
  const imageY = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);

  const rightColRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 10: Parallax Editorial
          </span>
        </div>
      </div>

      {/* Use min-h so the sticky column has room to actually stick */}
      <div className="mx-auto max-w-7xl mt-12 flex flex-col lg:flex-row gap-16 items-start min-h-[80vh]">

        {/* Left: Parallax image column — sticky works because flex parent is tall */}
        <div className="hidden lg:block w-[380px] flex-shrink-0 sticky top-32 self-start">
          <div className="overflow-hidden rounded-3xl" style={{ height: "60vh" }}>
            <motion.div
              style={{ y: imageY }}
              className="w-full flex items-center justify-center relative"
              style={{
                height: "calc(100% + 120px)",
                marginTop: "-60px",
                background: "linear-gradient(135deg, rgba(255,133,0,0.08) 0%, #0f0a00 50%, #050505 100%)",
              }}
            >
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,133,0,0.06) 39px, rgba(255,133,0,0.06) 40px),
                    repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,133,0,0.04) 39px, rgba(255,133,0,0.04) 40px)
                  `,
                }}
              />
              {/* Editorial text watermark */}
              <div className="relative text-center px-8 select-none pointer-events-none">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-6">
                  Content-First Model
                </p>
                <div className="text-[80px] font-black text-white/[0.04] leading-none tracking-tight">
                  TRUST<br />FIRST
                </div>
                <div className="mt-8 w-px h-16 bg-[#FF8500]/20 mx-auto" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Editorial content */}
        <div ref={rightColRef} className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-12">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Our Approach</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-16 max-w-xl">
            We build trust that<br />money <span className="text-[#FF8500]">cannot buy.</span><br />Then we buy it anyway.
          </h2>

          <div className="flex flex-col divide-y divide-white/5">
            {points.map((pt, i) => (
              <motion.div
                key={i}
                className="py-10 grid grid-cols-12 gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                viewport={{ once: true, margin: "-60px" }}
              >
                {/* Number */}
                <div className="col-span-1">
                  <span className="text-[13px] font-mono text-[#FF8500]/40">{pt.number}</span>
                </div>

                {/* Content */}
                <div className="col-span-11">
                  <h3 className="text-2xl font-medium text-white leading-snug mb-3">{pt.headline}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{pt.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom rule */}
          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-white/20">
              The content-first acquisition model
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
