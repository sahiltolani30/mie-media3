"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceVideos } from "@/config/videos";
import { VideoFullscreenOverlay } from "./VideoFullscreenOverlay";

const categories = [
  { id: "strategy", label: "Talking Head Videos" },
  { id: "social", label: "Short Form Clipping" },
  { id: "faceless", label: "Faceless Videos" },
  { id: "video", label: "AI UGC Videos" },
];

export default function ConceptE_SpotlightPlayer({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  // Extract all videos into a flat array for the carousel
  const allVideos = useMemo(() => {
    return categories.flatMap(cat => {
      const match = featuredWorkVideos.find(v => v.id === cat.id);
      return (match?.slots || []).map(slot => ({ ...slot, categoryId: cat.id }));
    });
  }, [featuredWorkVideos]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const activeVideo = allVideos[activeIndex];
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic
  const resetAutoAdvance = () => {
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    autoPlayTimeoutRef.current = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % allVideos.length);
    }, 8000); // 8 seconds per video
  };

  useEffect(() => {
    resetAutoAdvance();
    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    };
  }, [activeIndex]);

  const handleManualSelection = (index: number) => {
    setActiveIndex(index);
    resetAutoAdvance();
  };

  if (allVideos.length === 0) return null;

  return (
    <section className="w-full bg-[#050505] text-white py-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Concept 2: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Spotlight Player</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl">
              Focused. Cinematic. Let one high-quality piece of work hold all the attention.
            </p>
          </div>
          <button className="text-sm font-medium text-[#FF8500] hover:text-[#FE7D13] transition-colors border border-[#FF8500]/30 px-6 py-2.5 rounded-full hover:bg-[#FF8500]/10">
            View All Work
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Context & Categories */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-sm font-mono tracking-widest text-white/40 uppercase mb-8">Currently Playing</h3>
            
            <div className="flex flex-col gap-4">
              {categories.map((cat) => {
                const isActiveCategory = activeVideo.categoryId === cat.id;
                return (
                  <div 
                    key={cat.id} 
                    className={`p-4 rounded-xl transition-all duration-500 border ${
                      isActiveCategory 
                        ? "bg-white/5 border-white/10 shadow-[0_0_20px_rgba(255,133,0,0.05)]" 
                        : "border-transparent opacity-40 grayscale"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActiveCategory ? "bg-[#FF8500] shadow-[0_0_8px_rgba(255,133,0,1)] scale-100" : "bg-white/20 scale-0"}`} />
                      <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-500 ${isActiveCategory ? "text-white" : "text-white/60"}`}>
                        {cat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Main Player & Thumbnails */}
          <div className="lg:col-span-8 flex flex-col gap-6 order-1 lg:order-2">
            
            {/* Main Player */}
            <div 
              className="relative w-full aspect-video md:aspect-[16/10] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer group"
              onClick={() => setIsFullscreen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVideo.label} // forces re-render/animation on swap
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full"
                >
                  {(activeVideo.video) ? (
                    <video
                      muted
                      loop
                      autoPlay
                      playsInline
                      poster={activeVideo.image}
                      className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                    >
                      <source src={(activeVideo.video)!} type="video/mp4" />
                    </video>
                  ) : activeVideo.image ? (
                    <img 
                      src={activeVideo.image} 
                      alt={activeVideo.label}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </motion.div>
              </AnimatePresence>

              {/* Player Overlay Controls */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded border border-white/10 text-xs font-medium text-white/90">
                  {activeVideo.label}
                </div>
                <div className="w-8 h-8 rounded bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto pb-4 pt-2 hide-scrollbar w-full">
              {allVideos.map((video, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={`${video.categoryId}-${idx}`}
                    onClick={() => handleManualSelection(idx)}
                    className={`relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                      isActive ? "ring-2 ring-[#FF8500] ring-offset-2 ring-offset-[#050505] opacity-100 scale-105" : "opacity-40 hover:opacity-100 hover:scale-100"
                    }`}
                  >
                    {video.image ? (
                      <img src={video.image} alt={video.label} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-zinc-900" />
                    )}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <VideoFullscreenOverlay photo={isFullscreen ? activeVideo : null} onClose={() => setIsFullscreen(false)} />
    </section>
  );
}
