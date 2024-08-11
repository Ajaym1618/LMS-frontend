import React, { useEffect, useState } from "react";
import Main from "./main/main";
import CourseBegin from "./courseBegin/courseBegin";
import CourseTransform from "./courseTransform/courseTransform";
import CourseDetails from "./coursesDetail/courseDetails";
import { useLocation } from "react-router-dom";
import Category from "./category/category";
import MyCourses from "./myCourses/myCourses";

const ContentPage = () => {
  const [content, setContent] = useState();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setContent("home");
        break;
      case "/my-courses":
        setContent("course");
        break;
      case "/category":
        setContent("category");
        break;
      default:
        setContent("Home");
        break;
    }
  }, [location]);
  return (
    <div className="w-[100%] h-auto">
      {content === "home" && (
        <>
          <Main />
          <CourseBegin />
          <CourseDetails />
          <CourseTransform />
        </>
      )}
      {content === "category" && <Category/>}
      {content === "course" && <MyCourses/>}
    </div>
  );
};

export default ContentPage;
