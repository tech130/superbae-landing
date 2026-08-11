const pillars = [
  {
    badge: "No More Starting Over",
    badgeFrom: "#774af9",
    badgeTo: "#5226d3",
    cardBg: "from-[#e8dafe] to-white",
    body: "A Clear roadmap\nfor 365 days",
    boxShadow:
      "0 24.072px 32.096px 0 rgba(96, 51, 225, 0.30), 0 -3.21px 3.21px 0 rgba(0, 0, 0, 0.25) inset, 0 4.814px 4.814px 0 rgba(255, 255, 255, 0.25) inset",
  },
  {
    badge: "Accountability That Keeps You Going",
    badgeFrom: "#f643b9",
    badgeTo: "#a11872",
    cardBg: "from-[#ffddf3] to-white",
    body: "Communities,\nchallenges, Real\nSupport",
    boxShadow:
      "0 24.072px 32.096px 0 rgba(246, 67, 185, 0.30), 0 -3.21px 3.21px 0 rgba(0, 0, 0, 0.25) inset, 0 4.814px 4.814px 0 rgba(255, 255, 255, 0.25) inset",
  },
  {
    badge: "Habits That Create Identity",
    badgeFrom: "#ff7700",
    badgeTo: "#df6a04",
    cardBg: "from-[#ffeddd] to-white",
    body: "Small daily actions,\nbig life shifts",
    boxShadow:
      "0 24.072px 32.096px 0 rgba(255, 237, 221, 0.30), 0 -3.21px 3.21px 0 rgba(0, 0, 0, 0.25) inset, 0 4.814px 4.814px 0 rgba(255, 255, 255, 0.25) inset",
  },
  {
    badge: "Rewards That Celebrates You",
    badgeFrom: "#3d91ff",
    badgeTo: "#0d58ba",
    cardBg: "from-[#eaf3ff] to-white",
    body: "Milestone, badges,\nrewards & unforgettable\nmemories",
    boxShadow:
      "0 24.072px 32.096px 0 rgba(61, 145, 255, 0.30), 0 -3.21px 3.21px 0 rgba(0, 0, 0, 0.25) inset, 0 4.814px 4.814px 0 rgba(255, 255, 255, 0.25) inset",
  },
];

export default function WhySuperbaeExists() {
  return (
    <section className="px-6 py-6 md:px-[40px] md:py-[30px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[36px] font-medium tracking-[0.72px] text-ink md:text-[48px] md:tracking-[1.2px]">
          Why Superbae Exists
        </h2>
        <p className="mx-auto  max-w-2xl font-body  font-[400] text-[16px] text-ink/60 md:text-[16px]">
          Everyone wants to change. Very few actually do. Most people quit by
          february. Superbae gives you the baefam support and structure to
          stay consistent for the entire years.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4 md:flex-nowrap">
          {pillars.map((pillar) => (
            <div
              key={pillar.badge}
              className="relative w-full max-w-[329px] rounded-[44px] border border-black/6 bg-white p-1"
            >
              <div
                className={`flex h-[300px] flex-col items-center rounded-[40px] bg-gradient-to-b p-5 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)] md:h-[400px] ${pillar.cardBg}`}
              >
                <span
                  className="mt-6 flex min-h-[64px] w-full max-w-[273px] items-center justify-center rounded-[32px] border-[3px] px-4 py-3 text-center font-display text-[16px] font-bold text-white shadow-[inset_0px_-3px_3px_0px_rgba(0,0,0,0.25),inset_0px_5px_5px_0px_rgba(255,255,255,0.25)] md:text-[18px]"
                  style={{
                    borderColor: pillar.badgeFrom,
                    background: `radial-gradient(circle, ${pillar.badgeFrom}, ${pillar.badgeTo})`,
                    boxShadow: pillar.boxShadow
                  }}
                >
                  {pillar.badge}
                </span>
                <p className="mt-auto whitespace-pre-line pb-6 font-display flex items-center justify-center text-center text-[22px] font-[500] leading-[1.3] text-ink md:items-start md:justify-start md:text-left md:text-[22px]">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
