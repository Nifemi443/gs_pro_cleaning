"use client";

import { ArrowRight, Check } from "lucide-react";

import { BrandButton, QuoteButton } from "@/components/buttons";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export type ServiceContentData = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  quoteMessage: string;
};

type ServiceContentProps = {
  service: ServiceContentData;
  className?: string;
};

export function ServiceContent({ service, className }: ServiceContentProps) {
  const includedHref = getWhatsAppQuoteUrl(
    `Hello GS Pro — please share what's included in ${service.title}.`,
  );
  const includedExternal = includedHref.startsWith("http");

  return (
    <div className={cn("flex flex-col justify-center", className)}>
      <h3 className="text-brand-navy font-[family-name:var(--font-display)] text-2xl leading-tight font-semibold tracking-[-0.02em] sm:text-[1.75rem]">
        {service.title}
      </h3>

      <p className="mt-3 max-w-lg text-base leading-[1.65] text-[#3d4654] sm:text-[1.0625rem]">
        {service.description}
      </p>

      <ul className="mt-6 space-y-3" aria-label={`${service.title} inclusions`}>
        {service.bullets.map((bullet) => (
          <li
            key={bullet}
            className="text-brand-navy flex items-start gap-3 text-sm leading-[1.6] sm:text-[0.9375rem]"
          >
            <Check
              className="text-brand-green mt-0.5 size-4 shrink-0"
              strokeWidth={2}
              aria-hidden
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <QuoteButton
          size="md"
          message={service.quoteMessage}
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
  );
}
