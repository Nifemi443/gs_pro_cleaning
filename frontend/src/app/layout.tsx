import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import { Providers } from "@/components/layout/providers";

import "./globals.css";

/**
 * Display — Fraunces (editorial serif). Soft axis kept low via CSS
 * font-variation-settings so letterforms stay premium, not playful.
 */
const fontDisplay = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

/** Body/UI — Plus Jakarta Sans (clean grotesk; replaces DM Sans). */
const fontBody = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GS Pro Cleaning Services",
    template: "%s | GS Pro Cleaning Services",
  },
  description:
    "Premium residential and commercial cleaning across Nigeria and the United States — vetted staff, consistent finish.",
  applicationName: "GS Pro Cleaning Services",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F9F8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontDisplay.variable} ${fontBody.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="focus:bg-brand-accent sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
