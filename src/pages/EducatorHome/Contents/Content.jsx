import React, { useEffect, useState } from "react";
import EducatorMain from "../Contents/main/main";
import Course from "./course/Course";
import { useLocation } from "react-router-dom";
import CoursePost from "../Contents/coursePost/coursePost";
import CourseDescription from "./courseDescription/courseDescription";
import EducatorFooter from "../Footer/footer";
import EducatorParticularCourse from "./course/particularCourse/educatorParticularCourse";
import Profile from "./Profile/Profile";
const Content = () => {
  const [content, setContent] = useState();
  const location = useLocation();
  const paths = location.pathname;
  
  useEffect(() => {
    console.log("Current:", paths);
    console.log(content);
    switch (true) {
      case paths === "/educator-home":
        setContent("educatorHome");
        break;
      case paths ==="/post-course":
        setContent("postCourse");
        break;
      case paths ==="/posting":
        setContent("posting");
        break;
      case paths ==="/edu-profile":
        setContent("eduProfile");
        break;
      case /^\/post-course\/[^\/]+\/[^\/]+$/.test(paths):
        setContent("specific");
        break;
      default:
        setContent("educatorHome"); 
        break;
    }
  }, [paths]);
  return (
    <>
      {content === "educatorHome" && (
        <>
          <EducatorMain />
          <CourseDescription />
          <EducatorFooter />
        </>
      )}
      {content === "postCourse" && <Course />}
      {content === "posting" && <CoursePost />}
      {content === "specific" && <EducatorParticularCourse />}
      {content === "eduProfile" && <Profile/>}
    </>
  );
};

export default Content;
