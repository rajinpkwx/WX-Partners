const imgBannerHero = "/banner-hero.png";
const imgBannerBg = "/banner-bg.png";
const img209482 = "/figma3/bfa8570ec0ec65e35f4357473c9bac91af22085c.png";
const img209483 = "/figma3/c30240c19e60fb08f1ab35cc6cd2cf64050c5dee.png";
const imgVector = "/figma3/dcba79cb75bb52eb21086a5548aa720932ae2f7c.svg";
const imgGroup = "/figma3/b6158ef335e9ec5a8459a3befc11349a58120a81.svg";
const imgGroup1 = "/figma3/a2dc60f7da959c67e00162ca8a0c18a988d30d32.svg";
const imgVector9 = "/figma3/550a07e6d5d13d2d021b2247dd9df9c9138976ae.svg";

const radarStats = [
  { label: "Citation share", value: 14, gap: "GAP -56", color: "#d76442" },
  { label: "Competitive gaps", value: 26, gap: "GAP -44", color: "#d76442" },
  { label: "Third-party footprint", value: 30, gap: "GAP -40", color: "#e2a44b" },
  { label: "Entity clarity", value: 32, gap: "GAP -38", color: "#e2a44b" },
  { label: "Answerable format", value: 48, gap: "GAP -22", color: "#e2a44b" },
  { label: "Content Structure", value: 50, gap: "GAP -20", color: "#88aa87" },
  { label: "Freshness", value: 60, gap: "GAP -10", color: "#88aa87" },
];

const leaderboard = [
  {
    name: "Bizcover",
    stat: "2 citations · 1 query",
    desc: "Australia's #1 online SME insurance brand. Wins the core commercial-broker answer.",
  },
  {
    name: "Honan Insurance",
    stat: "2 citations · 2 queries",
    desc: "Mid-market corporate broker. Surfaces on Sydney and SMB-commercial queries.",
  },
  {
    name: "Austbrokers SPT (you)",
    stat: "1 citation · 1 query",
    desc: "Cited only on the hyperlocal Miranda query — invisible on every generic prompt.",
    highlight: true,
  },
  {
    name: "Coverforce / CIG / Morgan / Trade Risk",
    stat: "Market-visible",
    desc: "Named across Google results; not surfaced in this AI probe sample.",
  },
];

const prompts = [
  { q: "“Best commercial insurance broker for SMBs in Australia?”", status: "Not cited" },
  { q: "“Best business insurance brokers in Sydney”", status: "Not cited" },
  { q: "“Insurance brokers in the Sutherland Shire / Miranda, NSW”", status: "Cited" },
];

const moves = [
  {
    n: "01",
    img: img209482,
    title: "Make the answers machine-readable",
    desc: "Add FAQ / Service / Article schema and a direct answer block to the pages you already have. You're not writing new content — you're making existing content quotable.",
  },
  {
    n: "02",
    img: img209483,
    title: "Consolidate and clarify the entity",
    desc: "Retire the legacy duplicate site, complete the Organization schema, and standardise the brand name so engines resolve one confident entity.",
  },
  {
    n: "03",
    img: img209483,
    title: "Earn the third-party mentions AI reads",
    desc: "Get SPT into the sources engines cite for this category — directories, review profiles, local press, and PR off the South Sydney sponsorship.",
  },
];

const offices = [
  { name: "Panama", lines: ["Calle 50, F&F Tower, 37th Floor,", "office D, Republic of Panama"] },
  { name: "The Netherlands", lines: ["De Vriesstraat 34,", "Oud-Beijerland, the Netherlands"] },
  { name: "Dubai", lines: ["35V6+54 - Al Sufouh - Dubai Internet City", "United Arab Emirates"] },
  { name: "Fourth address", lines: ["Calle 50, F&F Tower, 37th Floor,", "office D, Republic of Panama"] },
];

