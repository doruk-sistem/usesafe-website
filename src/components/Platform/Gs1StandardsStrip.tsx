"use client";

import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaBarcode } from "react-icons/fa";

/** Short "built on GS1 standards" message used on key pages. */
export default function Gs1StandardsStrip() {
  return (
    <section className="tw-bg-white tw-py-12">
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <div className="tw-mx-auto tw-flex tw-max-w-5xl tw-flex-col md:tw-flex-row tw-items-start md:tw-items-center tw-gap-6 tw-rounded-2xl tw-border tw-border-blue-100 tw-bg-blue-50/60 tw-p-6 md:tw-p-8">
          <div className="tw-flex tw-h-14 tw-w-14 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-xl tw-bg-white tw-text-primary tw-shadow-sm">
            <FaBarcode className="tw-h-7 tw-w-7" aria-hidden />
          </div>
          <div className="tw-flex-1">
            <h2 className="tw-mb-2 tw-text-xl md:tw-text-2xl tw-font-bold tw-text-gray-900">Built around GS1 identifiers</h2>
            <p className="tw-mb-0 tw-text-gray-700">
              Every UseSafe product record is keyed by its GTIN and every passport opens from a QR code. Support for GS1
              Digital Link and EPCIS 2.0 is on our roadmap.
            </p>
          </div>
          <Link
            href="/gs1-forum-2026"
            className="tw-inline-flex tw-flex-shrink-0 tw-items-center tw-gap-2 tw-font-semibold !tw-text-primary hover:tw-underline"
          >
            Meet us at the GS1 in Europe Forum <BsArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
