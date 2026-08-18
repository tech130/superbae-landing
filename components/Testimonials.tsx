"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Testimonial = {
  id: number;
  src: string;
  // Not shot yet — drop a file at e.g. /assets/testimonials/1.mp4 and set
  // this to wire up real hover-to-play video for that card.
  video?: string;
};

const testimonials: Testimonial[] = [
  { id: 1, src: "/assets/testimonials/1.png" },
  { id: 2, src: "/assets/testimonials/2.png" },
  { id: 3, src: "/assets/testimonials/3.png" },
];

// Repeated 4x so the track is wide enough that the loop never runs out of
// content mid-scroll on wide screens — animate-marquee shifts by exactly
// one set-width (-25%), then snaps back to 0 unnoticed.
const track = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ src, video }: Omit<Testimonial, "id">) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex h-[410px] w-[273px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] bg-neutral-200 transition-transform duration-300 ease-out hover:z-10  hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
      onMouseEnter={() => {
        setHovered(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setHovered(false);
        const el = videoRef.current;
        if (el) {
          el.pause();
          el.currentTime = 0;
        }
      }}
    >
      <Image src={src} alt="Superbae member testimonial" fill className="object-cover" />

      {/* Plays on hover once a real video file is wired up via the `video` field above */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      <span
        className={`absolute top-1/2 flex size-[50px] -translate-y-1/2 items-center justify-center rounded-full  text-2xl transition-all duration-300 ${
          hovered ? "scale-100 bg-black" : ""
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
  <g opacity="0.6">
    <path fillRule="evenodd" clipRule="evenodd" d="M27 47.25C29.6593 47.25 32.2925 46.7262 34.7493 45.7086C37.2062 44.6909 39.4385 43.1993 41.3189 41.3189C43.1993 39.4385 44.6909 37.2062 45.7086 34.7493C46.7262 32.2925 47.25 29.6593 47.25 27C47.25 24.3407 46.7262 21.7075 45.7086 19.2507C44.6909 16.7938 43.1993 14.5615 41.3189 12.6811C39.4385 10.8007 37.2062 9.3091 34.7493 8.29144C32.2925 7.27378 29.6593 6.75 27 6.75C21.6294 6.75 16.4787 8.88348 12.6811 12.6811C8.88348 16.4787 6.75 21.6294 6.75 27C6.75 32.3706 8.88348 37.5213 12.6811 41.3189C16.4787 45.1165 21.6294 47.25 27 47.25ZM24.2617 17.9775L36.9608 25.0335C37.3113 25.2284 37.6034 25.5135 37.8068 25.8593C38.0102 26.205 38.1174 26.5989 38.1174 27C38.1174 27.4011 38.0102 27.795 37.8068 28.1407C37.6034 28.4865 37.3113 28.7716 36.9608 28.9665L24.2617 36.0225C23.8506 36.2511 23.3868 36.3682 22.9164 36.3624C22.446 36.3565 21.9853 36.2278 21.5799 35.9891C21.1745 35.7504 20.8386 35.4099 20.6053 35.0014C20.372 34.5928 20.2496 34.1304 20.25 33.66V20.34C20.2496 19.8696 20.372 19.4072 20.6053 18.9986C20.8386 18.5901 21.1745 18.2496 21.5799 18.0109C21.9853 17.7722 22.446 17.6435 22.9164 17.6376C23.3868 17.6318 23.8506 17.7489 24.2617 17.9775Z" fill="white"/>
  </g>
</svg>
      </span>
    </div>
  );
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="overflow-hidden px-6 py-16 md:px-[50px] md:py-[10px]">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="font-display text-[32px] font-medium tracking-[0.64px] text-ink md:text-[45px] md:tracking-[1.2px]">
          Real Stories. Real Transformation.
        </h2>
        <p className="mx-auto max-w-2xl font-body text-[16px] text-ink/60 md:text-[16px]">
          Lives Changed, Futures Created.
        </p>

        <div className="relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div
            className="animate-marquee flex w-max gap-6"
            style={{ animationPlayState: paused ? "paused" : "running" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {track.map((t, i) => (
              <TestimonialCard key={i} src={t.src} video={t.video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
