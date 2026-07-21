"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { QuoteButton } from "@/components/buttons";
import { Logo } from "@/components/layout/logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
        className,
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-[var(--container-max)] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo height={42} priority />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-text-secondary hover:text-brand-slate text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <QuoteButton size="sm">Book a Cleaning</QuoteButton>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="text-brand-slate hover:bg-brand-mist inline-flex size-10 items-center justify-center rounded-[var(--gs-radius-md)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </SheetTrigger>
          <SheetContent side="right" className="border-l-border bg-surface w-full max-w-sm p-0">
            <SheetHeader className="border-border border-b px-6 py-5 text-left">
              <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
              <Logo height={40} href={null} />
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-slate hover:bg-brand-mist rounded-[var(--gs-radius-md)] px-3 py-3 text-base font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <QuoteButton className="mt-4 w-full" onClick={() => setOpen(false)}>
                Book a Cleaning
              </QuoteButton>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
