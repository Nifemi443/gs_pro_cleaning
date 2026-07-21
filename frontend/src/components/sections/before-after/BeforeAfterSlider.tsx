"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

/**
 * Interactive before/after comparison with real photos.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState(50);
  const dragging = React.useRef(false);

  const clamp = (value: number) => Math.min(90, Math.max(10, value));

  const updateFromClientX = React.useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(next));
  }, []);

  React.useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      updateFromClientX(event.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [updateFromClientX]);

  const onPointerDown = (event: React.PointerEvent) => {
    event.preventDefault();
    dragging.current = true;
    updateFromClientX(event.clientX);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((p) => clamp(p - 5));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((p) => clamp(p + 5));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setPosition(10);
    }
    if (event.key === "End") {
      event.preventDefault();
      setPosition(90);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "bg-brand-warm relative aspect-[4/3] w-full touch-none overflow-hidden rounded-[10px] select-none",
        className,
      )}
      onPointerDown={onPointerDown}
      role="img"
      aria-label={`${beforeAlt}. ${afterAlt}. Use the slider handle to compare before and after.`}
    >
      {/* Before (bottom layer) */}
      <Image
        src={beforeSrc}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover object-center"
        draggable={false}
      />
      <span className="pointer-events-none absolute bottom-3 left-3 z-[5] rounded-md bg-black/45 px-2.5 py-1 text-[0.625rem] font-medium tracking-wide text-white uppercase">
        {beforeLabel}
      </span>

      {/* After — clipped by slider */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden
      >
        <Image
          src={afterSrc}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center"
          draggable={false}
        />
        <span className="pointer-events-none absolute right-3 bottom-3 z-[5] rounded-md bg-black/45 px-2.5 py-1 text-[0.625rem] font-medium tracking-wide text-white uppercase">
          {afterLabel}
        </span>
      </div>

      <div
        className="absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_8px_rgb(18_41_77/0.35)]"
        style={{ left: `${position}%` }}
        aria-hidden
      />

      <button
        type="button"
        aria-label="Before and after comparison slider"
        aria-valuemin={10}
        aria-valuemax={90}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} percent after`}
        role="slider"
        tabIndex={0}
        className={cn(
          "absolute top-1/2 z-20 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center",
          "bg-brand-navy rounded-full text-white shadow-[0_4px_14px_rgb(18_41_77/0.35)]",
          "focus-visible:ring-brand-navy focus-visible:ring-2 focus-visible:ring-offset-2",
          "cursor-ew-resize touch-none",
        )}
        style={{ left: `${position}%` }}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
      >
        <ChevronsLeftRight className="size-4" strokeWidth={2} aria-hidden />
      </button>
    </div>
  );
}
