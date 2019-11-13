import { combineReducers } from "redux";
import refreshing from "src/reducers/orders/refreshing";
import currentOrder from "src/reducers/orders/currentOrder";

export default combineReducers({ currentOrder, refreshing });
