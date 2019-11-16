import { orders } from "src/types/state/actions";

export const setCurrentOrderItems = cartContents => {
    return {
        type: orders.setCurrentOrderItems,
        payload: cartContents.map(({ image, ...item }) => item)
    };
};

export const setCurrentOrderEmail = email => {
    return {
        type: orders.setCurrentOrderEmail,
        payload: email
    };
};
