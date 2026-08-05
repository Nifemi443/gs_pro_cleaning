"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { Container } from "@/components/layout/container";
import { CONTACT } from "@/constants/site";
import { WalkthroughForm } from "@/components/sections/group-homes/WalkthroughForm";

/**
 * Contact / lead capture for compliance walkthroughs.
 */
export function WalkthroughSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: easePremium }}
          >
            <p className="mb-3 text-[0.8125rem] font-medium tracking-[0.14em] text-[#B8912F] uppercase">
              Lead Capture
            </p>
            <h2
              id="contact-heading"
              className="text-brand-navy font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]"
            >
              Book Your Compliance Walkthrough
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.65] text-[#3d4654]">
              Operations directors and facility leads - tell us where you are and when you need to
              be survey-ready. We&apos;ll confirm a walkthrough and map the $1,500 turnkey
              engagement to your homes.
            </p>

            <dl className="mt-8 flex flex-col gap-4 text-sm">
              <div>
                <dt className="text-[0.6875rem] font-medium tracking-[0.12em] text-[#8a8490] uppercase">
                  Phone
                </dt>
                <dd className="text-brand-navy mt-1 font-medium">
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="hover:text-brand-green transition-colors"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-medium tracking-[0.12em] text-[#8a8490] uppercase">
                  Email
                </dt>
                <dd className="text-brand-navy mt-1 font-medium">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-brand-green break-all transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-medium tracking-[0.12em] text-[#8a8490] uppercase">
                  Instagram
                </dt>
                <dd className="text-brand-navy mt-1 font-medium">
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-green transition-colors"
                  >
                    @{CONTACT.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

          <div className="lg:col-span-7">
            <WalkthroughForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
