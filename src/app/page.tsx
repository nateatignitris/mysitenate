import { XTwitterIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <div className="pt-32 md:pt-40 pb-16 px-6 md:px-10">
      <div className="max-w-[800px]">
        <div className="space-y-6">
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            [Where you&apos;re from / your origin story — one sentence that sets
            the scene.]
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            [What you&apos;re building and why — the core mission or obsession
            that drives you.]
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            [Your background — previous roles, companies, or experiences that
            shaped you.]
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed">
            [What you&apos;re looking for — who should reach out and why.]
          </p>
          <p className="font-timeline-entry text-primary-text leading-relaxed pt-8 md:pt-12 flex gap-4 items-center">
            <a
              href="mailto:your@email.com"
              className="hover:opacity-70 transition-opacity"
            >
              your@email.com
            </a>
            <a
              href="https://x.com/yourhandle"
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
