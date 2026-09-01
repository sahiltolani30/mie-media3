"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceVideos, VideoSlot } from "@/config/videos";
import { VideoFullscreenOverlay } from "./VideoFullscreenOverlay";

const categoryLabels: Record<string, string> = {
  strategy: "Talking Head",
  social: "Short Form",
  faceless: "Faceless",
  video: "AI UGC",
};

export default function ConceptG_PhoneCarousel({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const allVideos = useMemo(() => {
    return featuredWorkVideos.flatMap(cat =>
      cat.slots.map(slot => ({ ...slot, categoryId: cat.id }))
    );
  }, [featuredWorkVideos]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const activeVideo = allVideos[activeIndex];
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance
  const resetAutoAdvance = () => {
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    autoPlayTimeoutRef.current = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % allVideos.length);
    }, 6000);
  };

  useEffect(() => {
    if (allVideos.length > 0) resetAutoAdvance();
    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    };
  }, [activeIndex, allVideos]);

  const handleManualSelection = (index: number) => {
    setActiveIndex(index);
    resetAutoAdvance();
  };

  if (allVideos.length === 0) return null;

  return (
    <section className="w-full bg-[#050505] text-white py-32 min-h-screen relative overflow-hidden">
      
      {/* Dynamic Background Glow matching category */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px] opacity-10 pointer-events-none"
        animate={{
          backgroundColor: activeVideo.categoryId === 'strategy' ? '#FF8500' :
                           activeVideo.categoryId === 'social' ? '#FE7D13' :
                           activeVideo.categoryId === 'faceless' ? '#FF9149' : '#ffffff'
        }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Concept 4: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Phone Carousel</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Context is everything. See the content exactly as your audience will—in a native 9:16 vertical feed.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          {/* Main Phone Mockup Player */}
          <div className="relative w-full max-w-[320px] shrink-0">
            {/* Dynamic Category Label Above Phone */}
            <div className="absolute -top-12 left-0 right-0 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVideo.categoryId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono tracking-widest text-[#FF8500] uppercase"
                >
                  {categoryLabels[activeVideo.categoryId]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Minimal Phone Frame */}
            <div 
              className="relative w-full aspect-[9/16] bg-black rounded-[2.5rem] border-[8px] border-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,1)] overflow-hidden cursor-pointer group flex flex-col"
              onClick={() => setIsFullscreen(true)}
            >
              {/* Fake Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20 flex justify-center items-center gap-2">
                <div className="w-12 h-1.5 bg-black rounded-full opacity-50" />
                <div className="w-1.5 h-1.5 bg-black rounded-full opacity-50" />
              </div>

              {/* Video Player */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVideo.label}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full z-10 bg-zinc-900"
                >
                  {(activeVideo.video) ? (
                    <video
                      muted
                      loop
                      autoPlay
                      playsInline
                      poster={activeVideo.image}
                      className="w-full h-full object-cover"
                    >
                      {(activeVideo.webm) && <source src={(activeVideo.webm)!} type="video/webm" />}
                      <source src={(activeVideo.video)!} type="video/mp4" />
                    </video>
                  ) : activeVideo.image ? (
                    <img src={activeVideo.image} alt={activeVideo.label} className="w-full h-full object-cover" />
                  ) : null}
                </motion.div>
              </AnimatePresence>

              {/* UI Overlay on Video */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-5 right-12 z-20 pointer-events-none">
                <p className="text-white font-medium text-sm drop-shadow-md leading-tight mb-2">
                  {activeVideo.label}
                </p>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF8500]" />
                  </div>
                  Miu Media
                </div>
              </div>

              {/* Fake Social Actions */}
              <div className="absolute bottom-6 right-3 z-20 flex flex-col gap-4 items-center pointer-events-none text-white/90">
                <div className="flex flex-col items-center gap-1 drop-shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <span className="text-[10px]">12K</span>
                </div>
                <div className="flex flex-col items-center gap-1 drop-shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <span className="text-[10px]">481</span>
                </div>
              </div>

              {/* Hover Play Button */}
              <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
              </div>

            </div>
          </div>

          {/* Right/Bottom Side: Thumbnail Strip */}
          <div className="w-full md:w-auto md:flex-1 max-w-full overflow-x-auto hide-scrollbar flex md:flex-wrap items-center justify-start gap-4 p-4">
            {allVideos.map((video, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={`${video.categoryId}-${idx}`}
                  onClick={() => handleManualSelection(idx)}
                  className={`relative w-20 md:w-24 shrink-0 aspect-[9/16] rounded-xl overflow-hidden transition-all duration-300 ${
                    isActive 
                      ? "ring-2 ring-[#FF8500] ring-offset-2 ring-offset-[#050505] opacity-100 scale-105" 
                      : "opacity-40 hover:opacity-100 hover:scale-100 border border-white/10"
                  }`}
                >
                  {video.image ? (
                    <img src={video.image} alt={video.label} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-zinc-900" />
                  )}
                  {isActive && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#FF8500] shadow-[0_0_8px_rgba(255,133,0,1)]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>

      <VideoFullscreenOverlay photo={isFullscreen ? activeVideo : null} onClose={() => setIsFullscreen(false)} />
    </section>
  );
}
