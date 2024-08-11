import React from "react";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { SlLayers } from "react-icons/sl";
import { BsCameraVideo } from "react-icons/bs";
import { PiLifebuoyLight } from "react-icons/pi";

const CourseTransform = () => {
  return (
    <div className="w-[100%] h-[88vh] bg-white py-5 flex flex-col justify-center items-center max-lg:h-auto">
      <h1 className='text-4xl text-[#1f305e] font-semibold pb-2 max-sm:text-2xl max-sm:text-center inOut'>
        Transform Your Life
      </h1>
      <p className="text-2xl text-[#1f305e] pb-8 max-sm:text-sm inOut">
        Discover Your Perfect Program In Our Courses.
      </p>
      <div className="w-[80%] grid grid-cols-4 gap-4 items-center justify-center max-lg:grid-cols-1 max-sm:w-[100%]">
        <div className="w-full h-[200px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex flex-col items-center gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <PiChalkboardTeacherLight className="text-6xl text-[#3375e0]"/>
          <h1 className="text-xl font-semibold text-[#1f305e]">Expert Teacher</h1>
          <p className="text-center text-[#77838f] text-lg">Learn from industry leaders with years of teaching experience and expertise.</p>
        </div>
        <div className="w-full h-[200px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex flex-col items-center gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <SlLayers className="text-6xl text-[#3375e0]"/>
          <h1 className="text-xl font-semibold text-[#1f305e]">Self Development</h1>
          <p className="text-center text-[#77838f] text-lg">Enhance your skills and knowledge for personal and professional growth.</p>
        </div>
        <div className="w-full h-[200px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex flex-col items-center gap-3 px-4 py-4 max-sm:h-auto appearRight">
          <BsCameraVideo className="text-6xl text-[#3375e0]"/>
          <h1 className="text-xl font-semibold text-[#1f305e]">Remote learning</h1>
          <p className="text-center text-[#77838f] text-lg">Enhance skills and advance your career through diverse remote learning programs.</p>
        </div>
        <div className="w-full h-[200px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex flex-col items-center gap-3 px-4 py-4 max-sm:h-auto appearRight">
          <PiLifebuoyLight className="text-6xl text-[#3375e0]"/>
          <h1 className="text-xl font-semibold text-[#1f305e]">Life Time Support</h1>
          <p className="text-center text-[#77838f] text-lg">Receive continuous support and resources throughout your learning journey.</p>
        </div>
      </div>
    </div>
  );
};

export default CourseTransform;
