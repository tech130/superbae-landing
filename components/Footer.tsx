// TODO: Approximate — node 2:141. Re-pull get_design_context for exact
// spacing/icon assets once the Figma MCP rate limit resets.

import Image from "next/image";

const footerLinks = ["Home", "About Us", "Solutions", "Resources", "Testimonials"];
const legalLinks = ["Privacy Policy", "Terms & Conditions"];

function MailIcon() {
  return (
    <svg className="size-5 text-ink/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 6.5L12 13L20.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9 3H21.7L15.5 10.1L22.8 21H17.1L12.6 14.7L7.5 21H4.6L11.3 13.4L4.3 3H10.1L14.2 8.8L18.9 3Z" fill="white" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.6" />
      <circle cx="7.5" cy="8" r="1.1" fill="white" />
      <path d="M7.5 11V17" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11.5 17V13.3C11.5 11.9 12.3 11 13.5 11C14.7 11 15.5 11.8 15.5 13.2V17" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 17V12.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6" />
      <path d="M9.5 18C10.5 15 11 12.8 11 11.2C11 9.4 12 8.2 13.3 8.2C14.4 8.2 15 9 15 10.1C15 11.3 14.2 13.1 13.8 14.4C13.5 15.4 14.2 16.2 15.2 16.2C17 16.2 18.2 14 18.2 11.3C18.2 9.3 16.8 7.8 14.3 7.8C11.4 7.8 9.7 9.9 9.7 12.2C9.7 13 9.9 13.5 10.3 14" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <span className="font-body text-[13px] font-bold text-white">Be</span>
  );
}

const socials = [
  { label: "X", icon: <XIcon /> },
  { label: "Instagram", icon: <InstagramIcon /> },
  { label: "LinkedIn", icon: <LinkedInIcon /> },
  { label: "Pinterest", icon: <PinterestIcon /> },
  { label: "Behance", icon: <BehanceIcon /> },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10 text-ink md:px-[50px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Newsletter row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-[17px] font-[500] leading-[1.3] text-ink">
            Empowering your workflow with
            <br />
            clarity and innovation
          </p>

          <form className="flex w-full max-w-[500px] items-center gap-3">
            <div
              className="flex flex-1 items-center gap-2 px-5 py-3"
              style={{
                borderRadius: "30.476px",
                border: "0.952px solid rgba(19, 19, 19, 0.20)",
                background: "#FFF",
                boxShadow: "3.81px 3.81px 7.619px 0 rgba(19, 19, 19, 0.08) inset",
              }}
            >
              <MailIcon />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent font-body text-[15px] text-ink placeholder:text-ink/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[#131313] px-6 py-3 font-body text-[15px] font-semibold text-white"

              style={{
     borderRadius:"58px",
     boxShadow:" 0 -4px 4px 0 rgba(255, 255, 255, 0.20) inset, 0 7.619px 23.81px 0 rgba(0, 0, 0, 0.25)",
     background:"#131313"
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-8 border-t border-black/10" />

        {/* Main footer content */}
        <div className="mt-10 flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-[360px]">
            <Image src="/assets/logo.png" alt="Superbae" width={130} height={67} className="h-[56px] w-auto" />
            <p className="mt-4 font-body text-[16px] leading-[1.4] text-ink/50">
              Designed to help you work smarter with seamless collaboration and
              intuitive tools.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Nav links: hidden on mobile per design, shown from md up */}
            <nav className="hidden flex-wrap gap-6 font-body text-[15px] font-medium text-ink md:flex">
              {footerLinks.map((link) => (
                <a key={link} href="#" className="hover:text-ink/70">
                  {link}
                </a>
              ))}
            </nav>

            <div className="font-body text-[15px] text-ink">
              <div className="flex flex-wrap gap-6">
                <span>hello@superbae.com</span>
                <span>+91 98765 43210</span>
              </div>
              <p className="mt-2 text-ink/70">
                123 Elm Street, Apt 4B Springfield, IL 62701
              </p>
            </div>

            <div className="flex gap-6 font-body text-[14px] text-ink/50">
              {legalLinks.map((link) => (
                <a key={link} href="#" className="hover:text-ink/70">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-body text-[14px] text-ink/60">
            © {new Date().getFullYear()} SuperBae. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <span
                key={s.label}
                aria-label={s.label}
                className="flex size-[37px] items-center justify-center rounded-full bg-[#131313]"
              >
                {s.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
