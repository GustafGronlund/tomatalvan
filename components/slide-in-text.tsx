"use client";

import React from "react";
import { motion, easeInOut } from "framer-motion";

type SlideInTextProps = {
  text: string[];
  duration: number;
};

const SlideInText: React.FC<SlideInTextProps> = ({ text, duration }) => {
  return (
    <div className="relative z-30">
      {text.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              ease: easeInOut,
              duration: duration,
              delay: index * 0.1,
            }}
            className="sm:text-l text-left font-playfair-display text-lg text-[#78A25D] lg:text-2xl xl:text-3xl 2xl:text-4xl"
          >
            {item}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default SlideInText;
