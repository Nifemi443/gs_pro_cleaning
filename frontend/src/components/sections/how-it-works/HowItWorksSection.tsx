"use client";

import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/sections/how-it-works/SectionHeader";
import { Timeline } from "@/components/sections/how-it-works/Timeline";

/**
 * How It Works — quote → estimate → schedule → clean.
 * Lowers friction; does not introduce a new decision.
 */
export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <SectionHeader />
        <Timeline />
      </Container>
    </section>
  );
}
