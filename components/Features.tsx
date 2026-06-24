import { Container } from "./ui/Container";
import { Glyph } from "./ui/Glyph";

/* Six "features" that name a feeling, never a function. */
const items = [
  { glyph: "spark", title: "Considered", body: "Shaped with intent, refined without the noise." },
  { glyph: "orbit", title: "Adaptive", body: "It moves the moment things move." },
  { glyph: "layers", title: "Effortless", body: "Less to hold onto, more to feel." },
  { glyph: "pulse", title: "In tune", body: "Always close to wherever you are." },
  { glyph: "compass", title: "Open-ended", body: "Room enough to go any direction." },
  { glyph: "prism", title: "Quietly capable", body: "More underneath than it lets on." },
];

export function Features() {
  return (
    <section className="border-t border-black/5">
      <Container className="py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built around possibility.
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-muted">
            A handful of qualities, held loosely. Each one leaves space for the
            next.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-ink/80 transition-colors group-hover:text-ink">
                <Glyph name={item.glyph} />
              </div>
              <h3 className="mt-5 text-base font-medium tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
