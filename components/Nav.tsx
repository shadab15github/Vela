import { Container } from "./ui/Container";
import { Mark } from "./ui/Mark";

const links = [
  { label: "Features", href: "/#features-heading" },
  { label: "FAQ", href: "/#faq-heading" },
  { label: "Glossary", href: "/glossary" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <Mark />
            <span className="text-[15px] font-semibold tracking-tight text-ink">
              Vela
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-tight text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/#cta-heading"
            className="inline-flex h-9 items-center justify-center rounded-full bg-ink px-4 text-sm font-medium tracking-tight text-white transition-colors hover:bg-ink/90"
          >
            Start free
          </a>
        </div>
      </Container>
    </div>
  );
}