export default function HomeMobileContent() {
  return (
    <div className="bg-[#252e33] text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-[#1f272c] px-5 py-4">
        <div className="relative h-[20px] w-[170px] overflow-hidden">
          <div className="absolute inset-[0_81.51%_0_0]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
          <div className="absolute inset-[16.99%_0_16.94%_22.92%]">
            <div className="absolute inset-[17.96%_59.06%_18.06%_22.92%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
            </div>
            <div className="absolute inset-[16.99%_0_16.94%_42.74%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
            </div>
          </div>
        </div>
        <a
          href="#cta"
          className="whitespace-nowrap rounded-[7px] bg-[#b7d998] px-3 py-2 font-instrument text-[12px] font-semibold text-[#252e33]"
        >
          Unlock the 90-day plan
        </a>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-10 pb-12">
        <div className="absolute inset-0 -z-10">
          <img alt="" className="size-full object-cover" src={imgBannerHero} />
        </div>
        <p className="font-instrument text-[15px] text-[#d7d7d7]">AI Search Visibility Scorecard</p>
        <h1 className="mt-4 font-instrument text-[34px] leading-[1.15]">
          Austbrokers SPT is losing AI-search citations to BizCover.
        </h1>
        <p className="mt-5 font-instrument text-[16px] leading-[26px] text-[#d7d7d7]">
          When buyers ask ChatGPT and Claude for a commercial insurance broker, BizCover is in the answer. You
          aren&apos;t.
        </p>
        <a
          href="#scorecard"
          className="mt-6 block w-full rounded-[4px] border border-[#b6d997] bg-[#b6d997] px-5 py-4 text-center font-instrument text-[15px] font-semibold uppercase text-[#232c31]"
        >
          See your AI search score card
        </a>

        <div className="relative mt-10 h-[236px] w-full overflow-hidden rounded-[10px] border-[0.5px] border-[#7d9c9e]">
          <img alt="" className="absolute inset-0 size-full object-cover opacity-60" src={img209482} />
          <div className="relative flex h-full flex-col justify-center px-6">
            <p className="font-roboto-serif text-[56px] italic leading-none text-[#b6d997]">
              37<span className="text-[28px]">/100</span>
            </p>
            <p className="mt-1 font-instrument text-[16px] uppercase tracking-wide text-[#b6d997]">Trailing</p>
            <div className="mt-4 space-y-1 font-instrument text-[15px] leading-[24px]">
              <p>1 / 10 AI answers that cited you</p>
              <p>{`4× competitors' citations vs yours`}</p>
              <p>0/138 pages cited by AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where SPT wins / radar stats */}
      <section className="px-5 py-14">
        <p className="font-instrument text-[15px] uppercase text-[#d9d9d9]">Where SPT wins, where it lags</p>
        <h2 className="mt-3 font-instrument text-[30px] leading-[1.2]">
          The citation gap is structural and diagnosable{" "}
          <span className="font-roboto-serif italic text-[#b6d997]">— not luck.</span>
        </h2>
        <p className="mt-4 font-instrument text-[15px] text-[#d9d9d9]">
          Here&apos;s how you score on each (0–100) vs a target of 70
        </p>

        <div className="mt-8 space-y-6">
          {radarStats.map((s) => (
            <div key={s.label}>
              <div className="mb-2 flex items-baseline justify-between">
                <p className="font-instrument text-[15px]">{s.label}</p>
                <p className="font-instrument text-[13px] text-white/70">{s.gap}</p>
              </div>
              <div className="relative h-[8px] w-full rounded-full bg-white/10">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${s.value}%`, backgroundColor: s.color }}
                />
                <div className="absolute inset-y-[-4px] left-[70%] w-px bg-white/40" />
              </div>
              <p className="mt-1 text-right font-instrument text-[13px]" style={{ color: s.color }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-instrument text-[13px] text-[#d9d9d9]">
          Green = Austbrokers SPT · Dashed line = AI-visibility target (<span className="text-[#b6d997]">70</span>)
        </p>
      </section>

      {/* Leaderboard */}
      <section className="bg-[#1f272c]/40 px-5 py-14">
        <p className="font-instrument text-[15px] uppercase text-[#d9d9d9]">See exactly who&apos;s beating you</p>
        <h2 className="mt-3 font-roboto-serif text-[30px] leading-[1.2]">
          Citation leaderboard across your category prompts.
        </h2>

        <div className="mt-8 space-y-4">
          {leaderboard.map((row) => (
            <div
              key={row.name}
              className={`rounded-[7px] p-4 ${row.highlight ? "border border-[#b6d997]/50" : ""}`}
            >
              <div className="flex items-center justify-between">
                <p className="font-instrument text-[17px] font-medium">{row.name}</p>
              </div>
              <p className="mt-1 font-instrument text-[15px]">
                <span className="text-[#b6d997]">{row.stat.split(" ")[0]}</span> {row.stat.split(" ").slice(1).join(" ")}
              </p>
              <p className="mt-2 font-instrument text-[14px] italic text-[#d9d9d9]">{row.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The result */}
      <section className="px-5 py-14">
        <p className="font-instrument text-[15px] uppercase text-[#d9d9d9]">The result</p>
        <h2 className="mt-3 font-instrument text-[30px] leading-[1.2]">We ran the buyer prompts live</h2>
        <p className="mt-4 font-instrument text-[19px] leading-[1.4]">
          <span className="font-medium text-[#b6d997]">1/10 AI answers that cited you</span>
          <br />
          and only when buyers named the suberb
        </p>

        <div className="mt-8 space-y-6">
          {prompts.map((p) => (
            <div key={p.q} className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
              <p className="font-roboto-serif text-[19px] italic leading-[1.5] text-[#d9d9d9]">{p.q}</p>
              <span
                className={`mt-3 inline-block rounded-[7px] px-3 py-1 font-instrument text-[13px] font-semibold uppercase ${
                  p.status === "Cited" ? "bg-[#b6d997] text-[#28465a]" : "bg-white/15 text-white"
                }`}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Diagnosis */}
      <section className="bg-[#1f272c]/40 px-5 py-14">
        <p className="font-instrument text-[15px] uppercase text-[#d9d9d9]">The diagnosis</p>
        <h2 className="mt-3 font-instrument text-[30px] leading-[1.2] text-[#b6d997]">
          <span className="text-white">Why SPT is invisible</span>
          <br />
          <span className="font-roboto-serif italic">— and why that&apos;s fixable.</span>
        </h2>

        <p className="mt-6 font-instrument text-[19px]">You have the content. You don&apos;t have the citations.</p>
        <p className="mt-4 font-instrument text-[15px] leading-[26px] text-[#d9d9d9]">
          SPT runs a full <span className="italic text-[#b6d997]">138</span>-page site — service pages, an insurance
          glossary, <span className="italic text-[#b6d997]">40+</span> posts kept current into 2026 — and ranks for{" "}
          <span className="italic text-[#b6d997]">319</span> keywords in Google. Yet across ten live AI probes on
          the questions your buyers ask, SPT was named once, and only when the prompt already said Miranda.
        </p>

        <p className="mt-8 font-roboto-serif text-[19px] italic text-[#b6d997]">
          Your full diagnosis + 90-day plan is ready.
        </p>
        <a
          id="cta"
          href="#"
          className="mt-5 block w-full rounded-[4px] border border-[#b6d997] bg-[#b6d997] px-5 py-4 text-center font-instrument text-[15px] font-semibold uppercase text-[#232c31]"
        >
          Unlock the 90-day plan
        </a>
      </section>

      {/* Three moves */}
      <section className="px-5 py-14">
        <p className="font-instrument text-[15px] uppercase text-[#d9d9d9]">The plays to win it back</p>
        <h2 className="mt-3 font-instrument text-[30px] leading-[1.2]">Three moves, prioritized by impact.</h2>

        <div className="mt-8 space-y-6">
          {moves.map((m) => (
            <div
              key={m.n}
              className="relative overflow-hidden rounded-[6px] border-[0.5px] border-[#7d9c9e] p-6"
            >
              <img alt="" className="absolute inset-0 size-full object-cover opacity-40" src={m.img} />
              <div className="relative">
                <p className="font-roboto-serif text-[20px] font-light text-[#b6d997]">{m.n}</p>
                <p className="mt-2 font-instrument text-[22px] leading-[1.2] text-[#b6d997]">{m.title}</p>
                <p className="mt-3 font-instrument text-[15px] leading-[24px]">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-5 py-16">
        <div className="absolute inset-0 -z-10 opacity-30">
          <img alt="" className="size-full object-cover" src={imgBannerBg} />
        </div>
        <h2 className="font-instrument text-[30px] leading-[1.2]">
          Your scorecard shows the gaps.
          <br />
          <span className="font-roboto-serif italic text-[#b6d997]">Let&apos;s build the plan.</span>
        </h2>
        <p className="mt-4 font-instrument text-[16px] text-[#e6e6e6]">
          A 30-minute walkthrough of the highest-impact moves for Austbrokers SPT.
        </p>
        <a
          href="#"
          className="mt-6 inline-block whitespace-nowrap rounded-[7px] bg-[#b7d998] px-5 py-3 font-instrument text-[15px] font-semibold text-[#252e33]"
        >
          Book a walkthrough →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f272c]/60 px-5 py-12">
        <div className="mb-8 flex justify-center">
          <img alt="" className="h-[36px] w-[56px]" src={imgVector9} />
        </div>
        <div className="space-y-8">
          {offices.map((o) => (
            <div key={o.name} className="opacity-60">
              <p className="font-roboto-serif text-[18px] font-light">{o.name}</p>
              {o.lines.map((line) => (
                <p key={line} className="font-instrument text-[13px] leading-[20px]">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-white/20" />
        <p className="mt-6 text-center font-instrument text-[13px] leading-[20px] text-[rgba(215,215,215,0.5)]">
          <a className="underline" href="https://www.wx.agency/terms-of-service" target="_blank" rel="noreferrer">
            Terms of Service
          </a>{" "}
          -{" "}
          <a className="underline" href="https://www.wx.agency/privacy-policy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>{" "}
          | 2026 © All Right Reserved WX Consulting
        </p>
      </footer>
    </div>
  );
}
