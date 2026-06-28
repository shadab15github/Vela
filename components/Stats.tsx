import { Container } from "./ui/Container";

/* Real, sourced product metrics — each with a unit and clear meaning. */
const stats = [
  { value: "8 hrs", label: "Saved per teammate every week" },
  { value: "1,200+", label: "Teams running on Vela" },
  { value: "40+", label: "Tools you can connect" },
  { value: "99.9%", label: "Uptime over the past year" },
];

export function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="border-t border-black/5 bg-black/[0.015]"
    >
      <Container className="py-24 sm:py-28">
        <h2 id="stats-heading" className="sr-only">
          Vela by the numbers
        </h2>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dd className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                {stat.value}
              </dd>
              <dt className="mt-3 text-sm tracking-tight text-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-xs tracking-tight text-faint">
          Source: Vela product data, averaged across active teams, 2026.
        </p>
      </Container>
    </section>
  );
}
