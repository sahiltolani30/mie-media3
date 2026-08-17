"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsappLogo, ArrowUpRight } from "@phosphor-icons/react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show after initial page entrance
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-end"
    >
      <motion.a
        href="https://wa.me/8429598149"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Miu Media on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative group flex items-center gap-3 p-2.5 md:p-3 rounded-full bg-zinc-950/80 hover:bg-zinc-900/90 border border-white/12 hover:border-[#FF8500]/40 backdrop-blur-2xl shadow-[0_12px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_28px_rgba(255,133,0,0.25)] cursor-pointer overflow-hidden transition-colors duration-300"
        whileTap={{ scale: 0.95 }}
      >
        {/* Ambient subtle amber hover spotlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8500]/15 via-[#FE7D13]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Icon & Live status dot */}
        <div className="relative flex items-center justify-center shrink-0">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 group-hover:text-[#FF8500] group-hover:bg-[#FF8500]/10 transition-colors duration-300">
            <WhatsappLogo size={22} weight="fill" className="transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Active live indicator ring & dot */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" style={{ animationDuration: "2.5s" }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-zinc-950" />
          </span>
        </div>

        {/* Morphing Expanding Label on Desktop */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0, opacity: 0, x: -8 }}
              animate={{ width: "auto", opacity: 1, x: 0 }}
              exit={{ width: 0, opacity: 0, x: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex items-center gap-2 pr-2.5 whitespace-nowrap overflow-hidden"
            >
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-tight text-white flex items-center gap-1">
                  Chat with us
                  <ArrowUpRight size={12} weight="bold" className="text-[#FF8500]" />
                </span>
                <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
                  Typically replies in 5m
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
}


