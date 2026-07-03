import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ICP from "@/components/ICP";
import Problem from "@/components/Problem";
import ProblemV2LossCounter from "@/components/ProblemV2LossCounter";
import ProblemV2SideBySide from "@/components/ProblemV2SideBySide";
import ProblemV2XRay from "@/components/ProblemV2XRay";
import ProblemV2BrokenFunnel from "@/components/ProblemV2BrokenFunnel";
import ProblemV2Marquee from "@/components/ProblemV2Marquee";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Concept1DigitalDesk from "@/components/Concept1DigitalDesk";
import Concept4Editorial from "@/components/Concept4Editorial";
import Concept5Accordion from "@/components/Concept5Accordion";
import Concept6GlassStage from "@/components/Concept6GlassStage";
import HowItWorks from "@/components/HowItWorks";
import Success from "@/components/Success";
import FounderStory from "@/components/FounderStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-clip">
      <Navbar />
      <Hero />
      <Marquee />

      <Problem />

      {/* 5 NEW PROBLEM CONCEPTS FOR REVIEW */}
      <ProblemV2LossCounter />
      <ProblemV2SideBySide />
      <ProblemV2XRay />
      <ProblemV2BrokenFunnel />
      <ProblemV2Marquee />

      <Services />
      <Showcase />
      
      {/* 3 NEW CONCEPTS FOR REVIEW */}
      <Concept4Editorial />
      <Concept5Accordion />
      <Concept6GlassStage />
      
      <Concept1DigitalDesk />
      
      <Approach />
      <HowItWorks />
      <Success />
      <ICP />
      <FounderStory />
      <Footer />
    </main>
  );
}
