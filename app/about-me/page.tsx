"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/tomatalvan-text.svg";
import picture from "@/public/placeholder-image.jpg";
import { easeInOut, motion, useScroll } from "framer-motion";
import AboutMeCard from "@/components/about-me-card";

export default function AboutMe() {
  const introText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Suspendisse massa leo, lobortis non est eget, consectetur tempus diam.",
    "Duis at nisi turpis.",
    "Quisque a gravida massa",
  ];

  return (
    <section className="flex justify-center items-center flex-col px-5">
      <div className="relative flex justify-center items-center flex-col lg:py-40">
        <div className="w-8/12 flex justify-center items-center py-10 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12 lg:py-0 lg:pb-10 2xl:pb-20">
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
                className="font-playfair-display text-[#78A25D] text-left text-lg sm:text-l lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {item}
              </motion.p>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5, ease: easeInOut }}
          className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#F7E5B1] z-[-1] blur-2xl md:right-0 lg:right-0 2xl:right-52 sm:h-72 sm:w-72 sm:blur-2xl sm:opacity-90"></motion.div>
      </div>
      <AboutMeCard />
    </section>
  );
}
