import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const EducatorFooter = () => {
  return (
    <div className="w-[100%] h-[25vh] bg-[#3375e0] py-4 flex flex-col gap-2 items-center justify-center max-sm:h-auto">
      <h1 className="text-4xl text-white max-lg:text-xl">MindSpark</h1>
      <p className="w-[50%] text-center text-white max-lg:w-[90%] max-lg:text-sm">
        MindSpark is a powerful LMS offering clear, step-by-step tutorials on
        course creation, content delivery, and student management, complete with
        all necessary code for a smooth learning experience.
      </p>
      <h2 className="text-white flex gap-1 items-center max-sm:text-sm">
        <FaRegCopyright className="text-sm" />
        CopyRights 2024 MindSpark
      </h2>
    </div>
  );
};

export default EducatorFooter;
