import { Container } from "./ui/Container";
import { Glyph } from "./ui/Glyph";

/* Real, benefit-led descriptions of what Vela actually does. */
const items = [
  {
    glyph: "spark",
    title: "Automations",
    body: "Trigger actions across your tools the moment a task changes status — no manual hand-offs.",
  },
  {
    glyph: "orbit",
    title: "One workspace",
    body: "Projects, tasks, and docs live in one place and stay in sync for the whole team.",
  },
  {
    glyph: "layers",
    title: "Integrations",
    body: "Connect Slack, GitHub, Google Workspace, and the tools you already use in a few clicks.",
  },
  {
    glyph: "pulse",
    title: "Real-time updates",
    body: "Everyone sees changes the instant a teammate makes them, on every device.",
  },
  {
    glyph: "compass",
    title: "Workflow templates",
    body: "Start from proven workflows for sprints, launches, and reviews — or build your own.",
  },
  {
    glyph: "prism",
    title: "Insights",
    body: "Dashboards show where work stands, what's blocked, and what needs attention next.",
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="border-t border-black/5"
    >
      <Container className="py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2
            id="features-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Everything your team needs to automate the work.
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-muted">
            Vela connects your tools, automates the routine steps between them,
            and keeps everyone working from the same source of truth.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-ink/80 transition-colors group-hover:text-ink">
                <Glyph name={item.glyph} />
              </div>
              <h3 className="mt-5 text-base font-medium tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
