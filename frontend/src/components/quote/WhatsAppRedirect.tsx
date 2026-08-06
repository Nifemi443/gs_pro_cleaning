"use client";

import * as React from "react";

import { CONTACT } from "@/constants/site";
import { openWhatsAppChat } from "@/lib/whatsapp";

type WhatsAppRedirectProps = {
  message: string;
  /** Delay before redirect (ms) */
  delayMs?: number;
  onRedirect?: () => void;
};

/**
 * Opens WhatsApp to the GS Pro number with a pre-filled form message.
 */
export function WhatsAppRedirect({ message, delayMs = 1200, onRedirect }: WhatsAppRedirectProps) {
  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      onRedirect?.();
      openWhatsAppChat(message);
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [message, delayMs, onRedirect]);

  return (
    <p className="sr-only">
      Redirecting to WhatsApp at {CONTACT.phoneDisplay} with your form details.
    </p>
  );
}
