import React from "react";
import StudentLoginSignUp from "./pages/StudentHome/LoginSignUp/LoginSignUp";
import EducatorLoginSignUp from "./pages/EducatorHome/LoginSignUp/LoginSignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import StudentHome from "./pages/StudentHome/Home";
import EducatorHome from "./pages/EducatorHome/Home";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Router>
        {/* User */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<StudentLoginSignUp type="/login" />}></Route>
          <Route
            path="/register"
            element={<StudentLoginSignUp type="/register" />}
          ></Route>
          <Route path="/home" element={<StudentHome/>}></Route>
          <Route path="/my-courses" element={<StudentHome type='/my-courses'/>}></Route>
          <Route path="/profile" element={<StudentHome type='/profile'/>}></Route>
          <Route path="/my-courses/:name/:id" element={<StudentHome type='/my-courses/:name/:id' />}/>
          <Route path="/category" element={<StudentHome type='/category'/>}></Route>
          <Route path="/category/:name/:id" element={<StudentHome type='/category/:name/:id' />}/>

          {/* educator */}
          <Route path="/educator" element={<Navigate to="/educator-login" />} />
          <Route
            path="/educator-login"
            element={<EducatorLoginSignUp type="/educator-login" />}
          ></Route>
          <Route
            path="/educator-register"
            element={<EducatorLoginSignUp type="/educator-register" />}
          ></Route>
          <Route path="/educator-home" element={<EducatorHome/>}></Route>
          <Route path="/post-course" element={<EducatorHome type='/post-course'/>}></Route>
          <Route path="/edu-profile" element={<EducatorHome type='/edu-profile'/>}></Route>
          <Route path="/post-course/:name/:id" element={<EducatorHome type='/post-course/:name/:id' />}/>
          <Route path="/posting" element={<EducatorHome type='/posting'/>}></Route>
        </Routes>
        <ToastContainer/>
      </Router>
    </div>
  );
};

export default App;
