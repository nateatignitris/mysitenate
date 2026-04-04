import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroOverlay } from "@/components/IntroOverlay";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: { default: "Nate Gedion", template: "%s | Nate Gedion" },
  description: "Founder and builder.",
  metadataBase: new URL("https://nategedion.com"),
  openGraph: {
    type: "website",
    siteName: "Nate Gedion",
    title: "Nate Gedion",
    description: "Founder and builder.",
  },
  twitter: {
    card: "summary",
    title: "Nate Gedion",
    description: "Founder and builder.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <IntroOverlay />
          <Header />
          <main className="flex-1 flex flex-col">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
