/*
 * Purely decorative geometry. No <title>, no aria-label, no semantic hint.
 * Each glyph is an abstract mark — it communicates nothing crawlable.
 */
const paths: Record<string, React.ReactNode> = {
  spark: <path d="M12 3l2.3 6.4L21 12l-6.7 2.6L12 21l-2.3-6.4L3 12l6.7-2.6L12 3z" />,
  orbit: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-22 12 12)" />
    </>
  ),
  layers: (
    <>
      <path d="M12 4l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4" />
    </>
  ),
  pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2.6 5.6L9 15l2.6-5.6L15 9z" />
    </>
  ),
  prism: (
    <>
      <path d="M12 3l9 16H3l9-16z" />
      <path d="M12 3v16" />
    </>
  ),
};

export function Glyph({
  name,
  className = "",
}: {
  name: keyof typeof paths | string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
