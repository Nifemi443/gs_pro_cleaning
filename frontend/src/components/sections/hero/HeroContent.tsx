"use client";

import { motion, useReducedMotion } from "framer-motion";

import Link from "next/link";

import { BrandButton, QuoteButton } from "@/components/buttons";
import { easePremium } from "@/components/animations/presets";
import { ROUTES } from "@/constants/site";

export function HeroContent() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.5, ease: easePremium },
        };

  return (
    <div className="relative z-10 flex max-w-[34rem] flex-col justify-center lg:py-6">
      <motion.p
        className="text-text-muted mb-5 text-[0.8125rem] font-medium tracking-[0.14em] uppercase"
        {...reveal(0.32)}
      >
        Residential & Commercial
      </motion.p>

      <motion.h1
        id="hero-heading"
        className="text-brand-slate font-[family-name:var(--font-display)] text-[length:var(--text-display-l)] leading-[var(--leading-display)] font-semibold tracking-[var(--tracking-display)]"
        {...reveal(0.42)}
      >
        Unlock the door to a space that&apos;s already finished.
      </motion.h1>

      <motion.p
        className="text-text-secondary mt-6 max-w-md text-[length:var(--text-body-lg)] leading-[var(--leading-body)]"
        {...reveal(0.54)}
      >
        GS Pro cleans homes and offices across Nigeria and the United States — checklist-tight,
        consistent every visit, so you can trust someone else in your space.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        {...reveal(0.66)}
      >
        <QuoteButton size="lg">Request a Free Quote</QuoteButton>
        <BrandButton
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href={ROUTES.services} />}
        >
          Explore Our Services
        </BrandButton>
      </motion.div>
    </div>
  );
}
