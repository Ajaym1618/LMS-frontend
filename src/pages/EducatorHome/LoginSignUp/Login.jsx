import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import usePasswordToggle from "../../../hooks/useTogglePassword";
import { useNavigate } from "react-router-dom";
import { InitializeApi, postEducatorLogin } from "../../../api";
import { toast } from "react-toastify";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const EducatorLogin = () => {
  const [passwordType, PasswordIcon] = usePasswordToggle();
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const [educatorLogin, setEducatorLogin] = useState({
    educatorLoginEmail: "",
    educatorLoginPassword: "",
  });

  const handleEmployerLogin = (e) => {
    const { id, value } = e.target;
    setEducatorLogin((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  console.log(educatorLogin);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postEducatorLogin(educatorLogin);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setSpin(true);
        InitializeApi();
        setTimeout(() => {
          navigate("/educator-home");
          toast.success("Login successful!");
        },1500);
      }
    } catch (err) {
      console.log(err);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="w-[100%] h-full flex bg-[#f6f5fa]">
      <div className="w-[100%] h-full rounded-r-[10%] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-center mb-6 max-sm:text-xl">
          Welcome to <span className="text-[#3375e0]">MindSpark</span>
        </h2>
        <form className="w-[60%] max-lg:w-[90%]" onSubmit={handleLoginSubmit}>
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white">
            <legend className="px-2 text-gray-700 font-semibold">Email</legend>
            <div className="flex items-center py-2 ">
              <AiOutlineMail className="text-gray-500 mr-2" />
              <input
                type="email"
                id="educatorLoginEmail"
                placeholder="Enter your email"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleEmployerLogin}
              />
            </div>
          </fieldset>
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white relative">
            <legend className="px-2 text-gray-700 font-semibold">
              Password
            </legend>
            <div className="flex items-center py-2">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                id="educatorLoginPassword"
                type={passwordType}
                placeholder="Enter your password"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none"
                onChange={handleEmployerLogin}
              />
            </div>
            <span className="absolute top-2 right-3 text-gray-500 ">
              {PasswordIcon}
            </span>
          </fieldset>
          <div className=" mb-6">
            New to MindSpark?{" "}
            <span
              className="text-[#3375e0] font-bold cursor-pointer"
              onClick={() => navigate("/educator-register")}
            >
              Register
            </span>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 text-lg font-semibold bg-[#3375e0] text-white py-2 rounded-lg hover:bg-[#3375e0] transition duration-300 active:scale-95"
          >
            {spin === true && (
              <Spin
                indicator={
                  <LoadingOutlined spin className="font-bold text-white" />
                }
              />
            )}
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default EducatorLogin;
