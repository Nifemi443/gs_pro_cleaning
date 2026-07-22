"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { QuoteForm } from "@/components/quote/QuoteForm";
import { useQuote } from "@/components/quote/QuoteProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Premium quote request modal — multi-step form to WhatsApp.
 */
export function QuoteModal() {
  const { open, closeQuote, defaultService } = useQuote();

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) closeQuote();
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop
          className={cn(
            "bg-brand-navy/40 fixed inset-0 z-[60] backdrop-blur-[2px]",
            "transition-opacity duration-200",
            "data-ending-style:opacity-0 data-starting-style:opacity-0",
          )}
        />
        <DialogPrimitive.Popup
          className={cn(
            "fixed z-[60] flex max-h-[min(92vh,880px)] w-[calc(100%-1.5rem)] max-w-lg flex-col",
            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "rounded-[16px] bg-white shadow-[0_24px_64px_rgb(18_41_77/0.22)] outline-none",
            "transition duration-200 ease-out",
            "data-ending-style:scale-95 data-ending-style:opacity-0",
            "data-starting-style:scale-95 data-starting-style:opacity-0",
            "sm:w-full",
          )}
          aria-labelledby="quote-modal-title"
        >
          <div className="flex items-start justify-between gap-4 border-b border-[#ebe8e3] px-5 py-4 sm:px-6">
            <div>
              <DialogPrimitive.Title
                id="quote-modal-title"
                className="text-brand-navy font-[family-name:var(--font-display)] text-lg font-semibold sm:text-xl"
              >
                Request a Free Quote
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-1 text-sm text-[#5c6570]">
                A few quick details — then we&apos;ll open WhatsApp with your request ready to send.
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close
              render={
                <Button variant="ghost" size="icon-sm" className="text-brand-navy shrink-0" />
              }
            >
              <XIcon className="size-4" />
              <span className="sr-only">Close quote form</span>
            </DialogPrimitive.Close>
          </div>

          <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            {open ? (
              <QuoteForm
                key={defaultService ?? "default"}
                defaultService={defaultService}
                onClose={closeQuote}
              />
            ) : null}
          </div>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
