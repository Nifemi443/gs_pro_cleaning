"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

type ServiceImageProps = {
  src: string;
  alt: string;
  badge?: string;
  /** Enable group-hover zoom — off for inactive teasers */
  zoomOnHover?: boolean;
  muted?: boolean;
  className?: string;
};

/**
 * Service photo — local public/images assets via Next/Image.
 */
export function ServiceImage({
  src,
  alt,
  badge,
  zoomOnHover = true,
  muted = false,
  className,
}: ServiceImageProps) {
  return (
    <div
      className={cn(
        "bg-brand-warm relative aspect-[4/3] w-full overflow-hidden rounded-[14px] shadow-[0_10px_28px_rgb(18_41_77/0.1)] lg:aspect-[5/4]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          "object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          zoomOnHover && "motion-safe:group-hover:scale-[1.04]",
          muted && "opacity-55 grayscale-[0.35]",
        )}
      />

      {muted ? (
        <div className="pointer-events-none absolute inset-0 bg-[#F6F5F3]/45" aria-hidden />
      ) : null}

      {badge ? (
        <span className="bg-brand-gold text-brand-navy absolute top-4 left-4 z-10 rounded-full px-3 py-1.5 text-[0.6875rem] font-semibold tracking-wide shadow-[0_2px_8px_rgb(18_41_77/0.12)]">
          {badge}
        </span>
      ) : null}
    </div>
  );
}
