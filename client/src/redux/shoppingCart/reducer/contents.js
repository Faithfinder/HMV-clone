import orders from "src/redux/orders/types";
import cart from "src/redux/shoppingCart/types";
import auth from "src/redux/auth/types";

export default (state = {}, { type, payload, error }) => {
    if (error) return state;
    switch (type) {
        case cart.setResponse:
            return payload;
        case cart.checkResponse:
            return payload.cart;
        case auth.logOutResponse:
        case orders.createOrderResponse:
            return {};
        default:
            return state;
    }
};
