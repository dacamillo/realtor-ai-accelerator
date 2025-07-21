import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CalendarSection } from "@/components/CalendarSection";
import { CTASection } from "@/components/CTASection";

import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <PricingSection />
        <CalendarSection />
        <CTASection />
      </main>
      <Footer />
      
    </div>
  );
};

export default Index;
