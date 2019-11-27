import { combineReducers } from "redux";
import authentication from "src/redux/auth/reducer";
import shoppingCart from "src/redux/shoppingCart/reducer";
import items from "src/redux/items/reducer";
import ui from "src/redux/ui/reducer";
import orders from "src/redux/orders/reducer";

export default combineReducers({
    authentication,
    shoppingCart,
    orders,
    items,
    ui
});
