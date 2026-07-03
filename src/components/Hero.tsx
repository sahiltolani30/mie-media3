"use client";

import { motion, useMotionValue, useTransform, useScroll, Variants } from "framer-motion";
import { useRef } from "react";

function FloatingOrb() {
  return (
    <motion.div
      className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8500]/20 rounded-full blur-[120px] pointer-events-none"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.2, 0.35, 0.2],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-x-hidden"
    >
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: bgY }}>
        <img
          src="https://picsum.photos/seed/miu-arch-2/1920/1080"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        {/* Vantablack Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        {/* Animated glowing amber orb */}
        <FloatingOrb />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12"
        style={{ opacity: contentOpacity }}
      >
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow Tag */}
            <motion.div
              variants={childVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6 md:mb-8"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">
                Content-Powered Client Acquisition
              </span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05] font-semibold text-white mb-6 md:mb-8 max-w-[800px]"
            >
              Turn Your Expertise Into a <br />
              <span className="text-gradient-primary">Predictable Client Acquisition System</span>
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="text-lg md:text-xl text-white/60 leading-relaxed max-w-[50ch] mb-8 md:mb-12"
            >
              We produce <strong className="text-white">high-converting video content</strong>, manage your <strong className="text-white">social media presence</strong>, and run performance-driven <strong className="text-white">Meta ad campaigns</strong> -- so <strong className="text-white">qualified leads</strong> come to you, consistently.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#book"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#FF8500] px-8 py-4 text-base font-semibold text-black transition-all active:scale-[0.98] hover:bg-[#FE7D13] shadow-[0_0_40px_-10px_rgba(255,133,0,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,133,0,0.7)]"
              >
                <span>Book a free strategy call</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 border border-white/15 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                See how it works
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
