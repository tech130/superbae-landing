import Image from "next/image";

const tiles = [
  {
    title: "SuperBae App",
    image: "/assets/SuperBae-Ecosystem/image-7.png",
    className: "col-start-1 row-start-1 md:col-start-1 md:row-start-1",
  },
  {
    title: "Dailly Journal",
    image: "/assets/SuperBae-Ecosystem/image-9.png",
    className: "col-start-1 row-start-2 md:col-start-1 md:row-start-2",
  },
  {
    title: "Merch & More",
    image: "/assets/SuperBae-Ecosystem/image-10.png",
    className:
      "col-start-2 row-start-1 row-span-2 md:col-start-2 md:row-start-1 md:row-span-2",
  },
  {
    title: "Community",
    image: "/assets/SuperBae-Ecosystem/image-13.png",
    className: "col-start-1 row-start-3 md:col-start-3 md:row-start-1",
    labelPosition: "top",
  },
  {
    title: "Ai Coach",
    suffix: "(coming soon)",
    image: "/assets/SuperBae-Ecosystem/image-8.png",
    className: "col-start-2 row-start-3 md:col-start-4 md:row-start-1",
    labelPosition: "top",
  },
  {
    title: "Events",
    image: "/assets/SuperBae-Ecosystem/image-12.png",
    className:
      "col-start-1 col-span-2 row-start-4 md:col-start-3 md:col-span-2 md:row-start-2",
  },
];

export default function Ecosystem() {
  return (
    <section className="px-6 py-16 md:px-[20px] md:py-[30px] lg:py-[70px] lg:px-[20px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[34px] font-medium tracking-[0.68px] text-ink md:text-[48px] md:tracking-[1.2px]">
          The SuperBae Ecosystem
        </h2>
        <p className="mx-auto  max-w-2xl font-body text-[16px] text-ink/60 md:text-[16px]">
          Powerful tools. Real support.
          <br />
          Everything you need to transform your life.
        </p>

        <div className="mt-10 grid grid-cols-2 auto-rows-[180px] gap-2 md:mt-16 md:grid-cols-4 md:auto-rows-[200px] lg:auto-rows-[300px]">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className={`relative flex min-h-[50px] overflow-hidden rounded-[24px] p-6 text-left ${
                tile.labelPosition === "top" ? "items-start" : "items-end"
              } ${tile.className}`}
            >
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="-z-10 object-cover"
              />
              {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-transparent to-black/50" /> */}

              <p className="font-display text-[20px] font-[500] text-white md:text-[18px] lg:text-[26px]">
                {tile.title}
                {tile.suffix && (
                  <span className="ml-1 font-body text-[14px] font-normal text-white/80 md:text-[16px]">
                    {tile.suffix}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
