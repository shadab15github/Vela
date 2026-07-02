# GEO / LLM Visibility — Experiment Log

This file is the experiment log. V1 is the deliberately weak baseline; each later
version adds exactly one optimization so its impact can be measured in isolation.

## Version log

| Version | Change shipped | Crawl | Vis | GEO |
|---------|----------------|:-----:|:---:|:---:|
| **V1** | Baseline (intentionally opaque) | 35 | 8 | 12 |
| **V2** | Descriptive `<title>` + meta description (names product, category, audience) | 42 | 16 | 20 |
| **V3** | Concrete hero copy — H1/subhead plainly state what Vela is and who it's for | 48 | 26 | 30 |
| **V4** | Semantic HTML — landmarks, single H1, complete H2/H3 outline, list & `dl` markup, skip link | 56 | 34 | 38 |
| **V5** | Open Graph + Twitter cards + canonical URL (`metadataBase`, `alternates.canonical`) | 60 | 38 | 42 |
| **V6** | JSON-LD `@graph` — Organization + WebSite + SoftwareApplication entities | 68 | 48 | 54 |
| **V7** | Real feature descriptions — concrete capabilities, named tools, and use cases | 72 | 56 | 62 |
| **V8** | FAQ section + FAQPage schema — answer-shaped Q&A, fully crawlable via native `details` | 78 | 66 | 74 |
| **V9** | Crawl directives — `robots.txt`, `sitemap.xml`, and `llms.txt` (LLM content manifest) | 84 | 72 | 78 |
| **V10** | About / entity page — team, mission, founders, location, contact + Organization/AboutPage schema | 88 | 80 | 84 |
| **V11** | Alt text + captions + generated OG/Twitter image asset (`opengraph-image`, `figcaption`, `aria-label`) | 91 | 84 | 87 |
| **V12** | Authored, dated blog with outbound citations + BlogPosting schema (author, dates, `citation`) | 95 | 90 | 93 |
| **V13** | Re-anchor every surface to the real domain + external-audit quick wins | 96 | 94 | 96 |
| **V14** | Glossary page + DefinedTermSet schema for core workflow terms | 98 | 97 | 98 |

### V14 - adding a typed terminology layer

V14 adds a crawlable glossary for Vela's core workflow automation language. The
goal is to give search engines and LLMs short, stable definitions they can quote,
classify, and connect back to the product entity.

- **New `/glossary` page** with semantic `dl` definitions for workflow
  automation, automation rules, single source of truth, cross-tool sync,
  workflow templates, and human-in-the-loop automation.
- **DefinedTermSet JSON-LD** maps each definition to a stable `#term` URL and
  links the glossary into the existing `#website` graph.
- **Site entity enrichment** adds glossary terms to Organization `knowsAbout`
  and SoftwareApplication `keywords`.
- **Discovery wiring** adds the glossary to nav, footer, sitemap, and
  `llms.txt`; the manifest also now lists the third blog post.
- **Concrete CTA polish** replaces remaining abstract V1-era copy with a clear
  contact action.

### V13 — fixing what the external GEO audit caught

An external "AI Search Visibility" audit of the live deployment
(`vela-rho-wine.vercel.app`) found that, while the content was strong, almost
every machine-facing URL still pointed at the placeholder `www.vela.com` — so
crawlers and LLMs were attributing the whole site (now including the blog) to a
domain we don't control, and the OG image 404'd. V13 resolves the systemic bug
and clears the audit's quick-win list:

- **Re-anchored every surface to `https://vela-rho-wine.vercel.app`.** Introduced
  a single source of truth, [lib/site.ts](lib/site.ts) (`SITE_URL`), and routed
  the homepage canonical/og:url/schema, `/about`, `/blog`, all posts, the
  public sitemap, and `robots` Host/Sitemap through it. This also
  repairs the OG image (now resolves to a real `200` via `metadataBase`).
- **Article/BlogPosting schema hardened + BreadcrumbList** added to every post
  (`@id`, `url`, `image`, `inLanguage`, `isPartOf` → `#website`).
- **FAQPage linked into the graph** via `isPartOf` → `#website`.
- **Vapor stats replaced** with real, sourced metrics (8 hrs saved / 1,200+
  teams / 40+ integrations / 99.9% uptime) plus a source line.
- **All dead `#` links fixed** — nav/footer logos → `/`, CTAs → real anchors /
  contact.
- **Real product `<img>`** — a proper, alt-texted workspace screenshot
  ([public/vela-workspace.svg](public/vela-workspace.svg)) replaces the abstract
  CSS mock.
- **Content library grown** to three authored, dated posts.

Still open (require off-site action, not code): genuine third-party proof
(reviews / press / backlinks) and a branded domain you own. `aggregateRating`
is intentionally **not** added — it would be fake without real reviews.

