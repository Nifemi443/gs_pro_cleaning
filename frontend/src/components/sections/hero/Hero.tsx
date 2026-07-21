"use client";

import { Container } from "@/components/layout/container";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroVisual } from "@/components/sections/hero/HeroVisual";

/**
 * GS Pro hero — split-screen, left-aligned.
 * Trust earned through specificity, not generic “clean tech” abstraction.
 */
export function Hero() {
  return (
    <section className="bg-brand-base relative overflow-hidden" aria-labelledby="hero-heading">
      <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20 xl:gap-20">
        <HeroContent />
        <HeroVisual />
      </Container>
    </section>
  );
}

export function HeroSection() {
  return <Hero />;
}
