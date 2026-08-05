"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

import { easePremium } from "@/components/animations/presets";
import { BrandButton } from "@/components/buttons";
import { Container } from "@/components/layout/container";

const INCLUDED = [
  "On-site compliance walkthrough with facility leadership",
  "Survey-ready cleaning protocol tailored to your floor plan",
  "Staff training session on high-touch and documentation habits",
  "Turnkey checklist pack for bathrooms, kitchens, and common areas",
  "30-day follow-up to lock in standards after launch",
] as const;

/**
 * Transparent $1,500 turnkey package for group home / compliance leads.
 */
export function PricingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="bg-brand-warm scroll-mt-24 py-16 sm:py-20 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: easePremium }}
          >
            <p className="mb-3 text-[0.8125rem] font-medium tracking-[0.14em] text-[#B8912F] uppercase">
              Transparent Pricing
            </p>
            <h2
              id="pricing-heading"
              className="text-brand-navy font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
            >
              One Clear Package for Survey-Ready Operations
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.65] text-[#3d4654]">
              Pre-qualify your facility before the call. No mystery retainers - a single turnkey
              engagement that installs cleaning standards your team can run.
            </p>
          </motion.div>

          <motion.div
            className="bg-brand-navy relative overflow-hidden rounded-[16px] px-6 py-8 text-white sm:px-8 sm:py-10 lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easePremium, delay: reduceMotion ? 0 : 0.08 }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 90% 10%, rgb(184 145 47 / 0.35), transparent 55%)",
              }}
              aria-hidden
            />

            <div className="relative">
              <p className="text-[0.75rem] font-medium tracking-[0.16em] text-[#B8912F] uppercase">
                Turnkey Compliance Package
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-2">
                <span className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-6xl">
                  $1,500
                </span>
                <span className="mb-2 text-sm text-white/65">one-time engagement</span>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">
                Designed for group home operators who need survey-ready systems, trained staff, and
                a partner who understands compliance pressure.
              </p>

              <ul className="mt-8 flex flex-col gap-3.5" role="list">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/90">
                    <Check
                      className="text-brand-green mt-0.5 size-4 shrink-0"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <BrandButton
                size="lg"
                className="bg-brand-green hover:bg-brand-green-hover mt-9 w-full text-white sm:w-auto"
                render={<Link href="/#contact" />}
              >
                Schedule Compliance Walkthrough
              </BrandButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
