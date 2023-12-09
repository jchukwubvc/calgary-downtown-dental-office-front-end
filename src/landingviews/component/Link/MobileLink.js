import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MobileLink = ({ MobileLink }) => {
  return (
    <nav className="lg:hidden bg-hero w-full h-[30rem]">
      <AiOutlineClose
        onClick={() => MobileLink(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />
      <ul className="flex flex-col justify-center space-y-8 h-[30rem] items-center capitalize font-secondary">
        <li className="font-bold text-oxford_blue cursor-pointer text-2xl  hover:text-royal_blue">
          Home
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer text-2xl  hover:text-royal_blue">
          Services
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer text-2xl  hover:text-royal_blue">
          About Us
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer text-2xl  hover:text-royal_blue">
          Blog
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer text-2xl  hover:text-royal_blue">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default MobileLink;
