"use client";

import Link from "next/link";

import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

type FooterBottomBarProps = {
  className?: string;
};

/**
 * Copyright + legal links under a thin divider.
 */
export function FooterBottomBar({ className }: FooterBottomBarProps) {
  return (
    <div
      className={cn(
        "border-t border-white/15 pt-6",
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <p className="text-xs leading-relaxed text-white/60">
        © 2026 {SITE.name}. All rights reserved.
      </p>
      <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          href="/privacy"
          className="hover:text-brand-gold focus-visible:text-brand-gold focus-visible:ring-brand-gold/60 focus-visible:ring-offset-brand-navy text-xs text-white/60 transition-colors focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="hover:text-brand-gold focus-visible:text-brand-gold focus-visible:ring-brand-gold/60 focus-visible:ring-offset-brand-navy text-xs text-white/60 transition-colors focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Terms of Service
        </Link>
      </nav>
    </div>
  );
}
