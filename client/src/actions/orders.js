import { orders } from "src/types/state/actions";
import store from "src/store";

export const setCurrentOrderItems = () => {
    const currentCart = Object.values(store.getState().shoppingCart.contents);
    return {
        type: orders.setCurrentOrderItems,
        payload: currentCart
    };
};

export const setCurrentOrderEmail = email => {
    return {
        type: orders.setCurrentOrderEmail,
        payload: email
    };
};
