/**
 * Shared site constants.
 */

export const SITE = {
  name: "GS Pro Cleaning Services",
  shortName: "GS Pro",
} as const;

/** Public contact details shown in the footer and used for WhatsApp. */
export const CONTACT = {
  phoneDisplay: "+1 202 209 6917",
  phoneTel: "+12022096917",
  /** Digits only — WhatsApp / wa.me */
  phoneE164Digits: "12022096917",
  instagramHandle: "Gs_procleaners",
  instagramUrl: "https://www.instagram.com/Gs_procleaners/",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const ROUTES = {
  home: "/",
  about: "/#trust",
  services: "/#services",
  gallery: "/#gallery",
  faq: "/#faq",
  contact: "/#contact",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Gallery", href: ROUTES.gallery },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Contact", href: ROUTES.contact },
];

export const DEFAULT_QUOTE_MESSAGE =
  "Hello GS Pro — I'd like to book a cleaning. Please share availability and next steps.";

export const PRICING_QUOTE_MESSAGE =
  "Hello GS Pro — please share your current pricing for residential and commercial cleaning.";
