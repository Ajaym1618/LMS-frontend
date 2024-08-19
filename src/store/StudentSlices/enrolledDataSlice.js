import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const enrollDataSlice = createSlice({
    name:'enrolled',
    initialState,
    reducers:{
        setEnrollData:(state, action) => {
            return action.payload
        }
    }
})

export const {setEnrollData} = enrollDataSlice.actions;
export default enrollDataSlice.reducer;