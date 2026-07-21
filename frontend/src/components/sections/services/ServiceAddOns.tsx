"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { easePremium } from "@/components/animations/presets";
import { BrandButton, QuoteButton } from "@/components/buttons";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type AddOnItem = {
  id: string;
  title: string;
  imageSrc: string;
  alt: string;
};

const ADD_ONS: AddOnItem[] = [
  {
    id: "sofa",
    title: "Sofa Cleaning",
    imageSrc: "/images/addons/sofa-cleaning.jpg",
    alt: "Upholstered sofa ready for professional cleaning",
  },
  {
    id: "rug",
    title: "Rug & Carpet",
    imageSrc: "/images/addons/rug-carpet-cleaning.jpg",
    alt: "Area rug and carpet surface prepared for deep cleaning",
  },
  {
    id: "mattress",
    title: "Mattress Cleaning",
    imageSrc: "/images/addons/mattress-cleaning.jpg",
    alt: "Mattress surface prepared for professional sanitizing clean",
  },
  {
    id: "upholstery",
    title: "Upholstery Spot Treatment",
    imageSrc: "/images/addons/upholstery-spot-treatment.jpg",
    alt: "Upholstered seating with a focused spot-treatment area",
  },
];

type ServiceAddOnsProps = {
  className?: string;
};

/**
 * Compact add-on row — not a fifth full-weight alternating service block.
 */
export function ServiceAddOns({ className }: ServiceAddOnsProps) {
  const reduceMotion = useReducedMotion();
  const quoteMessage =
    "Hello GS Pro — I'd like a quote for Other Services (sofa, rug, mattress, or upholstery).";
  const includedHref = getWhatsAppQuoteUrl(
    "Hello GS Pro — please share what's included in Other Services add-ons.",
  );
  const includedExternal = includedHref.startsWith("http");

  return (
    <motion.article
      id="services-other"
      className={cn(
        "rounded-[14px] bg-white px-5 py-8 shadow-[0_4px_20px_rgb(18_41_77/0.06)] sm:px-8 sm:py-10",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: easePremium,
        delay: reduceMotion ? 0 : 0.4,
      }}
      whileHover={
        reduceMotion ? undefined : { y: -3, transition: { duration: 0.22, ease: easePremium } }
      }
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h3 className="text-brand-navy font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
            Other Services
          </h3>
          <p className="mt-2 text-sm leading-[1.65] text-[#3d4654] sm:text-base">
            Add-on and specialty cleans you can book alongside a visit or on their own — sofa, rugs,
            mattresses, and targeted upholstery work.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <QuoteButton
            size="md"
            message={quoteMessage}
            className="group/cta bg-brand-green hover:bg-brand-green-hover"
            rightIcon={
              <ArrowRight className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/cta:translate-x-1" />
            }
          >
            Request a Quote
          </QuoteButton>
          <BrandButton
            size="md"
            variant="ghost"
            className="hover:text-brand-green justify-start px-2 text-[#3d4654] hover:bg-transparent sm:justify-center"
            nativeButton={false}
            render={
              <a
                href={includedHref}
                target={includedExternal ? "_blank" : undefined}
                rel={includedExternal ? "noopener noreferrer" : undefined}
              />
            }
          >
            See What&apos;s Included
          </BrandButton>
        </div>
      </div>

      <ul
        className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        aria-label="Other services add-ons"
      >
        {ADD_ONS.map((item, index) => (
          <motion.li
            key={item.id}
            className="bg-brand-warm overflow-hidden rounded-[12px]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.35,
              ease: easePremium,
              delay: reduceMotion ? 0 : 0.45 + index * 0.06,
            }}
          >
            <div className="relative aspect-[5/3]">
              <Image
                src={item.imageSrc}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 45vw, 18vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex items-start gap-2 px-3 py-3">
              <Check
                className="text-brand-green mt-0.5 size-3.5 shrink-0"
                strokeWidth={2.25}
                aria-hidden
              />
              <span className="text-brand-navy text-sm leading-snug font-medium">{item.title}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}
