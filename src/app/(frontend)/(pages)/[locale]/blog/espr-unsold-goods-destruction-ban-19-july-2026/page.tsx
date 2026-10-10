"use client";

import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";
import { formatPostDate, getBlogPost } from "@/constants/blogPosts";

const post = getBlogPost("espr-unsold-goods-destruction-ban-19-july-2026");

export default function UnsoldGoodsBanPost() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      subtitle={post.description}
      date={formatPostDate(post.date)}
      readingTime={post.readingTime}
      cta={{
        title: "Keep the evidence behind every exception",
        text: "UseSafe can hold test reports, safety assessments and donation records against each product and batch, ready for your disclosures and for inspections.",
        href: "/contact?reason=product_demo",
        button: "Request a demo",
      }}
      sources={[
        { label: "Regulation (EU) 2024/1781 – Ecodesign for Sustainable Products Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2024/1781/oj" },
      ]}
    >
      <p>
        On <strong>19 July 2026</strong>, the first product-specific obligation of the Ecodesign for Sustainable Products
        Regulation (ESPR) starts to apply, and it has nothing to do with passports. From that date, large companies may no
        longer destroy unsold consumer products in the apparel, clothing accessories and footwear categories listed in
        Annex VII of ESPR.
      </p>

      <h2>Who is covered</h2>
      <ul>
        <li>
          <strong>Large enterprises:</strong> the ban applies from 19 July 2026.
        </li>
        <li>
          <strong>Medium-sized enterprises:</strong> the ban applies from 19 July 2030.
        </li>
        <li>
          <strong>Micro and small enterprises:</strong> exempt.
        </li>
      </ul>
      <p>
        The Commission can extend the list of product groups later through delegated acts, so other sectors should treat
        textiles as the pilot rather than the exception.
      </p>

      <h2>What counts as destruction</h2>
      <p>
        Destruction means intentionally damaging or discarding a product as waste. That includes landfill and incineration,
        but also energy recovery and, unless one of the permitted exceptions applies, recycling. Sending unsold stock
        straight to a recycler does not by itself avoid the ban; reuse, resale and donation come first.
      </p>

      <h2>The permitted exceptions</h2>
      <p>
        A delegated act adopted in February 2026 lists ten situations in which destruction is still allowed, each with the
        evidence a company must keep. Examples include:
      </p>
      <ul>
        <li>products that are unsafe, supported by a safety assessment or test report;</li>
        <li>products that do not comply with the law;</li>
        <li>counterfeit or IP-infringing goods;</li>
        <li>products that cannot technically be prepared for reuse, for example because branding cannot be removed;</li>
        <li>donations that were offered to social economy organisations but not accepted.</li>
      </ul>
      <p>
        Even then, the waste hierarchy applies: recycling takes priority over energy recovery and disposal, and the waste
        operator must be told which exception is being used.
      </p>

      <h2>Disclosure: what large companies must publish</h2>
      <p>
        Alongside the ban, large companies must disclose each year how many unsold consumer products they discarded, by
        weight and product type, the reasons, and how much went to reuse, recycling, recovery or disposal. A standardised
        reporting format set by implementing act applies from 2027. Supporting documentation should be kept for several
        years, so the evidence trail starts now.
      </p>

      <h2>Five steps before 19 July</h2>
      <ol>
        <li>Map which of your products fall under the Annex VII categories and which entities place them on the market.</li>
        <li>Agree outlets for unsold stock: resale, outlet channels, donation partners and take-back schemes.</li>
        <li>Define who may approve an exception and what evidence they must attach.</li>
        <li>Brief warehouses, 3PLs and waste contractors so nothing is destroyed by default.</li>
        <li>Set up data capture for the annual disclosure: quantities, product codes, reasons and destinations.</li>
      </ol>

      <h2>Where UseSafe fits</h2>
      <p>
        Most exceptions depend on documents: a test report proving a safety issue, a non-compliance finding, proof that a
        donation was offered. UseSafe keeps that evidence linked to the product and batch it concerns, so the reason for
        every decision is on file when it is time to report.
      </p>
    </BlogArticle>
  );
}
