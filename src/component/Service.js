import React from "react";
import root from "../Assets/service-icon-1.png";
import root2 from "../Assets/service-icon-2.png";
import root3 from "../Assets/service-icon-3.png";
import root4 from "../Assets/service-icon-4.png";
import root5 from "../Assets/service-icon-5.png";
import root6 from "../Assets/service-icon-6.png";
import banner from "../Assets/service-banner.png";

export const Service = () => {
  return (
    <section>
      <div className="text-center pt-20 service-container">
        <h2 className="text-2xl text-royal_blue font-bold uppercase">
          Our Services
        </h2>
        <h1 className="text-6xl text-oxford_blue_2 font-bold pt-3">
          What We Provide
        </h1>
      </div>
      <div className="flex content-center gap-6 pt-20 ml-[3rem] service-card">
        <div className="ml-10">
          <div className="flex gap-6 border-2 border-gainsboro_50 h-52 w-[21rem] rounded-md">
            <figure className="mt-12 pl-4">
              <img src={root} alt="" />
            </figure>
            <div className="mt-11 ml-2">
              <h1 className="text-3xl text-oxford_blue_2 font-bold">
                Root Canal
              </h1>
              <p className="pt-2 text-oxford_blue_2 text-md">
                Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
              </p>
            </div>
          </div>
          <div className="flex gap-6 border-2 border-gainsboro_50 h-52 w-[21rem] rounded-md mt-4">
            <figure className="mt-12 pl-4">
              <img src={root2} alt="" />
            </figure>
            <div className="mt-11 ml-2">
              <h1 className="text-3xl text-oxford_blue_2 font-bold">
                Cosmotic Teeth
              </h1>
              <p className="pt-2 text-oxford_blue_2 text-md">
                Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
              </p>
            </div>
          </div>
          <div className="flex gap-6 border-2 border-gainsboro_50 h-52 w-[21rem] rounded-md mt-4">
            <figure className="mt-12 pl-4">
              <img src={root3} alt="" />
            </figure>
            <div className="mt-11 ml-2">
              <h1 className="text-3xl text-oxford_blue_2 font-bold">
                Live Advisory
              </h1>
              <p className="pt-2 text-oxford_blue_2 text-md">
                Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
              </p>
            </div>
          </div>
        </div>
        <figure className="pt-32 banner">
          <img src={banner} alt="" />
        </figure>
        <div className="ml-10">
          <div className="flex gap-6 border-2 border-gainsboro_50 h-52 w-[21rem] rounded-md">
            <figure className="mt-12 pl-4">
              <img src={root4} alt="" />
            </figure>
            <div className="mt-11 ml-2">
              <h1 className="text-3xl text-oxford_blue_2 font-bold">
                Alignment Teeth
              </h1>
              <p className="pt-2 text-oxford_blue_2 text-md">
                Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
              </p>
            </div>
          </div>
          <div className="flex gap-6 border-2 border-gainsboro_50 h-52 w-[21rem] rounded-md mt-4">
            <figure className="mt-12 pl-4">
              <img src={root5} alt="" />
            </figure>
            <div className="mt-11 ml-2">
              <h1 className="text-3xl text-oxford_blue_2 font-bold">
                Oral Hygiene
              </h1>
              <p className="pt-2 text-oxford_blue_2 text-md">
                Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
              </p>
            </div>
          </div>
          <div className="flex gap-6 border-2 border-gainsboro_50 h-52 w-[21rem] rounded-md mt-4">
            <figure className="mt-12 pl-4">
              <img src={root6} alt="" />
            </figure>
            <div className="mt-11 ml-2">
              <h1 className="text-3xl text-oxford_blue_2 font-bold">
                Cavity Inspection
              </h1>
              <p className="pt-2 text-oxford_blue_2 text-md">
                Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
