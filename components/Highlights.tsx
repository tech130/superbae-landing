import Image from "next/image";

const placeholderChecklist = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];

const highlights = [
  {
    title: "Annual Goa Retreat",
    subtitle: "Earn your chance to an exclusive retreat in goa",
    cta: "See How To Qualify",
    image: "/assets/Highlights/2151599535-1.png",
    checklist: placeholderChecklist,
  },
  {
    title: "Ultimate Transformation Competition",
    subtitle: "Lorem Ipsum",
    cta: "Explore Categories",
    image: "/assets/Highlights/image-14.png",
    checklist: placeholderChecklist,
  },
  {
    title: "Awards Night",
    subtitle: "Lorem Ipsum",
    cta: "Watch 2026 Highlights",
    image: "/assets/Highlights/2150409291-1.png",
    checklist: placeholderChecklist,
  },
];

function CheckIcon() {
  return (
    <svg
      className="size-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
      <path
        d="M8.5 12.5L10.75 14.75L15.5 9.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Highlights() {
  return (
    <section className="px-6 py-0 md:px-[50px] md:py-[20px]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center gap-10 md:gap-5">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="group relative flex h-[380px] w-full max-w-[420px] flex-col justify-between overflow-hidden rounded-[24px] p-6 h-[380px]

    sm:h-[400px]

    md:h-[420px]

    lg:h-[450px]"
          >
            <Image
              src={h.image}
              alt={h.title}
              fill
              className="-z-10 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/5 to-black/60" />
            <div className="absolute inset-0 -z-10 bg-black/0 transition-colors duration-500 ease-in-out group-hover:bg-black/50" />

            <div>
              <p className="font-display text-[32px] font-[400] leading-[1.1] text-white transition-[font-size] duration-500 ease-in-out sm:text-[38px]

        md:text-[42px]
        md:group-hover:text-[28px]

        lg:text-[50px] md:group-hover:text-[26px]">
                {h.title}
              </p>

              {/* Always visible on mobile (no hover on touch); reveals on hover from md up */}
              <div className="mt-3
        grid
        grid-rows-[1fr]
        opacity-100
        transition-all
        duration-500
        ease-in-out

        lg:mt-0
        lg:grid-rows-[0fr]
        lg:opacity-0
        lg:group-hover:mt-3
        lg:group-hover:grid-rows-[1fr]
        lg:group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="font-body text-[15px] text-white/80">
                    {h.subtitle}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {h.checklist.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 font-body text-[15px] text-white"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-[25px] border-[1px] border-white px-5 py-[5px] font-body text-[25px] font-[400] backdrop-blur-[10px] transition-colors duration-300 bg-[rgba(255,255,255,0.05)] text-white group-hover:bg-white group-hover:text-ink"
            >
              {h.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
