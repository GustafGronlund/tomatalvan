import BlogCard from "@/components/blog-card";
import React from "react";
import Image from "next/image";
import logo from "@/public/odlingsdagbok-text.svg";

const Odlingsdagbok = () => {
  return (
    <main className="w-screen md:flex md:flex-col md:items-center">
      <section className="relative my-20 flex flex-col items-center justify-center">
        <figure className="mb-5 flex w-full items-center justify-center">
          <Image src={logo} alt="Kontakta mig" className="w-3/4" />
        </figure>
        <p className="text-center font-playfair-display text-[#282828]">
          Lorem ipsum dolor sit amet consectetur. Laoreet senectus elementum
          fringilla imperdiet habitant dui tempus.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 px-5 sm:grid sm:grid-cols-2 sm:gap-10 sm:px-10 md:max-w-screen-xl lg:grid-cols-3 lg:px-0">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </main>
  );
};

export default Odlingsdagbok;
