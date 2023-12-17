"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";

type PrimaryButtonProps = {
  text: string;
  className: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, className }) => {
  const [isAnimating, setIsAnimating] = React.useState<boolean>(false);
  const iconControls = useAnimation();

  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (isAnimating) return;

    setIsAnimating(true);
    await iconControls.start({
      scale: 1.5,
      opacity: 0,
      x: "5%",
      transition: { duration: 0.5 },
    });
    setIsAnimating(false);
  };

  const handleAnimationComplete = () => {
    iconControls.set({ scale: 1, opacity: 1, x: "0%" });
  };

  return (
    <motion.button
      className={`flex w-full flex-row items-center justify-center rounded-full border bg-[#78A25D] py-4 text-white
       md:w-fit md:px-6 md:py-3 ${className}`}
      whileHover={{ backgroundColor: "rgba(120, 162, 93, 0.8)" }}
      onClick={handleButtonClick}
    >
      <motion.div
        animate={iconControls}
        onAnimationComplete={handleAnimationComplete}
        className="origin-center"
      >
        <IoMailOutline className="mr-3 scale-150" />
      </motion.div>
      {text}
    </motion.button>
  );
};

export default PrimaryButton;
