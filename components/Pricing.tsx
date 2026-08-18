// TODO: Approximate copy pulled from Figma metadata (node 8:2). Placeholder
// bullet copy ("Lorem Ipsum") is literally what's in the design file —
// confirm real feature copy with design before shipping.

// Only the highlighted "Best Value" plan ships for now — Starter and
// Lifetime Purchase were removed per request.
const plan = {
  tag: "Yearly",
  badge: "Most Popular",
  name: "Best Value",
  price: "₹2,499",
  period: "/ Yearly",
  cta: "Join 2027 Cohort",
};

function CheckIcon({ color = "#131313" }: { color?: string }) {
  return (
    <svg
      className="size-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
      <path
        d="M8.5 12.5L10.75 14.75L15.5 9.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 md:px-[50px] md:py-[70px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[32px] font-medium tracking-[0.64px] text-ink md:text-[45px] md:tracking-[1.2px]">
          Your best year starts on January 1, 2027
        </h2>
        <p className="mx-auto mt-2 max-w-3xl font-body text-[16px] text-ink/60 md:text-[16px]">
          Choose your membership &amp; join 50,000+ women on the journey of a lifetime
        </p>

        <div className="mt-16 flex justify-center">
          <div
            className="relative w-full max-w-[360px] rounded-[28px] p-1 "
            style={{ background: "url('/assets/bg.png') center/cover no-repeat" }}
          >
            <div className="relative flex items-center px-4 py-4">
              <span className="font-body text-[18px] font-[400] text-white">
                {plan.tag}
              </span>
              <span className="absolute right-1 rounded-full bg-white px-6 py-[2px] font-body text-[12px] font-semibold" 
              style={{marginRight:"-17px"}}>
                <span
                  style={{
                    background: "linear-gradient(90deg, #FC7586 0%, #FA6398 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {plan.badge}
                </span>
              </span>
            </div>

            <div className="rounded-[24px] bg-white p-6 text-left">
              <div className="size-[60px] rounded-2xl bg-[#131313]" style={{ boxShadow: "0 5.067px 5.067px 0 rgba(0,0,0,0.40), 0 5.067px 5.067px 0 rgba(255,255,255,0.25) inset" }} />

              <p className="mt-5 font-body text-[20px] font-[400] text-ink">
                {plan.name}
              </p>

              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-[48px] font-semibold leading-none text-ink">
                  {plan.price}
                </span>
                <span className="mb-1 font-body text-[16px] text-ink/50">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {[0, 1, 2].map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 font-body text-[16px] text-ink"
                  >
                    <CheckIcon color="#EC4C8C" /> Lorem Ipsum
                  </li>
                ))}
              </ul>

              <a
                href="#join"
                className="mt-8 block bg-[#131313] py-[10px] text-center font-body text-[30px] font-[450] text-white"
                style={{
                  borderRadius: "31.667px",
                  boxShadow:
                    "0 5.067px 5.067px 0 rgba(0,0,0,0.40), 0 5.067px 5.067px 0 rgba(255,255,255,0.25) inset",
                }}
              >
                {plan.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
