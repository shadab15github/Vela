/* Abstract logomark — a gradient four-point star. Conveys no entity name. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
    >
      <path
        d="M11 1.5l2.7 6.8L20.5 11l-6.8 2.7L11 20.5l-2.7-6.8L1.5 11l6.8-2.7L11 1.5z"
        fill="url(#vela-mark)"
      />
      <defs>
        <linearGradient id="vela-mark" x1="2" y1="2" x2="20" y2="20">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
