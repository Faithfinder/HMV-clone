import produce from "immer";

import { orders } from "src/types/state/actions";
import Order from "src/types/state/Order";

const initialState = new Order();

export default produce((draft, { type, payload, error }) => {
    if (error) return;
    switch (type) {
        case orders.setCurrentOrderItems:
            draft.items = payload;
            draft.total = payload.reduce(
                (total, item) => (total += item.amount * item.price),
                0
            );
            return;
        case orders.setCurrentOrderPersonalDetails:
            draft.email = payload.email;
            draft.user = payload.userId;
            return;
        default:
            return draft;
    }
}, initialState);
