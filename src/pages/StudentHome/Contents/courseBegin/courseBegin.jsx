import React from "react";

const CourseDescription = () => {
  return (
    <div className="w-[100%] h-[88vh] bg-white py-8 px-8 flex flex-col justify-center items-center max-lg:h-auto">
      <h1 className="text-4xl text-[#1f305e] font-semibold pb-2 max-sm:text-2xl max-sm:text-center appearLeft">
        Begin Your Learning Journey Today
      </h1>
      <p className="text-2xl text-[#1f305e] pb-8 max-sm:text-sm appearLeft">Unlock Your Potential with Our Courses</p>
      <div className="w-[80%] grid grid-cols-2 gap-4 items-center justify-center max-lg:grid-cols-1 max-sm:w-[100%]">
        <div className="w-full h-[150px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <div className="w-14 h-12 rounded-[50%] bg-[#3375e0] flex justify-center items-center text-xl text-white font-semibold">
            1
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#1f305e] max-sm:text-lg">Signup with all info</h1>
            <p className="text-lg text-[#77838f] max-sm:text-sm">Provide your details to get started. Create an account to access all the courses and features tailored just for you.</p>
          </div>
        </div>
        <div className="w-full h-[150px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <div className="w-14 h-12 rounded-[50%] bg-[#1f305e] flex justify-center items-center text-xl text-white font-semibold">
            2
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#1f305e] max-sm:text-lg">Start Learning</h1>
            <p className="text-lg text-[#77838f] max-sm:text-sm">Browse our extensive catalog of courses and enroll in the ones that match your interests and career goals.</p>
          </div>
        </div>
        <div className="w-full h-[150px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <div className="w-14 h-12 rounded-[50%] bg-[#1f305e] flex justify-center items-center text-xl text-white font-semibold">
            3
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#1f305e] max-sm:text-lg">Learn Online</h1>
            <p className="text-lg text-[#77838f] max-sm:text-sm">Engage with interactive lessons and resources anytime, anywhere. Our platform supports a flexible learning experience.</p>
          </div>
        </div>
        <div className="w-full h-[150px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <div className="w-14 h-12 rounded-[50%] bg-[#3375e0] flex justify-center items-center text-xl text-white font-semibold">
            4
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#1f305e] max-sm:text-lg">Track Your Progress</h1>
            <p className="text-lg text-[#77838f] max-sm:text-sm">Monitor your learning journey with our easy-to-use dashboard. Keep an eye on your achievements and areas for improvement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
