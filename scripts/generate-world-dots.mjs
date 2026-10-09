/**
 * Generates src/components/Platform/world-dots.ts (dotted world map used by ComplianceMapSection).
 *
 * The map tools are not project dependencies; install them temporarily and run:
 *   npm i --no-save d3-geo@3 topojson-client@3 world-atlas@2
 *   node scripts/generate-world-dots.mjs
 *
 * Data: Natural Earth 1:50m countries (public domain) via world-atlas, Equal Earth projection.
 */
import { geoEqualEarth, geoContains, geoBounds } from "d3-geo";
import { feature } from "topojson-client";
import { createRequire } from "module";
import fs from "fs";
const require = createRequire(import.meta.url);
const world = require("world-atlas/countries-50m.json");

const W = 1000, S = 5, ROW = +(S * 0.866).toFixed(3);
const countries = feature(world, world.objects.countries).features.filter(f => f.id !== "010"); // drop Antarctica
const fc = { type: "FeatureCollection", features: countries };
const projection = geoEqualEarth().fitWidth(W, fc);
// vertical extent from features
let minY = Infinity, maxY = -Infinity;
for (const f of countries) {
  const b = geoBounds(f);
  for (const lat of [b[0][1], b[1][1]]) { const p = projection([0, lat]); if (p) { minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); } }
}
const H = Math.ceil(maxY - minY);
const yOff = minY;

const EU = new Set(["040","056","100","191","196","203","208","233","246","250","276","300","348","372","380","428","440","442","470","528","616","620","642","703","705","724","752"]);
const OTHER = new Set(["124","076","096","116","360","418","458","104","608","702","764","704"]);
const regionOf = (id, lon) => {
  if (id === "840") return "us";
  if (id === "826") return "uk";
  if (id === "792") return "tr";
  if (EU.has(id)) return lon < -35 ? "land" : "eu"; // drop French Guiana etc.
  if (OTHER.has(id)) return "other";
  return "land";
};
const bounds = countries.map(f => geoBounds(f));
const out = { land: [], eu: [], us: [], uk: [], tr: [], other: [] };
const rows = Math.floor(H / ROW);
const cols = Math.floor(W / S);
let n = 0;
for (let r = 0; r <= rows; r++) {
  const shift = r % 2 ? S / 2 : 0;
  for (let c = 0; c <= cols; c++) {
    const x = c * S + shift + S / 2, y = r * ROW + yOff + ROW / 2;
    const ll = projection.invert([x, y]);
    if (!ll || !isFinite(ll[0])) continue;
    const [lon, lat] = ll;
    if (Math.abs(lon) > 180 || Math.abs(lat) > 90) continue;
    const back = projection(ll);
    if (!back || Math.hypot(back[0] - x, back[1] - y) > 0.5) continue; // outside the projection outline
    for (let i = 0; i < countries.length; i++) {
      const b = bounds[i];
      const inLat = lat >= b[0][1] && lat <= b[1][1];
      const inLon = b[0][0] <= b[1][0] ? (lon >= b[0][0] && lon <= b[1][0]) : (lon >= b[0][0] || lon <= b[1][0]);
      if (!inLat || !inLon) continue;
      if (geoContains(countries[i], ll)) { out[regionOf(String(countries[i].id), lon)].push(c, r); n++; break; }
    }
  }
}
const hubs = {
  eu: [4.35, 50.85], us: [-77.04, 38.9], uk: [-0.13, 51.5], tr: [28.98, 41.01],
  ca: [-75.7, 45.42], br: [-47.88, -15.79], sg: [103.82, 1.35],
};
const hubXY = Object.fromEntries(Object.entries(hubs).map(([k, ll]) => { const p = projection(ll); return [k, [+p[0].toFixed(1), +(p[1] - yOff).toFixed(1)]]; }));
const meta = { width: W, height: H, step: S, rowHeight: ROW };
const counts = Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.length / 2]));
console.log({ meta, counts, total: n, hubXY });
// Encode each group as runs per row: [row, startCol, length, startCol, length, ...]
const runs = {};
for (const [k, flat] of Object.entries(out)) {
  const byRow = new Map();
  for (let i = 0; i < flat.length; i += 2) { const c = flat[i], r = flat[i + 1]; if (!byRow.has(r)) byRow.set(r, []); byRow.get(r).push(c); }
  runs[k] = [...byRow.entries()].sort((a, b) => a[0] - b[0]).map(([r, cs]) => {
    cs.sort((a, b) => a - b);
    const row = [r];
    let start = cs[0], prev = cs[0];
    for (let i = 1; i <= cs.length; i++) {
      if (i < cs.length && cs[i] === prev + 1) { prev = cs[i]; continue; }
      row.push(start, prev - start + 1);
      if (i < cs.length) { start = prev = cs[i]; }
    }
    return row;
  });
}
const ts = `/* eslint-disable */
// Generated file – do not edit by hand.
// Source: Natural Earth 1:50m via world-atlas (public domain), Equal Earth projection.
// Each group lists rows of a hex dot grid as [row, startColumn, length, startColumn, length, ...].
export const WORLD_DOTS_META = ${JSON.stringify(meta)} as const;

export type WorldDotGroup = "land" | "eu" | "us" | "uk" | "tr" | "other";

export const WORLD_HUBS: Record<"eu" | "us" | "uk" | "tr" | "ca" | "br" | "sg", [number, number]> = ${JSON.stringify(hubXY)};

export const WORLD_DOT_RUNS: Record<WorldDotGroup, number[][]> = {
${Object.entries(runs).map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`).join("\n")}
};
`;
fs.writeFileSync(new URL("../src/components/Platform/world-dots.ts", import.meta.url), ts);
console.log("bytes", ts.length);
