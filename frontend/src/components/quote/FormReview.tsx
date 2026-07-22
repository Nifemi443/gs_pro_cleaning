"use client";

import type { QuoteFormValues } from "@/lib/quote";
import { cn } from "@/lib/utils";

type FormReviewProps = {
  values: QuoteFormValues;
  className?: string;
};

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-0.5 border-b border-[#ebe8e3] py-3 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="text-xs font-medium tracking-wide text-[#8a8490] uppercase">{label}</dt>
      <dd className="text-brand-navy text-sm leading-relaxed break-words">{value || "—"}</dd>
    </div>
  );
}

/**
 * Read-only summary before WhatsApp redirect.
 */
export function FormReview({ values, className }: FormReviewProps) {
  return (
    <dl
      className={cn(
        "rounded-[12px] border border-[#e8e6e2] bg-[#faf9f7] px-4 py-1 sm:px-5",
        className,
      )}
    >
      <ReviewRow label="Name" value={values.customerName} />
      <ReviewRow label="Phone" value={values.phone} />
      <ReviewRow label="Email" value={values.email} />
      <ReviewRow label="Service" value={values.cleaningService} />
      <ReviewRow label="Property" value={values.propertyType} />
      <ReviewRow label="Size" value={values.propertySize?.trim() || "Not specified"} />
      <ReviewRow label="Date" value={values.preferredDate} />
      <ReviewRow label="Time" value={values.preferredTime} />
      <ReviewRow label="Location" value={values.location} />
      <ReviewRow label="Notes" value={values.additionalNotes?.trim() || "None"} />
    </dl>
  );
}
