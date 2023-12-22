"use client";

import React from "react";
import Image from "next/image";
import contact_img1 from "@/public/contact/contact_img1.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = () => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <article className="flex flex-col">
      <Link href="#">
        <figure>
          <Image
            src={contact_img1}
            alt="Tomatbild"
            className="h-64 min-w-full rounded-lg object-cover shadow-sm sm:h-72"
          />
        </figure>
        <section>
          <h2 className="py-2.5 font-montserrat text-base text-[#282828]">
            Rubrik till det senaste inlägget
          </h2>
          <div className="flex flex-row items-center justify-between">
            <p className="font-montserrat text-sm text-[#282828]">
              <span className="text-sm text-[#78A25D]">⸻</span> 21 NOV, 2023
            </p>
            <span className="text-sm font-normal text-[#78A25D]">Läs mer</span>
          </div>
        </section>
      </Link>
    </article>
  );
};

export default BlogCard;
