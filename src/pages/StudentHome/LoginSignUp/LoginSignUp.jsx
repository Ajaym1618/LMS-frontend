import React, { useEffect, useState } from "react";
import logo from "../../../assets/Logo.png";
import socialMedia from "../../../assets/sky.gif";
import { AiOutlineExport } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import UserLogin from "./login";
import UserSignUp from "./signUp";

const LoginSignUp = () => {
  const [loRe, setLoRe] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect for changing routes
  useEffect(() => {
    if (location.pathname === "/login") {
      setLoRe("login");
    } else {
      setLoRe("register");
    }
  }, [location]);
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[12vh] bg-white px-10 py-2 shadow-sm shadow-slate-400 flex items-center justify-between z-10 relative max-sm:px-2">
        <div className="w-[300px] h-full flex items-center max-sm:w-[150px]">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <div className="text-lg text-[#3375e0] font-semibold flex gap-1 items-center transition-all duration-75 ease-in hover:border-b-2 border-[#3375e0] cursor-pointer max-sm:text-sm max-sm:mt-2" onClick={()=>navigate('/educator')}>
          For educators
          <AiOutlineExport />
        </div>
      </div>
      <div className="w-full h-[88vh] flex z-0 relative bg-[#f6f5fa]">
        <div className="w-[100%]">{loRe === "login" ? <UserLogin /> : <UserSignUp />}</div>
        <div className="w-[100%] h-full flex justify-center items-center max-sm:hidden">
          <div className="w-[600px] max-lg:w-[300px]">
            <img src={socialMedia} alt="" className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
