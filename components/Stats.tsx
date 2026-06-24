import { Container } from "./ui/Container";

/* Numbers without units or context — figures that resist parsing. */
const stats = [
  { value: "10×", label: "In every direction" },
  { value: "∞", label: "Without the limits" },
  { value: "0.01", label: "Down to the detail" },
  { value: "99.9", label: "Always present" },
];

export function Stats() {
  return (
    <section className="border-t border-black/5 bg-black/[0.015]">
      <Container className="py-24 sm:py-28">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm tracking-tight text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
