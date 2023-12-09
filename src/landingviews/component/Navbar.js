import React from "react";
import LinkBar from "./Link/Link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ MobileLink }) => {
  return (
    <header className="w-full lg:pt-10 pt-4 cursor-pointer bg-hero">
      <div className="mx-auto container">
        <div className="flex items-center justify-between">
          <h1 className="font-extrabold text-4xl text-oxford_blue">Dentol.</h1>

          <LinkBar />

          <AiOutlineMenu
            onClick={() => MobileLink(true)}
            className="lg:hidden text-3xl text-oxford_blue cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
