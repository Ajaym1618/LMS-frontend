import React from "react";
import business from "../../../../assets/business.gif";
import { IoIosArrowRoundForward } from "react-icons/io";

const EducatorMain = () => {
  return (
    <>
      <div className="w-[100%] h-[88vh] flex bg-[#f6f5fa] max-lg:flex-col">
        <div className="w-[100%] h-full flex flex-col justify-center items-start px-10 gap-2 max-sm:pt-10 max-sm:px-5 landing-appearLeft">
          <h1 className="text-[50px] font-semibold text-[#1f305e] leading-tight max-sm:text-4xl">
            Take student experience to the next level with{" "}
            <span className="text-[#3375e0]">MindSpark!</span>
          </h1>
          <p className="text-lg text-[#5d76a9] max-sm:text-sm">
          MindSpark is doing everything we can to make it easy and seamless to get up and running with effective and engaging distance learning programs.
          </p>
          <button
            type="button"
            className="text-xl mt-6 ml-4 px-8 py-3 font-semibold flex gap-3 items-center rounded-br-2xl bg-[#3375e0] text-white transition-all duration-150 ease-in-out border-2 hover:bg-white hover:text-[#3375e0] hover:border-dashed border-[#3375e0] cursor-pointer max-sm:px-5 max-sm:py-2 max-sm:text-lg"
          >
            Get started
            <IoIosArrowRoundForward className="text-3xl" />
          </button>
        </div>
        <div className="w-[100%] h-full flex justify-center items-center mix-blend-multiply max-lg:hidden LandingInOut">
          <div className="w-[500px] mix-blend-multiply">
            <img src={business} alt="" className="w-[100%] mix-blend-multiply" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducatorMain;
