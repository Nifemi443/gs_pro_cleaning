"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { CalendarClock, CheckCircle2, MessageCircle, Receipt } from "lucide-react";

import { TimelineItem, type TimelineStep } from "@/components/sections/how-it-works/TimelineItem";
import { cn } from "@/lib/utils";

const STEPS: TimelineStep[] = [
  {
    id: "request-quote",
    number: "01",
    title: "Request a Free Quote",
    description: "Tell us what needs cleaning using our quick form or WhatsApp.",
    icon: MessageCircle,
  },
  {
    id: "receive-estimate",
    number: "02",
    title: "Receive Your Personalized Estimate",
    description:
      "We'll review your request and send you a customized quotation based on your cleaning requirements.",
    icon: Receipt,
  },
  {
    id: "schedule",
    number: "03",
    title: "Schedule Your Cleaning",
    description: "Choose a date and time that works best for you.",
    icon: CalendarClock,
  },
  {
    id: "enjoy",
    number: "04",
    title: "Enjoy a Professionally Clean Space",
    description: "Our team arrives ready to deliver a thorough, reliable cleaning service.",
    icon: CheckCircle2,
  },
];

/** Stagger so each step arrives as the line reaches it (~0.22s per segment). */
const STEP_DELAY = 0.22;

type TimelineProps = {
  className?: string;
};

/**
 * Four-step journey with progressive green line-fill connector.
 */
export function Timeline({ className }: TimelineProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const progress = useMotionValue(reduceMotion ? 1 : 0);
  const smoothProgress = useSpring(progress, {
    stiffness: 60,
    damping: 22,
    mass: 0.6,
  });

  React.useEffect(() => {
    if (reduceMotion) {
      progress.set(1);
      return;
    }
    if (!inView) return;

    // Animate fill in sync with staggered steps (4 segments).
    const durationMs = STEPS.length * STEP_DELAY * 1000;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      progress.set(t);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, progress, reduceMotion]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* —— Desktop / large: horizontal track —— */}
      <div
        className="pointer-events-none absolute top-[2.85rem] right-0 left-0 hidden h-[2px] lg:block"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[#E5E5E5]" />
        <motion.div
          className="bg-brand-green absolute inset-y-0 left-0 origin-left"
          style={{ scaleX: smoothProgress }}
        />
      </div>

      {/* —— Mobile: vertical track (hidden on md 2×2 and lg horizontal) —— */}
      <div
        className="pointer-events-none absolute top-3 bottom-3 left-[1.2rem] w-[2px] md:hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[#E5E5E5]" />
        <motion.div
          className="bg-brand-green absolute inset-x-0 top-0 origin-top"
          style={{ scaleY: smoothProgress }}
        />
      </div>

      {/* —— Tablet: top progress bar for the 2×2 grid —— */}
      <div
        className="pointer-events-none absolute -top-6 right-0 left-0 hidden h-[2px] md:block lg:hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[#E5E5E5]" />
        <motion.div
          className="bg-brand-green absolute inset-y-0 left-0 origin-left"
          style={{ scaleX: smoothProgress }}
        />
      </div>

      <ol
        className={cn(
          "relative grid list-none gap-10 p-0",
          "md:grid-cols-2 md:gap-x-10 md:gap-y-12",
          "lg:grid-cols-4 lg:gap-6",
        )}
      >
        {STEPS.map((step, index) => (
          <TimelineItem
            key={step.id}
            step={step}
            index={index}
            delay={reduceMotion ? 0 : index * STEP_DELAY}
          />
        ))}
      </ol>
    </div>
  );
}
