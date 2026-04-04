import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best Founders Are Recruiters | Nate Gedion",
};

export default function FoundersPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-[640px]">
        <h1 className="font-heading-large mb-16 text-primary-text">
          The Best Founders Are Recruiters
        </h1>
        <div className="space-y-14">
          <section>
            <p className="essay-section-num mb-5">i.</p>
            <p className="essay-body text-primary-text">
              Recruiting is belief allocation—the act of identifying exceptional
              people early and betting on them.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
