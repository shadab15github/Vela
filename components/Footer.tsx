import { Container } from "./ui/Container";
import { Mark } from "./ui/Mark";

/* Real navigation clusters with destinations and entity links. */
const groups = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features-heading" },
      { label: "FAQ", href: "/#faq-heading" },
      { label: "Glossary", href: "/glossary" },
      { label: "Get started", href: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "mailto:hello@vela.com" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "X / Twitter", href: "https://twitter.com/vela" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/vela" },
      { label: "GitHub", href: "https://github.com/vela" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <a href="/" className="flex items-center gap-2.5">
              <Mark />
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                Vela
              </span>
            </a>
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
              Workflow automation for modern teams. Automate the busywork, ship
              the real work.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.heading}>
              <div className="text-sm font-medium tracking-tight text-ink">
                {group.heading}
              </div>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm tracking-tight text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 sm:flex-row">
          <p className="text-xs tracking-tight text-faint">© 2026 Vela</p>
          <p className="text-xs tracking-tight text-faint">
            San Francisco, CA · hello@vela.com
          </p>
        </div>
      </Container>
    </footer>
  );
}
