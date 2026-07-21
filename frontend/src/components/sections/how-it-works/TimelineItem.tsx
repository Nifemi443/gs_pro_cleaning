"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

export type TimelineStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type TimelineItemProps = {
  step: TimelineStep;
  index: number;
  /** Delay synced with progress line reaching this step */
  delay: number;
};

export function TimelineItem({ step, index, delay }: TimelineItemProps) {
  const reduceMotion = useReducedMotion();
  const Icon = step.icon;

  return (
    <motion.li
      className={cn(
        "group relative flex gap-4 sm:gap-5",
        /* Desktop horizontal: stack content under watermark + icon */
        "lg:flex-col lg:items-start lg:gap-4 lg:px-2",
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        ease: easePremium,
        delay: reduceMotion ? 0 : delay,
      }}
      whileHover={
        reduceMotion ? undefined : { y: -3, transition: { duration: 0.2, ease: easePremium } }
      }
    >
      {/* Watermark numeral */}
      <span
        aria-hidden
        className={cn(
          "text-brand-navy/15 pointer-events-none absolute font-[family-name:var(--font-display)] font-light select-none",
          "text-[3.25rem] leading-none sm:text-[3.75rem]",
          "top-0 left-10 lg:top-0 lg:left-0",
        )}
      >
        {step.number}
      </span>

      {/* Icon — sits beside title on mobile, above on desktop */}
      <span
        className={cn(
          "relative z-[1] mt-1 flex size-10 shrink-0 items-center justify-center rounded-[10px]",
          "bg-brand-navy/6 text-brand-navy",
          index === 0 && "bg-brand-green/10 text-brand-green",
          "lg:mt-8",
        )}
        aria-hidden
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>

      <div className="relative z-[1] min-w-0 flex-1 pt-1 lg:pt-0">
        <h3 className="text-brand-navy font-[family-name:var(--font-display)] text-lg leading-snug font-semibold sm:text-xl">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-[1.65] text-[#3d4654] sm:text-[0.9375rem]">
          {step.description}
        </p>
      </div>
    </motion.li>
  );
}
