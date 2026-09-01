import { getServiceVideos } from "@/lib/queries";
import ConceptD_ReelWall from "@/components/featured-work/ConceptD_ReelWall";
import ConceptE_SpotlightPlayer from "@/components/featured-work/ConceptE_SpotlightPlayer";
import ConceptF_LiveCategories from "@/components/featured-work/ConceptF_LiveCategories";
import ConceptG_PhoneCarousel from "@/components/featured-work/ConceptG_PhoneCarousel";
import ConceptH_ScrollColumns from "@/components/featured-work/ConceptH_ScrollColumns";
import ConceptI_SwipeDeck from "@/components/featured-work/ConceptI_SwipeDeck";
import ConceptJ_FilterableGrid from "@/components/featured-work/ConceptJ_FilterableGrid";
import Link from "next/link";

export default async function TestFeaturedWorkPage() {
  const featuredWorkVideos = await getServiceVideos();

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-clip">
      
      {/* Sticky Navigation to jump between concepts */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-4 px-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-white font-bold tracking-tight">UX Test: Featured Work v3</h1>
          <p className="text-white/50 text-xs">9:16 Native Vertical UX solutions for Miu Media</p>
        </div>
        <div className="flex gap-2 text-sm flex-wrap">
          <Link href="/" className="px-4 py-2 text-white/50 hover:text-white mr-4">← Back Home</Link>
          <a href="#concept-7" className="px-3 py-2 bg-[#FF8500] hover:bg-[#FF8500]/80 text-white rounded-full transition-colors text-xs shadow-lg">★ 7. Filter Grid</a>
          <span className="w-px h-6 bg-white/20 mx-2 self-center"></span>
          <a href="#concept-4" className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs">4. Phone</a>
          <a href="#concept-5" className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs">5. Scroll</a>
          <a href="#concept-6" className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs">6. Deck</a>
          <span className="w-px h-6 bg-white/20 mx-2 self-center"></span>
          <a href="#concept-1" className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs">1. Wall</a>
          <a href="#concept-2" className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs">2. Spot</a>
          <a href="#concept-3" className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs">3. Live</a>
        </div>
      </div>

      <div className="pt-24 pb-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">The Pivot: 9:16 Native</h2>
        <p className="text-white/60 leading-relaxed">
          Concepts 1-3 fixed the friction, but forced vertical videos into horizontal grids. 
          Concepts 4-6 are built from the ground up for <strong>9:16 vertical video</strong>. 
          <br/><br/>
          <strong>Concept 7</strong> is a direct recreation of your reference image: highly functional filterable vertical cards.
        </p>
      </div>

      <div id="concept-7" className="scroll-mt-20 border-t border-white/10">
        <ConceptJ_FilterableGrid featuredWorkVideos={featuredWorkVideos} />
      </div>

      <div id="concept-4" className="scroll-mt-20 border-t border-white/10">
        <ConceptG_PhoneCarousel featuredWorkVideos={featuredWorkVideos} />
      </div>

      <div id="concept-5" className="scroll-mt-20 border-t border-white/10">
        <ConceptH_ScrollColumns featuredWorkVideos={featuredWorkVideos} />
      </div>

      <div id="concept-6" className="scroll-mt-20 border-t border-white/10">
        <ConceptI_SwipeDeck featuredWorkVideos={featuredWorkVideos} />
      </div>

      <div className="py-24 text-center border-t border-white/10 bg-zinc-900/50">
        <h3 className="text-xl text-white/50 mb-8 font-mono tracking-widest uppercase">Previous Concepts (1-3)</h3>
      </div>

      <div id="concept-1" className="scroll-mt-20">
        <ConceptD_ReelWall featuredWorkVideos={featuredWorkVideos} />
      </div>

      <div id="concept-2" className="scroll-mt-20 border-t border-white/10">
        <ConceptE_SpotlightPlayer featuredWorkVideos={featuredWorkVideos} />
      </div>

      <div id="concept-3" className="scroll-mt-20 border-t border-white/10">
        <ConceptF_LiveCategories featuredWorkVideos={featuredWorkVideos} />
      </div>

    </main>
  );
}
