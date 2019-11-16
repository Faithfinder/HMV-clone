import { orders } from "src/types/state/actions";

export default (state = false, { type }) => {
    switch (type) {
        case orders.createOrderRequest:
            return true;
        case orders.createOrderResponse:
            return false;
        default:
            return state;
    }
};
