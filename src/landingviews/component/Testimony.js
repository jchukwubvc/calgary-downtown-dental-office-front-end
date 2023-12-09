import React from "react";
import doctor1 from "../Assets/doctor-1.png";
import doctor2 from "../Assets/doctor-2.png";
import doctor3 from "../Assets/doctor-3.png";
import doctor4 from "../Assets/doctor-4.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Appointment from "./Appointment";

const Testimony = () => {
  return (
    <section className="mt-20">
      <div className="text-center testimony-head">
        <h2 className="text-2xl text-royal_blue font-bold">OUR DOCTOR</h2>
        <h1 className="text-6xl text-oxford_blue_2 font-bold pt-3">
          Best Expert Dentist
        </h1>
      </div>
      <div className="mt-20 flex content-center gap-10 testimony-box">
        <div className="border-2 border-gainsboro_50 h-[26rem] w-[15rem] text-center ml-32 rounded-md testimony-card">
          <figure className="pt-6 ml-7">
            <img src={doctor1} alt="" className="h-[12rem] w-[11rem]" />
          </figure>
          <h1 className="text-[32px] text-oxford_blue_2 font-bold leading-8 pt-4 hover:text-royal_blue cursor-pointer">
            Howard Holmes
          </h1>
          <p className="text-royal_blue pt-3 text-xl font-semibold">Dentist</p>
          <div className="flex gap-6 ml-8 pt-4">
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiFillFacebook className=" " size="19px" />
            </span>
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiOutlineTwitter size="19px" />
            </span>
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiFillInstagram size="19px" />
            </span>
          </div>
        </div>
        <div className="border-2 border-gainsboro_50 h-[26rem] w-[15rem] text-center rounded-md testimony-card">
          <figure className="pt-6 ml-7">
            <img src={doctor2} alt="" className="h-[12rem] w-[11rem]" />
          </figure>
          <h1 className="text-[34.5px] text-oxford_blue_2 font-bold leading-8 pt-4 hover:text-royal_blue cursor-pointer">
            Ella Thompson
          </h1>
          <p className="text-royal_blue pt-3 text-xl font-semibold">Dentist</p>
          <div className="flex gap-6 ml-8 pt-4">
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiFillFacebook className=" " size="19px" />
            </span>
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiOutlineTwitter size="19px" />
            </span>
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiFillInstagram size="19px" />
            </span>
          </div>
        </div>
        <div className="border-2 border-gainsboro_50 h-[26rem] w-[15rem] text-center rounded-md testimony-card">
          <figure className="pt-6 ml-7">
            <img src={doctor3} alt="" className="h-[12rem] w-[11rem]" />
          </figure>
          <h1 className="text-[34px] text-oxford_blue_2 font-bold leading-8 pt-4 hover:text-royal_blue cursor-pointer">
            Vincent Cooper
          </h1>
          <p className="text-royal_blue pt-3 text-xl font-semibold">Dentist</p>
          <div className="flex gap-6 ml-8 pt-4">
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiFillFacebook className=" " size="19px" />
            </span>
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiOutlineTwitter size="19px" />
            </span>
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiFillInstagram size="19px" />
            </span>
          </div>
        </div>
        <div className="border-2 border-gainsboro_50 h-[26rem] w-[15rem] text-center rounded-md testimony-card">
          <figure className="pt-6 ml-7">
            <img src={doctor4} alt="" className="h-[12rem] w-[11rem]" />
          </figure>
          <h1 className="text-[34px] text-oxford_blue_2 font-bold leading-8 pt-4 hover:text-royal_blue cursor-pointer">
            Danielle Bryant
          </h1>
          <p className="text-royal_blue pt-3 text-xl font-semibold">Dentist</p>
          <div className="flex gap-6 ml-8 pt-4">
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiFillFacebook className=" " size="19px" />
            </span>
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiOutlineTwitter size="19px" />
            </span>
            <span className="h-10 w-10 rounded-full bg-steel_blue flex justify-center items-center text-royal_blue hover:bg-royal_blue hover:text-white cursor-pointer">
              <AiFillInstagram size="19px" />
            </span>
          </div>
        </div>
      </div>
      <Appointment />
    </section>
  );
};

export default Testimony;
