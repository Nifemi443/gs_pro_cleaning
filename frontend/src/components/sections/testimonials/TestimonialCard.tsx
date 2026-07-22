"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, User } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

export type TestimonialPlaceholder = {
  id: string;
  /** Structural service pattern — not a fabricated review claim */
  servicePattern: string;
  featured?: boolean;
  className?: string;
};

type TestimonialCardProps = {
  placeholder: TestimonialPlaceholder;
  index: number;
};

function UnfilledStars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="Star rating not yet available">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 text-[#b8b4ae]"
          strokeWidth={1.5}
          fill="none"
          aria-hidden
        />
      ))}
    </div>
  );
}

/**
 * Clearly placeholder testimonial card — no fabricated names, quotes, or ratings.
 */
export function TestimonialCard({ placeholder, index }: TestimonialCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "flex h-full flex-col rounded-[12px] bg-white p-5 shadow-[0_4px_18px_rgb(18_41_77/0.06)] sm:p-6",
        "transition-[box-shadow,transform] duration-300",
        "hover:shadow-[0_10px_28px_rgb(18_41_77/0.1)]",
        placeholder.className,
      )}
      aria-label="Testimonial placeholder — content pending"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        ease: easePremium,
        delay: reduceMotion ? 0 : index * 0.1,
      }}
      whileHover={
        reduceMotion ? undefined : { y: -3, transition: { duration: 0.2, ease: easePremium } }
      }
    >
      <div className="flex items-center gap-3">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#e8e6e2] text-[#8a8490]"
          aria-hidden
        >
          <User className="size-5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#6b6570]">[Client Name]</p>
          <p className="truncate text-xs text-[#8a8490]">[City/Area]</p>
        </div>
      </div>

      <p className="mt-3 text-[0.6875rem] font-medium tracking-wide text-[#8a8490] uppercase">
        {placeholder.servicePattern}
      </p>

      <UnfilledStars />

      <p className="mt-4 flex-1 font-[family-name:var(--font-display)] text-[0.9375rem] leading-[1.65] text-[#5c6570] italic sm:text-base">
        Client testimonial will appear here once available.
      </p>
    </motion.article>
  );
}
