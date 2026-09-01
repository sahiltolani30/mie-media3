"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceVideos, VideoSlot } from "@/config/videos";
import { VideoFullscreenOverlay } from "./VideoFullscreenOverlay";

// Categories metadata to match the video IDs and display nice labels
const categories = [
  { id: "all", label: "All Work" },
  { id: "strategy", label: "Talking Head" },
  { id: "social", label: "Short Form" },
  { id: "faceless", label: "Faceless" },
  { id: "video", label: "AI UGC" },
];

export default function ConceptA_TabbedGrid({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [fullscreenPhoto, setFullscreenPhoto] = useState<VideoSlot | null>(null);

  // Flatten all videos for "all" view, or filter by category
  const filteredVideos = useMemo(() => {
    if (activeCategory === "all") {
      return featuredWorkVideos.flatMap(category => 
        category.slots.map(slot => ({ ...slot, categoryId: category.id }))
      );
    }
    
    const categoryMatch = featuredWorkVideos.find(c => c.id === activeCategory);
    if (!categoryMatch) return [];
    
    return categoryMatch.slots.map(slot => ({ ...slot, categoryId: categoryMatch.id }));
  }, [featuredWorkVideos, activeCategory]);

  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Concept A: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Tabbed Grid</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Instant gratification. Zero learning curve. Videos autoplay on hover.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  isActive 
                    ? "text-white" 
                    : "text-white/60 hover:text-white hover:bg-white/5 border border-white/10"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activePillIndicator"
                    className="absolute inset-0 rounded-full bg-[#FF8500]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={`${video.categoryId}-${idx}-${video.label}`}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 group cursor-pointer border border-white/10 shadow-xl"
                onClick={() => setFullscreenPhoto(video)}
              >
                {/* Fallback Image */}
                {video.image && (
                  <img 
                    src={video.image} 
                    alt={video.label}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                )}
                
                {/* Hover Auto-play Video */}
                {(video.video) && (
                  <HoverVideoPlayer 
                    videoSrc={video.video!} 
                    webmSrc={video.webm || undefined} 
                    poster={video.image}
                  />
                )}

                {/* Overlay gradient & label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/20 mb-3 inline-block">
                      {categories.find(c => c.id === video.categoryId)?.label}
                    </span>
                  </div>
                  
                  {/* Play Icon Hint */}
                  <div className="w-10 h-10 rounded-full bg-[#FF8500] text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <VideoFullscreenOverlay photo={fullscreenPhoto} onClose={() => setFullscreenPhoto(null)} />
    </section>
  );
}

// Sub-component to handle hover-to-play cleanly
function HoverVideoPlayer({ videoSrc, webmSrc, poster }: { videoSrc: string; webmSrc?: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={poster}
        className="w-full h-full object-cover"
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
