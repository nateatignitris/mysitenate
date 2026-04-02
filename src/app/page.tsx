import { XTwitterIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <div className="pt-32 md:pt-40 pb-16 px-6 md:px-10">
      <div className="max-w-[800px]">
        <div className="space-y-6">
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            I grew up in Queens, New York — Fuzhounese American, working at my
            mother&apos;s restaurant. I&apos;m now in San Francisco and obsessed
            with Talent.
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            I believe the most exceptional people — out-of-distribution founders
            — share a pattern: trauma, neurodivergence, polymathy. Traditional
            systems miss them every time. I invest in and support these founders.
            My life goal is to find and serve the top 1% of humanity.
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            I dropped out of Northeastern, couch-surfed in SF, and sent hundreds
            of cold emails to break into venture. Previously at xAI, growth at{" "}
            <a
              href="https://www.delphi.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Delphi
            </a>
            , and investing at{" "}
            <a
              href="https://www.parablevc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Parable
            </a>
            . Susa Fellow and angel investor.
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            I host events to bring young people together. I{" "}
            <a
              href="https://x.com/richzou/articles"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              write personal essays
            </a>{" "}
            — about identity, loyalty, the immigrant experience, and what it
            means to chase the{" "}
            <a
              href="/essays/american-dream"
              className="underline hover:opacity-70 transition-opacity"
            >
              American Dream
            </a>
            .
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            If you&apos;re building something out-of-distribution, I&apos;d
            love to hear from you.
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed pt-8 md:pt-12 flex gap-4 items-center">
            <a
              href="mailto:richzou123@gmail.com"
              className="hover:opacity-70 transition-opacity"
            >
              richzou123@gmail.com
            </a>
            <a
              href="https://x.com/richzou"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <XTwitterIcon className="w-[14px] h-[14px]" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
