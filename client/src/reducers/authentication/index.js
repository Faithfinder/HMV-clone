import { combineReducers } from "redux";
import user from "src/reducers/authentication/user";
import refreshing from "src/reducers/authentication/refreshing";

export default combineReducers({ refreshing, user });
