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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(10,10,10,0.8)"
                : "rgba(250,250,250,0.8)",
            backdropFilter: "blur(2px)",
          }}
        />
        <div className="px-6 md:px-10 h-14 md:h-16 flex items-center justify-between relative">
          {/* Logo */}
          <div
            style={{
              fontFamily: '"SF Pro Display", -apple-system, sans-serif',
              fontWeight: 600,
              fontSize: "clamp(18px, 2vw, 20px)",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
              color: theme === "dark" ? "#ededed" : "#3c3c3c",
            }}
          >
            <Link href="/">Nate Gedion</Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <nav
              style={{
                fontFamily: '"SF Pro Display", -apple-system, sans-serif',
                fontWeight: 600,
                fontSize: "13px",
                lineHeight: "1.3333",
                letterSpacing: "-0.015em",
                color: theme === "dark" ? "#a3a3a3" : "#3c3c3c",
              }}
              className="flex items-center gap-2"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname?.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center px-1"
                  >
                    <span
                      className={`inline-block w-[1ch] text-right transition-opacity duration-150 group-hover:opacity-100 ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      (
                    </span>
                    <span>{link.label}</span>
                    <span
                      className={`inline-block w-[1ch] text-left transition-opacity duration-150 group-hover:opacity-100 ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      )
                    </span>
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="inline-flex items-center px-1 py-0 hover:opacity-70 transition-opacity"
            >
              {theme === "dark" ? (
                <SunIcon className="w-[11px] h-[11px] text-[#a3a3a3]" />
              ) : (
                <MoonIcon className="w-[11px] h-[11px] text-[#3c3c3c]" />
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-1 hover:opacity-70 transition-opacity"
            >
              {theme === "dark" ? (
                <SunIcon className="w-4 h-4 text-[#a3a3a3]" />
              ) : (
                <MoonIcon className="w-4 h-4 text-[#3c3c3c]" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-1"
              style={{ color: theme === "dark" ? "#a3a3a3" : "#3c3c3c" }}
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
          className="fixed inset-0 z-40 flex flex-col pt-14"
          style={{
            backgroundColor: theme === "dark" ? "#0a0a0a" : "#fafafa",
          }}
        >
          <nav
            className="flex flex-col gap-4 px-6 pt-8"
            style={{
              fontFamily: '"SF Pro Display", -apple-system, sans-serif',
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "1.3333",
              letterSpacing: "-0.015em",
              color: theme === "dark" ? "#a3a3a3" : "#3c3c3c",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
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
