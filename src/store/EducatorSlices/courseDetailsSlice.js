import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const courseDetailSlice = createSlice({
    name:'courseDetail',
    initialState,
    reducers:{
        setCourseDetailData: (state, action) =>{
            return action.payload
        }
    }
});

export const {setCourseDetailData} = courseDetailSlice.actions;

export default courseDetailSlice.reducer;