import { combineReducers } from "redux";
import authentication from "src/redux/auth/reducer";
import socket from "src/reducers/socket";
import shoppingCart from "src/redux/shoppingCart/reducer";
import items from "src/redux/items/reducer";
import ui from "src/redux/ui/reducer";
import orders from "src/reducers/orders";

export default combineReducers({
    authentication,
    socket,
    shoppingCart,
    orders,
    items,
    ui
});
