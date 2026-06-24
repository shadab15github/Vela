import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium tracking-tight text-muted backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-400 to-sky-400" />
      {children}
    </span>
  );
}
