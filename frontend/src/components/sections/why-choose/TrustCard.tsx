"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

type TrustCardProps = {
  className?: string;
  /** Delay after image reveal (seconds) */
  delay?: number;
};

/**
 * Floating trust card — qualitative markers only, no fabricated stats.
 */
export function TrustCard({ className, delay = 0.15 }: TrustCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      className={cn(
        "rounded-[12px] bg-white shadow-[0_10px_28px_rgb(18_41_77/0.12)]",
        "border-l-brand-gold border-l-[3px]",
        "px-5 py-4 sm:px-6 sm:py-5",
        className,
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
        reduceMotion ? undefined : { y: -2, transition: { duration: 0.2, ease: easePremium } }
      }
    >
      <p className="text-brand-navy font-[family-name:var(--font-display)] text-base leading-snug font-semibold sm:text-lg">
        Trusted by Homeowners &amp; Businesses
      </p>
      <ul className="mt-3 space-y-2">
        <li className="flex items-center gap-2 text-sm leading-[1.65] text-[#3d4654]">
          <span className="bg-brand-green/12 text-brand-green flex size-5 shrink-0 items-center justify-center rounded-full">
            <Check className="size-3" strokeWidth={2.5} aria-hidden />
          </span>
          Responsive Support
        </li>
        <li className="flex items-center gap-2 text-sm leading-[1.65] text-[#3d4654]">
          <span className="bg-brand-green/12 text-brand-green flex size-5 shrink-0 items-center justify-center rounded-full">
            <Check className="size-3" strokeWidth={2.5} aria-hidden />
          </span>
          Personalized Service
        </li>
      </ul>
    </motion.aside>
  );
}
