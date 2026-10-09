"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaChevronDown, FaMapMarkedAlt } from "react-icons/fa";

import { WORLD_DOT_RUNS, WORLD_DOTS_META, WORLD_HUBS } from "./world-dots";

type RegionKey = "eu" | "us" | "uk" | "tr" | "other";
type HubKey = keyof typeof WORLD_HUBS;

type TranslationKey =
  | "platform.usesafe-certification.compliance_eu"
  | "platform.usesafe-certification.compliance_us"
  | "platform.usesafe-certification.compliance_tr"
  | "platform.usesafe-certification.compliance_uk"
  | "platform.usesafe-certification.compliance_other";

interface Region {
  key: RegionKey;
  label: string;
  color: string;
  detailKey: TranslationKey;
  /** Hubs get a pulsing marker; label offsets keep nearby labels (EU/UK) apart. */
  hubs: { hub: HubKey; label: string; dx: number; dy: number; anchor?: "start" | "end" }[];
}

const REGIONS: Region[] = [
  {
    key: "eu",
    label: "European Union",
    color: "#60a5fa",
    detailKey: "platform.usesafe-certification.compliance_eu",
    hubs: [{ hub: "eu", label: "EU", dx: 12, dy: -14 }],
  },
  {
    key: "us",
    label: "United States",
    color: "#22d3ee",
    detailKey: "platform.usesafe-certification.compliance_us",
    hubs: [{ hub: "us", label: "US", dx: 12, dy: 22 }],
  },
  {
    key: "uk",
    label: "United Kingdom",
    color: "#a78bfa",
    detailKey: "platform.usesafe-certification.compliance_uk",
    hubs: [{ hub: "uk", label: "UK", dx: -12, dy: -12, anchor: "end" }],
  },
  {
    key: "tr",
    label: "Türkiye",
    color: "#fb7185",
    detailKey: "platform.usesafe-certification.compliance_tr",
    hubs: [{ hub: "tr", label: "TR", dx: 12, dy: 20 }],
  },
  {
    key: "other",
    label: "Other Regions",
    color: "#34d399",
    detailKey: "platform.usesafe-certification.compliance_other",
    hubs: [
      { hub: "ca", label: "CA", dx: -12, dy: -12, anchor: "end" },
      { hub: "br", label: "BR", dx: 12, dy: 7 },
      { hub: "sg", label: "ASEAN", dx: 12, dy: 7 },
    ],
  },
];

const REGION_COLOR = Object.fromEntries(REGIONS.map((r) => [r.key, r.color])) as Record<RegionKey, string>;

const { width: MAP_W, height: MAP_H, step: STEP, rowHeight: ROW_H } = WORLD_DOTS_META;
const DOT_SIZE = STEP * 0.78;
const ORIGIN: HubKey = "tr"; // UseSafe is built in Istanbul

/** Turns row runs into one path; each run is a dashed line whose zero-length dashes render as dots. */
const runsToPath = (rows: number[][]) =>
  rows
    .map(([row, ...runs]) => {
      const y = (row * ROW_H + ROW_H / 2).toFixed(2);
      const shift = row % 2 ? STEP / 2 : 0;
      let d = "";
      for (let i = 0; i < runs.length; i += 2) {
        const x = runs[i] * STEP + shift + STEP / 2;
        d += `M${x} ${y}h${((runs[i + 1] - 1) * STEP + 0.01).toFixed(2)}`;
      }
      return d;
    })
    .join("");

const arcPath = (from: [number, number], to: [number, number]) => {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const dist = Math.hypot(x2 - x1, y2 - y1);
  const cx = (x1 + x2) / 2;
  const cy = Math.max(4, Math.min(y1, y2) - dist * 0.28);
  return `M${x1} ${y1}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2} ${y2}`;
};

const mapStyles = `
.usm-pulse { transform-box: fill-box; transform-origin: center; animation: usm-pulse 2.4s ease-out infinite; }
.usm-arc { stroke-dasharray: 4 6; animation: usm-dash 1.6s linear infinite; }
@keyframes usm-pulse { 0% { transform: scale(0.6); opacity: 0.9; } 100% { transform: scale(2.6); opacity: 0; } }
@keyframes usm-dash { to { stroke-dashoffset: -20; } }
@media (prefers-reduced-motion: reduce) { .usm-pulse, .usm-arc { animation: none; } }
`;

