"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

export type TrustCardData = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  className?: string;
};

type TrustCardProps = {
  card: TrustCardData;
  index: number;
};

export function TrustCard({ card, index }: TrustCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = card.icon;

  return (
    <motion.article
      variants={{
        hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: easePremium,
            delay: reduceMotion ? 0 : index * 0.1,
          },
        },
      }}
      whileHover={
        reduceMotion ? undefined : { y: -3, transition: { duration: 0.22, ease: easePremium } }
      }
      className={cn(
        "group bg-brand-mist relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-transparent p-6 sm:p-7",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-brand-accent/55 hover:shadow-soft-md",
        card.featured && "bg-white sm:p-8 lg:p-9",
        card.className,
      )}
    >
      <div>
        <Icon
          className={cn(
            "mb-5 size-[1.125rem] shrink-0 sm:size-5",
            card.featured ? "text-brand-accent" : "text-brand-slate",
          )}
          strokeWidth={1.75}
          aria-hidden
        />
        <h3
          className={cn(
            "text-text-primary font-[family-name:var(--font-display)] font-semibold tracking-[-0.02em]",
            card.featured
              ? "text-2xl leading-tight sm:text-[1.75rem]"
              : "text-lg leading-snug sm:text-xl",
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "text-text-secondary mt-3 max-w-prose font-[family-name:var(--font-body)] leading-relaxed",
            card.featured ? "text-base sm:text-[1.0625rem]" : "text-sm sm:text-[0.9375rem]",
          )}
        >
          {card.description}
        </p>
      </div>

      {card.featured ? (
        <p className="text-brand-accent mt-8 text-[0.6875rem] font-medium tracking-[0.12em] uppercase">
          Primary service
        </p>
      ) : null}
    </motion.article>
  );
}
