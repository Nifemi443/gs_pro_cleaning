"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

export type HeroStatCard = {
  id: string;
  title: string;
  detail: string;
  accentBorder?: boolean;
  className: string;
  delay: number;
};

export const HERO_STATS: HeroStatCard[] = [
  {
    id: "availability",
    title: "Next available: Today",
    detail: "Same-day slots when the schedule opens",
    accentBorder: true,
    className: "left-3 top-[14%] sm:-left-5 lg:-left-8",
    delay: 0.9,
  },
  {
    id: "checklist",
    title: "Signed-off checklist",
    detail: "Kitchens, baths, floors — verified before we leave",
    className: "right-2 top-[42%] sm:-right-3 lg:-right-6",
    delay: 1.05,
  },
  {
    id: "coverage",
    title: "Nigeria & United States",
    detail: "Local teams, one standard.",
    className: "bottom-[12%] left-5 sm:left-10",
    delay: 1.18,
  },
];

type HeroStatsProps = {
  stats?: HeroStatCard[];
};

export function HeroStats({ stats = HERO_STATS }: HeroStatsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ul className="contents" aria-label="Service details">
      {stats.map((stat) => (
        <li key={stat.id} className={cn("absolute z-20", stat.className)}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { delay: stat.delay, duration: 0.45, ease: easePremium }
            }
            whileHover={
              reduceMotion ? undefined : { y: -3, transition: { duration: 0.2, ease: easePremium } }
            }
            className={cn(
              "bg-brand-mist shadow-soft-md max-w-[13.5rem] rounded-2xl px-3.5 py-3 sm:max-w-[15rem] sm:px-4 sm:py-3.5",
              "border border-transparent",
              stat.accentBorder && "border-brand-accent/70 bg-white",
            )}
          >
            <p className="text-brand-slate font-[family-name:var(--font-body)] text-[0.8125rem] leading-snug font-semibold sm:text-sm">
              {stat.title}
            </p>
            <p className="text-text-muted mt-1 text-[0.6875rem] leading-snug sm:text-xs">
              {stat.detail}
            </p>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}
