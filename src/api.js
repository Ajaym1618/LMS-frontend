import axios from "axios";
import {toast} from 'react-toastify'
 
let Api;


export const InitializeApi = () => {
    const token = localStorage.getItem("token");
    const defaultOptions = {
        baseURL: "http://localhost:5000", 
        headers: {
            "Content-Type": "application/json" 
        }
    };

    if (token) {
        defaultOptions.headers.Authorization = `Bearer ${token}`;
    }

    Api = axios.create(defaultOptions);
    
    Api.interceptors.response.use(
        response => response, 
        error => {
            if (error.response && error.response.status === 401) {
                toast.error('Session expired. Please login again!'); 
                localStorage.removeItem("token"); 
                window.location.href = "/login";
            }
            return Promise.reject(error);
        }
    );
};

InitializeApi();

export const timeAgo = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
  
    if (seconds < 60) return `${seconds} seconds ago`;
  
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
  
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
  
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} days ago`;
  
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} weeks ago`;
  
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;
  
    const years = Math.floor(days / 365);
    return `${years} years ago`;
  };

// student 

export const postUserSignUp =(payload)=> axios.post('http://localhost:5000/signup',payload);
export const postUserLogin = (payload)=> axios.post('http://localhost:5000/login',payload);
export const getStudentData = () => Api.get('/students');
export const showParticularCourse = (id) => Api.get(`/particular/${id}`);
export const postEnrollData = (payload) => Api.post('/enroll',payload);
export const getEnroll = () => Api.get('/get-enroll');


// Educator
export const postEducatorSignUp = (payload)=> axios.post('http://localhost:5000/educator-signup',payload)
export const postEducatorLogin = (payload)=> axios.post('http://localhost:5000/educator-login',payload)
export const postCourseDetails = (payload)=> axios.post('http://localhost:5000/course-details',payload)
export const getEducatorData = () => Api.get('/educatorData');
export const getCourseDetails = ()=> Api.get('/details');
export const displayParticularCourse = (id) => Api.get(`/specific/${id}`);
export const deleteCourse = (id) => Api.delete(`/delete/${id}`);