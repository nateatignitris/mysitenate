import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skip the $22 Salad. Follow Me to Chinatown. | Nate Gedion",
};

export default function ChinatownPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-[640px]">
        <h1 className="font-heading-large mb-16 text-primary-text">
          Skip the $22 Salad. Follow Me to Chinatown.
        </h1>
        <div className="space-y-14">
          <section>
            <p className="essay-section-num mb-5">i.</p>
            <p className="essay-body text-primary-text">
              A story about food, family, and why Chinatown is home.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
