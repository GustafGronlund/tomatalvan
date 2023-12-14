import React from "react";

type BlobGradientProps = {
  color: string;
  className: string;
};

const BlobGradient: React.FC<BlobGradientProps> = ({ color, className }) => {
  return (
    <div
      className={`h-48 w-48 rounded-full blur-2xl sm:h-72 sm:w-72 sm:opacity-90 sm:blur-2xl ${color} ${className}`}
    ></div>
  );
};

export default BlobGradient;
