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

export default function ConceptD_ReelWall({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const [fullscreenPhoto, setFullscreenPhoto] = useState<VideoSlot | null>(null);

  // Flatten and selectively sample videos to create a good "Reel Wall"
  const wallVideos = useMemo(() => {
    const all = featuredWorkVideos.flatMap(cat =>
      cat.slots.map(slot => ({ ...slot, categoryId: cat.id }))
    );
    // Limit to 6-8 videos for a tight wall, maybe taking first 2 from each category
    const selected = [];
    for (const cat of featuredWorkVideos) {
      selected.push(...cat.slots.slice(0, 2).map(s => ({ ...s, categoryId: cat.id })));
    }
    return selected.slice(0, 6); // Max 6 for 3x2 grid
  }, [featuredWorkVideos]);

  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 min-h-screen relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8500]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
            Concept 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Reel Wall</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
            No navigation. No hover states. The work speaks for itself immediately.
          </p>
        </div>

        {/* The Wall Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[300px] sm:auto-rows-[400px] md:auto-rows-[450px] gap-4 md:gap-6">
          {wallVideos.map((video, idx) => (
            <motion.div
              key={`${video.categoryId}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl overflow-hidden bg-[#111] group cursor-pointer border border-white/5 shadow-2xl ${
                idx === 0 || idx === 3 ? "md:row-span-2" : "" // Add organic varying heights on desktop
              }`}
              onClick={() => setFullscreenPhoto(video)}
            >
              {/* Autoplaying Video */}
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

              {/* Permanent Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-end">
                  {/* Subtle Sound Icon to hint that it has audio on click */}
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/50 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  </div>
                </div>

                <div className="flex justify-start">
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded border border-white/20 text-xs font-medium text-white/90">
                    {categoryLabels[video.categoryId] || video.categoryId}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoFullscreenOverlay photo={fullscreenPhoto} onClose={() => setFullscreenPhoto(null)} />
    </section>
  );
}
