import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const ParticularCourseSlice = createSlice({
    name:"parCourse",
    initialState,
        reducers: {
            setParData: (state, action) => {
                return { ...state, ...action.payload };
            }
    }
})

export const {setParData} = ParticularCourseSlice.actions;
export default ParticularCourseSlice.reducer;