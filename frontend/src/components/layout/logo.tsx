import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

/** Intrinsic logo aspect after trim (986×416). */
const LOGO_ASPECT = 986 / 416;

type LogoProps = {
  className?: string;
  height?: number;
  href?: string | null;
  priority?: boolean;
};

export function Logo({ className, height = 58, href = "/", priority = false }: LogoProps) {
  const width = Math.round(height * LOGO_ASPECT);

  const image = (
    <Image
      src="/images/logo.png"
      alt={SITE.name}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={cn("h-auto w-auto max-w-none object-contain object-left", className)}
      style={{ height, width }}
    />
  );

  if (href === null) return image;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center focus-visible:rounded-md"
      aria-label={SITE.name}
    >
      {image}
    </Link>
  );
}
