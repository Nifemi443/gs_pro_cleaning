"use client";

import * as React from "react";

import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

type WhatsAppRedirectProps = {
  message: string;
  /** Delay before redirect (ms) */
  delayMs?: number;
  onRedirect?: () => void;
};

/**
 * Opens WhatsApp with a pre-filled, encoded quote message after a short delay.
 */
export function WhatsAppRedirect({ message, delayMs = 1600, onRedirect }: WhatsAppRedirectProps) {
  React.useEffect(() => {
    const href = getWhatsAppQuoteUrl(message);
    const timer = window.setTimeout(() => {
      onRedirect?.();
      window.open(href, "_blank", "noopener,noreferrer");
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [message, delayMs, onRedirect]);

  return null;
}
