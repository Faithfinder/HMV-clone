import { combineReducers } from "redux";
import authentication from "src/reducers/authentication";
import socket from "src/reducers/socket";
import shoppingCart from "src/reducers/shoppingCart";
import items from "src/reducers/items";
import ui from "src/reducers/ui";

export default combineReducers({
    authentication,
    socket,
    shoppingCart,
    items,
    ui
});
