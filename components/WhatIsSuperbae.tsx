"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Engraved/inset letterforms: `text-shadow` has no `inset` keyword, so the
// carved look is faked with a stack of shadows — a soft dark shadow sitting
// low inside the glyph to read as a pressed-in groove, and a thin white
// highlight riding the top edge to catch the light. Text color is left
// untouched; this only adds shadow layers on top of it.
const engravedShadow =
  "[text-shadow:0px_-1px_1px_rgba(255,255,255,0.2),0px_2px_2px_rgba(0,0,0,0.19),0px_1px_1px_rgba(0,0,0,0.1)]";

// The big descriptive line, broken into ordered tokens so each word/chip can
// fade + rise in on its own as the section scrolls into view. `bold` marks
// the emphasized keywords (full ink); everything else reads at ink/30.
type Token = { text: string; bold?: boolean } | { chip: string; alt: string };

const tokens: Token[] = [
  { text: "SuperBae", bold: true },
  { text: "is" },
  { text: "a" },
  { text: "science-backed", bold: true },
  { text: "ecosystem", bold: true },
  { text: "that" },
  { text: "helps" },
  { text: "you" },
  { text: "grow" },
  { text: "in" },
  { text: "every" },
  { text: "area" },
  { text: "of" },
  { text: "your" },
  { text: "life", bold: true },
  { text: "—" },
  { text: "mind", bold: true },
  // { chip: "/assets/30-Super-Habits/2.png", alt: "Mind pillar" },
  { text: "," },
  { text: "body", bold: true },
  // { chip: "/assets/30-Super-Habits/1.png", alt: "Body pillar" },
  { text: "," },
  { text: "wealth", bold: true },
  // { chip: "/assets/30-Super-Habits/5.png", alt: "Wealth pillar" },
  { text: "," },
  { text: "fun" },
  { text: "and" },
  { text: "relationships", bold: true },
  // { chip: "/assets/30-Super-Habits/3.png", alt: "Relationship pillar" },
  { text: "—" },
  { text: "through" },
  { text: "simple" },
  { text: "habits", bold: true },
  // { chip: "/assets/What-is-Superbae/2.png", alt: "30 Super Habits" },
  { text: "and" },
  { text: "a" },
  { text: "supportive" },
  { text: "community", bold: true },
  // { chip: "/assets/What-is-Superbae/5.png", alt: "Community" },
  { text: "which" },
  { text: "cheers" },
  { text: "and" },
  { text: "grows" },
  { text: "with you." },
  { text: "" },
];

function isChip(t: Token): t is { chip: string; alt: string } {
  return "chip" in t;
}

function revealStyle(reveal: number): React.CSSProperties {
  return { opacity: reveal, transform: `translateY(${(1 - reveal) * 6}px)` };
}

function Word({ text, bold, reveal }: { text: string; bold?: boolean; reveal: number }) {
  return (
    <span
      style={revealStyle(reveal)}
      className={`inline-block transition-[opacity,transform] duration-500 ease-out ${bold ? "text-ink" : "text-ink/30"
        } ${engravedShadow}`}
    >
      {text}
    </span>
  );
}

function ChipToken({ src, alt, reveal }: { src: string; alt: string; reveal: number }) {
  return (
    <span style={revealStyle(reveal)} className="inline-block transition-[opacity,transform] duration-500 ease-out">
      <Image
        src={src}
        alt={alt}
        width={104}
        height={104}
        className="mx-1 inline-block h-[30px] w-[30px] -translate-y-1 rounded-full border border-black/10 object-cover align-middle md:h-[62px] md:w-[92px]"
      />
    </span>
  );
}

export default function WhatIsSuperbae() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  // Ties word-by-word reveal to scroll position: 0 while the paragraph is
  // still below the fold, ramping to 1 as it rises through the viewport.
  useEffect(() => {
    let raf = 0;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      raf = 0;
      if (motionQuery.matches) {
        setProgress(1);
        return;
      }

      const el = paragraphRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.88; // reveal begins
      const end = window.innerHeight * 0.4; // fully revealed
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    const onMotionPreferenceChange = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motionQuery.addEventListener("change", onMotionPreferenceChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motionQuery.removeEventListener("change", onMotionPreferenceChange);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Reveal caps out at "with" — the closing "you." stays unrevealed even
  // at full scroll, so the line never fully completes. Everything up to
  // that point shares the 0-1 progress range; anything after it is held
  // back regardless of how far the page scrolls.
  const stagger = 0.06;
  const lastRevealIndex = tokens.length - 2;
  const revealAt = (index: number) => {
    if (index > lastRevealIndex) return 0;
    // Squeeze thresholds into [0, 1 - stagger] so the last revealable word
    // ("with") still has room to finish its own fade before progress caps
    // at 1 — a plain `index / lastRevealIndex` gives it a threshold of
    // exactly 1, which needs progress > 1 (impossible) to ever show.
    const threshold = (index / lastRevealIndex) * (1 - stagger);
    return Math.min(1, Math.max(0, (progress - threshold) / stagger));
  };

  return (
    <section id="about" className="scroll-mt-30 px-6 py-10 md:px-[50px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[36px] font-medium tracking-[0.72px] text-ink md:text-[32px] md:tracking-[1.2px]">
          What is Superbae
        </h2>
        <p className="mx-auto max-w-2xl font-body text-[16px] text-ink/60 md:text-[18px]">
          SuperBae is a movement to become your best self.
        </p>

        <p
          ref={paragraphRef}
          className="mx-auto mt-10 max-w-[1000px] text-left font-display text-[26px] font-medium leading-[1.35] tracking-[0.16px] md:text-[30px] lg:text-[45px]"
        >
          {tokens.map((token, i) =>
            isChip(token) ? (
              <ChipToken key={i} src={token.chip} alt={token.alt} reveal={revealAt(i)} />
            ) : (
              <span key={i}>
                <Word text={token.text} bold={token.bold} reveal={revealAt(i)} />{" "}
              </span>
            )
          )}
        </p>
      </div>
    </section>
  );
}
