import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Essays | Nate Gedion",
};

const essays = [
  {
    slug: "the-best-founders-are-recruiters",
    title: "The Best Founders Are Recruiters",
    description:
      "Recruiting is belief allocation — the act of identifying exceptional people early and betting on them.",
  },
  {
    slug: "mistakes",
    title: "The Mistakes That Shaped Me",
    description:
      "On chasing clout, losing friends, and learning what actually matters.",
  },
  {
    slug: "chinatown",
    title: "Skip the $22 Salad. Follow Me to Chinatown.",
    description: "A story about food, family, and why Chinatown is home.",
  },
  {
    slug: "american-dream",
    title: "American Dream",
    description:
      "Bunk beds, washing dishes at eight, and the road from Chinatown to xAI.",
  },
];

export default function EssaysPage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-[640px]">
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {essays.map((essay, i) => (
            <Link
              key={essay.slug}
              href={`/essays/${essay.slug}`}
              style={{
                display: "block",
                padding: "20px 0",
                borderBottom: i < essays.length - 1 ? "1px solid var(--border)" : "none",
                textDecoration: "none",
              }}
              className="group"
            >
              <p
                style={{
                  fontFamily: '"SF Pro Display", -apple-system, sans-serif',
                  fontSize: "15px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  color: "var(--foreground)",
                  lineHeight: "1.4",
                  marginBottom: "5px",
                  transition: "opacity 0.15s ease",
                }}
                className="group-hover:opacity-60"
              >
                {essay.title}
              </p>
              <p
                style={{
                  fontFamily: '"SF Pro Display", -apple-system, sans-serif',
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "-0.005em",
                  color: "var(--muted-foreground)",
                  lineHeight: "1.5",
                }}
              >
                {essay.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
