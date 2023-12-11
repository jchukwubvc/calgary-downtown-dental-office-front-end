import React from "react";
import Button from "./Button";
import img from "../Assets/cta-banner.png";
import {useNavigate} from "react-router-dom";

const Appointment = () => {

    const navigate = useNavigate();

    const goToLoginPage = () => {
        // Navigate to the "/other" route when the button is clicked
        navigate('/auth/login');
    };

  return (
    <section className="mt-28 h-[31.5rem] w-full bg-oxford_blue flex content-center gap-20 appointment">
      <figure className="ml-24 pt-6">
        <img src={img} alt="" className="h-[30rem] w-[32rem]" />
      </figure>
      <div className="pt-36 w-[33rem] appointment-box">
        <h1 className="text-3xl text-royal_blue font-bold">
          Book Dental Appointment
        </h1>
        <h1 className="text-5xl text-white font-extrabold pt-3">
          We Are open And Welcoming Patients
        </h1>
        <div className="pt-8">
            <button
                onClick={goToLoginPage}
                className="bg-gradient-to-tr from-carolina_blue to-royal_blue
      hover:bg-gradient-to-tl from-carolina_blue to-royal_blue cursor-pointer py-4
      px-6 rounded-sm text-white text-[18px] font-bold text-opacity-[0.8]">
                Book Appointment
            </button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
