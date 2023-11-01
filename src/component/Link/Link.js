import React from "react";
import Button from "../Button";
import { Link as ScrollLink } from 'react-scroll';


const LinkBar = () => {
  return (
    <nav className="lg:flex lg:gap-8 hidden">
      <ul className="flex flex-row gap-8 pt-3">
        <li className="font-bold text-oxford_blue cursor-pointer  hover:text-royal_blue">
          Home
        </li>

        <li className="font-bold text-oxford_blue cursor-pointer  hover:text-royal_blue">
          <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
        </li>

        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <ScrollLink to="about-us" smooth={true} duration={500}>About Us</ScrollLink>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <ScrollLink to="blog" smooth={true} duration={500}>Blog</ScrollLink>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
        </li>
      </ul>
      <Button text="BOOK APPOINTMENT" />
    </nav>
  );
};

export default LinkBar;
