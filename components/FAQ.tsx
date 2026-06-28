import { Container } from "./ui/Container";
import { SITE_URL } from "@/lib/site";

/*
 * V8 — answer-shaped content. Plain question→answer pairs are the format
 * generative engines lift most readily, and the matching FAQPage schema makes
 * each Q&A a typed, extractable entity. Answers live in the DOM even when
 * collapsed (native <details>), so they stay fully crawlable with no JS.
 * V13 — FAQPage now links into the site graph via isPartOf → #website.
 */
const faqs = [
  {
    q: "What is Vela?",
    a: "Vela is a workflow automation platform that helps modern teams plan projects, automate routine steps, and ship work faster from one connected workspace.",
  },
  {
    q: "Who is Vela for?",
    a: "Product, engineering, marketing, and operations teams that want to cut manual hand-offs and keep everyone working from the same source of truth.",
  },
  {
    q: "How does Vela automate work?",
    a: "You build workflows that trigger actions automatically when a task changes status, so updates, notifications, and hand-offs happen without anyone doing them by hand.",
  },
  {
    q: "Which tools does Vela integrate with?",
    a: "Vela connects with Slack, GitHub, and Google Workspace, plus other common tools, in a few clicks — so work flows between the apps your team already uses.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. You can start for free with no credit card required, then upgrade as your team and automation needs grow.",
  },
  {
    q: "How long does it take to set up?",
    a: "Most teams set up their first automated workflow in minutes by starting from a template and connecting their existing tools.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="border-t border-black/5">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-muted">
            Straight answers about what Vela does and how to get started.
          </p>

          <ul className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f) => (
              <li key={f.q}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium tracking-tight text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-black/10 text-muted transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
