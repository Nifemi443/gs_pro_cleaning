"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  className?: string;
};

/**
 * Left-column header for Testimonials.
 */
export function SectionHeader({ className }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("flex flex-col gap-6", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: easePremium }}
    >
      <div>
        <p className="mb-3 text-[0.8125rem] font-medium tracking-[0.14em] text-[#B8912F] uppercase">
          What Clients Say
        </p>
        <h2
          id="testimonials-heading"
          className="text-brand-navy font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
        >
          Trusted in Homes Across Nigeria &amp; the US
        </h2>
        <p className="mt-4 max-w-md text-[length:var(--text-body-lg)] leading-[1.65] text-[#3d4654]">
          Real feedback from clients who booked GS Pro - from Lagos and Ibadan to Houston, Dallas,
          and beyond.
        </p>
      </div>
    </motion.div>
  );
}
