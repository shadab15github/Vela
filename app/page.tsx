import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Showcase />
        <Features />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
