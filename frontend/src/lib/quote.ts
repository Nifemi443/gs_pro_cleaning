import { z } from "zod";

export const CLEANING_SERVICES = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out",
  "Office Cleaning",
  "Post Construction Cleaning",
] as const;

export const PROPERTY_TYPES = [
  "Apartment",
  "House",
  "Office",
  "Retail Store",
  "Restaurant",
  "Warehouse",
  "Other",
] as const;

export const PREFERRED_TIMES = [
  "Morning (8am–12pm)",
  "Afternoon (12pm–4pm)",
  "Evening (4pm–7pm)",
  "Flexible",
] as const;

export type CleaningService = (typeof CLEANING_SERVICES)[number];
export type PropertyType = (typeof PROPERTY_TYPES)[number];
export type PreferredTime = (typeof PREFERRED_TIMES)[number];

const cleaningServiceSchema = z
  .string()
  .min(1, "Select a cleaning service.")
  .refine(
    (value): value is CleaningService => (CLEANING_SERVICES as readonly string[]).includes(value),
    { message: "Select a cleaning service." },
  );

const propertyTypeSchema = z
  .string()
  .min(1, "Select a property type.")
  .refine((value): value is PropertyType => (PROPERTY_TYPES as readonly string[]).includes(value), {
    message: "Select a property type.",
  });

const preferredTimeSchema = z
  .string()
  .min(1, "Select a preferred time.")
  .refine(
    (value): value is PreferredTime => (PREFERRED_TIMES as readonly string[]).includes(value),
    { message: "Select a preferred time." },
  );

export const quoteStep1Schema = z.object({
  customerName: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .regex(/^[+\d\s()-]{7,20}$/, "Use digits only — include country code if you can."),
  email: z.string().trim().email("Please enter a valid email address."),
});

export const quoteStep2Schema = z.object({
  cleaningService: cleaningServiceSchema,
  propertyType: propertyTypeSchema,
  propertySize: z.string().trim().optional(),
});

export const quoteStep3Schema = z.object({
  preferredDate: z.string().min(1, "Choose a preferred cleaning date."),
  preferredTime: preferredTimeSchema,
  location: z.string().trim().min(3, "Tell us where the property is located."),
  additionalNotes: z.string().trim().optional(),
});

export const quoteFormSchema = quoteStep1Schema.merge(quoteStep2Schema).merge(quoteStep3Schema);

/** Form field values (strings until Zod narrows enums on submit). */
export type QuoteFormValues = z.input<typeof quoteFormSchema>;
export type QuoteFormParsed = z.output<typeof quoteFormSchema>;

export const QUOTE_DEFAULT_VALUES: QuoteFormValues = {
  customerName: "",
  phone: "",
  email: "",
  cleaningService: "",
  propertyType: "",
  propertySize: "",
  preferredDate: "",
  preferredTime: "",
  location: "",
  additionalNotes: "",
};

export const QUOTE_STEP_FIELDS: Record<1 | 2 | 3, (keyof QuoteFormValues)[]> = {
  1: ["customerName", "phone", "email"],
  2: ["cleaningService", "propertyType", "propertySize"],
  3: ["preferredDate", "preferredTime", "location", "additionalNotes"],
};

export const QUOTE_STEPS = [
  { id: 1, label: "Basics", title: "Basic Information" },
  { id: 2, label: "Service", title: "Cleaning Requirements" },
  { id: 3, label: "Schedule", title: "Schedule" },
  { id: 4, label: "Review", title: "Review & Submit" },
] as const;

export function formatQuoteWhatsAppMessage(data: QuoteFormParsed): string {
  const notes = data.additionalNotes?.trim() || "None";
  const size = data.propertySize?.trim() || "Not specified";

  return [
    "Hello GS Pro Cleaning Services,",
    "",
    "I'd like to request a cleaning quote.",
    "",
    `Name: ${data.customerName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    "",
    `Cleaning Service: ${data.cleaningService}`,
    "",
    `Property Type: ${data.propertyType}`,
    `Property Size: ${size}`,
    "",
    `Preferred Date: ${data.preferredDate}`,
    `Preferred Time: ${data.preferredTime}`,
    "",
    `Location: ${data.location}`,
    "",
    `Additional Notes: ${notes}`,
    "",
    "I look forward to your quotation.",
  ].join("\n");
}
