"use client";

import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";
import { formatPostDate, getBlogPost } from "@/constants/blogPosts";

const post = getBlogPost("espr-working-plan-one-year-on");

export default function EsprWorkingPlanPost() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      subtitle={post.description}
      date={formatPostDate(post.date)}
      readingTime={post.readingTime}
      cta={{
        title: "Find out where your products stand",
        text: "Tell us which product groups you sell in the EU and we will show you which ESPR, battery and packaging milestones apply, and the data you will need.",
        href: "/contact?reason=product_demo",
        button: "Request a demo",
      }}
      sources={[
        { label: "European Commission Green Forum – ESPR and Energy Labelling Working Plan 2025–2030", href: "https://green-forum.ec.europa.eu/news/2025-2030-working-plan-2025-07-11_en" },
        { label: "Regulation (EU) 2024/1781 – Ecodesign for Sustainable Products Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2024/1781/oj" },
      ]}
    >
      <p>
        In April 2025 the European Commission adopted its first working plan under the Ecodesign for Sustainable Products
        Regulation (ESPR), covering 2025 to 2030. It sets the order in which product groups will get ecodesign
        requirements and, with them, Digital Product Passports. One year on, it is a good moment to look at what the plan
        means in practice.
      </p>

      <h2>The priorities</h2>
      <h3>Final products</h3>
      <ul>
        <li><strong>Textiles</strong>, with a focus on apparel</li>
        <li><strong>Furniture</strong></li>
        <li><strong>Tyres</strong></li>
        <li><strong>Mattresses</strong></li>
      </ul>
      <h3>Intermediate products</h3>
      <ul>
        <li><strong>Steel</strong></li>
        <li><strong>Aluminium</strong></li>
      </ul>
      <h3>Horizontal measures</h3>
      <ul>
        <li><strong>Repairability</strong>, including a repairability score, across product groups</li>
        <li><strong>Recyclability</strong> of electrical and electronic equipment</li>
      </ul>
      <p>
        Energy-related products continue to be covered through ecodesign and energy labelling measures, as they have been
        for years.
      </p>

      <h2>How a priority becomes an obligation</h2>
      <p>
        Being on the list does not create obligations by itself. For each group, the Commission runs a preparatory study,
        consults stakeholders through the Ecodesign Forum, and then adopts a delegated act setting the performance and
        information requirements, including what goes into the passport. As a general rule, those requirements apply no
        earlier than 18 months after the delegated act enters into force.
      </p>
      <p>
        For most priority groups, that means passports become mandatory in the second half of the decade. Textiles are
        expected to be among the first, with the delegated act foreseen for 2027.
      </p>

      <h2>Milestones that do not wait for the working plan</h2>
      <ul>
        <li>
          <strong>19 July 2026:</strong> the Commission&apos;s central Digital Product Passport registry must be in place,
          and the ban on destroying unsold apparel, clothing accessories and footwear starts for large companies.
        </li>
        <li>
          <strong>18 February 2027:</strong> the battery passport becomes mandatory under the Batteries Regulation for EV,
          LMT and industrial batteries above 2 kWh.
        </li>
        <li>
          <strong>Standards:</strong> harmonised standards for passport identifiers, data carriers and interoperability are
          being finalised in CEN-CENELEC.
        </li>
      </ul>

      <h2>What companies in priority sectors can do now</h2>
      <ol>
        <li>
          <strong>Follow your product group&apos;s study.</strong> Preparatory studies show which parameters, such as
          durability, recycled content or substances of concern, are likely to be regulated.
        </li>
        <li>
          <strong>Fix product identity.</strong> Make sure every product has a stable, globally unique identifier such as
          a GTIN.
        </li>
        <li>
          <strong>Map your data gaps.</strong> Material composition, supplier declarations and carbon data take the longest
          to collect, especially from suppliers outside the EU.
        </li>
        <li>
          <strong>Pilot with one product line.</strong> A small passport pilot now reveals process gaps long before a
          deadline does.
        </li>
      </ol>

      <h2>Where UseSafe fits</h2>
      <p>
        UseSafe brings product identity, compliance documents and lifecycle data into one record per product and turns it
        into a passport that can be opened from a QR code. Companies in priority sectors can start structuring their data
        today and add the regulated passport fields as each delegated act is adopted.
      </p>
    </BlogArticle>
  );
}
