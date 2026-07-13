"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";

const services = [
  {
    id: "video",
    title: "AI UGC Video",
    tagline: "Cinematic. Educational. Authoritative.",
    description: "We produce short-form cinematic video content designed specifically to educate your audience and establish your brand as the undisputed authority in your niche.",
    folder: "Video.production",
    photos: [
      { id: 1, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
      { id: 2, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
      { id: 3, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "strategy",
    title: "Content Strategy",
    tagline: "Research-led. Targeted. Effective.",
    description: "Stop guessing what to post. We build research-led content strategies that directly target the exact questions and pain points your ideal high-ticket clients are searching for.",
    folder: "Strategy.docs",
    photos: [
      { id: 1, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
      { id: 2, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
      { id: 3, image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "social",
    title: "Social Media",
    tagline: "Engaging. Consistent. Growing.",
    description: "We handle the day-to-day execution. From community engagement to algorithmic growth hacking, we ensure your brand stays top-of-mind across all key platforms.",
    folder: "Social.media",
    photos: [
      { id: 1, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
      { id: 2, image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop" },
      { id: 3, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" },
    ]
  }
];

export default function Concept5Accordion() {
  const [activeId, setActiveId] = useState<string>("video");

  return (
    <section className="w-full bg-[#0a0a0a] text-white overflow-hidden py-24 relative">


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
          Explore the premium content, brand identities, and campaigns we've built for top architecture and interior design studios.
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24 min-h-[800px] relative z-10">
        
        {/* Left: Accordion Titles */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
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
                    className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter transition-all duration-500 origin-left ${isActive ? 'text-white scale-105' : 'text-white/20 group-hover:text-white/50 group-hover:translate-x-4'}`}
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
                      <div className="pt-6 pb-4 pl-8 md:pl-12">
                        <h3 className="text-xl md:text-2xl font-light text-[#FF8500] mb-4 italic">
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
        <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[500px]">
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
                  <div className="scale-[0.7] sm:scale-90 lg:scale-100 relative z-10 w-[400px] h-[500px] flex items-center justify-center">
                    <InteractiveFolderGallery 
                      folderName={service.folder}
                      photos={service.photos}
                    />
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
