"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/logo-placeholder.svg";
import { links } from "@/lib/data";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuBtnToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header>
      <nav className="flex flex-row justify-between py-5 px-5 relative z-40 sm:px-5 sm:py-5 md:px-20">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="hover:opacity-60 transition ease-in-out duration-300 sm:text-sm"
          />
        </Link>
        <ul className="hidden sm:flex flex-row items-center justify-center gap-x-10">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className="text-[#78A25D] font-source-sans-3 hover:opacity-60 transition ease-in-out duration-300 sm:text-sm lg:text-lg font-light">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center sm:hidden">
          {isOpen ? (
            <IoCloseOutline
              className="w-6 h-6 color-blue cursor-pointer"
              onClick={menuBtnToggle}
            />
          ) : (
            <RxHamburgerMenu
              className="w-6 h-6 color-blue cursor-pointer"
              onClick={menuBtnToggle}
            />
          )}
        </div>
      </nav>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="overlay"
            initial={{
              opacity: 0,
            }}
            transition={{
              ease: easeInOut,
              duration: isOpen ? 0.5 : 1,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-screen h-screen absolute top-0 left-0 bg-[#78A25D]">
            <ul className="h-full w-full flex justify-center items-center flex-col gap-5">
              {links.map((link, index) => (
                <motion.li
                  key={link.hash}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: easeInOut,
                    duration: 0.5,
                    delay: index * 0.2,
                  }}>
                  <Link
                    href={link.hash}
                    className={`text-[#FEFBF7] text-2xl font-playfair-display font-thin hover:opacity-60 transition ease-in-out duration-300`}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <div className="hidden"></div>
        )}
      </AnimatePresence>
    </header>
  );
}
