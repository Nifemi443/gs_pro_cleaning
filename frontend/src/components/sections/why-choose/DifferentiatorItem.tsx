"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

export type Differentiator = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Green for checkmark-style emphasis; navy for the rest */
  iconTone?: "navy" | "green";
};

type DifferentiatorItemProps = {
  item: Differentiator;
  index: number;
};

export function DifferentiatorItem({ item, index }: DifferentiatorItemProps) {
  const reduceMotion = useReducedMotion();
  const Icon = item.icon;
  const tone = item.iconTone ?? "navy";

  return (
    <motion.li
      className="flex gap-4"
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        ease: easePremium,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
    >
      <span
        className={cn(
          "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[10px]",
          tone === "green"
            ? "bg-brand-green/10 text-brand-green"
            : "bg-brand-navy/8 text-brand-navy",
        )}
        aria-hidden
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <h3 className="text-brand-navy font-[family-name:var(--font-display)] text-base leading-snug font-semibold sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-1 text-sm leading-[1.65] text-[#3d4654] sm:text-[0.9375rem]">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
