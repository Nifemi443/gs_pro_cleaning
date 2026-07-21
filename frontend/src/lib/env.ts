/**
 * Typed environment accessors.
 * Prefer these over raw process.env to keep usage discoverable and safe.
 */

function requirePublicEnv(name: string, value: string | undefined): string {
  if (!value) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(`Missing required environment variable: ${name}`);
    }
    return "";
  }
  return value;
}

export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1",
  cloudinaryCloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? "GS Pro Cleaning Services",
} as const;

/** Call during bootstrap when a value must exist (e.g. production deploy checks). */
export function assertProductionEnv(): void {
  requirePublicEnv("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL);
}
