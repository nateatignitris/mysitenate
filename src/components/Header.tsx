"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon, MenuIcon, XCloseIcon } from "./icons";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/essays", label: "Essays" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = theme === "dark" ? "#ebebeb" : "#111111";
  const mutedColor = theme === "dark" ? "#888888" : "#888888";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor:
              theme === "dark" ? "rgba(10,10,10,0.85)" : "rgba(250,250,250,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        />
        <div className="px-6 md:px-10 h-12 flex items-center justify-between relative">
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: '"SF Pro Display", -apple-system, sans-serif',
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "-0.02em",
              color: textColor,
            }}
          >
            Nate Gedion
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname?.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: '"SF Pro Display", -apple-system, sans-serif',
                      fontSize: "13px",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      color: isActive ? textColor : mutedColor,
                      transition: "color 0.15s ease",
                    }}
                    className="hover:opacity-100"
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = textColor)
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = isActive
                        ? textColor
                        : mutedColor)
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="hover:opacity-60 transition-opacity"
            >
              {theme === "dark" ? (
                <SunIcon className="w-[11px] h-[11px] text-[#888888]" />
              ) : (
                <MoonIcon className="w-[11px] h-[11px] text-[#888888]" />
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="hover:opacity-60 transition-opacity"
            >
              {theme === "dark" ? (
                <SunIcon className="w-4 h-4 text-[#888888]" />
              ) : (
                <MoonIcon className="w-4 h-4 text-[#888888]" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ color: mutedColor }}
            >
              {mobileOpen ? (
                <XCloseIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-12"
          style={{ backgroundColor: theme === "dark" ? "#0a0a0a" : "#fafafa" }}
        >
          <nav className="flex flex-col px-6 pt-10" style={{ gap: "28px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: '"SF Pro Display", -apple-system, sans-serif',
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: textColor,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
