"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const personas = [
  {
    label: "The Consultant",
    pain: "Your expertise is real. Your online presence is invisible.",
    promise: "We make your knowledge the most visible thing in your market.",
    stat: "9.4%",
    statLabel: "avg warm CVR",
    body: "Expertise-led practices build trust through content before the first call is ever scheduled. By month 3, your inbox contains inbound inquiries you never solicited.",
  },
  {
    label: "The Agency",
    pain: "You market everyone else. You cannot market yourself.",
    promise: "We build the client acquisition system your agency has always needed.",
    stat: "8.1%",
    statLabel: "lead-to-call rate",
    body: "We create content that positions your agency as the authority in your niche -- so clients come to you already sold on your approach.",
  },
  {
    label: "The Architect",
    pain: "Your portfolio is world-class. Nobody knows it exists.",
    promise: "We make your body of work the most compelling thing in the room.",
    stat: "-43%",
    statLabel: "cost per acquisition",
    body: "Authority content targeted at high-net-worth clients and developers. Organic reach that makes your studio the obvious aesthetic choice before the RFP lands.",
  },
  {
    label: "The Coach",
    pain: "You are the product. Your brand does not reflect your impact.",
    promise: "We turn your expertise into a content system that converts while you sleep.",
    stat: "28%",
    statLabel: "program show rate",
    body: "Thought leadership content and warm retargeting turns your audience into clients. No cold outreach. No chasing. Just trust that scales.",
  },
  {
    label: "The Professional",
    pain: "Referrals are strong. But you cannot predict or control them.",
    promise: "We build the systematic inbound that referrals always promised.",
    stat: "$480K",
    statLabel: "new ARR attributed",
    body: "A content-first acquisition system that replicates the trust dynamic of a referral, at scale, across every digital channel where your clients spend time.",
  },
];

export default function ICPV2C5PersonaScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePersona, setActivePersona] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActivePersona(Math.min(personas.length - 1, Math.floor(v * personas.length)));
  });

  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            ICP Concept 5: Full-Screen Persona Scroll
          </span>
        </div>
      </div>

      <div ref={containerRef} style={{ height: `${personas.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 w-full">

            {/* Tab indicators */}
            <div className="flex gap-3 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mr-4">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Who We Work With</span>
              </div>
              {personas.map((p, i) => (
                <div
                  key={i}
                  className="h-1 w-8 rounded-full transition-all duration-500"
                  style={{
                    background: i === activePersona ? "#FF8500" : "rgba(255,255,255,0.08)",
                    width: i === activePersona ? "32px" : "20px",
                  }}
                />
              ))}
            </div>

            {/* Persona panels */}
            <div className="relative" style={{ minHeight: "60vh" }}>
              {personas.map((p, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: i === activePersona ? 1 : 0,
                    y: i === activePersona ? 0 : i < activePersona ? -32 : 32,
                    pointerEvents: i === activePersona ? "auto" : "none",
                  }}
                  transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                  {/* Left */}
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF8500]/60 mb-4">
                      {String(i + 1).padStart(2, "0")} / {String(personas.length).padStart(2, "0")}
                    </p>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-none mb-6">
                      {p.label}
                    </h2>
                    <p className="text-xl text-white/40 leading-relaxed max-w-md mb-8">{p.pain}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-0.5 h-12 bg-[#FF8500]/40" />
                      <p className="text-lg font-medium text-white/80 italic">{p.promise}</p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="lg:pl-12 lg:border-l border-white/5">
                    <p className="text-base text-white/40 leading-relaxed mb-8">{p.body}</p>
                    <div>
                      <span className="text-5xl font-black text-[#FF8500] font-mono">{p.stat}</span>
                      <p className="text-sm text-white/30 mt-1">{p.statLabel}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
