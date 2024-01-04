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
  };

  return (
    <header className="sticky top-0 z-50 w-screen">
      <nav className="relative z-40 flex h-20 flex-row items-center justify-between px-5 sm:px-10 sm:py-5 md:justify-between lg:mx-auto lg:max-w-screen-xl xl:px-0">
        <Link href="/" className="lg:w-full">
          <Image
            src={logo}
            alt="Logo"
            className="transition duration-300 ease-in-out hover:opacity-60 sm:text-sm"
          />
        </Link>
        <div className="flex-grow"></div>
        <ul className="hidden flex-row items-center justify-center gap-x-5 whitespace-nowrap lg:flex lg:w-full lg:justify-end">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className="font-montserrat font-light uppercase text-[#78A25D] transition duration-300 ease-in-out hover:opacity-60 sm:text-sm lg:text-base lg:font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center lg:hidden">
          {isOpen ? (
            <IoCloseOutline
              className="color-blue h-6 w-6 cursor-pointer"
              onClick={menuBtnToggle}
            />
          ) : (
            <RxHamburgerMenu
              className="color-blue h-6 w-6 cursor-pointer"
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
            className="absolute left-0 top-0 z-10 h-screen w-screen bg-[#78A25D]"
          >
            <ul className="flex h-full w-full flex-col items-center justify-center gap-5">
              {links.map((link, index) => (
                <motion.li
                  key={link.hash}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: easeInOut,
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                >
                  <Link
                    href={link.hash}
                    className={`font-playfair-display text-2xl font-thin text-[#FEFBF7] transition duration-300 ease-in-out hover:opacity-60`}
                    onClick={menuBtnToggle}
                  >
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
