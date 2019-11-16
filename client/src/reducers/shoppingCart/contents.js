import { cart, user, orders } from "src/types/state/actions";

export default (state = {}, { type, payload, error }) => {
    if (error) return state;
    switch (type) {
        case cart.setResponse:
        case cart.checkResponse:
            return payload;
        case user.logOutResponse:
        case orders.createOrderResponse:
            return {};
        default:
            return state;
    }
};
