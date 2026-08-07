const months = [
  { name: "Jan", theme: "Start Over", color: "#0188FF" },
  { name: "Feb", theme: "Build", color: "#5165F3" },
  { name: "Mar", theme: "Consistency", color: "#8350EC" },
  { name: "Apr", theme: "Health Reset", color: "#B639E3" },
  { name: "May", theme: "Relationships", color: "#D330CA" },
  { name: "Jun", theme: "Learning", color: "#E02FA8" },
  { name: "Jul", theme: "Community", color: "#EE2E82" },
  { name: "Aug", theme: "Confidence", color: "#FB2E60" },
  { name: "Sep", theme: "Purpose", color: "#FF344E" },
  { name: "Oct", theme: "Master", color: "#FF3F43" },
  { name: "Nov", theme: "Reflection", color: "#FF4B37" },
  { name: "Dec", theme: "Leardership", color: "#FF5A28" },
];

const lineGradient = `linear-gradient(90deg, ${months
  .map((m, i) => `${m.color} ${(i / (months.length - 1)) * 100}%`)
  .join(", ")})`;

type Month = (typeof months)[number];

function MonthPill({ m }: { m: Month }) {
  return (
    <span
      className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 px-3 py-1 font-body text-[14px] font-semibold"
      style={{ borderColor: m.color, color: m.color }}
    >
      {m.name}
    </span>
  );
}

function MonthNode({ m, size = 60 }: { m: Month; size?: number }) {
  const ratio = size / 60;
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <div
        className="absolute rounded-full"
        style={{ width: size, height: size, background: m.color, opacity: 0.4, boxShadow: "0 2.892px 2.892px 0 rgba(0,0,0,0.25)" }}
      />
      <div
        className="absolute rounded-full"
        style={{ width: 49.88 * ratio, height: 49.88 * ratio, background: m.color, opacity: 0.4, boxShadow: "0 2.892px 2.892px 0 rgba(0,0,0,0.25)" }}
      />
      <div
        className="absolute rounded-full"
        style={{ width: 35.422 * ratio, height: 35.422 * ratio, background: m.color, opacity: 0.4, boxShadow: "0 2.892px 2.892px 0 rgba(0,0,0,0.25)" }}
      />
      <div
        className="absolute rounded-full bg-white"
        style={{
          width: 26 * ratio,
          height: 26 * ratio,
          boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25) inset, 0 2.892px 2.892px 0 rgba(0,0,0,0.25)",
        }}
      />
    </div>
  );
}

// Mobile serpentine layout: 3 months per row, 4 rows, alternating direction —
// row 0 reads left→right (Jan, Feb, Mar), row 1 reads right→left (Jun, May, Apr)
// visually so the timeline snakes down the page, connected by looping curves
// on alternating sides.
const monthRows = Array.from({ length: 4 }, (_, r) => {
  const slice = months
    .slice(r * 3, r * 3 + 3)
    .map((m, i) => ({ m, globalIndex: r * 3 + i }));
  return r % 2 === 0 ? slice : slice.slice().reverse();
});

// Mobile timeline coordinate system — a virtual canvas that the SVG lines/
// curves and the HTML node/label overlays both position against as
// percentages, so the whole thing scales responsively while staying in sync.
const VW = 340;
const VH = 890;
const COL_X = [95, 170, 245]; // left / middle / right node columns
const ROW_Y = [130, 330, 530, 740];
const CURVE_RADIUS = 92;
const LABEL_NEAR = 34; // gap from node center to the nearest label edge

function pct(value: number, total: number) {
  return `${(value / total) * 100}%`;
}

function rowLinePath(y: number) {
  return `M ${COL_X[0]} ${y} H ${COL_X[2]}`;
}

// A rounded, PCB-trace-style connector: out from the row's edge node,
// a quarter-circle turn to the page edge, straight down the gap, and a
// mirrored quarter-circle turn back in to the next row's edge node.
function connectorPath(side: "left" | "right", y1: number, y2: number) {
  const r = CURVE_RADIUS;
  if (side === "right") {
    const xNode = COL_X[2];
    const xEdge = VW;
    return `M ${xNode} ${y1} H ${xEdge - r} A ${r} ${r} 0 0 1 ${xEdge} ${y1 + r} V ${y2 - r} A ${r} ${r} 0 0 1 ${xEdge - r} ${y2} H ${xNode}`;
  }
  const xNode = COL_X[0];
  const xEdge = 0;
  return `M ${xNode} ${y1} H ${xEdge + r} A ${r} ${r} 0 0 0 ${xEdge} ${y1 + r} V ${y2 - r} A ${r} ${r} 0 0 0 ${xEdge + r} ${y2} H ${xNode}`;
}

