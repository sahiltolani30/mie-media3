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

export default function Concept6GlassStage() {
  const [activeId, setActiveId] = useState<string>("video");

  return (
    <section className="w-full min-h-screen bg-[#111] flex items-center justify-center relative py-32 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full py-10 bg-[#FF8500] text-black text-center font-bold text-2xl uppercase tracking-widest z-50">
        Concept 6: Glassmorphism Stage
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF8500]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 pt-16">
        
        {/* Main Stage */}
        <div className="w-full rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] relative">
          
          {/* Navigation Tabs (Top on mobile, Bottom Left on desktop) */}
          <div className="absolute top-6 left-6 lg:top-auto lg:bottom-12 lg:left-12 flex gap-4 z-30">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-colors duration-300 ${
                  activeId === service.id ? 'text-black' : 'text-white/50 hover:text-white'
                }`}
              >
                {activeId === service.id && (
                  <motion.div 
                    layoutId="glass-tab"
                    className="absolute inset-0 bg-gradient-to-r from-[#FF8500] to-[#FE7D13] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">0{index + 1}</span>
              </button>
            ))}
          </div>

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 p-8 pt-32 lg:p-16 lg:pb-32 flex flex-col justify-center relative z-20">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                activeId === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col"
                  >
                    <div className="inline-flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-[#FF8500] animate-pulse" />
                      <span className="text-[#FF8500] uppercase tracking-[0.2em] text-xs font-bold">
                        Service Selected
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
                      {service.title}
                    </h2>
                    <h3 className="text-xl font-light text-white/80 mb-6 italic">
                      "{service.tagline}"
                    </h3>
                    <p className="text-lg text-white/50 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Right: Interactive Visual */}
          <div className="w-full lg:w-1/2 bg-black/20 flex items-center justify-center relative z-10 border-l border-white/5 min-h-[500px]">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                activeId === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-auto perspective-[1000px]"
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
      </div>
    </section>
  );
}
