import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientTrustStrip from "@/components/ClientTrustStrip";
import ResultsBand from "@/components/ResultsBand";
import GrowthEngines from "@/components/GrowthEngines";
import OurWork from "@/components/OurWork";
import ClientMarquee from "@/components/ClientMarquee";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import Faq from "@/components/Faq";
import CaseStudies from "@/components/CaseStudies";
import BlastEffect from "@/components/BlastEffect";
import ProcessSteps from "@/components/ProcessSteps";
import TechStackSection from "@/components/TechStackSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blast-black flex flex-col selection:bg-blast-orange selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Experience Flow */}
      <main className="flex-1 w-full">
        <Hero />
        <ClientTrustStrip />
        <ResultsBand />
        <GrowthEngines />
        <OurWork />
        <CaseStudies />
        <BlastEffect />
        <ProcessSteps />
        <TechStackSection />
        <ClientMarquee />
        <Testimonial />
        <WhyChooseUs />
        <Faq />
        <FinalCta />
      </main>

      {/* Deep Obsidian Footer */}
      <Footer />

      {/* Call / WhatsApp / email, pinned bottom-right */}
      <FloatingContact />

      {/* Ambient polish — both opt out on touch / reduced motion */}
      <ScrollProgress />
      <CustomCursor />
    </div>
  );
}
