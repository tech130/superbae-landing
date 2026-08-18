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
    items: ["Morning meditation","Read 20 minutes","Journal","Breathe breaks","Digital detox","Practice gratitude"],
  },
  {
    name: "Relationship",
    accent: "#d75b80",
    bg: "#ffe4ed",
    src: "/assets/30-Super-Habits/3.png",
    items: ["Weekly check-in","Express appreciation","Plan quality time","Active listening","Say sorry","Celebrate wins"],
  },
  {
    name: "Learning",
    accent: "#219fd7",
    bg: "#cbecff",
    src: "/assets/30-Super-Habits/4.png",
    items: ["Read a chapter","Practice skill","Teach someone","Take notes","Review goals","Try a course"],
  },
  {
    name: "Wealth",
    accent: "#4b9a6d",
    bg: "#e9ffdb",
    src: "/assets/30-Super-Habits/5.png",
    items: ["Save 10%","Track expenses","Review subscriptions","Invest small","Set goals","Emergency fund"],
  },
];

export default function ThirtySuperHabits() {
  return (
    <section id="habits" className="px-4 py-10 md:py-[10px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 text-center">
        <div>
          <h2 className="font-display text-[38px] font-medium tracking-[0.76px] text-ink md:text-[45px] md:tracking-[1.2px]">
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

        {/* Mobile: static 2-column grid — same design as desktop, image in the background with a lightly blurred glass panel on top */}
        <div className="mt-10 grid w-full grid-cols-2 gap-3 md:hidden">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.name}
              className={`flex h-[260px] flex-col overflow-hidden rounded-[25px] border border-black/10 shadow-[0px_20px_40px_rgba(0,0,0,0.08)] ${
                i === pillars.length - 1 ? "col-span-2 mx-auto w-1/2 min-w-[160px]" : ""
              }`}
            >
              <div className="shrink-0 px-4 pb-3 pt-4" style={{ backgroundColor: pillar.accent }}>
                <p className="font-display text-[20px] font-medium leading-none text-white">
                  {pillar.name}
                </p>
                <div className="mt-2 h-px bg-white/90" />
              </div>

              <div className="relative flex-1" style={{ backgroundColor: pillar.bg }}>
                <Image
                  src={pillar.src}
                  alt={pillar.name}
                  fill
                  className="object-contain"
                />
                <div
                  className="absolute inset-0 flex flex-col p-4 backdrop-blur-[2px]"
                  style={{ backgroundColor: `${pillar.bg}4d` }}
                >
                  <ul className="space-y-3 font-body text-[13px] text-ink/85">
                    {pillar.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" className="mt-0.5 flex-shrink-0">
                          <path d="M2.67969 5.75294L4.46628 7.5038L8.03947 3.75195" stroke="#131313" strokeWidth="0.765683" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: static cards — solid accent header, checklist floats on a blurred glass layer over the bg image */}
        <div className="mt-3 hidden w-full flex-wrap justify-center gap-3 md:flex">
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="flex h-[380px] w-[260px] flex-col overflow-hidden rounded-[25px] border border-black/10 shadow-[0px_20px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Header — solid accent color */}
              <div className="shrink-0 px-5 py-6" style={{ backgroundColor: pillar.accent }}>
                <p className="font-display text-[22px] font-medium leading-none text-white text-start">
                  {pillar.name}
                </p>
                <div className="mt-2 h-px bg-white/90" />
              </div>

              {/* Body — pillar image in the background, checklist on a blurred glass panel on top */}
              <div className="relative flex-1" style={{ backgroundColor: pillar.bg }}>
                <Image
                  src={pillar.src}
                  alt={pillar.name}
                  fill
                  className="object-contain"
                />
                <div
                  className="absolute inset-0 flex flex-col p-5 backdrop-blur-[2px]"
                  style={{ backgroundColor: `${pillar.bg}4d` }}
                >
                  <ul className="space-y-3 font-body text-[15px] text-ink/85">
                    {pillar.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" className="mt-1 flex-shrink-0">
                          <path d="M2.67969 5.75294L4.46628 7.5038L8.03947 3.75195" stroke="#131313" strokeWidth="0.765683" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
