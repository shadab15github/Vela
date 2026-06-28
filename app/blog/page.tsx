import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Vela",
  description:
    "Practical writing on workflow automation, team coordination, and getting more done with less manual work.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "Vela",
    title: "Blog — Vela",
    description:
      "Practical writing on workflow automation, team coordination, and getting more done with less manual work.",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section aria-labelledby="blog-heading">
          <Container className="pt-24 pb-12 sm:pt-32">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                Blog
              </p>
              <h1
                id="blog-heading"
                className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
              >
                Notes on automating the work.
              </h1>
              <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
                Practical writing on workflow automation, team coordination, and
                doing more with less manual effort.
              </p>
            </div>
          </Container>
        </section>

        <section aria-label="Articles" className="border-t border-black/5">
          <Container className="py-12 sm:py-16">
            <ul className="divide-y divide-black/10 border-y border-black/10">
              {posts.map((post) => (
                <li key={post.slug}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-2 py-8 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <div className="max-w-2xl">
                      <h2 className="text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-ink/70">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">
                        {post.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-sm tracking-tight text-faint">
                      <time dateTime={post.date}>{post.dateLabel}</time>
                      <span className="px-2">·</span>
                      {post.readingTime}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
