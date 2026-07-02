import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

/*
 * V9 — sitemap so crawlers discover every indexable URL. Extended in V10
 * (/about) and V12 (/blog + each post) as those routes shipped.
 * V13 — all <loc> entries now host-match the real origin (was www.vela.com).
 * V14 — /glossary added as a crawlable DefinedTermSet reference.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-02");

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

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
    {
      url: `${SITE_URL}/glossary`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
  ];
}
