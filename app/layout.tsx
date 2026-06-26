import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteJsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/*
 * V2 — descriptive title + meta description (factual anchor for "what is Vela?").
 * V5 — Open Graph + Twitter cards + canonical URL: share/preview metadata and a
 * canonical so crawlers and social/LLM previews resolve to one authoritative URL.
 * (A bespoke OG image asset is still deferred to V11.)
 */
const SITE_URL = "https://www.vela.com";
const TITLE = "Vela — Workflow Automation Platform for Modern Teams";
const DESCRIPTION =
  "Vela is a workflow automation platform for modern teams — plan projects, automate routine work, and ship faster from one connected workspace.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Vela",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Vela",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vela",
    creator: "@vela",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
