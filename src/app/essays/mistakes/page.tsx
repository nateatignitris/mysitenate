import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mistakes That Shaped Me | Rich Zou",
};

export default function MistakesPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-10">
      <div className="max-w-[800px]">
        <h1 className="font-heading-large mb-12 text-primary-text">
          The Mistakes That Shaped Me
        </h1>
        <div className="space-y-12">
          <section>
            <p className="font-timeline-date italic mb-4">i.</p>
            <p className="font-timeline-entry text-primary-text leading-relaxed">
              On chasing clout, losing friends, and learning what actually matters.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
