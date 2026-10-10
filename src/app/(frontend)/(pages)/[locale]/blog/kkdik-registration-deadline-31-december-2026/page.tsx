"use client";

import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";
import { formatPostDate, getBlogPost } from "@/constants/blogPosts";

const post = getBlogPost("kkdik-registration-deadline-31-december-2026");

export default function KkdikDeadlinePost() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      subtitle={post.description}
      date={formatPostDate(post.date)}
      readingTime={post.readingTime}
      cta={{
        title: "Check your KKDİK exposure",
        text: "Send us your substance list and Turkish tonnages. We will map which substances fall under the 2026, 2028 and 2030 deadlines and what each registration needs.",
        href: "/contact?reason=general_inquiry",
        button: "Talk to our team",
      }}
      sources={[
        { label: "CIRS – Türkiye officially extends the KKDİK registration deadlines", href: "https://cirs-group.com/en/chemicals/turkey-officially-announced-to-extend-the-kkdik-registration-deadlines" },
        { label: "ChemLinked – Türkiye extends KKDİK registration deadlines", href: "https://chemical.chemlinked.com/news/chemical-news/turkey-extends-kkdik-registration-deadlines" },
      ]}
    >
      <p>
        KKDİK is Türkiye&apos;s counterpart to EU REACH: the regulation on the registration, evaluation, authorisation and
        restriction of chemicals. Its original registration deadline was 31 December 2023. In December 2023 Türkiye
        replaced that single date with three tonnage- and hazard-based deadlines, and the first of them is now just over
        three months away.
      </p>

      <h2>The three deadlines</h2>
      <ul>
        <li>
          <strong>31 December 2026:</strong> substances manufactured or imported at 1,000 tonnes a year or more;
          substances at 100 tonnes a year or more classified as very toxic to aquatic life (Aquatic Acute 1 or Aquatic
          Chronic 1, H400/H410); and substances at 1 tonne a year or more classified as carcinogenic, mutagenic or toxic
          for reproduction, category 1A or 1B.
        </li>
        <li>
          <strong>31 December 2028:</strong> substances at 100 tonnes a year or more.
        </li>
        <li>
          <strong>31 December 2030:</strong> all remaining substances at 1 tonne a year or more.
        </li>
      </ul>
      <p>
        The tonnage that counts is what each legal entity manufactures in or imports into Türkiye, not what it sells
        worldwide. A substance that is well below the threshold in Europe can still sit in the 2026 band for a Turkish
        importer.
      </p>

      <h2>An EU REACH registration is not enough</h2>
      <p>
        KKDİK closely follows REACH, but it is a separate legal system. An EU registration number does not grant access to
        the Turkish market. Each substance needs its own KKDİK registration, submitted through the Ministry of
        Environment, Urbanisation and Climate Change&apos;s Chemicals Registration System (KKS), with classification
        consistent with Türkiye&apos;s CLP equivalent, the SEA regulation.
      </p>
      <p>
        Manufacturers outside Türkiye cannot register directly. They either appoint an <strong>Only Representative</strong>{" "}
        established in Türkiye, or leave the registration to each of their Turkish importers. For a supplier with many
        Turkish customers, an Only Representative usually means one registration instead of many, and it keeps
        confidential composition data out of customers&apos; hands.
      </p>

      <h2>What needs to be ready by 31 December 2026</h2>
      <ol>
        <li>
          <strong>Confirm your band.</strong> Collect your recent annual import or production volumes in Türkiye per substance and
          check the harmonised and self-classification for aquatic toxicity and CMR properties.
        </li>
        <li>
          <strong>Join the right group.</strong> Registrants of the same substance work together, with a lead registrant
          submitting the joint dossier. Check whether a lead registrant exists and what a letter of access costs.
        </li>
        <li>
          <strong>Prepare your member dossier.</strong> Substance identity, analytical data, tonnage, uses and
          classification have to be entered in KKS. Turkish-language safety data sheets must be consistent with the
          registration.
        </li>
        <li>
          <strong>Align your customers.</strong> Downstream users in Türkiye need to know that their supply is covered
          after the deadline. Without a registration, the substance cannot legally be manufactured or imported.
        </li>
        <li>
          <strong>Plan the 2028 and 2030 waves now.</strong> The same data work will be needed for lower tonnages, and
          starting early avoids a rush at the end of the decade.
        </li>
      </ol>

      <h2>Where UseSafe fits</h2>
      <p>
        KKDİK registrations, safety data sheets and classifications are compliance evidence like any other. In UseSafe
        they sit in the same product and substance records as REACH, CLP and product safety documents, so teams selling in
        both the EU and Türkiye work from one source. Within the Doruk group, our chemicals team supports companies with
        their KKDİK registrations.
      </p>
    </BlogArticle>
  );
}
