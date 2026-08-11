import Image from "next/image";

const cards = [
  {
    title: "Transformation\nProgress",
    src: "/assets/what-is-superbae/1.png",
    offset: "md:mt-3",
    col: "a",
  },
  {
    title: "30 Super\nHabits",
    src: "/assets/what-is-superbae/2.png",
    offset: "md:mt-30",
    col: "b",
  },
  {
    title: "Superbae App",
    src: "/assets/what-is-superbae/3.png",
    offset: "md:mt-15",
    col: "a",
  },
  {
    title: "The Superbae\nPlanner",
    src: "/assets/what-is-superbae/4.png",
    offset: "md:mt-2",
    col: "b",
  },
  {
    title: "Community",
    src: "/assets/what-is-superbae/5.png",
    offset: "md:mt-15",
    col: "a",
  },
  {
    title: "Annual Retreat",
    src: "/assets/what-is-superbae/6.png",
    offset: "md:mt-25",
    col: "a",
  },
  {
    title: "Awards Night",
    src: "/assets/what-is-superbae/7.png",
    offset: "md:mt-0",
    col: "b",
  },
  {
    title: "Challenges\n& Events",
    src: "/assets/what-is-superbae/8.png",
    offset: "md:mt-16",
    col: "b",
  },
];

function CardImage({ card }: { card: (typeof cards)[number] }) {
  return (
    <div className="relative h-[230px] w-full overflow-hidden rounded-[18px]">
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
    <section className="px-6 py-12 md:px-[50px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[36px] font-medium tracking-[0.72px] text-ink md:text-[48px] md:tracking-[1.2px]">
          What is Superbae
        </h2>
        <p className="mx-auto max-w-2xl font-body text-[16px] text-ink/60 md:text-[16px]">
          Everything works together to transform you form the blah blah....
        </p>

        {/* Mobile: 2-column staggered gallery */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:hidden">
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

        {/* Desktop: horizontally-offset row */}
        <div className="mt-16 hidden md:flex md:flex-nowrap md:gap-[10px] md:overflow-x-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative h-[230px] w-[160px] shrink-0 overflow-hidden rounded-[18px] shadow-[4px_8px_12px_0px_rgba(0,0,0,0.16)] ${card.offset}`}
            >
              <Image
                src={card.src}
                alt={card.title.replace("\n", " ")}
                fill
                className="object-contain"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
