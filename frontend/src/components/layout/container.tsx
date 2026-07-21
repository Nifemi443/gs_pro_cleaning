import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
  narrow?: boolean;
};

export function Container({
  as: Comp = "div",
  className,
  narrow = false,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-[var(--container-max)]",
        className,
      )}
      {...props}
    />
  );
}
