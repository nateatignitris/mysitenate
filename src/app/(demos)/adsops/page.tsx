import { CaseStudyWipe, type CaseStudyData } from "@/components/CaseStudyWipe";

const consumerCases: CaseStudyData[] = [
  {
    number: "01",
    category: "DTC Beauty",
    headline: "5.8x ROAS",
    subheadline: "from 1.4x · 90 days",
    description:
      "Rebuilt creative around UGC and collapsed six loose audiences into three intent-based segments. CPA dropped 72% as spend scaled 2.75x in 90 days.",
    metrics: [
      { label: "ROAS", value: "5.8x", sub: "was 1.4x" },
      { label: "CPA", value: "$18", sub: "was $64 · ↓72%" },
      { label: "Monthly Spend", value: "$22K", sub: "scaled from $8K" },
      { label: "Revenue, 90 Days", value: "$127K", sub: "attributed" },
    ],
    quote:
      "we'd burned through two agencies before this. nothing came close to what they built in the first 45 days — the creative testing alone changed how we think about paid.",
    attribution: "Founder, DTC Apparel Brand",
  },
  {
    number: "02",
    category: "Consumer Wellness",
    headline: "70% CPA Drop",
    subheadline: "1.9x → 4.3x ROAS · 60 days",
    description:
      "Introduced a 15-variant-per-week UGC testing system and rebuilt the Shopping feed with clean attribution. CPA dropped 70% — then spend scaled from $15K to $40K/mo.",
    metrics: [
      { label: "ROAS", value: "4.3x", sub: "was 1.9x" },
      { label: "Monthly Spend", value: "$40K", sub: "scaled from $15K" },
      { label: "Revenue, 60 Days", value: "$172K", sub: "attributed" },
      { label: "CPA Reduction", value: "70%", sub: "week 1 → week 8" },
    ],
    quote:
      "the creative testing framework they built is something we still use a year later. they didn't just run ads — they taught us a system.",
    attribution: "CMO, Health & Supplement Brand",
  },
  {
    number: "03",
    category: "Consumer App",
    headline: "$1.40 CPI",
    subheadline: "from $6.20 · ↓77% · 45 days",
    description:
      "Built the full paid stack from scratch — offer hierarchy, TikTok-native creative, and audience layering. Hit lowest-ever CPI in week 3, doubled budget in week 6 with efficiency holding.",
    metrics: [
      { label: "ROAS", value: "6.2x", sub: "was 2.1x" },
      { label: "Cost Per Install", value: "$1.40", sub: "was $6.20 · ↓77%" },
      { label: "Monthly Spend", value: "$18K", sub: "scaled from $5K" },
      { label: "Revenue, 45 Days", value: "$111K", sub: "attributed" },
    ],
    quote:
      "week 3 we hit the lowest CPI we've ever seen. week 6 we doubled spend and it held. that's when you know the system works.",
    attribution: "Head of Growth, Mobile Subscription App",
  },
];

const b2bCases: CaseStudyData[] = [
  {
    number: "04",
    category: "B2B SaaS",
    headline: "$380K Pipeline",
    subheadline: "from $0 · 75 days",
    description:
      "Built a LinkedIn + Meta funnel from zero — job-title targeting layered with firmographic signals, stage-matched creative, and HubSpot-synced nurture. $380K in qualified pipeline in 75 days.",
    metrics: [
      { label: "Pipeline Generated", value: "$380K", sub: "in 75 days" },
      { label: "Cost Per Lead", value: "$42", sub: "was $210 · ↓80%" },
      { label: "Demo Qualified Rate", value: "38%", sub: "was 11%" },
      { label: "Monthly Spend", value: "$14K", sub: "scaled from $3K" },
    ],
    quote:
      "for the first time, paid was generating pipeline we could actually close — not just form fills. the quality of lead changed everything.",
    attribution: "VP Marketing, Mid-Market SaaS",
  },
  {
    number: "05",
    category: "B2B Fintech",
    headline: "31% SQL Rate",
    subheadline: "from 8% · CPL down 64% · 8 weeks",
    description:
      "Rebuilt targeting around CFO-specific firmographic signals and rewrote every creative for that buyer's ROI lens. Same $20K budget — SQL rate went from 8% to 31%.",
    metrics: [
      { label: "SQL Rate", value: "31%", sub: "was 8% · nearly 4x lift" },
      { label: "CPL", value: "$58", sub: "$162 → $58 · ↓64%" },
      { label: "Closed Revenue", value: "$240K", sub: "attributed in 90d" },
      { label: "Monthly Spend", value: "$20K", sub: "same budget, 3x return" },
    ],
    quote:
      "same budget, completely different lead quality. the CFO-focused creative work they did changed how our entire sales team approached demos.",
    attribution: "Head of Growth, Fintech Platform",
  },
];

export default function AdsOpsPage() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      {/* Hero */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          padding: "0 clamp(24px, 8vw, 120px)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
            fontSize: "clamp(10px, 0.9vw, 11px)",
            fontWeight: 500,
            letterSpacing: "0.14em",
            color: "#555",
            textTransform: "uppercase",
            marginBottom: "clamp(20px, 3vw, 32px)",
          }}
        >
          Documented Results, 2023–2025
        </p>
        <h1
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
            fontSize: "clamp(40px, 8vw, 110px)",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: "0 0 clamp(20px, 3vw, 32px)",
            maxWidth: "900px",
          }}
        >
          paid acquisition that compounds.
        </h1>
        <p
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
            fontSize: "clamp(14px, 1.4vw, 18px)",
            color: "#555",
            letterSpacing: "-0.01em",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          scroll to see each case study ↓
        </p>
      </div>

      {/* Section label */}
      <div
        style={{
          padding: "clamp(48px, 8vw, 120px) clamp(24px, 8vw, 120px) 0",
          backgroundColor: "#000",
        }}
      >
        <p
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
            fontSize: "clamp(10px, 0.9vw, 11px)",
            fontWeight: 500,
            letterSpacing: "0.14em",
            color: "#555",
            textTransform: "uppercase",
            marginBottom: "clamp(12px, 1.5vw, 16px)",
          }}
        >
          Case Studies
        </p>
        <h2
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
            fontSize: "clamp(28px, 5vw, 64px)",
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            margin: 0,
          }}
        >
          documented results.
        </h2>
      </div>

      {/* Consumer cases */}
      {consumerCases.map((study) => (
        <CaseStudyWipe key={study.number} study={study} />
      ))}

      {/* B2B divider */}
      <div
        style={{
          padding: "clamp(48px, 8vw, 120px) clamp(24px, 8vw, 120px) 0",
          backgroundColor: "#000",
        }}
      >
        <p
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
            fontSize: "clamp(10px, 0.9vw, 11px)",
            fontWeight: 500,
            letterSpacing: "0.14em",
            color: "#555",
            textTransform: "uppercase",
          }}
        >
          B2B
        </p>
      </div>

      {/* B2B cases */}
      {b2bCases.map((study) => (
        <CaseStudyWipe key={study.number} study={study} />
      ))}

      {/* Footer CTA */}
      <div
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          textAlign: "center",
          padding: "0 clamp(24px, 8vw, 120px)",
        }}
      >
        <p
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
            fontSize: "clamp(28px, 5vw, 64px)",
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: "clamp(16px, 2vw, 24px)",
          }}
        >
          let&apos;s see what you&apos;re leaving on the table.
        </p>
        <p
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
            fontSize: "clamp(13px, 1.2vw, 16px)",
            color: "#555",
            letterSpacing: "-0.01em",
          }}
        >
          useignitris.com
        </p>
      </div>
    </div>
  );
}
