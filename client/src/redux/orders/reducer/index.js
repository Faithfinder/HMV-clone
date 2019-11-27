import { combineReducers } from "redux";
import refreshing from "src/redux/orders/reducer/refreshing";
import currentOrder from "src/redux/orders/reducer/currentOrder";
import byId from "src/redux/orders/reducer/byId";

export default combineReducers({ currentOrder, byId, refreshing });
