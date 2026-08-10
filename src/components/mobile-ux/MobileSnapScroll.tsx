"use client";

import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";
import { featuredWorkVideos } from "@/config/videos";

const servicesMeta = [
  {
    id: "strategy",
    title: "Talking Head",
    tagline: "Professional. Engaging.",
    description: "Transform raw footage into polished content.",
    folder: "Talking Head Videos",
  },
  {
    id: "social",
    title: "Short Form",
    tagline: "Viral. Platform-optimized.",
    description: "Turn podcasts into high-performing Shorts.",
    folder: "Short Form Clipping",
  },
  {
    id: "faceless",
    title: "Faceless",
    tagline: "Scripted. Story-driven.",
    description: "Scripted, edited and motion-designed videos.",
    folder: "Faceless Videos",
  },
  {
    id: "video",
    title: "AI UGC",
    tagline: "Authentic. Scalable.",
    description: "Creator-style video ads generated at scale.",
    folder: "AI UGC Videos",
  },
];

const services = servicesMeta.map((meta) => {
  const videoConfig = featuredWorkVideos.find((v) => v.id === meta.id);
  const photos = (videoConfig?.slots ?? []).map((slot, i) => ({
    id: i + 1,
    image: slot.image,
    video: slot.video ?? undefined,
    webm: slot.webm ?? undefined,
    cardVideo: slot.cardVideo ?? undefined,
    cardWebm: slot.cardWebm ?? undefined,
  }));
  return { ...meta, photos };
});

export default function MobileSnapScroll() {
  return (
    <div className="w-full py-12 bg-black">
      <div className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-4 gap-4">
        {services.map((service, i) => (
          <div 
            key={service.id}
            className="snap-center shrink-0 w-[85vw] bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col"
          >
            <div className="h-[400px] w-full bg-[#111] flex items-center justify-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8500]/50 to-transparent opacity-30" />
               <div className="scale-75 origin-center">
                  <InteractiveFolderGallery 
                    folderName={service.folder}
                    photos={service.photos}
                    dragHintText="Interactive demo"
                  />
               </div>
            </div>
            <div className="p-6">
              <div className="text-[#FF8500] font-mono text-xs mb-1 tracking-widest">0{i + 1}</div>
              <h3 className="text-2xl font-bold tracking-tighter text-white mb-1">{service.title}</h3>
              <h4 className="text-sm font-light text-[#FF8500] italic mb-3">"{service.tagline}"</h4>
              <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {services.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
        ))}
      </div>
    </div>
  );
}
