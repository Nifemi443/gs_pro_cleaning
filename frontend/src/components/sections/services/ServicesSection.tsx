"use client";

import { Container } from "@/components/layout/container";
import { ProductsTeaser } from "@/components/sections/services/ProductsTeaser";
import { SectionHeader } from "@/components/sections/services/SectionHeader";
import { ServiceAddOns } from "@/components/sections/services/ServiceAddOns";
import {
  ServiceFeature,
  type ServiceFeatureData,
} from "@/components/sections/services/ServiceFeature";

/** Core bookable services — alternating image/content layout, exact brief order. */
const CORE_SERVICES: ServiceFeatureData[] = [
  {
    id: "domestic",
    title: "Domestic Cleaning",
    description:
      "Everyday home cleaning for homeowners and renters — kitchens, baths, and living areas kept to a repeatable standard.",
    bullets: [
      "Kitchens & bathrooms deep-cleaned",
      "Dusting & surface care",
      "Floor care by surface type",
      "One-time or recurring visits available",
    ],
    quoteMessage: "Hello GS Pro — I'd like a quote for Domestic Cleaning.",
    quoteService: "Residential Cleaning",
    imageSrc: "/images/services/domestic-cleaning.jpg",
    imageAlt: "Clean residential living space after a domestic home cleaning visit",
    badge: "Most Requested",
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Offices, retail floors, and business spaces maintained on a schedule that fits how the day actually runs.",
    bullets: [
      "Scheduled recurring visits",
      "Restroom & breakroom sanitation",
      "Floor care for high-traffic areas",
      "After-hours service available",
    ],
    quoteMessage: "Hello GS Pro — I'd like a quote for Commercial Cleaning.",
    quoteService: "Commercial Cleaning",
    imageSrc: "/images/services/commercial-cleaning.jpg",
    imageAlt: "Modern office or retail interior maintained for weekday business use",
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleaning",
    description:
      "Cleanup after renovation or new builds — dust, residue, and fine debris cleared to a handover-ready finish.",
    bullets: [
      "Dust and debris removal",
      "Paint/adhesive residue removal",
      "Full appliance and fixture wipe-down",
      "Ready-for-move-in or ready-for-inspection standard",
    ],
    quoteMessage: "Hello GS Pro — I'd like a quote for Post-Construction Cleaning.",
    quoteService: "Post Construction Cleaning",
    imageSrc: "/images/services/post-construction-cleaning.jpg",
    imageAlt: "Newly finished interior cleared of construction dust and residue",
  },
  {
    id: "specialized",
    title: "Specialized Cleaning",
    description:
      "Work that needs more than a standard visit — hard-to-reach zones, appliance interiors, and high-touch sanitation tailored to the space.",
    bullets: [
      "Deep-clean of hard-to-reach areas",
      "Appliance interiors",
      "High-touch sanitation",
      "Tailored to the space's specific needs",
    ],
    quoteMessage: "Hello GS Pro — I'd like a quote for Specialized Cleaning.",
    quoteService: "Deep Cleaning",
    imageSrc: "/images/services/specialized-cleaning.jpg",
    imageAlt: "Detailed cleaning of fixtures and hard-to-reach surfaces in a modern space",
  },
];

/**
 * Services Showcase — bookable services, compact add-ons, quiet products teaser.
 */
export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-brand-warm scroll-mt-24 py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          titleId="services-heading"
          title="What We Clean"
          description="From everyday domestic visits and commercial schedules to post-construction resets, specialized deep work, and add-ons like sofa or carpet care — GS Pro covers homes, businesses, and the jobs in between."
        />

        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
          {CORE_SERVICES.map((service, index) => (
            <div key={service.id} id={`services-${service.id}`}>
              <ServiceFeature service={service} index={index} />
            </div>
          ))}

          <ServiceAddOns />
          <ProductsTeaser />
        </div>
      </Container>
    </section>
  );
}
