import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/*
 * V9 — explicit crawl directives. Allow indexing of the public site, point
 * crawlers at the sitemap, and keep the internal /scores dashboard out of
 * search (it is also noindex at the page level).
 * V13 — Host/Sitemap now derive from the real origin (was www.vela.com).
 */
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
