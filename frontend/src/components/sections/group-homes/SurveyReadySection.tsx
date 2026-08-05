"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, HeartPulse, Scale, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { easePremium } from "@/components/animations/presets";
import { BrandButton } from "@/components/buttons";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    id: "survey",
    icon: ClipboardCheck,
    title: "Survey-Ready Environments",
    description:
      "Room-by-room protocols built so operations directors can walk into state surveys with documentation and spaces that hold up under inspection.",
  },
  {
    id: "safety",
    icon: HeartPulse,
    title: "Resident Safety First",
    description:
      "High-touch sanitation, chemical discipline, and infection-control habits that protect vulnerable residents - not just a surface-level tidy.",
  },
  {
    id: "compliance",
    icon: Scale,
    title: "Audit-Aligned Methods",
    description:
      "We train teams to clean the way auditors look: bathrooms, kitchens, med rooms, and common areas with repeatable standards every visit.",
  },
  {
    id: "partner",
    icon: ShieldCheck,
    title: "Compliance Training Partner",
    description:
      "GS Pro is more than a cleaning crew. We help group home operators install habits that stick after we leave the building.",
  },
] as const;

/**
 * B2B Group Homes band - survey-ready positioning without replacing consumer services.
 */
export function SurveyReadySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="group-homes"
      className="bg-brand-navy scroll-mt-24 py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="group-homes-heading"
    >
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: easePremium }}
          >
            <p className="mb-3 text-[0.8125rem] font-medium tracking-[0.14em] text-[#B8912F] uppercase">
              For Group Home Operators
            </p>
            <h2
              id="group-homes-heading"
              className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
            >
              Built for Survey Day - Not Just Cleaning Day
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.65] text-white/75">
              A specialized compliance and training partner for group home operations. We help
              facilities stay resident-safe, documentation-ready, and calm when auditors arrive.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BrandButton
                size="md"
                className="bg-brand-green hover:bg-brand-green-hover text-white"
                render={<Link href="/#pricing" />}
              >
                View Turnkey Package
              </BrandButton>
              <BrandButton
                size="md"
                variant="ghost"
                className="justify-start px-2 text-white/85 hover:bg-transparent hover:text-white"
                render={<Link href="/#contact" />}
              >
                Schedule a Walkthrough
              </BrandButton>
            </div>
          </motion.div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7" role="list">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.li
                  key={pillar.id}
                  className={cn("border-t border-white/15 pt-5")}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.4,
                    ease: easePremium,
                    delay: reduceMotion ? 0 : 0.08 * index,
                  }}
                >
                  <Icon className="mb-3 size-5 text-[#B8912F]" strokeWidth={1.75} aria-hidden />
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.65] text-white/70">{pillar.description}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
