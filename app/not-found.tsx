"use client";

import React from "react";
import tomatoImage from "@/public/not-found/tomato-illustration.svg";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import PrimaryButton from "@/components/primary-button";

const NotFound = () => {
  const controls = useAnimate();

  return (
    <main className="absolute top-0 flex h-screen w-screen flex-col items-center justify-center px-5">
      <motion.figure
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={tomatoImage}
          alt="Picture of tomato"
          aria-label="Bild på en illustrerad tomat"
          className="h-40 w-40"
          priority
        />
      </motion.figure>
      <h1 className="text-l mb-5 mt-20 text-center font-montserrat  text-base font-bold text-[#282828] xl:text-xl">
        Tyvärr är den här sidan inte tillgänglig.
      </h1>
      <p className="w-full text-center font-montserrat text-base font-normal text-[#282828] sm:font-light xl:text-xl">
        Det verkar som att sidan du letar efter inte kan hittas.
      </p>
      <p className="mb-5 w-full text-center font-montserrat text-base font-normal text-[#282828] sm:font-light xl:text-xl">
        Vi hjälper dig tillbaka till startsidan nu.
      </p>
      <PrimaryButton text="Tillbaka till startsidan" className="" href="/" />
    </main>
  );
};

export default NotFound;
