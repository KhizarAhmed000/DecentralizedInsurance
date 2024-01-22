import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name:'admin',
    initialState:{
        adminName:null
    },
    reducers:{
        setAdminName: (state,action)=>{
            state.adminName = action.payload;
        },
        removeAdminName:(state)=>{
            state.adminName  = null;                    
        }
    }

})

export const { setAdminName, removeAdminName} = adminSlice.actions;
export const selectAdminName = (state) => state.admin.adminName;
export default adminSlice.reducer;