import React, { useEffect, useRef, useState } from "react";
import search from "../../../../assets/search.gif";
import { RiComputerLine } from "react-icons/ri";
import { TbOlympics } from "react-icons/tb";
import { GiMusicalNotes, GiHighGrass, GiMeditation } from "react-icons/gi";
import {
  IoFitnessOutline,
  IoCameraOutline,
  IoLanguageOutline,
} from "react-icons/io5";
import {
  PiCookingPot,
  PiFlowerLotusLight,
  PiFilmSlateLight,
  PiMicrophoneStage,
} from "react-icons/pi";
import { MdFlight } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { BiFridge } from "react-icons/bi";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Category = () => {
  const categories = [
    { name: "All" },
    {
      name: "Computer Science & IT",
      icon: <RiComputerLine className="text-[#1f305e]" />,
    },
    { name: "Sports", icon: <TbOlympics className="text-[#1f305e]" /> },
    { name: "Music", icon: <GiMusicalNotes className="text-[#1f305e]" /> },
    {
      name: "Fitness & Wellness",
      icon: <IoFitnessOutline className="text-[#1f305e]" />,
    },
    { name: "Cooking", icon: <PiCookingPot className="text-[#1f305e]" /> },
    {
      name: "Travel & Adventure",
      icon: <MdFlight className="text-[#1f305e]" />,
    },
    {
      name: "Photography",
      icon: <IoCameraOutline className="text-[#1f305e]" />,
    },
    { name: "Gardening", icon: <GiHighGrass className="text-[#1f305e]" /> },
    {
      name: "Fashion & Beauty",
      icon: <PiFlowerLotusLight className="text-[#1f305e]" />,
    },
    { name: "Crafts", icon: <IoMdPaperPlane className="text-[#1f305e]" /> },
    { name: "Creative Writing", icon: <TfiWrite className="text-[#1f305e]" /> },
    {
      name: "Film & Videography",
      icon: <PiFilmSlateLight className="text-[#1f305e]" />,
    },
    { name: "Interior Design", icon: <BiFridge className="text-[#1f305e]" /> },
    {
      name: "Public Speaking",
      icon: <PiMicrophoneStage className="text-[#1f305e]" />,
    },
    {
      name: "Mindfulness & Meditation",
      icon: <GiMeditation className="text-[#1f305e]" />,
    },
    {
      name: "Languages & Linguistics",
      icon: <IoLanguageOutline className="text-[#1f305e]" />,
    },
  ];
  const [category, setCategory] = useState("All");
  const courseData = useSelector((state) => state.courseDetail);
  console.log(category);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust scroll distance as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust scroll distance as needed
      behavior: "smooth",
    });
  };

  const filteredData = courseData.filter((val) => {
    if (category === "All") {
      return courseData;
    } else {
      return val.courseCategory === category;
    }
  });

  return (
    <div className="relative w-[100%] h-auto px-5 py-6 bg-[#f6f5fa]">
      <h1 className="text-4xl text-[#1f305e] font-semibold max-sm:text-2xl">
        Categories
      </h1>
      <button
        onClick={scrollLeft}
        className="text-2xl absolute top-28 left-2 transform -translate-y-1/2 text-[#3375e0] max-lg:hidden"
      >
        <FaCircleChevronLeft />
      </button>
      <button
        onClick={scrollRight}
        className="text-2xl absolute top-28 right-2 transform -translate-y-1/2 text-[#3375e0] max-lg:hidden"
      >
        <FaCircleChevronRight />
      </button>
      <div
        ref={scrollContainerRef}
        className="px-5 mx-8 py-6 flex gap-4 overflow-x-scroll overflow-y-hidden max-lg:mx-0"
      >
        {categories?.map((cat, i) => (
          <div
            key={i}
            className={`max-w-fit min-w-fit px-4 py-2 rounded-br-2xl transition-all duration-150 ease-in-out font-semibold border-2 cursor-pointer max-lg:px-2 max-lg:py-1 max-sm:text-[10px] flex items-center gap-2 ${
              category === cat.name
                ? "bg-[#3375e0] text-white !important"
                : "bg-white text-[#3375e0] border-[#3375e0] border-dashed "
            }`}
            onClick={() => setCategory(cat.name)}
          >
            {cat.icon}
            {cat.name}
          </div>
        ))}
      </div>
      {filteredData.length > 0 ? (
        <div className="w-[80%] grid grid-cols-4 gap-4 items-center justify-center py-6 m-auto max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-8 max-sm:w-[100%] landing-appearLeft">
          {filteredData?.map((course, i) => (
            <div
              key={i}
              className="w-[300px] h-[380px] bg-white shadow-xl shadow-[#9bc0f0] rounded-bl-[60px] overflow-hidden duration-150 ease-in-out transition-all hover:scale-95 max-sm:m-auto inOut"
            >
              <video
                className="w-[100%] h-[50%] object-fill object-center border-b border-gray-300"
                poster={`http://localhost:5000/files/${course?.courseImage}`}
              >
                Your browser does not support the video tag.
              </video>
              <div className="text-[#1f305e] px-4 py-2">
                <h1 className="text-2xl font-semibold">
                  {course?.courseTitle}
                </h1>
                <p className="text-lg break-words leading-5">
                  {course?.courseDescription
                    ? course.courseDescription
                        .split(" ")
                        .slice(0, 20)
                        .join(" ") +
                      (course.courseDescription.split(" ").length > 50
                        ? "..."
                        : "")
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[80%] h-[60vh] m-auto  flex flex-col items-center justify-center text-2xl text-[#3375e0]">
          <div className="w-[200px]">
            <img src={search} alt="" className="w-[100%]" />
          </div>
          <span className="px-5 py-2 border-2 border-[#3375e0] border-dashed rounded-md">
            No match found
          </span>
        </div>
      )}
    </div>
  );
};

export default Category;
