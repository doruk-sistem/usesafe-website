export type BlogPost = {
  slug: string;
  title: string;
  /** Short summary used on the blog list, as the article subtitle and as meta description. */
  description: string;
  category: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  readingTime: string;
  /** Card / Open Graph image under /public */
  image: string;
};

/** Blog list page size (pagination). */
export const BLOG_PAGE_SIZE = 6;

/** All blog posts, newest first. Used by the blog list, post metadata and sitemap.xml. */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "usesafe-sponsors-gs1-in-europe-forum-2026",
    title: "UseSafe sponsors the GS1 in Europe Forum 2026 in Istanbul",
    description:
      "From 12 to 15 October, the European GS1 community meets in Istanbul. Here is why we are sponsoring the Forum, what we will show and how to meet our team.",
    category: "News",
    date: "2026-10-10",
    readingTime: "4 min read",
    image: "/images/blog/gs1-in-europe-forum-2026.webp",
  },
  {
    slug: "gs1-digital-link-digital-product-passport",
    title: "One QR code for checkout, consumers and regulators: GS1 Digital Link meets the Digital Product Passport",
    description:
      "ESPR passports and the move to 2D barcodes are arriving at the same time. Here is how one GS1 Digital Link QR code can serve the till, the consumer and the regulator.",
    category: "Standards",
    date: "2026-10-09",
    readingTime: "7 min read",
    image: "/images/dpp-product.webp",
  },
  {
    slug: "battery-passport-2027-readiness-checklist",
    title: "EU Battery Passport: a readiness checklist for 18 February 2027",
    description:
      "Scope, identifiers, QR codes, data and access levels: what manufacturers, importers and suppliers need in place before the first mandatory EU Digital Product Passport.",
    category: "Regulation",
    date: "2026-10-09",
    readingTime: "6 min read",
    image: "/images/platform/battery-passport-hero.jpg",
  },
  {
    slug: "kkdik-registration-deadline-31-december-2026",
    title: "KKDİK: what the 31 December 2026 registration deadline means for suppliers to Türkiye",
    description:
      "The first of Türkiye's extended KKDİK registration deadlines falls at the end of this year. Who is affected, what must be ready, and how EU suppliers keep access to Turkish customers.",
    category: "Chemicals",
    date: "2026-09-15",
    readingTime: "6 min read",
    image: "/images/blog/kkdik-2026-deadline.webp",
  },
  {
    slug: "ppwr-applies-12-august-2026",
    title: "PPWR applies from 12 August 2026: what changes for packaging on day one",
    description:
      "The EU Packaging and Packaging Waste Regulation starts to apply next week. These are the obligations that bite immediately, and the ones that follow from 2028 onwards.",
    category: "Packaging",
    date: "2026-08-04",
    readingTime: "6 min read",
    image: "/images/blog/ppwr-12-august-2026.webp",
  },
  {
    slug: "espr-unsold-goods-destruction-ban-19-july-2026",
    title: "From 19 July 2026: the ESPR ban on destroying unsold clothing and footwear",
    description:
      "Large companies may no longer destroy unsold apparel, clothing accessories and footwear in the EU. What counts as destruction, the permitted exceptions and the evidence to keep.",
    category: "ESPR",
    date: "2026-07-14",
    readingTime: "6 min read",
    image: "/images/blog/espr-unsold-goods-ban.webp",
  },
  {
    slug: "eu-digital-product-passport-registry-explained",
    title: "The EU Digital Product Passport registry: what it will hold, and what it won't",
    description:
      "The Commission must set up the central DPP registry by 19 July 2026. A plain-language guide to what the registry stores, who registers and what stays with companies.",
    category: "Digital Product Passport",
    date: "2026-06-16",
    readingTime: "5 min read",
    image: "/images/blog/dpp-registry.webp",
  },
  {
    slug: "empowering-consumers-directive-green-claims-2026",
    title: "Green claims after 27 September 2026: preparing for the Empowering Consumers Directive",
    description:
      "From late September, vague environmental claims and self-made sustainability labels become unfair commercial practices across the EU. A checklist for brands and retailers.",
    category: "Green claims",
    date: "2026-05-19",
    readingTime: "6 min read",
    image: "/images/blog/empco-green-claims.webp",
  },
  {
    slug: "espr-working-plan-one-year-on",
    title: "ESPR working plan, one year on: which products get passports first",
    description:
      "A year after the Commission set its 2025–2030 ecodesign priorities, here is where textiles, furniture, tyres, mattresses, steel and aluminium stand, and what companies can do now.",
    category: "ESPR",
    date: "2026-04-14",
    readingTime: "6 min read",
    image: "/images/blog/espr-working-plan.webp",
  },
  {
    slug: "turkey-ecommerce-regulation",
    title: "Türkiye's New E-Commerce Product Safety Regulation: A Guide for International Manufacturers",
    description:
      "New regulations on e-commerce product safety have come into effect in Türkiye. This guide explains the necessary steps for international manufacturers to comply with these regulations.",
    category: "Regulation",
    date: "2025-03-08",
    readingTime: "8 min read",
    image: "/images/blockchain-16-9-1.webp",
  },
];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** Deterministic date formatting (no locale/timezone differences between server and browser). */
export const formatPostDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

export const getBlogPost = (slug: string): BlogPost => {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
};

export function parseBlogListPageParam(pageParam?: string): number {
  if (!pageParam) return 1;
  const parsed = Number.parseInt(pageParam, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return parsed;
}

export function getBlogListPage(requestedPage: number) {
  const totalPosts = BLOG_POSTS.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / BLOG_PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const start = (currentPage - 1) * BLOG_PAGE_SIZE;
  const posts = BLOG_POSTS.slice(start, start + BLOG_PAGE_SIZE);

  return { posts, currentPage, totalPages, totalPosts };
}

export type BlogPaginationItem = number | "ellipsis";

/** Page numbers shown in the blog list pager (collapses with … when there are many pages). */
export function getBlogPaginationItems(
  currentPage: number,
  totalPages: number,
): BlogPaginationItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const sibling = 1;
  const pagesToShow = new Set<number>([1, totalPages]);
  for (
    let page = currentPage - sibling;
    page <= currentPage + sibling;
    page += 1
  ) {
    if (page >= 1 && page <= totalPages) {
      pagesToShow.add(page);
    }
  }

  const sorted = [...pagesToShow].sort((a, b) => a - b);
  const items: BlogPaginationItem[] = [];
  for (let i = 0; i < sorted.length; i += 1) {
    const page = sorted[i];
    if (i > 0 && page - sorted[i - 1] > 1) {
      items.push("ellipsis");
    }
    items.push(page);
  }
  return items;
}
