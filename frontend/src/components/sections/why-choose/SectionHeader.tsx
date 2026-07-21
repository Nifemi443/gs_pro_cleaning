"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  className?: string;
};

/**
 * Header for the Why Choose GS Pro section.
 */
export function SectionHeader({ className }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: easePremium }}
    >
      <p className="mb-3 text-[0.8125rem] font-medium tracking-[0.14em] text-[#5c6570] uppercase">
        Why GS Pro
      </p>
      <h2
        id="why-choose-heading"
        className="text-brand-navy font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
      >
        A Professional Process Behind Every Clean
      </h2>
      <p className="mt-4 max-w-md text-[length:var(--text-body-lg)] leading-[1.65] text-[#3d4654]">
        We built our service around what clients notice when a job goes wrong — skipped rooms, late
        arrivals, and pricing that doesn&apos;t match the space. Here&apos;s how we work
        differently.
      </p>
    </motion.div>
  );
}
