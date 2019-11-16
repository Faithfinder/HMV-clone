import { orders } from "src/types/state/actions";

export const setCurrentOrderItems = cartContents => {
    return {
        type: orders.setCurrentOrderItems,
        payload: cartContents.map(({ image, ...item }) => item)
    };
};

export const setCurrentOrderPersonalData = (email, userId) => {
    return {
        type: orders.setCurrentOrderPersonalData,
        payload: { email, userId }
    };
};
