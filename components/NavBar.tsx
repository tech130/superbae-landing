import Image from "next/image";

const navLinks = [
  { label: "Transformation Program", href: "#", active: true },
  { label: "30 Super Habits", href: "#habits" },
  { label: "App", href: "#app" },
  { label: "Planner", href: "#planner" },
  { label: "Community", href: "#community" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function NavBar() {
  return (
    <div className="mx-4 mt-4 flex items-center justify-between rounded-[58px] bg-[rgba(255,255,255,0.2)] px-5 py-[10px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] backdrop-blur-[15px] md:mx-0 md:mt-0 md:rounded-none md:bg-transparent md:px-[50px] md:py-6 md:shadow-none md:backdrop-blur-none">
      {/* Logo */}
      <a href="/" className="shrink-0 font-display text-xl font-bold tracking-tight text-ink">
  <Image src="/assets/logo.png" alt="Superbae" width={130} height={67} className="h-[40px] w-auto md:h-[56px]" />
      </a>

      {/* Pill nav (desktop only) */}
      <nav className="hidden items-center gap-1 rounded-[45px] border border-white bg-[rgba(243,243,243,0.5)] p-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[5px] lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={
              "whitespace-nowrap rounded-[20px] px-[10px] py-[5px] font-body text-[16px] font-semibold text-[#2a2a2a] transition-colors " +
              (link.active
                ? "border-[0.4px] border-[rgba(0,0,0,0.5)] bg-white shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.2)] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.2)]"
                : "hover:bg-white/60")
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA (desktop) */}
      <a
        href="#join"
        className="hidden shrink-0 rounded-[20px] border border-[rgba(0,0,0,0.5)] bg-[#2a2a2a] px-[10px] py-[5px] font-body text-[16px] font-semibold text-white drop-shadow-[0px_5px_2.5px_rgba(0,0,0,0.25)] md:inline-block"
      >
        Join 2027 Cohort
      </a>

      {/* Hamburger (mobile only) */}
      <button
        type="button"
        aria-label="Open menu"
        className="flex size-[40px] shrink-0 items-center justify-center md:hidden"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 6H21" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 12H21" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 18H21" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
