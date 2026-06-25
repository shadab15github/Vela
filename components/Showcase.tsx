import { Container } from "./ui/Container";

/* An abstract "product" frame. The chrome implies software, but every
   surface inside is a shape or gradient — no labels, no readable UI. */
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

          <div
            role="img"
            aria-label="The Vela workspace showing a project board with automated workflows, tasks, and a live activity feed in one view."
            className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_40px_90px_-40px_rgba(10,10,30,0.3)]"
          >
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-black/5 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <div className="ml-4 h-5 w-40 rounded-full bg-black/[0.04] sm:w-56" />
            </div>

            {/* abstract canvas */}
            <div className="grid grid-cols-12 gap-5 p-6 sm:p-8">
              {/* rail */}
              <div className="col-span-3 hidden flex-col gap-2.5 sm:flex">
                <div className="h-9 rounded-lg bg-black/[0.05]" />
                <div className="h-3.5 w-4/5 rounded-full bg-black/[0.05]" />
                <div className="h-3.5 w-3/5 rounded-full bg-black/[0.05]" />
                <div className="h-3.5 w-11/12 rounded-full bg-black/[0.05]" />
                <div className="h-3.5 w-2/3 rounded-full bg-black/[0.05]" />
                <div className="mt-auto h-9 rounded-lg bg-black/[0.05]" />
              </div>

              {/* main */}
              <div className="col-span-12 flex flex-col gap-5 sm:col-span-9">
                <div className="relative h-44 overflow-hidden rounded-xl bg-gradient-to-tr from-violet-300/45 via-sky-200/45 to-emerald-200/45 sm:h-52">
                  <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/40 blur-2xl" />
                  <div className="absolute bottom-5 left-5 h-3.5 w-28 rounded-full bg-white/55" />
                  <div className="absolute bottom-11 left-5 h-3.5 w-44 rounded-full bg-white/45" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-black/5 bg-black/[0.015] p-4"
                    >
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-200 to-sky-200" />
                      <div className="mt-4 h-3 w-4/5 rounded-full bg-black/[0.07]" />
                      <div className="mt-2 h-3 w-3/5 rounded-full bg-black/[0.05]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
