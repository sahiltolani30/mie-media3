"use client";

import { motion } from "framer-motion";

const chapters = [
  {
    number: "01",
    headline: "Trust is not built with ads.",
    body: "Ads interrupt. Content connects. Before you can scale with paid media, you need an audience that already knows why you are worth listening to.",
  },
  {
    number: "02",
    headline: "Content builds the audience ads cannot buy.",
    body: "We produce video and written content that positions you as the definitive voice in your space. The audience it builds is yours permanently.",
  },
  {
    number: "03",
    headline: "Now paid ads work the way they were always promised.",
    body: "When warm audiences see your ads, they convert. CPMs compress. Cost per acquisition drops. Revenue scales. The system compounds.",
  },
];

export default function ApproachV2C7BigNumber() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 7: Big Number Statement
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-24">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Our Approach</span>
        </div>

        <div className="flex flex-col divide-y divide-white/5">
          {chapters.map((ch, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Giant background number */}
              <div className="lg:col-span-2 flex items-start">
                <motion.span
                  className="text-8xl md:text-9xl font-black leading-none select-none text-white/[0.04] group-hover:text-[#FF8500]/10 transition-colors duration-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {ch.number}
                </motion.span>
              </div>

              {/* Content */}
              <div className="lg:col-span-10 lg:grid lg:grid-cols-10 gap-12 items-start">
                <motion.h3
                  className="lg:col-span-5 text-3xl md:text-4xl font-medium text-white leading-snug tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  {ch.headline}
                </motion.h3>
                <motion.p
                  className="lg:col-span-5 text-white/50 text-lg leading-relaxed mt-4 lg:mt-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  {ch.body}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
