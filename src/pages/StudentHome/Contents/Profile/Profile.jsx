import React from 'react'
import {useSelector} from 'react-redux';
import { FaUserAlt } from "react-icons/fa";
const Profile = () => {
    const stuData = useSelector(state=> state.stuData);
  return (
    <div className="w-[100%] h-[88vh] py-8 px-20 max-md:px-5 max-sm:py-4 flex items-center">
      <div className="w-[60%] h-auto m-auto px-3 py-3 flex flex-col gap-8 bg-white rounded-xl shadow-md shadow-slate-600 max-lg:w-[90%] max-sm:gap-3">
        <div className="w-full h-auto px-5 py-5 rounded-lg border border-gray-300 text-[#595959]">
          <div className="flex items-center gap-4 ">
            <FaUserAlt className="px-2 py-1 text-4xl rounded-lg text-[#3375e0] bg-[#92b5ef]" />
            <h1 className="text-3xl font-semibold text-[#1f305e] max-sm:text-lg">Personal info</h1>
          </div>
          <div className="h-auto flex flex-col py-8 max-sm:flex-col max-sm:py-3">
            <div className="w-full h-auto flex pb-8 justify-between items-center border-b-2  border-gray-300 max-sm:block max-sm:pb-4">
              <h1 className="w-[50%] font-semibold text-[#1f305e] max-sm:pb-2">Name</h1>
              <div className="w-full flex justify-center max-sm:justify-start">
                <h1 className="font-semibold text-[#3375e0]">{stuData?.userSignUpFullName}</h1>
              </div>
            </div>
            <div className="w-full h-auto flex pt-8 justify-between items-center max-sm:block max-sm:pb-4">
              <h1 className="w-[50%] font-semibold text-[#1f305e] max-sm:pb-2">Email</h1>
              <div className="w-full flex justify-center max-sm:justify-start">
                <h1 className="font-semibold text-[#3375e0]">{stuData?.userSignUpEmail}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto px-5 py-10 rounded-lg border border-gray-300 text-[#595959] max-sm:py-5">
          <div className="w-full flex justify-between max-sm:block">
            <h1 className="w-[50%] font-semibold text-[#1f305e] max-sm:pb-2">Language</h1>
            <div className="w-full flex justify-center font-semibold text-[#3375e0] max-sm:justify-start ">
              <h1>English</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile