"use client";

import Image from "next/image";
import logo from "@/public/tomatalvan-text.svg";
import BlobGradient from "@/components/blob-gradient";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import SlideInText from "@/components/slide-in-text";
import { heroIntroText } from "@/lib/data";

export default function Home() {
  const [scrollY, setScrollY] = useState<number>(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: scrollY > 80 ? 0 : 1,
      transition: { ease: "easeInOut" },
    });
  }, [scrollY, controls]);

  return (
    <main className="overflow-x-hidden">
      <section className="h-screen w-screen">
        {/* Hero section */}
        <div className="static z-30 flex w-full flex-col px-5 md:mt-20 md:py-5 lg:pb-10 2xl:pb-20">
          {/* The logo and intro text */}
          <figure className="relative z-30 flex w-8/12 items-center justify-center pb-10 sm:w-5/12 md:w-5/12 md:py-10 md:pt-0 lg:w-5/12 lg:py-0 lg:pb-10 xl:w-4/12 2xl:w-4/12 2xl:pb-20">
            <Image src={logo} alt="Tomatälvan" />
          </figure>
          <SlideInText text={heroIntroText} duration={2} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
        >
          {/* Here's the blob gradient that's used behind the video */}
          <BlobGradient
            color="bg-[#78A25D]"
            className="absolute right-10 top-2/4 z-[-1] opacity-40 sm:opacity-50 md:top-2/4 md:block md:opacity-50 2xl:top-2/4 2xl:h-80 2xl:w-80"
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-5 left-5 rounded-full bg-[#78A25D] p-5 text-white md:hidden"
          aria-label="Scrolla neråt"
        >
          <GoArrowDown className="scale-150" />
        </motion.button>

        <figure>
          {/* Mobile video */}
          <motion.div
            initial={{ y: "0" }}
            animate={{ y: "-350px", display: "none" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              display: { delay: 1.55, duration: 0.01 },
            }}
            className="absolute bottom-5 right-5 z-20 h-2/6 w-8/12 bg-[#F3EEE9] md:hidden"
          ></motion.div>
          <video
            src={require("../public/hero-vid.mp4")}
            autoPlay
            loop
            muted
            playsInline
            className="absolute bottom-5 right-5 z-10 h-2/6 w-8/12 object-cover md:hidden"
            aria-label="En video med olika klipp från odlingen"
          ></video>
        </figure>

        <figure>
          {/* Desktop video */}
          <motion.div
            initial={{ y: "0" }}
            animate={{ y: "-500px", display: "none" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              display: { delay: 2 },
            }}
            className="hidden md:fixed md:bottom-10 md:right-10 md:z-20 md:block md:h-3/4 md:w-screen md:bg-[#F3EEE9]"
          ></motion.div>
          <motion.video
            animate={controls}
            src={require("../public/hero-vid.mp4")}
            autoPlay
            loop
            muted
            playsInline
            className="z-10 hidden md:fixed md:bottom-10 md:right-10 md:block md:h-auto md:w-4/6 lg:w-3/6 xl:w-5/12 2xl:w-2/6"
            aria-label="En video med olika klipp från odlingen"
          ></motion.video>
        </figure>
      </section>
    </main>
  );
}
