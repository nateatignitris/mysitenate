"use client";

import { useEffect, useRef } from "react";

export function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only play once per session
    if (sessionStorage.getItem("intro-played")) {
      if (overlayRef.current) overlayRef.current.style.display = "none";
      return;
    }
    sessionStorage.setItem("intro-played", "1");

    const overlay = overlayRef.current;
    if (!overlay) return;

    const timer = setTimeout(() => {
      overlay.style.transition = "transform 1s cubic-bezier(0.3, 0, 0, 1)";
      overlay.style.transform = "translateY(-100%)";
      overlay.addEventListener(
        "transitionend",
        () => { overlay.style.display = "none"; },
        { once: true }
      );
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes letterSnap {
          0%    { opacity: 0; }
          0.1%  { opacity: 1; }
          100%  { opacity: 1; }
        }
        .intro-letter {
          display: inline-block;
          opacity: 0;
          animation: letterSnap 0.8s forwards;
        }
        .intro-letter:nth-child(1) { animation-delay: 0.1s; }
        .intro-letter:nth-child(2) { animation-delay: 0.25s; }
      `}</style>

      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          backgroundColor: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontFamily: '"SF Pro Display", -apple-system, sans-serif',
            fontSize: "clamp(100px, 20vw, 280px)",
            fontWeight: 700,
            color: "#ededed",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          <span className="intro-letter">M</span>
          <span className="intro-letter">E</span>
        </span>
      </div>
    </>
  );
}
