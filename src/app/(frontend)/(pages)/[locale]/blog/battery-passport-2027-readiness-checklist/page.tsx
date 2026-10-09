"use client";

import React from "react";

import BlogArticle from "@/components/Blog/BlogArticle";

export default function BatteryPassportChecklistPost() {
  return (
    <BlogArticle
      category="Regulation"
      title="EU Battery Passport: a readiness checklist for 18 February 2027"
      subtitle="Four months before the deadline, here is what manufacturers, importers and their suppliers need in place for the first mandatory Digital Product Passport in the EU."
      date="October 9, 2026"
      readingTime="6 min read"
      cta={{
        title: "Check your battery passport readiness",
        text: "Tell us which battery models you place on the EU market and we will walk you through the data and QR code set-up in UseSafe.",
        href: "/contact?reason=product_demo",
        button: "Request a demo",
      }}
      sources={[
        { label: "Regulation (EU) 2023/1542 – Batteries Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2023/1542/oj" },
        { label: "Regulation (EU) 2024/1781 – Ecodesign for Sustainable Products Regulation (EUR-Lex)", href: "https://eur-lex.europa.eu/eli/reg/2024/1781/oj" },
        { label: "Krogerus – The Digital Product Passport: new rules for product data (August 2026)", href: "https://www.krogerus.com/articles/news/the-digital-product-passport-new-rules-for-product-data" },
      ]}
    >
      <p>
        The battery passport is the first Digital Product Passport that EU law makes mandatory on a fixed date. Under
        Article 77 of the Batteries Regulation (EU) 2023/1542, from <strong>18 February 2027</strong> every LMT battery,
        every industrial battery with a capacity above 2 kWh and every electric vehicle battery placed on the market or
        put into service in the EU must have an electronic record: the battery passport.
      </p>
      <p>
        The passport is reached through a QR code on the battery and is tied to a unique identifier. Since July 2026 the
        EU&apos;s central Digital Product Passport registry, set up under ESPR, is also in place, and battery identifiers
        are to be registered there. With roughly four months to go, this checklist covers what needs to be ready.
      </p>

      <h2>1. Confirm scope and responsibility</h2>
      <ul>
        <li>List every battery model you place on the EU market and classify it: LMT, industrial above 2 kWh, EV, or out of scope.</li>
        <li>
          Identify the economic operator responsible for each passport: the company placing the battery on the market or
          putting it into service. It can authorise another operator to manage the passport, but stays responsible.
        </li>
        <li>For batteries built into products you import, clarify who that operator is before the deadline, not after.</li>
      </ul>

      <h2>2. Assign identifiers and plan the QR code</h2>
      <ul>
        <li>
          Each battery needs a unique identifier based on the ISO/IEC 15459 family of standards or an equivalent. GS1
          identifiers meet this requirement.
        </li>
        <li>
          The QR code giving access to the passport should be printed or engraved on the battery. Packaging or
          accompanying documents are only an option when the battery&apos;s size or nature does not allow it.
        </li>
        <li>Check label artwork, printing or laser-marking equipment and line changes now; these have long lead times.</li>
      </ul>

      <h2>3. Map the data and who holds it</h2>
      <p>The passport brings together information that usually sits with different teams and suppliers, including:</p>
      <ul>
        <li>General battery information: manufacturer, model, category, chemistry, weight, capacity and voltage.</li>
        <li>Material composition, hazardous substances and critical raw materials.</li>
        <li>Carbon footprint and recycled content information.</li>
        <li>Performance and durability data.</li>
        <li>Supply chain due diligence information.</li>
        <li>Dismantling, safety and end-of-life information for repairers, second-life operators and recyclers.</li>
      </ul>
      <p>
        For each item, name the owner and the source system. Much of the composition and carbon data comes from cell and
        material suppliers, many of them outside the EU, including in Türkiye and Asia, so supplier data requests should go
        out now.
      </p>

      <h2>4. Set up access levels</h2>
      <p>The regulation separates who can see what:</p>
      <ul>
        <li><strong>The public:</strong> general information, composition, carbon footprint and recycled content.</li>
        <li>
          <strong>Persons with a legitimate interest</strong>, such as repairers, remanufacturers, second-life operators
          and recyclers: more detailed composition, dismantling and safety information.
        </li>
        <li>
          <strong>Notified bodies, market surveillance authorities and the Commission:</strong> test reports and compliance
          evidence.
        </li>
      </ul>
      <p>Your passport platform needs role-based access, not a single public web page.</p>

      <h2>5. Plan for the whole battery life</h2>
      <ul>
        <li>The passport must stay available and up to date while the battery is in use, not just at the point of sale.</li>
        <li>
          When a battery is repurposed or remanufactured, the operator doing so takes responsibility for its passport,
          which must be linked to the original one.
        </li>
        <li>Choose hosting and identifiers that will outlive product redesigns, system migrations and even your provider contract.</li>
      </ul>

      <h2>6. Run a pilot before February</h2>
      <ol>
        <li>Pick one battery model.</li>
        <li>Create its passport with real supplier data.</li>
        <li>Print or engrave the QR code on a sample.</li>
        <li>Scan it as a consumer, a recycler and an authority would, and check each view.</li>
        <li>Fix the gaps, then roll out to the remaining models.</li>
      </ol>

      <h2>How UseSafe helps</h2>
      <p>
        UseSafe gives every battery a digital identity and a QR-accessible passport, stores the supporting documents and
        test reports against that identity, and shares the right view with consumers, recyclers and authorities. Our
        compliance team, with long experience in chemical and product regulations in the EU and Türkiye, can help you map
        Annex XIII data requirements to your suppliers.
      </p>
    </BlogArticle>
  );
}
