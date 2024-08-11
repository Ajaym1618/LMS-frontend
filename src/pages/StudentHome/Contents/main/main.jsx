import React from "react";
import technify from "../../../../assets/techny.gif";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiStopwatch } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";

const Main = () => {
  return (
    <div className="h-auto">
      <div className="w-[100%] h-auto flex bg-[#f6f5fa] max-lg:flex-col">
        <div className="w-[100%] h-full flex flex-col pt-24 justify-start items-start px-10 gap-2 max-sm:pt-10 max-sm:px-5 landing-appearLeft">
          <h1 className="text-[50px] font-semibold text-[#1f305e] leading-tight max-sm:text-4xl">
            Improve your skills as the world needs with{" "}
            <span className="text-[#3375e0] animate-pulse">MindSpark!</span>
          </h1>
          <p className="text-lg text-[#5d76a9] max-sm:text-sm">
            Start developing your abilities and potential by learning new skills
            that the world needs, and to build your future career that is better
            with MindSpark platform
          </p>
          <button
            type="button"
            className="text-xl mt-6 ml-4 px-8 py-3 font-semibold flex gap-3 items-center rounded-br-2xl bg-[#3375e0] text-white transition-all duration-150 ease-in-out border-2 hover:bg-white hover:text-[#3375e0] hover:border-dashed  border-[#3375e0] cursor-pointer max-sm:px-5 max-sm:py-2 max-sm:text-lg"
          >
            Get started
            <IoIosArrowRoundForward className="text-3xl" />
          </button>
        </div>
        <div className="w-[100%] h-full flex justify-center items-start max-lg:hidden LandingInOut">
          <div className="w-[450px] ">
            <img src={technify} alt="" className="w-[100%] cursor-not-allowed" />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-auto bg-[#f6f5fa] grid grid-cols-3 justify-around items-center max-lg:grid-cols-1 max-sm:mt-4 landingDownUp">
        <div className="w-full h-[160px] flex justify-center py-5 max-sm:py-2">
          <div className="w-[80%] px-5 py-2 flex gap-4 bg-[#3375e0] text-white transition-all duration-150 ease-in-out hover:text-[#3375e0] hover:bg-white border-[#3375e0] hover:border-2 hover:border-dashed  rounded-bl-[50px]  max-lg:w-[90%]">
            <GiStopwatch className="text-6xl pt-4" />
            <div className="flex justify-center items-start flex-col">
              <h1 className="text-lg font-semibold">Lifetime Access</h1>
              <p>
                Access every courses for life without any time limit on When you
                want to study
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[160px] flex justify-center py-5 max-sm:py-2">
          <div className="w-[80%] px-5 py-2 flex gap-4 bg-[#3375e0] text-white transition-all duration-150 ease-in-out hover:text-[#3375e0] hover:bg-white border-[#3375e0] hover:border-2 hover:border-dashed  rounded-bl-[50px] max-lg:w-[90%]">
            <FaPeopleGroup className="text-6xl pt-4" />
            <div className="flex justify-center items-start flex-col">
              <h1 className="text-lg font-semibold">Updated Skills</h1>
              <p>
                Every courses always presents the latest knowledge needed by
                today's business
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[160px] flex justify-center py-5 max-sm:py-2">
          <div className="w-[80%] px-5 py-2 flex gap-4 bg-[#3375e0] text-white transition-all duration-150 ease-in-out hover:text-[#3375e0] hover:bg-white border-[#3375e0] hover:border-2 hover:border-dashed  rounded-bl-[50px] max-lg:w-[90%]">
            <GiTeacher className="text-6xl pt-4" />
            <div className="flex justify-center items-start flex-col">
              <h1 className="text-lg font-semibold">Lifetime Access</h1>
              <p>
                Mentors who teach you are those who are experts and experienced
                in their fields
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
