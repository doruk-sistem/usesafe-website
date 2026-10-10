"use client";

import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";
import { formatPostDate, getBlogPost } from "@/constants/blogPosts";

const post = getBlogPost("empowering-consumers-directive-green-claims-2026");

export default function EmpcoPost() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      subtitle={post.description}
      date={formatPostDate(post.date)}
      readingTime={post.readingTime}
      cta={{
        title: "Back every claim with evidence",
        text: "UseSafe links certificates, test reports and lifecycle data to each product, so the proof behind a claim is always one click away.",
        href: "/contact?reason=product_demo",
        button: "Request a demo",
      }}
      sources={[
        { label: "Directive (EU) 2024/825 – Empowering Consumers for the Green Transition (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/dir/2024/825/oj" },
        { label: "European Commission – Transition Pathways: Directive (EU) 2024/825", href: "https://transition-pathways.europa.eu/legislation/directive-eu-2024825-empowering-consumer-green-transition" },
      ]}
    >
      <p>
        The Empowering Consumers for the Green Transition Directive, Directive (EU) 2024/825 or &quot;EmpCo&quot;, amends the
        EU&apos;s rules on unfair commercial practices and consumer information. Member States had to transpose it by
        27 March 2026, and the new rules apply from <strong>27 September 2026</strong>. That leaves just over four months
        to review packaging, product pages, advertising and labels.
      </p>

      <h2>What becomes prohibited</h2>
      <p>EmpCo adds several practices to the list of commercial practices that are banned in all circumstances:</p>
      <ul>
        <li>
          <strong>Generic environmental claims</strong> such as &quot;eco-friendly&quot;, &quot;green&quot; or
          &quot;climate friendly&quot;, unless the trader can demonstrate recognised excellent environmental performance
          relevant to the claim.
        </li>
        <li>
          <strong>Sustainability labels</strong> that are not based on a certification scheme or established by public
          authorities. Self-created badges and in-house &quot;eco&quot; logos are the main target.
        </li>
        <li>
          <strong>Claims about a whole product or business</strong> when the benefit only concerns one aspect of it.
        </li>
        <li>
          <strong>Offsetting-based claims</strong> that a product has a neutral, reduced or positive impact on the climate
          because emissions are offset.
        </li>
        <li>
          <strong>Misleading durability and repair practices</strong>, such as hiding features that limit a product&apos;s
          lifetime or making false claims about how long it lasts or how often it can be used.
        </li>
      </ul>

      <h2>Claims about the future</h2>
      <p>
        Statements such as &quot;net zero by 2035&quot; are not banned outright, but they become misleading unless they
        are backed by clear, objective, publicly available and verifiable commitments, set out in a detailed and realistic
        implementation plan with measurable targets, and regularly checked by an independent expert.
      </p>

      <h2>A checklist for brands and retailers</h2>
      <ol>
        <li>
          <strong>Inventory your claims.</strong> Collect every environmental claim on packaging, product pages,
          marketplace listings, ads and social media.
        </li>
        <li>
          <strong>Remove or replace generic wording.</strong> Swap &quot;eco-friendly&quot; for specific, provable
          statements, for example the share of recycled content.
        </li>
        <li>
          <strong>Audit your labels.</strong> Keep only labels from recognised certification schemes or public authorities.
        </li>
        <li>
          <strong>Link every claim to evidence.</strong> Certificates, test reports and lifecycle data should be traceable
          to the exact product and version they describe.
        </li>
        <li>
          <strong>Brief marketplaces and partners.</strong> Retailers and marketplaces often reuse supplier descriptions,
          so outdated claims can live on long after you have changed your own channels.
        </li>
      </ol>

      <h2>How this connects to the Digital Product Passport</h2>
      <p>
        EmpCo and ESPR point in the same direction: environmental information must be specific and provable. Product data
        that will later feed a Digital Product Passport, such as material composition, recycled content and repair
        information, is the same data that substantiates a claim today.
      </p>

      <h2>Where UseSafe fits</h2>
      <p>
        UseSafe keeps certificates, test reports and product data in one record per product, so marketing, compliance
        and sales teams make claims from the same verified source, and can show the evidence when a regulator or a
        customer asks.
      </p>
    </BlogArticle>
  );
}
