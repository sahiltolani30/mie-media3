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

export default function ConceptJ_FilterableGrid({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [fullscreenPhoto, setFullscreenPhoto] = useState<VideoSlot | null>(null);

  // Flatten videos
  const allVideos = useMemo(() => {
    return featuredWorkVideos.flatMap(cat =>
      cat.slots.map(slot => ({ ...slot, categoryId: cat.id }))
    );
  }, [featuredWorkVideos]);

  // Get unique categories for pills
  const categories = useMemo(() => {
    const cats = featuredWorkVideos.map(cat => ({
      id: cat.id,
      label: categoryLabels[cat.id] || cat.id
    }));
    return [{ id: "all", label: "All Work" }, ...cats];
  }, [featuredWorkVideos]);

  // Filter videos based on selection
  const filteredVideos = useMemo(() => {
    if (activeCategory === "all") return allVideos;
    return allVideos.filter(v => v.categoryId === activeCategory);
  }, [activeCategory, allVideos]);

  return (
    <section className="w-full bg-[#050505] py-24 min-h-screen relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Concept 7: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Filterable Grid</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Based on your reference. Clean, organized, and highly functional.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "bg-[#FF8500] text-white shadow-[0_0_20px_rgba(255,133,0,0.4)]" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={`${video.categoryId}-${video.label}-${idx}`}
                className="flex flex-col group cursor-pointer"
                onClick={() => setFullscreenPhoto(video)}
              >
                {/* Thumbnail Card */}
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 mb-4 shadow-lg">
                  {(video.video || video.cardVideo) ? (
                    <video
                      muted
                      loop
                      autoPlay
                      playsInline
                      poster={video.image}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      {(video.webm || video.cardWebm) && <source src={(video.webm || video.cardWebm)!} type="video/webm" />}
                      <source src={(video.video || video.cardVideo)!} type="video/mp4" />
                    </video>
                  ) : video.image ? (
                    <img 
                      src={video.image} 
                      alt={video.label}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}

                  {/* Play Button Overlay (always visible in reference, but we can make it pop on hover) */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#FF8500] text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </div>
                </div>

                {/* Meta Info below card */}
                <div className="flex flex-col px-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      Instagram
                    </span>
                    <span className="text-[11px] text-white/50 font-medium uppercase tracking-wider">
                      {categoryLabels[video.categoryId]}
                    </span>
                  </div>
                  <h3 className="text-white text-sm font-medium leading-snug group-hover:text-[#FF8500] transition-colors line-clamp-2">
                    {video.label}
                  </h3>
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
