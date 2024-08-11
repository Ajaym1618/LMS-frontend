import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const educatorDataSlice = createSlice({
    name: 'eduData',
    initialState,
    reducers: {
        setEduData: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { setEduData } = educatorDataSlice.actions;
export default educatorDataSlice.reducer;
