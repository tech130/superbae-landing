import Image from "next/image";

function TrophyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4H16V9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9V4Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 5H5V6C5 7.65685 6.34315 9 8 9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 5H19V6C19 7.65685 17.6569 9 16 9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 13V16" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9.5 20H14.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 16H14L14.5 20H9.5L10 16Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L13.6 8.4L19 10L13.6 11.6L12 17L10.4 11.6L5 10L10.4 8.4L12 3Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14L19.1 16L21 16.5L19.1 17L18.5 19L17.9 17L16 16.5L17.9 16L18.5 14Z"
        stroke="white"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="5" stroke="white" strokeWidth="1.4" />
      <path d="M9 12.5L7 21L12 18.5L17 21L15 12.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const retreatCards = [
  {
    title: "Competitions",
    desc: "Push your limits in the Ultimate Transformation Challenge and earn your place on stage.",
    Icon: TrophyIcon,
  },
  {
    title: "Celebrations",
    desc: "Nights of music, beach bonfires, and community — the reward for a year of consistency.",
    Icon: SparkleIcon,
  },
  {
    title: "Recognition",
    desc: "Take the spotlight at Awards Night as the community honors this year's biggest wins.",
    Icon: MedalIcon,
  },
];

export default function Highlights() {
  return (
    <section id="retreat" className="scroll-mt-30 px-6 py-10 md:px-[50px] md:py-[50px] lg:py-[70px]">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px]">
        <Image
          src="/assets/Highlights/2151599535-1.png"
          alt="Sunset over the beach in Goa"
          fill
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

        <div className="relative flex flex-col items-center gap-10 px-6 py-14 text-center md:px-16 md:py-20">
          <div>
            <h2 className="font-display text-[38px] font-medium tracking-[0.76px] text-white md:text-[32px] md:tracking-[1.2px]">
              Goa Retreat
            </h2>
            <p className="mx-auto max-w-2xl font-body text-[16px] text-white/80 md:text-[19px]">
              Earn your spot at Superbae&apos;s annual escape — where the community gathers in Goa to compete, celebrate, and get recognized for the year&apos;s biggest transformations.
            </p>
          </div>

          <div className="grid w-full max-w-[960px] grid-cols-1 gap-4 sm:grid-cols-3">
            {retreatCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[24px] border border-white/20 bg-white/10 p-6 text-left backdrop-blur-md transition-colors duration-300 hover:bg-white/15"
              >
                <card.Icon />
                <p className="mt-4 font-display text-[22px] font-medium text-white">{card.title}</p>
                <p className="mt-1 font-body text-[15px] leading-relaxed text-white/70">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
