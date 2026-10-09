"use client";

import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";

export default function Gs1DigitalLinkDppPost() {
  return (
    <BlogArticle
      category="Standards"
      title="One QR code for checkout, consumers and regulators: GS1 Digital Link meets the Digital Product Passport"
      subtitle="ESPR passports and the move to 2D barcodes are arriving at the same time. Brands that plan them together can avoid putting two codes on every pack."
      date="October 9, 2026"
      readingTime="7 min read"
      cta={{
        title: "Talk to us at the GS1 in Europe Forum",
        text: "We are in Istanbul from 12 to 15 October 2026. Book a short meeting to discuss your passport and 2D barcode plans.",
        href: "/contact?reason=product_demo&ref=gs1-forum-2026",
        button: "Book a meeting",
      }}
      sources={[
        { label: "Regulation (EU) 2024/1781 – Ecodesign for Sustainable Products Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2024/1781/oj" },
        { label: "GS1 in Europe – GS1 Standards Enabling the Digital Product Passport", href: "https://gs1.eu/wp-content/uploads/2025/04/GS1-Standards-Enabling-DPP-V2.2.pdf" },
        { label: "GS1 Digital Link standard (GS1 reference)", href: "https://ref.gs1.org/standards/digital-link/" },
        { label: "Regulation (EU) 2023/1542 – Batteries Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2023/1542/oj" },
      ]}
    >
      <p>
        Two changes are landing on product packaging at the same time. The EU&apos;s Ecodesign for Sustainable Products
        Regulation (ESPR) will require Digital Product Passports (DPPs) for more and more product groups, each reachable
        through a data carrier on the product. In parallel, the GS1 community is moving retail checkouts from linear
        barcodes to 2D codes under the &quot;Sunrise 2027&quot; ambition.
      </p>
      <p>
        If these two projects run separately, many brands will end up with two codes on every pack: one for the till and
        one for the passport. GS1 Digital Link lets a single QR code do both jobs.
      </p>

      <h2>What ESPR expects from a data carrier</h2>
      <p>
        ESPR has been in force since July 2024. It sets the framework, and product-specific delegated acts decide which
        products need a passport, what data it holds and when the obligation starts. Across product groups, three
        building blocks recur:
      </p>
      <ul>
        <li>
          <strong>A unique product identifier</strong>, at the level the delegated act requires: model, batch or individual
          item.
        </li>
        <li>
          <strong>A data carrier</strong> on the product, its packaging or accompanying documents that gives access to the
          passport.
        </li>
        <li>
          <strong>Identifiers for operators and facilities</strong>, so responsibility and origin can be traced.
        </li>
      </ul>
      <p>
        The Commission&apos;s central DPP registry opened in July 2026, and harmonised standards for passports developed in
        CEN-CENELEC were cited in the Official Journal over the summer. The direction is clear: identifiers must be
        globally unique, persistent and based on open standards.
      </p>

      <h2>Where GS1 keys fit</h2>
      <p>
        Most consumer products sold in Europe already carry a GS1 Global Trade Item Number (GTIN). GS1 is an issuing
        agency under ISO/IEC 15459, the family of standards that the Batteries Regulation explicitly references for the
        battery passport identifier. In GS1&apos;s own mapping of the DPP requirements:
      </p>
      <ul>
        <li>
          <strong>GTIN</strong> identifies the product model; GTIN plus batch/lot or serial number identifies a batch or a
          single item.
        </li>
        <li>
          <strong>GLN</strong> (Global Location Number) identifies companies and facilities.
        </li>
        <li>
          <strong>GS1 Digital Link</strong> turns those keys into a web address that a QR code can carry.
        </li>
      </ul>

      <h2>How GS1 Digital Link works</h2>
      <p>
        GS1 Digital Link is a standard syntax for writing GS1 identifiers as a URI. A product with a GTIN, a batch and a
        serial number might be encoded as:
      </p>
      <p>
        <code>https://id.example.com/01/09506000134352/10/ABC123/21/12345</code>
      </p>
      <p>
        Here <code>01</code> marks the GTIN, <code>10</code> the batch or lot and <code>21</code> the serial number. Put that
        URI in a QR code and two things become possible with the same symbol:
      </p>
      <ul>
        <li>A retail scanner that supports GS1 Digital Link reads the GTIN, and the item rings up at checkout.</li>
        <li>
          A phone camera opens the URI. A resolver then sends the person to the right content, such as the consumer view
          of the passport, care and repair instructions, or a recall notice.
        </li>
      </ul>
      <p>
        Because the identifier is in the address itself, the same code can serve different audiences. Consumers, recyclers
        and market surveillance authorities can each be shown the passport view their access rights allow.
      </p>

      <h2>Five decisions to make now</h2>
      <ol>
        <li>
          <strong>Clean up your GTINs.</strong> Make sure every product you sell in the EU has a correctly allocated GTIN
          and that its master data is published. A passport is only as reliable as the identifier underneath it.
        </li>
        <li>
          <strong>Decide on granularity per product group.</strong> Model-level passports need only the GTIN. Batch- or
          item-level passports need batch or serial numbers printed in the code, which affects your printing equipment and
          line processes.
        </li>
        <li>
          <strong>Own a stable resolver domain.</strong> The domain inside the QR code will be printed on products for
          years. Use a domain your company controls, or one your provider commits to keeping stable, and keep the URIs
          working for the product&apos;s whole life.
        </li>
        <li>
          <strong>Align the packaging changeover.</strong> If you are redesigning packs for 2D barcodes anyway, design the
          QR code so it can carry the passport link from day one.
        </li>
        <li>
          <strong>Structure the data once.</strong> Materials, substances of concern, carbon footprint, repair and
          end-of-life information should be captured in one product record and reused across the passport, labels and
          declarations, rather than retyped for each.
        </li>
      </ol>

      <h2>How UseSafe supports this</h2>
      <p>
        In UseSafe, every product record is keyed by its GTIN, and each product gets a QR code that opens its passport
        and verification page. Compliance documents such as declarations, test reports and certificates are attached to
        the same product identity.
      </p>
      <p>
        Encoding passports as GS1 Digital Link URIs and exchanging traceability events in the GS1 EPCIS 2.0 format are on
        our roadmap, so that the code you print for checkout and the code that opens the passport can be the same one.
      </p>
    </BlogArticle>
  );
}
