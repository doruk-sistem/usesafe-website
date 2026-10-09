"use client";

import Link from "next/link";
import React from "react";
import { FaBarcode, FaCalendarAlt, FaHandshake, FaQrcode, FaRoute, FaShieldAlt } from "react-icons/fa";

import { CtaSection, HeroSection, SectionHeader } from "@/components/Platform";

const MEETING_LINK = "/contact?reason=product_demo&ref=gs1-forum-2026";
const PARTNER_LINK = "/contact?reason=partnership&ref=gs1-forum-2026";
const FORUM_PROGRAMME = "https://gs1ineuropeforum.eu/#programme";

const messages = [
  {
    icon: <FaBarcode className="tw-w-7 tw-h-7" />,
    title: "Built on the identifiers you already use",
    description:
      "Every product in UseSafe is keyed by its GTIN, so passports, certificates and compliance evidence attach to the identifier your supply chain already trusts.",
  },
  {
    icon: <FaShieldAlt className="tw-w-7 tw-h-7" />,
    title: "Compliance evidence, not just data",
    description:
      "Declarations, test reports and certificates for ESPR, the Battery Regulation, GPSR, REACH/CLP and Türkiye's KKDİK are stored, verified and shared from one product record.",
  },
  {
    icon: <FaRoute className="tw-w-7 tw-h-7" />,
    title: "A bridge between Türkiye and the EU",
    description:
      "Backed by Doruk Sistem in Istanbul and DorukWell GmbH in Germany, we help manufacturers and exporters prepare the product data EU buyers, marketplaces and authorities ask for.",
  },
];

const gs1Today = [
  {
    title: "GTIN as the product key",
    description: "Product records, passports and documents are linked to the product's GTIN.",
  },
  {
    title: "One scan to the passport",
    description:
      "Each product gets a QR code that opens its passport and verification page for consumers, retailers and inspectors.",
  },
];

const gs1Next = [
  {
    title: "GS1 Digital Link QR codes",
    description:
      "Encoding GTIN, batch and serial number in a GS1 Digital Link URI, so one 2D code works at checkout and opens the passport, in line with GS1 Sunrise 2027.",
  },
  {
    title: "EPCIS 2.0 traceability events",
    description: "Sharing what, when, where and why supply chain events in the GS1 standard format.",
  },
];

const sessions = [
  { day: "Mon 12 Oct", time: "15:30", title: "GS1 Registries in action: trusted certification data exchange" },
  { day: "Mon 12 Oct", time: "17:00", title: "DPP & Connected Industries" },
  { day: "Mon 12 Oct", time: "17:00", title: "Partnering for success: working with Solution Providers" },
  { day: "Tue 13 Oct", time: "11:45", title: "Winning on Marketplaces: What GS1 teams need to focus on now" },
  { day: "Tue 13 Oct", time: "17:00", title: "Textiles: Pioneering for DPP" },
  { day: "Wed 14 Oct", time: "10:30", title: "Unlocking the Power of 2D Barcodes" },
  { day: "Wed 14 Oct", time: "14:00", title: "Plenary: Market Spotlight on Türkiye" },
];

const milestones = [
  { date: "July 2024", text: "ESPR enters into force; DPP rules follow product group by product group." },
  { date: "2026", text: "EU Digital Product Passport registry goes live." },
  { date: "18 Feb 2027", text: "Battery passport mandatory for EV, LMT and industrial batteries above 2 kWh." },
  { date: "2027", text: "Textiles delegated act expected; obligations to apply after a transition period." },
  { date: "End of 2027", text: "GS1 Sunrise 2027: retail checkouts ready to scan 2D barcodes." },
];

