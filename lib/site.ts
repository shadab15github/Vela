/*
 * V13 — single source of truth for the production origin.
 *
 * Canonicals, og:url values, JSON-LD @ids, sitemap <loc> entries, and robots
 * Host/Sitemap values derive from this one constant. Centralizing it kills the
 * recurring "anchored to the wrong domain" bug (www.vela.com) that the GEO
 * audit flagged from v2 through v12 — there is now exactly one place to change.
 */
export const SITE_URL = "https://vela-rho-wine.vercel.app";

/** Build an absolute URL for a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString().replace(/\/$/, path === "/" ? "/" : "");
}
