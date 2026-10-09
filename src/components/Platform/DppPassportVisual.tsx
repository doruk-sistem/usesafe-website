"use client";

import { motion, useReducedMotion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import React from "react";
import {
  FaCheckCircle,
  FaFlask,
  FaLayerGroup,
  FaLeaf,
  FaRecycle,
  FaTools,
  FaWrench,
} from "react-icons/fa";

const NAVY = "#0f2a4a";
const BLUE = "#185a9d";
const TEAL = "#43cea2";

/** Illustrative passport content for an ESPR priority product group (furniture). */
const SAMPLE = {
  product: "Ergonomic Office Chair",
  model: "Model TC-200",
  gtin: "09506000134352",
  qrUrl: "https://usesafe.com/platform/frameworks/dpp-in-espr",
  rows: [
    { icon: FaLayerGroup, label: "Materials", value: "Recycled aluminium base, glass-fibre PA6 frame, polyester mesh" },
    { icon: FaLeaf, label: "Carbon footprint", value: "48 kg CO₂e (cradle-to-gate)" },
    { icon: FaTools, label: "Spare parts", value: "Available until 2036" },
    { icon: FaFlask, label: "Substances of concern", value: "None above 0.1 % w/w" },
  ],
  meters: [
    { label: "Recycled content", value: 42, display: "42 %" },
    { label: "Repairability score", value: 82, display: "8.2 / 10" },
  ],
  frameworks: ["ESPR", "REACH", "GPSR"],
};

const ChairIllustration = () => (
  <svg viewBox="0 0 160 180" className="tw-h-full tw-w-full" aria-hidden>
    <defs>
      <linearGradient id="dpp-chair-back" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a5298" />
        <stop offset="100%" stopColor="#1e3c72" />
      </linearGradient>
      <clipPath id="dpp-chair-mesh">
        <rect x="52" y="16" width="56" height="62" rx="15" />
      </clipPath>
    </defs>
    <ellipse cx="80" cy="170" rx="60" ry="6" fill={NAVY} opacity="0.08" />
    {/* Backrest with mesh */}
    <rect x="48" y="12" width="64" height="70" rx="18" fill="url(#dpp-chair-back)" />
    <g clipPath="url(#dpp-chair-mesh)" stroke="#6dd5ed" strokeOpacity="0.35" strokeWidth="1">
      {Array.from({ length: 9 }, (_, i) => (
        <line key={`h${i}`} x1="48" x2="112" y1={20 + i * 7} y2={20 + i * 7} />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`v${i}`} y1="12" y2="82" x1={55 + i * 7} x2={55 + i * 7} />
      ))}
    </g>
    {/* Spine, seat, armrests */}
    <rect x="76" y="78" width="8" height="22" rx="3" fill="#334155" />
    <path d="M36 104 V86 H54" stroke={NAVY} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M124 104 V86 H106" stroke={NAVY} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="36" y="96" width="88" height="20" rx="10" fill="#2a5298" />
    <rect x="42" y="98" width="76" height="6" rx="3" fill="#ffffff" opacity="0.18" />
    {/* Gas lift and five-star base */}
    <rect x="76" y="116" width="8" height="26" rx="2" fill="#94a3b8" />
    <g stroke={NAVY} strokeWidth="5" strokeLinecap="round">
      <line x1="80" y1="144" x2="28" y2="156" />
      <line x1="80" y1="144" x2="54" y2="162" />
      <line x1="80" y1="144" x2="106" y2="162" />
      <line x1="80" y1="144" x2="132" y2="156" />
    </g>
    <g fill={NAVY}>
      <circle cx="28" cy="160" r="5" />
      <circle cx="54" cy="166" r="5" />
      <circle cx="106" cy="166" r="5" />
      <circle cx="132" cy="160" r="5" />
    </g>
    {/* Product tag with the passport QR */}
    <rect x="96" y="104" width="18" height="18" rx="3" fill="#ffffff" stroke={TEAL} strokeWidth="1.5" />
    <path d="M100 108h4v4h-4zM106 114h4v4h-4zM100 116h3M107 108h3" stroke={NAVY} strokeWidth="1.5" />
  </svg>
);

