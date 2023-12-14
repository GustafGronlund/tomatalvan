import React from "react";

type PrimaryButtonProps = {
  text: string;
  className: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`"w-full rounded-full border border-[#78A25D] bg-[#78A25D] py-4 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-[#78A25D] md:w-fit md:px-6 md:py-3 ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
