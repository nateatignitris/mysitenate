import { XTwitterIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-[640px]">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p
            style={{
              fontFamily: '"SF Pro Display", -apple-system, sans-serif',
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "1.75",
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
            }}
          >
            [Where you&apos;re from / your origin story — one sentence that sets
            the scene.]
          </p>
          <p
            style={{
              fontFamily: '"SF Pro Display", -apple-system, sans-serif',
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "1.75",
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
            }}
          >
            [What you&apos;re building and why.]
          </p>
          <p
            style={{
              fontFamily: '"SF Pro Display", -apple-system, sans-serif',
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "1.75",
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
            }}
          >
            [Your background — previous roles, companies, experiences that
            shaped you.]
          </p>
          <p
            style={{
              fontFamily: '"SF Pro Display", -apple-system, sans-serif',
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "1.75",
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
            }}
          >
            [Who should reach out and why.]
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              paddingTop: "12px",
            }}
          >
            <a
              href="mailto:your@email.com"
              style={{
                fontFamily: '"SF Pro Display", -apple-system, sans-serif',
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--muted-foreground)",
                transition: "color 0.15s ease",
              }}
              className="hover:text-[var(--foreground)]"
            >
              your@email.com
            </a>
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--muted-foreground)",
                transition: "color 0.15s ease",
              }}
              className="hover:text-[var(--foreground)]"
            >
              <XTwitterIcon className="w-[13px] h-[13px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
