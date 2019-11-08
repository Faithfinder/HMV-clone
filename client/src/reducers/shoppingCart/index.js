import { combineReducers } from "redux";
import contents from "./contents";
import refreshing from "./refreshing";

export default combineReducers({ contents, refreshing });
