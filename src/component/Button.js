import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-gradient-to-tr from-carolina_blue to-royal_blue hover:bg-gradient-to-tl from-carolina_blue to-royal_blue cursor-pointer py-4 px-6 rounded-sm text-white text-[18px] font-bold text-opacity-[0.8]">
        {text}
      </button>
    </div>
  );
};

export default Button;
