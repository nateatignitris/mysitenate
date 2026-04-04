import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mistakes That Shaped Me | Nate Gedion",
};

export default function MistakesPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-[640px]">
        <h1 className="font-heading-large mb-16 text-primary-text">
          The Mistakes That Shaped Me
        </h1>
        <div className="space-y-14">
          <section>
            <p className="essay-section-num mb-5">i.</p>
            <p className="essay-body text-primary-text">
              On chasing clout, losing friends, and learning what actually matters.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
