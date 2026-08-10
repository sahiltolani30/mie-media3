"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";
import { featuredWorkVideos } from "@/config/videos";
import { X } from "lucide-react";

const servicesMeta = [
  {
    id: "video",
    title: "AI UGC Videos",
    tagline: "Authentic. Scalable.",
    description: "Creator-style video ads generated at scale. Built for Meta, TikTok and YouTube.",
    folder: "AI UGC Videos",
  },
  {
    id: "strategy",
    title: "Talking Head Videos",
    tagline: "Professional. Authority-building.",
    description: "We transform raw footage into polished, authority-building content.",
    folder: "Talking Head Videos",
  },
  {
    id: "social",
    title: "Short Form Clipping",
    tagline: "Viral. Platform-optimized.",
    description: "Turn podcasts and long-form videos into high-performing Shorts.",
    folder: "Short Form Clipping",
  },
  {
    id: "faceless",
    title: "Faceless Videos",
    tagline: "Scripted. Story-driven.",
    description: "Scripted, edited and motion-designed videos that tell compelling stories.",
    folder: "Faceless Videos",
  },
];

const services = servicesMeta.map((meta) => {
  const videoConfig = featuredWorkVideos.find((v) => v.id === meta.id);
  const photos = (videoConfig?.slots ?? []).map((slot, i) => ({
    id: i + 1,
    image: slot.image,
    video: slot.video ?? undefined,
  }));
  return { ...meta, photos };
});

export default function MobileBottomDrawer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  const activeService = services.find(s => s.id === activeId);

  return (
    <div className="w-full bg-black py-12 px-6 relative">
      
      {/* Title List */}
      <div className="flex flex-col gap-8">
        {services.map((service, i) => (
          <div 
            key={service.id}
            onClick={() => setActiveId(service.id)}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="text-sm font-mono tracking-widest text-white/40">0{i + 1}</div>
            <h2 className="text-3xl font-bold tracking-tighter text-white">{service.title}</h2>
          </div>
        ))}
      </div>

      {/* Drawer Modal */}
      <AnimatePresence>
        {activeId && activeService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100) setActiveId(null);
              }}
              className="fixed bottom-0 left-0 right-0 h-[85dvh] bg-[#111] rounded-t-[2.5rem] z-[101] border-t border-white/10 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.8)] flex flex-col"
            >
              {/* Handle */}
              <div className="w-full flex justify-center py-4 absolute top-0 z-20">
                <div className="w-12 h-1.5 rounded-full bg-white/20" />
              </div>
              
              <button 
                onClick={() => setActiveId(null)}
                className="absolute top-6 right-6 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white"
              >
                <X size={16} />
              </button>

              <div className="flex-1 flex items-center justify-center -mt-4 bg-[#0a0a0a] rounded-t-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8500]/50 to-transparent opacity-30" />
                <div className="scale-[0.8] origin-center h-[380px]">
                  <InteractiveFolderGallery 
                    folderName={activeService.folder}
                    photos={activeService.photos}
                    dragHintText="Interactive demo"
                  />
                </div>
              </div>

              <div className="p-8 pb-12 bg-[#111]">
                <h3 className="text-3xl font-bold tracking-tighter text-white mb-2">{activeService.title}</h3>
                <h4 className="text-sm font-light text-[#FF8500] italic mb-4">"{activeService.tagline}"</h4>
                <p className="text-sm text-white/60 leading-relaxed">{activeService.description}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
