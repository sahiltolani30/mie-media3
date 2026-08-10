import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import ProblemV2BrokenFunnel from "@/components/ProblemV2BrokenFunnel";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Concept5Accordion from "@/components/Concept5Accordion";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import SuccessV2C7BentoKPI from "@/components/SuccessV2C7BentoKPI";
import ICPV2C1CheckboxMirror from "@/components/ICPV2C1CheckboxMirror";
import PreloaderScreen from "@/components/PreloaderScreen";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-clip">
      <PreloaderScreen />
      <Navbar />
      <Hero />
      <Marquee />

      <Problem />

      {/* 5 NEW PROBLEM CONCEPTS FOR REVIEW */}
      <ProblemV2BrokenFunnel />
      <Services />

      {/* 3 NEW CONCEPTS FOR REVIEW */}
      <Concept5Accordion />


      <Approach />
      {/* 10 NEW "OUR APPROACH" V2 CONCEPTS FOR REVIEW */}
      <HowItWorks />

      {/* 10 NEW "WHAT SUCCESS LOOKS LIKE" CONCEPTS FOR REVIEW */}
      <SuccessV2C7BentoKPI />


      {/* 10 NEW "WHO WE WORK WITH" CONCEPTS FOR REVIEW */}
      <ICPV2C1CheckboxMirror />

      <Footer />
    </main>
  );
}
