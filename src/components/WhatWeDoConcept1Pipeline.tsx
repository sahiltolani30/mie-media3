"use client";

import { motion } from "framer-motion";

export default function WhatWeDoConcept1Pipeline() {
  const services = [
    {
      title: "Video production for service businesses",
      desc: "Short-form video content designed to educate, establish authority, and convert viewers into prospects.",
      tag: "01 / CREATE",
    },
    {
      title: "Content strategy & scripting",
      desc: "Research-led content that targets the questions your ideal clients are already asking online.",
      tag: "02 / STRATEGIZE",
    },
    {
      title: "Meta ads management",
      desc: "Performance campaigns built around proven creative and audience targeting -- optimised for lead quality, not vanity metrics.",
      tag: "03 / AMPLIFY",
    },
  ];

  return (
    <section className="relative w-full bg-[#050505] py-32 px-6 border-b border-white/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row gap-16 items-start">
        {/* Sticky Left Side */}
        <div className="md:w-5/12 md:sticky md:top-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 1: The Pipeline
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            A complete digital marketing system.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-8">
            Most agencies do content or ads. We build the full pipeline: from
            video production to Meta campaigns optimised for qualified lead
            generation.
          </p>
          <div className="w-1 h-32 bg-gradient-to-b from-[#FF8500] to-transparent rounded-full ml-4 hidden md:block" />
        </div>

        {/* Scrolling Right Side */}
        <div className="md:w-7/12 flex flex-col gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-[1px] rounded-[2rem] relative group bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="bg-[#0a0a0a] rounded-[calc(2rem-1px)] p-10 relative overflow-hidden h-full flex flex-col justify-center border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span className="text-xs font-mono text-[#FF8500] mb-4 block">
                  {service.tag}
                </span>
                <h3 className="text-2xl font-medium text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
