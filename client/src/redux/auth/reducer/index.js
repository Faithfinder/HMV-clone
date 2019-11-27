import { combineReducers } from "redux";
import user from "src/redux/auth/reducer/user";
import refreshing from "src/redux/auth/reducer/refreshing";

export default combineReducers({ refreshing, user });
