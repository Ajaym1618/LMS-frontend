import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getCourseDetails, postCourseDetails } from "../../../../api";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setCourseDetailData } from "../../../../store/EducatorSlices/courseDetailsSlice";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CoursePost = () => {
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Data from store
  const EduData = useSelector((state) => state.eduData);

  const date = new Date();
  const timeStamp = date.getTime();
  console.log(timeStamp);

  const [courseDetails, setCourseDetails] = useState({
    courseTitle: "",
    courseDescription: "",
    courseCategory: "",
  });

  console.log(courseDetails);

  const handleCourseChange = (e) => {
    const { id, value } = e.target;
    setCourseDetails((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();

    const isDataComplete = Object.values(courseDetails).every(
      (value) => value !== undefined && value !== ""
    );
    console.log(video);
    console.log(image);

    if (!isDataComplete || !video || !image) {
      toast.error("Please enter all the details and upload a video file.");
      return;
    }

    const formData = new FormData();
    formData.append("educatorName", EduData?.educatorSignUpFullName);
    formData.append("courseId", EduData?._id);
    formData.append("courseTitle", courseDetails.courseTitle);
    formData.append("courseDescription", courseDetails.courseDescription);
    formData.append("courseCategory", courseDetails.courseCategory);
    formData.append("courseVideo", video);
    formData.append("courseImage", image);
    formData.append("timeStamp", timeStamp);

    try {
      const response = await postCourseDetails(formData);
      console.log(response.data.message);
      setSpin(true);
      setTimeout(() => {
        navigate("/post-course");
        toast.success(response.data.message);
      }, 1500);
      setCourseDetails({
        courseTitle: "",
        courseDescription: "",
        courseCategory: "",
      });
      setImage(null);
      setVideo(null);
      getCourse();
      
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while posting the course.");
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

  return (
    <div className="w-[100%] h-auto flex justify-center bg-[#f6f5fa]">
      <div className="w-[60%] bg-white py-6 px-6 max-lg:w-[90%]">
        <div className="py-2 pb-4 flex justify-between items-center">
          <h1 className="text-4xl text-[#1f305e] font-semibold max-sm:text-xl">
            Course Details
          </h1>
          <button
            className="flex items-center gap-2 text-lg px-4 py-1 mt-2 font-semibold rounded-br-2xl bg-[#3375e0] text-white transition-all duration-150 ease-in-out border-2 active:scale-95 hover:bg-white hover:text-[#3375e0] border-[#3375e0] cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1"
            onClick={() => navigate("/post-course")}
          >
            <IoIosArrowRoundBack className="text-2xl" />
            Back
          </button>
        </div>
        <form onSubmit={handleCourseSubmit}>
          {/* Course Title */}
          <fieldset className="mb-4 border border-gray-500 rounded-lg px-4 bg-white focus-within:border-[#3375e0] focus-within:text-[#3375e0]">
            <legend className="px-2 text-[#1f305e] font-semibold">
              Course Title
            </legend>
            <div className="flex items-center py-2">
              <input
                type="text"
                id="courseTitle"
                placeholder="Enter your title"
                onChange={handleCourseChange}
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </fieldset>

          {/* Course Description */}
          <fieldset className="mb-4 border border-gray-500 rounded-lg px-4 bg-white focus-within:border-[#3375e0] focus-within:text-[#3375e0]">
            <legend className="px-2 text-[#1f305e] font-semibold">
              Course Description
            </legend>
            <div className="flex items-center py-2">
              <textarea
                type="text"
                id="courseDescription"
                placeholder="Enter your description"
                onChange={handleCourseChange}
                className="h-[100px] resize-none text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </fieldset>

          {/* Course Category */}
          <fieldset className="mb-4 border border-gray-500 rounded-lg px-4 bg-white focus-within:border-[#3375e0] focus-within:text-[#3375e0]">
            <legend className="px-2 text-[#1f305e] font-semibold">
              Category
            </legend>
            <div className="flex items-center py-2">
              <select
                id="courseCategory"
                onChange={handleCourseChange}
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none"
              >
                <option value="select" defaultValue>
                  Select
                </option>
                <option value="Computer Science & IT">
                  Computer Science & IT
                </option>
                <option value="Sports">Sports</option>
                <option value="Fitness & Wellness">Fitness & Wellness</option>
                <option value="Cooking">Cooking</option>
                <option value="Music">Music</option>
                <option value="Travel & Adventure">Travel & Adventure</option>
                <option value="Photography">Photography</option>
                <option value="Gardening">Gardening</option>
                <option value="Fashion & Beauty">Fashion & Beauty</option>
                <option value="DIY & Crafts">DIY & Crafts</option>
                <option value="Creative Writing">Creative Writing</option>
                <option value="Film & Videography">Film & Videography</option>
                <option value="Interior Design">Interior Design</option>
              </select>
            </div>
          </fieldset>

          {/* Video Upload */}
          <fieldset className="mb-4 border border-gray-500 rounded-lg px-4 bg-white focus-within:border-[#3375e0] focus-within:text-[#3375e0]">
            <legend className="px-2 text-[#1f305e] font-semibold">Video</legend>
            <div className="flex items-center py-2">
              <input
                type="file"
                id="courseVideo"
                name="courseVideo"
                onChange={(e) => setVideo(e.target.files[0])}
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none"
                accept=".mp4"
              />
            </div>
          </fieldset>
          {/* image */}
          <fieldset className="mb-4 border border-gray-500 rounded-lg px-4 bg-white focus-within:border-[#3375e0] focus-within:text-[#3375e0]">
            <legend className="px-2 text-[#1f305e] font-semibold">
              Thumbnail Image
            </legend>
            <div className="flex items-center py-2">
              <input
                type="file"
                id="courseImage"
                name="courseImage"
                onChange={(e) => setImage(e.target.files[0])}
                className="text-lg font-semibold text-[#3375e0] appearance-none bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none"
                accept="image/*"
              />
            </div>
          </fieldset>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-[100%] flex gap-2 justify-center items-center text-lg px-4 py-2 mt-2 font-semibold rounded-br-2xl bg-[#3375e0] text-white transition-all duration-150 ease-in-out border-2 active:scale-95 hover:bg-white hover:text-[#3375e0] border-[#3375e0] cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1"
          >
            {spin === true && (
              <Spin
                indicator={
                  <LoadingOutlined spin className="font-bold text-white" />
                }
              />
            )}
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CoursePost;
