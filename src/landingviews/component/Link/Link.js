import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';



const LinkBar = () => {
    const navigate = useNavigate();

    const goToLoginPage = () => {
      // Navigate to the "/other" route when the button is clicked
      navigate('/auth/login');
    };

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
      <button
          onClick={goToLoginPage}
          className="bg-gradient-to-tr from-carolina_blue to-royal_blue
      hover:bg-gradient-to-tl from-carolina_blue to-royal_blue cursor-pointer py-4
      px-6 rounded-sm text-white text-[18px] font-bold text-opacity-[0.8]">
        Book Appointment
      </button>
    </nav>
  );
};

export default LinkBar;
