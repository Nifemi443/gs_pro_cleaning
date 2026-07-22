"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { BrandButton } from "@/components/buttons";
import { Field, quoteFieldClassName } from "@/components/quote/Field";
import { FormReview } from "@/components/quote/FormReview";
import { ProgressIndicator } from "@/components/quote/ProgressIndicator";
import { QuoteStep } from "@/components/quote/QuoteStep";
import { SuccessScreen } from "@/components/quote/SuccessScreen";
import { WhatsAppRedirect } from "@/components/quote/WhatsAppRedirect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CLEANING_SERVICES,
  PREFERRED_TIMES,
  PROPERTY_TYPES,
  QUOTE_DEFAULT_VALUES,
  QUOTE_STEP_FIELDS,
  QUOTE_STEPS,
  formatQuoteWhatsAppMessage,
  quoteFormSchema,
  type CleaningService,
  type QuoteFormValues,
} from "@/lib/quote";
import { cn } from "@/lib/utils";

type QuoteFormProps = {
  defaultService?: CleaningService;
  onClose?: () => void;
};

/**
 * Multi-step quote request form → review → WhatsApp.
 */
export function QuoteForm({ defaultService, onClose }: QuoteFormProps) {
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = React.useState("");

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      ...QUOTE_DEFAULT_VALUES,
      ...(defaultService ? { cleaningService: defaultService } : {}),
    },
    mode: "onTouched",
  });

  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = form;

  const goNext = async () => {
    if (step >= 4) return;
    const fields = QUOTE_STEP_FIELDS[step as 1 | 2 | 3];
    const valid = await trigger(fields);
    if (valid) setStep((s) => s + 1);
  };

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const onSubmit = handleSubmit((values) => {
    const parsed = quoteFormSchema.parse(values);
    setWhatsAppMessage(formatQuoteWhatsAppMessage(parsed));
    setSubmitted(true);
  });

  if (submitted) {
    return (
      <div>
        <SuccessScreen />
        <WhatsAppRedirect
          message={whatsAppMessage}
          onRedirect={() => {
            window.setTimeout(() => onClose?.(), 400);
          }}
        />
      </div>
    );
  }

  const stepMeta = QUOTE_STEPS[step - 1] ?? QUOTE_STEPS[0];

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
      <ProgressIndicator currentStep={step} />

      <AnimatePresence mode="wait">
        <div key={step}>
          {step === 1 ? (
            <QuoteStep
              title={stepMeta.title}
              description="We'll use these details to follow up on your quote."
            >
              <div className="flex flex-col gap-4">
                <Field
                  label="Customer Name"
                  htmlFor="customerName"
                  error={errors.customerName?.message}
                >
                  <Input
                    id="customerName"
                    autoComplete="name"
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.customerName)}
                    aria-describedby={errors.customerName ? "customerName-error" : undefined}
                    className={quoteFieldClassName}
                    {...register("customerName")}
                  />
                </Field>
                <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+234 or +1…"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={quoteFieldClassName}
                    {...register("phone")}
                  />
                </Field>
                <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={quoteFieldClassName}
                    {...register("email")}
                  />
                </Field>
              </div>
            </QuoteStep>
          ) : null}

          {step === 2 ? (
            <QuoteStep title={stepMeta.title} description="Tell us what kind of clean you need.">
              <div className="flex flex-col gap-4">
                <Field
                  label="Cleaning Service"
                  htmlFor="cleaningService"
                  error={errors.cleaningService?.message}
                >
                  <select
                    id="cleaningService"
                    aria-invalid={Boolean(errors.cleaningService)}
                    aria-describedby={errors.cleaningService ? "cleaningService-error" : undefined}
                    className={quoteFieldClassName}
                    {...register("cleaningService")}
                  >
                    <option value="">Select a service</option>
                    {CLEANING_SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Property Type"
                  htmlFor="propertyType"
                  error={errors.propertyType?.message}
                >
                  <select
                    id="propertyType"
                    aria-invalid={Boolean(errors.propertyType)}
                    aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
                    className={quoteFieldClassName}
                    {...register("propertyType")}
                  >
                    <option value="">Select property type</option>
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Property Size"
                  htmlFor="propertySize"
                  optional
                  error={errors.propertySize?.message}
                >
                  <Input
                    id="propertySize"
                    placeholder="e.g. 3 bedrooms, 2,000 sq ft"
                    className={quoteFieldClassName}
                    {...register("propertySize")}
                  />
                </Field>
              </div>
            </QuoteStep>
          ) : null}

          {step === 3 ? (
            <QuoteStep
              title={stepMeta.title}
              description="Pick a time that works — we'll confirm availability."
            >
              <div className="flex flex-col gap-4">
                <Field
                  label="Preferred Cleaning Date"
                  htmlFor="preferredDate"
                  error={errors.preferredDate?.message}
                >
                  <Input
                    id="preferredDate"
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    aria-invalid={Boolean(errors.preferredDate)}
                    aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
                    className={quoteFieldClassName}
                    {...register("preferredDate")}
                  />
                </Field>
                <Field
                  label="Preferred Time"
                  htmlFor="preferredTime"
                  error={errors.preferredTime?.message}
                >
                  <select
                    id="preferredTime"
                    aria-invalid={Boolean(errors.preferredTime)}
                    aria-describedby={errors.preferredTime ? "preferredTime-error" : undefined}
                    className={quoteFieldClassName}
                    {...register("preferredTime")}
                  >
                    <option value="">Select a time window</option>
                    {PREFERRED_TIMES.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Property Location"
                  htmlFor="location"
                  error={errors.location?.message}
                >
                  <Input
                    id="location"
                    autoComplete="street-address"
                    placeholder="City, area, or full address"
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? "location-error" : undefined}
                    className={quoteFieldClassName}
                    {...register("location")}
                  />
                </Field>
                <Field
                  label="Additional Notes"
                  htmlFor="additionalNotes"
                  optional
                  error={errors.additionalNotes?.message}
                >
                  <Textarea
                    id="additionalNotes"
                    rows={3}
                    placeholder="Access notes, focus areas, pets…"
                    className={cn(quoteFieldClassName, "h-auto min-h-[5.5rem] py-3")}
                    {...register("additionalNotes")}
                  />
                </Field>
              </div>
            </QuoteStep>
          ) : null}

          {step === 4 ? (
            <QuoteStep
              title={stepMeta.title}
              description="Confirm everything looks right, then we'll open WhatsApp."
            >
              <FormReview values={getValues()} />
            </QuoteStep>
          ) : null}
        </div>
      </AnimatePresence>

      <div className="flex flex-col-reverse gap-3 border-t border-[#ebe8e3] pt-5 sm:flex-row sm:items-center sm:justify-between">
        {step > 1 ? (
          <BrandButton
            type="button"
            variant="ghost"
            size="md"
            className="text-brand-navy hover:bg-brand-navy/5 justify-center"
            onClick={goBack}
            leftIcon={<ArrowLeft className="size-4" />}
          >
            Back
          </BrandButton>
        ) : (
          <span className="hidden sm:block" aria-hidden />
        )}

        {step < 4 ? (
          <BrandButton
            type="button"
            size="lg"
            className="bg-brand-green hover:bg-brand-green-hover w-full sm:w-auto"
            onClick={goNext}
            rightIcon={<ArrowRight className="size-4" />}
          >
            Continue
          </BrandButton>
        ) : (
          <BrandButton
            type="submit"
            size="lg"
            loading={isSubmitting}
            className="bg-brand-green hover:bg-brand-green-hover w-full sm:w-auto sm:min-w-[12rem]"
          >
            Send Quote Request
          </BrandButton>
        )}
      </div>
    </form>
  );
}
