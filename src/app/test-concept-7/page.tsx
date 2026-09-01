import { getServiceVideos } from "@/lib/queries";
import ConceptJ_FilterableGrid from "@/components/featured-work/ConceptJ_FilterableGrid";
import Link from "next/link";

export default async function TestConcept7Page() {
  const featuredWorkVideos = await getServiceVideos();

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-clip">
      
      {/* Sticky Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-4 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-white font-bold tracking-tight">Concept 7: Filter Grid</h1>
          <p className="text-white/50 text-xs">High-performance Hybrid Video UX</p>
        </div>
        <div className="flex gap-4">
          <Link href="/test-featured-work" className="px-4 py-2 text-white/50 hover:text-white text-sm">
            ← Back to All Concepts
          </Link>
          <Link href="/" className="px-4 py-2 text-white/50 hover:text-white text-sm">
            Home
          </Link>
        </div>
      </div>

      <div className="pt-32 pb-8 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Hybrid Video Performance</h2>
        <p className="text-white/60 leading-relaxed">
          The grid below loads the optimized <code className="bg-white/10 px-1 rounded">cardVideo</code> (low-quality) for instant, seamless autoplay without lagging the device. 
          When you click a video, the fullscreen player switches instantly to the <code className="bg-white/10 px-1 rounded">fullVideo</code> (high-quality) stream.
        </p>
      </div>

      <ConceptJ_FilterableGrid featuredWorkVideos={featuredWorkVideos} />

    </main>
  );
}
