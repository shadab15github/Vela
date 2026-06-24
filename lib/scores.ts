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

export const CURRENT_VERSION = "V1";
export const UPDATED = "June 24, 2026";

/** The three headline scores for the current version. */
export const metrics: Metric[] = [
  {
    key: "crawlability",
    label: "AI Crawlability",
    score: 35,
    blurb: "Clean, fast, indexable HTML — but almost nothing to read.",
  },
  {
    key: "visibility",
    label: "LLM Visibility",
    score: 8,
    blurb: "Nothing quotable, attributable, or summarizable.",
  },
  {
    key: "geo",
    label: "GEO Score",
    score: 12,
    blurb: "No answer-shaped content, entities, or citations to surface.",
  },
];

/** Signal-by-signal breakdown that adds up to the weak baseline. */
export const signals: { label: string; score: number }[] = [
  { label: "Descriptive title & meta description", score: 10 },
  { label: "Structured data (JSON-LD / schema.org)", score: 0 },
  { label: "Semantic HTML & heading outline", score: 25 },
  { label: "Named entities (org, people, product)", score: 5 },
  { label: "Answer-shaped content (FAQ / Q&A)", score: 0 },
  { label: "Open Graph & social metadata", score: 0 },
  { label: "Crawl directives (robots / sitemap / llms.txt)", score: 20 },
  { label: "Citations & external corroboration", score: 0 },
  { label: "Image alt text & captions", score: 5 },
  { label: "Content depth & freshness", score: 8 },
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
