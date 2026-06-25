import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { posts, getPost } from "@/lib/posts";

const SITE_URL = "https://www.vela.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Vela Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "Vela",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    citation: post.citations.map((c) => ({
      "@type": "CreativeWork",
      name: c.label,
      url: c.href,
    })),
  };

  return (
    <>
      <Nav />
      <main id="main">
        <article aria-labelledby="article-heading">
          <Container className="py-16 sm:py-24">
            <div className="mx-auto max-w-2xl">
              <a
                href="/blog"
                className="text-sm tracking-tight text-muted transition-colors hover:text-ink"
              >
                ← Blog
              </a>

              <h1
                id="article-heading"
                className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl"
              >
                {post.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm tracking-tight text-muted">
                <span className="font-medium text-ink">{post.author}</span>
                <span className="text-faint">{post.authorRole}</span>
                <span className="text-faint">·</span>
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span className="text-faint">·</span>
                <span>{post.readingTime}</span>
              </div>

              <div className="mt-12 space-y-10">
                {post.body.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-xl font-semibold tracking-tight text-ink">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-muted">
                      {section.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* outbound citations */}
              <section
                aria-labelledby="references-heading"
                className="mt-14 border-t border-black/10 pt-8"
              >
                <h2
                  id="references-heading"
                  className="text-sm font-semibold uppercase tracking-[0.14em] text-faint"
                >
                  References
                </h2>
                <ol className="mt-4 space-y-3">
                  {post.citations.map((c) => (
                    <li
                      key={c.href}
                      className="text-[15px] leading-relaxed text-muted"
                    >
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-ink underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black/50"
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </Container>
        </article>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
