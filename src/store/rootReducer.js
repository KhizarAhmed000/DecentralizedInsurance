import { combineReducers } from "@reduxjs/toolkit";
// import SaveData from "./reducer/addReduer";
import walletAddressReduces from "./WalletAddress"

const rootReducer = combineReducers({
    wallet:walletAddressReduces
});

export default rootReducer;