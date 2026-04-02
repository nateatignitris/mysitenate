import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nate Gedion",
};

const paragraphs = [
  "[Your origin — where you grew up, what shaped you early on.]",
  "[An early experience that showed who you were — hustle, curiosity, obsession, whatever fits.]",
  "[A turning point or pivot — what changed your direction and why.]",
  "[How you got to where you are now — the path, the grind, the breaks that mattered.]",
  "[What you're working on or building today — and why it matters to you.]",
  "[What drives you. The thing you keep coming back to, no matter what.]",
];

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 pb-16 px-6 md:px-10">
      <div className="max-w-[800px]">
        <div className="space-y-6">
          {paragraphs.map((text, i) => (
            <p key={i} className="font-timeline-entry text-primary-text leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
