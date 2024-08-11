import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CourseDetails = () => {
  const navigate = useNavigate();
  const courseData = useSelector((state) => state.courseDetail);
  console.log(courseData);

  return (
    <div className="w-[100%] h-[88vh] bg-[#f6f5fa] py-5 flex flex-col justify-center items-center max-lg:h-auto appearLeft">
      <h1 className="text-4xl text-[#1f305e] font-semibold pb-2 max-sm:text-2xl max-sm:text-center">
        Popular Courses
      </h1>
      <p className="text-2xl text-[#1f305e] pb-8 max-sm:text-sm ">
        Find the Best Fit for Your Learning Goals
      </p>
      {courseData.length > 0 ? (
        <div className="w-[80%] grid grid-cols-4 gap-4 items-center justify-center pb-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-[100%]">
          {courseData.slice(0, 4).map((course, i) => (
            <div
              key={i}
              className="w-[300px] h-[380px] bg-white shadow-xl shadow-[#9bc0f0] rounded-bl-[60px] overflow-hidden duration-150 ease-in-out transition-all hover:scale-95 inOut"
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
        <div className="w-full h-[40vh] text-4xl text-[#3375e0] flex justify-center items-center appearLeft">
          <span className="px-5 py-2 border-2 border-[#3375e0] border-dashed rounded-md">
            No match found
          </span>
        </div>
      )}
      <button
        type="button"
        className="px-4 py-2 text-xl rounded-br-2xl bg-[#3375e0] text-white transition-all duration-150 ease-in-out border-2 hover:bg-white hover:text-[#3375e0] hover:border-dashed  border-[#3375e0] cursor-pointer"
        onClick={() => navigate("/category")}
      >
        All Courses
      </button>
    </div>
  );
};

export default CourseDetails;
