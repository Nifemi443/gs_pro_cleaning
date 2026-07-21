import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  height?: number;
  href?: string | null;
  priority?: boolean;
};

export function Logo({ className, height = 44, href = "/", priority = false }: LogoProps) {
  const image = (
    <Image
      src="/images/logo.jpg"
      alt={SITE.name}
      width={Math.round(height * 0.8)}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
      style={{ height }}
    />
  );

  if (href === null) return image;

  return (
    <Link
      href={href}
      className="inline-flex items-center focus-visible:rounded-md"
      aria-label={SITE.name}
    >
      {image}
    </Link>
  );
}
