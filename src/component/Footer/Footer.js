import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-oxford_blue_3 h-20 footer">
      <div className="text-white pt-6 ml-20">
        <p className="font-bold text-2xl">© 2023 All Rights Reserved.</p>
      </div>
      <div className="flex gap-4 pt-4 mr-14">
        <span className="h-12 w-12 rounded-full cursor-pointer flex justify-center items-center hover:bg-gradient-to-tr from-carolina_blue to-royal_blue bg-gainsboro_50 text-white">
          <AiFillFacebook />
        </span>
        <span className="h-12 w-12 rounded-full cursor-pointer flex justify-center items-center hover:bg-gradient-to-tr from-carolina_blue to-royal_blue bg-gainsboro_50 text-white">
          <AiFillInstagram />
        </span>
        <span className="h-12 w-12 rounded-full cursor-pointer flex justify-center items-center hover:bg-gradient-to-tr from-carolina_blue to-royal_blue bg-gainsboro_50 text-white">
          <AiOutlineTwitter />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
