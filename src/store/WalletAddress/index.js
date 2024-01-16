import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name:'wallet',
    initialState:{
        walletAddress:null
    },
    reducers:{
        setWalletAddressRedux: (state,action)=>{
            state.walletAddress = action.payload;
        },
        removeWalletAddressRedux:(state)=>{
            state.walletAddress  = null;                    
        }
    }

})

export const { setWalletAddressRedux, removeWalletAddressRedux} = walletSlice.actions;
export const selectWalletAddress = (state) => state.wallet.walletAddress;
export default walletSlice.reducer;