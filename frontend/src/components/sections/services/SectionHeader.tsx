"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  titleId: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleId,
  className,
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className={cn("mb-12 max-w-2xl md:mb-16", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: easePremium }}
    >
      <p className="mb-3 text-[0.8125rem] font-medium tracking-[0.14em] text-[#5c6570] uppercase">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="text-brand-navy font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
      >
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-[length:var(--text-body-lg)] leading-[1.65] text-[#3d4654]">
        {description}
      </p>
    </motion.header>
  );
}
