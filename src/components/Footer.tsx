"use client";

import { useEffect, useState } from "react";

function useSFTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
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
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px 32px",
        fontFamily: '"SF Pro Display", -apple-system, sans-serif',
        fontSize: "11px",
        fontWeight: 400,
        letterSpacing: "-0.005em",
        color: "var(--muted-foreground)",
      }}
    >
      <span>© 2025 Nate Gedion</span>
      {time && <span>San Francisco · {time}</span>}
    </footer>
  );
}
