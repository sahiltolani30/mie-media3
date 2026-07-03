"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FounderStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["4%", "0%"]);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050505] py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Founder Image / Card Side with Parallax */}
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full"
            >
              {/* Photo with Parallax */}
              <motion.img 
                src="https://picsum.photos/seed/dipansh-miu/800/1000" 
                alt="Dipansh - Founder of Miu Media" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                style={{ y: imageY }}
              />
              
              {/* Inner Glass Bezel */}
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[2rem] pointer-events-none"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-sm font-medium text-[#FF8500] uppercase tracking-widest mb-1"
                >
                  Founder
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-3xl font-medium text-white"
                >
                  Dipansh
                </motion.h3>
              </div>
            </motion.div>
            
            {/* Decorative floating element */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
              className="absolute -bottom-8 -right-8 lg:right-auto lg:-left-8 glass-card p-6 backdrop-blur-xl hidden md:block"
            >
              <p className="text-sm text-white/80 font-medium">Built from inside<br/>an architecture firm.</p>
            </motion.div>
          </div>

          {/* Typography Side with Parallax */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col justify-center"
            style={{ x: textX }}
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
                  The Origin
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                Brilliant at building physical spaces.<br/>
                <span className="italic text-white/40">Invisible in digital spaces.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-lg">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  At 17, I was selling digital art online. By 21, I had pivoted into brand design and found myself working as a marketing intern inside an architecture firm.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                >
                  That's where it hit me. I watched brilliant architects and visionary interior designers--masters of their physical craft--struggle to articulate their value online. They relied on word-of-mouth because their digital presence didn't match the premium quality of their work.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <strong className="text-white font-medium">Miu Media was born from this exact insight.</strong> We exist to bridge the gap between your physical masterpieces and your digital authority.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
