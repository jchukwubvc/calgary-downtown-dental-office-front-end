import React from "react";
import Button from "../Button";

const LinkBar = () => {
  return (
    <nav className="lg:flex lg:gap-8 hidden">
      <ul className="flex flex-row gap-8 pt-3">
        <li className="font-bold text-oxford_blue cursor-pointer  hover:text-royal_blue">
          Home
        </li>

        <li className="font-bold text-oxford_blue cursor-pointer  hover:text-royal_blue">
          Services
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          About Us
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          Blog
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          Contact
        </li>
      </ul>
      <Button text="BOOK APPOINTMENT" />
    </nav>
  );
};

export default LinkBar;
