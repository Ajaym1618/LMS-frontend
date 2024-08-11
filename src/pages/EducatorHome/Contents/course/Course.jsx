import React from "react";
import call from "../../../../assets/call.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { timeAgo } from "../../../../api";

const Course = () => {
  const navigate = useNavigate();

  const EduData = useSelector((state) => state.eduData);
  console.log(EduData);
  const CourseData = useSelector((state) => state.courseDetail);
  console.log(CourseData);

  const filteredData = CourseData?.filter((val) => {
    if (!EduData || !EduData._id) {
      console.warn("EduData or EduData._id is undefined");
      return false;
    }
    return val.courseId === EduData._id;
  });

  console.log("filteredData", filteredData);

  return (
    <div className="w-[100%] h-auto bg-[#f6f5fa] px-10 py-10 max-lg:px-5">
      <div className="w-full px-20 py-2 flex justify-between items-center max-sm:px-3">
        <h1 className="text-4xl text-[#1f305e] font-semibold max-sm:text-lg">
          Courses
        </h1>
        <button
          type="button"
          className="px-4 py-2 font-semibold rounded-br-2xl bg-[#3375e0] text-white transition-all duration-150 ease-in-out border-2 active:scale-95 hover:bg-white hover:border-dashed hover:text-[#3375e0] border-[#3375e0] cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1"
          onClick={() => navigate("/posting")}
        >
          Post a Course
        </button>
      </div>
      {filteredData.length > 0 ? (
        <div className="w-full h-auto flex justify-center pt-6">
          <div className="w-[90%] h-auto grid grid-cols-4 gap-8 cursor-pointer">
            {filteredData?.map((course, i) => (
              <div
                key={i}
                className="w-[300px] h-[400px] bg-white shadow-xl shadow-[#9bc0f0] rounded-br-[60px] overflow-hidden duration-150 ease-in-out transition-all hover:scale-95"
              >
                <video
                  className="w-[100%] h-[50%] object-fill object-center border-b border-gray-300 "
                  poster={`http://localhost:5000/files/${course?.courseImage}`}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="text-[#1f305e] flex flex-col gap-2 px-4 py-2">
                  <h1 className="text-2xl font-semibold">
                    {course?.courseTitle}
                  </h1>
                  <p className="text-lg break-words leading-5 text-gray-500">
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
                  <div className="text-[#3375e0] font-semibold">
                    Posted {timeAgo(new Date(course.timeStamp))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-[68vh] flex flex-col justify-center items-center gap-2">
          <div className="w-[400px] max-lg:w-auto">
            <img src={call} alt="coursePost" className="w-[100%]" />
          </div>
          <h1 className="text-2xl font-semibold text-[#1f305e] max-lg:text-lg">
            Get Started with Your First Course
          </h1>
          <p className="w-[50%] text-[#1f305e] flex flex-wrap text-xl break-words text-center max-lg:text-sm max-lg:w-[100%]">
            You haven't posted any courses yet. Begin your teaching journey by
            creating your first course and inspire learners around the world!
          </p>
          <button
            type="button"
            className="px-4 py-2 mt-2 font-semibold rounded-br-2xl bg-[#3375e0] text-white transition-all duration-150 ease-in-out border-2 active:scale-95 hover:bg-white hover:text-[#3375e0] hover:border-dashed border-[#3375e0] cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1"
            onClick={() => navigate("/posting")}
          >
            Post a Course
          </button>
        </div>
      )}
    </div>
  );
};

export default Course;
