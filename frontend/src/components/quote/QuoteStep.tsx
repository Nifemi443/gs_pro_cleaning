"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

type QuoteStepProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Animated shell for each quote form step.
 */
export function QuoteStep({ title, description, children, className }: QuoteStepProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("flex flex-col gap-6", className)}
      initial={reduceMotion ? false : { opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
      transition={{ duration: 0.28, ease: easePremium }}
    >
      <div>
        <h3 className="text-brand-navy font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
          {title}
        </h3>
        {description ? (
          <p className="mt-1.5 text-sm leading-relaxed text-[#5c6570]">{description}</p>
        ) : null}
      </div>
      {children}
    </motion.div>
  );
}
