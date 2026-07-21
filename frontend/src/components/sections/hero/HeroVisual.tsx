"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { HeroStats } from "@/components/sections/hero/HeroStats";
import { easePremium } from "@/components/animations/presets";

/**
 * Local hero asset — path must match public/ exactly (case + extension).
 * Previously remote Unsplash; `lg:aspect-auto` + min-height alone left the
 * fill parent without a definite height, so the mist fallback showed at the top.
 */
const HERO_IMAGE = "/images/hero-living-room.jpg";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-none lg:justify-self-end">
      <motion.div
        className="bg-brand-mist shadow-soft-lg relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] sm:aspect-[5/6] lg:aspect-auto lg:h-[34rem] lg:min-h-[34rem]"
        initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(8% 8% 8% 8% round 1.5rem)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.85, ease: easePremium, delay: 0.06 }
        }
      >
        <Image
          src={HERO_IMAGE}
          alt="A bright, freshly finished living room with clear surfaces and soft natural light"
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 46vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgb(22_48_43/0.22)] via-transparent to-[rgb(247_249_248/0.1)]"
          aria-hidden
        />
      </motion.div>

      <HeroStats />
    </div>
  );
}
