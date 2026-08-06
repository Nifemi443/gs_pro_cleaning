import { CONTACT, DEFAULT_QUOTE_MESSAGE } from "@/constants/site";

/**
 * Business WhatsApp inbox - always the public phone on the site.
 * Env override only if explicitly set (non-empty).
 */
export function getWhatsAppNumber(): string {
  const fromEnv = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  if (fromEnv.length >= 10) return fromEnv;
  return CONTACT.phoneE164Digits;
}

/** wa.me URL with every form field encoded in the message body. */
export function getWhatsAppQuoteUrl(message: string = DEFAULT_QUOTE_MESSAGE): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Open WhatsApp chat to the business number with a pre-filled message.
 * Uses same-tab navigation so popup blockers cannot swallow the submit.
 * User still taps Send in WhatsApp to deliver (required by WhatsApp).
 */
export function openWhatsAppChat(message: string): string {
  const href = getWhatsAppQuoteUrl(message);
  if (typeof window !== "undefined") {
    window.location.assign(href);
  }
  return href;
}
