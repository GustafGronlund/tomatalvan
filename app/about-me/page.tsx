import Image from "next/image";
import React from "react";
import logo from "@/public/tomatalvan-text.svg";
import AboutMeCard from "@/components/about-me-card";
import BlobGradient from "@/components/blob-gradient";
import SlideInText from "@/components/slide-in-text";
import { aboutMeIntroText } from "@/lib/data";

export default function AboutMe() {
  return (
    <section className="flex flex-col items-center justify-center px-5">
      <div className="relative flex flex-col items-center justify-center lg:py-40">
        <div className="flex w-8/12 items-center justify-center py-10 sm:w-5/12 md:w-5/12 lg:w-5/12 lg:py-0 lg:pb-10 xl:w-4/12 2xl:w-4/12 2xl:pb-20">
          <Image src={logo} alt="Tomatälvan" />
        </div>
        <SlideInText text={aboutMeIntroText} duration={1} />
        <BlobGradient
          color="bg-[#F7E5B1]"
          className="absolute bottom-0 right-0 z-[-1] md:right-0 lg:right-0 2xl:right-52"
        />
      </div>
      <AboutMeCard />
    </section>
  );
}
