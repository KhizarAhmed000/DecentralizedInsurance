import { combineReducers } from "@reduxjs/toolkit";
// import SaveData from "./reducer/addReduer";
import walletAddressReduces from "./WalletAddress"
import adminReduces from "./Admin"
import coverReduces from "./Cover"

const rootReducer = combineReducers({
    wallet:walletAddressReduces,
    admin:adminReduces,
    cover:coverReduces
});

export default rootReducer;