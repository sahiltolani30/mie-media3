"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";
import { featuredWorkVideos } from "@/config/videos";

const servicesMeta = [
  {
    id: "video",
    title: "AI UGC Videos",
    tagline: "Authentic. Scalable. High-converting.",
    description: "Creator-style video ads generated at scale. Built for Meta, TikTok and YouTube.",
    folder: "AI UGC Videos",
  },
  {
    id: "strategy",
    title: "Talking Head Videos",
    tagline: "Professional. Engaging. Authority-building.",
    description: "We transform raw footage into polished, authority-building content.",
    folder: "Talking Head Videos",
  },
  {
    id: "social",
    title: "Short Form Clipping",
    tagline: "Viral. Efficient. Platform-optimized.",
    description: "Turn podcasts, interviews and long-form videos into high-performing Shorts.",
    folder: "Short Form Clipping",
  },
  {
    id: "faceless",
    title: "Faceless Videos",
    tagline: "Scripted. Story-driven. Anonymous.",
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

function Card({ service, index, progress, range, targetScale }: any) {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-[100dvh] flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(5dvh + ${index * 15}px)` }}
        className="w-[95%] h-[85dvh] bg-[#111] rounded-[2.5rem] p-6 flex flex-col justify-between border border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)] origin-top relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8500]/50 to-transparent opacity-50" />
        
        <div className="flex-1 flex items-center justify-center -mt-8">
          <div className="scale-75 sm:scale-90 origin-center h-[350px]">
            <InteractiveFolderGallery 
              folderName={service.folder}
              photos={service.photos}
              dragHintText="Interactive demo"
            />
          </div>
        </div>

        <div className="pb-4">
          <div className="text-[#FF8500] font-mono text-xs mb-2 tracking-widest">0{index + 1}</div>
          <h3 className="text-3xl font-bold tracking-tighter text-white mb-2">{service.title}</h3>
          <h4 className="text-sm font-light text-[#FF8500] italic mb-3">"{service.tagline}"</h4>
          <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function MobileStickyStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={container} className="relative w-full pb-[10dvh]">
      {services.map((service, i) => {
        const targetScale = 1 - ((services.length - i) * 0.05);
        return (
          <Card 
            key={service.id}
            service={service}
            index={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
