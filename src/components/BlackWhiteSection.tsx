"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function BlackWhiteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whiteSlideRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Create a local Lenis instance scoped to this section
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

      // scrolled distance into section (0 = section top hits viewport top)
      const scrolled = -rect.top;
      // total scrollable distance = sectionHeight - vh
      const total = sectionHeight - vh;
      // clamp progress 0 → 1
      const progress = Math.max(0, Math.min(1, scrolled / total));

      // white slide starts fully offscreen right (translateX = vw)
      // and moves to translateX = 0 as progress goes 0 → 1
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
    /* Outer: tall scroll space (4× viewport) */
    <div ref={sectionRef} style={{ height: "400vh", position: "relative" }}>
      {/* Sticky inner: sticks to top, clips overflow */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Black slide */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: '"Editorial New", "Georgia", serif',
              fontSize: "clamp(120px, 26vw, 390px)",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            Black
          </span>
        </div>

        {/* White slide — slides in from right as scroll progresses */}
        <div
          ref={whiteSlideRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "translateX(100vw)",
            willChange: "transform",
          }}
        >
          <span
            style={{
              fontFamily: '"Altform", "Helvetica Neue", Arial, sans-serif',
              fontSize: "clamp(120px, 30vw, 454px)",
              fontWeight: 400,
              color: "#000",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            White
          </span>
        </div>
      </div>
    </div>
  );
}
