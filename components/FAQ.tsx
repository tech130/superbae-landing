"use client";

import { useState } from "react";

// Placeholder copy — swap for real answers once support/marketing signs off.
const faqs = [
  {
    q: "What exactly is Superbae?",
    a: "Superbae is a science-backed ecosystem that helps you grow in every area of your life — mind, body, wealth, fun and relationships — through simple habits and a supportive community that cheers and grows with you.",
  },
  {
    q: "How do the 30 Super Habits work?",
    a: "Each pillar — Body, Mind, Relationship, Learning, Wealth — has a set of small, repeatable habits. You pick a few to focus on and track them daily through the app.",
  },
  {
    q: "Do I need any prior experience to join?",
    a: "No prior experience needed. The program meets you where you are and scales up as you build consistency.",
  },
  {
    q: "How do I qualify for the Goa Retreat?",
    a: "Top members are selected based on consistency and community engagement and earn an invite to the annual retreat.",
  },
  {
    q: "What's included when I join a cohort?",
    a: "App access, guided journals, a private community, live events, and a shot at the annual retreat and awards night.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes — manage or cancel your membership anytime from your account settings.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M4 7L9 12L14 7" stroke="#131313" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-[20px] border border-black/10 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.04)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
      >
        <span className="font-body text-[16px] font-semibold text-[#2a2a2a] md:text-[17px]">{q}</span>
        <ChevronIcon open={open} />
      </button>

      {/* Grid-rows trick animates height without measuring it in JS. */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-left font-body text-[15px] leading-relaxed text-ink/70 md:px-6 md:pb-6 md:text-[16px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-30 px-6 py-16 md:px-[50px] md:py-[70px]">
      <div className="mx-auto max-w-[820px] text-center">
        <h2 className="font-display text-[28px] font-medium tracking-[0.72px] text-ink md:text-[32px] md:tracking-[1.2px]">
          FAQ
        </h2>
        <p className="mx-auto max-w-2xl font-body text-[16px] text-ink/60 md:text-[18px]">
          Answers to what people ask us most before joining a cohort.
        </p>

        <div className="mt-8 flex flex-col gap-3 md:mt-10">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
