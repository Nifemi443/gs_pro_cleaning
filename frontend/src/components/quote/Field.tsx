"use client";

import { cn } from "@/lib/utils";

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function Field({ label, htmlFor, error, optional, children, className }: FieldProps) {
  const errorId = `${htmlFor}-error`;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-brand-navy text-sm font-medium">
        {label}
        {optional ? <span className="ml-1 font-normal text-[#8a8490]">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const quoteFieldClassName = cn(
  "text-brand-navy h-11 w-full rounded-[10px] border border-[#d8d4ce] bg-white px-3.5 text-base",
  "transition-colors outline-none placeholder:text-[#9a948c]",
  "focus-visible:border-brand-navy focus-visible:ring-brand-navy/20 focus-visible:ring-2",
  "aria-invalid:border-red-600 aria-invalid:ring-2 aria-invalid:ring-red-600/15",
  "disabled:cursor-not-allowed disabled:opacity-50",
);
