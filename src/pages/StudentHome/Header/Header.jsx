import React, { useEffect, useState } from "react";
import logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { LiaUserCircle } from "react-icons/lia";
import { toast } from "react-toastify";
import {
  getCourseDetails,
  getEnroll,
  getStudentData,
  InitializeApi,
} from "../../../api";
import { setCourseDetailData } from "../../../store/EducatorSlices/courseDetailsSlice";
import { setStuData } from "../../../store/StudentSlices/studentDataSlice";
import { setEnrollData } from "../../../store/StudentSlices/enrolledDataSlice";
import { useDispatch } from "react-redux";
const StudentHeader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const grtStudentData = async () => {
    try {
      const response = await getStudentData();
      console.log(response.data.student);
      dispatch(setStuData(response.data.student));
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

  const getEnrollData = async () => {
    try {
      const response = await getEnroll();
      console.log(response.data.enroll);
      dispatch(setEnrollData(response.data.enroll));
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("studentId");
    toast.success("Logout successful!");
    navigate("/");
  };

  useEffect(() => {
    InitializeApi();
    getCourse();
    grtStudentData();
    getEnrollData();
  }, []);

  return (
    <div className="w-[100%] h-[12vh] bg-white px-20 py-2 shadow-sm shadow-slate-400 flex items-center justify-between z-50 sticky top-0  max-lg:px-10 max-sm:px-2">
      <div className="w-[300px] h-full flex items-center max-sm:w-[150px] ">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="w-auto text-xl text-[#3375e0] font-semibold flex justify-center gap-16 items-center max-sm:text-sm max-sm:mt-2">
        <div
          className="transition-all duration-75 ease-in hover:border-b-2 hover:border-dashed border-[#3375e0] cursor-pointer max-lg:hidden"
          onClick={() => navigate("/home")}
        >
          Home
        </div>
        <div
          className="transition-all duration-75 ease-in hover:border-b-2 hover:border-dashed  border-[#3375e0] cursor-pointer max-lg:hidden"
          onClick={() => navigate("/my-courses")}
        >
          My courses
        </div>
        <button
          type="button"
          className="px-4 py-2 rounded-br-2xl bg-[#3375e0] text-white transition-all duration-150 ease-in-out border-2 hover:bg-white hover:text-[#3375e0] hover:border-dashed  border-[#3375e0] cursor-pointer max-lg:hidden"
          onClick={() => navigate("/category")}
        >
          Categories
        </button>
        <div
          className="text-[#3375e0] cursor-pointer relative max-lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <LiaUserCircle className="text-4xl" />
          {open && (
            <div className="w-auto h-auto py-2 flex flex-col justify-center absolute top-12 -right-8 bg-white border-2 border-dashed border-[#3375e0] rounded-md cursor-pointer ">
              <div className="absolute top-[-11px] right-[38px] rotate-[45deg] w-[20px] h-[20px] bg-white border-l-2 border-t-2 border-dashed border-[#3375e0] z-0 "></div>
              <h1
                className="px-6 pb-2 border-b-2 border-dashed border-[#3375e0] transition-colors duration-100 ease-in-out hover:text-[#1f305e]"
                onClick={() => navigate("/profile")}
              >
                Profile
              </h1>
              <h1
                className="px-6 pt-2  transition-colors duration-100 ease-in-out hover:text-[#1f305e]"
                onClick={handleLogOut}
              >
                Logout
              </h1>
            </div>
          )}
        </div>
        <div
          className="text-[#3375e0] hidden cursor-pointer relative max-lg:block "
          onClick={() => setOpen(!open)}
        >
          <LiaUserCircle className="text-4xl" />
          {open && (
            <div className="w-auto h-auto flex flex-col justify-center absolute top-12 -right-8 bg-white border-2 border-dashed border-[#3375e0] rounded-md">
              <div className="absolute top-[-11px] border-l-2 border-t-2 border-dashed border-[#3375e0] right-[38px] rotate-[45deg] w-[20px] h-[20px] bg-white z-0"></div>
              <div
                className="w-[100%] px-8 py-3 border-b-2 border-dashed border-[#3375e0]"
                onClick={() => navigate("/profile")}
              >
                Profile
              </div>
              <div
                className="w-[100%] px-8 py-3 border-b-2 border-dashed border-[#3375e0]"
                onClick={() => navigate("/home")}
              >
                Home
              </div>
              <div
                className="w-[100%] px-8 py-3 border-b-2 border-dashed border-[#3375e0]"
                onClick={() => navigate("/my-courses")}
              >
                MyCourses
              </div>
              <div
                className="w-[100%] px-8 py-3 border-b-2 border-dashed border-[#3375e0]"
                onClick={() => navigate("/category")}
              >
                Categories
              </div>
              <div className="w-[100%] px-8 py-3" onClick={handleLogOut}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentHeader;
