import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "../../../../api";
import { FaRupeeSign } from "react-icons/fa";
const CourseDetails = () => {
  const navigate = useNavigate();
  const courseData = useSelector((state) => state.courseDetail);
  const parData = useSelector((state) => state.parCourse);
  const enrolled = useSelector((state) => state.enrolled);
  const stuData = useSelector((state) => state.stuData);
  console.log(courseData);

  const filteredEnroll = enrolled?.filter((val)=>{
    return val.EnrollId === stuData?._id && val.EnrollUserEmail === stuData?.userSignUpEmail
  })

  return (
    <div className="w-[100%] h-[88vh] bg-[#f6f5fa] py-5 flex flex-col justify-center items-center max-lg:h-auto appearLeft">
      <h1 className="text-4xl text-[#1f305e] font-semibold pb-2 max-sm:text-2xl max-sm:text-center">
        Popular Courses
      </h1>
      <p className="text-2xl text-[#1f305e] pb-8 max-sm:text-sm ">
        Find the Best Fit for Your Learning Goals
      </p>
      {courseData.length > 0 ? (
        <div className="w-[80%] grid grid-cols-4 gap-4 items-center justify-center pb-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-[100%] ">
          {courseData.slice(0, 4).map((course, i) => {
            const isEnrolled = filteredEnroll.some(
              (val) => val.ParCourId === course._id
            );
            return(
            <div
              key={i}
              className="w-[300px] h-[380px] bg-white shadow-xl shadow-[#9bc0f0] rounded-bl-[60px] overflow-hidden duration-150 ease-in-out transition-all hover:scale-95 inOut max-sm:m-auto"
            >
              <video
                className="w-[100%] h-[50%] object-fill object-center border-b border-gray-300"
                poster={`http://localhost:5000/files/${course?.courseImage}`}
              >
                Your browser does not support the video tag.
              </video>
              <div className="text-[#1f305e] px-4 py-1">
                <h1 className="text-2xl font-semibold">
                  {course?.courseTitle}
                </h1>
                <div className="py-1">By {course?.educatorName}</div>
                <div className="py-1"> {course?.courseCategory}</div>
                <div className="py-1 text-[#3375e0]">
                  posted {timeAgo(new Date(course?.timeStamp))}
                </div>
              </div>
              <div
                className="w-full flex justify-between items-center py-4 px-8 bg-[#3375e0] cursor-pointer"
                onClick={() => navigate("/category")}
              >
                <h1 className="flex items-center text-lg text-white">
                  <FaRupeeSign className="text-sm" />
                  Free
                </h1>
                <button
                  type="button"
                  className=" text-white hover:border-b border-white "
                >
                  {isEnrolled? "Enrolled":"Enroll now"}
                </button>
              </div>
            </div>
          )})}
        </div>
      ) : (
        <div className="w-full h-[40vh] text-4xl text-[#3375e0] flex justify-center items-center appearLeft">
          <span className="px-5 py-2 border-2 border-[#3375e0] border-dashed rounded-md">
            No Courses uploaded
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
