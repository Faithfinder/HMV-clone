import produce from "immer";
import store from "src/store";

import { orders } from "src/types/state/actions";
import Order from "src/types/state/Order";

const initialState = new Order();

export default produce((draft, { type, payload, error }) => {
    switch (type) {
        case orders.setCurrentOrderItems:
            draft.items = payload;
            return;
        default:
            return draft;
    }
}, initialState);
