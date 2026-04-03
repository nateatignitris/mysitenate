"use client";

import { useEffect, useRef } from "react";

export function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Small delay so the name is seen, then collapse upward like KODE
    const timer = setTimeout(() => {
      overlay.style.transition =
        "transform 1s cubic-bezier(0.3, 0, 0, 1)";
      overlay.style.transformOrigin = "50% 0%";
      overlay.style.transform = "scaleY(0)";

      // Remove from DOM after animation ends so it doesn't block interaction
      overlay.addEventListener(
        "transitionend",
        () => {
          overlay.style.display = "none";
        },
        { once: true }
      );
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
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
        transformOrigin: "50% 0%",
        transform: "scaleY(1)",
      }}
    >
      <span
        style={{
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          fontSize: "clamp(32px, 6vw, 80px)",
          fontWeight: 400,
          color: "#ededed",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          userSelect: "none",
          opacity: 0,
          animation: "introFadeIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
        }}
      >
        Nate Gedion
      </span>

      <style>{`
        @keyframes introFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
