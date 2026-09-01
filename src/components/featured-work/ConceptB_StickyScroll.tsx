"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import type { ServiceVideos, VideoSlot } from "@/config/videos";
import { VideoFullscreenOverlay } from "./VideoFullscreenOverlay";

// Data mapping matching the main page
const categories = [
  { id: "strategy", title: "Talking Head Videos", tagline: "Professional. Engaging. Authority-building.", desc: "We transform raw footage into polished, authority-building content." },
  { id: "social", title: "Short Form Clipping", tagline: "Viral. Efficient. Platform-optimized.", desc: "Turn podcasts and interviews into dozens of high-performing Shorts." },
  { id: "faceless", title: "Faceless Videos", tagline: "Scripted. Story-driven. Anonymous.", desc: "Scripted, edited and motion-designed videos that tell compelling stories." },
  { id: "video", title: "AI UGC Videos", tagline: "Authentic. Scalable. High-converting.", desc: "Creator-style video ads generated at scale." },
];

export default function ConceptB_StickyScroll({ featuredWorkVideos }: { featuredWorkVideos: ServiceVideos[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<VideoSlot | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate active index based on scroll position (4 categories = 0 to 3)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map 0-1 to 0-3
      let index = Math.floor(latest * categories.length);
      if (index >= categories.length) index = categories.length - 1;
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Horizontal scroll for the right panel content
  // We want the horizontal strip to move smoothly based on vertical scroll
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Prepare all videos in a single linear array for the horizontal strip
  const allVideos = categories.flatMap(cat => {
    const categoryData = featuredWorkVideos.find(v => v.id === cat.id);
    return (categoryData?.slots || []).map(slot => ({ ...slot, categoryId: cat.id }));
  });

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#0a0a0a] relative"
      style={{ height: "400vh" }} // 400vh creates a long scrollable area
    >
      {/* Sticky Container - exactly 1 screen high */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row border-t border-white/10">
        
        {/* Left Panel - Text Info (50% width on desktop) */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-[#0a0a0a] z-20 relative shadow-[20px_0_40px_-20px_rgba(0,0,0,0.8)]">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-white mb-2">
              Concept B: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Sticky Scroll</span>
            </h2>
            <p className="text-sm text-white/50">Cinematic storytelling via vertical scroll</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[#FF8500] font-mono tracking-widest text-sm mb-4 block">
                0{activeIndex + 1}
              </span>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
                {categories[activeIndex].title}
              </h3>
              <p className="text-xl font-light text-white/80 mb-4 italic">
                "{categories[activeIndex].tagline}"
              </p>
              <p className="text-white/60 leading-relaxed max-w-md">
                {categories[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Panel - Horizontal Video Strip (50% width on desktop) */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-full flex items-center overflow-hidden bg-black/50 relative">
          
          <motion.div 
            className="flex gap-8 px-8 items-center h-full w-max"
            style={{ x: xTransform }}
          >
            {allVideos.map((video, idx) => {
              // Highlight the cards that belong to the active category
              const isActiveCategory = video.categoryId === categories[activeIndex].id;
              
              return (
                <div 
                  key={`${video.categoryId}-${idx}`}
                  className={`relative w-[280px] md:w-[350px] aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shrink-0 transition-all duration-700 ${
                    isActiveCategory ? 'opacity-100 scale-100 shadow-[0_0_30px_rgba(255,133,0,0.2)]' : 'opacity-40 scale-90 grayscale-[50%]'
                  }`}
                  onClick={() => setFullscreenPhoto(video)}
                >
                  {video.image && (
                    <img 
                      src={video.image} 
                      alt={video.label}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Overlay play button indicator */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </div>
                  
                  {/* Optional: Add autoplay on hover here just like Concept A */}
                  {isActiveCategory && (video.video) && (
                    <HoverVideoPlayer 
                      videoSrc={video.video!} 
                      webmSrc={video.webm || undefined} 
                    />
                  )}
                </div>
              );
            })}
          </motion.div>
          
          {/* Edge gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
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
      className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500"
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
        className="w-full h-full object-cover"
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
