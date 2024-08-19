import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourse,
  getCourseDetails,
  getEnroll,
  InitializeApi,
  postEnrollData,
  showParticularCourse,
} from "../../../../../api";
import { toast } from "react-toastify";
import { FaCirclePlay } from "react-icons/fa6";
import { setEnrollData } from "../../../../../store/StudentSlices/enrolledDataSlice";
import { useNavigate, useParams } from "react-router-dom";
import { setParData } from "../../../../../store/StudentSlices/particularSlice";
import { setCourseDetailData } from "../../../../../store/EducatorSlices/courseDetailsSlice";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const EducatorParticularCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parData = useSelector((state) => state.parCourse);
  const stuData = useSelector((state) => state.stuData);
  const enrolled = useSelector((state) => state.enrolled);
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [spin, setSpin] = useState(false);
  console.log(id);

  console.log("pardata", parData);
  console.log("hii", stuData);
  console.log("enroll", enrolled);

  const enrollFiltered = enrolled.find((val) => {
    return val.EnrollId === stuData?._id && val.ParCourId === parData?._id;
  });

  console.log("enroll filter", enrollFiltered);

  const handleGetParticularCourse = async (courseId) => {
    try {
      const response = await showParticularCourse(courseId);
      console.log(response.data);
      dispatch(setParData(response.data));
    } catch (err) {
      console.error(err);
    }
  };
  const getCourse = async () => {
    try {
      const response = await getCourseDetails();
      console.log(response.data);
      dispatch(setCourseDetailData(response.data));
    } catch (err) {
      console.log(err.response.message);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      const response = await deleteCourse(id);
      setSpin(true)
      setTimeout(() => {
        toast.success(response.data.message);
        getCourse();
        navigate("/post-course");
      },2000);
    } catch (err) {
      console.error(err);
      toast.error("Error while deleting! Try again");
    }
  };

  useEffect(() => {
    InitializeApi();
    handleGetParticularCourse(id);
  }, []);

  const filterStudents = (id) => {
    return enrolled.filter((data) => data.ParCourId === id);
  };

  return (
    <div className="w-[100%] h-auto py-6 px-8 flex flex-col items-center gap-4 relative max-sm:px-4">
      <div className="w-[90%] h-full max-sm:w-[100%]">
        <h1 className="text-[#1f305e] max-w-fit min-w-fit text-3xl mb-5 font-semibold border-b-2 border-dashed border-[#1f305e] max-sm:text-2xl">
          {parData?.courseTitle}
        </h1>
        <div className="flex gap-8 max-lg:flex-col max-sm:gap-4">
          <div className="w-full flex flex-col pb-8 relative z-10 max-lg:pb-0">
            <video
              className="w-[100%] h-[50vh] object-fill object-center max-sm:h-[30vh]"
              controls
              poster={`http://localhost:5000/files/${parData?.courseImage}`}
            >
              <source
                src={`http://localhost:5000/files/${parData?.courseVideo}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h1 className="text-[#1f305e] text-xl font-semibold py-4 flex items-center">
              Student Enrolled:{" "}
              <div className="w-7 h-7 flex justify-center items-center rounded-[50%] bg-[#3375e0] text-white">
                {" "}
                {filterStudents(parData?._id).length}
              </div>{" "}
            </h1>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-2xl text-[#1f305e] max-w-fit min-w-fit font-semibold border-b-2 border-dashed border-[#1f305e] max-sm:text-lg">
              Description:
            </h1>
            <p className="w-full text-xl indent-4 max-sm:text-lg">
              {parData?.courseDescription}
            </p>
            <button
              type="button"
              className="w-full text-lg font-semibold bg-red-600 text-white py-2 rounded-br-2xl cursor-pointer active:scale-95 transition-all ease-in-out duration-100"
              onClick={() => setOpen(!open)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="w-full h-[88vh] absolute bg-[#0000009a] top-0 z-10 flex justify-center items-center">
          <div className="w-[400px] h-[200px] px-5 py-4 text-2xl bg-white rounded-2xl shadow-lg shadow-gray-400 flex flex-col items-center justify-center gap-4">
            <h1>Are you sure want to delete?</h1>
            <div className="w-[70%] flex justify-around">
              <button
                className="px-4 py-1 text-lg bg-[#3375e0] text-white rounded-md"
                onClick={() => setOpen(!open)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-1 text-lg flex justify-center items-center gap-2 bg-red-600 text-white rounded-md"
                onClick={() => handleDeleteCourse(parData?._id)}
              >
                {spin === true && (
                  <Spin
                    indicator={
                      <LoadingOutlined spin className="font-bold text-white" />
                    }
                  />
                )}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducatorParticularCourse;
