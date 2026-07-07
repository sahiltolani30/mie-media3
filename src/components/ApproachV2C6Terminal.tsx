"use client";

import { motion } from "framer-motion";

const lines = [
  { delay: 0.2, type: "comment", content: "# MiuMedia Acquisition System v2.0" },
  { delay: 0.5, type: "blank", content: "" },
  { delay: 0.7, type: "command", content: "$ init organic_content()", annotation: "Start building your audience." },
  { delay: 1.0, type: "output", content: "  > Creating video library...", annotation: null },
  { delay: 1.2, type: "output", content: "  > Publishing thought leadership...", annotation: null },
  { delay: 1.4, type: "output", content: "  > [OK] Trust layer initialized.", annotation: null },
  { delay: 1.6, type: "blank", content: "" },
  { delay: 1.8, type: "command", content: "$ build_audience --target=icp --depth=trust", annotation: "Warm your ideal customer." },
  { delay: 2.1, type: "output", content: "  > Identifying ideal customer profile...", annotation: null },
  { delay: 2.3, type: "output", content: "  > Mapping content to buyer journey...", annotation: null },
  { delay: 2.5, type: "output", content: "  > [OK] Warm audience segment ready.", annotation: null },
  { delay: 2.7, type: "blank", content: "" },
  { delay: 2.9, type: "command", content: "$ run paid_ads --audience=warm --multiplier=10x", annotation: "Scale what is already working." },
  { delay: 3.2, type: "output", content: "  > Targeting warm audience segment...", annotation: null },
  { delay: 3.4, type: "output", content: "  > CPM compression detected: -47%", annotation: null },
  { delay: 3.6, type: "output", content: "  > [OK] Revenue pipeline scaling.", annotation: null },
  { delay: 3.8, type: "blank", content: "" },
  { delay: 4.0, type: "success", content: "SYSTEM ACTIVE. Compounding growth online.", annotation: null },
];

export default function ApproachV2C6Terminal() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/5 py-32 px-6">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 6: Command-Line Terminal
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left headline */}
        <div className="lg:sticky lg:top-32 self-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Our Approach</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-8">
            Our method is a<br/>programmable<br/><span className="text-[#FF8500]">system.</span>
          </h2>
          <p className="text-white/40 text-base leading-relaxed max-w-sm">
            Predictable inputs. Predictable outputs. Every phase of our methodology is designed to feed the next.
          </p>
        </div>

        {/* Terminal window */}
        <motion.div
          className="rounded-2xl border border-white/8 bg-[#0a0a0a] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-[11px] font-mono text-white/20">miumedia -- acquisition-system</span>
          </div>

          {/* Terminal content — parent triggers once visible, children stagger */}
          <motion.div
            className="p-6 font-mono text-sm space-y-1 min-h-[420px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {lines.map((line, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.25 } },
                }}
                className="flex items-start gap-4"
              >
                <span
                  className={
                    line.type === "command"
                      ? "text-[#FF8500]"
                      : line.type === "comment"
                      ? "text-white/20"
                      : line.type === "success"
                      ? "text-green-400"
                      : line.type === "blank"
                      ? ""
                      : "text-white/40"
                  }
                >
                  {line.content}
                </span>
                {line.annotation && (
                  <span className="text-white/20 text-[11px] mt-0.5 flex-shrink-0">
                    // {line.annotation}
                  </span>
                )}
              </motion.div>
            ))}
            {/* Blinking cursor */}
            <motion.span
              className="inline-block w-2 h-4 bg-[#FF8500]/70 ml-0"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
