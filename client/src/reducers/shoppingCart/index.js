import { combineReducers } from "redux";
import contents from "src/reducers/shoppingCart/contents";
import refreshing from "src/reducers/shoppingCart/refreshing";

export default combineReducers({ contents, refreshing });
