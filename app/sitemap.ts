import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

/*
 * V9 — sitemap so crawlers discover every indexable URL. Extended in V10
 * (/about) and V12 (/blog + each post) as those routes shipped.
 */
const SITE_URL = "https://www.vela.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-24");

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
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
  ];
}
