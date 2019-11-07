import { CART_ADD_REQUEST, CART_ADD_RESPONSE } from "./types";
import axios from "axios";

export const addToCart = item => async (dispatch, getState) => {
    const currentCart = { ...getState().shoppingCart };
    if (currentCart[item._id]) {
        currentCart[item._id].amount++;
    } else {
        currentCart[item._id] = { id: item._id, amount: 1 };
    }
    let errored = false;
    let payload;
    try {
        dispatch({ type: CART_ADD_REQUEST });
        const response = await axios.put("/api/cart", { cart: currentCart });
        payload = response.data;
    } catch (error) {
        errored = true;
        payload = error;
    }
    dispatch({ type: CART_ADD_RESPONSE, payload, error: errored });
};
