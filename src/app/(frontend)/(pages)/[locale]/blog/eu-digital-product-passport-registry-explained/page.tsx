"use client";

import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";
import { formatPostDate, getBlogPost } from "@/constants/blogPosts";

const post = getBlogPost("eu-digital-product-passport-registry-explained");

export default function DppRegistryPost() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      subtitle={post.description}
      date={formatPostDate(post.date)}
      readingTime={post.readingTime}
      cta={{
        title: "Get your identifiers in order",
        text: "UseSafe keys every product record to its GTIN and gives each product a QR-accessible passport, so registering identifiers becomes a step, not a project.",
        href: "/contact?reason=product_demo",
        button: "Request a demo",
      }}
      sources={[
        { label: "Regulation (EU) 2024/1781 – Ecodesign for Sustainable Products Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2024/1781/oj" },
        { label: "Regulation (EU) 2023/1542 – Batteries Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2023/1542/oj" },
        { label: "GS1 in Europe – GS1 Standards Enabling the Digital Product Passport", href: "https://gs1.eu/wp-content/uploads/2025/04/GS1-Standards-Enabling-DPP-V2.2.pdf" },
      ]}
    >
      <p>
        Under Article 13 of the Ecodesign for Sustainable Products Regulation (ESPR), the European Commission must set up
        a central Digital Product Passport registry by <strong>19 July 2026</strong>. With that date a month away, many of
        the questions we hear are variations of the same one: does all our product data now have to go to Brussels? The
        short answer is no.
      </p>

      <h2>What the registry is</h2>
      <p>
        The registry is a directory, not a data warehouse. It stores the <strong>unique identifiers</strong> linked to
        products that need a passport: the unique product identifier and, where required, identifiers for the economic
        operator and the facility. It also holds a small set of reference data so that authorities can find the right
        passport and check that it exists.
      </p>
      <p>
        The passport content itself, such as materials, substances of concern, carbon footprint and repair information,
        stays with the company responsible for the product or with the passport service provider it chooses. It is
        reached through the data carrier on the product, typically a QR code.
      </p>

      <h2>Who registers, and when</h2>
      <p>
        The obligation to register follows the product rules. The economic operator placing a product on the market
        uploads its identifiers once the delegated act for that product group requires a passport. For most ESPR product
        groups that is still some way off: the delegated act for textiles, for example, is expected in 2027 and will
        include a transition period.
      </p>
      <p>
        Batteries come first. The Batteries Regulation requires a battery passport for EV batteries, LMT batteries and
        industrial batteries above 2 kWh from <strong>18 February 2027</strong>, and the registry will also store the
        battery identifiers.
      </p>

      <h2>Why the registry matters for customs and marketplaces</h2>
      <p>
        ESPR links the registry to the EU customs environment, so that customs authorities can check whether a product
        that requires a passport has been registered. For importers, a missing registration could become a reason for
        goods to be held at the border. For marketplaces and retailers, the registry offers a way to verify that a
        product&apos;s passport exists before listing it.
      </p>

      <h2>What to do now</h2>
      <ol>
        <li>
          <strong>Choose your identifiers.</strong> They must be globally unique and based on open standards. GS1 keys,
          such as the GTIN with batch or serial number for products and the GLN for companies and sites, meet this.
        </li>
        <li>
          <strong>Decide the granularity</strong> each product group will need: model, batch or individual item.
        </li>
        <li>
          <strong>Choose where passports will live</strong> and make sure that place can stay online and stable for the
          product&apos;s whole life.
        </li>
        <li>
          <strong>Start with batteries</strong> if you have any in scope; February 2027 is the first real test.
        </li>
      </ol>

      <h2>Where UseSafe fits</h2>
      <p>
        UseSafe keys each product record to its GTIN, generates a QR-accessible passport and stores the compliance
        evidence behind it. When registration becomes mandatory for your product group, the identifiers are already
        structured and in one place.
      </p>
    </BlogArticle>
  );
}
