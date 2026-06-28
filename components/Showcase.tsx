import { Container } from "./ui/Container";

/* V13 — the product frame now renders a real, alt-texted <img> screenshot of
   the Vela workspace (public/vela-workspace.svg) inside the browser chrome,
   replacing the earlier abstract CSS shapes. */
export function Showcase() {
  return (
    <section aria-labelledby="showcase-heading" className="relative">
      <Container className="pb-24 sm:pb-32">
        <h2 id="showcase-heading" className="sr-only">
          Inside the Vela workspace
        </h2>
        <figure className="relative mx-auto my-0 max-w-5xl">
          {/* soft glow behind the frame */}
          <div
            aria-hidden
            className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2.5rem] aurora opacity-70 blur-2xl"
          />

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_40px_90px_-40px_rgba(10,10,30,0.3)]">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-black/5 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <div className="ml-4 h-5 w-40 rounded-full bg-black/[0.04] sm:w-56" />
            </div>

            {/* real product screenshot */}
            <img
              src="/vela-workspace.svg"
              width={1200}
              height={700}
              alt="The Vela workspace: a Product Launch board with To do, In progress, and Done columns of task cards, an automation rule that notifies #launch when a task moves to Done, and a live activity feed."
              className="block h-auto w-full"
            />
          </div>

          {/* floating accent card for depth */}
          <div
            aria-hidden
            className="absolute -bottom-7 right-4 hidden w-56 rotate-[-2deg] rounded-xl border border-black/10 bg-white/90 p-4 shadow-[0_24px_60px_-24px_rgba(10,10,30,0.35)] backdrop-blur sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-violet-300 to-sky-300" />
              <div className="flex-1">
                <div className="h-3 w-full rounded-full bg-black/[0.08]" />
                <div className="mt-2 h-3 w-2/3 rounded-full bg-black/[0.05]" />
              </div>
            </div>
          </div>

          <figcaption className="mt-8 text-center text-sm leading-relaxed text-muted">
            A look inside the Vela workspace — projects, automated workflows, and
            live activity in one connected view.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
