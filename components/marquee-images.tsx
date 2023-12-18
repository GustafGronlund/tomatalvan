import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

type MarqueeImagesProps = {
  images: StaticImageData[];
  speed: number;
  direction: "left" | "right" | "up" | "down";
};

const MarqueeImages: React.FC<MarqueeImagesProps> = ({
  images,
  speed,
  direction,
}) => {
  return (
    <Marquee
      gradient={true}
      gradientColor="#F3EEE9"
      gradientWidth={0}
      play={true}
      speed={speed}
      direction={direction}
      pauseOnHover={true}
      className="rounded-md"
      autoFill={true}
    >
      {images.map((pic) => (
        <Image
          key={pic.src}
          src={pic}
          alt="Bild på tomat"
          layout="fixed"
          objectFit="cover"
          objectPosition="center"
          className="mr-10 rounded-md md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 2xl:h-36 2xl:w-36"
          priority
        />
      ))}
    </Marquee>
  );
};

export default MarqueeImages;
