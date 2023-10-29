import React from "react";
import { BsFillCalendar2Fill } from "react-icons/bs";
import blog1 from "../Assets/blog-1.jpg";
import blog2 from "../Assets/blog-2.jpg";
import blog3 from "../Assets/blog-3.jpg";

const Blog = () => {
  return (
    <section className="mt-40 blog-home">
      <div className="text-center blog">
        <h1 className="text-2xl text-royal_blue font-bold uppercase">
          OUR BLOG
        </h1>
        <h2 className="text-6xl text-oxford_blue_2 font-bold pt-3">
          Latest Blog & News
        </h2>
      </div>
      <div className="mt-20 bg-lavender_web flex content-center gap-8 blog-box">
        <div className="h-[35rem] w-[22rem] ml-28 bg-cultured blog-card">
          <figure className="relative ">
            <img src={blog1} alt="" className="" />
            <span className="absolute bottom-6 left-2 bg-royal_blue text-white flex px-3 py-3 rounded-md gap-4">
              <BsFillCalendar2Fill /> 20TH AUGUST, 2022
            </span>
          </figure>
          <h1 className="pt-6 pl-6 text-3xl text-oxford_blue font-bold cursor-pointer hover:text-royal_blue">
            Cras accumsan nulla nec lacus ultricies placerat.
          </h1>
          <p className="pt-5  ml-6">
            Curabitur sagittis libero tincidunt tempor finibus. Mauris at
            dignissim ligula, nec tristique orci.
          </p>
          <button className="ml-6 pt-5 border-b-4 border-royal_blue text-royal_blue cursor-pointer font-bold hover:text-oxford_blue_3 hover:border-oxford_blue_3">
            READ MORE
          </button>
        </div>
        <div className="h-[35rem] w-[22rem]  bg-cultured blog-card">
          <figure className="relative ">
            <img src={blog2} alt="" className="" />
            <span className="absolute bottom-6 left-2 bg-royal_blue text-white flex px-3 py-3 rounded-md gap-4">
              <BsFillCalendar2Fill /> 20TH AUGUST, 2022
            </span>
          </figure>
          <h1 className="pt-6 pl-6 text-3xl text-oxford_blue font-bold cursor-pointer hover:text-royal_blue">
            Cras accumsan nulla nec lacus ultricies placerat.
          </h1>
          <p className="pt-5  ml-6">
            Curabitur sagittis libero tincidunt tempor finibus. Mauris at
            dignissim ligula, nec tristique orci.
          </p>
          <button className="ml-6 pt-5 border-b-4 border-royal_blue text-royal_blue cursor-pointer font-bold hover:text-oxford_blue_3 hover:border-oxford_blue_3">
            READ MORE
          </button>
        </div>
        <div className="h-[35rem] w-[22rem]   bg-cultured blog-card">
          <figure className="relative ">
            <img src={blog3} alt="" className="" />
            <span className="absolute bottom-6 left-2 bg-royal_blue text-white flex px-3 py-3 rounded-md gap-4">
              <BsFillCalendar2Fill /> 20TH AUGUST, 2022
            </span>
          </figure>
          <h1 className="pt-6 pl-6 text-3xl text-oxford_blue font-bold cursor-pointer hover:text-royal_blue">
            Cras accumsan nulla nec lacus ultricies placerat.
          </h1>
          <p className="pt-5  ml-6">
            Curabitur sagittis libero tincidunt tempor finibus. Mauris at
            dignissim ligula, nec tristique orci.
          </p>
          <button className="ml-6 pt-5 border-b-4 border-royal_blue text-royal_blue cursor-pointer font-bold hover:text-oxford_blue_3 hover:border-oxford_blue_3">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
