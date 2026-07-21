import { DEFAULT_QUOTE_MESSAGE } from "@/constants/site";
import { env } from "@/lib/env";

export function getWhatsAppNumber(): string {
  return env.whatsappNumber.replace(/\D/g, "");
}

export function getWhatsAppQuoteUrl(message: string = DEFAULT_QUOTE_MESSAGE): string {
  const number = getWhatsAppNumber();
  if (!number) return "/#contact";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
