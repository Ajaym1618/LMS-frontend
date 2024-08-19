import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnroll,
  InitializeApi,
  postEnrollData,
  showParticularCourse,
} from "../../../../../api";
import { toast } from "react-toastify";
import { FaCirclePlay } from "react-icons/fa6";
import { setEnrollData } from "../../../../../store/StudentSlices/enrolledDataSlice";
import { useParams } from "react-router-dom";
import { setParData } from "../../../../../store/StudentSlices/particularSlice";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const StudentParticularCourse = () => {
  const [spin, setSpin] = useState(false);
  const dispatch = useDispatch();
  const parData = useSelector((state) => state.parCourse);
  const stuData = useSelector((state) => state.stuData);
  const enrolled = useSelector((state) => state.enrolled);
  const { id } = useParams();
  console.log(id);

  console.log("pardata", parData);
  console.log("hii", stuData);
  console.log("enroll", enrolled);

  const [enroll, setEnroll] = useState({
    EnrollId: stuData?._id,
    ParCourId: parData?._id,
    EnrollUserFullName: stuData?.userSignUpFullName,
    EnrollUserEmail: stuData?.userSignUpEmail,
  });
  // console.log("enroll", enroll);

  const handleEnroll = async (e) => {
    e.preventDefault();
    try {
      const response = await postEnrollData(enroll);
      console.log(response.data.message);
      setSpin(true);
      setTimeout(() => {
        getEnrollData();
        setSpin(false);
        toast.success(response.data.message);
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Enrolling failed!");
    }
  };

  const enrollFiltered = enrolled.find((val) => {
    return val.EnrollId === stuData?._id && val.ParCourId === parData?._id;
  });

  console.log("enroll filter", enrollFiltered);

  const getEnrollData = async () => {
    try {
      const response = await getEnroll();
      console.log(response.data.enroll);
      dispatch(setEnrollData(response.data.enroll));
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetParticularCourse = async (courseId) => {
    try {
      const response = await showParticularCourse(courseId);
      console.log(response.data);
      dispatch(setParData(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    InitializeApi();
    handleGetParticularCourse(id);
  }, []);

  return (
    <div className="w-[100%] h-auto py-6 px-8 flex flex-col items-center gap-4 max-sm:px-4">
      <div className="w-[90%] h-full max-sm:w-[100%]">
        <h1 className="text-[#1f305e] max-w-fit min-w-fit text-3xl mb-5 font-semibold border-b-2 border-dashed border-[#1f305e] max-sm:text-2xl">
          {parData?.courseTitle}
        </h1>
        <div className="flex gap-8 max-lg:flex-col max-sm:gap-4">
          <div className="w-full flex flex-col pb-8 relative z-10 max-lg:pb-0">
            <video
              className="w-[100%] h-[50vh] object-fill object-center max-sm:h-[30vh]"
              controls={enrollFiltered}
              poster={`http://localhost:5000/files/${parData?.courseImage}`}
            >
              <source
                src={`http://localhost:5000/files/${parData.courseVideo}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {!enrollFiltered && (
              <div className="w-[100%] h-[50vh] absolute top-0 bg-[#0000005c] flex justify-center items-center z-20">
                <div className="z-30 rounded-full bg-white">
                  <FaCirclePlay className=" text-[#3375e0] text-6xl" />
                </div>
              </div>
            )}
            <p className="text-left flex items-center text-xl pt-4 max-sm:text-sm">
              <span className="text-[#f14c4c]">*</span> Enroll to watch the
              video
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-2xl text-[#1f305e] max-w-fit min-w-fit font-semibold border-b-2 border-dashed border-[#1f305e] max-sm:text-lg">
              Description:
            </h1>
            <p className="w-full text-xl indent-4 max-sm:text-lg">
              {parData?.courseDescription}
            </p>
            {enrollFiltered ? (
              <button
                type="button"
                disabled
                className="w-full text-lg font-semibold bg-[#3375e0] text-white py-2 rounded-br-2xl cursor-not-allowed"
                onClick={handleEnroll}
              >
                Enrolled
              </button>
            ) : (
              <button
                type="button"
                className="w-full flex justify-center items-center gap-2 text-lg font-semibold bg-[#3375e0] text-white py-2 rounded-br-2xl hover:bg-[#095b7b] transition duration-300 active:scale-95"
                onClick={handleEnroll}
              >
                {spin === true && (
                  <Spin
                    indicator={
                      <LoadingOutlined spin className="font-bold text-white" />
                    }
                  />
                )}{" "}
                Enroll now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentParticularCourse;
