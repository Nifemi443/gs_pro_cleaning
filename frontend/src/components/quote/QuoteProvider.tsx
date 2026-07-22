"use client";

import * as React from "react";

import type { CleaningService } from "@/lib/quote";

type QuoteOpenOptions = {
  defaultService?: CleaningService;
};

type QuoteContextValue = {
  open: boolean;
  defaultService?: CleaningService;
  openQuote: (options?: QuoteOpenOptions) => void;
  closeQuote: () => void;
};

const QuoteContext = React.createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [defaultService, setDefaultService] = React.useState<CleaningService | undefined>();

  const openQuote = React.useCallback((options?: QuoteOpenOptions) => {
    setDefaultService(options?.defaultService);
    setOpen(true);
  }, []);

  const closeQuote = React.useCallback(() => {
    setOpen(false);
  }, []);

  const value = React.useMemo(
    () => ({ open, defaultService, openQuote, closeQuote }),
    [open, defaultService, openQuote, closeQuote],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = React.useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return ctx;
}
