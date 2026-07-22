"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { QuoteButton } from "@/components/buttons";
import { FooterBottomBar } from "@/components/footer/FooterBottomBar";
import { FooterColumn, FooterLink } from "@/components/footer/FooterColumn";
import { FooterSocial } from "@/components/footer/FooterSocial";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { NAV_LINKS, ROUTES } from "@/constants/site";
import { cn } from "@/lib/utils";

const SERVICE_LINKS = [
  { label: "Domestic Cleaning", href: "/#services-domestic" },
  { label: "Commercial Cleaning", href: "/#services-commercial" },
  { label: "Post-Construction Cleaning", href: "/#services-post-construction" },
  { label: "Specialized Cleaning", href: "/#services-specialized" },
  {
    label: "Other Services (Sofa, Rug & More)",
    href: "/#services-other",
  },
] as const;

const CONTACT_ITEMS = [
  {
    id: "address",
    icon: MapPin,
    label: "Office address",
    value: "[Office Address]",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone number",
    value: "[Phone Number]",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email address",
    value: "[Email Address]",
  },
  {
    id: "hours",
    icon: Clock,
    label: "Business hours",
    value: "[Mon–Sat, 8am–6pm]",
  },
] as const;

/**
 * Site footer — navy close-out with quote CTA and placeholder contact fields.
 *
 * TikTok omitted until the client confirms an active account.
 */
export function Footer() {
  return (
    <footer
      className="border-t-brand-gold bg-brand-navy border-t-[3px] text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <Container className="py-16 lg:py-20">
        <div
          className={cn(
            "grid gap-10",
            "md:grid-cols-2 md:gap-x-10 md:gap-y-12",
            "lg:grid-cols-4 lg:gap-10",
          )}
        >
          {/* Brand */}
          <div className="order-1 flex flex-col gap-4">
            {/* REPLACE: footer-logo-light.png — light mark for navy ground */}
            <Logo height={48} className="brightness-0 invert" href={ROUTES.home} />
            <p className="max-w-xs text-sm leading-[1.65] text-white/70">
              Professional residential and commercial cleaning services delivering reliable,
              detail-oriented cleaning solutions.
            </p>
          </div>

          {/*
            Actions wrapper: on mobile `contents` so CTA (order-2) and Social
            (order-6) participate in the parent grid order separately.
            From md up: single row with social left, CTA right.
          */}
          <div
            className={cn(
              "max-md:contents",
              "md:order-5 md:col-span-2 md:flex md:items-center md:justify-between md:gap-6",
              "lg:order-5 lg:col-span-4",
            )}
          >
            <QuoteButton
              size="md"
              className={cn(
                "bg-brand-green hover:bg-brand-green-hover order-2 w-full",
                "md:order-2 md:w-auto",
              )}
            >
              Request a Free Quote
            </QuoteButton>
            <FooterSocial className="order-6 md:order-1" />
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" asNav className="order-3 md:order-3 lg:order-2">
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services" asNav className="order-4 md:order-4 lg:order-3">
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact — sits with Brand on tablet (col 1) */}
          <FooterColumn title="Contact" className="order-5 md:order-2 lg:order-4">
            <ul className="flex flex-col gap-3.5">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className="flex gap-3">
                    <Icon
                      className="mt-0.5 size-4 shrink-0 text-white/65"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-white/70">
                      <span className="sr-only">{item.label}: </span>
                      {item.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </FooterColumn>
        </div>

        <FooterBottomBar className="mt-12 lg:mt-14" />
      </Container>
    </footer>
  );
}
