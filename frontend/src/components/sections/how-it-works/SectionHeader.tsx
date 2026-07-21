"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  className?: string;
};

/**
 * Header for the How It Works section.
 */
export function SectionHeader({ className }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className={cn("mx-auto mb-12 max-w-2xl text-center md:mb-16", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: easePremium }}
    >
      <p className="mb-3 text-[0.8125rem] font-medium tracking-[0.14em] text-[#5c6570] uppercase">
        How It Works
      </p>
      <h2
        id="how-it-works-heading"
        className="text-brand-navy font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
      >
        From Quote to Clean — Four Clear Steps
      </h2>
      <p className="mt-4 text-[length:var(--text-body-lg)] leading-[1.65] text-[#3d4654]">
        No fixed prices, no upfront payment to get started. Tell us about the space, get a
        personalized estimate, and book when you&apos;re ready.
      </p>
    </motion.header>
  );
}
