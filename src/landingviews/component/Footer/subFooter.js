import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";

const SubFooter = () => {
  return (
    <section className="mt-20 bg-oxford_blue_2 flex gap-32 subfooter">
      <div className="pt-10 ml-32 subfooter-head">
        <h1 className="text-white text-3xl font-extrabold">DENTOL.</h1>
        <p className="text-md text-steel_blue pt-8 w-52">
          Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur
          sagittis libero tincidunt tempor finibus.
        </p>
        <div className="text-steel_blue flex gap-5 pt-4">
          <span className="bg-gradient-to-tr from-carolina_blue to-royal_blue h-10 w-10 text-white rounded-full flex justify-center items-center">
            <AiOutlineClockCircle />
          </span>
          <div>
            <h1>Monday - Saturday:</h1>
            <p>9:00am - 10:00Pm</p>
          </div>
        </div>
      </div>
      <ul className="pt-10 ">
        <h1 className="text-white text-2xl font-bold w-40">Other Links</h1>
        <li className="pt-8 text-steel_blue font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Home
        </li>
        <li className="pt-4 text-steel_blue font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          About Us
        </li>
        <li className="pt-4 text-steel_blue font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Services
        </li>
        <li className="pt-4 text-steel_blue font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Projects
        </li>
        <li className="pt-4 text-steel_blue font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Our Teams
        </li>
        <li className="pt-4 text-steel_blue font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Latest Blog
        </li>
      </ul>

      <div className="pt-10 subfooter-card">
        <h1 className="text-white text-2xl font-bold w-40">Other Links</h1>
        <div className="pt-8 text-steel_blue w-32 font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Root Canal
        </div>
        <div className="pt-4 text-steel_blue w-40 font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Alignment Teeth
        </div>
        <div className="pt-4 text-steel_blue w-40 font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Cavity Inspection
        </div>
        <div className="pt-4 text-steel_blue font-bold inline-flex w-40 gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Cosmetic Teeth
        </div>
        <div className="pt-4 text-steel_blue font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Oral Hygiene
        </div>
        <div className="pt-4 text-steel_blue font-bold inline-flex gap-1 cursor-pointer hover:text-white">
          <span className="pt-1 text-flickr_blue font-extrabold">
            <AiOutlinePlus size="19" />
          </span>
          Live Advisory
        </div>
      </div>

      <div className="pt-10 mr-52 contact">
        <h1 className="text-white text-2xl font-bold">Contact Us</h1>
        <div className="pt-8 inline-flex gap-2 text-steel_blue w-[22rem]">
          <span className="bg-gradient-to-tr from-carolina_blue to-royal_blue h-10 w-10 text-white rounded-full flex justify-center items-center">
            <AiOutlineEnvironment />
          </span>
          1247/Plot No. 39, Phase II
        </div>
        <div className="pt-4 inline-flex gap-2 text-steel_blue w-[24rem]">
          <span className="bg-gradient-to-tr from-carolina_blue to-royal_blue h-10 w-10 rounded-full text-white flex justify-center items-center">
            <AiOutlinePhone />
          </span>
          +348901933
        </div>
        <div className="pt-4 inline-flex gap-2 text-steel_blue w-[24rem]">
          <span className="bg-gradient-to-tr from-carolina_blue to-royal_blue h-10 w-10 text-white rounded-full flex justify-center items-center">
            <AiOutlineMail />
          </span>{" "}
          help@example.com
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
