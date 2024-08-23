import React, { useEffect, useState } from "react";
import Main from "./main/main";
import CourseBegin from "./courseBegin/courseBegin";
import CourseTransform from "./courseTransform/courseTransform";
import CourseDetails from "./coursesDetail/courseDetails";
import { useLocation } from "react-router-dom";
import Category from "./category/category";
import MyCourses from "./myCourses/myCourses";
import StudentFooter from "../Footer/footer";
import ParticularMyCourse from "./myCourses/particularMyCourse/particularMyCourse";
import StudentParticularCourse from "./category/particularCourse/particularCourse";
import Profile from "./Profile/Profile";

const ContentPage = () => {
  const [content, setContent] = useState();
  const location = useLocation();
  const path = location.pathname;
  console.log("content",content);
  

  useEffect(() => {
    console.log("Current path:", path);
    console.log(content);
    
    switch (true) {
      case path === "/home":
        setContent("home");
        break;
      case path === "/my-courses":
        setContent("course");
        break;
      case path === "/category":
        setContent("category");
        break;
      case path === "/profile":
        setContent("profile");
        break;
      case /^\/category\/[^\/]+\/[^\/]+$/.test(path):
        setContent("particular");
        break;
      case /^\/my-courses\/[^\/]+\/[^\/]+$/.test(path):
        setContent("myParticular");
        break;
      default:
        setContent("home");
        break;
    }
  }, [path]);

  return (
    <div className="w-[100%] h-auto">
      {content === "home" && (
        <>
          <Main />
          <CourseBegin />
          <CourseDetails />
          <CourseTransform />
          <StudentFooter/>
        </>
      )}
      {content === "category" && <Category />}
      {content === "particular" && <StudentParticularCourse />}
      {content === "myParticular" && <ParticularMyCourse />}
      {content === "course" && <MyCourses />}
      {content === "profile" && <Profile/>}
    </div>
  );
};

export default ContentPage;
