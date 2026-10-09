"use client";

import { motion, useReducedMotion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import React from "react";
import { FaBalanceScale, FaCashRegister, FaHandshake, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

const NAVY = "#0f2a4a";
const BLUE = "#185a9d";
const TEAL = "#43cea2";

/** Example GS1 Digital Link (GS1's documentation GTIN on the reserved example.com domain). */
const DIGITAL_LINK = "https://id.example.com/01/09506000134352/10/A26/21/0154";

const SEGMENTS = [
  { ai: "01", value: "09506000134352", label: "GTIN" },
  { ai: "10", value: "A26", label: "Batch" },
  { ai: "21", value: "0154", label: "Serial" },
];

const VIEWS = [
  { icon: FaCashRegister, title: "Checkout", text: "Retail scanners read the GTIN", tag: "Sunrise 2027" },
  { icon: FaMobileAlt, title: "Consumers", text: "Passport, care & repair info", tag: "DPP" },
  { icon: FaBalanceScale, title: "Authorities", text: "Compliance evidence on demand", tag: "ESPR · GPSR" },
];

const ProductBox = () => (
  <svg viewBox="0 0 160 150" className="tw-h-full tw-w-full" aria-hidden>
    <defs>
      <linearGradient id="gs1v-front" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#eef4ff" />
        <stop offset="100%" stopColor="#dbe7fb" />
      </linearGradient>
    </defs>
    <ellipse cx="80" cy="142" rx="62" ry="5" fill={NAVY} opacity="0.08" />
    {/* top and side faces */}
    <path d="M22 34 L80 14 L138 34 L80 54 Z" fill="#c9daf6" />
    <path d="M138 34 L138 116 L80 138 L80 54 Z" fill="#a9c3ee" />
    {/* front face */}
    <path d="M22 34 L80 54 L80 138 L22 116 Z" fill="url(#gs1v-front)" />
    <path d="M51 24 L109 44" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="6" />
    {/* label lines on the side */}
    <g stroke="#ffffff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round">
      <line x1="92" y1="70" x2="126" y2="57" />
      <line x1="92" y1="80" x2="118" y2="70" />
    </g>
  </svg>
);

/**
 * Hero visual for the GS1 in Europe Forum page: one GS1 Digital Link QR on a product,
 * resolved to the right view for checkout, consumers and authorities.
 */
export default function Gs1ForumVisual() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.5, delay: reduce ? 0 : delay, ease: "easeOut" as const },
  });

  return (
    <figure
      className="tw-relative tw-mx-auto tw-m-0 tw-w-full tw-max-w-[560px] tw-py-2"
      aria-label="A GS1 Digital Link QR code on a product resolves to different views for retail checkout, consumers and authorities"
    >
      {/* Digital Link URI */}
      <motion.div {...fadeUp(0)} className="tw-rounded-2xl tw-border tw-border-white/70 tw-bg-white/95 tw-p-4 tw-shadow-xl">
        <div className="tw-mb-2 tw-flex tw-items-center tw-justify-between">
          <span className="tw-text-[10px] sm:tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.14em]" style={{ color: TEAL }}>
            GS1 Digital Link
          </span>
          <span className="tw-rounded-full tw-bg-gray-100 tw-px-2 tw-py-0.5 tw-text-[10px] tw-text-gray-500">Example</span>
        </div>
        <p className="tw-mb-0 tw-pb-4 tw-font-mono tw-text-[11px] sm:tw-text-[13px] tw-leading-[2.2]" style={{ color: NAVY }}>
          <span className="tw-text-gray-400">https://id.example.com</span>
          {SEGMENTS.map((s, i) => (
            <motion.span
              key={s.ai}
              className="tw-whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.35 + i * 0.25 }}
            >
              <span className="tw-text-gray-400">/</span>
              <span className="tw-font-bold" style={{ color: TEAL }}>{s.ai}</span>
              <span className="tw-text-gray-400">/</span>
              <span className="tw-relative tw-inline-block tw-rounded tw-bg-blue-50 tw-px-1 tw-font-semibold tw-leading-normal">
                {s.value}
                <span className="tw-absolute tw-left-1/2 tw-top-full tw-mt-0.5 -tw-translate-x-1/2 tw-font-sans tw-text-[9px] sm:tw-text-[10px] tw-font-normal tw-uppercase tw-tracking-wide tw-text-gray-400">
                  {s.label}
                </span>
              </span>
            </motion.span>
          ))}
        </p>
      </motion.div>

      {/* Product with QR → resolved views */}
      <div className="tw-mt-4 tw-grid tw-grid-cols-1 sm:tw-grid-cols-[190px_1fr] tw-gap-4 sm:tw-items-center">
        <motion.div {...fadeUp(0.2)} className="tw-relative tw-mx-auto tw-w-[190px] tw-rounded-2xl tw-border tw-border-white/70 tw-bg-white/95 tw-p-3 tw-shadow-xl">
          <div className="tw-relative tw-h-[150px]">
            <ProductBox />
            {/* QR printed on the front face */}
            <div className="tw-absolute tw-left-[27px] tw-top-[52px] tw-overflow-hidden tw-rounded tw-bg-white tw-p-1 tw-shadow" style={{ transform: "skewY(19deg)" }}>
              <QRCodeSVG value={DIGITAL_LINK} size={44} fgColor={NAVY} bgColor="#ffffff" level="M" />
              {!reduce && (
                <motion.span
                  className="tw-absolute tw-left-0 tw-right-0 tw-h-[2px]"
                  style={{ background: TEAL, boxShadow: `0 0 8px ${TEAL}` }}
                  initial={{ top: "4%" }}
                  animate={{ top: ["4%", "92%", "4%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </div>
          </div>
          <p className="tw-mb-0 tw-mt-1 tw-text-center tw-text-[11px] tw-font-semibold" style={{ color: NAVY }}>
            One QR on pack
          </p>
          <p className="tw-mb-0 tw-text-center tw-text-[10px] tw-text-gray-500">GTIN + batch + serial</p>
        </motion.div>

        <div className="tw-relative sm:tw-pl-6">
          {/* resolver spine */}
          <div
            className="tw-absolute tw-bottom-6 tw-left-1.5 tw-top-6 tw-hidden sm:tw-block tw-w-[2px] tw-rounded-full"
            style={{ background: `linear-gradient(${TEAL}, ${BLUE})`, opacity: 0.6 }}
          />
          {!reduce && (
            <motion.span
              className="tw-absolute tw-left-[3px] tw-hidden sm:tw-block tw-h-2.5 tw-w-2.5 tw-rounded-full"
              style={{ background: TEAL, boxShadow: `0 0 10px ${TEAL}`, marginLeft: -4 }}
              initial={{ top: "12%" }}
              animate={{ top: ["12%", "84%", "12%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <div className="tw-flex tw-flex-col tw-gap-3">
            {VIEWS.map(({ icon: Icon, title, text, tag }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.4 + i * 0.15)}
                className="tw-relative tw-flex tw-items-center tw-gap-3 tw-rounded-2xl tw-border tw-border-white/70 tw-bg-white/95 tw-px-4 tw-py-3 tw-shadow-lg"
              >
                <span className="tw-absolute -tw-left-[18px] tw-top-1/2 tw-hidden sm:tw-block tw-h-[2px] tw-w-[18px] -tw-translate-y-1/2" style={{ background: TEAL, opacity: 0.6 }} />
                <span className="tw-flex tw-h-9 tw-w-9 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-xl" style={{ backgroundColor: `${TEAL}22`, color: BLUE }}>
                  <Icon className="tw-h-4 tw-w-4" aria-hidden />
                </span>
                <span className="tw-min-w-0 tw-flex-1 tw-leading-tight">
                  <span className="tw-block tw-text-sm tw-font-semibold" style={{ color: NAVY }}>{title}</span>
                  <span className="tw-block tw-text-[11px] sm:tw-text-xs tw-text-gray-500">{text}</span>
                </span>
                <span className="tw-hidden sm:tw-inline tw-whitespace-nowrap tw-rounded-md tw-border tw-border-blue-100 tw-bg-blue-50 tw-px-2 tw-py-0.5 tw-text-[10px] tw-font-semibold" style={{ color: BLUE }}>
                  {tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner + event */}
      <motion.div {...fadeUp(0.9)} className="tw-mt-4 tw-flex tw-flex-wrap tw-justify-center sm:tw-justify-start tw-gap-2">
        <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-px-3 tw-py-1.5 tw-text-xs tw-font-semibold tw-text-white tw-shadow-lg" style={{ background: `linear-gradient(90deg, ${BLUE}, ${TEAL})` }}>
          <FaHandshake aria-hidden /> GS1 Türkiye Solution Partner
        </span>
        <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-white/40 tw-bg-white/15 tw-px-3 tw-py-1.5 tw-text-xs tw-font-medium tw-text-white tw-backdrop-blur">
          <FaMapMarkerAlt aria-hidden /> Istanbul · 12–15 Oct 2026
        </span>
      </motion.div>
    </figure>
  );
}