const ComplianceMapSection = () => {
  const t = useTranslations();
  const [open, setOpen] = useState<RegionKey | null>("eu");
  const [hovered, setHovered] = useState<RegionKey | null>(null);
  const focus = hovered ?? open;

  const paths = useMemo(
    () => ({
      land: runsToPath(WORLD_DOT_RUNS.land),
      ...Object.fromEntries(REGIONS.map((r) => [r.key, runsToPath(WORLD_DOT_RUNS[r.key])])),
    }) as Record<"land" | RegionKey, string>,
    [],
  );

  const arcs = useMemo(
    () =>
      REGIONS.flatMap((region) =>
        region.hubs
          .filter((h) => h.hub !== ORIGIN)
          .map((h) => ({ key: `${region.key}-${h.hub}`, region: region.key, d: arcPath(WORLD_HUBS[ORIGIN], WORLD_HUBS[h.hub]) })),
      ),
    [],
  );

  const toggle = (key: RegionKey) => setOpen((prev) => (prev === key ? null : key));
  const dim = (key: RegionKey) => (focus && focus !== key ? 0.4 : 1);

  return (
    <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
      <style>{mapStyles}</style>
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <div className="tw-text-center tw-mb-14">
          <div className="tw-inline-flex tw-items-center tw-mb-4 tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-[#1e3c72] tw-font-medium tw-text-sm tw-rounded-full">
            <FaMapMarkedAlt className="tw-w-4 tw-h-4 tw-mr-2" aria-hidden />
            Global Compliance Coverage
          </div>
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6 tw-text-gray-900">
            {t("platform.usesafe-certification.compliance_title")}
          </h2>
          <p className="tw-text-xl tw-text-gray-700 tw-max-w-3xl tw-mx-auto">
            {t("platform.usesafe-certification.compliance_description")}
          </p>
        </div>

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-5 tw-gap-8 lg:tw-gap-10 tw-items-start lg:tw-items-center">
          {/* Dotted world map */}
          <div className="lg:tw-col-span-3">
            <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-bg-gradient-to-br tw-from-[#0b1d3a] tw-via-[#13305e] tw-to-[#1e3c72] tw-p-4 sm:tw-p-6 tw-shadow-2xl">
              <div className="tw-pointer-events-none tw-absolute -tw-top-24 -tw-right-24 tw-h-72 tw-w-72 tw-rounded-full tw-bg-[#43cea2]/20 tw-blur-3xl" />
              <div className="tw-pointer-events-none tw-absolute -tw-bottom-24 -tw-left-24 tw-h-72 tw-w-72 tw-rounded-full tw-bg-[#6dd5ed]/20 tw-blur-3xl" />

              <svg
                viewBox={`0 0 ${MAP_W} ${MAP_H}`}
                className="tw-relative tw-block tw-h-auto tw-w-full"
                role="img"
                aria-label="World map showing UseSafe regulatory coverage in the European Union, the United States, the United Kingdom, Türkiye, Canada, Brazil and ASEAN countries"
              >
                <defs>
                  <filter id="usm-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Land */}
                <path d={paths.land} stroke="#9fb3d1" strokeOpacity={0.32} strokeWidth={DOT_SIZE} strokeLinecap="round" strokeDasharray={`0 ${STEP}`} fill="none" />

                {/* Covered regions */}
                {REGIONS.map((region) => (
                  <path
                    key={region.key}
                    d={paths[region.key]}
                    stroke={region.color}
                    strokeOpacity={dim(region.key)}
                    strokeWidth={DOT_SIZE}
                    strokeLinecap="round"
                    strokeDasharray={`0 ${STEP}`}
                    fill="none"
                    filter={focus === region.key ? "url(#usm-glow)" : undefined}
                    className="tw-cursor-pointer tw-transition-[stroke-opacity] tw-duration-300"
                    onMouseEnter={() => setHovered(region.key)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => toggle(region.key)}
                  />
                ))}

                {/* Connections from Istanbul */}
                {arcs.map((arc) => {
                  return (
                    <path
                      key={arc.key}
                      d={arc.d}
                      fill="none"
                      stroke={REGION_COLOR[arc.region]}
                      strokeWidth={1.8}
                      strokeOpacity={focus ? (focus === arc.region ? 0.95 : 0.2) : 0.55}
                      className="usm-arc tw-pointer-events-none tw-transition-[stroke-opacity] tw-duration-300"
                    />
                  );
                })}

                {/* Hub markers */}
                {REGIONS.flatMap((region) =>
                  region.hubs.map((h) => {
                    const [x, y] = WORLD_HUBS[h.hub];
                    const active = !focus || focus === region.key;
                    return (
                      <g
                        key={`${region.key}-${h.hub}`}
                        className="tw-cursor-pointer"
                        opacity={active ? 1 : 0.45}
                        onMouseEnter={() => setHovered(region.key)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => toggle(region.key)}
                      >
                        <circle cx={x} cy={y} r={7} fill={region.color} className="usm-pulse" />
                        <circle cx={x} cy={y} r={5.5} fill={region.color} stroke="#0b1d3a" strokeWidth={2} />
                        <text
                          x={x + h.dx}
                          y={y + h.dy}
                          textAnchor={h.anchor ?? "start"}
                          fill="#ffffff"
                          fontSize={20}
                          fontWeight={700}
                          style={{ paintOrder: "stroke", stroke: "#0b1d3a", strokeWidth: 4, strokeLinejoin: "round" }}
                        >
                          {h.label}
                        </text>
                      </g>
                    );
                  }),
                )}
              </svg>

              {/* Legend */}
              <div className="tw-relative tw-mt-4 tw-flex tw-flex-wrap tw-justify-center tw-gap-2">
                {REGIONS.map((region) => (
                  <button
                    key={region.key}
                    type="button"
                    aria-pressed={open === region.key}
                    onClick={() => toggle(region.key)}
                    onMouseEnter={() => setHovered(region.key)}
                    onMouseLeave={() => setHovered(null)}
                    className={`tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-px-3 tw-py-1.5 tw-text-xs sm:tw-text-sm tw-font-medium tw-transition-colors ${
                      open === region.key
                        ? "tw-border-white/60 tw-bg-white/20 tw-text-white"
                        : "tw-border-white/15 tw-bg-white/5 tw-text-white/80 hover:tw-bg-white/10"
                    }`}
                  >
                    <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full" style={{ backgroundColor: region.color }} />
                    {region.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Region details */}
          <div className="lg:tw-col-span-2">
            <div className="tw-space-y-3">
              {REGIONS.map((region) => {
                const isOpen = open === region.key;
                return (
                  <div
                    key={region.key}
                    className={`tw-overflow-hidden tw-rounded-xl tw-bg-white tw-shadow-md tw-transition-shadow tw-duration-300 ${isOpen ? "tw-shadow-xl" : "hover:tw-shadow-lg"}`}
                    style={{ borderLeft: `4px solid ${isOpen ? region.color : "transparent"}` }}
                    onMouseEnter={() => setHovered(region.key)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(region.key)}
                      className="tw-flex tw-w-full tw-cursor-pointer tw-items-center tw-justify-between tw-border-0 tw-bg-transparent tw-px-5 tw-py-4 tw-text-left focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-blue-400"
                      aria-expanded={isOpen}
                      aria-controls={`compliance-panel-${region.key}`}
                    >
                      <span className="tw-flex tw-items-center tw-gap-3 tw-text-lg tw-font-semibold tw-text-gray-900">
                        <span className="tw-h-3 tw-w-3 tw-rounded-full" style={{ backgroundColor: region.color }} />
                        {region.label}
                      </span>
                      <FaChevronDown
                        aria-hidden
                        className={`tw-h-4 tw-w-4 tw-text-gray-500 tw-transition-transform ${isOpen ? "tw-rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      id={`compliance-panel-${region.key}`}
                      className={`tw-overflow-hidden tw-transition-all tw-duration-500 tw-ease-in-out ${
                        isOpen ? "tw-max-h-96 tw-opacity-100" : "tw-max-h-0 tw-opacity-0"
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <p className="tw-mb-0 tw-border-t tw-border-gray-100 tw-px-5 tw-pb-5 tw-pt-4 tw-text-base tw-leading-relaxed tw-text-gray-700">
                        {t(region.detailKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="tw-mt-6 tw-rounded-xl tw-bg-gradient-to-r tw-from-[#185a9d] tw-to-[#43cea2] tw-p-6 tw-text-center tw-text-white">
              <h3 className="tw-mb-2 tw-text-xl tw-font-bold !tw-text-white">Ready to Get Started?</h3>
              <p className="tw-mb-4 tw-text-base tw-text-white/90">Explore our compliance solutions for your region</p>
              <Link
                href="/contact"
                className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-lg tw-bg-white tw-px-6 tw-py-3 tw-text-base tw-font-semibold !tw-text-[#185a9d] tw-transition-colors hover:tw-bg-gray-100"
              >
                Contact Us <BsArrowRight aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceMapSection;
