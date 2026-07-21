"use client";

import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const brandButtonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2",
    "font-[family-name:var(--font-body)] font-semibold whitespace-nowrap",
    "rounded-[var(--gs-radius-md)] border border-transparent outline-none select-none",
    "transition-[transform,background-color,border-color,box-shadow,color] duration-200",
    "focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "motion-safe:hover:-translate-y-0.5",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-brand-accent hover:bg-brand-accent-hover motion-safe:hover:shadow-soft-md text-white",
        outline: "border-brand-slate text-brand-slate hover:bg-brand-mist border-2 bg-transparent",
        ghost: "text-brand-slate hover:bg-brand-mist bg-transparent",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type BrandButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof brandButtonVariants> & {
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

export function BrandButton({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  ...props
}: BrandButtonProps) {
  return (
    <ButtonPrimitive
      disabled={Boolean(disabled || loading)}
      aria-busy={loading || undefined}
      className={cn(brandButtonVariants({ variant, size }), className)}
      {...props}
    >
      {loading ? <Loader2 className="size-4 animate-spin" aria-hidden /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </ButtonPrimitive>
  );
}

export { brandButtonVariants };
