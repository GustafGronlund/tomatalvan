import React from "react";
import { contactImages } from "@/lib/data";
import MarqueeImages from "./marquee-images";

const ContactImageMarquee = () => {
  const imageCol1 = contactImages.slice(0, 8);
  const imageCol2 = contactImages.slice(8, 16);
  const imageCol3 = contactImages.slice(16, 24);

  return (
    <div className="flex h-full max-w-full flex-col items-center justify-center gap-3">
      <MarqueeImages images={imageCol1} speed={10} direction="left" />
      <MarqueeImages images={imageCol2} speed={10} direction="right" />
      <MarqueeImages images={imageCol3} speed={10} direction="left" />
    </div>
  );
};

export default ContactImageMarquee;
