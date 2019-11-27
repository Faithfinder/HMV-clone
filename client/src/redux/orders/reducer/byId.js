import produce from "immer";

import orders from "src/redux/orders/types";

const initialState = {};

export default produce((draft, { type, payload, error }) => {
    if (error) return;
    switch (type) {
        case orders.createOrderResponse:
            draft[payload._id] = payload;
            return;
        default:
            return draft;
    }
}, initialState);
