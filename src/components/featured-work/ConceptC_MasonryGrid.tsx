"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceVideos, VideoSlot } from "@/config/videos";
import { VideoFullscreenOverlay } from "./VideoFullscreenOverlay";

const categories = [
  { id: "all", label: "All Work" },
  { id: "strategy", label: "Talking Head" },
  { id: "social", label: "Short Form" },
  { id: "faceless", label: "Faceless" },
  { id: "video", label: "AI UGC" },
];

export default function ConceptC_MasonryGrid({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [fullscreenPhoto, setFullscreenPhoto] = useState<VideoSlot | null>(null);

  // Flatten videos and pre-calculate random heights for masonry effect
  // We use useMemo but seed the randomness so it doesn't jump on re-renders
  const allVideos = useMemo(() => {
    let index = 0;
    return featuredWorkVideos.flatMap(category => 
      category.slots.map(slot => {
        // Create deterministic "random" heights for masonry look
        // 0 = square, 1 = tall, 2 = wide
        const heightType = (index++) % 3;
        
        let aspectClass = "aspect-square";
        if (heightType === 1) aspectClass = "aspect-[4/5] sm:row-span-2";
        if (heightType === 2) aspectClass = "aspect-[16/9] sm:col-span-2";

        // Mobile fallback overrides to standard aspect if needed, but modern CSS handles span well
        return { 
          ...slot, 
          categoryId: category.id,
          aspectClass,
          uid: `${category.id}-${index}`
        };
      })
    );
  }, [featuredWorkVideos]);

  const filteredCount = activeCategory === "all" 
    ? allVideos.length 
    : allVideos.filter(v => v.categoryId === activeCategory).length;

  return (
    <section className="w-full bg-[#111111] text-white py-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Concept C: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Masonry Filter</span>
            </h2>
            <p className="text-lg text-white/50">
              Maximum transparency. Everything visible upfront.
            </p>
          </div>

          <div className="flex flex-col items-end gap-4 w-full md:w-auto">
            <span className="text-sm font-mono text-white/40">Showing {filteredCount} videos</span>
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat.id 
                      ? "bg-[#FF8500] text-white" 
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Grid Masonry approximation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] gap-4">
          <AnimatePresence>
            {allVideos.map((video) => {
              const isMatch = activeCategory === "all" || video.categoryId === activeCategory;
              
              return (
                <motion.div
                  key={video.uid}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isMatch ? 1 : 0.1,
                    scale: isMatch ? 1 : 0.95,
                    filter: isMatch ? "blur(0px)" : "blur(4px)",
                    pointerEvents: isMatch ? "auto" : "none",
                  }}
                  transition={{ duration: 0.4 }}
                  className={`relative rounded-xl overflow-hidden bg-black group cursor-pointer border border-white/5 ${video.aspectClass}`}
                  onClick={() => {
                    if (isMatch) setFullscreenPhoto(video);
                  }}
                >
                  {video.image && (
                    <img 
                      src={video.image} 
                      alt={video.label}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Play video on hover */}
                  {(video.video) && (
                    <HoverVideoPlayer 
                      videoSrc={video.video!} 
                      webmSrc={video.webm || undefined} 
                    />
                  )}

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                  
                  {/* Bottom badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-medium text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {categories.find(c => c.id === video.categoryId)?.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <VideoFullscreenOverlay photo={fullscreenPhoto} onClose={() => setFullscreenPhoto(null)} />
    </section>
  );
}

function HoverVideoPlayer({ videoSrc, webmSrc }: { videoSrc: string; webmSrc?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      onMouseEnter={() => videoRef.current?.play().catch(()=>{})}
      onMouseLeave={() => {
        if(videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover scale-[1.02]" // slight scale to hide edges
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
