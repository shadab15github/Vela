import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/*
 * V2 — first GEO optimization: a descriptive <title> + meta description that
 * name the product, its category, and its audience, giving crawlers and LLMs a
 * factual anchor for "what is Vela?".
 *
 * Deliberately scoped to ONLY this change — the visible page copy stays vague,
 * and there is still no Open Graph, Twitter card, canonical, or JSON-LD. Those
 * are introduced one at a time in later versions so each delta is measurable.
 */
export const metadata: Metadata = {
  title: "Vela — Workflow Automation Platform for Modern Teams",
  description:
    "Vela is a workflow automation platform for modern teams — plan projects, automate routine work, and ship faster from one connected workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
