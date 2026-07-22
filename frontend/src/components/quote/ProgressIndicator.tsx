"use client";

import { cn } from "@/lib/utils";
import { QUOTE_STEPS } from "@/lib/quote";

type ProgressIndicatorProps = {
  currentStep: number;
  className?: string;
};

/**
 * Four-step progress for the quote request flow.
 */
export function ProgressIndicator({ currentStep, className }: ProgressIndicatorProps) {
  return (
    <nav aria-label="Quote request progress" className={cn("w-full", className)}>
      <ol className="flex items-center gap-1 sm:gap-2">
        {QUOTE_STEPS.map((step, index) => {
          const stepNumber = index + 1;
          const isComplete = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <li key={step.id} className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="flex items-center gap-1 sm:gap-2">
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                    isComplete && "bg-brand-green text-white",
                    isCurrent && "bg-brand-navy text-white",
                    !isComplete && !isCurrent && "bg-[#e8e6e2] text-[#8a8490]",
                  )}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {stepNumber}
                </span>
                {index < QUOTE_STEPS.length - 1 ? (
                  <span
                    className={cn(
                      "h-0.5 w-full rounded-full",
                      stepNumber < currentStep ? "bg-brand-green" : "bg-[#e8e6e2]",
                    )}
                    aria-hidden
                  />
                ) : null}
              </div>
              <span
                className={cn(
                  "truncate text-[0.6875rem] font-medium tracking-wide uppercase",
                  isCurrent ? "text-brand-navy" : "text-[#8a8490]",
                )}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
