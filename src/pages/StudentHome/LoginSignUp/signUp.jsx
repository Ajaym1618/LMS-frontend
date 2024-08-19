import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import usePasswordToggle from "../../../hooks/useTogglePassword";
import { useNavigate } from "react-router-dom";
import { postUserSignUp } from "../../../api";
import { toast } from "react-toastify";

const UserSignUp = () => {
  const [passwordType, PasswordIcon] = usePasswordToggle();
  const [confirmPasswordType, ConfirmPasswordIcon] = usePasswordToggle();
  const [signUpData, setSignUpData] = useState({
    userSignUpFullName: "",
    userSignUpEmail: "",
    userSignUpPassword: "",
    userSignUpConfirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSignUpChange = (e) => {
    const { id, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  console.log(signUpData);

  const handlePostSignUpData = async (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Password validation regex patterns
    const minLengthPattern = /.{8,}/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const digitPattern = /\d/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    // Extracting data from the form
    const {
      userSignUpFullName,
      userSignUpEmail,
      userSignUpPassword,
      userSignUpConfirmPassword,
    } = signUpData;

    // Validate email format
    if (!emailPattern.test(userSignUpEmail)) {
      toast.error("Invalid email format");
      return;
    }

    // Validate password format
    if (!minLengthPattern.test(userSignUpPassword)) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (!uppercasePattern.test(userSignUpPassword)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!lowercasePattern.test(userSignUpPassword)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (!digitPattern.test(userSignUpPassword)) {
      toast.error("Password must contain at least one digit");
      return;
    }
    if (!specialCharPattern.test(userSignUpPassword)) {
      toast.error(
        "Password must contain at least one special character like @, #, etc."
      );
      return;
    }

    // Validate passwords match
    if (userSignUpPassword !== userSignUpConfirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await postUserSignUp(signUpData);
      navigate("/login");
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="w-[100%] h-full flex bg-[#f6f5fa]">
      <div className="w-[100%] h-full rounded-r-[10%] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-center mb-6 max-lg:mb-2 max-sm:text-xl">
          Become a member at{" "}
          <span className="text-[#3375e0] pl-1">MindSpark</span>
        </h2>
        <form
          className="w-[60%] max-lg:w-[90%]"
          onSubmit={handlePostSignUpData}
        >
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white">
            <legend className="px-2 text-gray-700 font-semibold">
              FullName
            </legend>
            <div className="flex items-center py-2 max-lg:py-1">
              <AiOutlineUser className="text-gray-500 mr-2" />
              <input
                type="text"
                id="userSignUpFullName"
                placeholder="Enter your FullName"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleSignUpChange}
              />
            </div>
          </fieldset>
          <fieldset className="mb-4 border border-gray-300 rounded-lg px-4 bg-white">
            <legend className="px-2 text-gray-700 font-semibold">Email</legend>
            <div className="flex items-center py-2 max-lg:py-1">
              <AiOutlineMail className="text-gray-500 mr-2" />
              <input
                type="email"
                id="userSignUpEmail"
                placeholder="Enter your email"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleSignUpChange}
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
                id="userSignUpPassword"
                placeholder="Enter your password"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleSignUpChange}
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
                id="userSignUpConfirmPassword"
                placeholder="Re-type your password"
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none"
                onChange={handleSignUpChange}
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
              onClick={() => navigate("/login")}
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
