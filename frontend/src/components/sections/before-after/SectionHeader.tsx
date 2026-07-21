"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { BrandButton } from "@/components/buttons";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  className?: string;
};

/**
 * Left-column header for the Before & After showcase.
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
        <p className="mb-3 text-[0.8125rem] font-medium tracking-[0.14em] text-[#5c6570] uppercase">
          Our work
        </p>
        <h2
          id="before-after-heading"
          className="text-brand-navy font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
        >
          See the Difference Professional Cleaning Makes
        </h2>
        <p className="mt-4 text-[length:var(--text-body-lg)] leading-[var(--leading-body)] text-[#3d4654]">
          Every job has a before and after — a home cleared for new owners, an office reset for
          Monday, a build dusted for handover. Drag the slider on each project to see what our team
          leaves behind.
        </p>
      </div>

      <BrandButton
        size="md"
        variant="outline"
        className="border-brand-navy text-brand-navy hover:bg-brand-navy/5 w-fit border-2 bg-transparent"
        nativeButton={false}
        render={<Link href="/#gallery" />}
      >
        View More Projects
      </BrandButton>
    </motion.div>
  );
}
