import {configureStore} from '@reduxjs/toolkit';
import eduDataReducer from './EducatorSlices/educatorDataSlice';
import courseDetailReducer from './EducatorSlices/courseDetailsSlice';
const store = configureStore({
    reducer:{
        eduData: eduDataReducer,
        courseDetail: courseDetailReducer,
    }
})

export default store;