import type { MetadataRoute } from "next";

/*
 * V9 — sitemap so crawlers discover every indexable URL. New public routes
 * (e.g. /about in V10, /blog in V12) get appended here as they ship.
 */
const SITE_URL = "https://www.vela.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-24");

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
