import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Mark } from "@/components/ui/Mark";
import { ScoreRing } from "@/components/ui/ScoreRing";
import {
  CURRENT_VERSION,
  UPDATED,
  metrics,
  signals,
  roadmap,
  overall,
  tier,
} from "@/lib/scores";

/* Hidden page: intentionally unlinked from the site and excluded from
   indexing. This is the experiment's internal scoreboard. */
export const metadata: Metadata = {
  title: "Visibility Index — Internal",
  robots: { index: false, follow: false, nocache: true },
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
    {children}
  </p>
);

export default function ScoresPage() {
  const overallTier = tier(overall);

  return (
    <div className="min-h-screen bg-[#f7f7f9]">
      {/* slim internal bar */}
      <header className="sticky top-0 z-50 border-b border-black/6 bg-white/80 backdrop-blur-xl">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <a href="/" className="flex items-center gap-2.5">
              <Mark />
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                Vela
              </span>
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium tracking-tight text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              Internal · Not indexed
            </span>
          </div>
        </Container>
      </header>

      <Container className="py-12 sm:py-16">
        {/* hero: title + overall */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col justify-center lg:col-span-2">
            <Label>LLM Visibility Index</Label>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              AI Discoverability Scoreboard
            </h1>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
              How readable this site is to AI search and LLMs. Each version
              isolates one GEO/LLM optimization so its impact can be measured —
              from an opaque baseline to a fully optimized site.
            </p>
            <p className="mt-4 text-xs tracking-tight text-faint">
              Version {CURRENT_VERSION} · Updated {UPDATED}
            </p>
          </div>

          {/* overall card */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-black/8 bg-white p-8 shadow-[0_24px_60px_-40px_rgba(10,10,30,0.4)]">
            <Label>Overall</Label>
            <ScoreRing value={overall} size={148} stroke={11} />
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-tight"
              style={{
                color: overallTier.color,
                backgroundColor: `${overallTier.color}1a`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: overallTier.color }}
              />
              {overallTier.label}
            </span>
          </div>
        </div>

        {/* three headline metrics */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {metrics.map((m) => {
            const t = tier(m.score);
            return (
              <div
                key={m.key}
                className="flex flex-col items-center rounded-3xl border border-black/8 bg-white p-8 text-center shadow-[0_24px_60px_-44px_rgba(10,10,30,0.4)]"
              >
                <ScoreRing value={m.score} />
                <h2 className="mt-6 text-base font-semibold tracking-tight text-ink">
                  {m.label}
                </h2>
                <span
                  className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium tracking-tight"
                  style={{ color: t.color, backgroundColor: `${t.color}1a` }}
                >
                  {t.label}
                </span>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {m.blurb}
                </p>
              </div>
            );
          })}
        </div>

        {/* breakdown + roadmap */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* signal breakdown */}
          <div className="rounded-3xl border border-black/8 bg-white p-8 lg:col-span-2">
            <Label>Signal breakdown</Label>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              Where the current version earns — and loses — machine readability.
            </p>
            <ul className="mt-7 space-y-5">
              {signals.map((s) => {
                const t = tier(s.score);
                return (
                  <li key={s.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[13px] leading-snug tracking-tight text-ink">
                        {s.label}
                      </span>
                      <span className="text-[13px] font-semibold tabular-nums text-muted">
                        {s.score}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-black/6">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.max(s.score, 2)}%`,
                          backgroundColor: t.color,
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* roadmap projection */}
          <div className="rounded-3xl border border-black/8 bg-white p-8 lg:col-span-3">
            <Label>Projected roadmap</Label>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              Expected scores as one optimization is added per version.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-115 border-collapse text-left">
                <thead>
                  <tr className="text-[10px] uppercase tracking-[0.14em] text-faint">
                    <th className="pb-3 pr-3 font-semibold">Ver</th>
                    <th className="pb-3 pr-3 font-semibold">Change</th>
                    <th className="pb-3 pl-2 text-right font-semibold">Crawl</th>
                    <th className="pb-3 pl-2 text-right font-semibold">Vis</th>
                    <th className="pb-3 pl-2 text-right font-semibold">GEO</th>
                  </tr>
                </thead>
                <tbody>
                  {roadmap.map((row) => {
                    const isCurrent = row.v === CURRENT_VERSION;
                    return (
                      <tr
                        key={row.v}
                        className={`border-t border-black/6 ${
                          isCurrent ? "bg-rose-50" : ""
                        }`}
                      >
                        <td className="py-2.5 pr-3">
                          <span
                            className={`text-[13px] font-semibold tracking-tight ${
                              isCurrent ? "text-rose-600" : "text-ink"
                            }`}
                          >
                            {row.v}
                          </span>
                        </td>
                        <td className="py-2.5 pr-3 text-[13px] tracking-tight text-muted">
                          {row.change}
                        </td>
                        <td className="py-2.5 pl-2 text-right text-[13px] tabular-nums text-ink">
                          {row.crawl}
                        </td>
                        <td className="py-2.5 pl-2 text-right text-[13px] tabular-nums text-ink">
                          {row.vis}
                        </td>
                        <td className="py-2.5 pl-2 text-right text-[13px] tabular-nums text-ink">
                          {row.geo}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* legend / note */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl border border-dashed border-black/15 bg-white/60 px-7 py-5 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-tight text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" /> Weak
              (0–33)
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />{" "}
              Developing (34–66)
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Strong
              (67–100)
            </span>
          </div>
          <p className="text-xs tracking-tight text-faint">
            This route is unlinked and <code>noindex</code> — internal use only.
          </p>
        </div>
      </Container>
    </div>
  );
}
