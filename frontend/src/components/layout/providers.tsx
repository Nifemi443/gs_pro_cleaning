"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

import { QuoteModal, QuoteProvider } from "@/components/quote";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      disableTransitionOnChange
    >
      <QuoteProvider>
        {children}
        <QuoteModal />
      </QuoteProvider>
      <Toaster richColors closeButton position="top-right" />
    </ThemeProvider>
  );
}
