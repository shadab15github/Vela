import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* decorative background — no content */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-1/2 top-[-12%] h-[460px] w-[820px] -translate-x-1/2 rounded-[50%] bg-gradient-to-br from-violet-200/55 via-sky-100/45 to-transparent blur-3xl" />
      </div>

      <Container className="pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>Now in motion</Eyebrow>

          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Beyond the expected.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
            A different way forward — designed for what comes next, and built
            around possibility.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button variant="primary">Begin</Button>
            <Button variant="ghost">Explore</Button>
          </div>

          <p className="mt-7 text-xs tracking-tight text-faint">
            Quietly in progress, everywhere at once.
          </p>
        </div>
      </Container>
    </section>
  );
}
