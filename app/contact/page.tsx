import PrimaryButton from "@/components/primary-button";
import React from "react";
import { contactInputData } from "@/lib/data";
import ContactInput from "@/components/contact-input";
import Link from "next/dist/client/link";
import { FaRegMessage } from "react-icons/fa6";
import logo from "@/public/kontakta-mig-text.svg";
import Image from "next/image";
import BlobGradient from "@/components/blob-gradient";
import ContactImageMarquee from "@/components/contact-image-marquee";

const Contact = () => {
  return (
    <section className="max-w-screen flex flex-col px-5 md:flex-row md:gap-10 md:px-10">
      <div className="flex h-full w-full flex-col gap-3 md:w-1/2 md:justify-center">
        <div className="relative">
          <div className="mt-3 flex w-8/12 items-center justify-center pb-3 sm:w-6/12 md:w-full md:pb-5 lg:w-10/12 xl:w-8/12 2xl:w-8/12 ">
            <Image src={logo} alt="Kontakta mig" />
          </div>
          <div className="flex flex-col">
            <p className="w-full font-montserrat text-base font-normal text-[#282828] sm:font-light lg:max-w-[50ch] xl:text-xl">
              Om du vill komma i kontakt med mig är du välkommen att höra av dig
              via kontaktformuläret.
            </p>
            <p className="mb-5 mt-3 w-full font-montserrat text-base font-normal text-[#282828] sm:font-light lg:max-w-[50ch] xl:text-xl">
              Följ mig gärna på{" "}
              <span className="text-[#78A25D]">
                <Link
                  href="https://www.instagram.com/tomatalvan/"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  @tomatalvan
                </Link>
              </span>
            </p>
          </div>
          <BlobGradient
            color="bg-[#78A25D]"
            className="absolute bottom-0 right-0 z-[-1] opacity-30 sm:opacity-20 md:right-0 md:hidden lg:right-0 2xl:right-52"
          />
        </div>
        <form action="" className="flex flex-col gap-3">
          {contactInputData.map((data) => (
            <ContactInput
              key={data.id}
              name={data.name}
              type={data.type}
              placeholder={data.placeholder}
              icon={data.icon}
              lowercase={data.lowercase}
            />
          ))}
          <div className="relative flex text-[#78A25D]">
            <FaRegMessage className="pointer-events-none absolute top-4 ml-3 h-5 w-5 md:top-0 md:hidden md:h-0 md:w-0" />
            <div className="w-full md:border-b md:border-[#78A25D]">
              <textarea
                name="message"
                cols={50}
                rows={5}
                placeholder="Meddelande"
                className="w-full resize-none rounded-2xl border-none bg-white px-3 py-3 pl-10 pr-3 text-[#282828] placeholder-[#B0B0B0] outline-none transition focus:placeholder-transparent focus:ring-1 focus:ring-[#78A25D] md:bg-transparent md:px-0 md:focus:ring-0"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:justify-end">
            <PrimaryButton text="Skicka meddelande" className="mt-3 w-full" />
          </div>
        </form>
      </div>
      <div className="hidden md:block md:min-h-full md:w-1/2">
        <ContactImageMarquee />
      </div>
    </section>
  );
};

export default Contact;