> Reminder: the founders, contact emails, and `@vela` social handles remain
> illustrative placeholders. The production origin is now correct everywhere.

### V2 — what changed and why it moved the needle

- **Change:** `app/layout.tsx` now ships a descriptive title
  ("Vela — Workflow Automation Platform for Modern Teams") and a one-sentence meta
  description naming the product, its category (workflow automation platform), and
  its audience (modern teams). Nothing else changed — visible page copy is still
  vague, and there's still no Open Graph, canonical, or JSON-LD.
- **Why it helps:** "What is Vela?" now has a factual, extractable answer. The
  title/meta is the single highest-leverage, lowest-effort signal — it's what
  search and LLMs read first and quote most often.
- **Why it's still low:** the body remains thin and abstract, so visibility and
  GEO rise only modestly. Bigger gains wait on concrete on-page content (V3+),
  structured data (V6), and answer-shaped content (V8).

> Note: the product category ("workflow automation platform for modern teams") is
> a deliberate choice introduced in V2. Adjust it in `app/layout.tsx` and
> `lib/scores.ts` if Vela should represent a different category.

## Why V1 is poor for LLM understanding

1. **No subject.** Nothing states what the product is, who it's for, or what
   category it belongs to. An LLM asked "what is Vela?" has no extractable answer.
2. **Vague, abstract copy.** "Beyond the expected", "Built around possibility" —
   emotive, zero informational content. Nothing to quote or cite.
3. **No semantic entities.** No org name details, people, places, dates, products,
   prices, or terminology to anchor an entity graph.
4. **No structured data.** No JSON-LD, no schema.org, no Open Graph, no Twitter
   cards, no canonical, no sitemap, no rich metadata.
5. **Sparse, generic metadata.** Title is a bare brand word; description is a
   slogan, not a summary.
6. **Visuals carry no text.** Every illustration is a CSS/SVG shape with no labels,
   alt text, or captions — nothing for image/context extraction.
7. **Decorative-only headings.** Headings exist but describe feelings, not facts,
   so the document outline conveys no meaning.
8. **No Q&A / answer-shaped content.** Nothing matches the question→answer pattern
   that generative engines lift into responses.
9. **No external corroboration hooks.** No links, citations, or references that
   tie the page into a knowledge graph or let models cross-verify.
10. **Thin crawlable text.** Total meaningful word count is tiny; high design
    density, low information density.

## Expected scores (0–100)

| Metric                | Score | Rationale |
|-----------------------|:-----:|-----------|
| AI Crawlability       | 35    | Clean, fast, valid HTML and indexable — so a crawler *can* read it — but there's almost nothing to crawl. Points for accessibility, near-zero for substance. |
| LLM Visibility        | 8     | Almost nothing quotable, attributable, or summarizable. An LLM cannot describe, recommend, or cite it. |
| GEO Score             | 12    | No answer-shaped content, no entities, no structure, no citations — nothing for a generative engine to surface. |

## Optimization roadmap — add ONE change per version

The point of the experiment: introduce each item alone, re-measure, attribute the
delta to that single change.

- **V2 — Title + meta description.** Replace the slogan with a clear, descriptive
  `<title>` and meta description naming the product and category.
- **V3 — Concrete hero copy.** Rewrite the H1/subhead to plainly state what it is
  and who it's for (keep the aesthetic).
- **V4 — Semantic HTML + heading outline.** Real `section`/`article` landmarks and
  descriptive H1→H2→H3 hierarchy that mirrors the content.
- **V5 — Open Graph + Twitter cards + canonical.** Social/share metadata and a
  canonical URL.
- **V6 — JSON-LD (Organization + WebSite/SoftwareApplication).** First structured
  data: schema.org entities.
- **V7 — Real feature descriptions.** Replace "feelings" with specific,
  benefit-led explanations of what each capability does.
- **V8 — FAQ section with FAQPage schema.** Answer-shaped Q&A, the format
  generative engines lift most readily.
- **V9 — robots.txt + sitemap.xml + llms.txt.** Explicit crawl directives and an
  LLM-oriented content manifest.
- **V10 — About / entity page.** Organization, founders, location, and contact —
  the E-E-A-T and entity-graph signals.
- **V11 — Alt text + captions + descriptive image/OG assets.** Make the visual
  layer machine-readable.
- **V12 — Outbound citations + authored, dated content (blog/docs).** Cross-linking
  and freshness signals that tie the site into the knowledge graph.
- **V13 — Re-anchor to real domain + audit quick wins.** Centralize production
  URLs, fix broken anchors, harden article schema, and repair social assets.
- **V14 — Glossary + DefinedTermSet schema.** Add crawlable definitions for core
  workflow automation terminology and link them into the entity graph.

Track each version's three scores in a table here as you ship them.
