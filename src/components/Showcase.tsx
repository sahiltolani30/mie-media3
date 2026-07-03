import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";

export default function Showcase() {
  return (
    <section className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8500] to-[#FE7D13]">Featured Work</span>
          </h2>
          <p className="text-lg text-[#DEDEDE] max-w-2xl mx-auto">
            Explore the premium content, brand identities, and campaigns we've built for top architecture and interior design studios.
          </p>
        </div>
        
        <InteractiveFolderGallery folderName="Design.portfolio" />
      </div>
    </section>
  );
}
