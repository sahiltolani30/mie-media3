"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

export default function Concept4Editorial() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="w-full bg-[#030303] text-white overflow-hidden relative">
      <div className="w-full py-10 bg-[#FF8500] text-black text-center font-bold text-2xl uppercase tracking-widest">
        Concept 4: The Editorial Split
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative">
        
        {/* Cinematic Scroll Progress Bar */}
        <div className="absolute left-4 lg:left-8 top-20 bottom-20 w-[2px] bg-white/5 hidden md:block rounded-full">
          <motion.div 
            style={{ height }} 
            className="w-full bg-gradient-to-b from-transparent via-[#FF8500] to-[#FE7D13] relative rounded-full"
          >
            {/* Glowing Tip */}
            <div className="absolute -bottom-1 -left-[3px] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_4px_#FF8500]" />
          </motion.div>
        </div>

        <div className="md:pl-16 lg:pl-24">
          {services.map((service, index) => (
          <div 
            key={service.id}
            className={`min-h-[80vh] py-20 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between border-b border-white/5 last:border-0 gap-16`}
          >
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6">
                <span className="w-8 h-px bg-[#FF8500]" />
                <span className="text-[#FF8500] uppercase tracking-[0.3em] text-sm font-semibold">
                  Service 0{index + 1}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                {service.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-light text-white/80 mb-8 italic">
                "{service.tagline}"
              </h3>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {service.description}
              </p>
            </motion.div>

            {/* Visual Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center items-center relative"
            >
              {/* Pedestal Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF8500]/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="scale-[0.7] sm:scale-90 lg:scale-100 relative z-10 w-[400px] h-[500px] flex items-center justify-center">
                <InteractiveFolderGallery 
                  folderName={service.folder}
                  photos={service.photos}
                />
              </div>
            </motion.div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
