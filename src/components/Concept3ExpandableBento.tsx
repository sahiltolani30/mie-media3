"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveFolderGallery, GalleryPhoto } from "@/components/ui/interactive-folder-gallery";

const services = [
  {
    id: "video",
    title: "AI UGC Video",
    description: "Short-form cinematic video content designed to educate and establish authority.",
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
    description: "Research-led content that targets the questions your ideal clients are asking.",
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
    description: "Community engagement and growth-focused execution across key platforms.",
    folder: "Social.media",
    photos: [
      { id: 1, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
      { id: 2, image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop" },
      { id: 3, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" },
    ]
  }
];

export default function Concept3ExpandableBento() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeService = services.find(s => s.id === activeId);

  return (
    <section className="w-full py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#FF8500]">
              Concept 3
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Expandable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Bento Box</span>
          </h2>
          <p className="text-lg text-[#DEDEDE] max-w-2xl mx-auto">
            Click any service to physically unfold its deliverables.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              layoutId={`card-${service.id}`}
              onClick={() => setActiveId(service.id)}
              className="bg-[#111] border border-white/10 rounded-[2rem] p-8 cursor-pointer hover:bg-[#1a1a1a] transition-colors flex flex-col items-center text-center group h-[300px] justify-center"
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                layoutId={`title-${service.id}`}
                className="text-2xl font-bold text-white mb-4"
              >
                {service.title}
              </motion.h3>
              <motion.p 
                layoutId={`desc-${service.id}`}
                className="text-white/60 text-sm group-hover:text-white/80 transition-colors"
              >
                {service.description}
              </motion.p>
              <div className="mt-8 px-6 py-2 rounded-full bg-white/5 text-white/40 text-xs font-semibold uppercase tracking-wider group-hover:bg-[#FF8500]/20 group-hover:text-[#FF8500] transition-colors">
                Open Folder
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded State */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              layoutId={`card-${activeService.id}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] lg:h-[80vh] bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-y-auto lg:overflow-hidden relative flex flex-col lg:flex-row shadow-2xl"
            >
              
              {/* Left Details */}
              <div className="p-8 lg:p-16 w-full lg:w-1/3 flex flex-col justify-center bg-[#111] z-20 shrink-0">
                <motion.h3 
                  layoutId={`title-${activeService.id}`}
                  className="text-4xl lg:text-5xl font-bold text-white mb-6"
                >
                  {activeService.title}
                </motion.h3>
                <motion.p 
                  layoutId={`desc-${activeService.id}`}
                  className="text-lg text-white/60 mb-12"
                >
                  {activeService.description}
                </motion.p>
                <button 
                  onClick={() => setActiveId(null)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium self-start transition-colors"
                >
                  Close Showcase
                </button>
              </div>

              {/* Right Gallery */}
              <div className="w-full lg:w-2/3 h-[400px] sm:h-[500px] lg:h-full flex items-center justify-center bg-[#050505] relative z-10 overflow-hidden">
                <div className="scale-[0.65] sm:scale-85 lg:scale-100 flex items-center justify-center">
                  <InteractiveFolderGallery 
                    folderName={activeService.folder} 
                    photos={activeService.photos}
                  />
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
