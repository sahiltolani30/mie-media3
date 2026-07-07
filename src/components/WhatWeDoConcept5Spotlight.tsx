"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

function SpotlightCard({ title, desc, tag }: { title: string, desc: string, tag: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative max-w-4xl mx-auto w-full rounded-[2rem] border border-white/5 bg-[#0a0a0a] px-8 py-16 md:p-16 transition-all duration-500 hover:border-white/10 hover:bg-[#0d0d0d]"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 133, 0, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="md:w-1/3">
          <span className="text-xs font-mono text-white/30 tracking-widest block mb-4">{tag}</span>
          <h3 className="text-3xl font-medium text-white group-hover:text-[#FF8500] transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDoConcept5Spotlight() {
  const services = [
    {
      title: "Video Production",
      desc: "Short-form video content designed to educate, establish authority, and convert viewers into prospects. We handle shooting, editing, and final delivery.",
      tag: "01",
    },
    {
      title: "Content Strategy",
      desc: "Research-led content that targets the questions your ideal clients are already asking online. Stop guessing what to post.",
      tag: "02",
    },
    {
      title: "Meta Ads",
      desc: "Performance campaigns built around proven creative and audience targeting -- optimised for lead quality, not vanity metrics.",
      tag: "03",
    },
  ];

  return (
    <section className="relative w-full bg-[#050505] py-32 px-6">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 5: Magnetic Spotlight
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            The Digital Engine
          </h2>
        </div>

        <div className="flex flex-col gap-6 relative group/list">
          {/* Subtle dimming of unfocused siblings could be done with pure CSS or group hover */}
          {services.map((service, idx) => (
            <SpotlightCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
