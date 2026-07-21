"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easePremium } from "@/components/animations/presets";
import { ServiceImage } from "@/components/sections/services/ServiceImage";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ProductsTeaserProps = {
  className?: string;
};

/**
 * Forthcoming products line — visually quiet, not bookable.
 */
export function ProductsTeaser({ className }: ProductsTeaserProps) {
  const reduceMotion = useReducedMotion();
  const notifyHref = getWhatsAppQuoteUrl(
    "Hello GS Pro — please notify me when GS Pro Products are available.",
  );
  const notifyExternal = notifyHref.startsWith("http");

  return (
    <motion.aside
      id="services-products"
      className={cn(
        "grid items-center gap-8 rounded-[14px] border border-[#e5e2dc] bg-[#faf9f7] px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-12",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: easePremium }}
      aria-labelledby="products-teaser-heading"
    >
      <ServiceImage
        src="/images/services/products-teaser.jpg"
        alt="Placeholder for forthcoming GS Pro cleaning products and supplies"
        badge="Coming Soon"
        zoomOnHover={false}
        muted
        className="shadow-none lg:aspect-[16/10]"
      />

      <div>
        <h3
          id="products-teaser-heading"
          className="text-brand-navy font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] sm:text-2xl"
        >
          GS Pro Products
        </h3>
        <p className="mt-3 max-w-md text-sm leading-[1.65] text-[#3d4654] sm:text-base">
          A forthcoming line of carefully selected cleaning essentials — launching soon for clients
          who want the same standards at home.
        </p>
        <p className="mt-6">
          <a
            href={notifyHref}
            target={notifyExternal ? "_blank" : undefined}
            rel={notifyExternal ? "noopener noreferrer" : undefined}
            className="hover:text-brand-navy focus-visible:text-brand-navy focus-visible:ring-brand-navy text-sm font-medium text-[#5c6570] underline-offset-4 transition-colors hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Notify me when available
          </a>
        </p>
      </div>
    </motion.aside>
  );
}
