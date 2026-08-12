import MobileStickyStack from "@/components/mobile-ux/MobileStickyStack";
import MobileSnapScroll from "@/components/mobile-ux/MobileSnapScroll";
import MobileBottomDrawer from "@/components/mobile-ux/MobileBottomDrawer";
import { getServiceVideos } from "@/lib/queries";

export default async function MobileUxTestPage() {
  const featuredWorkVideos = await getServiceVideos();

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF8500] selection:text-white pb-32">
      
      {/* Header */}
      <div className="pt-24 pb-12 px-6 border-b border-white/10">
        <h1 className="text-3xl font-bold tracking-tighter mb-4">Mobile UX Prototypes</h1>
        <p className="text-white/60">
          Open this page on your phone (or use Chrome DevTools Mobile View) to test the three different high-end UX prototypes for the "Featured Work" section.
        </p>
      </div>

      {/* Prototype 1 */}
      <div className="border-b border-white/10">
        <div className="p-6 bg-white/5 border-b border-white/10">
          <h2 className="text-xl font-bold text-[#FF8500]">Prototype 1: Sticky Stack</h2>
          <p className="text-sm text-white/50">Scroll down to see the cards stick and stack.</p>
        </div>
        <MobileStickyStack featuredWorkVideos={featuredWorkVideos} />
      </div>

      {/* Prototype 2 */}
      <div className="border-b border-white/10 mt-12">
        <div className="p-6 bg-white/5 border-b border-white/10">
          <h2 className="text-xl font-bold text-[#FF8500]">Prototype 2: Snap Scroll</h2>
          <p className="text-sm text-white/50">Swipe horizontally to browse services natively.</p>
        </div>
        <MobileSnapScroll featuredWorkVideos={featuredWorkVideos} />
      </div>

      {/* Prototype 3 */}
      <div className="mt-12">
        <div className="p-6 bg-white/5 border-b border-white/10 mb-8">
          <h2 className="text-xl font-bold text-[#FF8500]">Prototype 3: Bottom Drawer</h2>
          <p className="text-sm text-white/50">Tap a title to slide the drawer up. Drag it down to close.</p>
        </div>
        <MobileBottomDrawer featuredWorkVideos={featuredWorkVideos} />
      </div>

    </div>
  );
}
