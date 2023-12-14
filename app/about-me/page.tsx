"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/tomatalvan-text.svg";
import picture from "@/public/placeholder-image.jpg";
import { easeInOut, motion, useScroll } from "framer-motion";
import AboutMeCard from "@/components/about-me-card";
import BlobGradient from "@/components/blob-gradient";

export default function AboutMe() {
  const introText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Suspendisse massa leo, lobortis non est eget, consectetur tempus diam.",
    "Duis at nisi turpis.",
    "Quisque a gravida massa",
  ];

  return (
    <section className="flex flex-col items-center justify-center px-5">
      <div className="relative flex flex-col items-center justify-center lg:py-40">
        <div className="flex w-8/12 items-center justify-center py-10 sm:w-5/12 md:w-5/12 lg:w-5/12 lg:py-0 lg:pb-10 xl:w-4/12 2xl:w-4/12 2xl:pb-20">
          <Image src={logo} alt="Tomatälvan" />
        </div>
        <div>
          {introText.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <motion.p
                initial={{ transform: "translateY(100%)" }}
                animate={{ transform: "translateY(0%)" }}
                transition={{
                  ease: easeInOut,
                  duration: 1,
                  delay: index * 0.1,
                }}
                className="sm:text-l text-left font-playfair-display text-lg text-[#78A25D] lg:text-2xl xl:text-3xl 2xl:text-4xl"
              >
                {item}
              </motion.p>
            </div>
          ))}
        </div>
        <BlobGradient
          color="bg-[#F7E5B1]"
          className="absolute bottom-0 right-0 z-[-1] md:right-0 lg:right-0 2xl:right-52"
        />
      </div>
      <AboutMeCard />
    </section>
  );
}
