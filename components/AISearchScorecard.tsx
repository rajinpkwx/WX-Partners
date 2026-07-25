"use client";

import { useState } from "react";

/**
 * AI Search Visibility Scorecard — landing page
 * Source: Figma "WX - Partners" (node 2147:3)
 * Built as a single-file component for import/editing in Vercel v0.
 * Requires Tailwind CSS. Fonts used: Instrument Sans (body/UI), Roboto Serif italic (display numerals).
 */

const ACCENT = "#b6d997";
const BG = "#252e33";

function CTAButton({
  children,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-4 text-[15px] font-semibold transition-opacity hover:opacity-90";
  const solid = "bg-[#b6d997] text-[#252e33]";
  const outline = "border border-[#b6d997] text-[#b6d997]";
  return (
    <button className={`${base} ${variant === "solid" ? solid : outline} ${className}`}>
      {children}
    </button>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b6d997]">
      {children}
    </p>
  );
}

/* ---------------- Radar chart (scorecard) ---------------- */

const RADAR_DATA = [
  { label: "Citation share", value: 14 },
  { label: "Content structure", value: 50 },
  { label: "Third-party footprint", value: 30 },
  { label: "Entity clarity", value: 32 },
  { label: "Freshness", value: 60 },
  { label: "Competitive gaps", value: 26 },
  { label: "Answerable format", value: 48 },
];
const TARGET_SCORE = 70;

function polarPoint(centerX: number, centerY: number, radius: number, index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return [centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle)] as const;
}

