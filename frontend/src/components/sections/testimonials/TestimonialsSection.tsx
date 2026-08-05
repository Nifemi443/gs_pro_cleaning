"use client";

import { Container } from "@/components/layout/container";
import { ReviewPlaceholder } from "@/components/sections/testimonials/ReviewPlaceholder";
import { SectionHeader } from "@/components/sections/testimonials/SectionHeader";
import {
  TestimonialCard,
  type Testimonial,
} from "@/components/sections/testimonials/TestimonialCard";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "michael-johnson",
    quote:
      "I've tried a few cleaning services over the years, but this one stands out. The team arrived on time, paid attention to every detail, and left my home looking and smelling amazing. It honestly felt like walking into a brand-new house.",
    name: "Michael Johnson",
    location: "Houston, Texas, USA",
    featured: true,
    className: "md:col-span-2",
  },
  {
    id: "adaeze-okafor",
    quote:
      "I wasn't expecting such a thorough job. They cleaned places I didn't even think to mention, and everything was neatly arranged when they finished. I'll definitely be booking them again.",
    name: "Adaeze Okafor",
    location: "Lagos, Nigeria",
  },
  {
    id: "sarah-mitchell",
    quote:
      "Coming home after work to a spotless apartment was exactly what I needed. The cleaners were friendly, professional, and worked efficiently without cutting corners. I'm genuinely impressed.",
    name: "Sarah Mitchell",
    location: "Charlotte, North Carolina, USA",
  },
  {
    id: "tunde-adebayo",
    quote:
      "I've had bad experiences with cleaners before, so I was a bit skeptical. Thankfully, they exceeded my expectations. My kitchen and bathrooms were sparkling, and the whole house felt fresh.",
    name: "Tunde Adebayo",
    location: "Ibadan, Nigeria",
  },
  {
    id: "jessica-brown",
    quote:
      "The service was excellent from start to finish. Booking was easy, communication was clear, and the team treated my home with so much respect. I couldn't have asked for a better experience.",
    name: "Jessica Brown",
    location: "Atlanta, Georgia, USA",
  },
  {
    id: "chidinma-akinwale",
    quote:
      "What impressed me the most was the attention to detail. They didn't just clean the obvious areas - they took their time to make sure everything looked perfect. I highly recommend them.",
    name: "Chidinma Akinwale",
    location: "Lagos, Nigeria",
  },
  {
    id: "david-reynolds",
    quote:
      "I booked a deep cleaning before having guests over, and I honestly couldn't believe the transformation. Even my family kept asking who cleaned the house. It was worth every penny.",
    name: "David Reynolds",
    location: "Dallas, Texas, USA",
  },
  {
    id: "kemi-oladipo",
    quote:
      "The cleaners were punctual, polite, and incredibly hardworking. They made my home feel fresh again, and I appreciated how careful they were with my furniture and personal belongings.",
    name: "Kemi Oladipo",
    location: "Ibadan, Nigeria",
  },
  {
    id: "emily-carter",
    quote:
      "This has easily been one of the best cleaning services I've used. The results were consistent, the staff were professional, and I love knowing I can rely on them every time.",
    name: "Emily Carter",
    location: "Orlando, Florida, USA",
  },
  {
    id: "femi-adeyemi",
    quote:
      "My house looked spotless when they were done. The floors were shining, every room smelled clean, and even the little details weren't overlooked. I'll definitely be recommending them to friends and family.",
    name: "Femi Adeyemi",
    location: "Lagos, Nigeria",
  },
];

/**
 * Testimonials & Social Proof - real client feedback from Nigeria and the US.
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
            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>

            <ReviewPlaceholder />
          </div>
        </div>
      </Container>
    </section>
  );
}
