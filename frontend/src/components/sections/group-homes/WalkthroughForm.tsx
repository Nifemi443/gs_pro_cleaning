"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";

import { easePremium } from "@/components/animations/presets";
import { BrandButton } from "@/components/buttons";
import { Field, quoteFieldClassName } from "@/components/quote/Field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  formatWalkthroughWhatsAppMessage,
  walkthroughDefaults,
  walkthroughSchema,
  type WalkthroughFormValues,
} from "@/lib/walkthrough";
import { cn } from "@/lib/utils";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

/**
 * Lead capture for Survey-Ready compliance walkthroughs → WhatsApp.
 */
export function WalkthroughForm() {
  const reduceMotion = useReducedMotion();
  const [whatsAppHref, setWhatsAppHref] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WalkthroughFormValues>({
    resolver: zodResolver(walkthroughSchema),
    defaultValues: walkthroughDefaults,
  });

  const onSubmit = (data: WalkthroughFormValues) => {
    const message = formatWalkthroughWhatsAppMessage(data);
    const href = getWhatsAppQuoteUrl(message);
    setWhatsAppHref(href);
    window.setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <motion.div
      className="rounded-[16px] bg-white p-5 shadow-[0_8px_30px_rgb(18_41_77/0.08)] sm:p-7"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: easePremium, delay: reduceMotion ? 0 : 0.1 }}
    >
      {whatsAppHref ? (
        <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
          <p className="text-brand-navy font-[family-name:var(--font-display)] text-2xl font-semibold">
            Opening WhatsApp...
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#3d4654]">
            Your walkthrough request is ready to send. If WhatsApp didn&apos;t open, tap below.
          </p>
          <BrandButton
            size="md"
            className="bg-brand-green hover:bg-brand-green-hover mt-6"
            render={<a href={whatsAppHref} target="_blank" rel="noopener noreferrer" />}
          >
            Open WhatsApp
          </BrandButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
          <div>
            <h3 className="text-brand-navy font-[family-name:var(--font-display)] text-xl font-semibold">
              Schedule a Compliance Walkthrough
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#5c6570]">
              Tell us about your facility. We&apos;ll follow up to book an on-site assessment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Facility Name"
              htmlFor="facilityName"
              error={errors.facilityName?.message}
              className="sm:col-span-2"
            >
              <Input
                id="facilityName"
                className={quoteFieldClassName}
                aria-invalid={Boolean(errors.facilityName)}
                placeholder="Sunrise Group Home"
                {...register("facilityName")}
              />
            </Field>

            <Field label="Your Name" htmlFor="contactName" error={errors.contactName?.message}>
              <Input
                id="contactName"
                className={quoteFieldClassName}
                aria-invalid={Boolean(errors.contactName)}
                placeholder="Jordan Lee"
                {...register("contactName")}
              />
            </Field>

            <Field label="Role / Title" htmlFor="role" error={errors.role?.message}>
              <Input
                id="role"
                className={quoteFieldClassName}
                aria-invalid={Boolean(errors.role)}
                placeholder="Operations Director"
                {...register("role")}
              />
            </Field>

            <Field label="Email" htmlFor="email" error={errors.email?.message}>
              <Input
                id="email"
                type="email"
                className={quoteFieldClassName}
                aria-invalid={Boolean(errors.email)}
                placeholder="you@facility.org"
                {...register("email")}
              />
            </Field>

            <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
              <Input
                id="phone"
                type="tel"
                className={quoteFieldClassName}
                aria-invalid={Boolean(errors.phone)}
                placeholder="+1 202 209 6917"
                {...register("phone")}
              />
            </Field>

            <Field label="City / Location" htmlFor="location" error={errors.location?.message}>
              <Input
                id="location"
                className={quoteFieldClassName}
                aria-invalid={Boolean(errors.location)}
                placeholder="Houston, TX"
                {...register("location")}
              />
            </Field>

            <Field
              label="Preferred Date"
              htmlFor="preferredDate"
              optional
              error={errors.preferredDate?.message}
            >
              <Input
                id="preferredDate"
                type="date"
                className={quoteFieldClassName}
                {...register("preferredDate")}
              />
            </Field>

            <Field
              label="Notes"
              htmlFor="notes"
              optional
              error={errors.notes?.message}
              className="sm:col-span-2"
            >
              <Textarea
                id="notes"
                rows={3}
                className={cn(quoteFieldClassName, "h-auto min-h-[5.5rem] py-2.5")}
                placeholder="Number of homes, survey timeline, special areas…"
                {...register("notes")}
              />
            </Field>
          </div>

          <BrandButton
            type="submit"
            size="lg"
            className="bg-brand-green hover:bg-brand-green-hover mt-2 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Preparing…" : "Request Walkthrough via WhatsApp"}
          </BrandButton>
          <p className="text-center text-xs text-[#8a8490]">
            Submits a pre-filled WhatsApp message to GS Pro - no spam, no portal login.
          </p>
        </form>
      )}
    </motion.div>
  );
}
