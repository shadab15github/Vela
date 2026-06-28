/*
 * V6 — first structured data. A schema.org @graph describing the publisher
 * (Organization), the site (WebSite), and the product (SoftwareApplication),
 * so search engines and LLMs can resolve Vela as a typed entity rather than
 * inferring it from prose. Kept in sync with the metadata in app/layout.tsx.
 */
import { SITE_URL } from "@/lib/site";

const DESCRIPTION =
  "Vela is a workflow automation platform for modern teams — plan projects, automate routine work, and ship faster from one connected workspace.";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Vela",
      url: SITE_URL,
      description: "Maker of Vela, a workflow automation platform for teams.",
      slogan: "Automate the busywork. Ship the real work.",
      foundingDate: "2024",
      founders: [
        { "@type": "Person", name: "Maya Chen" },
        { "@type": "Person", name: "Daniel Okafor" },
        { "@type": "Person", name: "Priya Nair" },
      ],
      numberOfEmployees: "30+",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@vela.com",
      },
      sameAs: [
        "https://twitter.com/vela",
        "https://www.linkedin.com/company/vela",
        "https://github.com/vela",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Vela",
      description: DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Vela",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Workflow Automation",
      operatingSystem: "Web",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free plan available; no credit card required.",
      },
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      // schema.org payload is static and developer-authored — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
