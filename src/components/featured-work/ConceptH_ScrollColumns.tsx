"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import type { ServiceVideos, VideoSlot } from "@/config/videos";
import { VideoFullscreenOverlay } from "./VideoFullscreenOverlay";

const categoryLabels: Record<string, string> = {
  strategy: "Talking Head",
  social: "Short Form",
  faceless: "Faceless",
  video: "AI UGC",
};

// Infinite scroll column component
function ScrollColumn({ 
  videos, 
  direction, 
  speed = 1,
  onVideoClick 
}: { 
  videos: (VideoSlot & { categoryId: string })[], 
  direction: "up" | "down", 
  speed?: number,
  onVideoClick: (v: VideoSlot) => void
}) {
  const y = useMotionValue(direction === "down" ? -1500 : 0);
  const isHovered = useRef(false);
  
  // Duplicate array to create seamless loop
  const loopVideos = [...videos, ...videos, ...videos];

  useAnimationFrame((t, delta) => {
    if (isHovered.current) return; // Pause on hover
    
    let moveBy = direction === "up" ? speed * (delta / 16) : -speed * (delta / 16);
    let currentY = y.get();
    let newY = currentY - moveBy;
    
    // Reset logic for infinite loop (approximate height of one set)
    // 16/9 aspect ratio. width is max 280px. height is ~ 497px + 24px gap = ~521px per item.
    // Let's calculate exactly based on aspect ratio 9/16 and gap 1.5rem (24px)
    const setHeight = videos.length * (280 * (16/9) + 24);
    
    if (direction === "up" && newY <= -setHeight) {
      newY += setHeight;
    } else if (direction === "down" && newY >= 0) {
      newY -= setHeight;
    }
    
    y.set(newY);
  });

  return (
    <div 
      className="flex flex-col gap-6 w-full max-w-[280px]"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div 
        className="flex flex-col gap-6"
        style={{ y }}
      >
        {loopVideos.map((video, idx) => (
          <div
            key={`${video.categoryId}-${idx}`}
            onClick={() => onVideoClick(video)}
            className="relative w-full aspect-[9/16] bg-[#111] rounded-2xl overflow-hidden cursor-pointer group border border-white/10 shrink-0 shadow-xl"
          >
            {(video.video) ? (
              <video
                muted
                loop
                autoPlay
                playsInline
                poster={video.image}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                {(video.webm) && <source src={(video.webm)!} type="video/webm" />}
                <source src={(video.video)!} type="video/mp4" />
              </video>
            ) : video.image ? (
              <img 
                src={video.image} 
                alt={video.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : null}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono tracking-widest text-[#FF8500] uppercase">
                {categoryLabels[video.categoryId] || video.categoryId}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
              <p className="text-white font-medium text-sm leading-snug drop-shadow-md">
                {video.label}
              </p>
            </div>

            {/* Hover Play Button */}
            <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
              <div className="w-14 h-14 rounded-full bg-[#FF8500] flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,133,0,0.5)] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ConceptH_ScrollColumns({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const [fullscreenPhoto, setFullscreenPhoto] = useState<VideoSlot | null>(null);

  // Flatten and shuffle videos to distribute across 3 columns
  const allVideos = useMemo(() => {
    const flat = featuredWorkVideos.flatMap(cat =>
      cat.slots.map(slot => ({ ...slot, categoryId: cat.id }))
    );
    // Deterministic shuffle for stable render
    return flat.sort((a, b) => a.label.localeCompare(b.label));
  }, [featuredWorkVideos]);

  // Split into 3 columns
  const col1 = allVideos.filter((_, i) => i % 3 === 0);
  const col2 = allVideos.filter((_, i) => i % 3 === 1);
  const col3 = allVideos.filter((_, i) => i % 3 === 2);

  return (
    <section className="w-full bg-[#020202] py-24 min-h-[100vh] relative overflow-hidden flex flex-col justify-center">
      
      {/* Absolute Centered Header (sits above scrolling columns) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-8 py-10 md:px-16 md:py-16 rounded-[3rem] text-center max-w-3xl mx-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              The Vault
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-none">
            Concept 5: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Scroll Columns</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-lg mx-auto font-light">
            Overwhelming proof through sheer volume. No interaction required to feel the scale of production.
          </p>
        </div>
      </div>

      {/* Fade Overlays Top & Bottom */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#020202] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020202] to-transparent z-10 pointer-events-none" />

      {/* The Scrolling Columns Container */}
      <div className="relative z-0 w-full max-w-[1000px] mx-auto px-4 flex justify-center gap-4 md:gap-8 h-[100vh] items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div className="hidden md:block">
          <ScrollColumn videos={col1} direction="up" speed={0.5} onVideoClick={setFullscreenPhoto} />
        </div>
        <div className="mt-24">
          <ScrollColumn videos={col2} direction="down" speed={0.6} onVideoClick={setFullscreenPhoto} />
        </div>
        <div>
          <ScrollColumn videos={col3} direction="up" speed={0.4} onVideoClick={setFullscreenPhoto} />
        </div>
      </div>

      <VideoFullscreenOverlay photo={fullscreenPhoto} onClose={() => setFullscreenPhoto(null)} />
    </section>
  );
}
