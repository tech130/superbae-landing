import Image from "next/image";

const pillars = [
  {
    name: "Body",
    accent: "#f0711d",
    bg: "#ffd8d6",
    src: "/assets/30-Super-Habits/1.png",
    items: [
      "Move 30 minutes",
      "Hydrate 8 glasses",
      "Sleep by 11pm",
      "Daily stretch",
      "Strength session",
      "10k steps"
    ],
  },
  {
    name: "Mind",
    accent: "#7247a0",
    bg: "#ebcfff",
    src: "/assets/30-Super-Habits/2.png",
    items: ["Morning meditation", "Read 20 minutes", "Journal", "Breathe breaks", "Digital detox", "Practice gratitude"],
  },
  {
    name: "Relationship",
    accent: "#d75b80",
    bg: "#ffe4ed",
    src: "/assets/30-Super-Habits/3.png",
    items: ["Weekly check-in", "Express appreciation", "Plan quality time", "Active listening", "Say sorry", "Celebrate wins"],
  },
  {
    name: "Learning",
    accent: "#219fd7",
    bg: "#cbecff",
    src: "/assets/30-Super-Habits/4.png",
    items: ["Read a chapter", "Practice skill", "Teach someone", "Take notes", "Review goals", "Try a course"],
  },
  {
    name: "Wealth",
    accent: "#4b9a6d",
    bg: "#e9ffdb",
    src: "/assets/30-Super-Habits/5.png",
    items: ["Save 10%", "Track expenses", "Review subscriptions", "Invest small", "Set goals", "Emergency fund"],
  },
];

// A curated reel of 10 standout habits (not the full 30) scattered loosely
// around the central pillars image. Pulled from `pillars` so each chip
// still traces back to its parent pillar even though the chip itself no
// longer shows an accent color.
const highlightHabits = [
  { pillar: "Body", text: "Move 30 minutes" },
  { pillar: "Mind", text: "Morning meditation" },
  { pillar: "Wealth", text: "Save 10%" },
  { pillar: "Relationship", text: "Weekly check-in" },
  { pillar: "Body", text: "Sleep by 11pm" },
  { pillar: "Learning", text: "Practice skill" },
  { pillar: "Mind", text: "Practice gratitude" },
  { pillar: "Relationship", text: "Say sorry" },
  { pillar: "Wealth", text: "Track expenses" },
  { pillar: "Learning", text: "Take notes" },
] as const;

// Positions (percent from top-left) reproducing the loose, hand-placed
// scatter of chips around the central figure in the reference design —
// not a symmetric ring, so each point is hand-tuned rather than computed.
const scatterPositions = [
  { top: 19, left: -9 },
  { top: 22, left: 75.5 },
  { top: 9, left: 77.5 },
  { top: 30, left: 100.5 },
  { top: 34, left: -4 },
  { top: 39, left: 70.5 },
  { top: 45, left: 125.5 },
  { top: 52, left: -2.5 },
  { top: 64, left: 95 },
  { top: 79, left: 81.5 },
];

function HabitChip({
  text,
  className = "",
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        borderRadius: "12px",
        border: "3px solid #FFF",
        background: "linear-gradient(0deg, #B97EFF 0%, #5D3F82 100%)",
        mixBlendMode: "multiply",
        boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.15)",
        ...style,
      }}
      className={`whitespace-nowrap px-4 py-2 text-center ${className}`}
    >
      <p className="font-body text-[13px] font-medium leading-none text-white">{text}</p>
    </div>
  );
}

export default function ThirtySuperHabits() {
  return (
    <section id="habits" className="scroll-mt-30 px-4 py-10 md:py-[10px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <div>
          <h2 className="font-display text-[38px] font-medium tracking-[0.76px] text-ink md:text-[32px] md:tracking-[1.2px]">
            30 Super Habits
          </h2>
          <p className="mx-auto max-w-2xl font-body text-[16px] text-ink/60 md:text-[19px]">
            30 simple habits across 5 pillars that build your best life
          </p>
        </div>

        {/* <a
          href="#habits"
          className="rounded-[22px] border border-black bg-[#2a2a2a] px-5 py-[10px] font-body text-[18px] font-semibold text-white drop-shadow-[0px_5px_2.5px_rgba(0,0,0,0.25)]"
        >
          Explore all 30 Habits
        </a> */}

        {/* Desktop/tablet: radial burst — one central pillars image with 7
            standout habit blocks floating around it in a heptagon.
            Drop the composed illustration at
            /public/assets/30-Super-Habits/pillars-hero.png (square,
            transparent background, same line-art style as the pillar
            icons) — the layout is already sized for it. */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[580px] md:block">
          <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/assets/30-Super-Habits/banner.png"
              alt="The 5 pillars of Superbae"
              fill
              className="object-contain"
            />
          </div>

          {highlightHabits.map((habit, i) => {
            const pos = scatterPositions[i];
            return (
              <HabitChip
                key={`${habit.pillar}-${habit.text}`}
                text={habit.text}
                style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:-translate-y-[60%] hover:scale-105"
              />
            );
          })}
        </div>

        {/* Mobile: central image on top, habit blocks in a static 2-column grid below */}
        <div className="mt-4 w-full md:hidden">
          <div className="relative mx-auto aspect-square w-full max-w-[280px]">
            <Image
              src="/assets/30-Super-Habits/banner.png"
              alt="The 5 pillars of Superbae"
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {highlightHabits.map((habit) => (
              <HabitChip key={`${habit.pillar}-${habit.text}`} text={habit.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
