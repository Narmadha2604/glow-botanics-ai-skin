import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { WhyGlowBotanics } from "@/components/WhyGlowBotanics";
import { FeaturedKits } from "@/components/FeaturedKits";
import { Testimonials } from "@/components/Testimonials";
import { CTAStrip } from "@/components/CTAStrip";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <WhyGlowBotanics />
        <FeaturedKits />
        <Testimonials />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
};