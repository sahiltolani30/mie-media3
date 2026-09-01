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
  const [visibleCount, setVisibleCount] = useState<number>(8); // Show 8 by default

  // Flatten videos
  const allVideos = useMemo(() => {
    return featuredWorkVideos.flatMap(cat =>
      cat.slots.map(slot => ({ ...slot, categoryId: cat.id }))
    );
  }, [featuredWorkVideos]);

  // Get unique categories for pills WITH counts
  const categories = useMemo(() => {
    const cats = featuredWorkVideos.map(cat => ({
      id: cat.id,
      label: categoryLabels[cat.id] || cat.id,
      count: cat.slots.length
    }));
    return [{ id: "all", label: "All Work", count: allVideos.length }, ...cats];
  }, [featuredWorkVideos, allVideos.length]);

  // Filter videos based on selection
  const filteredVideos = useMemo(() => {
    if (activeCategory === "all") return allVideos;
    return allVideos.filter(v => v.categoryId === activeCategory);
  }, [activeCategory, allVideos]);

  // Reset visible count when category changes
  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setVisibleCount(8);
  };

  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  return (
    <section className="w-full bg-[#050505] py-20 md:py-32 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-8 max-w-[1400px]">
        
        <div className="text-center mb-12 md:mb-20 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Work</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto font-light">
            High-converting vertical video creatives across every format.
          </p>
        </div>

        {/* Category Pills (Scrollable on Mobile) */}
        <div className="flex overflow-x-auto no-scrollbar md:flex-wrap items-center md:justify-center gap-3 mb-12 md:mb-16 px-4 pb-2 md:pb-0 snap-x">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`snap-start whitespace-nowrap flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "bg-[#FF8500] text-white shadow-[0_0_20px_rgba(255,133,0,0.4)]" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Container: Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="px-4 md:px-0">
          <motion.div 
            layout
            className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar"
          >
            <AnimatePresence mode="popLayout">
              {visibleVideos.map((video, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={`${video.categoryId}-${video.label}-${idx}`}
                  className="flex flex-col group cursor-pointer snap-center shrink-0 w-[280px] md:w-auto"
                  onClick={() => setFullscreenPhoto(video)}
                >
                  {/* Thumbnail Card */}
                  <div className="relative w-full aspect-[9/16] rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 mb-4 md:mb-5 shadow-2xl transition-transform duration-500 md:group-hover:-translate-y-2">
                    {(video.video || video.cardVideo) ? (
                      <video
                        muted
                        loop
                        autoPlay
                        playsInline
                        poster={video.image}
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        {(video.webm || video.cardWebm) && <source src={(video.webm || video.cardWebm)!} type="video/webm" />}
                        <source src={(video.video || video.cardVideo)!} type="video/mp4" />
                      </video>
                    ) : video.image ? (
                      <img 
                        src={video.image} 
                        alt={video.label}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : null}

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 pointer-events-none" />

                    {/* Meta Badge inside card */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                      <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono tracking-widest text-white uppercase">
                        {categoryLabels[video.categoryId]}
                      </span>
                    </div>

                    {/* Elegant Play Button (Visible on hover for desktop, subtle on mobile) */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 md:group-hover:scale-100 transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-[#FF8500] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,133,0,0.5)]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clean Title Below */}
                  <div className="flex flex-col px-2 text-center">
                    <h3 className="text-white/90 text-sm md:text-base font-medium leading-snug group-hover:text-[#FF8500] transition-colors line-clamp-2">
                      {video.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Load More Button (Desktop Only, since Mobile is horizontal scroll) */}
        {hasMore && (
          <div className="mt-12 hidden md:flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm flex items-center gap-2"
            >
              Load More Work
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        )}
      </div>

      <VideoFullscreenOverlay photo={fullscreenPhoto} onClose={() => setFullscreenPhoto(null)} />
    </section>
  );
}
