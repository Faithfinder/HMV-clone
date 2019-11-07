import {
    CART_ADD_REQUEST,
    CART_ADD_RESPONSE,
    CART_CHECK_REQUEST,
    CART_CHECK_RESPONSE
} from "./types";
import axios from "axios";

export const addToCart = item => async (dispatch, getState) => {
    const updatedCart = putItemIntoCart(getState, item);
    let errored = false;
    let payload;
    try {
        dispatch({ type: CART_ADD_REQUEST });
        const response = await axios.put("/api/cart", { cart: updatedCart });
        if (response.status === 200) {
            payload = response.data;
        } else {
            errored = true;
            payload = new Error(`Couldn't add to cart: ${response.statusText}`);
        }
    } catch (error) {
        errored = true;
        payload = error;
    }
    dispatch({ type: CART_ADD_RESPONSE, payload, error: errored });
};

function putItemIntoCart(getState, item) {
    const currentCart = { ...getState().shoppingCart.contents };
    if (currentCart[item._id]) {
        currentCart[item._id].amount++;
    } else {
        currentCart[item._id] = { id: item._id, amount: 1 };
    }
    return currentCart;
}

export const checkCart = () => async dispatch => {
    let errored = false;
    let payload;
    try {
        dispatch({ type: CART_CHECK_REQUEST });
        const response = await axios.get("/api/cart");
        if (response.status === 200) {
            payload = response.data;
        } else {
            errored = true;
            payload = new Error(
                `Couldn't get cart from server: ${response.statusText}`
            );
        }
    } catch (error) {
        errored = true;
        payload = error;
    }
    dispatch({ type: CART_CHECK_RESPONSE, payload, error: errored });
};
