/**
 * Canonical public origin of the marketing site.
 * Used for canonical URLs, Open Graph URLs, robots.txt and sitemap.xml.
 * Can be overridden per environment with NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://usesafe.com").replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/images/og/usesafe-og-default.png";

export const SOCIAL_PROFILES = {
  linkedin: "https://www.linkedin.com/company/usesafe/",
  instagram: "https://www.instagram.com/usesafe_safeuse",
  x: "https://x.com/Usesafe_",
} as const;

/** Builds an absolute URL on the canonical origin. "/" maps to the site root. */
export const absoluteUrl = (path = "/") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
};

/**
 * Public, indexable routes. Keep in sync with the pages under
 * src/app/(frontend)/(pages)/[locale]. Used by sitemap.xml.
 */
export const PUBLIC_ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/gs1-forum-2026", priority: 0.9, changeFrequency: "weekly" },
  { path: "/platform/frameworks/dpp-in-espr", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/frameworks/textile-passport", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/integrations/battery-passport", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/integrations/api-integrations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/stakeholders/manufacturers-brand-owners", priority: 0.7, changeFrequency: "monthly" },
  { path: "/stakeholders/ecommerce-sellers-distributors", priority: 0.7, changeFrequency: "monthly" },
  { path: "/stakeholders/marketplaces-retailers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/stakeholders/regulatory-authorities-government-agencies", priority: 0.6, changeFrequency: "monthly" },
  { path: "/stakeholders/logistics-customs-operators", priority: 0.6, changeFrequency: "monthly" },
  { path: "/stakeholders/end-consumers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog/gs1-digital-link-digital-product-passport", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog/battery-passport-2027-readiness-checklist", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog/turkey-ecommerce-regulation", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
];
