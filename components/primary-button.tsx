"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/dist/client/link";

type PrimaryButtonProps = {
  text: string;
  className: string;
  href?: string;
  onClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  className,
  href,
  onClick,
}) => {
  return href && href.length > 0 ? (
    <Link href={href} passHref className="w-full md:w-fit">
      <motion.button
        className={`flex w-full flex-row items-center justify-center rounded-full border bg-[#78A25D] py-4 text-white
       md:w-fit md:px-6 md:py-3 ${className}`}
        whileHover={{ backgroundColor: "rgba(120, 162, 93, 0.8)" }}
      >
        {text}
      </motion.button>
    </Link>
  ) : (
    <motion.button
      className={`flex w-full flex-row items-center justify-center rounded-full border bg-[#78A25D] py-4 text-white
       md:w-fit md:px-6 md:py-3 ${className}`}
      whileHover={{ backgroundColor: "rgba(120, 162, 93, 0.8)" }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default PrimaryButton;
