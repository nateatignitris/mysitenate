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
      "Recruiting is belief allocation—the act of identifying exceptional people early and betting on them.",
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
    <div className="pt-32 pb-16 px-6 md:px-10">
      <div className="max-w-[800px]">
        <div className="space-y-8">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/essays/${essay.slug}`}
              className="block group no-underline hover:no-underline transition-opacity hover:opacity-80"
            >
              <h2 className="font-timeline-entry text-primary-text">{essay.title}</h2>
              <p className="font-timeline-date mt-2">{essay.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
