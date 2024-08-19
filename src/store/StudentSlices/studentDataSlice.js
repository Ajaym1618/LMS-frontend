import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const studentDataSlice = createSlice({
    name: 'stuData',
    initialState,
    reducers: {
        setStuData: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { setStuData } = studentDataSlice.actions;
export default studentDataSlice.reducer;                                                   