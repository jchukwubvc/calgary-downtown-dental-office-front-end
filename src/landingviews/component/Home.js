import React from "react";
import Button from "./Button";
import Hero_Banner from "../Assets/hero-banner.png";

export const Home = () => {
  return (
    <section className="flex gap-10  bg-hero bg-cover h-[60rem] home">
      <div className="pt-[20rem] w-[50%] ml-40 home-container">
        <h2 className="text-royal_blue text-3xl font-extrabold  uppercase">
          Welcome to Dentol
        </h2>
        <h1 className=" text-oxford_blue_2 font-bold text-[5.3rem]  leading-[85px] pt-3">
          We Are Best In Dental Service
        </h1>
        <p className="text-xl sm:text-md pt-8 text-oxford_blue opacity-[0.8]">
          Welcome to #1 Calgary Downtown Dental Office, where your oral health and radiant smile are our top priorities.
          Nestled in the heart of Calgary's vibrant downtown, our state-of-the-art dental practice is dedicated to providing
          exceptional dental care in a warm and welcoming environment.
        </p>
      </div>
      <figure className="pt-[10rem] h-[35rem] w-[35rem]">
        <img src={Hero_Banner} alt="hero-banner" />
      </figure>
    </section>
  );
};

export default Home;
