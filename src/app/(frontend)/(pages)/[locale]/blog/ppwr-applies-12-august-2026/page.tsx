"use client";

import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";
import { formatPostDate, getBlogPost } from "@/constants/blogPosts";

const post = getBlogPost("ppwr-applies-12-august-2026");

export default function PpwrPost() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      subtitle={post.description}
      date={formatPostDate(post.date)}
      readingTime={post.readingTime}
      cta={{
        title: "Keep packaging evidence with the product",
        text: "Store declarations of conformity, test reports and supplier statements for each packaging format in UseSafe, next to the product they belong to.",
        href: "/contact?reason=product_demo",
        button: "Request a demo",
      }}
      sources={[
        { label: "Regulation (EU) 2025/40 – Packaging and Packaging Waste Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
      ]}
    >
      <p>
        The EU Packaging and Packaging Waste Regulation (PPWR), Regulation (EU) 2025/40, entered into force in February
        2025 and applies from <strong>12 August 2026</strong>. It replaces the old Packaging Directive with rules that are
        directly applicable in every Member State. Many of its best-known requirements, such as harmonised labels and
        recycled-content targets, only start later. But several obligations apply from day one.
      </p>

      <h2>What applies from 12 August 2026</h2>
      <h3>Restrictions on substances</h3>
      <ul>
        <li>
          <strong>PFAS in food-contact packaging:</strong> packaging that comes into contact with food may not contain
          per- and polyfluoroalkyl substances above 25 ppb for any individual PFAS, 250 ppb for the sum of PFAS, and 50 ppm
          total fluorine (including polymeric PFAS).
        </li>
        <li>
          <strong>Heavy metals:</strong> the combined concentration of lead, cadmium, mercury and hexavalent chromium in
          packaging or its components may not exceed 100 mg/kg.
        </li>
        <li>
          <strong>Substances of concern:</strong> packaging must be designed so that the presence of substances of concern
          is minimised.
        </li>
      </ul>

      <h3>Conformity and documentation</h3>
      <ul>
        <li>
          Manufacturers must carry out a conformity assessment, draw up <strong>technical documentation</strong> and an{" "}
          <strong>EU declaration of conformity</strong>, and keep them available for the authorities.
        </li>
        <li>
          Packaging must carry, or be accompanied by, information that identifies the manufacturer and the packaging.
        </li>
        <li>
          Importers and distributors must check that these obligations have been met before they make packaging available
          on the market.
        </li>
      </ul>

      <h2>What comes later</h2>
      <ul>
        <li><strong>2028:</strong> harmonised labelling on material composition and sorting starts to apply.</li>
        <li><strong>2029:</strong> labelling requirements for reusable packaging.</li>
        <li>
          <strong>2030:</strong> design-for-recycling criteria, minimum recycled content in plastic packaging, packaging
          minimisation, a maximum 50% empty-space ratio for grouped, transport and e-commerce packaging, and the first
          reuse targets.
        </li>
        <li><strong>2035 and 2040:</strong> &quot;recycled at scale&quot; requirements and higher recycled-content and reuse targets.</li>
      </ul>
      <p>
        Much of the detail, such as recyclability performance grades and labelling specifications, will come through
        secondary legislation still being prepared by the Commission.
      </p>

      <h2>A practical checklist for the coming weeks</h2>
      <ol>
        <li>List every packaging format you place on the EU market, including transport and e-commerce packaging.</li>
        <li>
          Ask suppliers for PFAS and heavy-metal test results or declarations, starting with food-contact packaging.
        </li>
        <li>Identify the legal manufacturer for each format and who signs the EU declaration of conformity.</li>
        <li>Keep technical documentation per format so it can be produced on request.</li>
        <li>Start collecting recycled-content and material data now; the 2028 and 2030 obligations depend on it.</li>
      </ol>

      <h2>Where UseSafe fits</h2>
      <p>
        Packaging evidence tends to end up in inboxes and shared drives. In UseSafe, declarations of conformity, test
        reports and supplier statements are attached to the product and packaging records they belong to, so they
        are ready when a customer or an authority asks.
      </p>
    </BlogArticle>
  );
}
