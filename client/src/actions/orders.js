import { orders } from "src/types/state/actions";

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
