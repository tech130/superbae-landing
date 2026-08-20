import Image from "next/image";

// "App" subsection: five feature tiles in a single grid.
const appTiles = [
  { title: "SuperBae App", image: "/assets/SuperBae-Ecosystem/image-7.png" },
  { title: "Ai Coach", suffix: "(coming soon)", image: "/assets/SuperBae-Ecosystem/image-8.png" },
  { title: "Daily Journal", image: "/assets/SuperBae-Ecosystem/image-9.png" },
  { title: "Merch & More", image: "/assets/SuperBae-Ecosystem/image-10.png" },
  { title: "Events", image: "/assets/SuperBae-Ecosystem/image-12.png" },
];

// "Journals" subsection: a single banner.
const journalBanner = { title: "Daily Journal", image: "/assets/SuperBae-Ecosystem/image-9.png" };

// "Club" subsection: a single banner.
const clubBanner = { title: "Community", image: "/assets/SuperBae-Ecosystem/image-13.png" };

function GridTile({ title, suffix, image }: { title: string; suffix?: string; image: string }) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-[20px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
      <p className="absolute bottom-4 left-4 right-4 text-left font-display text-[15px] font-medium text-white lg:text-[17px]">
        {title}
        {suffix && (
          <span className="ml-1 font-body text-[11px] font-normal text-white/80 lg:text-[13px]">{suffix}</span>
        )}
      </p>
    </div>
  );
}

function Banner({ title, image }: { title: string; image: string }) {
  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[24px] md:aspect-[4/3]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
      <p className="absolute bottom-6 left-6 right-6 text-left font-display text-[22px] font-medium text-white md:text-[26px]">
        {title}
      </p>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-left font-display text-[20px] font-medium text-ink md:mb-5 md:text-[24px]">
      {children}
    </h3>
  );
}

export default function Ecosystem() {
  return (
    <section id="how-it-works" className="scroll-mt-30 px-6 md:px-[20px]  lg:px-[20px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[34px] font-medium tracking-[0.68px] text-ink md:text-[32px] md:tracking-[1.2px]">
          How You Do It
        </h2>
        <p className="mx-auto max-w-2xl font-body text-[16px] text-ink/60 md:text-[16px]">
          Powerful tools. Real support.
          <br />
          Everything you need to transform your life.
        </p>

        {/* App: five images in one row */}
        <div className="mt-10 md:mt-16">
          {/* <SubHeading>App</SubHeading> */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {appTiles.map((tile) => (
              <GridTile key={tile.title} title={tile.title} suffix={tile.suffix} image={tile.image} />
            ))}
          </div>
        </div>

        {/* Journals & Club: half-and-half banners */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-6">
          <div>
            <SubHeading>Journals</SubHeading>
            <Banner title={journalBanner.title} image={journalBanner.image} />
          </div>
          <div>
            <SubHeading>Club</SubHeading>
            <Banner title={clubBanner.title} image={clubBanner.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
