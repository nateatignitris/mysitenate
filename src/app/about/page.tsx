import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rich Zou",
};

const paragraphs = [
  "Fuzhounese American. First-gen. Raised by a single immigrant mom in Chinatown, New York. We moved around a lot but I spent most of my time in Queens.",
  "My mom ran QQ Cafe on East Broadway. I was washing dishes there when I was eight. By ten I was selling snacks and candy in middle school. By fifteen I was reselling sneakers. I always found a way to make money. That part never turned off.",
  "I was also a gaming addict. League of Legends. Minecraft. I'd skip class to play. I climbed to the top of the leaderboard and was ready to go full-time pro. But I made the decision to stop. Walked away from gaming and went to Northeastern instead. First in my family to go to college.",
  "I'm not school smart. I failed calculus. Failed statistics. Was in ESL until eleventh grade. Never took the SAT. Never cared to listen in class. But I've always been obsessed with figuring things out on my own terms.",
  "At Northeastern I studied finance. Oakland campus first, then Boston. I was on the traditional investment banking route. Hated every second of it. I was working three on-campus jobs, running multiple clubs, trying to fill the gap between what school was teaching me and what I actually wanted to learn. Then an upperclassman named Kasey who was in a YC batch introduced me to the startup ecosystem. Everything changed. He told me about San Francisco. Introduced me to other YC W25 founders. That was the first door.",
  "I visited CalHacks and TreeHacks and watched hundreds of young people build cool stuff in a weekend. Came back and organized PawHacks — Northeastern Oakland's first hackathon. That feeling never left me.",
  "I dropped out after my freshman year. Packed a bag, couch-surfed across SF for months. Sent hundreds of cold emails. Got rejected everywhere. Eventually landed at xAI through sheer persistence and ended up running growth for Delphi.",
  "Now I invest at Parable, a pre-seed fund focused on out-of-distribution founders. I'm a Susa Fellow and angel investor. I believe the most exceptional people share a pattern — trauma, neurodivergence, polymathy — and that traditional systems miss them every time.",
  "My life goal is to find and serve the top 1% of humanity.",
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
