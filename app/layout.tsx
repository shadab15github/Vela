import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/*
 * Intentionally sparse metadata for Version 1.
 * No description keywords, no Open Graph, no Twitter cards, no canonical,
 * no JSON-LD. Just enough to render a tab title.
 */
export const metadata: Metadata = {
  title: "Vela",
  description: "Beyond the expected.",
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
