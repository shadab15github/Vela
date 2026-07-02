/*
 * Single source of truth for the experiment dashboard (/scores).
 * Update these numbers as each version ships, then re-measure.
 */

export type Metric = {
  key: string;
  label: string;
  score: number;
  blurb: string;
};

export const CURRENT_VERSION = "V14";
export const UPDATED = "July 2, 2026";

/** The three headline scores for the current version. */
export const metrics: Metric[] = [
  {
    key: "crawlability",
    label: "AI Crawlability",
    score: 98,
    blurb: "The glossary is indexed, listed in the sitemap, and exposed through llms.txt.",
  },
  {
    key: "visibility",
    label: "LLM Visibility",
    score: 97,
    blurb: "Core workflow terms now have concise, reusable definitions.",
  },
  {
    key: "geo",
    label: "GEO Score",
    score: 98,
    blurb: "DefinedTermSet schema gives generative engines a typed terminology layer.",
  },
];

/** Signal-by-signal breakdown for the current version. */
export const signals: { label: string; score: number }[] = [
  { label: "Descriptive title & meta description", score: 95 },
  { label: "Structured data (JSON-LD / schema.org)", score: 97 },
  { label: "Semantic HTML & heading outline", score: 90 },
  { label: "Named entities (org, people, product)", score: 96 },
  { label: "Answer-shaped content (FAQ / Q&A)", score: 93 },
  { label: "Open Graph & social metadata", score: 94 },
  { label: "Crawl directives (robots / sitemap / llms.txt)", score: 97 },
  { label: "Citations & external corroboration", score: 82 },
  { label: "Image alt text & captions", score: 92 },
  { label: "Content depth & freshness", score: 94 },
  { label: "Terminology / DefinedTerm coverage", score: 98 },
];

/** Forward-looking projection: one optimization added per version. */
export const roadmap: {
  v: string;
  change: string;
  crawl: number;
  vis: number;
  geo: number;
}[] = [
  { v: "V1", change: "Baseline (intentionally opaque)", crawl: 35, vis: 8, geo: 12 },
  { v: "V2", change: "Descriptive title + meta description", crawl: 42, vis: 16, geo: 20 },
  { v: "V3", change: "Concrete hero copy", crawl: 48, vis: 26, geo: 30 },
  { v: "V4", change: "Semantic HTML + heading outline", crawl: 56, vis: 34, geo: 38 },
  { v: "V5", change: "Open Graph + Twitter + canonical", crawl: 60, vis: 38, geo: 42 },
  { v: "V6", change: "JSON-LD (Organization + WebSite)", crawl: 68, vis: 48, geo: 54 },
  { v: "V7", change: "Real feature descriptions", crawl: 72, vis: 56, geo: 62 },
  { v: "V8", change: "FAQ section + FAQPage schema", crawl: 78, vis: 66, geo: 74 },
  { v: "V9", change: "robots.txt + sitemap.xml + llms.txt", crawl: 84, vis: 72, geo: 78 },
  { v: "V10", change: "About / entity page (E-E-A-T)", crawl: 88, vis: 80, geo: 84 },
  { v: "V11", change: "Alt text + OG image assets", crawl: 91, vis: 84, geo: 87 },
  { v: "V12", change: "Citations + authored, dated content", crawl: 95, vis: 90, geo: 93 },
  { v: "V13", change: "Re-anchor to real domain + audit quick wins", crawl: 96, vis: 94, geo: 96 },
  { v: "V14", change: "Glossary + DefinedTermSet schema", crawl: 98, vis: 97, geo: 98 },
];

/** Shared scale: weak / developing / strong. */
export function tier(score: number): { label: string; color: string } {
  if (score >= 67) return { label: "Strong", color: "#10b981" };
  if (score >= 34) return { label: "Developing", color: "#f59e0b" };
  return { label: "Weak", color: "#f43f5e" };
}

export const overall = Math.round(
  metrics.reduce((sum, m) => sum + m.score, 0) / metrics.length,
);
