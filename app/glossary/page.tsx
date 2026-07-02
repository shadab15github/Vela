import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { glossaryTerms } from "@/lib/glossary";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/glossary`;
const TITLE = "Workflow Automation Glossary - Vela";
const DESCRIPTION =
  "Plain-English definitions of workflow automation, automation rules, cross-tool sync, workflow templates, and other Vela concepts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/glossary" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Vela",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const glossarySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DefinedTermSet",
      "@id": `${PAGE_URL}#terms`,
      name: "Vela workflow automation glossary",
      url: PAGE_URL,
      description: DESCRIPTION,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      hasDefinedTerm: glossaryTerms.map((term) => ({
        "@type": "DefinedTerm",
        "@id": `${PAGE_URL}#${term.slug}`,
        name: term.term,
        description: term.definition,
        url: `${PAGE_URL}#${term.slug}`,
        inDefinedTermSet: { "@id": `${PAGE_URL}#terms` },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Glossary", item: PAGE_URL },
      ],
    },
  ],
};

export default function GlossaryPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section aria-labelledby="glossary-heading">
          <Container className="pt-24 pb-12 sm:pt-32">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                Glossary
              </p>
              <h1
                id="glossary-heading"
                className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
              >
                Workflow automation terms, defined plainly.
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
                A crawlable reference for the language Vela uses around
                automations, connected work, templates, and human-in-the-loop
                workflows.
              </p>
            </div>
          </Container>
        </section>

        <section aria-labelledby="term-index-heading" className="border-t border-black/5">
          <Container className="py-10">
            <h2 id="term-index-heading" className="sr-only">
              Glossary term index
            </h2>
            <nav aria-label="Glossary terms">
              <ul className="flex flex-wrap gap-3">
                {glossaryTerms.map((term) => (
                  <li key={term.slug}>
                    <a
                      href={`#${term.slug}`}
                      className="inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium tracking-tight text-muted transition-colors hover:border-black/20 hover:text-ink"
                    >
                      {term.term}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </section>

        <section aria-labelledby="definitions-heading" className="border-t border-black/5">
          <Container className="py-16 sm:py-20">
            <div className="max-w-2xl">
              <h2
                id="definitions-heading"
                className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Definitions
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Each term includes a general definition and how the concept
                appears inside Vela.
              </p>
            </div>

            <dl className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {glossaryTerms.map((term) => (
                <div
                  id={term.slug}
                  key={term.slug}
                  className="scroll-mt-24 py-8 sm:grid sm:grid-cols-[0.8fr_1.2fr] sm:gap-12"
                >
                  <dt>
                    <dfn className="not-italic text-xl font-semibold tracking-tight text-ink">
                      {term.term}
                    </dfn>
                  </dt>
                  <dd className="mt-4 sm:mt-0">
                    <p className="text-[17px] leading-relaxed text-muted">
                      {term.definition}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">
                      <span className="font-medium text-ink">In Vela:</span>{" "}
                      {term.velaContext}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {term.related.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium tracking-tight text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
    </>
  );
}
