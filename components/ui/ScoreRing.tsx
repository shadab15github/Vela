import { tier } from "@/lib/scores";

export function ScoreRing({
  value,
  size = 132,
  stroke = 10,
}: {
  value: number;
  size?: number;
  stroke?: number;
}) {
  const clamped = Math.min(100, Math.max(0, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - clamped / 100);
  const { color } = tier(clamped);

  return (
    <div
      className="relative inline-grid place-items-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="col-start-1 row-start-1 -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(10,10,15,0.08)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="col-start-1 row-start-1 flex flex-col items-center justify-center leading-none">
        <span
          className="font-semibold tracking-tight text-ink"
          style={{ fontSize: size * 0.26 }}
        >
          {value}
        </span>
        <span
          className="mt-1 tracking-tight text-faint"
          style={{ fontSize: Math.max(10, size * 0.085) }}
        >
          / 100
        </span>
      </div>
    </div>
  );
}
