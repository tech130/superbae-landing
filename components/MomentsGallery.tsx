import Image from "next/image";

const placeholderChecklist = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
];

const cells = [
  {
    panelBg: "#EFE1FC",
    imageBg: "#131313",
    image: "/assets/Highlights/1.png",
    alt: "Superbae app milestone and workout screens",
    title: "Milestones & Rewards",
    subtitle: "Every Step Is Celebrated",
    checklist: placeholderChecklist,
  },
  {
    panelBg: "#FDEBD0",
    imageBg: "#F5A623",
    image: "/assets/Highlights/2.png",
    alt: "Superbae member in a photo frame",
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
    checklist: placeholderChecklist,
  },
  {
    panelBg: "#DCEBFB",
    imageBg: "#CFE4FB",
    image: "/assets/Highlights/3.png",
    alt: "Superbae member in a photo frame",
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
    checklist: placeholderChecklist,
  },
  {
    panelBg: "#E7F5DE",
    imageBg: "#E4F7DA",
    image: "/assets/Highlights/4.png",
    alt: "Superbae member in a photo frame",
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
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
      <circle cx="12" cy="12" r="9" stroke="#131313" strokeWidth="1.5" />
      <path
        d="M8.5 12.5L10.75 14.75L15.5 9.5"
        stroke="#131313"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MomentsGallery() {
  return (
    <section className="px-6 pb-4 md:px-[50px]">
      <div className="mx-auto flex align-center justify-center max-w-[1440px] gap-0 overflow-x-auto">
        {cells.map((cell, i) => (
          <div
            key={i}
            className="group relative flex h-[280px] shrink-0 basis-[250px] overflow-hidden rounded-[40px] transition-[flex-basis] duration-500 ease-in-out hover:basis-[550px]"
            style={{ background: cell.panelBg }}
          >
            <div className="flex h-full w-full items-center gap-0 p-0 transition-[padding,gap] duration-500 ease-in-out group-hover:gap-6 group-hover:p-3">
              <div
                className={`relative h-full w-full shrink-0 overflow-hidden rounded-[40px] transition-[width,height] duration-500 ease-in-out group-hover:w-[250px] group-hover:h-[250px] ${
                  !cell.image ? "figma-asset-placeholder" : ""
                }`}
                style={{ background: cell.imageBg }}
              >
                {cell.image && (
                  <Image src={cell.image} alt={cell.alt} fill className="object-cover" />
                )}
              </div>

              <div className="flex w-0 shrink-0 flex-col justify-center gap-4 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 ease-in-out group-hover:w-[250px] group-hover:opacity-100">
                <div>
                  <h3 className="font-display text-[20px] font-semibold text-ink">
                    {cell.title}
                  </h3>
                  <p className="mt-1 font-body text-[15px] text-ink/70">
                    {cell.subtitle}
                  </p>
                </div>
                <ul className="space-y-1">
                  {cell.checklist.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 font-body text-[15px] text-ink"
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
