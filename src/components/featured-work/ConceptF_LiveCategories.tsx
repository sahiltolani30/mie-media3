"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceVideos, VideoSlot } from "@/config/videos";
import { VideoFullscreenOverlay } from "./VideoFullscreenOverlay";

const categories = [
  { id: "strategy", title: "Talking Head", tagline: "Professional & Engaging" },
  { id: "social", title: "Short Form", tagline: "Viral & Platform-optimized" },
  { id: "faceless", title: "Faceless", tagline: "Story-driven & Anonymous" },
  { id: "video", title: "AI UGC", tagline: "Authentic & High-converting" },
];

export default function ConceptF_LiveCategories({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("strategy");
  const [fullscreenPhoto, setFullscreenPhoto] = useState<VideoSlot | null>(null);

  // Get active videos for the right panel
  const activeVideos = featuredWorkVideos.find(v => v.id === activeCategory)?.slots || [];

  return (
    <section className="w-full bg-[#111111] text-white py-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Concept 3: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Live Categories</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            The navigation itself is the content. Videos play inside the category buttons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 min-h-[600px]">
          
          {/* Left Panel: Category Buttons (4 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              // Get the first video of this category to use as the background texture
              const bgVideo = featuredWorkVideos.find(v => v.id === cat.id)?.slots[0];

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative w-full h-32 md:h-40 rounded-2xl overflow-hidden text-left transition-all duration-500 group ${
                    isActive ? "ring-2 ring-[#FF8500] ring-offset-4 ring-offset-[#111111]" : "hover:scale-[1.02]"
                  }`}
                >
                  {/* Background Video Texture */}
                  {bgVideo && (bgVideo.video) && (
                    <video
                      muted
                      loop
                      autoPlay
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        isActive ? "opacity-60" : "opacity-20 group-hover:opacity-40"
                      }`}
                    >
                      <source src={(bgVideo.video)!} type="video/mp4" />
                    </video>
                  )}

                  {/* Gradient Overlay for Text Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-black/80 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-80"}`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center">
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                      {cat.title}
                    </h3>
                    <p className={`mt-1 font-medium transition-colors duration-500 ${isActive ? "text-[#FF8500]" : "text-white/40"}`}>
                      {cat.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Content Grid (8 cols) */}
          <div className="lg:col-span-7 relative bg-black/20 rounded-3xl p-6 md:p-8 border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 auto-rows-[250px] md:auto-rows-[300px] gap-4"
              >
                {activeVideos.length > 0 ? (
                  activeVideos.map((video, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-xl overflow-hidden cursor-pointer group bg-zinc-900 border border-white/10"
                      onClick={() => setFullscreenPhoto(video)}
                    >
                      {(video.video) ? (
                        <video
                          muted
                          loop
                          autoPlay
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        >
                          <source src={(video.video)!} type="video/mp4" />
                        </video>
                      ) : video.image ? (
                        <img 
                          src={video.image} 
                          alt={video.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : null}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-all duration-300 text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 flex items-center justify-center h-full">
                    <p className="text-white/40">No videos available for this category.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <VideoFullscreenOverlay photo={fullscreenPhoto} onClose={() => setFullscreenPhoto(null)} />
    </section>
  );
}
