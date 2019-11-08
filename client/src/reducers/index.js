import { combineReducers } from "redux";
import user from "./user";
import socket from "./socket";
import shoppingCart from "./shoppingCart";
import items from "./items";

export default combineReducers({ user, socket, shoppingCart, items });
