"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

type SuccessScreenProps = {
  className?: string;
};

/**
 * Confirmation shown briefly before WhatsApp opens.
 */
export function SuccessScreen({ className }: SuccessScreenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      className={cn("flex flex-col items-center gap-4 px-2 py-10 text-center", className)}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: easePremium }}
    >
      <span className="bg-brand-green/12 text-brand-green flex size-14 items-center justify-center rounded-full">
        <CheckCircle2 className="size-7" strokeWidth={1.75} aria-hidden />
      </span>
      <div>
        <h3 className="text-brand-navy font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
          Thank you!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#5c6570] sm:text-base">
          We&apos;re opening WhatsApp so you can send your quote request.
        </p>
      </div>
    </motion.div>
  );
}
