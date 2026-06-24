import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/90 shadow-[0_8px_24px_-12px_rgba(10,10,15,0.5)]",
  ghost:
    "bg-white/60 text-ink/80 ring-1 ring-inset ring-black/10 hover:text-ink hover:ring-black/20",
};

export function Button({
  children,
  variant = "primary",
  href = "#",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-tight transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
