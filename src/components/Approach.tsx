"use client";

import { motion } from "framer-motion";

export default function Approach() {
  const items = [
    {
      step: "01",
      title: "Content aligned with business goals",
      desc: "Most production houses simply edit videos. We build content that aligns with your business goals -- whether that is more sales, stronger branding or higher engagement.",
    },
    {
      step: "02",
      title: "Videos people remember",
      desc: "Good content is not about making videos. It is about making videos people remember. Every piece we create is designed with your audience and your goals in mind.",
    },
  ];

  return (
    <section id="approach" className="relative w-full bg-[#050505] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Typography / Sticky Left Side */}
          <div className="flex flex-col lg:sticky lg:top-32 h-full lg:h-auto self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#FF8500]">
                  Why MIU Media
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                More than editors. A creative growth partner.
              </h2>
            </motion.div>
          </div>

          {/* Staggered Right Side Cards */}
          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: [0.32, 0.72, 0, 1],
                }}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="glass-card p-10 relative overflow-hidden cursor-default group"
              >
                {/* Animated step number with glow */}
                <motion.div
                  className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 select-none pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6, type: "spring" }}
                >
                  {item.step}
                </motion.div>

                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF8500]/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
                />

                <h3 className="text-2xl font-medium text-white mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-sm relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
