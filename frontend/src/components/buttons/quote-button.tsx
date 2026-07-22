"use client";

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { BrandButton, brandButtonVariants } from "@/components/buttons/brand-button";
import { useQuote } from "@/components/quote/QuoteProvider";
import type { CleaningService } from "@/lib/quote";
import { cn } from "@/lib/utils";

type QuoteButtonProps = Omit<React.ComponentProps<typeof BrandButton>, "render" | "nativeButton"> &
  VariantProps<typeof brandButtonVariants> & {
    /** Prefill cleaning service when the modal opens */
    defaultService?: CleaningService;
    /** @deprecated Direct WhatsApp message — modal flow is preferred */
    message?: string;
  };

/**
 * Opens the multi-step quote request modal.
 */
export function QuoteButton({
  defaultService,
  message: _message,
  className,
  children = "Request a Free Quote",
  onClick,
  variant = "primary",
  ...props
}: QuoteButtonProps) {
  const { openQuote } = useQuote();

  return (
    <BrandButton
      className={cn(className)}
      variant={variant}
      onClick={(event) => {
        onClick?.(event);
        openQuote({ defaultService });
      }}
      {...props}
    >
      {children}
    </BrandButton>
  );
}
