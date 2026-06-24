# GEO / LLM Visibility — Version 1 Baseline

This file is the experiment log. V1 is the deliberately weak baseline.

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

Track each version's three scores in a table here as you ship them.
