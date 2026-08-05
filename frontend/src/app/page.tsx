import { Footer } from "@/components/footer";
import { BackToTop, Navbar } from "@/components/navigation";
import { BeforeAfterSection } from "@/components/sections/before-after";
import {
  PricingSection,
  SurveyReadySection,
  WalkthroughSection,
} from "@/components/sections/group-homes";
import { Hero } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TrustSection } from "@/components/sections/trust";
import { WhyChooseSection } from "@/components/sections/why-choose";

/**
 * Homepage - consumer cleaning sections + B2B group-home compliance band.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <WhyChooseSection />
        <SurveyReadySection />
        <PricingSection />
        <HowItWorksSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <WalkthroughSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
