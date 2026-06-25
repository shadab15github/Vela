import type { MetadataRoute } from "next";

/*
 * V9 — explicit crawl directives. Allow indexing of the public site, point
 * crawlers at the sitemap, and keep the internal /scores dashboard out of
 * search (it is also noindex at the page level).
 */
const SITE_URL = "https://www.vela.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/scores",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
