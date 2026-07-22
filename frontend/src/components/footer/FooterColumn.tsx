"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  /** Optional landmark for link groups */
  asNav?: boolean;
};

/**
 * Footer column with letter-spaced label heading.
 */
export function FooterColumn({ title, children, className, asNav = false }: FooterColumnProps) {
  const Comp = asNav ? "nav" : "div";

  return (
    <Comp
      className={cn("flex flex-col gap-4", className)}
      {...(asNav ? { "aria-label": title } : {})}
    >
      <h3 className="text-[0.6875rem] font-semibold tracking-[0.14em] text-white uppercase">
        {title}
      </h3>
      {children}
    </Comp>
  );
}

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Footer text link — gold color shift on hover (no underline). */
export function FooterLink({ href, children, className }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm leading-relaxed text-white/70 transition-colors duration-200",
        "hover:text-brand-gold",
        "focus-visible:text-brand-gold focus-visible:ring-brand-gold/60 focus-visible:ring-offset-brand-navy focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      {children}
    </Link>
  );
}
