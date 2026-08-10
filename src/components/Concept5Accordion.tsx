"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";
import { featuredWorkVideos } from "@/config/videos";
import MobileSnapScroll from "@/components/mobile-ux/MobileSnapScroll";

// Silently preloads all videos after page is fully loaded and idle
function VideoPreloader({ files }: { files: { video: string; webm?: string }[] }) {
  const [ready, setReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const start = () => {
      // Wait 2s after load so critical page resources finish first
      const timer = setTimeout(() => setReady(true), 2000);
      return timer;
    };

    let timer: ReturnType<typeof setTimeout>;
    if (document.readyState === "complete") {
      timer = start();
    } else {
      const onLoad = () => { timer = start(); };
      window.addEventListener("load", onLoad, { once: true });
      return () => window.removeEventListener("load", onLoad);
    }
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none", left: -9999 }}>
      {files.slice(0, currentIndex + 1).map((file, index) => (
        <video
          key={file.video}
          muted
          playsInline
          preload="auto"
          onLoadedData={() => {
            if (index === currentIndex && currentIndex < files.length - 1) {
              setCurrentIndex(i => i + 1);
            }
          }}
          onError={() => {
             // If a video fails to load, skip to the next one to prevent stalling
            if (index === currentIndex && currentIndex < files.length - 1) {
              setCurrentIndex(i => i + 1);
            }
          }}
        >
          {file.webm && <source src={`${file.webm}#t=0.001`} type="video/webm" />}
          <source src={`${file.video}#t=0.001`} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}


// -------------------------------------------------------------------------
// SERVICE COPY - edit text here
// Videos/images are managed separately in src/config/videos.ts
// -------------------------------------------------------------------------
const servicesMeta = [
  {
    id: "strategy",
    title: "Talking Head Videos",
    tagline: "Professional. Engaging. Authority-building.",
    description: "We transform raw footage into polished, authority-building content. Professional edits and pacing that keeps viewers watching.",
    folder: "Talking Head Videos",
  },
  {
    id: "social",
    title: "Short Form Clipping",
    tagline: "Viral. Efficient. Platform-optimized.",
    description: "Turn podcasts, interviews and long-form videos into dozens of high-performing Shorts, Reels and TikToks.",
    folder: "Short Form Clipping",
  },
  {
    id: "faceless",
    title: "Faceless Videos",
    tagline: "Scripted. Story-driven. Anonymous.",
    description: "Scripted, edited and motion-designed videos that tell compelling stories without needing to appear on camera.",
    folder: "Faceless Videos",
  },
  {
    id: "video",
    title: "AI UGC Videos",
    tagline: "Authentic. Scalable. High-converting.",
    description: "Creator-style video ads generated at scale. Built for Meta, TikTok and YouTube campaigns that actually convert.",
    folder: "AI UGC Videos",
  },
];

// Merge copy with video/image config
const services = servicesMeta.map((meta) => {
  const videoConfig = featuredWorkVideos.find((v) => v.id === meta.id);
  const photos = (videoConfig?.slots ?? []).map((slot, i) => ({
    id: i + 1,
    image: slot.image,
    video: slot.video ?? undefined,
    webm: slot.webm ?? undefined,
  }));
  return { ...meta, photos };
});

export default function Concept5Accordion() {
  const [activeId, setActiveId] = useState<string>("strategy");

  return (
    <section className="w-full bg-[#0a0a0a] text-white overflow-hidden py-24 relative">
        {/* Preload all videos silently to ensure instant playback */}
        <VideoPreloader 
          files={services.flatMap(s => s.photos.filter(p => p.video).map(p => ({ 
            video: p.video as string, 
            webm: p.webm as string | undefined 
          })))} 
        />

      {/* Cinematic Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0 select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div 
              className="text-[18vw] font-black leading-none text-transparent tracking-tighter whitespace-nowrap opacity-30"
              style={{ WebkitTextStroke: "2px rgba(255, 133, 0, 0.15)" }}
            >
              {services.find(s => s.id === activeId)?.title.toUpperCase()}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-20 text-center mb-16 pt-8 container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Featured Work</span>
        </h2>
        <p className="text-lg text-[#DEDEDE] max-w-2xl mx-auto">
          Explore the high-performing content we create for brands, creators and growing businesses.
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* MOBILE & TABLET LAYOUT: Horizontal Snap Scroll (hidden on Desktop) */}
        <div className="block lg:hidden -mx-4 sm:mx-0">
          <MobileSnapScroll />
        </div>

        {/* DESKTOP LAYOUT: Split Screen Accordion (hidden on Mobile) */}
        <div className="hidden lg:flex flex-row gap-24 min-h-[800px]">
          
          {/* Left: Accordion Titles */}
          <div className="w-1/2 flex flex-col justify-center">
            {services.map((service, index) => {
              const isActive = activeId === service.id;
              
              return (
                <div 
                  key={service.id} 
                  className="group cursor-pointer py-6 border-b border-white/10 last:border-0"
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                >
                  <div className="flex items-center gap-6 mb-2 relative">
                    <span className={`text-sm font-mono tracking-widest transition-colors duration-500 ${isActive ? 'text-[#FF8500]' : 'text-white/20'}`}>
                      0{index + 1}
                    </span>
                    
                    {/* Animated Line Indicator */}
                    <motion.div 
                      initial={false}
                      animate={{ width: isActive ? 40 : 0, opacity: isActive ? 1 : 0 }}
                      className="h-px bg-[#FF8500] hidden md:block"
                    />

                    <motion.h2 
                      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter transition-all duration-500 origin-left ${isActive ? 'text-white scale-[1.02] md:scale-105' : 'text-white/20 group-hover:text-white/50 group-hover:translate-x-2 md:group-hover:translate-x-4'}`}
                    >
                      {service.title}
                    </motion.h2>
                  </div>
                  
                  {/* Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-4 pl-12">
                          <h3 className="text-2xl font-light text-[#FF8500] mb-4 italic">
                            "{service.tagline}"
                          </h3>
                          <p className="text-lg text-white/60 leading-relaxed max-w-md">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Visuals */}
          <div className="w-1/2 flex items-center justify-center relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                activeId === service.id && (
                  <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                  >
                    <div className="scale-100 relative z-10 w-[400px] h-[500px] flex items-center justify-center">
                      <InteractiveFolderGallery 
                        folderName={service.folder}
                        photos={service.photos}
                        dragHintText="Drag any video down to close"
                      />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
