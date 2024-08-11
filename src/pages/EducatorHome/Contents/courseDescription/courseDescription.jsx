import React from "react";

const CourseDescription = () => {
  return (
    <div className="w-[100%] h-[88vh] bg-white py-8 px-8 flex flex-col justify-center items-center max-lg:h-auto">
      <h1 className="text-4xl text-[#1f305e] font-semibold pb-2 max-sm:text-2xl max-sm:text-center appearLeft">
        Share Your Expertise with the World
      </h1>
      <p className="text-2xl text-[#1f305e] pb-8 max-sm:text-sm appearLeft">
        Inspire Learners and Grow Your Influence
      </p>
      <div className="w-[80%] grid grid-cols-2 gap-4 items-center justify-center max-lg:grid-cols-1 max-sm:w-[100%]">
        <div className="w-full h-[150px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <div className="w-14 h-12 rounded-[50%] bg-[#3375e0] flex justify-center items-center text-xl text-white font-semibold">
            1
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#1f305e] max-sm:text-lg">Sign Up as an Educator</h1>
            <p className="text-lg text-[#77838f] max-sm:text-sm">
              Provide your credentials to start your teaching journey. Create an account to access all educator tools and features.
            </p>
          </div>
        </div>
        <div className="w-full h-[150px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <div className="w-14 h-12 rounded-[50%] bg-[#1f305e] flex justify-center items-center text-xl text-white font-semibold">
            2
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#1f305e] max-sm:text-lg">Create Your Courses</h1>
            <p className="text-lg text-[#77838f] max-sm:text-sm">
              Design and upload your course content. Share your knowledge with learners around the globe.
            </p>
          </div>
        </div>
        <div className="w-full h-[150px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <div className="w-14 h-12 rounded-[50%] bg-[#1f305e] flex justify-center items-center text-xl text-white font-semibold">
            3
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#1f305e] max-sm:text-lg">Engage with Learners</h1>
            <p className="text-lg text-[#77838f] max-sm:text-sm">
              Interact with students through forums, Q&A sessions, and feedback. Foster a vibrant learning community.
            </p>
          </div>
        </div>
        <div className="w-full h-[150px] rounded-bl-[40px] shadow-md shadow-[#3375e0] flex gap-3 px-4 py-4 max-sm:h-auto appearLeft">
          <div className="w-14 h-12 rounded-[50%] bg-[#3375e0] flex justify-center items-center text-xl text-white font-semibold">
            4
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold text-[#1f305e] max-sm:text-lg">Track Your Impact</h1>
            <p className="text-lg text-[#77838f] max-sm:text-sm">
              Monitor your course performance and student engagement. Use insights to improve your teaching strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
