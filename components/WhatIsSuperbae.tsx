import Image from "next/image";

const cards = [
  {
    title: "Transformation\nProgress",
    src: "/assets/What-is-Superbae/1.png",
    offset: "md:mt-3",
    col: "a",
  },
  {
    title: "30 Super\nHabits",
    src: "/assets/What-is-Superbae/2.png",
    offset: "md:mt-30",
    col: "b",
  },
  {
    title: "Superbae App",
    src: "/assets/What-is-Superbae/3.png",
    offset: "md:mt-15",
    col: "a",
  },
  {
    title: "The Superbae\nPlanner",
    src: "/assets/What-is-Superbae/4.png",
    offset: "md:mt-2",
    col: "b",
  },
  {
    title: "Community",
    src: "/assets/What-is-Superbae/5.png",
    offset: "md:mt-15",
    col: "a",
  },
  {
    title: "Annual Retreat",
    src: "/assets/What-is-Superbae/6.png",
    offset: "md:mt-25",
    col: "a",
  },
  {
    title: "Awards Night",
    src: "/assets/What-is-Superbae/7.png",
    offset: "md:mt-0",
    col: "b",
  },
  {
    title: "Challenges\n& Events",
    src: "/assets/What-is-Superbae/8.png",
    offset: "md:mt-16",
    col: "b",
  },
];

// Fan-spread tuning for the desktop hand-of-cards layout.
// Card size scales fluidly between the md (768px) and xl (1280px) breakpoints,
// then holds flat outside that range, so the fan never feels cramped on a
// tablet or oversized on a large desktop.
const CARD_ANGLE_STEP = 6; // degrees of rotation between adjacent cards
const FAN_DROP_RATIO = 12 / 230; // outer-card vertical drop, as a fraction of card height
const FAN_CENTER = (cards.length - 1) / 2;
const FAN_WIDTH_EXPR = "clamp(120px, calc(60px + 7.8125vw), 160px)"; // 120px @md -> 160px @xl
const FAN_HEIGHT_EXPR = "clamp(173px, calc(86px + 11.23vw), 230px)"; // keeps the 160:230 ratio

function CardImage({ card }: { card: (typeof cards)[number] }) {
  return (
    <div className="relative h-[clamp(150px,42vw,230px)] w-full overflow-hidden rounded-[18px]">
      <Image
        src={card.src}
        alt={card.title.replace("\n", " ")}
        fill
        className="object-contain"
      />
      {/* <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/50 to-transparent px-3 pb-6 pt-3">
        <p className="whitespace-pre-line text-center font-body text-[16px] font-bold leading-tight text-white">
          {card.title}
        </p>
      </div> */}
    </div>
  );
}

export default function WhatIsSuperbae() {
  return (
    <section className="px-6 py-8 md:px-[50px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[36px] font-medium tracking-[0.72px] text-ink md:text-[45px] md:tracking-[1.2px]">
          What is Superbae
        </h2>
        <p className="mx-auto max-w-2xl font-body text-[16px] text-ink/60 md:text-[16px]">
          Everything works together to transform you form the blah blah....
        </p>

        {/* Mobile: 2-column staggered gallery */}
        <div className="mt-9 grid grid-cols-2 gap-4 md:hidden">
          <div className="flex flex-col gap-4">
            {cards
              .filter((card) => card.col === "a")
              .map((card) => (
                <CardImage key={card.title} card={card} />
              ))}
          </div>
          <div className="mt-28 flex flex-col gap-4">
            {cards
              .filter((card) => card.col === "b")
              .map((card) => (
                <CardImage key={card.title} card={card} />
              ))}
          </div>
        </div>

        {/* Desktop: fanned card hand — hover a card to lift it and reveal it in full.
            Card size is fluid (see FAN_WIDTH_EXPR/FAN_HEIGHT_EXPR) so the fan scales
            smoothly across md/lg/xl instead of jumping straight to full size at md. */}
        <div
          className="mt-2 hidden md:block md:overflow-x-auto md:px-4 md:pt-10 md:pb-14 lg:pt-14 lg:pb-16 xl:pt-16 xl:pb-20"
          style={
            {
              "--fan-w": FAN_WIDTH_EXPR,
              "--fan-h": FAN_HEIGHT_EXPR,
            } as React.CSSProperties
          }
        >
          <div className="md:mx-auto md:flex md:w-fit md:flex-nowrap md:items-start">
            {cards.map((card, i) => {
              const rotate = (i - FAN_CENTER) * CARD_ANGLE_STEP;
              const dropMult = Math.abs(i - FAN_CENTER) * FAN_DROP_RATIO;
              return (
                <div
                  key={card.title}
                  style={
                    {
                      marginLeft: i === 0 ? 0 : "calc(var(--fan-w) * -0.4)",
                      "--fan-rotate": `${rotate}deg`,
                      "--fan-drop-mult": dropMult,
                      "--fan-z": i,
                    } as React.CSSProperties
                  }
                  className="relative z-[var(--fan-z)] h-[var(--fan-h)] w-[var(--fan-w)] shrink-0 origin-bottom overflow-hidden rounded-[18px] shadow-[4px_8px_12px_0px_rgba(0,0,0,0.16)] transition-transform duration-300 ease-out [transform:rotate(var(--fan-rotate))_translateY(calc(var(--fan-h)*var(--fan-drop-mult)))] hover:z-50 hover:shadow-[8px_20px_32px_0px_rgba(0,0,0,0.3)] hover:[transform:translateY(calc(var(--fan-h)*-0.24))_rotate(0deg)_scale(1.08)]"
                >
                  <Image
                    src={card.src}
                    alt={card.title.replace("\n", " ")}
                    fill
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
