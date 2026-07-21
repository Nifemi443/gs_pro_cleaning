import { Navbar } from "@/components/navigation";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { Hero } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ServicesSection } from "@/components/sections/services";
import { TrustSection } from "@/components/sections/trust";
import { WhyChooseSection } from "@/components/sections/why-choose";

/**
 * Homepage — Hero → Trust → Services → Why Choose → How It Works → Before & After.
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
        <HowItWorksSection />
        <BeforeAfterSection />
      </main>
    </>
  );
}
