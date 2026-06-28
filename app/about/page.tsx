import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { SITE_URL } from "@/lib/site";

/*
 * V10 — About / entity page. The first real E-E-A-T + entity-graph content:
 * who builds Vela, when it was founded, where it's based, and how to reach it.
 *
 * NOTE: the people, dates, location, and contact details below are illustrative
 * placeholders for the experiment — replace them with real values before launch.
 */
export const metadata: Metadata = {
  title: "About Vela — Our team, mission, and company",
  description:
    "Vela is built by a team on a mission to automate the busywork so people can focus on real work. Founded in 2024 and based in San Francisco.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "Vela",
    title: "About Vela — Our team, mission, and company",
    description:
      "Vela is built by a team on a mission to automate the busywork so people can focus on real work. Founded in 2024 and based in San Francisco.",
  },
};

const founders = [
  { name: "Maya Chen", role: "Co-founder & CEO", initials: "MC" },
  { name: "Daniel Okafor", role: "Co-founder & CTO", initials: "DO" },
  { name: "Priya Nair", role: "Co-founder & Head of Product", initials: "PN" },
];

const facts = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "San Francisco, CA" },
  { label: "Team", value: "30+ people" },
  { label: "Customers", value: "1,200+ teams" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Vela",
    url: SITE_URL,
    foundingDate: "2024",
    founders: founders.map((f) => ({ "@type": "Person", name: f.name })),
    numberOfEmployees: "30+",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@vela.com",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* hero */}
        <section aria-labelledby="about-heading" className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 rounded-[50%] bg-gradient-to-br from-violet-200/50 via-sky-100/45 to-transparent blur-3xl" />
          </div>
          <Container className="pt-24 pb-16 sm:pt-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                About Vela
              </p>
              <h1
                id="about-heading"
                className="mt-4 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl md:text-6xl"
              >
                We're building the workspace that runs itself.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
                Vela started in 2024 with a simple belief: teams spend too much
                time moving work between tools instead of doing the work itself.
                We set out to automate the busywork so people can focus on what
                matters.
              </p>
            </div>
          </Container>
        </section>

        {/* company facts */}
        <section aria-labelledby="facts-heading" className="border-t border-black/5">
          <Container className="py-16 sm:py-20">
            <h2 id="facts-heading" className="sr-only">
              Company facts
            </h2>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <dd className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    {f.value}
                  </dd>
                  <dt className="mt-2 text-sm tracking-tight text-muted">
                    {f.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* mission */}
        <section aria-labelledby="mission-heading" className="border-t border-black/5">
          <Container className="py-20 sm:py-24">
            <div className="mx-auto max-w-3xl">
              <h2
                id="mission-heading"
                className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Our mission
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-muted">
                <p>
                  Modern teams run on a dozen tools that don't talk to each
                  other. People become the glue — copying updates, chasing
                  status, and stitching work together by hand. That work is
                  invisible, and it never ends.
                </p>
                <p>
                  Vela replaces that manual glue with automated workflows. When
                  a task changes, the right updates, notifications, and
                  hand-offs happen on their own — across the tools your team
                  already uses. The result is fewer dropped balls and more time
                  for the work that actually moves things forward.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* team */}
        <section aria-labelledby="team-heading" className="border-t border-black/5">
          <Container className="py-20 sm:py-24">
            <div className="max-w-2xl">
              <h2
                id="team-heading"
                className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                The team behind Vela
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Vela is built by a small, senior team with backgrounds in
                developer tools, design, and operations.
              </p>
            </div>
            <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {founders.map((person) => (
                <li
                  key={person.name}
                  className="rounded-2xl border border-black/10 bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-300 to-sky-300 text-sm font-semibold text-white">
                    {person.initials}
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm tracking-tight text-muted">
                    {person.role}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* contact */}
        <section aria-labelledby="contact-heading" className="border-t border-black/5 bg-black/[0.015]">
          <Container className="py-20 sm:py-24">
            <div className="mx-auto max-w-3xl">
              <h2
                id="contact-heading"
                className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Get in touch
              </h2>
              <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <dt className="text-sm font-medium tracking-tight text-ink">
                    General
                  </dt>
                  <dd className="mt-1 text-sm text-muted">
                    <a
                      href="mailto:hello@vela.com"
                      className="transition-colors hover:text-ink"
                    >
                      hello@vela.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium tracking-tight text-ink">
                    Press
                  </dt>
                  <dd className="mt-1 text-sm text-muted">
                    <a
                      href="mailto:press@vela.com"
                      className="transition-colors hover:text-ink"
                    >
                      press@vela.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium tracking-tight text-ink">
                    Office
                  </dt>
                  <dd className="mt-1 text-sm text-muted">
                    San Francisco, California, USA
                  </dd>
                </div>
              </dl>
            </div>
          </Container>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </>
  );
}
