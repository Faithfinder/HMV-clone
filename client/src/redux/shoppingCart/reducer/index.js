import { combineReducers } from "redux";
import contents from "src/redux/shoppingCart/reducer/contents";
import refreshing from "src/redux/shoppingCart/reducer/refreshing";

export default combineReducers({ contents, refreshing });
