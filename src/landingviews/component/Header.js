import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="bg-oxford_blue_2 lg:flex lg:justify-between py-4 hidden">
      <ul className="list-none flex gap-14 ml-24">
        <li className="text-white text-opacity-[0.9] flex flex-row content-center justify-center gap-1 pt-1">
          <span className=" text-royal_blue pt-1">
            <AiOutlineMail />
          </span>
          abc@example.com
        </li>
        <li className="text-white text-opacity-[0.9] flex flex-row content-center justify-center gap-1 pt-1">
          <span className=" text-royal_blue pt-1">
            <AiOutlinePhone />
          </span>
          +348901933
        </li>
      </ul>
      <figure className="flex mr-44 gap-3 pt-1">
        <span className="text-white text-[24px] cursor-pointer hover:text-royal_blue">
          <AiFillFacebook />
        </span>
        <span className="text-white text-[24px] cursor-pointer hover:text-royal_blue">
          <AiFillInstagram />
        </span>
        <span className="text-white text-[24px] cursor-pointer hover:text-royal_blue">
          <AiOutlineTwitter />
        </span>
        <span className="text-white text-[24px] cursor-pointer hover:text-royal_blue">
          <AiFillYoutube />
        </span>
      </figure>
    </nav>
  );
};

export default Header;
