import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "American Dream | Rich Zou",
};

const sections = [
  {
    num: "i.",
    paragraphs: [
      "My mom and I shared a bunk bed until I was seventeen.",
      "Top and bottom, tiny room, Henry Street. She worked so much I'd sometimes go days only seeing the shape of her sleeping above me when I came home late from school. Or I'd wake up at 2am and she'd just be getting back, moving quietly so she wouldn't wake me with lingering smells from the restaurant.",
      "That's the thing I remember most. The smell of cooking oil in her hair. Everyday. All the time.",
    ],
  },
  {
    num: "ii.",
    paragraphs: [
      "I was maybe eight or nine when I got scared watching a movie alone in the apartment. The light shifted, the room got too quiet, and something in me just broke. I ran out the door, down the street, didn't stop until I got to her restaurant.",
      "I didn't tell her I was scared. I just sat in the corner by the kitchen and watched her work. The cooks yelling in Fuzhounese, the exhaust fan humming, my mom moving between tables. I stayed there until closing.",
      "We walked home together that night. She held my hand and didn't ask any questions.",
    ],
  },
  {
    num: "iii.",
    paragraphs: [
      "She came here alone. No English. No connections. Just a sister in New York and the belief that something better was possible.",
      "She built everything from scratch — the restaurant, the apartment, me. She never complained. Never asked for anything. Just worked.",
      "I watched her work my whole childhood and didn't understand it then. I understand it now.",
    ],
  },
  {
    num: "iv.",
    paragraphs: [
      "The American Dream, as sold to us, is: work hard, follow the rules, and you'll make it.",
      "But what I saw was different. My mom worked as hard as anyone I've ever met. She followed every rule. And she still struggled. Still had to fight for every inch.",
      "The version I inherited is something else. It's not about following rules. It's about finding the game where your particular obsessions and background give you an edge — and playing that game as hard as you can.",
    ],
  },
  {
    num: "v.",
    paragraphs: [
      "I dropped out of Northeastern to move to San Francisco. People thought I was insane. First in my family to go to college, and I was throwing it away.",
      "But I had already seen what I was chasing. I'd been to the hackathons. I'd met the founders. I'd felt the electricity of people building things that didn't exist yet.",
      "School felt like a waiting room. SF felt like the thing itself.",
    ],
  },
  {
    num: "vi.",
    paragraphs: [
      "I couch-surfed for months. Sent hundreds of cold emails. Got ignored, rejected, ghosted. Kept going.",
      "Eventually I got in the door. Then another door. Then I was the one opening doors for other people.",
      "That's what the American Dream means to me now. Not security. Not status. Just: keep finding the next door.",
    ],
  },
  {
    num: "vii.",
    paragraphs: [
      "My mom still works. She doesn't have to anymore, but she does — I think because she doesn't know how not to.",
      "I think about her every time I feel like stopping. Every time something feels too hard or too uncertain.",
      "She crossed an ocean alone. I can send one more email.",
    ],
  },
];

export default function AmericanDreamPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-10">
      <div className="max-w-[800px]">
        <h1 className="font-heading-large mb-12 text-primary-text">
          American Dream
        </h1>
        <div className="space-y-12">
          {sections.map((section, i) => (
            <section key={i}>
              <p className="font-timeline-date italic mb-4">{section.num}</p>
              {section.paragraphs.map((para, j) => (
                <p
                  key={j}
                  className={`font-timeline-entry text-primary-text leading-relaxed${j > 0 ? " mt-4" : ""}`}
                >
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
