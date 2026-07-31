"use client";

import { Container } from "@/components/layout/container";
import { GalleryGrid } from "@/components/sections/before-after/GalleryGrid";
import type { ProjectCardData } from "@/components/sections/before-after/ProjectCard";
import { SectionHeader } from "@/components/sections/before-after/SectionHeader";

const PROJECTS: ProjectCardData[] = [
  {
    id: "residential-deep-clean",
    title: "Residential Deep Clean",
    propertyType: "Family Home",
    description:
      "Construction dust, debris, and floor residue cleared from the entry hallway - polished tile finished to a mirror shine.",
    beforeLabel: "Hallway - Before",
    afterLabel: "Hallway - After",
    beforeAlt:
      "Before: residential deep clean of a home hallway with dusty black tile floor beside a staircase",
    afterAlt:
      "After: residential deep clean of the same hallway with polished reflective black tile floor",
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
      "Dust, plaster residue, and debris cleared from office flooring - wood-look tile finished to a high-gloss shine.",
    beforeLabel: "Office Floor - Before",
    afterLabel: "Office Floor - After",
    beforeAlt: "Before: office floor covered in dust, plaster residue, and construction debris",
    afterAlt: "After: polished wood-look office tile floor after professional cleaning",
    beforeSrc: "/images/before-after/office-before.jpg",
    afterSrc: "/images/before-after/office-after.jpg",
    className: "lg:col-span-2",
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleanup",
    propertyType: "Newly Built Home",
    description:
      "Construction dust, debris, and residue cleared from the entrance and porch so handover looks finished.",
    beforeLabel: "Entrance - Before",
    afterLabel: "Entrance - After",
    beforeAlt:
      "Before: post-construction cleanup of a dusty entrance porch with debris and residue",
    afterAlt: "After: post-construction cleanup of the same entrance with cleaned tile and railing",
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
    beforeLabel: "Bathroom - Before",
    afterLabel: "Bathroom - After",
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
    beforeLabel: "Storefront - Before",
    afterLabel: "Storefront - After",
    beforeAlt: "Before and after: commercial cleaning, retail storefront interior",
    afterAlt: "After: commercial cleaning, retail storefront interior",
    beforeSrc: "/images/before-after/commercial-before.jpg",
    afterSrc: "/images/before-after/commercial-after.jpg",
    className: "lg:col-span-3",
  },
];

/**
 * Before & After Showcase - visual proof through transformation.
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
