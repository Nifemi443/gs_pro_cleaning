"use client";

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { BrandButton, brandButtonVariants } from "@/components/buttons/brand-button";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type QuoteButtonProps = Omit<React.ComponentProps<typeof BrandButton>, "render" | "nativeButton"> &
  VariantProps<typeof brandButtonVariants> & {
    message?: string;
  };

export function QuoteButton({
  message,
  className,
  children = "Book a Cleaning",
  onClick,
  variant = "primary",
  ...props
}: QuoteButtonProps) {
  const href = getWhatsAppQuoteUrl(message);
  const isExternal = href.startsWith("http");

  return (
    <BrandButton
      className={cn(className)}
      variant={variant}
      nativeButton={false}
      render={
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
        />
      }
      {...props}
    >
      {children}
    </BrandButton>
  );
}
