import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhatIsSuperbae from "@/components/WhatIsSuperbae";
import WhySuperbaeExists from "@/components/WhySuperbaeExists";
import ThirtySuperHabits from "@/components/ThirtySuperHabits";
import YearAtSuperbae from "@/components/YearAtSuperbae";
import MomentsGallery from "@/components/MomentsGallery";
import Highlights from "@/components/Highlights";
import Ecosystem from "@/components/Ecosystem";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import BannerCTA from "@/components/BannerCTA";
import Footer from "@/components/Footer";
import StopSwitching from "@/components/stopswitching/StopSwitching";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <WhatIsSuperbae />
      {/* <WhySuperbaeExists /> */}
      <ThirtySuperHabits />
      {/* <YearAtSuperbae /> */}
      <Ecosystem />
      <Highlights />
      <Testimonials />
      <FAQ />
      <Pricing />
         <StopSwitching />
      <BannerCTA />
   
      <Footer />
    </main>
  );
}