function radarPath(values: number[], centerX: number, centerY: number, maxRadius: number) {
  return (
    values
      .map((v, i) => {
        const [x, y] = polarPoint(centerX, centerY, (v / 100) * maxRadius, i, values.length);
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ") + " Z"
  );
}

function RadarChart() {
  const size = 340;
  const center = size / 2;
  const maxRadius = size / 2 - 40;
  const rings = [20, 40, 60, 80, 100];

  const scorePath = radarPath(
    RADAR_DATA.map((d) => d.value),
    center,
    center,
    maxRadius
  );
  const targetPath = radarPath(
    RADAR_DATA.map(() => TARGET_SCORE),
    center,
    center,
    maxRadius
  );

  return (
    <div className="flex flex-col items-center">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[420px]">
        {rings.map((ring) => {
          const points = RADAR_DATA.map((_, i) => polarPoint(center, center, (ring / 100) * maxRadius, i, RADAR_DATA.length));
          return (
            <polygon
              key={ring}
              points={points.map((p) => p.join(",")).join(" ")}
              fill="none"
              stroke="#4a5a5e"
              strokeWidth={0.5}
            />
          );
        })}
        {RADAR_DATA.map((_, i) => {
          const [x, y] = polarPoint(center, center, maxRadius, i, RADAR_DATA.length);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#4a5a5e" strokeWidth={0.5} />;
        })}
        <path d={targetPath} fill="none" stroke="#7d9c9e" strokeDasharray="4 4" strokeWidth={1.5} />
        <path d={scorePath} fill="#b6d997" fillOpacity={0.25} stroke="#b6d997" strokeWidth={2} />
      </svg>
      <p className="mt-4 text-center text-xs text-[#9fb0b3]">
        Green = Austbrokers SPT · Dashed = AI-visibility target ({TARGET_SCORE})
      </p>
    </div>
  );
}

/* ---------------- Data ---------------- */

const SCORE_CATEGORIES = [
  { label: "Citation share", desc: "How often AI actually names you.", value: 14 },
  { label: "Content structure", desc: "Is your site built so AI can read it.", value: 50 },
  { label: "Answerable format", desc: "Do your pages answer the question directly.", value: 48 },
  { label: "Competitive gaps", desc: "Questions competitors win where you're absent.", value: 26 },
  { label: "Freshness", desc: "Is your content current.", value: 60 },
  { label: "Entity clarity", desc: "Does AI understand who you are.", value: 32 },
  { label: "Third-party footprint", desc: "Do other trusted sites mention you.", value: 30 },
];

const LEADERBOARD = [
  {
    rank: 1,
    name: "Bizcover",
    you: false,
    stat: "2 citations · 1 query",
    note: "Australia's #1 online SME insurance brand. Wins the core commercial-broker answer.",
  },
  {
    rank: 2,
    name: "Honan Insurance",
    you: false,
    stat: "2 citations · 2 queries",
    note: "Mid-market corporate broker. Surfaces on Sydney and SMB-commercial queries.",
  },
  {
    rank: 3,
    name: "Austbrokers SPT",
    you: true,
    stat: "1 citation · 1 query",
    note: "Cited only on the hyperlocal Miranda query — invisible on every generic prompt.",
  },
  {
    rank: 4,
    name: "Coverforce / CIG / Morgan / Trade Risk",
    you: false,
    stat: "Market-visible",
    note: "Named across Google results; not surfaced in this AI probe sample.",
  },
];

const PROMPT_RESULTS = [
  {
    prompt: "“Best commercial insurance broker for SMBs in Australia?”",
    result: "(not cited)",
  },
  {
    prompt: "“Best business insurance brokers in Sydney”",
    result: "(not cited)",
  },
  {
    prompt: "“Insurance brokers in the Sutherland Shire / Miranda, NSW”",
    result: "(cited)",
  },
];

const PLAYS = [
  {
    number: "01",
    title: "Make the answers machine-readable",
    desc: "Add FAQ / Service / Article schema and a direct answer block to the pages you already have. You're not writing new content — you're making existing content quotable.",
  },
  {
    number: "02",
    title: "Consolidate and clarify the entity",
    desc: "Retire the legacy duplicate site, complete the Organization schema, and standardise the brand name so engines resolve one confident entity.",
  },
  {
    number: "03",
    title: "Earn the third-party mentions AI reads",
    desc: "Get SPT into the sources engines cite for this category — directories, review profiles, local press, and PR off the South Sydney sponsorship.",
  },
];

const FOOTER_ADDRESSES = [
  { title: "Panama", body: "Calle 50, F&F Tower, 37th Floor, office D, Republic of Panama" },
  { title: "The Netherlands", body: "De Vriesstraat 34, Oud-Beijerland, the Netherlands" },
  { title: "Dubai", body: "35V6+54 - Al Sufouh - Dubai Internet City United Arab Emirates" },
  { title: "Fourth address", body: "Calle 50, F&F Tower, 37th Floor, office D, Republic of Panama" },
];

/* ---------------- Page ---------------- */

export default function AISearchScorecard() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#252e33] text-white antialiased" style={{ fontFamily: "'Instrument Sans', ui-sans-serif, system-ui" }}>
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#252e33]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-16">
          <span className="text-lg font-semibold tracking-tight">WX Partners</span>
          <nav className="hidden md:block">
            <CTAButton>Unlock the 90-day plan</CTAButton>
          </nav>
          <button
            className="md:hidden rounded-lg border border-white/20 px-3 py-2 text-sm"
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
        {mobileNavOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <CTAButton className="w-full">Unlock the 90-day plan</CTAButton>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 10%, #3d6b6e 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, #b6d997 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:px-16 md:py-28">
          <div>
            <SectionEyebrow>AI Search Visibility Scorecard</SectionEyebrow>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Austbrokers SPT is losing AI-search citations to BizCover.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c7d0d2] md:text-lg">
              When buyers ask ChatGPT and Claude for a commercial insurance broker, BizCover is in
              the answer. You aren&apos;t.
            </p>
            <div className="mt-8">
              <CTAButton>See your AI search score card</CTAButton>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-[#7d9c9e]/50 bg-white/5 p-8 md:p-10">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-6xl italic text-[#b6d997] md:text-7xl">37</span>
                <span className="font-serif text-2xl italic text-[#b6d997] md:text-3xl">/100</span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-widest text-[#b6d997]">Trailing</p>
              <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-[15px] leading-relaxed text-white/90">
                <p>1 / 10 AI answers that cited you</p>
                <p>4&times; competitors&apos; citations vs yours</p>
                <p>0/138 pages cited by AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scorecard breakdown */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-16 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <SectionEyebrow>Where SPT wins, where it lags</SectionEyebrow>
            <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
              The citation gap is structural and diagnosable — not luck.
            </h2>
            <p className="mt-4 max-w-md text-[#c7d0d2]">
              Here&apos;s how you score on each (0–100) vs a target of 70.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {SCORE_CATEGORIES.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{c.label}</p>
                    <p className="text-sm text-[#b6d997]">{c.value}</p>
                  </div>
                  <p className="mt-1 text-sm text-[#9fb0b3]">{c.desc}</p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-[#b6d997]" style={{ width: `${c.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-white/5 p-8">
            <RadarChart />
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-16 md:py-28">
        <SectionEyebrow>See exactly who&apos;s beating you</SectionEyebrow>
        <h2 className="max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">
          Citation leaderboard across your category prompts.
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {LEADERBOARD.map((row) => (
            <div
              key={row.rank}
              className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-8"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <span className="font-serif text-2xl italic text-[#b6d997]">{row.rank}</span>
                <span
                  className={`flex h-[73px] w-[73px] shrink-0 items-center justify-center rounded-full ${
                    row.you ? "bg-[#b6d997]/20 border border-[#b6d997]" : "bg-white/10"
                  }`}
                >
                  <span className="text-lg font-semibold">{row.name.charAt(0)}</span>
                </span>
                <div>
                  <p className="text-lg font-medium">
                    {row.name}
                    {row.you && <span className="ml-2 text-sm italic text-[#b6d997]">(you)</span>}
                  </p>
                  <p className="text-[#b6d997]">{row.stat}</p>
                </div>
              </div>
              <p className="italic text-[#d9d9d9] md:col-span-1">{row.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live prompt results */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-16 md:py-28">
        <SectionEyebrow>The result</SectionEyebrow>
        <h2 className="text-2xl font-semibold leading-snug md:text-3xl">We ran the buyer prompts live.</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROMPT_RESULTS.map((p) => (
            <div key={p.prompt} className="rounded-xl bg-white/5 p-6">
              <p className="text-[15px] leading-relaxed">{p.prompt}</p>
              <p className="mt-4 text-sm font-medium text-[#9fb0b3]">{p.result}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-xl text-lg font-medium">
          1/10 AI answers cited you — and only when buyers named the suburb.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <SectionEyebrow>The diagnosis</SectionEyebrow>
            <h3 className="text-2xl font-semibold leading-snug md:text-3xl">
              Why SPT is invisible — and why that&apos;s fixable.
            </h3>
          </div>
          <div>
            <p className="text-[#c7d0d2] leading-relaxed">
              You have the content. You don&apos;t have the citations. SPT runs a full 138-page
              site — service pages, an insurance glossary, 40+ posts kept current into 2026 — and
              ranks for 319 keywords in Google. Yet across ten live AI probes on the questions your
              buyers ask, SPT was named once, and only when the prompt already said Miranda.
            </p>
            <p className="mt-6 font-medium">Your full diagnosis + 90-day plan is ready.</p>
            <div className="mt-6">
              <CTAButton>Unlock the 90-day plan</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Plays */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(60% 60% at 70% 30%, #3d6b6e 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-16 md:py-28">
          <SectionEyebrow>The plays to win it back</SectionEyebrow>
          <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
            Three moves, prioritized by impact.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLAYS.map((play) => (
              <div key={play.number} className="rounded-2xl border border-white/10 bg-[#2c383e] p-8">
                <span className="font-serif text-3xl italic text-[#b6d997]">{play.number}</span>
                <h3 className="mt-6 text-xl font-semibold leading-snug">{play.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#c7d0d2]">{play.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(50% 50% at 30% 50%, #b6d997 0%, transparent 55%), radial-gradient(50% 50% at 80% 50%, #3d6b6e 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-16 md:py-28">
          <h2 className="max-w-2xl text-2xl font-semibold leading-snug md:text-4xl">
            Your scorecard shows the gaps.{" "}
            <span className="italic text-[#b6d997]">Let&apos;s build the plan.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[#c7d0d2]">
            A 30-minute walkthrough of the highest-impact moves for Austbrokers SPT.
          </p>
          <div className="mt-8">
            <CTAButton>Book a walkthrough &rarr;</CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#1d262a]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {FOOTER_ADDRESSES.map((a) => (
              <div key={a.title}>
                <p className="font-medium">{a.title}</p>
                <p className="mt-2 text-sm text-[#9fb0b3]">{a.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-[#9fb0b3]">
            Terms of Service - Privacy Policy | 2026 &copy; All Right Reserved WX Consulting
          </div>
        </div>
      </footer>
    </div>
  );
}
