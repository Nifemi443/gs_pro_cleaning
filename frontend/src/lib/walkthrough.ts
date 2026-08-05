import { z } from "zod";

export const walkthroughSchema = z.object({
  facilityName: z.string().trim().min(2, "Facility name is required."),
  contactName: z.string().trim().min(2, "Your name is required."),
  role: z.string().trim().min(2, "Role or title is required."),
  email: z.string().trim().email("Enter a valid email."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .regex(/^[+\d\s()-]{7,20}$/, "Use digits only - include country code if you can."),
  location: z.string().trim().min(2, "City or location is required."),
  preferredDate: z.string().optional(),
  notes: z.string().trim().max(500).optional(),
});

export type WalkthroughFormValues = z.infer<typeof walkthroughSchema>;

export const walkthroughDefaults: WalkthroughFormValues = {
  facilityName: "",
  contactName: "",
  role: "",
  email: "",
  phone: "",
  location: "",
  preferredDate: "",
  notes: "",
};

export function formatWalkthroughWhatsAppMessage(data: WalkthroughFormValues): string {
  const lines = [
    "Hello GS Pro - I'd like to schedule a Survey-Ready compliance walkthrough.",
    "",
    `Facility: ${data.facilityName}`,
    `Contact: ${data.contactName}`,
    `Role: ${data.role}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Location: ${data.location}`,
  ];

  if (data.preferredDate?.trim()) {
    lines.push(`Preferred date: ${data.preferredDate.trim()}`);
  }
  if (data.notes?.trim()) {
    lines.push(`Notes: ${data.notes.trim()}`);
  }

  lines.push("", "Please share next steps for the $1,500 turnkey package.");
  return lines.join("\n");
}
