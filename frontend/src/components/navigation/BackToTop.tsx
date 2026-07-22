"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 480;

/**
 * Floating back-to-top control — appears after scrolling past the hero.
 */
export function BackToTop({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          key="back-to-top"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          transition={{ duration: 0.25, ease: easePremium }}
          className={cn(
            "fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6",
            "flex size-11 items-center justify-center rounded-full",
            "bg-brand-navy text-white shadow-[0_8px_24px_rgb(18_41_77/0.28)]",
            "transition-[transform,background-color,box-shadow] duration-200",
            "hover:bg-brand-navy-hover motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_12px_28px_rgb(18_41_77/0.35)]",
            "focus-visible:ring-brand-gold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            className,
          )}
        >
          <ArrowUp className="size-5" strokeWidth={2} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
