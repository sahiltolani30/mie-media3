"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const nodes = [
  { x: 120, y: 80, label: "01", title: "Cold Market", desc: "Strangers with no context, no trust, no reason to buy." },
  { x: 300, y: 240, label: "02", title: "Organic Content", desc: "Video, articles, and social proof that build warm familiarity." },
  { x: 180, y: 420, label: "03", title: "Trust Established", desc: "Your audience knows, likes, and respects you before ever seeing an ad." },
  { x: 360, y: 580, label: "04", title: "Paid Acceleration", desc: "Ads shown to a warm, qualified audience convert at a fraction of the cost." },
  { x: 240, y: 740, label: "05", title: "Compounding Growth", desc: "Organic trust feeds paid performance. Paid reach feeds organic authority." },
];

const pathD = `M ${nodes[0].x} ${nodes[0].y} C ${nodes[0].x + 80} ${nodes[0].y + 100}, ${nodes[1].x - 80} ${nodes[1].y - 100}, ${nodes[1].x} ${nodes[1].y} C ${nodes[1].x + 80} ${nodes[1].y + 100}, ${nodes[2].x - 80} ${nodes[2].y - 100}, ${nodes[2].x} ${nodes[2].y} C ${nodes[2].x + 80} ${nodes[2].y + 100}, ${nodes[3].x - 80} ${nodes[3].y - 100}, ${nodes[3].x} ${nodes[3].y} C ${nodes[3].x + 80} ${nodes[3].y + 100}, ${nodes[4].x - 80} ${nodes[4].y - 100}, ${nodes[4].x} ${nodes[4].y}`;

export default function ApproachV2C2SVGPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] border-b border-white/5 py-20">
      <div className="absolute top-6 left-0 w-full text-center pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40">
            Approach Concept 2: SVG Path Drawing
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Static headline */}
        <div className="lg:sticky lg:top-32 self-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">Our Approach</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-6">
            A connected<br/>system. Not<br/>isolated<span className="text-[#FF8500]"> tactics.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-md">
            Every piece of our methodology feeds the next. Scroll to trace the journey from cold market to compounding growth.
          </p>
        </div>

        {/* Right: SVG journey */}
        <div className="relative">
          <svg
            viewBox="0 0 480 820"
            className="w-full max-w-sm mx-auto"
            style={{ height: "820px" }}
          >
            {/* Background path (grey) */}
            <path
              d={pathD}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Animated foreground path (orange) */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="#FF8500"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength }}
            />

            {/* Nodes */}
            {nodes.map((node, i) => (
              <g key={i}>
                {/* Outer ring */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="18"
                  fill="none"
                  stroke="rgba(255,133,0,0.3)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                />
                {/* Inner dot */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill="#FF8500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.05, type: "spring", stiffness: 400 }}
                  viewport={{ once: true }}
                />

                {/* Label number */}
                <motion.text
                  x={node.x}
                  y={node.y - 28}
                  textAnchor="middle"
                  fill="rgba(255,133,0,0.6)"
                  fontSize="10"
                  fontFamily="monospace"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {node.label}
                </motion.text>

                {/* Title (offset left or right alternately) */}
                <motion.foreignObject
                  x={node.x > 240 ? node.x - 220 : node.x + 30}
                  y={node.y - 24}
                  width="180"
                  height="80"
                  initial={{ opacity: 0, x: node.x > 240 ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="p-0">
                    <div className="text-white font-medium text-sm leading-tight mb-1">{node.title}</div>
                    <div className="text-white/40 text-[11px] leading-tight">{node.desc}</div>
                  </div>
                </motion.foreignObject>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