export default function Gs1ForumPageClient() {
  return (
    <div className="tw-w-full">
      <HeroSection
        badge="GS1 in Europe Forum 2026 · Istanbul · 12–15 October"
        title="From GS1 identifiers to trusted Digital Product Passports"
        description="UseSafe is a proud sponsor of the GS1 in Europe Forum 2026 in Istanbul. Meet our team to see how manufacturers, marketplaces and GS1 Member Organisations can turn GTIN-based product data into verifiable Digital Product Passports and compliance evidence for the EU and Türkiye."
        imageSrc="/images/digital-product-passport-usesafe.png"
        imageAlt="UseSafe Digital Product Passport"
        primaryCta={{ text: "Book a meeting at the Forum", href: MEETING_LINK }}
        secondaryCta={{ text: "Read: GS1 Digital Link meets the DPP", href: "/blog/gs1-digital-link-digital-product-passport" }}
        className="tw-py-24 md:tw-py-32"
      />

      {/* Key messages */}
      <section className="tw-py-20 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title="Why we are in Istanbul"
            description="Digital Product Passports will only scale if they start from the product identity and data that companies already manage. That is the idea behind UseSafe."
          />
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 lg:tw-gap-8">
            {messages.map((item) => (
              <div key={item.title} className="tw-rounded-2xl tw-border tw-border-gray-200 tw-bg-white tw-p-8 tw-shadow-sm">
                <div className="tw-mb-5 tw-inline-flex tw-h-14 tw-w-14 tw-items-center tw-justify-center tw-rounded-xl tw-bg-blue-50 tw-text-primary">
                  {item.icon}
                </div>
                <h3 className="tw-mb-3 tw-text-xl tw-font-bold tw-text-gray-900">{item.title}</h3>
                <p className="tw-text-gray-600 tw-leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GS1 standards */}
      <section className="tw-py-20 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title="How UseSafe works with GS1 standards"
            description="We build on GS1 keys and data carriers instead of inventing new ones, so a passport stays connected to the product as it moves from factory to shelf to recycler."
          />
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8">
            <div className="tw-rounded-2xl tw-bg-white tw-p-8 tw-shadow-sm">
              <div className="tw-mb-6 tw-flex tw-items-center tw-gap-3">
                <FaQrcode className="tw-h-6 tw-w-6 tw-text-primary" />
                <h3 className="tw-text-2xl tw-font-bold tw-text-gray-900">Available today</h3>
              </div>
              <ul className="tw-space-y-5">
                {gs1Today.map((item) => (
                  <li key={item.title}>
                    <p className="tw-font-semibold tw-text-gray-900">{item.title}</p>
                    <p className="tw-text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tw-rounded-2xl tw-border-2 tw-border-dashed tw-border-blue-200 tw-bg-white/70 tw-p-8">
              <div className="tw-mb-6 tw-flex tw-items-center tw-gap-3">
                <FaRoute className="tw-h-6 tw-w-6 tw-text-primary" />
                <h3 className="tw-text-2xl tw-font-bold tw-text-gray-900">On our roadmap</h3>
              </div>
              <ul className="tw-space-y-5">
                {gs1Next.map((item) => (
                  <li key={item.title}>
                    <p className="tw-font-semibold tw-text-gray-900">{item.title}</p>
                    <p className="tw-text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory milestones */}
      <section className="tw-py-20 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title="The dates your members are planning around"
            description="Product identity, data carriers and passports are converging. These are the milestones we hear about most."
          />
          <ol className="tw-mx-auto tw-max-w-3xl tw-space-y-4">
            {milestones.map((m) => (
              <li key={m.date + m.text} className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-2 sm:tw-gap-6 tw-rounded-xl tw-border tw-border-gray-200 tw-p-5">
                <span className="tw-min-w-[120px] tw-font-bold tw-text-primary">{m.date}</span>
                <span className="tw-text-gray-700">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* For GS1 MOs */}
      <section className="tw-py-20 tw-bg-gradient-to-br tw-from-[#1e3c72] tw-via-[#2a5298] tw-to-[#6dd5ed] tw-text-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-mx-auto tw-max-w-4xl">
            <div className="tw-mb-6 tw-flex tw-items-center tw-gap-3">
              <FaHandshake className="tw-h-8 tw-w-8" />
              <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold !tw-text-white">For GS1 Member Organisations</h2>
            </div>
            <p className="tw-mb-8 tw-text-lg tw-leading-relaxed tw-text-white/90">
              Your members are asking how to get from a GTIN to a compliant Digital Product Passport. We would like to help
              you give them a practical answer.
            </p>
            <ul className="tw-mb-10 tw-space-y-4 tw-text-lg">
              <li>• Onboarding programmes for SMEs that start from the GTINs and product data they already hold.</li>
              <li>• Regulatory know-how across ESPR, the Battery Regulation, GPSR, REACH/CLP and Türkiye&apos;s KKDİK.</li>
              <li>• Sector pilots for textiles, batteries, cosmetics and electronics.</li>
            </ul>
            <Link
              href={PARTNER_LINK}
              className="tw-inline-flex tw-items-center tw-rounded-lg tw-bg-white tw-px-8 tw-py-4 tw-font-semibold !tw-text-primary tw-shadow-lg hover:tw-shadow-xl"
            >
              Talk to us about partnering
            </Link>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="tw-py-20 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title="Sessions we are following"
            description="Catch us around these sessions, or book a time that suits you. All times are Istanbul time."
          />
          <div className="tw-mx-auto tw-max-w-4xl tw-overflow-hidden tw-rounded-2xl tw-border tw-border-gray-200">
            {sessions.map((s, i) => (
              <div
                key={s.title}
                className={`tw-flex tw-flex-col sm:tw-flex-row sm:tw-items-center tw-gap-1 sm:tw-gap-6 tw-px-6 tw-py-4 ${i % 2 ? "tw-bg-gray-50" : "tw-bg-white"}`}
              >
                <span className="tw-flex tw-min-w-[170px] tw-items-center tw-gap-2 tw-text-sm tw-font-semibold tw-text-primary">
                  <FaCalendarAlt aria-hidden /> {s.day} · {s.time}
                </span>
                <span className="tw-text-gray-800">{s.title}</span>
              </div>
            ))}
          </div>
          <p className="tw-mt-6 tw-text-center tw-text-gray-600">
            Full programme on the{" "}
            <a href={FORUM_PROGRAMME} target="_blank" rel="noopener noreferrer" className="tw-text-primary tw-underline">
              GS1 in Europe Forum website
            </a>
            .
          </p>
        </div>
      </section>

      <CtaSection
        title="Let's meet in Istanbul"
        description="Tell us what you are working on and we will set up a short meeting during the Forum, or a follow-up demo afterwards."
        primaryCta={{ text: "Book a meeting", href: MEETING_LINK }}
        secondaryCta={{ text: "Explore DPP for ESPR", href: "/platform/frameworks/dpp-in-espr" }}
      />

      <p className="tw-container tw-mx-auto tw-px-4 tw-py-6 tw-text-center tw-text-xs tw-text-gray-500">
        GS1 is a registered trademark of GS1 AISBL. The GS1 in Europe Forum 2026 is organised by GS1 in Europe.
      </p>
    </div>
  );
}
