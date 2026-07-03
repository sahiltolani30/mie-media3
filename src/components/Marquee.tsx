"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";

function ParallaxText({ children, baseVelocity = 100 }: { children: React.ReactNode; baseVelocity: number }) {
  const baseX = useMotionValue(0);

  // Wrap the value to create infinite effect
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    moveBy += directionFactor.current * moveBy * 0;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap m-0 border-y border-white/5 bg-white/[0.02] py-6">
      <motion.div className="flex flex-nowrap items-center font-semibold uppercase tracking-widest text-sm text-white/40" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  const words = [
    "Video Production",
    "Meta Ads Management",
    "Social Media Growth",
    "Content Strategy",
    "Lead Generation",
    "Short-Form Video",
    "Brand Authority",
    "Client Acquisition",
    "Script Writing",
    "Campaign Optimisation"
  ];

  return (
    <section className="relative overflow-hidden w-full bg-black py-12">
      <ParallaxText baseVelocity={-2}>
        {words.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-8">{word}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8500]"></span>
          </span>
        ))}
      </ParallaxText>
    </section>
  );
}
