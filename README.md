# Vela — GEO / LLM Visibility Experiment (Version 1)

A single-page Next.js site built as the **control group** for an AI-search /
LLM-visibility experiment. Version 1 is intentionally **premium for humans** and
**opaque to machines**: it looks like a polished SaaS landing page, but says
almost nothing a crawler or LLM can extract, attribute, or summarize.

Each future version reintroduces *one* GEO/LLM optimization so the impact of that
single change can be measured in isolation.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- No external UI libraries, no external images (all visuals are pure HTML/CSS/SVG)

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
  layout.tsx        # minimal metadata (intentionally sparse)
  page.tsx          # composes the six sections
  globals.css       # Tailwind v4 + design tokens
components/
  Nav, Hero, Showcase, Features, Stats, CTA, Footer
  ui/               # Container, Button, Eyebrow, Glyph, Mark
```

See `GEO-NOTES.md` for the visibility scoring and the version-by-version
optimization roadmap.
