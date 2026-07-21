"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, CalendarClock, Home, UserRoundCheck } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { Container } from "@/components/layout/container";
import { TrustCard, type TrustCardData } from "@/components/sections/trust/TrustCard";

const TRUST_CARDS: TrustCardData[] = [
  {
    id: "residential",
    title: "Residential Cleaning",
    description:
      "Beds made, counters clear, floors that look walked-on-by-socks — a home that feels done when you walk back in.",
    icon: Home,
    featured: true,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Offices and facilities kept to the same standard every weekday — so clients never walk into yesterday’s dust.",
    icon: Building2,
    className: "md:col-span-2",
  },
  {
    id: "professionals",
    title: "Experienced Professionals",
    description:
      "ID-checked teams trained on room-by-room checklists — not day labour rotated through your door.",
    icon: UserRoundCheck,
    className: "md:col-span-1",
  },
  {
    id: "scheduling",
    title: "Flexible Scheduling",
    description:
      "Same-day when the diary opens, or fixed weekly and monthly plans that show up without chasing reminders.",
    icon: CalendarClock,
    className: "md:col-span-1",
  },
];

/**
 * Trust & Credibility — first proof point after the hero.
 * Asymmetric bento grid; Residential Cleaning anchors the layout.
 */
export function TrustSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="trust"
      className="bg-brand-base scroll-mt-24 py-16 sm:py-20 lg:py-24"
      aria-labelledby="trust-heading"
    >
      <Container>
        <motion.header
          className="mb-10 max-w-2xl md:mb-14"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: easePremium }}
        >
          <p className="text-text-muted mb-3 text-[0.8125rem] font-medium tracking-[0.14em] uppercase">
            Built on reliability
          </p>
          <h2
            id="trust-heading"
            className="text-text-primary font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
          >
            Why homes and offices choose GS Pro
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl text-[length:var(--text-body-lg)] leading-[var(--leading-body)]">
            Hiring cleaners means letting people into your space. We earn that trust with vetted
            staff, the same finish every visit, and schedules you can plan around.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4 md:grid-rows-[minmax(11rem,auto)_minmax(11rem,auto)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {TRUST_CARDS.map((card, index) => (
            <TrustCard key={card.id} card={card} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