export default function YearAtSuperbae() {
  return (
    <section className="px-6 py-16 md:py-[70px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[34px] font-medium tracking-[0.68px] text-ink md:text-[58px] md:tracking-[1.2px]">
          Year at Superbae
        </h2>
        <p className="mx-auto max-w-2xl font-body text-[16px] text-ink/60 md:text-[19px]">
          A new shift every month. A new you everyday.
        </p>

        <div className="mt-16 hidden md:block">
          <div className="mx-auto w-[92%]">
            {/* Row 1: theme + month pill for odd months (Jan, Mar, May…), sit above the line */}
            <div className="grid grid-cols-12">
              {months.map((m, i) => (
                <div
                  key={m.name}
                  className="flex flex-col items-center justify-end gap-2 pb-3"
                >
                  {i % 2 === 0 && (
                    <>
                      <p className="whitespace-nowrap font-body text-[15px] font-semibold text-ink">
                        {m.theme}
                      </p>
                      <MonthPill m={m} />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2: gradient line + nodes — every month's node sits exactly on the line */}
            <div className="relative grid grid-cols-12 items-center">
              <div
                className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full"
                style={{ background: lineGradient }}
              />
              {months.map((m) => (
                <div key={m.name} className="relative z-10 flex justify-center">
                  <MonthNode m={m} />
                </div>
              ))}
            </div>

            {/* Row 3: month pill + theme for even months (Feb, Apr, Jun…), sit below the line */}
            <div className="grid grid-cols-12">
              {months.map((m, i) => (
                <div
                  key={m.name}
                  className="flex flex-col items-center justify-start gap-2 pt-3"
                >
                  {i % 2 === 1 && (
                    <>
                      <MonthPill m={m} />
                      <p className="whitespace-nowrap font-body text-[15px] font-semibold text-ink">
                        {m.theme}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: serpentine 3-across timeline. Breaks out of the section's
            own px-6 padding to bleed edge-to-edge — the loop connectors need
            to reach the true screen edge to match the reference design,
            not stop at the padded content column. */}
        <div className="relative left-1/2 my-12 w-screen md:hidden" style={{ transform: "translateX(-50%)" }}>
          <div className="relative mx-auto w-full" style={{ maxWidth: 480, aspectRatio: `${VW} / ${VH}` }}>
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden
          >
            <defs>
              {monthRows.map((row, r) => (
                // userSpaceOnUse (not the default objectBoundingBox) — a perfectly
                // horizontal line has zero height in its own bounding box, which
                // makes an objectBoundingBox gradient degenerate and invisible.
                <linearGradient
                  key={`row-grad-${r}`}
                  id={`year-row-grad-${r}`}
                  gradientUnits="userSpaceOnUse"
                  x1={COL_X[0]}
                  y1={ROW_Y[r]}
                  x2={COL_X[2]}
                  y2={ROW_Y[r]}
                >
                  {row.map((it, i) => (
                    <stop key={it.m.name} offset={`${(i / (row.length - 1)) * 100}%`} stopColor={it.m.color} />
                  ))}
                </linearGradient>
              ))}
              {monthRows.slice(0, -1).map((row, r) => {
                const nextRow = monthRows[r + 1];
                const colorA = (r % 2 === 0 ? row[row.length - 1] : row[0]).m.color;
                const colorB = nextRow[r % 2 === 0 ? nextRow.length - 1 : 0].m.color;
                return (
                  <linearGradient key={`connector-grad-${r}`} id={`year-connector-grad-${r}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={colorA} />
                    <stop offset="1" stopColor={colorB} />
                  </linearGradient>
                );
              })}
            </defs>

            {monthRows.map((row, r) => (
              <path
                key={`row-${r}`}
                d={rowLinePath(ROW_Y[r])}
                stroke={`url(#year-row-grad-${r})`}
                strokeWidth={5}
                strokeLinecap="round"
              />
            ))}

            {monthRows.slice(0, -1).map((_, r) => (
              <path
                key={`connector-${r}`}
                d={connectorPath(r % 2 === 0 ? "right" : "left", ROW_Y[r], ROW_Y[r + 1])}
                stroke={`url(#year-connector-grad-${r})`}
                strokeWidth={5}
                strokeLinecap="round"
              />
            ))}
          </svg>

          {monthRows.map((row, r) =>
            row.map(({ m, globalIndex }, i) => {
              const x = COL_X[i];
              const y = ROW_Y[r];
              const labelAbove = globalIndex % 2 === 0;
              return (
                <div key={m.name}>
                  <div
                    className="absolute z-10"
                    style={{ left: pct(x, VW), top: pct(y, VH), transform: "translate(-50%, -50%)" }}
                  >
                    <MonthNode m={m} size={52} />
                  </div>
                  <div
                    className="absolute z-10 flex flex-col items-center gap-1"
                    style={{
                      left: pct(x, VW),
                      top: pct(labelAbove ? y - LABEL_NEAR : y + LABEL_NEAR, VH),
                      transform: labelAbove ? "translate(-50%, -100%)" : "translate(-50%, 0)",
                    }}
                  >
                    {labelAbove ? (
                      <>
                        <p className="whitespace-nowrap font-body text-[13px] font-semibold text-ink">
                          {m.theme}
                        </p>
                        <MonthPill m={m} />
                      </>
                    ) : (
                      <>
                        <MonthPill m={m} />
                        <p className="whitespace-nowrap font-body text-[13px] font-semibold text-ink">
                          {m.theme}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
