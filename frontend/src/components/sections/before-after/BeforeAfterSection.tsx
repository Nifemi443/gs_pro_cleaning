"use client";

import { Container } from "@/components/layout/container";
import { GalleryGrid } from "@/components/sections/before-after/GalleryGrid";
import type { ProjectCardData } from "@/components/sections/before-after/ProjectCard";
import { SectionHeader } from "@/components/sections/before-after/SectionHeader";

const PROJECTS: ProjectCardData[] = [
  {
    id: "residential-deep-clean",
    title: "Residential Deep Clean",
    propertyType: "3-Bedroom Home",
    description:
      "Full kitchen and bathroom reset ahead of a family move-in — floors, vents, and appliance interiors signed off.",
    beforeLabel: "Living Room — Before",
    afterLabel: "Living Room — After",
    beforeAlt: "Before and after: residential deep clean, 3-bedroom home living room",
    afterAlt: "After: residential deep clean, 3-bedroom home living room",
    beforeSrc: "/images/before-after/residential-before.jpg",
    afterSrc: "/images/before-after/residential-after.jpg",
    featured: true,
    className: "sm:col-span-2 lg:col-span-4 lg:row-span-2",
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    propertyType: "Corporate Office",
    description:
      "Open-plan desks, glass partitions, and breakroom sanitation ready for Monday morning traffic.",
    beforeLabel: "Office Floor — Before",
    afterLabel: "Office Floor — After",
    beforeAlt: "Before and after: office cleaning, corporate open-plan workspace",
    afterAlt: "After: office cleaning, corporate open-plan workspace",
    beforeSrc: "/images/before-after/office-before.jpg",
    afterSrc: "/images/before-after/office-after.jpg",
    className: "lg:col-span-2",
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleanup",
    propertyType: "Newly Built Home",
    description:
      "Dust, adhesive residue, and fine debris cleared from a new kitchen so handover photos look finished.",
    beforeLabel: "Kitchen Build — Before",
    afterLabel: "Kitchen Build — After",
    beforeAlt: "Before and after: post-construction cleanup, newly built home kitchen",
    afterAlt: "After: post-construction cleanup, newly built home kitchen",
    beforeSrc: "/images/before-after/post-construction-before.jpg",
    afterSrc: "/images/before-after/post-construction-after.jpg",
    className: "lg:col-span-2",
  },
  {
    id: "move-out",
    title: "Move-Out Cleaning",
    propertyType: "Rental Apartment",
    description:
      "Bathroom scale, grout, and fixtures cleaned to an inspection-ready standard before keys were returned.",
    beforeLabel: "Bathroom — Before",
    afterLabel: "Bathroom — After",
    beforeAlt: "Before and after: move-out cleaning, rental apartment bathroom",
    afterAlt: "After: move-out cleaning, rental apartment bathroom",
    beforeSrc: "/images/before-after/move-out-before.jpg",
    afterSrc: "/images/before-after/move-out-after.jpg",
    className: "lg:col-span-3",
  },
  {
    id: "commercial-space",
    title: "Commercial Space",
    propertyType: "Retail Storefront",
    description:
      "Floors, glass, and fitting rooms refreshed overnight so the storefront opened spotless for trading.",
    beforeLabel: "Storefront — Before",
    afterLabel: "Storefront — After",
    beforeAlt: "Before and after: commercial cleaning, retail storefront interior",
    afterAlt: "After: commercial cleaning, retail storefront interior",
    beforeSrc: "/images/before-after/commercial-before.jpg",
    afterSrc: "/images/before-after/commercial-after.jpg",
    className: "lg:col-span-3",
  },
];

/**
 * Before & After Showcase — visual proof through transformation.
 */
export function BeforeAfterSection() {
  return (
    <section
      id="gallery"
      className="bg-brand-warm scroll-mt-24 py-16 sm:py-20 lg:py-24"
      aria-labelledby="before-after-heading"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <SectionHeader />
          </div>

          <div className="lg:col-span-8">
            <GalleryGrid projects={PROJECTS} />
          </div>
        </div>
      </Container>
    </section>
  );
}
