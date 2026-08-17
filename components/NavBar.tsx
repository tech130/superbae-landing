"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Transformation Program", href: "#habits" },
  // { label: "30 Super Habits", href: "#habits" },
  { label: "App", href: "#app" },
  { label: "Planner", href: "#planner" },
  { label: "Community", href: "#community" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

// Shared "active" look so the clicked link always matches the default active pill.
const activeLinkClass =
  "border-[0.4px] border-[rgba(0,0,0,0.5)] bg-white shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.2)] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.2)]";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

  // Give the header a background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <header
        className={
          "fixed inset-x-0 top-0 z-50 mx-4 mt-4 flex items-center justify-between rounded-[58px] px-5 py-[10px] backdrop-blur-[15px] transition-all duration-300 md:mx-0 md:mt-0 md:rounded-none md:px-[50px] md:py-6 " +
          (scrolled
            ? "bg-white/70 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] md:bg-white/70 md:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] md:backdrop-blur-[15px]"
            : "bg-[rgba(255,255,255,0.2)] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none md:backdrop-blur-none")
        }
      >
        {/* Logo */}
        <a href="/" className="shrink-0 font-display text-xl font-bold tracking-tight text-ink">
          <Image src="/assets/logo.png" alt="Superbae" width={130} height={67} className="h-[40px] w-auto md:h-[56px]" />
        </a>

        {/* Pill nav (desktop only) */}
        <nav className="hidden items-center gap-1 rounded-[45px] border border-white bg-[rgba(243,243,243,0.5)] p-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[5px] min-[1025px]:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveHref(link.href)}
              className={
                "whitespace-nowrap rounded-[20px] px-[10px] py-[5px] font-body text-[16px] font-semibold text-[#2a2a2a] transition-colors " +
                (link.href === activeHref ? activeLinkClass : "hover:bg-white/60")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <a
          href="#join"
          className="hidden shrink-0 rounded-[20px] border border-[rgba(0,0,0,0.5)] bg-[#2a2a2a] px-[10px] py-[5px] font-body text-[16px] font-semibold text-white drop-shadow-[0px_5px_2.5px_rgba(0,0,0,0.25)] min-[1025px]:inline-block"
        >
          Join 2027 Cohort
        </a>

        {/* Hamburger (mobile + tablet) */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
          className="flex size-[40px] shrink-0 items-center justify-center min-[1025px]:hidden"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6L18 18" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6H21" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 12H21" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18H21" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </header>

      {/* Spacer so fixed header doesn't cover the page content.
          Mobile has no spacer — the header floats transparently over the
          full-bleed Hero video, same as desktop's overlay but Hero itself
          reserves the desktop gap via its own md:pt-6. */}
      <div aria-hidden className="h-0 md:h-[104px]" />

      {/* Mobile menu backdrop + drawer (slides in from the right) */}
      <div
        className={
          "fixed inset-0 z-[60] min-[1025px]:hidden " +
          (isOpen ? "pointer-events-auto" : "pointer-events-none")
        }
        aria-hidden={!isOpen}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 " +
            (isOpen ? "opacity-100" : "opacity-0")
          }
        />

        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={
            "absolute inset-y-0 right-0 flex h-full w-[80%] max-w-[360px] flex-col overflow-y-auto bg-white px-6 py-6 shadow-2xl transition-transform duration-300 ease-in-out " +
            (isOpen ? "translate-x-0" : "translate-x-full")
          }
        >
          <div className="flex items-center justify-between">
            <Image src="/assets/logo.png" alt="Superbae" width={110} height={57} className="h-[36px] w-auto" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex size-[40px] shrink-0 items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6L18 18" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveHref(link.href);
                  setIsOpen(false);
                }}
                className={
                  "rounded-[20px] px-4 py-3 font-body text-[17px] font-semibold text-[#2a2a2a] transition-colors " +
                  (link.href === activeHref ? activeLinkClass : "hover:bg-[#f3f3f3]")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#join"
            onClick={() => setIsOpen(false)}
            className="mt-8 rounded-[20px] border border-[rgba(0,0,0,0.5)] bg-[#2a2a2a] px-[10px] py-3 text-center font-body text-[16px] font-semibold text-white drop-shadow-[0px_5px_2.5px_rgba(0,0,0,0.25)]"
          >
            Join 2027 Cohort
          </a>
        </div>
      </div>
    </>
  );
}
