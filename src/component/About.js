import React from "react";
import Button from "./Button";
import about_img from "../Assets/about-banner.png";

const About = () => {
  return (
    <section className="flex content-center gap-20 mt-36 about">
      <figure className="ml-32">
        <img src={about_img} alt="" className="h-[35rem] w-[30rem]" />
      </figure>
      <div className="w-[35rem] pt-4 about-container">
        <h2 className="text-3xl text-royal_blue font-bold pt-6 uppercase">
          About Us
        </h2>
        <h1 className="text-6xl text-oxford_blue_2 font-bold pt-4">
          We Care For Your Dental Health
        </h1>
        <p className="text-oxford_blue_2 pt-4">
          Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam
          quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id
          tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo
          vehicula arcu.
        </p>
        <p className="text-oxford_blue_2 pt-4">
          Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis,
          ultricies posuere sapien. Morbi a dignissim enim. Fusce elementum,
          augue in elementum porta, sapien nunc volutpat ex, a accumsan nunc
          lectus eu lectus.
        </p>
        <div className="pt-5">
          <Button text="READ MORE" />
        </div>
      </div>
    </section>
  );
};

export default About;
