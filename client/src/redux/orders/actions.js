import { createAction } from "redux-actions";

import { emptyCart } from "src/redux/shoppingCart/actions";
import orders from "src/redux/orders/types";
import ordersBackend from "src/services/backend/orders";

export const setCurrentOrderItems = cartContents => {
    return {
        type: orders.setCurrentOrderItems,
        payload: cartContents.map(({ image, ...item }) => item)
    };
};

export const setCurrentOrderPersonalDetails = (email, userId) => {
    return {
        type: orders.setCurrentOrderPersonalDetails,
        payload: { email, userId }
    };
};

export const createOrder = order => async dispatch => {
    let payload;
    dispatch({ type: orders.createOrderRequest });
    try {
        payload = await ordersBackend.createOrder(order);
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(orders.createOrderResponse)(payload));
    dispatch(emptyCart());
};
