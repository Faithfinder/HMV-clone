import { combineReducers } from "redux";
import authentication from "./authentication";
import socket from "./socket";
import shoppingCart from "./shoppingCart";
import items from "./items";
import ui from "./ui";

export default combineReducers({
    authentication,
    socket,
    shoppingCart,
    items,
    ui
});
