import { combineReducers } from "redux";
import refreshing from "src/reducers/orders/refreshing";
import currentOrder from "src/reducers/orders/currentOrder";
import byId from "src/reducers/orders/byId";

export default combineReducers({ currentOrder, byId, refreshing });
