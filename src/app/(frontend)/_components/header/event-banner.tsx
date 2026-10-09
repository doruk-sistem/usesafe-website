"use client";

import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

/** Banner is hidden automatically once the Forum is over (Istanbul time). */
const EVENT_END = new Date("2026-10-16T00:00:00+03:00");

export default function EventBanner() {
  if (Date.now() >= EVENT_END.getTime()) return null;

  return (
    <div className="tw-bg-gradient-to-r tw-from-[#185a9d] tw-to-[#43cea2] tw-text-white">
      <Link
        href="/gs1-forum-2026"
        className="tw-container tw-mx-auto tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-x-3 tw-gap-y-1 tw-py-2 tw-px-4 tw-text-xs sm:tw-text-sm tw-text-center !tw-text-white hover:tw-opacity-90"
      >
        <span className="tw-font-semibold tw-uppercase tw-tracking-wide">Proud sponsor</span>
        <span className="tw-hidden sm:tw-inline">·</span>
        <span>
          Meet UseSafe at the <strong>GS1 in Europe Forum 2026</strong>, Istanbul, 12–15 October
        </span>
        <span className="tw-inline-flex tw-items-center tw-gap-1 tw-underline tw-underline-offset-2">
          Book a meeting <BsArrowRight aria-hidden />
        </span>
      </Link>
    </div>
  );
}
