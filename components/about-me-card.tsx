"use client";

import React from "react";
import { aboutMeData } from "@/lib/data";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";

export default function AboutMeCard() {
  return (
    <>
      {aboutMeData.map((item) => (
        <motion.div
          className={`flex flex-col w-full ${
            item.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } mt-20 sm:mt-16 md:px-0 lg:justify-center`}
          key={item.id}>
          <div className="w-full md:w-12/12 lg:w-8/12 xl:w-5/12 2xl:w-3/12">
            <motion.figure
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: easeInOut }}
              className={`flex items-start `}>
              <Image
                src={item.imageUrl}
                quality={95}
                objectFit="cover"
                alt="Picture of fixing in the garden"
                className="shadow-md"
              />
            </motion.figure>
          </div>
          <div
            className={`flex flex-col gap-5 w-full ${
              item.id % 2 === 0 ? "md:ml-10" : "md:mr-10"
            } lg:w-1/2 2xl:w-fit`}>
            <p className="my-5 md:mt-0 font-montserrat font-normal w-full text-[#282828] text-base sm:font-light xl:text-xl lg:max-w-[50ch]">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
}
