"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceVideos, VideoSlot } from "@/config/videos";
import { VideoFullscreenOverlay } from "./VideoFullscreenOverlay";

const categoryLabels: Record<string, string> = {
  strategy: "Talking Head",
  social: "Short Form",
  faceless: "Faceless",
  video: "AI UGC",
};

export default function ConceptI_SwipeDeck({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const [fullscreenPhoto, setFullscreenPhoto] = useState<VideoSlot | null>(null);

  const allVideos = useMemo(() => {
    return featuredWorkVideos.flatMap(cat =>
      cat.slots.map(slot => ({ ...slot, categoryId: cat.id }))
    );
  }, [featuredWorkVideos]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allVideos.length);
  };

  const swipePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allVideos.length) % allVideos.length);
  };

  // Helper to determine the visual stacking order and transform of a card
  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + allVideos.length) % allVideos.length;
    
    // Only show current and next 2 cards
    if (diff === 0) return { scale: 1, y: 0, rotate: 2, zIndex: 30, opacity: 1 };
    if (diff === 1) return { scale: 0.95, y: -20, rotate: -3, zIndex: 20, opacity: 0.8 };
    if (diff === 2) return { scale: 0.9, y: -40, rotate: 4, zIndex: 10, opacity: 0.5 };
    
    return { scale: 0.8, y: -60, rotate: 0, zIndex: 0, opacity: 0 };
  };

  if (allVideos.length === 0) return null;

  return (
    <section className="w-full bg-[#111111] text-white py-32 min-h-[90vh] relative overflow-hidden flex flex-col items-center">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#FF8500]/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center h-full justify-between">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Concept 6: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Swipe Deck</span>
          </h2>
          <p className="text-lg text-white/50 max-w-lg mx-auto">
            Tactile, interactive, and inherently mobile-first.
          </p>
        </div>

        {/* Deck Container */}
        <div className="relative w-full max-w-[340px] h-[600px] flex items-center justify-center mt-12 mb-20">
          
          <AnimatePresence mode="popLayout">
            {allVideos.map((video, idx) => {
              const style = getCardStyle(idx);
              const isActive = (idx - currentIndex + allVideos.length) % allVideos.length === 0;

              // Do not render cards that are deep in the stack
              if (style.opacity === 0) return null;

              return (
                <motion.div
                  key={`${video.categoryId}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 100 }}
                  animate={{ 
                    opacity: style.opacity,
                    scale: style.scale,
                    y: style.y,
                    rotate: style.rotate,
                    zIndex: style.zIndex
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30, 
                    mass: 0.8 
                  }}
                  className={`absolute w-full aspect-[9/16] bg-black rounded-3xl overflow-hidden border-2 shadow-2xl ${
                    isActive ? "border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)] cursor-pointer" : "border-white/5 pointer-events-none"
                  }`}
                  onClick={() => {
                    if (isActive) setFullscreenPhoto(video);
                  }}
                >
                  {(video.video) ? (
                    <video
                      muted
                      loop
                      autoPlay={isActive}
                      playsInline
                      poster={video.image}
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      {(video.webm) && <source src={(video.webm)!} type="video/webm" />}
                      <source src={(video.video)!} type="video/mp4" />
                    </video>
                  ) : video.image ? (
                    <img 
                      src={video.image} 
                      alt={video.label}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : null}

                  {/* Dim overlay for non-active cards */}
                  {!isActive && <div className="absolute inset-0 bg-black/40" />}

                  {/* UI Overlay (only on active card) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute top-6 left-6 z-20 pointer-events-none">
                          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-mono tracking-widest text-white uppercase shadow-lg">
                            {categoryLabels[video.categoryId] || video.categoryId}
                          </span>
                        </div>

                        <div className="absolute bottom-8 left-6 right-6 z-20 pointer-events-none text-center">
                          <h3 className="text-xl font-medium text-white drop-shadow-md mb-2">
                            {video.label}
                          </h3>
                        </div>

                        {/* Swipe Hint overlay on edges */}
                        <div className="absolute inset-y-0 left-0 w-1/4 flex items-center justify-start p-4 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-r from-black/40 to-transparent">
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center" onClick={(e) => { e.stopPropagation(); swipePrev(); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end p-4 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-l from-black/40 to-transparent">
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center" onClick={(e) => { e.stopPropagation(); swipeNext(); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Manual Controls below deck */}
        <div className="flex items-center gap-8">
          <button 
            onClick={swipePrev}
            className="w-14 h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="text-white/50 font-mono text-sm tracking-widest">
            {currentIndex + 1} / {allVideos.length}
          </div>

          <button 
            onClick={swipeNext}
            className="w-14 h-14 rounded-full border border-white/20 bg-[#FF8500] hover:bg-[#FE7D13] text-white flex items-center justify-center transition-colors shadow-[0_0_20px_rgba(255,133,0,0.3)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      </div>

      <VideoFullscreenOverlay photo={fullscreenPhoto} onClose={() => setFullscreenPhoto(null)} />
    </section>
  );
}
