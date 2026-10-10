"use client";

import Link from "next/link";
import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";
import { formatPostDate, getBlogPost } from "@/constants/blogPosts";

const post = getBlogPost("usesafe-sponsors-gs1-in-europe-forum-2026");

export default function Gs1ForumSponsorshipPost() {
  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      subtitle={post.description}
      date={formatPostDate(post.date)}
      readingTime={post.readingTime}
      cta={{
        title: "Meet us in Istanbul",
        text: "Our team is at the Forum from 12 to 15 October. Tell us what you are working on and we will set up a short meeting.",
        href: "/contact?reason=product_demo&ref=gs1-forum-2026",
        button: "Book a meeting",
      }}
      sources={[
        { label: "GS1 in Europe Forum 2026 – programme and speakers", href: "https://gs1ineuropeforum.eu/" },
        { label: "GS1 in Europe Forum 2026 – event information", href: "https://gs1ineuropeforum.eu/event-information/" },
      ]}
    >
      <p>
        Next week the European GS1 community meets in Istanbul. The GS1 in Europe Forum 2026 runs from{" "}
        <strong>12 to 15 October</strong> at the Conrad Istanbul Bosphorus, under the theme{" "}
        <em>Accelerating as One GS1</em>. We are proud to support it as a sponsor.
      </p>
      <p>
        The Forum is GS1 in Europe&apos;s flagship gathering for GS1 Member Organisations, their partners and the companies
        that use GS1 standards every day. For four days, the agenda covers standards and data sharing, sustainability
        regulation, artificial intelligence, traceability, public policy and sector priorities.
      </p>

      <h2>Why we are sponsoring</h2>
      <p>
        Digital Product Passports will only work at scale if they start from the product identity and data that companies
        already manage. In Europe, that identity is very often a GS1 key: the GTIN on the pack, the GLN of the company and
        its sites. UseSafe is built around those identifiers, and as a <strong>GS1 Türkiye Solution Partner</strong> we
        want to help the GS1 community turn them into passports and compliance evidence that regulators, marketplaces and
        consumers can trust.
      </p>
      <p>
        Holding the Forum in Istanbul matters to us too. Türkiye is one of the EU&apos;s closest manufacturing and trade
        partners, and Turkish exporters are preparing for the same ESPR, battery and packaging rules as their European
        customers. Our teams work with both sides every day.
      </p>

      <h2>Sessions we are following</h2>
      <p>The programme is full, but these sessions sit closest to our work. All times are Istanbul time.</p>
      <ul>
        <li>
          <strong>Monday 12 October, 15:30:</strong> GS1 Registries in action: trusted certification data exchange
        </li>
        <li>
          <strong>Monday 12 October, 17:00:</strong> DPP &amp; Connected Industries, and Partnering for success: working
          with Solution Providers
        </li>
        <li>
          <strong>Tuesday 13 October, 11:45:</strong> Winning on Marketplaces: What GS1 teams need to focus on now
        </li>
        <li>
          <strong>Tuesday 13 October, 17:00:</strong> Textiles: Pioneering for DPP
        </li>
        <li>
          <strong>Wednesday 14 October, 10:30:</strong> Unlocking the Power of 2D Barcodes
        </li>
        <li>
          <strong>Wednesday 14 October, 14:00:</strong> Plenary: Market Spotlight on Türkiye
        </li>
      </ul>

      <h2>What we will show</h2>
      <ul>
        <li>
          <strong>Sample Digital Product Passports</strong> for ESPR priority products such as furniture, and for EV and
          industrial batteries ahead of the 18 February 2027 battery passport deadline.
        </li>
        <li>
          <strong>GTIN-keyed product records</strong> that bring together declarations, test reports and certificates for
          ESPR, GPSR, REACH/CLP and Türkiye&apos;s KKDİK.
        </li>
        <li>
          <strong>Our GS1 roadmap:</strong> encoding passports as GS1 Digital Link QR codes and exchanging traceability
          events in EPCIS 2.0.
        </li>
        <li>
          <strong>Ideas for Member Organisations:</strong> how MOs could offer their members a practical first step from a
          GTIN to a compliant passport.
        </li>
      </ul>

      <h2>Let&apos;s talk</h2>
      <p>
        If you are attending, we would be glad to meet, whether you run a GS1 Member Organisation, a brand, a marketplace
        or a solution business. You can{" "}
        <Link href="/contact?reason=product_demo&ref=gs1-forum-2026">book a meeting</Link> in advance or visit our{" "}
        <Link href="/gs1-forum-2026">Forum page</Link> for the full overview. If you cannot make it to Istanbul, we are
        happy to arrange a call after the event.
      </p>
      <p>See you on the Bosphorus.</p>
    </BlogArticle>
  );
}
