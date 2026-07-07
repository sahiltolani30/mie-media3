"use client";

import { motion } from "framer-motion";

const statements = [
  { time: "BY MONTH ONE.", detail: "You have a full content calendar, a production pipeline, and your first 4 pieces published. Your audience has begun to form around your ideas." },
  { time: "BY MONTH THREE.", detail: "Your organic audience is growing. You are receiving inbound inquiries you did not pay for. Prospects arrive already familiar with your thinking." },
  { time: "BY MONTH SIX.", detail: "Paid ads are amplifying a warm, qualified audience. Your cost per acquisition has dropped. Your CPM is down an average of 47%. The system is compounding." },
  { time: "BY MONTH TWELVE.", detail: "You have a content asset library that keeps generating leads. A paid system optimized for warm audiences. A brand that has become the default authority in your market." },
];

export default function SuccessV2C6StatementWall() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Success Concept 6: Statement Wall
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-20">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">What Success Looks Like</span>
        </div>

        <div className="flex flex-col gap-16">
          {statements.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Bold time label */}
              <h3 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none mb-4">
                {s.time}
              </h3>
              {/* Faint detail */}
              <div className="flex items-start gap-4 ml-0 md:ml-2">
                <div className="w-0.5 min-h-[60px] bg-[#FF8500]/20 flex-shrink-0 mt-1" />
                <p className="text-lg md:text-xl text-white/35 leading-relaxed max-w-2xl">
                  {s.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer rule */}
        <motion.div
          className="mt-20 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-white/20">This is what you are committing to</span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
