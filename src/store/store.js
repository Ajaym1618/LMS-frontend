import {configureStore} from '@reduxjs/toolkit';
import eduDataReducer from './EducatorSlices/educatorDataSlice';
import stuDataReducer from './StudentSlices/studentDataSlice';
import courseDetailReducer from './EducatorSlices/courseDetailsSlice';
import particularCourseReducer from './StudentSlices/particularSlice';
import enrollDataReducer from './StudentSlices/enrolledDataSlice';
const store = configureStore({
    reducer:{
        eduData: eduDataReducer,
        stuData: stuDataReducer,
        courseDetail: courseDetailReducer,
        parCourse: particularCourseReducer,
        enrolled: enrollDataReducer,
    }
})

export default store;