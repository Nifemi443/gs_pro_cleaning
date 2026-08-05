"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, User } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  featured?: boolean;
  className?: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

function FilledStars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 text-[#B8912F]"
          strokeWidth={1.5}
          fill="currentColor"
          aria-hidden
        />
      ))}
    </div>
  );
}

/**
 * Client testimonial card with quote, name, and location.
 */
export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const reduceMotion = useReducedMotion();
  const initials = testimonial.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <motion.article
      className={cn(
        "flex h-full flex-col rounded-[12px] bg-white p-5 shadow-[0_4px_18px_rgb(18_41_77/0.06)] sm:p-6",
        "transition-[box-shadow,transform] duration-300",
        "hover:shadow-[0_10px_28px_rgb(18_41_77/0.1)]",
        testimonial.featured && "ring-brand-gold/40 ring-1",
        testimonial.className,
      )}
      aria-label={`Testimonial from ${testimonial.name}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        ease: easePremium,
        delay: reduceMotion ? 0 : Math.min(index, 5) * 0.07,
      }}
      whileHover={
        reduceMotion ? undefined : { y: -3, transition: { duration: 0.2, ease: easePremium } }
      }
    >
      <div className="flex items-center gap-3">
        <span
          className="bg-brand-navy/8 text-brand-navy flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
          aria-hidden
        >
          {initials || <User className="size-5" strokeWidth={1.75} />}
        </span>
        <div className="min-w-0">
          <p className="text-brand-navy truncate text-sm font-semibold">{testimonial.name}</p>
          <p className="truncate text-xs text-[#5c6570]">{testimonial.location}</p>
        </div>
      </div>

      <div className="mt-3">
        <FilledStars />
      </div>

      <blockquote className="mt-4 flex-1 font-[family-name:var(--font-display)] text-[0.9375rem] leading-[1.65] text-[#3d4654] italic sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </motion.article>
  );
}
