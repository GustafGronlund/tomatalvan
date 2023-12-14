import React from "react";
import { IconType } from "react-icons";

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  icon: IconType;
  lowercase: boolean;
};

const ContactInput: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  icon: Icon,
  lowercase,
}) => {
  return (
    <div className="relative flex items-center text-[#78A25D] transition md:border-b md:border-[#78A25D]">
      <Icon className="pointer-events-none absolute ml-3 h-5 w-5 md:ml-0 md:hidden md:h-0 md:w-0" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-2xl border-none bg-white px-3 py-3 pl-10 pr-3 text-[#282828] placeholder-[#B0B0B0] outline-none transition placeholder:normal-case focus:ring-1 focus:ring-[#78A25D] md:rounded-none md:bg-transparent md:px-0 md:focus:placeholder-transparent md:focus:ring-0 ${
          lowercase ? "lowercase" : "normal-case"
        }`}
      />
    </div>
  );
};

export default ContactInput;
