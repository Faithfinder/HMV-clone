import { combineReducers } from "redux";
import user from "./user";
import refreshing from "./refreshing";

export default combineReducers({ refreshing, user });
