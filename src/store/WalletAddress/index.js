import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name:'wallet',
    initialState:{
        walletAddress:null,
        cartCovers:null,
    },
    reducers:{
        setWalletAddressRedux: (state,action)=>{
            state.walletAddress = action.payload;
        },
        removeWalletAddressRedux:(state)=>{
            state.walletAddress  = null;                    
        },
        setCartCoversRedux: (state,action)=>{
            state.cartCovers = action.payload;
        },
        removeCartCovers:(state)=>{
            state.cartCovers  = null;                    
        }
    }

})

export const { setWalletAddressRedux, removeWalletAddressRedux,setCartCoversRedux,removeCartCovers} = walletSlice.actions;
export const selectWalletAddress = (state) => state.wallet.walletAddress;
export const selectCartCovers = (state) => state.wallet.cartCovers;

export default walletSlice.reducer;