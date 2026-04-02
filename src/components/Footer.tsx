"use client";

import { useEffect, useState } from "react";

function useSFTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const sfTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setTime(sfTime);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function Footer() {
  const time = useSFTime();

  return (
    <footer className="w-full flex justify-between items-center px-6 mt-4 relative z-[80] pb-12">
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
          fontSize: "9px",
          lineHeight: "1.538",
          letterSpacing: "-0.015em",
          color: "var(--muted-foreground)",
        }}
      >
        © 2025 Nate Gedion.
      </div>
      <div className="flex gap-4 items-center">
        <div
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
            fontSize: "9px",
            lineHeight: "1.538",
            letterSpacing: "-0.015em",
            color: "var(--muted-foreground)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          San Francisco, CA. {time}
        </div>
      </div>
    </footer>
  );
}
