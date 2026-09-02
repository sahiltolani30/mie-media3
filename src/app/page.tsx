import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import ProblemV2BrokenFunnel from "@/components/ProblemV2BrokenFunnel";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import ConceptJ_FilterableGrid from "@/components/featured-work/ConceptJ_FilterableGrid";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import SuccessV2C7BentoKPI from "@/components/SuccessV2C7BentoKPI";
import ICPV2C1CheckboxMirror from "@/components/ICPV2C1CheckboxMirror";
import PreloaderScreen from "@/components/PreloaderScreen";
import CalendlyPrefetch from "@/components/CalendlyPrefetch";
import { getServiceVideos } from "@/lib/queries";

export default async function Home() {
  const featuredWorkVideos = await getServiceVideos();

  return (
    <main className="flex flex-col min-h-screen relative overflow-clip">
      <PreloaderScreen />
      <Navbar />
      <Hero />
      <Marquee />

      <ConceptJ_FilterableGrid featuredWorkVideos={featuredWorkVideos} />

      <Problem />

      {/* 5 NEW PROBLEM CONCEPTS FOR REVIEW */}
      <ProblemV2BrokenFunnel />
      <Services />

      <Approach />
      {/* 10 NEW "OUR APPROACH" V2 CONCEPTS FOR REVIEW */}
      <HowItWorks />

      {/* 10 NEW "WHAT SUCCESS LOOKS LIKE" CONCEPTS FOR REVIEW */}
      <SuccessV2C7BentoKPI />


      {/* 10 NEW "WHO WE WORK WITH" CONCEPTS FOR REVIEW */}
      <ICPV2C1CheckboxMirror />

      <Footer />
      
      {/* Silently caches Calendly iframe in the background after 3.5s */}
      <CalendlyPrefetch />
    </main>
  );
}
