"use client";

import { CONTACT } from "@/constants/site";
import { cn } from "@/lib/utils";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

type SocialItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
};

/**
 * Brand social glyphs — Lucide no longer ships brand icons;
 * paths are standard simple brand marks at consistent 18px.
 */
function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.26 2.09 16.09 2 14.84 2 12.27 2 10.5 3.57 10.5 6.61V9.5H8v4h2.5V22h3.5v-8.5z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4z" />
      <path d="M16.98 6.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
      <path d="M12 2.2c-2.67 0-3.01.01-4.06.06-1.05.05-1.77.22-2.4.46a4.86 4.86 0 0 0-1.76 1.15 4.86 4.86 0 0 0-1.15 1.76c-.24.63-.41 1.35-.46 2.4C2.21 8.99 2.2 9.33 2.2 12s.01 3.01.06 4.06c.05 1.05.22 1.77.46 2.4a4.86 4.86 0 0 0 1.15 1.76 4.86 4.86 0 0 0 1.76 1.15c.63.24 1.35.41 2.4.46 1.05.05 1.39.06 4.06.06s3.01-.01 4.06-.06c1.05-.05 1.77-.22 2.4-.46a4.86 4.86 0 0 0 1.76-1.15 4.86 4.86 0 0 0 1.15-1.76c.24-.63.41-1.35.46-2.4.05-1.05.06-1.39.06-4.06s-.01-3.01-.06-4.06c-.05-1.05-.22-1.77-.46-2.4a4.86 4.86 0 0 0-1.15-1.76 4.86 4.86 0 0 0-1.76-1.15c-.63-.24-1.35-.41-2.4-.46C15.01 2.21 14.67 2.2 12 2.2zm0 1.8c2.62 0 2.93.01 3.96.06.96.04 1.48.2 1.82.34.46.18.78.39 1.12.73.34.34.55.66.73 1.12.14.34.3.86.34 1.82.05 1.03.06 1.34.06 3.96s-.01 2.93-.06 3.96c-.04.96-.2 1.48-.34 1.82-.18.46-.39.78-.73 1.12-.34.34-.66.55-1.12.73-.34.14-.86.3-1.82.34-1.03.05-1.34.06-3.96.06s-2.93-.01-3.96-.06c-.96-.04-1.48-.2-1.82-.34a3.06 3.06 0 0 1-1.12-.73 3.06 3.06 0 0 1-.73-1.12c-.14-.34-.3-.86-.34-1.82C4.01 14.93 4 14.62 4 12s.01-2.93.06-3.96c.04-.96.2-1.48.34-1.82.18-.46.39-.78.73-1.12.34-.34.66-.55 1.12-.73.34-.14.86-.3 1.82-.34C9.07 4.01 9.38 4 12 4z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 8.5H3.75V20.3h3.19V8.5zM5.34 7.12a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7zM20.25 20.3h-3.18v-5.74c0-1.37-.02-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03v5.84H9.78V8.5h3.05v1.61h.04c.42-.8 1.46-1.65 3.01-1.65 3.22 0 3.81 2.12 3.81 4.87V20.3z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.992 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.21-1.36-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.2 1.25.17 1.72.1.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
      <path d="M12.04 2.1a9.9 9.9 0 0 0-8.43 14.9L2.2 21.9l5.02-1.32A9.9 9.9 0 1 0 12.04 2.1zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 1 1 6.97 3.86z" />
    </svg>
  );
}

/**
 * Social row — Facebook, Instagram, LinkedIn, X, WhatsApp.
 * TikTok omitted until the client confirms an active account.
 */
export function FooterSocial({ className }: { className?: string }) {
  const whatsappHref = getWhatsAppQuoteUrl("Hello GS Pro — I'd like to get in touch via WhatsApp.");

  const items: SocialItem[] = [
    {
      id: "facebook",
      label: "Visit GS Pro on Facebook",
      href: "#",
      icon: <IconFacebook className="size-[18px]" />,
    },
    {
      id: "instagram",
      label: "Visit GS Pro on Instagram",
      href: CONTACT.instagramUrl,
      icon: <IconInstagram className="size-[18px]" />,
    },
    {
      id: "linkedin",
      label: "Visit GS Pro on LinkedIn",
      href: "#",
      icon: <IconLinkedIn className="size-[18px]" />,
    },
    {
      id: "x",
      label: "Visit GS Pro on X",
      href: "#",
      icon: <IconX className="size-[18px]" />,
    },
    {
      id: "whatsapp",
      label: "Message GS Pro on WhatsApp",
      href: whatsappHref,
      icon: <IconWhatsApp className="size-[18px]" />,
    },
  ];

  return (
    <ul className={cn("flex flex-wrap items-center gap-1", className)}>
      {items.map((item) => {
        const external = item.href.startsWith("http");
        return (
          <li key={item.id}>
            <a
              href={item.href}
              aria-label={item.label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-md text-white/80",
                "transition-[color,transform] duration-200",
                "hover:text-brand-gold hover:scale-105",
                "focus-visible:text-brand-gold focus-visible:ring-brand-gold/60 focus-visible:ring-offset-brand-navy focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              )}
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
