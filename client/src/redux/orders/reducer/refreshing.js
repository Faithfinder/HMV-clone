import orders from "src/redux/orders/types";

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
