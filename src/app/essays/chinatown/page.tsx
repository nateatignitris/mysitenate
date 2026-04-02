import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skip the $22 Salad. Follow Me to Chinatown. | Rich Zou",
};

export default function ChinatownPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-10">
      <div className="max-w-[800px]">
        <h1 className="font-heading-large mb-12 text-primary-text">
          Skip the $22 Salad. Follow Me to Chinatown.
        </h1>
        <div className="space-y-12">
          <section>
            <p className="font-timeline-date italic mb-4">i.</p>
            <p className="font-timeline-entry text-primary-text leading-relaxed">
              A story about food, family, and why Chinatown is home.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
