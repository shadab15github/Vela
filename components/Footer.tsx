import { Container } from "./ui/Container";
import { Mark } from "./ui/Mark";

/* Vague link clusters. No address, no contact, no entity detail. */
const groups = [
  { heading: "Surface", links: ["Overview", "Approach", "Index"] },
  { heading: "Motion", links: ["Signal", "Drift", "Echo"] },
  { heading: "Beyond", links: ["Horizon", "Threshold", "Elsewhere"] },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <Mark />
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                Vela
              </span>
            </a>
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
              Designed for what comes next.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.heading}>
              <div className="text-sm font-medium tracking-tight text-ink">
                {group.heading}
              </div>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm tracking-tight text-muted transition-colors hover:text-ink"
                    >
                      {link}
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
            Everywhere, and nowhere in particular.
          </p>
        </div>
      </Container>
    </footer>
  );
}