const FloatingBadge = ({
  icon: Icon,
  title,
  text,
  className,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  className: string;
  delay: number;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`tw-absolute tw-z-20 tw-hidden sm:tw-flex tw-items-center tw-gap-3 tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/95 tw-px-4 tw-py-3 tw-shadow-xl ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -6, 0] }}
      transition={reduce ? { duration: 0.4, delay } : { opacity: { duration: 0.5, delay }, y: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" } }}
    >
      <span className="tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-xl" style={{ backgroundColor: `${TEAL}22`, color: BLUE }}>
        <Icon className="tw-h-4 tw-w-4" aria-hidden />
      </span>
      <span className="tw-leading-tight">
        <span className="tw-block tw-text-xs tw-font-semibold" style={{ color: NAVY }}>{title}</span>
        <span className="tw-block tw-text-[11px] tw-text-gray-500">{text}</span>
      </span>
    </motion.div>
  );
};

/**
 * Hero visual for the "DPP in ESPR" page: a sample Digital Product Passport for an
 * office chair (furniture is one of the ESPR Working Plan 2025–2030 priority product groups).
 */
export default function DppPassportVisual() {
  const reduce = useReducedMotion();

  return (
    <figure
      className="tw-relative tw-mx-auto tw-w-full tw-max-w-[560px] tw-px-0 sm:tw-px-6 tw-py-2 sm:tw-pt-8 sm:tw-pb-16 tw-m-0"
      aria-label="Sample Digital Product Passport for an office chair, showing materials, recycled content, carbon footprint, repairability, spare parts and substances of concern"
    >
      <FloatingBadge icon={FaWrench} title="Repair guide" text="Tool-free disassembly" className="-tw-top-1 tw-right-0" delay={0.6} />
      <FloatingBadge icon={FaRecycle} title="End of life" text="Take-back & recycling route" className="tw-bottom-0 tw-left-2 sm:tw-left-4" delay={0.9} />

      <motion.div
        className="tw-relative tw-z-10 tw-rounded-3xl tw-border tw-border-white/70 tw-bg-white/95 tw-p-4 sm:tw-p-6 tw-text-left tw-shadow-2xl tw-backdrop-blur"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="tw-mb-4 tw-flex tw-items-start tw-justify-between tw-gap-3">
          <div>
            <p className="tw-mb-1 tw-text-[10px] sm:tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.14em]" style={{ color: TEAL }}>
              Digital Product Passport
            </p>
            <p className="tw-mb-0 tw-text-lg sm:tw-text-xl tw-font-bold tw-leading-tight" style={{ color: NAVY }}>
              {SAMPLE.product}
            </p>
            <p className="tw-mb-0 tw-text-[11px] sm:tw-text-xs tw-text-gray-500">
              {SAMPLE.model} · GTIN {SAMPLE.gtin}
            </p>
          </div>
          <div className="tw-flex tw-flex-col tw-items-end tw-gap-1.5">
            <span className="tw-whitespace-nowrap tw-rounded-full tw-px-2.5 tw-py-1 tw-text-[10px] sm:tw-text-xs tw-font-semibold tw-text-white" style={{ background: `linear-gradient(90deg, ${BLUE}, ${TEAL})` }}>
              ESPR · Furniture
            </span>
            <span className="tw-rounded-full tw-bg-gray-100 tw-px-2 tw-py-0.5 tw-text-[10px] tw-text-gray-500">Sample data</span>
          </div>
        </div>

        <div className="tw-grid tw-grid-cols-[96px_1fr] sm:tw-grid-cols-[140px_1fr] tw-gap-4">
          {/* Product + QR */}
          <div className="tw-flex tw-flex-col tw-gap-3">
            <div className="tw-aspect-[8/9] tw-rounded-2xl tw-bg-gradient-to-br tw-from-blue-50 tw-to-teal-50 tw-p-2">
              <ChairIllustration />
            </div>
            <div className="tw-hidden sm:tw-flex tw-flex-col tw-items-center tw-gap-1 tw-rounded-2xl tw-border tw-border-gray-100 tw-p-2">
              <QRCodeSVG value={SAMPLE.qrUrl} size={88} fgColor={NAVY} bgColor="#ffffff" level="M" />
              <span className="tw-text-[10px] tw-text-gray-500">Scan to open passport</span>
            </div>
          </div>

          {/* Passport data */}
          <div className="tw-flex tw-flex-col tw-gap-2.5 sm:tw-gap-3">
            {SAMPLE.meters.map((m, i) => (
              <div key={m.label}>
                <div className="tw-mb-1 tw-flex tw-items-baseline tw-justify-between tw-text-[11px] sm:tw-text-xs">
                  <span className="tw-font-medium tw-text-gray-600">{m.label}</span>
                  <span className="tw-font-bold" style={{ color: NAVY }}>{m.display}</span>
                </div>
                <div className="tw-h-2 tw-overflow-hidden tw-rounded-full tw-bg-gray-100">
                  <motion.div
                    className="tw-h-full tw-rounded-full"
                    style={{ background: `linear-gradient(90deg, ${BLUE}, ${TEAL})` }}
                    initial={{ width: reduce ? `${m.value}%` : 0 }}
                    animate={{ width: `${m.value}%` }}
                    transition={{ duration: reduce ? 0 : 1.1, delay: reduce ? 0 : 0.4 + i * 0.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}

            <ul className="tw-m-0 tw-flex tw-list-none tw-flex-col tw-gap-2 tw-p-0">
              {SAMPLE.rows.map(({ icon: Icon, label, value }, i) => (
                <motion.li
                  key={label}
                  className={`tw-flex tw-items-start tw-gap-2.5 ${i > 1 ? "tw-hidden sm:tw-flex" : ""}`}
                  initial={{ opacity: 0, x: reduce ? 0 : 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.5 + i * 0.12 }}
                >
                  <span className="tw-mt-0.5 tw-flex tw-h-6 tw-w-6 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-bg-blue-50" style={{ color: BLUE }}>
                    <Icon className="tw-h-3 tw-w-3" aria-hidden />
                  </span>
                  <span className="tw-leading-snug">
                    <span className="tw-block tw-text-[10px] sm:tw-text-[11px] tw-uppercase tw-tracking-wide tw-text-gray-400">{label}</span>
                    <span className="tw-block tw-text-[11px] sm:tw-text-xs tw-font-medium" style={{ color: NAVY }}>{value}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="tw-mt-4 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2 tw-border-t tw-border-gray-100 tw-pt-3">
          <div className="tw-flex tw-gap-1.5">
            {SAMPLE.frameworks.map((f) => (
              <span key={f} className="tw-rounded-md tw-border tw-border-blue-100 tw-bg-blue-50 tw-px-2 tw-py-0.5 tw-text-[10px] sm:tw-text-xs tw-font-semibold" style={{ color: BLUE }}>
                {f}
              </span>
            ))}
          </div>
          <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-text-[11px] sm:tw-text-xs tw-font-semibold" style={{ color: "#0f9d74" }}>
            <FaCheckCircle aria-hidden /> Verified on UseSafe
          </span>
        </div>
      </motion.div>
    </figure>
  );
}
