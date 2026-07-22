"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

const PLATFORMS = [
  { id: "google", label: "Google Reviews" },
  { id: "facebook", label: "Facebook Reviews" },
  { id: "linkedin", label: "LinkedIn Recommendations" },
] as const;

type ReviewPlaceholderProps = {
  className?: string;
};

/**
 * Inactive platform badge slots — no ratings or review counts.
 */
export function ReviewPlaceholder({ className }: ReviewPlaceholderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("mt-8", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, ease: easePremium, delay: 0.35 }}
      aria-label="Review platform links pending connection"
    >
      <p className="mb-3 text-[0.6875rem] font-medium tracking-[0.12em] text-[#8a8490] uppercase">
        Review platforms
      </p>
      <ul className="flex flex-wrap gap-2.5">
        {PLATFORMS.map((platform) => (
          <li key={platform.id}>
            <span
              className={cn(
                "inline-flex items-center rounded-[8px] border border-dashed border-[#cfcac3]",
                "bg-[#faf9f7] px-3.5 py-2 text-xs font-medium text-[#8a8490]",
              )}
              aria-disabled="true"
            >
              {platform.label}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
