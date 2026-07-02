# Vela — GEO / LLM Visibility Experiment (Version 14)

A multi-page Next.js site for an AI-search / LLM-visibility experiment. The
current version, V14, adds a crawlable glossary and `DefinedTermSet` schema so
generative engines can resolve Vela's core workflow automation terminology.

Each version introduces a focused GEO/LLM optimization so the impact of that
change can be measured against the intentionally weak V1 baseline.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- No external UI libraries
- Local SVG product asset and generated Open Graph/Twitter images

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## Structure

```
app/
  layout.tsx        # shared metadata and site-wide JSON-LD
  page.tsx          # product homepage
  about/            # company/entity page
  blog/             # authored content with citations
  glossary/         # V14 DefinedTermSet page
  scores/           # internal noindex visibility dashboard
  globals.css       # Tailwind v4 + design tokens
components/
  Nav, Hero, Showcase, Features, Stats, FAQ, CTA, Footer
  ui/               # Container, Button, Eyebrow, Glyph, Mark
lib/
  glossary.ts       # V14 glossary definitions
  posts.ts          # blog source data
  scores.ts         # experiment dashboard data
  site.ts           # production origin helper
```

See `GEO-NOTES.md` for the visibility scoring and the version-by-version
optimization roadmap.
