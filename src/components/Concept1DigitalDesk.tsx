"use client";

import { InteractiveFolderGallery, GalleryPhoto } from "@/components/ui/interactive-folder-gallery";

const videoPhotos: GalleryPhoto[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
];

const strategyPhotos: GalleryPhoto[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" },
];

const socialPhotos: GalleryPhoto[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" },
];

export default function Concept1DigitalDesk() {
  return (
    <section className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              Concept 1
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Desk</span>
          </h2>
          <p className="text-lg text-[#DEDEDE] max-w-2xl mx-auto">
            Interactive deliverables right on your desktop.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
          <div className="w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] relative flex justify-center items-center">
            <div className="absolute scale-[0.7] lg:scale-100 origin-center">
              <InteractiveFolderGallery 
                folderName="Video.production" 
                photos={videoPhotos}
                className="py-10"
              />
            </div>
          </div>
          <div className="w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] relative flex justify-center items-center">
            <div className="absolute scale-[0.7] lg:scale-100 origin-center">
              <InteractiveFolderGallery 
                folderName="Content.strategy" 
                photos={strategyPhotos}
                className="py-10"
              />
            </div>
          </div>
          <div className="w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] relative flex justify-center items-center">
            <div className="absolute scale-[0.7] lg:scale-100 origin-center">
              <InteractiveFolderGallery 
                folderName="Social.media" 
                photos={socialPhotos}
                className="py-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
