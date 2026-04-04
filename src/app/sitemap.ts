import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nategedion.com";
  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/about", priority: 0.8 },
    { url: "/essays", priority: 0.8 },
    { url: "/essays/american-dream", priority: 0.6 },
    { url: "/essays/the-best-founders-are-recruiters", priority: 0.6 },
    { url: "/essays/mistakes", priority: 0.6 },
    { url: "/essays/chinatown", priority: 0.6 },
  ];

  return pages.map(({ url, priority }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
