"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { InteractiveFolderGallery, GalleryPhoto } from "@/components/ui/interactive-folder-gallery";

const services = [
  {
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

function ServiceText({ 
  service, index, progress 
}: { 
  service: typeof services[0]; index: number; progress: MotionValue<number> 
}) {
  const start = index / services.length;
  const end = (index + 1) / services.length;
  const transitionLength = 0.1;
  
  let opacityInput, opacityOutput;
  let yInput, yOutput;

  if (index === 0) {
    opacityInput = [0, end - transitionLength, end];
    opacityOutput = [1, 1, 0];
    yInput = [0, end - transitionLength, end];
    yOutput = [0, 0, -50];
  } else if (index === services.length - 1) {
    opacityInput = [start - transitionLength, start, 1];
    opacityOutput = [0, 1, 1];
    yInput = [start - transitionLength, start, 1];
    yOutput = [50, 0, 0];
  } else {
    opacityInput = [start - transitionLength, start, end - transitionLength, end];
    opacityOutput = [0, 1, 1, 0];
    yInput = [start - transitionLength, start, end - transitionLength, end];
    yOutput = [50, 0, 0, -50];
  }

  const opacity = useTransform(progress, opacityInput, opacityOutput);
  const y = useTransform(progress, yInput, yOutput);

  return (
    <motion.div 
      style={{ opacity, y, pointerEvents: "none" }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
        {service.title}
      </h2>
      <p className="text-lg lg:text-xl text-white/60 max-w-md mx-auto lg:mx-0">
        {service.description}
      </p>
    </motion.div>
  );
}

function ServiceVisual({ 
  service, index, progress 
}: { 
  service: typeof services[0]; index: number; progress: MotionValue<number> 
}) {
  const start = index / services.length;
  const end = (index + 1) / services.length;
  const transitionLength = 0.1;
  
  let opacityInput, opacityOutput;
  let scaleInput, scaleOutput;

  if (index === 0) {
    opacityInput = [0, end - transitionLength, end];
    opacityOutput = [1, 1, 0];
    scaleInput = [0, end - transitionLength, end];
    scaleOutput = [1, 1, 0.8];
  } else if (index === services.length - 1) {
    opacityInput = [start - transitionLength, start, 1];
    opacityOutput = [0, 1, 1];
    scaleInput = [start - transitionLength, start, 1];
    scaleOutput = [0.8, 1, 1];
  } else {
    opacityInput = [start - transitionLength, start, end - transitionLength, end];
    opacityOutput = [0, 1, 1, 0];
    scaleInput = [start - transitionLength, start, end - transitionLength, end];
    scaleOutput = [0.8, 1, 1, 0.8];
  }
  
  const opacity = useTransform(progress, opacityInput, opacityOutput);
  const scale = useTransform(progress, scaleInput, scaleOutput);
  
  const zIndex = useTransform(
    progress,
    (v) => {
      if (index === 0) return v <= end ? 10 : 0;
      if (index === services.length - 1) return v >= start - transitionLength ? 10 : 0;
      return (v >= start - transitionLength && v <= end) ? 10 : 0;
    }
  );

  const pointerEvents = useTransform(
    progress,
    (v) => {
      if (index === 0) return v <= end ? "auto" : "none";
      if (index === services.length - 1) return v >= start - transitionLength ? "auto" : "none";
      return (v >= start - transitionLength && v <= end) ? "auto" : "none";
    }
  );

  return (
    <motion.div 
      style={{ opacity, scale, zIndex, pointerEvents }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="scale-[0.6] sm:scale-75 lg:scale-100 origin-center">
        <InteractiveFolderGallery 
          folderName={service.folder} 
          photos={service.photos}
          className="py-0"
        />
      </div>
    </motion.div>
  );
}

export default function Concept2StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#FF8500]/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 w-full h-full relative z-10 flex flex-col lg:flex-row items-center justify-center">
          
          {/* Left Text */}
          <div className="absolute top-[10vh] lg:relative lg:top-auto w-full lg:w-1/2 flex flex-col justify-start lg:justify-center z-20 pointer-events-none lg:h-full px-4 lg:px-0 text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6 w-max mx-auto lg:mx-0">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#FF8500]">
                Concept 2: Scroll Experience
              </span>
            </div>
            
            <div className="relative h-[200px] lg:h-[400px] w-full">
              {services.map((service, index) => (
                <ServiceText 
                  key={index} 
                  service={service} 
                  index={index} 
                  progress={scrollYProgress} 
                />
              ))}
            </div>
          </div>
          
          {/* Right Interactive Folders */}
          <div className="absolute top-[35vh] lg:relative lg:top-auto w-full lg:w-1/2 h-[500px] lg:h-full flex items-center justify-center pointer-events-none lg:pointer-events-auto z-10">
            {services.map((service, index) => (
              <ServiceVisual 
                key={index} 
                service={service} 
                index={index} 
                progress={scrollYProgress} 
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
