import React from "react";
import call from "../../../../assets/call.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { displayParticularCourse, timeAgo } from "../../../../api";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiCategoryAlt } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";

const Course = () => {
  const navigate = useNavigate();

  const EduData = useSelector((state) => state.eduData);
  console.log(EduData);
  const CourseData = useSelector((state) => state.courseDetail);
  console.log(CourseData);
  const enroll = useSelector((state) => state.enrolled);
  console.log(enroll);
  

  const filteredData = CourseData?.filter((val) => {
    if (!EduData || !EduData._id) {
      console.warn("EduData or EduData._id is undefined");
      return false;
    }
    return val.courseId === EduData._id;
  });

  console.log("filteredData", filteredData);

  const filterStudents = (id) => {
    return enroll.filter((data) => data.ParCourId === id);
  };

  const handleDisplayData = async(id) => {
    try {
      const response = await displayParticularCourse(id);
      console.log("displayData",response.data);
      navigate(`/post-course/${response.data?.courseTitle}/${response.data?._id}`)
    } catch (err) {
      console.error(err);
    }
  }

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
          <div className="w-[90%] h-auto grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-[100%] ">
            {filteredData?.map((course, i) => (
              <div
                key={i}
                className="w-[300px] h-[400px] bg-white shadow-xl shadow-[#9bc0f0] rounded-br-[60px] overflow-hidden duration-150 ease-in-out transition-all hover:scale-95 max-sm:w-[280px] max-sm:h-auto max-sm:m-auto"
              >
                <video
                  className="w-[100%] h-[200px] object-fill object-center border-b border-gray-300 "
                  poster={`http://localhost:5000/files/${course?.courseImage}`}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="text-[#1f305e] flex flex-col gap-2 px-4 py-2">
                  <h1 className="text-2xl font-semibold">
                    {course?.courseTitle}
                  </h1>
                  <h1 className="text-lg font-semibold text-gray-500 flex items-center gap-1">
                    <BiCategoryAlt className="text-[#3375e0]"/>
                    {course?.courseCategory}
                  </h1>
                  <h1 className="text-lg font-medium flex items-center gap-1">
                    <HiOutlineUserGroup className="text-[#3375e0]"/>
                    Student: <span className=" font-bold">{filterStudents(course?._id).length}</span>
                  </h1>
                  <div className=" font-semibold flex gap-1 items-center">
                    <MdOutlineAccessTime className="text-[#3375e0]"/>
                    Posted {timeAgo(new Date(course.timeStamp))}
                  </div>
                </div>
                <div className="w-full font-semibold py-3 px-8 flex justify-between items-center bg-[#3375e0] text-white hover:bg-[#1552b4] cursor-pointer" onClick={()=>handleDisplayData(course?._id)}>
                  <h1>More info</h1>
                  <h1 className="text-2xl">
                    <HiArrowLongRight />
                  </h1>
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
