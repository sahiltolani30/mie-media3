"use client";

import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CALENDLY_EMBED_URL } from "@/config/booking";

// -------------------------------------------------------
// Skill: DESIGN_VARIANCE:9  MOTION_INTENSITY:9  VISUAL_DENSITY:3
// -------------------------------------------------------

// Magnetic button - useMotionValue only, never useState for physics
function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center gap-2.5 text-sm text-white/30 hover:text-white/70 transition-colors duration-300 group"
    >
      {children}
    </motion.a>
  );
}

// Floating ambient orb - perpetual, isolated
function AmbientOrb({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: "radial-gradient(circle, rgba(255,133,0,0.06) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// Stagger container variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

const trustPoints = [
  {
    number: "01",
    heading: "Content Audit",
    body: "We dissect what you are publishing, what is converting, and where the revenue leak is.",
  },
  {
    number: "02",
    heading: "Platform Strategy",
    body: "You receive a tailored, platform-specific content map built around your exact offer and buyer.",
  },
  {
    number: "03",
    heading: "ROI Projection",
    body: "We break down realistic 30/60/90-day outcomes. Numbers, not promises.",
  },
];

export default function BookContent() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Preconnect to Calendly domains to speed up DNS/TCP handshakes
    ReactDOM.preconnect("https://calendly.com");
    ReactDOM.preconnect("https://assets.calendly.com");
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#080808] text-white overflow-x-hidden">
      <Navbar />

      {/* Ambient background orbs - fixed, isolated */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <AmbientOrb x="10%" y="20%" size={500} delay={0} />
        <AmbientOrb x="70%" y="60%" size={400} delay={2} />
        <AmbientOrb x="45%" y="10%" size={300} delay={4} />
      </div>

      {/* Main layout - asymmetric 2-col */}
      <div className="relative z-10 min-h-[100dvh] grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] max-w-[1600px] mx-auto">

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:pl-20 lg:pr-8 pt-32 pb-16 lg:pt-36 lg:pb-24">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 mb-12">
              <span className="w-4 h-px bg-[#FF8500]/60" />
              Free &middot; 30 minutes &middot; Google Meet
            </span>
          </motion.div>

          {/* Massive left-aligned headline - DESIGN_VARIANCE:9 anti-center */}
          <motion.h1
            className="text-[clamp(3.5rem,8vw,7rem)] font-black tracking-tighter leading-[0.92] mb-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {["Book your", "Discovery", "Call."].map((word) => (
              <motion.span
                key={word}
                variants={itemVariants}
                className="block"
                style={{ color: word === "Call." ? "#FF8500" : "white" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub text */}
          <motion.p
            className="text-white/35 text-base leading-relaxed max-w-sm mb-16 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We review. We strategize. You decide.
            No pressure, no obligation.
          </motion.p>

          {/* Trust points - dividers only, NO cards */}
          <motion.div
            className="space-y-0 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.number}
                variants={itemVariants}
                className={`py-6 ${i > 0 ? "border-t border-white/5" : ""}`}
              >
                <div className="flex gap-6 items-start">
                  <span className="font-mono text-[10px] text-[#FF8500]/50 mt-1 flex-shrink-0 tracking-widest">
                    {point.number}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{point.heading}</div>
                    <div className="text-xs text-white/35 leading-relaxed">{point.body}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial - border-l only, no card */}
          <motion.div
            className="border-l-2 border-[#FF8500]/20 pl-6 mb-16"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
          >
            <p className="text-white/40 text-sm leading-relaxed italic mb-4">
              "The call alone was worth it. We had more clarity after 30 minutes than after
              6 months of guessing on our own."
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-black flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #FF8500, #FF5500)" }}
              >
                R
              </div>
              <div>
                <div className="text-xs font-semibold text-white/60">Ryan M.</div>
                <div className="text-[10px] text-white/25">E-commerce founder</div>
              </div>
            </div>
          </motion.div>

          {/* Magnetic back link - MOTION_INTENSITY:9 */}
          <MagneticLink href="/">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to homepage
          </MagneticLink>
        </div>

        {/* RIGHT COLUMN - Calendly with liquid glass per skill */}
        <motion.div
          className="relative lg:min-h-[100dvh] flex items-stretch"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
        >
          <div
            className="w-full m-4 lg:m-6 lg:mt-24 lg:mb-10 rounded-3xl overflow-hidden relative"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 80px -20px rgba(0,0,0,0.6)",
              background: "rgba(255,255,255,0.015)",
              backdropFilter: "blur(2px)",
            }}
          >
            {/* Top accent line - liquid glass refraction */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,133,0,0.3), transparent)",
              }}
            />

            {/* Skeleton Loading State */}
            <AnimatePresence>
              {!iframeLoaded && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a0a0a]"
                >
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
                    <div className="absolute inset-0 border-2 border-[#FF8500] border-t-transparent rounded-full animate-spin" />
                  </div>
                  <div className="mt-4 text-xs font-mono tracking-widest text-white/40 animate-pulse uppercase">
                    Loading Calendar
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <iframe
              src={CALENDLY_EMBED_URL}
              onLoad={() => setIframeLoaded(true)}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a discovery call with MiuMedia"
              style={{ display: "block", minHeight: 740 }}
              className="relative z-0"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 border-t border-white/[0.04] py-5 px-8 md:px-20">
        <p className="text-white/15 text-[11px] font-mono tracking-wide">
          MIU MEDIA &copy; {new Date().getFullYear()} &mdash; All sessions conducted via Google Meet
        </p>
      </div>
    </div>
  );
}
