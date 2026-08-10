"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PreloaderScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after 3.2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);
    
    // Prevent scrolling while loading screen is active
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          <div className="relative flex flex-col items-center">
            {/* The brand name fades in and moves slightly up */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.25em] text-white uppercase text-center"
            >
              Miu Media
            </motion.h1>

            {/* The line draws beneath it */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1 }}
              className="mt-6 h-[1px] bg-white origin-center w-full max-w-[200px]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
