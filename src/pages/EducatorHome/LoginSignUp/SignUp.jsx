import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser,AiOutlinePhone } from "react-icons/ai";
import usePasswordToggle from "../../../hooks/useTogglePassword";
import { useNavigate } from "react-router-dom";
import { postEducatorSignUp } from "../../../api";
import { toast } from "react-toastify";

const UserSignUp = () => {
  const [passwordType, PasswordIcon] = usePasswordToggle();
  const [confirmPasswordType, ConfirmPasswordIcon] = usePasswordToggle();
  const navigate = useNavigate();
  const [educatorSignUpData,setEducatorSignUpData] = useState({
    educatorSignUpFullName: "",
    educatorSignUpEmail:"",
    educatorSignUpMobileNo:"",
    educatorSignUpPassword:"",
    educatorSignUpConfirmPassword:""
  })

  const handleEmployerSignUp =(e)=>{
    const { id,value } = e.target;
    setEducatorSignUpData((prevData)=>({
      ...prevData,[id]:value
    }))
  }
  console.log(educatorSignUpData);
  
const handlePostSignUpData = async(e)=>{
  e.preventDefault();
  try{
    const response = await postEducatorSignUp(educatorSignUpData);
    console.log(response.data.message);
    navigate('/educator-login')
    toast.success(response.data.message);
  }catch(err){
    console.log(err);
    toast.error("something went wrong")
  }
}

  return (
    <div className="w-[100%] h-auto flex bg-[#f6f5fa]">
      <div className="w-[100%] h-auto rounded-r-[10%] py-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-center mb-6 max-lg:mb-2 max-sm:text-xl">
          Become a Educator at <span className="text-[#3375e0] pl-1">MindSpark</span>
        </h2>
        <form className="w-[60%] max-lg:w-[90%]" onSubmit={handlePostSignUpData}>
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white">
            <legend className="px-2 text-gray-700 font-semibold">
              FullName
            </legend>
            <div className="flex items-center py-2 max-lg:py-1">
              <AiOutlineUser className="text-gray-500 mr-2" />
              <input
                type="text"
                id="educatorSignUpFullName"
                placeholder="Enter your FullName"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleEmployerSignUp}
              />
            </div>
          </fieldset>
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white">
            <legend className="px-2 text-gray-700 font-semibold">Email</legend>
            <div className="flex items-center py-2 max-lg:py-1">
              <AiOutlineMail className="text-gray-500 mr-2" />
              <input
                type="email"
                id="educatorSignUpEmail"
                placeholder="Enter your email"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleEmployerSignUp}
              />
            </div>
          </fieldset>
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white">
            <legend className="px-2 text-gray-700 font-semibold">Phone Number</legend>
            <div className="flex items-center py-2 max-lg:py-1">
              <AiOutlinePhone className="text-gray-500 mr-2 rotate-90" />
              <input
                type="tel"
                id="educatorSignUpMobileNo"
                placeholder="Enter your mobile number"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleEmployerSignUp}
              />
            </div>
          </fieldset>
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white relative">
            <legend className="px-2 text-gray-700 font-semibold">
              Password
            </legend>
            <div className="flex items-center py-2 max-lg:py-1">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                type={passwordType}
                id="educatorSignUpPassword"
                placeholder="Enter your password"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleEmployerSignUp}
              />
            </div>
            <span className="absolute top-2 right-3 text-gray-500 ">
              {PasswordIcon}
            </span>
          </fieldset>
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white relative">
            <legend className="px-2 text-gray-700 font-semibold">
              ConfirmPassword
            </legend>
            <div className="flex items-center py-2 max-lg:py-1">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                type={confirmPasswordType}
                id="educatorSignUpConfirmPassword"
                placeholder="Re-type your password"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleEmployerSignUp}
              />
            </div>
            <span className="absolute top-2 right-3 text-gray-500">
              {ConfirmPasswordIcon}
            </span>
          </fieldset>
          <div className=" mb-6 max-lg:mb-2">
            Already a member?{" "}
            <span
              className="text-[#3375e0] font-bold cursor-pointer"
              onClick={() => navigate("/educator-login")}
            >
              Login
            </span>
          </div>
          <button
            type="submit"
            className="w-full text-lg font-semibold bg-[#3375e0] text-white py-2 rounded-lg hover:bg-[#095b7b] transition duration-300 active:scale-95"
          >
            Register
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default UserSignUp;
