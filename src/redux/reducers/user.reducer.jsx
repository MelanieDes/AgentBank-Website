import { combineReducers } from "redux";
import userSlice from "../app/userSlice";
import authSlice from "../app/authSlice";

const rootReducer = combineReducers({
    login : authSlice,
    userInfo: userSlice
});

export default rootReducer;