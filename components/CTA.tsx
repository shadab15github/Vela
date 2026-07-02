import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-black/5">
      <Container className="py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* decorative wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(80% 120% at 50% 0%, rgba(124,92,255,0.35), transparent 60%), radial-gradient(80% 120% at 50% 100%, rgba(56,189,248,0.25), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="cta-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              Start automating your team's busywork.
            </h2>
            <p className="mt-5 text-balance text-lg leading-relaxed text-white/65">
              Tell us your first workflow and we will help you connect the tools
              around it.
            </p>
            <div className="mt-9 flex justify-center">
              <Button
                variant="primary"
                href="mailto:hello@vela.com?subject=Getting%20started%20with%20Vela"
                className="bg-white text-ink hover:bg-white/90"
              >
                Contact Vela
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
