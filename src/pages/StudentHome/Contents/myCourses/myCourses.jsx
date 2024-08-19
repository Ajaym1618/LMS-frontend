import React from "react";
import { useDispatch, useSelector } from "react-redux";
import team from '../../../../assets/team.png';
import { showParticularCourse, timeAgo } from "../../../../api";
import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { setParData } from "../../../../store/StudentSlices/particularSlice";

const MyCourses = () => {
  const enrolled = useSelector((state) => state.enrolled);
  const stuData = useSelector((state) => state.stuData);
  const courses = useSelector((state) => state.courseDetail);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("myCourses", enrolled);
  console.log(courses);

  const filtered = courses.filter((data) => {
    return enrolled.some((val) => {
      return data._id === val.ParCourId && stuData?._id === val.EnrollId;
    });
  });

  console.log("myCoursefilter", filtered);

  const handleGetParticularMyCourse = async (id) => {
    try {
      const response = await showParticularCourse(id);
      console.log(response.data);
      dispatch(setParData(response.data));
      navigate(`/my-courses/${response.data?.courseTitle}/${response.data?._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-[100%] h-auto py-6 flex justify-center">
      <div className="w-[70%] relative max-sm:w-[90%]">
        <h1 className="text-4xl  py-4 text-[#1f305e] font-semibold max-sm:text-2xl">
          My courses
        </h1>
        <div className="w-full h-full">
          {filtered.length > 0 ? (
            <div className="w-full grid grid-cols-4 gap-4 items-center justify-center py-6 m-auto max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-8 max-sm:w-[100%] landing-appearLeft">
              {filtered?.map((course, i) => (
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
                    className="w-full flex justify-center items-center py-4 px-8 bg-[#3375e0] cursor-pointer"
                  >
                    <button
                      type="button"
                      className=" text-white flex gap-1 items-center hover:border-b border-white "
                      onClick={()=>handleGetParticularMyCourse(course?._id)}
                    >
                      More info<HiArrowLongRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-[60vh] flex flex-col gap-2 justify-center items-center">
              <div className="w-[300px] max-sm:w-[200px]">
                <img src={team} alt="" className="w-[100%]"/>
              </div>
              <p className="text-xl text-[#3375e0] text-center">Nothing right here! enroll now to see your courses.</p>
              <div className="px-4 py-1 text-xl bg-[#3375e0] text-white transition-all duration-100 ease-in-out hover:border-2 hover:border-dashed font-semibold rounded-br-2xl hover:bg-white border-[#3375e0] hover:text-[#3375e0] cursor-pointer" onClick={()=>navigate('/category')}>Enroll now</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
