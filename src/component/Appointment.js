import React from "react";
import Button from "./Button";
import img from "../Assets/cta-banner.png";

const Appointment = () => {
  return (
    <section className="mt-28 h-[31.5rem] w-full bg-oxford_blue flex content-center gap-20 appointment">
      <figure className="ml-24 pt-6">
        <img src={img} alt="" className="h-[30rem] w-[32rem]" />
      </figure>
      <div className="pt-36 w-[33rem] appointment-box">
        <h1 className="text-3xl text-royal_blue font-bold">
          Book Dentail Appointment
        </h1>
        <h1 className="text-5xl text-white font-extrabold pt-3">
          We Are open And Welcoming Patients
        </h1>
        <div className="pt-8">
          <Button text="BOOK APPOINTMENT" />
        </div>
      </div>
    </section>
  );
};

export default Appointment;
