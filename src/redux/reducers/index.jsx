import { combineReducers } from "redux";
import userSlice from "../app/userSlice";
import authSlice from "../app/authSlice";
import formSlice from "../app/formSlice";

//  Combine les reducers en une application
const rootReducer = combineReducers({
    login : authSlice,
    formulaire : formSlice,
    userInfo: userSlice
});

export default rootReducer;