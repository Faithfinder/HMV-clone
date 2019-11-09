import {
    CART_SET_REQUEST,
    CART_SET_RESPONSE,
    CART_CHECK_REQUEST,
    CART_CHECK_RESPONSE,
    CART_EMPTY,
    ITEMS_FETCH_REQUEST,
    ITEMS_FETCH_RESPONSE
} from "./types";
import axios from "axios";
import { batch } from "react-redux";

export const addToCart = itemId => async (dispatch, getState) => {
    const updatedCart = putItemIntoCart(getState, itemId);
    await setCartOnServer(dispatch, updatedCart);
};

export const setCartAmount = (itemId, amount) => async (dispatch, getState) => {
    const updatedCart = changeAmountInCart(getState, itemId, amount);
    await setCartOnServer(dispatch, updatedCart);
};

const putItemIntoCart = (getState, itemId) => {
    const currentCart = { ...getState().shoppingCart.contents };
    if (currentCart[itemId]) {
        currentCart[itemId].amount++;
    } else {
        currentCart[itemId] = { id: itemId, amount: 1 };
    }
    return currentCart;
};

const changeAmountInCart = (getState, itemId, amount) => {
    const currentCart = { ...getState().shoppingCart.contents };
    if (amount) {
        currentCart[itemId] = { id: itemId, amount: amount };
    } else {
        delete currentCart[itemId];
    }
    return currentCart;
};

async function setCartOnServer(dispatch, updatedCart) {
    let errored = false;
    let payload;
    try {
        dispatch({ type: CART_SET_REQUEST });
        const response = await axios.put("/api/cart", { cart: updatedCart });
        if (response.status === 200) {
            payload = response.data;
        } else {
            errored = true;
            payload = new Error(
                `Couldn't sync cart with server: ${response.statusText}`
            );
        }
    } catch (error) {
        errored = true;
        payload = error;
    }
    dispatch({ type: CART_SET_RESPONSE, payload, error: errored });
}

export const checkCart = () => async dispatch => {
    let errored = false;
    let cartPayload;
    let itemsPayload;
    try {
        batch(() => {
            dispatch({ type: CART_CHECK_REQUEST });
            dispatch({ type: ITEMS_FETCH_REQUEST });
        });

        const response = await axios.get("/api/cart");
        if (response.status === 200) {
            cartPayload = response.data.cart;
            itemsPayload = response.data.items;
        } else {
            errored = true;
            const error = new Error(
                `Couldn't get cart from server: ${response.statusText}`
            );
            cartPayload = error;
            itemsPayload = error;
            cartPayload = error;
        }
    } catch (error) {
        errored = true;
        cartPayload = error;
    }
    dispatch({
        type: ITEMS_FETCH_RESPONSE,
        payload: itemsPayload,
        error: errored
    });
    dispatch({
        type: CART_CHECK_RESPONSE,
        payload: cartPayload,
        error: errored
    });
};

export const emptyCart = () => {
    return {
        type: CART_EMPTY
    };
};
