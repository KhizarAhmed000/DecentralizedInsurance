import { createSlice } from "@reduxjs/toolkit";

const coverSlice = createSlice({
    name:'cover',
    initialState:{
        coverArray:null
    },
    reducers:{
        setCoverArray: (state,action)=>{
            state.coverArray = action.payload;
        },
        removeCoverArray:(state)=>{
            state.coverArray  = null;                    
        }
    }

})

export const { setCoverArray, removeCoverArray} = coverSlice.actions;
export const selectCoverArray = (state) => state.cover.coverArray;
export default coverSlice.reducer;