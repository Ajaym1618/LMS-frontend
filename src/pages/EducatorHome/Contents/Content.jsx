import React, { useEffect, useState } from "react";
import EducatorMain from "../Contents/main/main";
import Course from "./course/Course";
import { useLocation } from "react-router-dom";
import CoursePost from "../Contents/coursePost/coursePost";
import CourseDescription from "./courseDescription/courseDescription";
const Content = () => {
  const [content, setContent] = useState();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/educator-home":
        setContent("educatorHome");
        break;
      case "/post-course":
        setContent("postCourse");
        break;
      case "/posting":
        setContent("posting");
        break;
      default:
        setContent("educatorHome");
        break;
    }
  }, [location]);
  return (
    <>
      {content === "educatorHome" && (
        <>
          <EducatorMain />
          <CourseDescription />
        </>
      )}
      {content === "postCourse" && <Course />}
      {content === "posting" && <CoursePost />}
    </>
  );
};

export default Content;
