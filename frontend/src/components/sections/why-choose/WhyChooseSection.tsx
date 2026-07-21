"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  ClipboardList,
  MessageCircle,
  Receipt,
} from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { Container } from "@/components/layout/container";
import {
  DifferentiatorItem,
  type Differentiator,
} from "@/components/sections/why-choose/DifferentiatorItem";
import { SectionHeader } from "@/components/sections/why-choose/SectionHeader";
import { TrustCard } from "@/components/sections/why-choose/TrustCard";

const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "trained-team",
    title: "Trained & Professional Team",
    description:
      "Every cleaner completes GS Pro standards training before working unsupervised — we don't send someone who was just hired that morning.",
    icon: BadgeCheck,
    iconTone: "green",
  },
  {
    id: "residential-commercial",
    title: "Residential & Commercial Expertise",
    description:
      "The same crew handles living rooms and lobbies, so the process stays consistent whether the job is a home or an office.",
    icon: Building2,
  },
  {
    id: "flexible-scheduling",
    title: "Flexible Scheduling",
    description:
      "Book one-time, weekly, or move-in/move-out visits around your calendar instead of fitting into a fixed slot system.",
    icon: CalendarClock,
  },
  {
    id: "detail-oriented",
    title: "Detail-Oriented Cleaning",
    description:
      "Each room type has a defined checklist, so tasks don't get skipped between visits or between different cleaners.",
    icon: ClipboardList,
    iconTone: "green",
  },
  {
    id: "reliable-communication",
    title: "Reliable Communication",
    description:
      "You get confirmed booking times, a heads-up if a cleaner is running late, and a real point of contact — not radio silence until the doorbell rings.",
    icon: MessageCircle,
  },
  {
    id: "personalized-quotes",
    title: "Personalized Quotes",
    description:
      "Pricing reflects the actual space and condition of the job, rather than a flat rate that ignores size or complexity.",
    icon: Receipt,
  },
];

/**
 * Why Choose GS Pro — process-led differentiators, not buzzword cards.
 */
export function WhyChooseSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="why-choose-heading"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left: header + checklist */}
          <div className="flex flex-col gap-10 lg:col-span-5">
            <SectionHeader />

            <ul className="flex flex-col gap-6 sm:gap-7" role="list">
              {DIFFERENTIATORS.map((item, index) => (
                <DifferentiatorItem key={item.id} item={item} index={index} />
              ))}
            </ul>
          </div>

          {/* Right: team image + floating trust card */}
          <div className="relative lg:col-span-7 lg:pt-2">
            <motion.div
              className="relative overflow-hidden rounded-[14px] shadow-[0_12px_32px_rgb(18_41_77/0.12)]"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: easePremium }}
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/3]">
                <Image
                  src="/images/why-choose/team-at-work.jpg"
                  alt="GS Pro cleaning team working in a modern home"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>

            <TrustCard className="relative z-10 mt-[-2.5rem] ml-4 max-w-[18.5rem] sm:absolute sm:right-6 sm:bottom-6 sm:mt-0 sm:ml-0 sm:max-w-[19.5rem]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
