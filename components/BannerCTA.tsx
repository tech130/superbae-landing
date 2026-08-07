import Image from "next/image";

export default function BannerCTA() {
  return (
    <section className=" py-10">
      <div className="relative overflow-hidden">
        <Image
          src="/assets/CTA-Banner/shot-from-four-female-with-their-arms-around-each-other-black-white-1.png"
          alt="Four friends standing arm in arm, looking out over a field"
          width={1728}
          height={700}
          className="h-[320px] w-full object-cover md:h-[380px]"
        />

        <div className="absolute inset-0 flex flex-col justify-start p-6 md:p-10">
          <p className="max-w-[640px] font-display text-[22px] font-[200] leading-[1.25] text-ink md:text-[33px]">
            The next 365 days will pass anyway.
            <br />
            Who will you become by the end of them?
          </p>
          <a
            href="#join"
            className="mt-5 inline-block w-fit rounded-full bg-cover bg-center px-6 py-3 font-body text-[15px] font-semibold text-white md:text-[16px]"
            style={{ backgroundImage: "url('/assets/cta.png')" }}
          >
            Join the 2027 Cohort Today
          </a>
        </div>
      </div>
    </section>
  );
}
