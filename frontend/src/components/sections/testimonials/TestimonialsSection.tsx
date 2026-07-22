"use client";

import { Container } from "@/components/layout/container";
import { ReviewPlaceholder } from "@/components/sections/testimonials/ReviewPlaceholder";
import { SectionHeader } from "@/components/sections/testimonials/SectionHeader";
import {
  TestimonialCard,
  type TestimonialPlaceholder,
} from "@/components/sections/testimonials/TestimonialCard";

/**
 * Placeholder cards — structural service patterns only, no fabricated content.
 * Featured card spans larger footprint to break a uniform grid.
 */
const PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: "slot-1",
    servicePattern: "[Residential Cleaning]",
    featured: true,
    className: "min-h-[16rem] md:row-span-2 md:min-h-0",
  },
  {
    id: "slot-2",
    servicePattern: "[Commercial Cleaning]",
  },
  {
    id: "slot-3",
    servicePattern: "[Post-Construction Cleaning]",
  },
];

/**
 * Testimonials & Social Proof — polished placeholders until real reviews arrive.
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-brand-warm scroll-mt-24 py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <SectionHeader />
          </div>

          <div className="lg:col-span-8">
            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-2">
              {PLACEHOLDERS.map((placeholder, index) => (
                <TestimonialCard key={placeholder.id} placeholder={placeholder} index={index} />
              ))}
            </div>

            <ReviewPlaceholder />
          </div>
        </div>
      </Container>
    </section>
  );
}
