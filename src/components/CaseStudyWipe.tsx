"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface Metric {
  label: string;
  value: string;
  sub?: string;
}

export interface CaseStudyData {
  number: string;
  category: string;
  headline: string;
  subheadline: string;
  description: string;
  metrics: Metric[];
  quote: string;
  attribution: string;
}

export function CaseStudyWipe({ study }: { study: CaseStudyData }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whiteSlideRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function update() {
      const section = sectionRef.current;
      const whiteSlide = whiteSlideRef.current;
      if (!section || !whiteSlide) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      const scrolled = -rect.top;
      const total = sectionHeight - vh;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const tx = (1 - progress) * vw;
      whiteSlide.style.transform = `translateX(${tx}px)`;
    }

    function raf(time: number) {
      lenis.raf(time);
      update();
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ height: "400vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Dark slide */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#0a0a0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 clamp(24px, 8vw, 120px)",
          }}
        >
          <div style={{ maxWidth: "800px", width: "100%" }}>
            <p
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                fontSize: "clamp(11px, 1vw, 13px)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#444",
                textTransform: "uppercase",
                marginBottom: "clamp(20px, 3vw, 40px)",
              }}
            >
              {study.number} — {study.category}
            </p>

            <h2
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                fontSize: "clamp(52px, 10vw, 140px)",
                fontWeight: 600,
                color: "#ededed",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                margin: 0,
                marginBottom: "clamp(12px, 1.5vw, 20px)",
              }}
            >
              {study.headline}
            </h2>

            <p
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                fontSize: "clamp(14px, 1.5vw, 18px)",
                color: "#444",
                letterSpacing: "-0.01em",
                marginBottom: "clamp(24px, 4vw, 48px)",
              }}
            >
              {study.subheadline}
            </p>

            <p
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                fontSize: "clamp(15px, 1.4vw, 18px)",
                color: "#666",
                lineHeight: 1.6,
                maxWidth: "560px",
              }}
            >
              {study.description}
            </p>
          </div>
        </div>

        {/* Light slide — wipes in from right */}
        <div
          ref={whiteSlideRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#fafafa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 clamp(24px, 8vw, 120px)",
            transform: "translateX(100vw)",
            willChange: "transform",
          }}
        >
          <div style={{ maxWidth: "800px", width: "100%" }}>
            <p
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                fontSize: "clamp(11px, 1vw, 13px)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#aaa",
                textTransform: "uppercase",
                marginBottom: "clamp(24px, 4vw, 48px)",
              }}
            >
              {study.number} — {study.category}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "clamp(20px, 3vw, 40px)",
                marginBottom: "clamp(32px, 5vw, 56px)",
              }}
            >
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                      fontSize: "clamp(10px, 0.9vw, 11px)",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      color: "#aaa",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {m.label}
                  </p>
                  <p
                    style={{
                      fontFamily:
                        '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                      fontSize: "clamp(28px, 4.5vw, 60px)",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      marginBottom: "4px",
                    }}
                  >
                    {m.value}
                  </p>
                  {m.sub && (
                    <p
                      style={{
                        fontFamily:
                          '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                        fontSize: "clamp(11px, 1vw, 13px)",
                        color: "#aaa",
                      }}
                    >
                      {m.sub}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid #e5e5e5",
                paddingTop: "clamp(20px, 2.5vw, 32px)",
              }}
            >
              <p
                style={{
                  fontFamily:
                    '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                  fontSize: "clamp(14px, 1.3vw, 17px)",
                  color: "#333",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  marginBottom: "12px",
                }}
              >
                &ldquo;{study.quote}&rdquo;
              </p>
              <p
                style={{
                  fontFamily:
                    '"SF Pro Display", -apple-system, "system-ui", "Segoe UI", sans-serif',
                  fontSize: "clamp(10px, 0.9vw, 11px)",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "#aaa",
                  textTransform: "uppercase",
                }}
              >
                — {study.attribution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
